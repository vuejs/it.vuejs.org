---
title: Rendering di Liste
type: guide
order: 8
---

## v-for

Possiamo usare la direttiva `v-for` per renderizzare una lista, o Array, di elementi. La direttiva `v-for` richiede una sintassi speciale sotto forma di `item in items`, dome `items` è la sorgente degli elementi, il vostro Array, e `item` è un **alias** per l'elemento iterato del vostro Array.

**Esempio:**

``` html
<ul id="example-1">
  <li v-for="item in items">
    {{ item.message }}
  </li>
</ul>
```

``` js
var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
```

**Risultato:**

{% raw %}
<ul id="example-1" class="demo">
  <li v-for="item in items">
    {{item.message}}
  </li>
</ul>
<script>
var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  },
  watch: {
    items: function () {
      smoothScroll.animateScroll(null, '#example-1')
    }
  }
})
</script>
{% endraw %}

Internamente al blocco `v-for` avrete accesso completo allo scope più esterno, in più avrete a disposizione una variabile speciale chiamata `$index` la quale, come probabilmente avrete capito, fornisce l'indice dell elemento corrente.

**Esempio:**

``` html
<ul id="example-2">
  <li v-for="item in items">
    {{ parentMessage }} - {{ $index }} - {{ item.message }}
  </li>
</ul>
```

``` js
var example2 = new Vue({
  el: '#example-2',
  data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
```

**Risultato:**

{% raw%}
<ul id="example-2" class="demo">
  <li v-for="item in items">
    {{ parentMessage }} - {{ $index }} - {{ item.message }}
  </li>
</ul>
<script>
var example2 = new Vue({
  el: '#example-2',
  data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  },
  watch: {
    items: function () {
      smoothScroll.animateScroll(null, '#example-2')
    }
  }
})
</script>
{% endraw %}

Alternativamente, potete specificare un nome alternativo per il vostro indice:

``` html
<div v-for="(index, item) in items">
  {{ index }} {{ item.message }}
</div>
```

A partire dalla v1.0.17 potete anche utilizzare `of` al posto di `in`,
il che rende la sintassi più simile ai cicli di iterazione nativi in JavaScript:

``` html
<div v-for="item of items"></div>
```

## Template v-for

Si può utilizzare il markup HTML `<template>`, come lo si usava con `v-if`, per renderizzare un blocco DOM in un unico `v-for`:

``` html
<ul>
  <template v-for="item in items">
    <li>{{ item.msg }}</li>
    <li class="divider"></li>
  </template>
</ul>
```

## Rilevamento delle Modifiche di un Array

### Metodi di Alterazione

Vue.js racchiude un Array in un oggetto che contiene dei metodi di Alterazione molto comodi, i quali comunicano direttamente con il DOM per eventuali cambiamenti. I metodi sono:

- `push()`
- `pop()`
- `shift()`
- `unshift()`
- `splice()`
- `sort()`
- `reverse()`

Puoi aprire la console e provare tu stesso l'esempio precedente con `items` è disponibile. Per esempio prova a scrivere `example1.items.push({ message: 'Baz' })`.

### Sostituire un Array

I Metdi di Alterazione, come il nome suggerisce, alterano l'Array originale il quale chiama questi metodi. Vi sono anche metodi che non alterano l'Array di origine, per esempio `filter()`, `concat()` e `slice()`, ma **creano sempre un nuovo Array**. Quando si lavora con questi metodi puoi rimpiazzare direttamente il vecchio Array con quello nuovo:

``` js
example1.items = example1.items.filter(function (item) {
  return item.message.match(/Foo/)
})
```

Potrete pensare che in questo modo Vue.js debba renderizzare di nuovo l'intera lista per aggiornare il DOM - fortunatamente non è così. Vue.js implementa della logica euristica per massimizzare il riutilizzo degli elementi nel DOM, perciò rimpiazzare un Array con un altro che contiene gli stessi elementi è un operazione molto efficente.

### track-by

In alcuni casi potreste aver bisogno di rimpiazzare un semplice Array con degli oggetti più complessi - per esempio un oggetto derivato da una chiamata API. Visto che `v-for` per definizione determina la riusabilità di uno specifico elemento del DOM in base ai suoi dati, il caso delle API potrebbe portare un redering ogni volta che si aggiorna la lista. Però, se la lista dei vostri oggetti può essere identificata da qualche properità univoca, come un id, allora potete usare l'attributo speciale `track-by` per specificare a Vue.js come poter riutilizzare gli elementi il più possibile.

Per esempio, se i dati assomigliano a quanto segue:

``` js
{
  items: [
    { _uid: '88f869d', ... },
    { _uid: '7496c10', ... }
  ]
}
```

Allora puoi utilizzare track-by:

``` html
<div v-for="item in items" track-by="_uid">
  <!-- content -->
</div>
```

