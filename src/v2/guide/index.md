---
title: Introduzione
type: guide
order: 2
---

## Cos'è Vue.js?

Vue (pronunciato /vjuː/, like **view**) è un **framework progressivo** per costruire interfacce utente. A differenza di altri framework monolitici, Vue è progettato da zero per essere incrementalmente utilizzabile. La libreria principale è focalizzata solo sul livello di visualizzazione ed è facile da integrare con altre librerie o progetti esistenti. D'altra parte, Vue è anche perfettamente in grado di alimentare sofisticate applicazioni a pagina singola quando utilizzato in combinazione con [strumenti moderni](single-file-components.html) e [librerie di supporto](https://github.com/vuejs/awesome-vue#components--libraries).

Se sei uno sviluppatore di frontend esperto e vuoi vedere un confronto tra Vue e altre librerie/framework, dai un'occhiata a [Confronto con altri Framework](comparison.html).

## Inizia

<p class="tip">La guida ufficiale presuppone la conoscenza di un livello intermedio di HTML, CSS e JavaScript. Se sei totalmente nuovo nello sviluppo del frontend, potrebbe non essere la migliore idea partire direttamente con un framework come primo passo: impara le basi e poi tornare indietro! Le precedenti esperienze con altri framework aiutano, ma non sono necessarie.</p>

Il modo più facile per provare Vue.js è usare [l'esempio Hello World di JSFiddle](https://jsfiddle.net/chrisvfritz/50wL7mdz/). Sentiti libero di aprirlo in un'altra scheda e di seguirlo mentre passiamo attraverso alcuni esempi di base. Oppure puoi <a href="https://gist.githubusercontent.com/chrisvfritz/7f8d7d63000b48493c336e48b3db3e52/raw/ed60c4e5d5c6fec48b0921edaed0cb60be30e87c/index.html" target="_blank" download="index.html">creare un file <code>index.html</code></a> ed includere Vue così:

``` html
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```

La pagina [Installazione](installation.html) mostra più modi per installare Vue. Nota: **Non** consigliamo ai principianti di iniziare con `vue-cli`, specialmente se non hai familiarità con strumenti basati su Node.js.

## Rendering dichiarativo

Al centro di Vue.js c'è un sistema che permette al DOM di mostrare i dati in modo dichiarativo usando una semplice sintassi di template:

``` html
<div id="app">
  {{ message }}
</div>
```
``` js
var app = new Vue({
  el: '#app',
  data: {
    message: 'Ciao Vue!'
  }
})
```
{% raw %}
<div id="app" class="demo">
  {{ message }}
</div>
<script>
var app = new Vue({
  el: '#app',
  data: {
    message: 'Ciao Vue!'
  }
})
</script>
{% endraw %}

Abbiamo così creato la nostra prima app Vue! Tutto ciò è molto simile al rendering di una stringa template, ma intanto Vue ha fatto molto lavoro sotto il cofano. I dati e il DOM adesso sono collegati, e ogni cosa adesso è **reattiva**. Come lo sappiamo? Apri la console JavaScript del tuo browser (in questo momento, in questa pagina) e imposta a `app.message` un diverso valore. Dovresti vedere l'esempio mostrato sopra aggiornarsi di conseguenza.

Oltre all'interpolazione del testo, possiamo anche associare attributi così:

``` html
<div id="app-2">
  <span v-bind:title="message">
    Punta il mouse sopra di me per alcuni secondi
    per vedere il mio titolo dinamico
  </span>
</div>
```
``` js
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'Hai caricato questa pagina il ' + new Date().toLocaleString()
  }
})
```
{% raw %}
<div id="app-2" class="demo">
  <span v-bind:title="message">
    Punta il mouse sopra di me per alcuni secondi
    per vedere il mio titolo dinamico
  </span>
</div>
<script>
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'Hai caricato questa pagina il ' + new Date().toLocaleString()
  }
})
</script>
{% endraw %}

