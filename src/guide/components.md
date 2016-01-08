---
title: Componenti
type: guide
order: 12
---

## Utilizzare i Componenti

### Registrazione

Nelle sezioni precedenti abbiamo imparato a costruire dei componenti personalizzati tramite il costruttore `Vue.extend()`:

``` js
var MyComponent = Vue.extend({
  // opzioni...
})
```

Per utilizzarlo come un componente, dovete **registrarlo** tramite la funzione `Vue.component(tag, constructor)`:

``` js
// Componente registrato a livello globale con il tag my-component
Vue.component('my-component', MyComponent)
```

<p class="tip">Nota: Vue.js non ti forza ad utilizzare le [regole W3C](http://www.w3.org/TR/custom-elements/#concepts) per i nomi dei tag personalizzati, anche se rispettare tali regole è considerata cosa buona e giusta.</p>

Una volta registrato il componente, può essere utilizzato nell'istanza di Vue tramite il tag `<my-component>`. Assicuratevi che il componente sia registrato **prima** della vostra istanza di Vue. Ecco un esempio completo:

``` html
<div id="example">
  <my-component></my-component>
</div>
```

``` js
// definizione
var MyComponent = Vue.extend({
  template: '<div>Un componente custom!</div>'
})

// registrazione
Vue.component('my-component', MyComponent)

// creazione dell'istanza
new Vue({
  el: '#example'
})
```

Renderizzato diventerà:

``` html
<div id="example">
  <div>Un componente custom!</div>
</div>
```

{% raw %}
<div id="example" class="demo">
  <my-component></my-component>
</div>
<script>
Vue.component('my-component', {
  template: '<div>Un componente custom!</div>'
})
new Vue({ el: '#example' })
</script>
{% endraw %}

Da notare come il template del componente **rimpiazzi** il tag personalizzato, il quale serve solo come **riferimento** per lo sviluppatore. Il comportamento in fase di rimpiazzamento può essere gestito tramite l'opzione `replace`.

### Registrazione Locale

Non dovete per forza registrare ogni componente in modo globale. Potete anche creare dei componenti che esistono solo all interno di un altro componente registrandolo internamente:

``` js
var Child = Vue.extend({ /* ... */ })

var Parent = Vue.extend({
  template: '...',
  components: {
    // <my-component> sarà disponibile solo all interno del template del padre
    'my-component': Child
  }
})
```

Questa logica può essere utilizzata per altri scopi, per esempio incapsulamento di direttive, filtri e transizioni.

### Facilitare la Registrazione

Per rendervi le cose ancora più facili, potete passare le opzioni direttamente alla funzione `Vue.component()` invece di utilizzare un costruttore separato.

``` js
// Un solo step per la registrazione
Vue.component('my-component', {
  template: '<div>A custom component!</div>'
})

// funziona anche per le registrazioni locali
var Parent = Vue.extend({
  components: {
    'my-component': {
      template: '<div>A custom component!</div>'
    }
  }
})
```

### Opzioni dei Componenti

Molte delle opzioni passate al costruttore del componente possono essere utilizzate direttamente tramite `Vue.extend()`:

``` js
var data = { a: 1 }
var MyComponent = Vue.extend({
  data: data
})
```

Il problema di questo approccio è che l oggetto `data` sarà condiviso con tutte le istanze del componente stesso! Questo comportamento non è quello che ci aspettiamo da un componente, il quale dovrebbe avere tutto incapsulato, per risolvere questo problema possiamo specificare una funzione per il nostro oggetto `data` la quale restituisce un oggetto nuovo:

``` js
var MyComponent = Vue.extend({
  data: function () {
    return { a: 1 }
  }
})
```

Questo discorso vale anche per l'opzione `el`, in quanto vige lo stesso problema di condivizione.

### Attributo `is`

Alcuni elementi HTML, per esempio `<table>`, hanno restrizioni su cosa può esserci al loro interno. Una di queste restrizioni non permette l'utilizzo di elementi custom e perciò non vengono renderizzati a dovere. In questo caso la soluzione è utilizzare l'attributo `is` su un elemento permesso in modo tale da sfruttarlo per il nostro componente:

``` html
<table>
  <tr is="my-component"></tr>
</table>
```

## Props

### Passaggio dei Dati tramite i Props

Tutti i componenti hanno una loro istanza **isolata**. Questo significa che non potete (e non dovreste) referenziare i dati di un componente padre internamente al figlio. I dati però possono essere passati tra le istanze correlate tramite i **props**.

Un "prop", detta anche proprietà di sostengo, è un campo all interno del componento che si aspetta o che intende condividere, se è un componente padre a sua volta. Un componente deve dichiaratamente esprimere quali dati vuole che gli vengano passati, per farlo deve utilizzare [l'opzione `prop`](/api/#props):

``` js
Vue.component('child', {
  // Dichiariamo il prop
  props: ['msg'],
  // Il prop può essere usato internamente nel template
  // E in tutta l'istanza del componente con this.
  template: '<span>{{ msg }}</span>'
})
```

Successivamente possiamo usarlo come sempre:

``` html
<child msg="Ciao!"></child>
```

**Risultato:**

{% raw %}
<div id="prop-example-1" class="demo">
  <child msg="Ciao!"></child>
</div>
<script>
new Vue({
  el: '#prop-example-1',
  components: {
    child: {
      props: ['msg'],
      template: '<span>{{ msg }}</span>'
    }
  }
})
</script>
{% endraw %}

### camelCase vs. kebab-case

Nel linguaggio HTML gli attributi sono insensibili alla capitalizzazione. Quando si utilizzano i prop come attributi è conveniente usare la notazione kebab-case, come nell esempio:

``` js
Vue.component('child', {
  // camelCase in JavaScript
  props: ['myMessage'],
  template: '<span>{{ myMessage }}</span>'
})
```

``` html
<!-- kebab-case in HTML -->
<child my-message="Ciao!"></child>
```

### Props Dinamici

Come abbiamo già visto è possibile vincolare ad un attributo una particolare espressione, con `v-bind` possiamo anche vincolare i props in modo dinamico, i quali verrano aggiornati ogni volta che il dato di origine, quello padre, verrà aggiornato:

``` html
<div>
  <input v-model="parentMsg">
  <br>
  <child v-bind:my-message="parentMsg"></child>
</div>
```

E' sempre comodo usare le scorciatoie di sintassi, per `v-bind` abbiamo:

``` html
<child :my-message="parentMsg"></child>
```

**Risultato:**

{% raw %}
<div id="demo-2" class="demo">
  <input v-model="parentMsg">
  <br>
  <child v-bind:my-message="parentMsg"></child>
</div>
<script>
new Vue({
  el: '#demo-2',
  data: {
    parentMsg: 'Message from parent'
  },
  components: {
    child: {
      props: ['myMessage'],
      template: '<span>{{myMessage}}</span>'
    }
  }
})
</script>
{% endraw %}

### Dinamico vs Non Dinamico

Un errore comune, soprattutto agli inizi, è quello di passare un numero fisso ad un attributo, come in questo esempio:

``` html
<!-- Viene passato 1 come stringa -->
<comp some-prop="1"></comp>
```

Però, essendo questo un prop non dinamico, il valore verrà passato proprio come stringa `"1"`, invece che come numero. Se volete passare un numero vero e proprio, dobbiamo utilizzare la sintassi dinamica vistra precedentemente:

``` html
<!-- In questo modo si passa un numero -->
<comp :some-prop="1"></comp>
```

### Tipo di Vincolo dei Prop

Per definizione, tutti i prop hanno un vincolo **mono direzionale** tra il padre ed il figlio: quando l'attributo padre viene aggiornato, il prop figlio viene aggiornato di conseguenza ma non viceversa. Questo comportamento standard previene eventuali mutamenti dello stato corrente della proprietà del padre, mutamenti accidentali che possono essere scatenati da componenti figli. Potrà sembrare restrittivo, per questo Vuejs permette di **modificare questo vincoli** tramite dei modificatori come `.sync` e `.once`:

Ecco la sintassi:

``` html
<!-- default, vincolo mono direzionale -->
<child :msg="parentMsg"></child>

<!-- vincolo bidirezionale esplicito -->
<child :msg.sync="parentMsg"></child>

<!-- vincolo bidirezionale esplicito che occorre una volta -->
<child :msg.once="parentMsg"></child>
```

Il vincolo a due direzioni sincronizzerà lo stato della proprietà `msg` con quella del padre `parentMsg`. Il vincolo bidirezionale esplicito che occorre una volta sola sincronizzerà le due proprietà ma solo alla prima occasione.

<p class="tip">Attenzione, se il prop che viene passato è un Oggetto od un Array, verrà passato per referenza. Modificare un Oggetto o l'Array internamente al figlio **muterà** anche la properità del padre indipendentemente dal tipo di vincolo che state utilizzando</p>

### Validazione dei Prop

E' possibile, per un componente, specificare i requisiti di validazione di ogni prop. Questo è molto utile quando i prop di un componente verranno utilizzati da altri, dato che questo tipo di validazione sostanzialmente costuisce le fondamente di API per il componente stesso, e rafforza il buon uso del componente stesso. Per attivare le validazioni bisogna trattare la properità prop come un insieme di oggetti:

``` js
Vue.component('example', {
  props: {
    // Tipo richiesto (`null` significa qualsiasi tipo)
    propA: Number,
    // Una stringa richiesta
    propB: {
      type: String,
      required: true
    },
    // Un numero con un valore di default
    propC: {
      type: Number,
      default: 100
    },
    // Un oggetto con una funzione per creare un oggetto di default
    // Questo concetto va applicato anche per gli Array
    propD: {
      type: Object,
      default: function () {
        return { msg: 'hello' }
      }
    },
    // Indica che questo prop si aspetta un vincolo bidirezionale, se non lo trova
    // Scatenerà dei warning.
    propE: {
      twoWay: true
    },
    // Validazione personalizzata
    propF: {
      validator: function (value) {
        return value > 10
      }
    },
    // Funzione di coerenza (novità dalla 1.0.12)
    // Rafforza il tipo di dato prima di assegnarlo al prop
    propG: {
      coerce: function (val) {
        return val + '' // cast the value to string
      }
    },
    propH: {
      coerce: function (val) {
        return JSON.parse(val) // mutiamo il typo ad Oggetto
    }
  }
})
```

I tipi di dato disponibili sono:

- String
- Number
- Boolean
- Function
- Object
- Array

In aggiunta si può definire la proprietà `type` con una funzione la quale conterrà un controllo utilizzando `instanceof`, molto utile per i tipi di dato personalizzati.

Quando una validazione fallisce, Vue si rifiuterà di impostare il valore, e lancerà un warning se si sta utilizzando la build per gli sviluppatori.

## Comunicazione Padre-Figlio

### La Catena dei Padri

Un componente figlio ha accesso al componente padre tramite l'utilizzo di `this.$parent`. Un istanza Vue è disponibile a tutti i componenti e i loro discendenti tramite `this.$root`. Ogni padre ha un Array di componenti figli in un array `this.$children`.

Anche se questa logica rendere virtualmente possibile l'accesso alla catena dei padri da parte di un eventuale figlio, è vivamente sconsigliata e, invece, dovreste sempre passare i dati in modo esplicito tramite i prop. In aggiunta al discorso, è una cattiva abitudine quella di mutare lo stato di un componente padre da parte di un figlio per i seguenti motivi:

1. Rende il legame padre e figlio strettamente dipendenti;

2. Rende difficile stabilire lo stato corrente del padre senza dipendere dagli stati di eventuali figli! In un sistema ideale lo stato di ogni componente dev'essere auto gestito.

### Eventi Personalizzati

Tutte le istanze di Vue implementano un interfaccia per facilitare la comunicazione tra gli eventi di ogni componente. Questo sistema di eventi è indipendente dal sitema degli eventi legati al DOM e lavora in modo differente.

Tutte le istanze di Vue possono:

- Ascoltare gli eventi tramite `$on()`;

- Attivare gli eventi da soli utilizzando `$emit()`;

- Spedire gli eventi che si propagano per tutta la catena dei padri tramite `$dispatch()`;

- Trasmettere gli eventi a tutti i discendenti tramite `$broadcast()`.

<p class="tip">Al contrario degli eventi DOM, gli eventi un Vue verranno automaticamente fermati una volta che la propagazione raggiunte il callback finale, a meno che tale callback non abbia un `return true` alla fine.</p>

Un semplice esempio:

``` html
<!-- Template, componente figlio -->
<template id="child-template">
  <input v-model="msg">
  <button v-on:click="notify">Invia Evento</button>
</template>

<!-- Template, componente padre -->
<div id="events-example">
  <p>Messages: {{ messages | json }}</p>
  <child></child>
</div>
```

``` js
// Registriamo il figlio che poi invierà l'Evento
Vue.component('child', {
  template: '#child-template',
  data: function () {
    return { msg: 'Ciao' }
  },
  methods: {
    notify: function () {
      if (this.msg.trim()) {
        this.$dispatch('child-msg', this.msg)
        this.msg = ''
      }
    }
  }
})

// Creiamo il padre, che riceverà il messaggio in un array
var parent = new Vue({
  el: '#events-example',
  data: {
    messages: []
  },
  // l'opzione `events` chiamerà `$on()` per voi quando l'istanza verrà creata
  events: {
    'child-msg': function (msg) {
      // `this` è legato all'istanza corrente in automatico
      this.messages.push(msg)
    }
  }
})
```

{% raw %}
<script type="x/template" id="child-template">
  <input v-model="msg">
  <button v-on:click="notify">Invia Evento</button>
</script>

<div id="events-example" class="demo">
  <p>Messages: {{ messages | json }}</p>
  <child></child>
</div>
<script>
Vue.component('child', {
  template: '#child-template',
  data: function () {
    return { msg: 'Ciao' }
  },
  methods: {
    notify: function () {
      if (this.msg.trim()) {
        this.$dispatch('child-msg', this.msg)
        this.msg = ''
      }
    }
  }
})

var parent = new Vue({
  el: '#events-example',
  data: {
    messages: []
  },
  events: {
    'child-msg': function (msg) {
      this.messages.push(msg)
    }
  }
})
</script>
{% endraw %}

### Eventi Personalizzati e v-on

L'esempio sopra citato è un buon inizio, ma se guardate attentamente il codice del componente padre, non è chiaro da dove `"child-msg"` arrivi. Sarebbe meglio se potessimo dichiarare il gestore di quello specifico evento direttamente nel template, dove viene utilizzato dal componente figlio. Per fare ciò  `v-on` è la soluzione ideale e può essere usato per ascoltare gli eventi che verranno poi utilizzati dai componenti figli:

``` html
<child v-on:child-msg="handleIt"></child>
```

Questo rende le cose ancora più chiare: quando un figlio attiva `"child-msg"` allora la funzione `handleIt` del padre verrà chiamata. Qualsiasi codice o logica che modificherà lo stato del componente padre verrà tenuta incapsulata all'interno del padre stesso, il figlio non dovrà preoccuparsi di nulla.

### Riferimenti ai Componenti Figli

Nonostante ci siano i Prop e gli eventi, a volte può essere ancora necessario accedere direttamente ad un componente figlio tramite JavaScript. Per fare ciò si può assegnare un ID univoco al componente figlio tramite l'utilizzo di `v-ref`, per esemio:

``` html
<div id="parent">
  <user-profile v-ref:profile></user-profile>
</div>
```

``` js
var parent = new Vue({ el: '#parent' })
// access child component instance
var child = parent.$refs.profile
```

Quando `v-ref` viene usato assieme a `v-for`, il riferimento diventerà un Array o un Oggetto contenente tutti i componenti figli.

## Distribuzione dei Contenuti tramite Slots

Quando si usano dei componenti, molto spesso il risultato è qualcosa di simile:

``` html
<app>
  <app-header></app-header>
  <app-footer></app-footer>
</app>
```

Ci sono due cose da notare in questo particolare codice:

1. Il componente `<app>` non sa il contenuto che potrà essere presente internamente agli altri componenti è deciso da qualsiasi componente includa `<app>` stesso.

2. Il componente `<app>` probabilmente avrà un suo template.

Per far in modo che la composizione sia efficace, bisogna intervenire sul flusso dei componenti e del loro stesso stemplate. Questo processo viene definito **distribuzione dei contenuti** (o "transclusion" se arrivate dal mondo AngularJS). Vue.js implemente un sistema di distribuzione dei contenuti e fornisce delle API modellate appositamente secondo [le specifiche dei Componenti Web](https://github.com/w3c/webcomponents/blob/gh-pages/proposals/Slots-Proposal.md), utilizzando l elemento speciale `<slot>` per distribuire tali componenti.

### Compilation Scope

Before we dig into the API, let's first clarify which scope the contents are compiled in. Imagine a template like this:

``` html
<child>
  {{ msg }}
</child>
```

Should the `msg` be bound to the parent's data or the child data? The answer is parent. A simple rule of thumb for component scope is:

> Everything in the parent template is compiled in parent scope; everything in the child template is compiled in child scope.

A common mistake is trying to bind a directive to a child property/method in the parent template:

``` html
<!-- does NOT work -->
<child v-show="someChildProperty"></child>
```

Assuming `someChildProperty` is a property on the child component, the example above would not work as intended. The parent's template should not be aware of the state of a child component.

If you need to bind child-scope directives on a component root node, you should do so in the child component's own template:

``` js
Vue.component('child-component', {
  // this does work, because we are in the right scope
  template: '<div v-show="someChildProperty">Child</div>',
  data: function () {
    return {
      someChildProperty: true
    }
  }
})
```

Similarly, distributed content will be compiled in the parent scope.

### Single Slot

Parent content will be **discarded** unless the child component template contains at least one `<slot>` outlet. When there is only one slot with no attributes, the entire content fragment will be inserted at its position in the DOM, replacing the slot itself.

Anything originally inside the `<slot>` tags is considered **fallback content**. Fallback content is compiled in the child scope and will only be displayed if the hosting element is empty and has no content to be inserted.

Suppose we have a component with the following template:

``` html
<div>
  <h1>This is my component!</h1>
  <slot>
    This will only be displayed if there is no content
    to be distributed.
  </slot>
</div>
```

Parent markup that uses the component:

``` html
<my-component>
  <p>This is some original content</p>
  <p>This is some more original content</p>
</my-component>
```

The rendered result will be:

``` html
<div>
  <h1>This is my component!</h1>
  <p>This is some original content</p>
  <p>This is some more original content</p>
</div>
```

### Named Slots

`<slot>` elements have a special attribute, `name`, which can be used to further customize how content should be distributed. You can have multiple slots with different names. A named slot will match any element that has a corresponding `slot` attribute in the content fragment.

There can still be one unnamed slot, which is the **default slot** that serves as a catch-all outlet for any unmatched content. If there is no default slot, unmatched content will be discarded.

For example, suppose we have a `multi-insertion` component with the following template:

``` html
<div>
  <slot name="one"></slot>
  <slot></slot>
  <slot name="two"></slot>
</div>
```

Parent markup:

``` html
<multi-insertion>
  <p slot="one">One</p>
  <p slot="two">Two</p>
  <p>Default A</p>
</multi-insertion>
```

The rendered result will be:

``` html
<div>
  <p slot="one">One</p>
  <p>Default A</p>
  <p slot="two">Two</p>
</div>
```

The content distribution API is a very useful mechanism when designing components that are meant to be composed together.

## Dynamic Components

You can use the same mount point and dynamically switch between multiple components by using the reserved `<component>` element and dynamically bind to its `is` attribute:

``` js
new Vue({
  el: 'body',
  data: {
    currentView: 'home'
  },
  components: {
    home: { /* ... */ },
    posts: { /* ... */ },
    archive: { /* ... */ }
  }
})
```

``` html
<component :is="currentView">
  <!-- component changes when vm.currentview changes! -->
</component>
```

If you want to keep the switched-out components alive so that you can preserve its state or avoid re-rendering, you can add a `keep-alive` directive param:

``` html
<component :is="currentView" keep-alive>
  <!-- inactive components will be cached! -->
</component>
```

### `activate` Hook

When switching components, the incoming component might need to perform some asynchronous operation before it should be swapped in. To control the timing of component swapping, implement the `activate` hook on the incoming component:

``` js
Vue.component('activate-example', {
  activate: function (done) {
    var self = this
    loadDataAsync(function (data) {
      self.someData = data
      done()
    })
  }
})
```

Note the `activate` hook is only respected during dynamic component swapping or the initial render for static components - it does not affect manual insertions with instance methods.

### `transition-mode`

The `transition-mode` param attribute allows you to specify how the transition between two dynamic components should be executed.

By default, the transitions for incoming and outgoing components happen simultaneously. This attribute allows you to configure two other modes:

- `in-out`: New component transitions in first, current component transitions out after incoming transition has finished.

- `out-in`: Current component transitions out first, new component transitions in after outgoing transition has finished.

**Example**

``` html
<!-- fade out first, then fade in -->
<component
  :is="view"
  transition="fade"
  transition-mode="out-in">
</component>
```

``` css
.fade-transition {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave {
  opacity: 0;
}
```

{% raw %}
<div id="transition-mode-demo" class="demo">
  <input v-model="view" type="radio" value="v-a" id="a" name="view"><label for="a">A</label>
  <input v-model="view" type="radio" value="v-b" id="b" name="view"><label for="b">B</label>
  <component
    :is="view"
    transition="fade"
    transition-mode="out-in">
  </component>
</div>
<style>
  .fade-transition {
    transition: opacity .3s ease;
  }
  .fade-enter, .fade-leave {
    opacity: 0;
  }
</style>
<script>
new Vue({
  el: '#transition-mode-demo',
  data: {
    view: 'v-a'
  },
  components: {
    'v-a': {
      template: '<div>Component A</div>'
    },
    'v-b': {
      template: '<div>Component B</div>'
    }
  }
})
</script>
{% endraw %}

## Misc

### Components and v-for

You can directly use `v-for` on the custom component, like any normal element:

``` html
<my-component v-for="item in items"></my-component>
```

However, this won't pass any data to the component, because components have isolated scopes of their own. In order to pass the iterated data into the component, we should also use props:

``` html
<my-component
  v-for="item in items"
  :item="item"
  :index="$index">
</my-component>
```

The reason for not automatically injecting `item` into the component is because that makes the component tightly coupled to how `v-for` works. Being explicit about where its data comes from makes the component reusable in other situations.

### Authoring Reusable Components

When authoring components, it is good to keep in mind whether you intend to reuse this component somewhere else later. It is OK for one-off components to have some tight coupling with each other, but reusable components should define a clean public interface.

The API for a Vue.js component essentially comes in three parts - props, events and slots:

- **Props** allow the external environment to feed data to the component;

- **Events** allow the component to trigger actions in the external environment;

- **Slots** allow the external environment to insert content into the component's view structure.

With the dedicated shorthand syntax for `v-bind` and `v-on`, the intents can be clearly and succinctly conveyed in the template:

``` html
<my-component
  :foo="baz"
  :bar="qux"
  @event-a="doThis"
  @event-b="doThat">
  <!-- content -->
  <img slot="icon" src="...">
  <p slot="main-text">Hello!</p>
</my-component>
```

### Async Components

In large applications, we may need to divide the app into smaller chunks, and only load a component from the server when it is actually needed. To make that easier, Vue.js allows you to define your component as a factory function that asynchronously resolves your component definition. Vue.js will only trigger the factory function when the component actually needs to be rendered, and will cache the result for future re-renders. For example:

``` js
Vue.component('async-example', function (resolve, reject) {
  setTimeout(function () {
    resolve({
      template: '<div>I am async!</div>'
    })
  }, 1000)
})
```

The factory function receives a `resolve` callback, which should be called when you have retrieved your component definition from the server. You can also call `reject(reason)` to indicate the load has failed. The `setTimeout` here is simply for demonstration; How to retrieve the component is entirely up to you. One recommended approach is to use async components together with [Webpack's code-splitting feature](http://webpack.github.io/docs/code-splitting.html):

``` js
Vue.component('async-webpack-example', function (resolve) {
  // this special require syntax will instruct webpack to
  // automatically split your built code into bundles which
  // are automatically loaded over ajax requests.
  require(['./my-async-component'], resolve)
})
```

### Assets Naming Convention

Some assets, such as components and directives, appear in templates in the form of HTML attributes or HTML custom tags. Since HTML attribute names and tag names are **case-insensitive**, we often need to name our assets using kebab-case instead of camelCase, which can be a bit inconvenient.

Vue.js actually supports naming your assets using camelCase or PascalCase, and automatically resolves them as kebab-case in templates (similar to the name conversion for props):

``` js
// in a component definition
components: {
  // register using camelCase
  myComponent: { /*... */ }
}
```

``` html
<!-- use dash case in templates -->
<my-component></my-component>
```

This works nicely with [ES6 object literal shorthand](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#New_notations_in_ECMAScript_6):

``` js
// PascalCase
import TextBox from './components/text-box';
import DropdownMenu from './components/dropdown-menu';

export default {
  components: {
    // use in templates as <text-box> and <dropdown-menu>
    TextBox,
    DropdownMenu
  }
}
```

### Recursive Component

Components can recursively invoke itself in its own template, however, it can only do so when it has the `name` option:

``` js
var StackOverflow = Vue.extend({
  name: 'stack-overflow',
  template:
    '<div>' +
      // recursively invoke self
      '<stack-overflow></stack-overflow>' +
    '</div>'
})
```

A component like the above will result in a "max stack size exceeded" error, so make sure recursive invocation is conditional. When you register a component globally using `Vue.component()`, the global ID is automatically set as the component's `name` option.

### Fragment Instance

When you use the `template` option, the content of the template will replace the element the Vue instance is mounted on. It is therefore recommended to always have a single root-level, plain element in templates.

Instead of templates like this:

``` html
<div>root node 1</div>
<div>root node 2</div>
```

Prefer this:

``` html
<div>
  I have a single root node!
  <div>node 1</div>
  <div>node 2</div>
</div>
```

There are multiple conditions that will turn a Vue instance into a **fragment instance**:

1. Template contains multiple top-level elements.
2. Template contains only plain text.
3. Template contains only another component (which can potentially be a fragment instance itself).
4. Template contains only an element directive, e.g. `<partial>` or vue-router's `<router-view>`.
5. Template root node has a flow-control directive, e.g. `v-if` or `v-for`.

The reason is that all of the above cause the instance to have an unknown number of top-level elements, so it has to manage its DOM content as a fragment. A fragment instance will still render the content correctly. However, it will **not** have a root node, and its `$el` will point to an "anchor node", which is an empty Text node (or a Comment node in debug mode).

What's more important though, is that **non-flow-control directives, non-prop attributes and transitions on the component element will be ignored**, because there is no root element to bind them to:

``` html
<!-- doesn't work due to no root element -->
<example v-show="ok" transition="fade"></example>

<!-- props work -->
<example :prop="someData"></example>

<!-- flow control works, but without transitions -->
<example v-if="ok"></example>
```

There are, of course, valid use cases for fragment instances, but it is in general a good idea to give your component template a single, plain root element. It ensures directives and attributes on the component element to be properly transferred, and also results in slightly better performance.

### Inline Template

When the `inline-template` special attribute is present on a child component, the component will use its inner content as its template, rather than treating it as distributed content. This allows more flexible template-authoring.

``` html
<my-component inline-template>
  <p>These are compiled as the component's own template</p>
  <p>Not parent's transclusion content.</p>
</my-component>
```

However, `inline-template` makes the scope of your templates harder to reason about, and makes the component's template compilation un-cachable. As a best practice, prefer defining templates inside the component using the `template` option.
