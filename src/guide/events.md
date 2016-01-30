---
title: Gestione degli Eventi e dei Metodi
type: guide
order: 9
---

## Gestione dei Metodi

Quando usiamo la direttiva `v-on` per ascoltare eventi provenienti dal DOM:

``` html
<div id="example">
  <button v-on:click="greet">Saluta</button>
</div>
```

Stiamo legando l'evento click al metodo `greet`. Ecco come poi definiamo il metodo internamente nella nostra istanza Vue:

``` js
var vm = new Vue({
  el: '#example',
  data: {
    name: 'Vue.js'
  },
  // Definiamo il metodo dentro l'oggetto `methods`
  methods: {
    greet: function (event) {
      // `this` punta all'istanza di Vue
      alert('Ciao ' + this.name + '!')
      // `event` è l'evento del DOM nativo
      alert(event.target.tagName)
    }
  }
})

// Puoi anche invocare i metodi direttamente via JavaScript
vm.greet() // -> 'Ciao Vue.js!'
```

Prova tu stesso:

{% raw %}
<div id="example" class="demo">
  <button v-on:click="greet">Saluta</button>
</div>
<script>
var vm = new Vue({
  el: '#example',
  data: {
    name: 'Vue.js'
  },
  // Definiamo il metodo dentro l'oggetto `methods`
  methods: {
    greet: function (event) {
      // `this` punta all'istanza di Vue
      alert('Ciao ' + this.name + '!')
      // `event` è l'evento del DOM nativo
      alert(event.target.tagName)
    }
  }
})
</script>
{% endraw %}

## Gestione degli eventi Inline

Invece di legare il metodo direttamente tramite il nome, possiamo utilizzare la sintassi inline di JavaScript:

``` html
<div id="example-2">
  <button v-on:click="say('ciao')">Di Ciao</button>
  <button v-on:click="say('cosa')">Di Cosa</button>
</div>
```
``` js
new Vue({
  el: '#example-2',
  methods: {
    say: function (msg) {
      alert(msg)
    }
  }
})
```

Result:
{% raw %}
<div id="example-2">
  <button v-on:click="say('ciao')">Di Ciao</button>
  <button v-on:click="say('cosa')">Di Cosa</button>
</div>
<script>
new Vue({
  el: '#example-2',
  methods: {
    say: function (msg) {
      alert(msg)
    }
  }
})
</script>
{% endraw %}

Come le espressioni inline, anche la gestione degli eventi è limitata ad **una sola dichiarazione**.

A volte abbiamo bisogno di accedere all evento originale scaturito dal DOM anche negli eventi gestiti inline, per farlo esiste una variabile speciale `$event`:

``` html
<button v-on:click="say('Ciao!', $event)">Invia</button>
```

``` js
// ...
methods: {
  say: function (msg, event) {
    // Ora abbiamo accesso all evento nativo
    event.preventDefault()
  }
}
```

## Modificatori degli Eventi

Quando diventa comune chiamare `event.preventDefault()` o `event.stopPropagation()` all interno di un metodo, anche se possiamo continuare a farlo, è conveniente spostare tale logica nel DOM, dato che si tratta di dettagli su come il DOM deve comportarsi allo scaturirsi di un tale evento.

Per risolvere questo problema, Vue.js fornisce degli **Modificatori di Eventi** per `v-on`: `.prevent` e `.stop`. Per richiamarli semplicemente vanno aggiungi dopo l'evento che si sta invocando, prefissati da un punto:

``` html
<!-- La propagazione del evento click verrà stoppata -->
<a v-on:click.stop="doThis"></a>

<!-- Il submit del form non ricaricherà la pagina -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- I modificatori possono essere concatenati -->
<a v-on:click.stop.prevent="doThat">

<!-- Si può usare solo il motidicatore -->
<form v-on:submit.prevent></form>
```

Nella versione v1.0.16 sono stati aggiunti due mofidicatori:

``` html
<!-- Usate la modalità cattura per aggiungere un event listenere -->
<div v-on:click.capture="doThis">...</div>

<!-- Attivate l'evento solo se event.target è l'elemento stesso -->
<!-- per esempio non viene attivato da un componente figlio-->
<div v-on:click.self="doThat">...</div>
```

## Modificatorio per i Tasti

Quando si ascolta per degli eventi dalla tastiera, abbiamo bisogno di sapere quale tasto è stato premuto. Vue.js offre un modificatore per `v-on` per quando si ascoltano gli eventi da tastiera:

``` html
<!-- Chiama il submit solo se il tasto premuto è uguale al KeyCode 13 -->
<input v-on:keyup.13="submit">
```

Ricordarsi tutti i Codici dei tasti è un disastro, per questo Vue.js fornisce degli alias per quelli più utilizzati:

``` html
<!-- Come prima -->
<input v-on:keyup.enter="submit">

<!-- Funzionano pure con le scorciatoie -->
<input @keyup.enter="submit">
```

Ecco una lista completa di tutti gli alias:

- enter
- tab
- delete
- esc
- space
- up
- down
- left
- right

In aggiunta, gli alias per le lettere singole sono supportati dalla versione 1.0.8 in poi.

## Perchè ascoltare gli eventi via HTML?

Forse sarete preoccupati a vedere tutti questi eventi ascoltati tramite direttive via HTML, potrebbe sembrare che stessimo violando la vecchia regola di "Separazione dei compiti". Non vi preoccupate - perchè tutta la gestione Vue.js la lega alla vista corrente, non ci sono difficoltà nello scalare e mantenere questa mentalità che deriva dall approcio del ViewModel. Difatti ci sono tre vantaggi nell utilizzo di `v-on`:

1. Rendere più facile capire quali metodi in JavaScript gestiscono quali eventi nel template HTML.

2. Visto che non dovete legare manualmente la logica di ascolto degli eventi, il vostro codice sarà libero da qualsiasi tag HTML o logica del DOM. Avrete JavaScript più facile da testare.

3. Quando un ViewModel viene eliminato, tutti gli eventi ascoltati verranno automaticamente rimossi, non dovrete preoccuparvi di fare voi pulizia.
