---
title: Direttive Personalizzate
type: guide
order: 14
---

## Introduzione

In aggiunta alle varie direttive disponibili di default, Vue.js vi permette di registrare direttive personalizzate. Le direttive personalizzate forniscono dei meccanismi per mappare i cambiamenti dei dati in base ai comportamenti del DOM.

Potete registrare direttive personalizzate tramite il metodo globale `Vue.directive(id, definition)`, passandogli un **identificativo** seguito da un **oggetto** che definisce la direttiva stessa. La registrazione delle direttive può essere fatta anche localmente ad un componente tramite l'opzione
`directives`.

### Funzioni

L'oggetto che definisce una direttiva può implementare diverse funzioni di default (tutte facoltative):

- **bind**: chiamata una sola volta, quando la direttiva è legata ad un elemento del DOM.

- **update**: chiamata inzialmente subito dopo `bind` con il valore iniziale, successivamente viene chiamata ad ogni cambiamento dei dati. Gli argomenti sono il valore precedente e nuovo.

- **unbind**: chiamata una sola volta, quando la direttiva viene slegata dall elemento del DOM.

**Esempio**

``` js
Vue.directive('my-directive', {
  bind: function () {
    // preparazione della direttiva
    // per esempio aggiungere degli eventi, o calcoli dispendiosi
    // che hanno bisogno solo di una singola chiamata
  },
  update: function (newValue, oldValue) {
    // Logica da implementare per quando si aggiorna il valore
  },
  unbind: function () {
    // Di solito usata per fare pulizia
  }
})
```

Una volta registrata la si può usare come una direttiva normalissima, (ricordatevi di aggiungere il prefisso `v-`):

``` html
<div v-my-directive="someValue"></div>
```

Quando vi serve solo la funzione `update`, potete usare questa scorciatoia:

``` js
Vue.directive('my-directive', function (value) {
  // Qui si implementa solo l'update
})
```

### Proprietà di Istanza delle Direttive

Tutte le funzioni, i metodi, di base verranno copiati **nell oggetto della direttiva**, il quale permetterà l'accesso a tali metodi tramite il contesto `this`. Una direttiva istanziata espone alcune importanti ed utili proprietà:

- **el**: l'elemento al quale la direttiva è legato, elemento del DOM.
- **vm**: il contesto, il ViewModel, che gestisce la direttiva corrente.
- **expression**: l'espressione usata per il vincolo dei dati, escludendo filtri ed argomenti.
- **arg**: gli argomenti, se presenti.
- **name**: il nome della direttiva, senza prefisso `v-`.
- **modifiers**: un oggetto che contiene i modificatori di istanza, se ci sono.
- **descriptor**: un oggetto che contiene il parse di tutta la direttiva.
- **params**: un oggetto che contiene gli attributi. [Spigati più avanti](#params).

<p class="tip">Dovreste veramente trattare tutte le proprietà come properità di sola lettura e mai modificarne lo stato. Potete creare nuove proprietà interne alla direttiva, prestate attenzione a non modificare lo stato delle altre.</p>

Un esempio di una direttiva personalizzata che usa qualche proprietà vista:

``` html
<div id="demo" v-demo:hello.a.b="msg"></div>
```

``` js
Vue.directive('demo', {
  bind: function () {
    console.log('demo legata!')
  },
  update: function (value) {
    this.el.innerHTML =
      'name - '       + this.name + '<br>' +
      'expression - ' + this.expression + '<br>' +
      'argument - '   + this.arg + '<br>' +
      'modifiers - '  + JSON.stringify(this.modifiers) + '<br>' +
      'value - '      + value
  }
})
var demo = new Vue({
  el: '#demo',
  data: {
    msg: 'Ciao!'
  }
})
```

**Risultato**

<div id="demo" v-demo:hello.a.b="msg"></div>
<script>
Vue.directive('demo', {
  bind: function () {
    console.log('demo legata!')
  },
  update: function (value) {
    this.el.innerHTML =
      'name - ' + this.name + '<br>' +
      'expression - ' + this.expression + '<br>' +
      'argument - ' + this.arg + '<br>' +
      'modifiers - '  + JSON.stringify(this.modifiers) + '<br>' +
      'value - ' + value
  }
})
var demo = new Vue({
  el: '#demo',
  data: {
    msg: 'Ciao!'
  }
})
</script>

### Oggetti Dettagliato

Se la vostra direttiva personalizzata si aspetta più argomenti, potete passargli un oggetto dettagliato. Ricordatevi che le direttive accettano qualsiasi esperessione JavaScript valida:

``` html
<div v-demo="{ color: 'white', text: 'ciao!' }"></div>
```

``` js
Vue.directive('demo', function (value) {
  console.log(value.color) // "white"
  console.log(value.text) // "ciao!"
})
```

### Modificatore Literal

When a directive is used with the literal modifier, its attribute value will be interpreted as a plain string and passed directly into the `update` method. The `update` method will also be called only once, because a plain string cannot be reactive.

``` html
<div v-demo.literal="foo bar baz">
```
``` js
Vue.directive('demo', function (value) {
  console.log(value) // "foo bar baz"
})
```

### Element Directives

In alcuni casi, vorreste poter usare le vostre direttive personalizzate come elementi del DOM invece che come attributi di un elemento. Questo comportamento è molto simile alla nozione "E" delle direttive di Angular. Le direttive come elementi forniscono una struttura del DOM più pulita e leggibile, per registrare una direttiva come elemento dovete seguire questi semplici passaggi:

``` js
Vue.elementDirective('my-directive', {
  // Stesse API di una direttiva normale
  bind: function () {
    // manipola le proprietà
  }
})
```

Poi invece di questo:

``` html
<div v-my-directive></div>
```

Potete scrivere questo:

``` html
<my-directive></my-directive>
```

Le direttive come elementi non possono accettare argomenti ne espressioni, ma possono leggere i loro attributi per determinare eventuali comportamenti ed azioni.

La differenza più grossa rispetto alle direttive normali è che la direttiva come elemento è **finale** , il che significa che ogni volta che Vue incontra un elemento come direttiva, salterà completamente tale elemento - solo l elemento come direttiva è in grado di manipolare se stesso ed i suoi figli.

## Opzioni avanzate

### params

Le direttive personalizzate forniscon un interessante opzione chiamata `params`, la quale è un array e verrà interpretata da Vue come una lista di attributi da aggiungere all elemento al quale è legata la direttiva personalizzata. Per esempio:

``` html
<div v-example a="ciao"></div>
```
``` js
Vue.directive('example', {
  params: ['a'],
  bind: function () {
    console.log(this.params.a) // -> "ciao"
  }
})
```

Le API supportano anche gli attributi dinamici. Il valore di `this.params[key]` viene automaticamente tenuto aggiornato. In aggiunta, puoi specificare una funzione per ogni cambiamento di stato:

``` html
<div v-example v-bind:a="someValue"></div>
```
``` js
Vue.directive('example', {
  params: ['a'],
  paramWatchers: {
    a: function (val, oldVal) {
      console.log('a è cambiato!')
    }
  }
})
```

### deep

Se la vostra direttiva personalizzata si aspetta un oggetto, e deve sempre attivare la funzione `update` quando una proprietà interna all oggetto cambia, allora dovete attivare l'opzione `deep: true` internamente alla direttiva.

``` html
<div v-my-directive="obj"></div>
```

``` js
Vue.directive('my-directive', {
  deep: true,
  update: function (obj) {
    // verrà chiamato quando la proprietà obj cambia.
  }
})
```

### twoWay

Se la vostra direttiva si aspetta di scrivere dai dati all'istanza di Vue, dovete passare l'opzione `twoWay: true`. In questo modo permettete di usare `this.set(value)` internamente alla direttiva:

``` js
Vue.directive('example', {
  twoWay: true,
  bind: function () {
    this.handler = function () {
      // Passa i dati all'istanza
      // Se la direttiva è legata nel tipo v-example="a.b.c",
      // questo metodo cercherà di impostare `vm.a.b.c` con i valori passati
      this.set(this.el.value)
    }.bind(this)
    this.el.addEventListener('input', this.handler)
  },
  unbind: function () {
    this.el.removeEventListener('input', this.handler)
  }
})
```

### acceptStatement

Se passate `acceptStatement:true` abiliterete la direttiva personalizzata ad accettare espressione su riga singola come fa `v-on`:

``` html
<div v-my-directive="a++"></div>
```

``` js
Vue.directive('my-directive', {
  acceptStatement: true,
  update: function (fn) {
    // In questo caso update riceverà l'espression a++ e verrà
    // eseguita
  }
})
```

Usate questa funziona in modo saggio, generalmente dovreste evitare manipolazioni tramite template.

### priority

Potete aggiungere un numero di priorità per la vostra direttiva (di default è impostato a 1000). Una direttiva con una priorità più alta verrà processata prima delle altre dello stesso elemento. Le direttive con la priorità uguale, come quella di default, vengono processate in ordine di apparizione anche se l'ordine **non è garantito** per ogni browser.

Potete controllare la priorità per delle direttive integrate in Vue.js tramite [La DOC delle API](/api/#Directives). In aggiunta, le direttive `v-if` e `v-for` hanno sempre la più alta priorità durante la fase di processazione del DOM.