Più tardi quando rimpiazzerai gli elementi in `items` Vue.js capirà se potrà riutilizzare gli oggetti in base al loro `_uid` senza dover renderizzare di nuovo il DOM per gli `_uid` specifici.

### track-by $index

Se non avete nessun tipo di proprietà univoca nei vostri elementi, allora potreste sfruttare `track-by="$index"`, il quale forzerà `v-for` in una sorta di stato di aggiornamento: tutti gli elementi dell'Array non possono più spostarti, vengono semplicemente aggiornati con eventuali nuovi valori prevenendo eventuali duplicazioni.

Questo rende l'aggiornamento degli elementi di un Array estremamente efficente, ma ad un compromesso. Dato che gli elementi dell'Array, e di conseguenza il DOM vincolato ad essi, non possono più muoversi eventuali cambi di stato degli elementi tra DOM ed Array potrebbero andare fuori sincronizzazione. Fate attenzione quando utilizzate `track-by="$index"` soprattutto se `v-for` contiene degi blocchi DOM come degli input.

### Attenzione

A causa delle limitazioni di JavaScript, Vue.js **non può** individuare i seguenti cambiamenti ad un Array:

1. Quando si imposta un elemento direttamente tramite l'indice, per esempio `vm.items[0] = {}`;
2. Quando modificate la grandezza di un Array, per esempio `vm.items.length = 0`.

Per risolvere il problema (1), Vue.js osserva gli Array utilizzando un metodo chiamato `$set()`:

``` js
// stesso esempio di `example1.items[0] = ...`
// ma scatena l'aggiornamento delle viste
example1.items.$set(0, { childMsg: 'Changed!'})
```

Per risolvere il problema (2), semplicemente sostituite `items` con un array vuoto.

Oltre a `$set()`, Vue.js implemente anche un comodo metodo chiamato `$remove()`, il quale cerca e rimuove gli elementi da un Array richiamando internamente il la funzione `splice()`. Perciò invece di:

``` js
var index = this.items.indexOf(item)
if (index !== -1) {
  this.items.splice(index, 1)
}
```

Puoi fare:

``` js
this.items.$remove(item)
```

## Oggetti e v-for

Potete anche utilizzare `v-for` per scorrere attraverso le properità di un Oggetto specifico. Oltre ad `$index`, ogni elemento avrà anche un'altra speciale properità `$key`.

**Esempio:**

``` html
<ul id="repeat-object" class="demo">
  <li v-for="value in object">
    {{ $key }} : {{ value }}
  </li>
</ul>
```

``` js
new Vue({
  el: '#repeat-object',
  data: {
    object: {
      Nome: 'John',
      Cognome: 'Doe',
      Anni: 30
    }
  }
})
```

**Risultato:**

{% raw %}
<ul id="repeat-object" class="demo">
  <li v-for="value in object">
    {{ $key }} : {{ value }}
  </li>
</ul>
<script>
new Vue({
  el: '#repeat-object',
  data: {
    object: {
      Nome: 'John',
      Cognome: 'Doe',
      Anni: 30
    }
  }
})
</script>
{% endraw %}

Potete anche aggiungere un nome alternativo per la vostra chiave:

``` html
<div v-for="(key, val) in object">
  {{ key }} {{ val }}
</div>
```

<p class="tip">Quando iterate un Oggetto, l'ordine delle chiavi è stabilito da come vengono interpretate da `Object.keys()`, tale processo **non** garantisce lo stesso orgine su tutti i motori JavaScript, il risultato può variare.</p>

## Range v-for

La direttiva `v-for` può anche utilizzare un numero intero, come un classico ciclo for. In questo caso il template verrà ripetuto n volte.

``` html
<div>
  <span v-for="n in 10">{{ n }} </span>
</div>
```

Risultato:

{% raw %}
<div id="range" class="demo">
  <span v-for="n in 10">{{ n }} </span>
</div>
<script>
new Vue({ el: '#range' })
</script>
{% endraw %}

## Visualizzare Risultati Filtrati/Ordinati

Qualche volta abbiamo solo bisogno di visualizzare un Array in modo ordinato, o con dei filtri, senza che quest'ultimo venga alterato o resettato ogni volta. Ci sono due opzioni per risolvere questo problema:

1. Creare una Properità Derivata che restituisce l'Array come lo vogliamo;
2. Usare i filtri integrati `filterBy` e `orderBy`.

Una Proprietà Derivata vi potrebbe dare un controllo più fine e corretto del risultato che vi aspettate e soprattutto è più facile espandere eventuali nuovi metodi di ordinamento o filtraggio; ma i filtri integrati sono comodi per un utilizzo più veloce per task comuni. Per maggiori dettagli sui filtri per gli Array consultate la [documentazione](/api/#filterBy).