Qui abbiamo incontrato qualcosa di nuovo. L'attributo `v-bind` che vedi è chiamato **direttiva**. Le direttive hanno come prefisso `v-` per indicare che sono attributi speciali forniti da Vue, e come avrai intuito, esse applicano dei comportamenti dinamici al DOM renderizzato. In questo caso dice semplicemente "mantenere aggiornato l'attributo `title` di questo elemento con la proprietà` message` dell'istanza Vue".

Se apri la tua console Javascript e inserisci `app2.message = 'un altro nuovo messaggio'`, vedrai che l'attributo `title` è stato aggiornato.

## Costrutti condizionali e cicli

E' facile anche modificare la presenza di un elemento:

``` html
<div id="app-3">
  <span v-if="seen">Ora mi vedi</span>
</div>
```

``` js
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})
```

{% raw %}
<div id="app-3" class="demo">
  <span v-if="seen">Ora mi vedi</span>
</div>
<script>
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})
</script>
{% endraw %}

Prosegui e inserisci `app3.seen = false` nella console. Dovresti vedere il messaggio scomparire.

L'esempio dimostra che possiamo legare dati non solamenente a testo e attributi, ma anche alla **struttura** del DOM. Inoltre, Vue dispone anche di un potente sistema di effetti di transizione che automaticamente applica degli [effetti](transitions.html) quando gli elementi sono inseriti/aggiornati/rimossi da Vue.

Ci sono un po' di altre direttive, ognuna delle quali con la propria funzionalità. Per esempio il la direttiva `v-for` che può essere usata per mostrare una lista di elementi usando i dati che provengono da un Array:

``` html
<div id="app-4">
  <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>
</div>
```
``` js
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Imparare Javascript' },
      { text: 'Imparare Vue' },
      { text: 'Costruire qualcosa di bello' }
    ]
  }
})
```
{% raw %}
<div id="app-4" class="demo">
  <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>
</div>
<script>
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Imparare Javascript' },
      { text: 'Imparare Vue' },
      { text: 'Costruire qualcosa di bello' }
    ]
  }
})
</script>
{% endraw %}

Nelle console, inserisci `app4.todos.push({ text: 'Nuovo elemento' })`. Dovresti vedere un nuovo elemento aggiunto alla lista.

## Gestire gli input dell'utente

Per lasciare gli utenti interagire con la tua app, si può usare la direttiva `v-on` per aggiungere un evento che invochi i metodi sulle nostre istanze di Vue:


``` html
<div id="app-5">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">Messaggio inverso</button>
</div>
```
``` js
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Ciao Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
```
{% raw %}
<div id="app-5" class="demo">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">Messaggio inverso</button>
</div>
<script>
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Ciao Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
</script>
{% endraw %}

Nota che in questo metodo abbiamo aggiornato lo stato della nostra app senza toccare il DOM - tutte le manipolazioni DOM sono gestite da Vue, e il codice che scrivi è focalizzato su questa logica.

Vue inoltre dispone della direttiva `v-model` che lega gli input di un form con lo stato dell'app:


``` html
<div id="app-6">
  <p>{{ message }}</p>
  <input v-model="message">
</div>
```
``` js
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Ciao Vue!'
  }
})
```
{% raw %}
<div id="app-6" class="demo">
  <p>{{ message }}</p>
  <input v-model="message">
</div>
<script>
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Ciao Vue!'
  }
})
</script>
{% endraw %}

## Composizione tramite Componenti

Il sistema di componenti è un altro concetto importante in Vue, in quanto è un'astrazione che permette di costruire applicazioni di larga scala composte da componenti piccoli e molte volte riutilizzabili. Se ci pensiamo, quasi ogni tipo d'interfaccia applicativa può essere astratta in un albero di componenti:

![Albero di componenti](/images/components.png)

In Vue, un componente è essenzialmente un'istanza di Vue con opzioni predefinite. Registrare un componente in Vue è veloce:


``` js
// Definizione di un nuovo componente chiamato todo-item
Vue.component('todo-item', {
  template: '<li>Questa è un elemento</li>'
})
```

Adesso puoi aggiungerlo all'interno del template di un'altro componente:

``` html
<ol>
  <!-- Crea un'istanza del componente todo-item -->
  <todo-item></todo-item>
</ol>
```

Facendo questo si stamperà lo stesso testo per ogni `todo-item`, il che non è molto interessante. Dovremmo essere in grado di passare dati dall'istanza padre al componente figlio. Modifichiamo la definizione del componente in modo tale che accetti una [prop](components.html#Props) (o "proprietà"):


``` js
Vue.component('todo-item', {
  // Il componente todo-item ora accetta una
  // "prop", la quale è simile ad un attributo.
  // Questa prop è chiamata todo.
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
```

Ora è possibile passare del testo per ogni componente ripetuto usando il `v-bind`

``` html
<div id="app-7">
  <ol>
    <!--
      Ora forniamo ogni todo-item dell'oggetto todo che rappresenta, 
      in modo che il suo contenuto possa essere dinamico. 
      Inoltre, dobbiamo fornire a ciascun componente una "chiave" 
      la quale verrà spiegata in seguito.
    -->
    <todo-item
      v-for="item in groceryList"
      v-bind:todo="item"
      v-bind:key="item.id">
    </todo-item>
  </ol>
</div>
```
``` js
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Verdure' },
      { id: 1, text: 'Formaggio' },
      { id: 2, text: 'Qualsiasi altra cosa che gli umani possano mangiare' }
    ]
  }
})
```
{% raw %}
<div id="app-7" class="demo">
  <ol>
    <todo-item v-for="item in groceryList" v-bind:todo="item" :key="item.id"></todo-item>
  </ol>
</div>
<script>
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Verdure' },
      { id: 1, text: 'Formaggio' },
      { id: 2, text: 'Qualsiasi altra cosa che gli umani possano mangiare' }
    ]
  }
})
</script>
{% endraw %}

Questo è un esempio inventato, ma siamo riusciti a separare la nostra app in due unità più piccole, e il figlio è separato dal componente genitore tramite un'interfaccia di prop. Ora possiamo migliorare ulteriormente il nostro componente `<todo-item>` con template e logica più complessa senza interessarre il componente genitore.

In a large application, it is necessary to divide the whole app into components to make development manageable. We will talk a lot more about components [later in the guide](components.html), but here's an (imaginary) example of what an app's template might look like with components:

In grandi applicazioni, è necessario dividere l'intera app in componenti per rendere lo sviluppo più agevole. Parleremo molto di più riguardo ai componenti [più avanti nella guida](components.html), ma qui c'è un esempio (immaginario) di come potrebbe essere il modello di un'app che utilizza i componenti:

``` html
<div id="app">
  <app-nav></app-nav>
  <app-view>
    <app-sidebar></app-sidebar>
    <app-content></app-content>
  </app-view>
</div>
```

### Relation to Custom Elements

You may have noticed that Vue components are very similar to **Custom Elements**, which are part of the [Web Components Spec](https://www.w3.org/wiki/WebComponents/). That's because Vue's component syntax is loosely modeled after the spec. For example, Vue components implement the [Slot API](https://github.com/w3c/webcomponents/blob/gh-pages/proposals/Slots-Proposal.md) and the `is` special attribute. However, there are a few key differences:

1. The Web Components Spec is still in draft status, and is not natively implemented in every browser. In comparison, Vue components don't require any polyfills and work consistently in all supported browsers (IE9 and above). When needed, Vue components can also be wrapped inside a native custom element.

2. Vue components provide important features that are not available in plain custom elements, most notably cross-component data flow, custom event communication and build tool integrations.

## Ready for More?

We've briefly introduced the most basic features of Vue.js core - the rest of this guide will cover them and other advanced features with much finer details, so make sure to read through it all!
