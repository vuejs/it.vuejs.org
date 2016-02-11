---
type: api
---

## Configurazione Globale

`Vue.config` è un oggetto che contiene tutte le configurazioni di Vue. Potete modificare le sue proprietà, descritte di seguito, prima di inizializzare l'applicazione:

### debug

- **Tipo:** `Booleano`

- **Predefinito:** `falso`

- **Utilizzo:**

  ``` js
  Vue.config.debug = true
  ```

  Quando siete in modalità debug, Vue potrà:

  1. Stampare la coda delle chiamate per tutti i Warnings.

  2. Rendere tutti i nodi del DOM visibili, questo rende più facile ispezionare la struttura.

  <p class="tip">La modalità debug è disponibile solo nella build di sviluppo.</p>

### delimiters

- **Tipo:** `Array<Stringa>`

- **Predefinito:** `{% raw %}["{{", "}}"]{% endraw %}`

- **Utilizzo:**

  ``` js
  // Template ES6 per le stringhe
  Vue.config.delimiters = ['${', '}']
  ```

  Permette di cambiare gli interpreti nel DOM.

### unsafeDelimiters

- **Tipo:** `Array<Stringa>`

- **Predefinito:** `{% raw %}["{{{", "}}}"]{% endraw %}`

- **Utilizzo:**

  ``` js
  // facciamolo diventare più pericoloso
  Vue.config.unsafeDelimiters = ['{!!', '!!}']
  ```

  Permette di cambiare gli interpreti HTML nel DOM.

### silent

- **Tipo:** `Booleano`

- **Predefinito:** `falso`

- **Utilizzo:**

  ``` js
  Vue.config.silent = true
  ```

  Sopprime tutti i Warnings e Log di Vue.js.

### async

- **Tipo:** `Booleano`

- **Predefinito:** `true`

- **Utilizzo:**

  ``` js
  Vue.config.async = false
  ```

  Quando la modlità asincrona è spenta, Vue aggiornerà il DOM in modo asincrono quando i dati cambiano. Questo può aiutare a debuggare qualche situazione specifica ma può anche ridurre le prestazioni e cambiare il modo in cui i watchers vengono chiamati. **`async: false` non è raccomandato in produzione.**

### convertAllProperties

- **Tipo:** `Booleano`

- **Predefinito:** `falso`

- **Utilizzo:**

  ``` js
  Vue.config.convertAllProperties = true
  ```

  (Aggiunto dalla v1.0.8) Impostando questa opzione su `true` abiliterà l'istanza di Vue a convertire ed osservare tutti gli oggetti che già contengono dei getters/setters definiti tramite `Oggetto.defineProperty`. Questa opzione è impostata a `false` perchè ci possono essere delle piccole perdite in prestazioni.

## API Globali

<h3 id="Vue-extend">Vue.extend( opzioni )</h3>

- **Argomenti:**
  - `{Oggetto} opzioni`

- **Utilizzo:**

  Crea una "subclasse" del costruttore di base di Vue. L'argomento passato dovrebbe essere un set di opzioni del componente stesso.

  Da notare che le opzioni `el` e `data` devono essere delle funzioni, se usate con `Vue.extend()`.

  ``` html
  <div id="mount-point"></div>
  ```

  ``` js
  // Creiamo il costruttore che si utilizza più volte
  var Profile = Vue.extend({
    template: '<p>{{firstName}} {{lastName}} detto anche {{alias}}</p>'
  })
  // creiao l'istanza del profilo
  var profile = new Profile({
    data: {
      firstName: 'Walter',
      lastName: 'White',
      alias: 'Heisenberg'
    }  
  })
  // montiamo il tutto su un elemento
  profile.$mount('#mount-point')
  ```

  Il risultato sarà:

  ``` html
  <p>Walter White detto anche Heisenberg</p>
  ```

- **Vedi anche:** [Componenti](/guide/components.html)

<h3 id="Vue-nextTick">Vue.nextTick( funzione )</h3>

- **Argomenti:**
  - `{Funzione} funzione`

- **Utilizzo:**

  Ritarda la funzione perchè venga eseguita al ciclo successivo di update del DOM. Da usare immediatamente dopo un cambiamento dei dati per aspettare l'aggiornamento del DOM.

  ``` js
  // Modifica del dato
  vm.msg = 'Ciao';
  // DOM Non aggiornato
  Vue.nextTick(function () {
    // DOM aggiornato
  })
  ```

- **Vedi anche:** [Coda di aggiornamenti Asincrona](/guide/reactivity.html#Async_Update_Queue)

<h3 id="Vue-set">Vue.set( oggetto, chiave, valore )</h3>

- **Argomenti:**
  - `{Oggetto} oggetto`
  - `{Stringa} chiave`
  - `{*} valore`

- **Restituisce:** Il valore impostato.

- **Utilizzo:**

  Imposta una proprietà di un determinato oggetto, se l'oggetto fa parte del sistema reattivo allora Vue si assicurerà di impostare la properità in modo che sia reattiva e attiverà eventuali aggiornamenti del DOM. Questa funzione è usata principalmente per aggirare la limitazione di Vue nell individuare l'aggiunta di proprietà su un oggetto.

- **Vedi anche:** [Reattività nel Dettaglio](/guide/reactivity.html)

<h3 id="Vue-delete">Vue.delete( oggetto, chiave )</h3>

- **Argomenti:**
  - `{Oggetto} oggetto`
  - `{Stringa} chiave`

- **Utilizzo:**

  Rimuove una proprietà di un oggetto. Se l'oggetto è reattivo Vue si assicurerà che tale eliminazioni attivi l'aggiornamento del DOM. Questa funzione è usata principlamente per aggirare la limitazione di Vue nell individuare la rimozione di una properità su un oggetto.

- **Vedi anche:** [Reattività nel Dettaglio](/guide/reactivity.html)

<h3 id="Vue-directive">Vue.directive( id, [definizione] )</h3>

- **Argomenti:**
  - `{Stringa} id`
  - `{Funzione | Oggetto} [definizione]`

- **Utilizzo:**

  Registra o restituisce una direttiva globale.

  ``` js
  // registra
  Vue.directive('my-directive', {
    bind: function () {},
    update: function () {},
    unbind: function () {}
  })

  // registra (metodo semplice)
  Vue.directive('my-directive', function () {
    // viene gestito solo l' `update`
  })

  // getter, restituisce la definizione se registrata.
  var myDirective = Vue.directive('my-directive')
  ```

- **Vedi anche:** [Direttive Personalizzate](/guide/custom-directive.html)

<h3 id="Vue-elementDirective">Vue.elementDirective( id, [definizione] )</h3>

- **Argomenti:**
  - `{Stringa} id`
  - `{Oggetto} [definizione]`

- **Utilizzo:**

  Registra o restituisce un Element Directives globale.

  ``` js
  // registra
  Vue.elementDirective('my-elemento', {
    bind: function () {},
    // Gli elementi direttiva non usano `update`
    unbind: function () {}
  })

  // getter, restituisce la definizione se registrata
  var myDirective = Vue.elementDirective('my-elemento')
  ```

- **Vedi anche:** [Element Directives](/guide/custom-directive.html#Element_Directives)

<h3 id="Vue-filter">Vue.filter( id, [definizione] )</h3>

- **Argomenti:**
  - `{Stringa} id`
  - `{Funzione | Oggetto} [definizione]`

- **Utilizzo:**

  Registra o restituisce un filtro globale.

  ``` js
  // registra
  Vue.filter('my-filter', function (value) {
    // restituisce valore
  })

  // filtro a due vie
  Vue.filter('my-filter', {
    read: function () {},
    write: function () {}
  })

  // getter, restituisce la definizione del filtro se registrato
  var myFilter = Vue.filter('my-filter')
  ```

- **Vedi anche:** [Filtri personalizzati](/guide/custom-filter.html)

<h3 id="Vue-component">Vue.component( id, [definizione] )</h3>

- **Argomenti:**
  - `{Stringa} id`
  - `{Funzione | Oggetto} [definizione]`

- **Utilizzo:**

  Registra o restituisce un componente istanziato globalmente.

  ``` js
  // registra un componente tramite un costruttore
  Vue.component('my-component', Vue.extend({ /* ... */}))

  // registra un componente tramite un oggetto, il quale chiamerà automaticamente Vue.extend
  Vue.component('my-component', { /* ... */ })

  // restituisce un componente, se il componente con quel nome esiste
  var MyComponent = Vue.component('my-component')
  ```

- **Vedi anche:** [Componenti](/guide/components.html).

<h3 id="Vue-transition">Vue.transition( id, [hooks] )</h3>

- **Argomenti:**
  - `{Stringa} id`
  - `{Oggetto} [hooks]`

- **Utilizzo:**

  Registra o restituisce un hook per le transizioni istanziato globalmente.

  ``` js
  // registra una nuova transizione
  Vue.transition('fade', {

    leave: function () {}
  })

  // Restituisce un hook registrato, se il nome esiste
  var fadeTransition = Vue.transition('fade')
  ```

- **Vedi anche:** [Transizioni](/guide/transitions.html).

<h3 id="Vue-partial">Vue.partial( id, [partial] )</h3>

- **Argomenti:**
  - `{Stringa} id`
  - `{Stringa} [partial]`

- **Utilizzo:**

  Registra o restituisce un template parziale, implementato inline.

  ``` js
  // registra il template
  Vue.partial('my-partial', '<div>Hi</div>')

  // restituisce il template
  var myPartial = Vue.partial('my-partial')
  ```

- **Vedi anche:** [Elementi Speciali - &lt;parziali&gt;](#partial).

<h3 id="Vue-use">Vue.use( plugin, [opzioni] )</h3>

- **Argomenti:**
  - `{Oggetto | Funzione} plugin`
  - `{Oggetto} [opzioni]`

- **Utilizzo:**

  Installate un plugin Vue.js. Se il plugin è un oggetto istanziato, esso esporrà un metodo `install`. Se il plugin è una funzione di per sè, allora verrà trattata come metodo di install. Il metodo install verrà chiamato con Vue come argomento.

- **Vedi anche:** [I Plugins](/guide/plugins.html).

<h3 id="Vue-mixin">Vue.mixin( opzioni )</h3>

- **Argomenti:**
  - `{Oggetto} mixin`

- **Utilizzo:**

  Applica un mixin a livello globale, il quale influenzerà tutte le istanze create successivamente. Questo metodo può essere usato dagli autori del plugin per iniettare comportamenti personalizzati dentro ai componenti. **NON è raccomandato l'utilizzo in produzione**.

- **Vedi anche:** [Mixins Globali](/guide/mixins.html#Global_Mixin)

## Opzioni / Dati

### data

- **Tipo:** `Oggetto | Funzione`

- **Restriction:** Only accepts `Function` when used in a component definition.

- **Dettagli:**

  The data oggetto for the Vue instance. Vue.js will recursively convert its properties into getter/setters to make it "reactive". **The oggetto must be plain**: native oggettos, existing getter/setters and protoTipo properties are ignored. It is not recommended to observe complex oggettos.
  
  When defining a **component**, `data` must be declared as a function that returns the initial data object, because there will be many instances created using the same definition. If we still use a plain object for `data`, that same object will be **shared by reference** across all instance created! By providing a `data` function, every time a new instance is created, we can simply call it to return a fresh copy of the initial data.

  Once the instance is created, the original data oggetto can be accessed as `vm.$data`. The Vue instance also proxies all the properties found on the data oggetto.

  Properties that start with `_` or `$` will **not** be proxied on the Vue instance because they may conflict with Vue's internal properties and API methods. You will have to access them as `vm.$data._property`.

  If required, a deep clone of the original oggetto can be obtained by passing `vm.$data` through `JSON.parse(JSON.stringaify(...))`.

- **Esempio:**

  ``` js
  var data = { a: 1 }

  // direct instance creation
  var vm = new Vue({
    data: data
  })
  vm.a // -> 1
  vm.$data === data // -> true

  // must use function when in Vue.extend()
  var Component = Vue.extend({
    data: function () {
      return { a: 1 }
    }
  })
  ```

- **Vedi anche:** [Reactivity in Depth](/guide/reactivity.html).

### props

- **Tipo:** `Array | Oggetto`

- **Dettagli:**

  A list/hash of attributes that are exposed to accept data from the parent component. It has a simple Array-based syntax and an alternative Oggetto-based syntax that allows advanced configurations such as Tipo checking, custom validation and Predefinito valores.

- **Esempio:**

  ``` js
  // simple syntax
  Vue.component('props-demo-simple', {
    props: ['size', 'myMessage']
  })

  // oggetto syntax with validation
  Vue.component('props-demo-advanced', {
    props: {
      // just Tipo check
      size: Number,
      // Tipo check plus other validations
      name: {
        Tipo: Stringa,
        required: true
      }
    }
  })
  ```

- **Vedi anche:** [Props](/guide/components.html#Props)

### computed

- **Tipo:** `Oggetto`

- **Dettagli:**

  Computed properties to be mixed into the Vue instance. All getters and setters have their `this` context automatically bound to the Vue instance.

- **Esempio:**

  ```js
  var vm = new Vue({
    data: { a: 1 },
    computed: {
      // get only, just need a function
      aDouble: function () {
        return this.a * 2
      },
      // both get and set
      aPlus: {
        get: function () {
          return this.a + 1
        },
        set: function (v) {
          this.a = v - 1
        }
      }
    }
  })
  vm.aPlus   // -> 2
  vm.aPlus = 3
  vm.a       // -> 2
  vm.aDouble // -> 4
  ```

- **Vedi anche:**
  - [Computed Properties](/guide/computed.html)
  - [Reactivity in Depth: Inside Computed Properties](/guide/reactivity.html#Inside_Computed_Properties)

### methods

- **Tipo:** `Oggetto`

- **Dettagli:**

  Methods to be mixed into the Vue instance. You can access these methods directly on the VM instance, or use them in directive expressions. All methods will have their `this` context automatically bound to the Vue instance.

- **Esempio:**

  ```js
  var vm = new Vue({
    data: { a: 1 },
    methods: {
      plus: function () {
        this.a++
      }
    }
  })
  vm.plus()
  vm.a // 2
  ```

- **Vedi anche:** [Methods and Event Handling](/guide/events.html)

### watch

- **Tipo:** `Oggetto`

- **Dettagli:**

  An oggetto where chiaves are expressions to watch and valores are the corresponding funzioni. The valore can also be a stringa of a method name, or an Oggetto that contains additional opzioni. The Vue instance will call `$watch()` for each entry in the oggetto at instantiation.

- **Esempio:**

  ``` js
  var vm = new Vue({
    data: {
      a: 1
    },
    watch: {
      'a': function (val, oldVal) {
        console.log('new: %s, old: %s', val, oldVal)
      },
      // stringa method name
      'b': 'someMethod',
      // deep watcher
      'c': {
        handler: function (val, oldVal) { /* ... */ },
        deep: true
      }
    }
  })
  vm.a = 2 // -> new: 2, old: 1
  ```

- **Vedi anche:** [Instance Methods - vm.$watch](#vm-watch)

## Options / DOM

### el

- **Tipo:** `Stringa | HTMLElement | Funzione`

- **Restriction:** only accepts type `Function` when used in a component definition.

- **Dettagli:**

  Provide the Vue instance an existing DOM elemento to mount on. It can be a CSS selector stringa, an actual HTMLElement, or a function that returns an HTMLElement. Note that the provided elemento merely serves as a mounting point; it will be replaced if a template is also provided, unless `replace` is set to falso. The resolved elemento will be accessible as `vm.$el`.

  When used in `Vue.extend`, a function must be provided so each instance gets a separately created elemento.

  If this option is available at instantiation, the instance will immediately enter compilation; otherwise, the user will have to explicitly call `vm.$mount()` to manually start the compilation.

- **Vedi anche:** [Lifecycle Diagram](/guide/instance.html#Lifecycle_Diagram)

### template

- **Tipo:** `Stringa`

- **Dettagli:**

  A stringa template to be used as the markup for the Vue instance. By Predefinito, the template will **replace** the mounted elemento. When the `replace` option is set to `falso`, the template will be inserted into the mounted elemento instead. In both cases, any existing markup inside the mounted elemento will be ignored, unless content distribution slots are present in the template.

  If the stringa starts with `#` it will be used as a querySelettore and use the selected elemento's innerHTML as the template stringa. This allows the use of the common `<script Tipo="x-template">` trick to include templates.

  Note that under certain situations, for Esempio when the template contains more than one top-level elemento, or contains only plain text, the instance will become a fragment instance - i.e. one that manages a list of nodes rather than a single node. Non flow-control directives on the mount point for fragment instances are ignored.

- **Vedi anche:**
  - [Lifecycle Diagram](/guide/instance.html#Lifecycle_Diagram)
  - [Content Distribution](/guide/components.html#Content_Distribution_with_Slots)
  - [Fragment Instance](/guide/components.html#Fragment_Instance)

### replace

- **Tipo:** `Booleano`  

- **Predefinito:** `true`

- **Restriction:** only respected if the **template** option is also present.

- **Dettagli:**

  Determines whether to replace the elemento being mounted on with the template. If set to `falso`, the template will overwrite the elemento's inner content without replacing the elemento itself.

- **Esempio**:

  ``` html
  <div id="replace"></div>
  ```

  ``` js
  new Vue({
    el: '#replace',
    template: '<p>replaced</p>'
  })
  ```

  Will result in:

  ``` html
  <p>replaced</p>
  ```

  In comparison, when `replace` is set to `falso`:

  ``` html
  <div id="insert"></div>
  ```

  ``` js
  new Vue({
    el: '#insert',
    replace: falso,
    template: '<p>inserted</p>'
  })
  ```

  Will result in:

  ``` html
  <div id="insert">
    <p>inserted</p>
  </div>
  ```

## Options / Lifecycle Hooks

### init

 - **Tipo:** `Funzione`

 - **Dettagli:**

   Called synchronously after the instance has already been initialized, but not has started processing the opzioni and the data for set up the scope.

 - **Vedi anche:** [Diagramma del Ciclo di Vita](/guide/instance.html#Lifecycle_Diagram)

### created

- **Tipo:** `Funzione`

- **Dettagli:**

  Called synchronously after the instance is created. At this stage, the instance has finished processing the opzioni which means the following have been set up: data observation, computed properties, methods, watch/evento funzioni. However, DOM compilation has not been started, and the `$el` property will not be available yet.

- **Vedi anche:** [Lifecycle Diagram](/guide/instance.html#Lifecycle_Diagram)

### beforeCompile

- **Tipo:** `Funzione`

- **Dettagli:**

  Called right before the compilation starts.

- **Vedi anche:** [Lifecycle Diagram](/guide/instance.html#Lifecycle_Diagram)

### compiled

- **Tipo:** `Funzione`

- **Dettagli:**

  Called after the compilation is finished. At this stage all directives have been linked so data changes will trigger DOM updates. However, `$el` is not guaranteed to have been inserted into the document yet.

- **Vedi anche:** [Lifecycle Diagram](/guide/instance.html#Lifecycle_Diagram)

### ready

- **Tipo:** `Funzione`

- **Dettagli:**

  Called after compilation **and** the `$el` is **inserted into the document for the first time**, i.e. right after the first `attached` hook. Note this insertion must be executed via Vue (with methods like `vm.$appendTo()` or as a result of a directive update) to trigger the `ready` hook.

- **Vedi anche:** [Lifecycle Diagram](/guide/instance.html#Lifecycle_Diagram)

### attached

- **Tipo:** `Funzione`

- **Dettagli:**

  Called when `vm.$el` is attached to DOM by a directive or a VM instance method such as `$appendTo()`. Direct manipulation of `vm.$el` will **not** trigger this hook.

### detached

- **Tipo:** `Funzione`

- **Dettagli:**

  Called when `vm.$el` is removed from the DOM by a directive or a VM instance method. Direct manipulation of `vm.$el` will **not** trigger this hook.

### beforeDestroy

- **Tipo:** `Funzione`

- **Dettagli:**

  Called right before a Vue instance is destroyed. At this stage the instance is still fully functional.

- **Vedi anche:** [Lifecycle Diagram](/guide/instance.html#Lifecycle_Diagram)

### destroyed

- **Tipo:** `Funzione`

- **Dettagli:**

  Called after a Vue instance has been destroyed. When this hook is called, all bindings and directives of the Vue instance have been unbound and all child Vue instances have also been destroyed.

  Note if there is a leaving transition, the `destroyed` hook is called **after** the transition has finished.

- **Vedi anche:** [Lifecycle Diagram](/guide/instance.html#Lifecycle_Diagram)

## Options / Assets

### directives

- **Tipo:** `Oggetto`

- **Dettagli:**

  A hash of directives to be made available to the Vue instance.

- **Vedi anche:**
  - [Custom Directives](/guide/custom-directive.html)
  - [Assets Naming Convention](/guide/components.html#Assets_Naming_Convention)

### elementDirectives

- **Tipo:** `Oggetto`

- **Dettagli:**

  A hash of elemento directives to be made available to the Vue instance.

- **Vedi anche:**
  - [Element Directives](/guide/custom-directive.html#Element_Directives)
  - [Assets Naming Convention](/guide/components.html#Assets_Naming_Convention)

### filters

- **Tipo:** `Oggetto`

- **Dettagli:**

  A hash of filters to be made available to the Vue instance.

- **Vedi anche:**
  - [Custom Filters](/guide/custom-filter.html)
  - [Assets Naming Convention](/guide/components.html#Assets_Naming_Convention)

### components

- **Tipo:** `Oggetto`

- **Dettagli:**

  A hash of components to be made available to the Vue instance.

- **Vedi anche:**
  - [Components](/guide/components.html)

### transitions

- **Tipo:** `Oggetto`

- **Dettagli:**

  A hash of transitions to be made available to the Vue instance.

- **Vedi anche:**
  - [Transitions](/guide/transitions.html)

### partials

- **Tipo:** `Oggetto`

- **Dettagli:**

  A hash of partial stringas to be made available to the Vue instance.

- **Vedi anche:**
  - [Special Elements - partial](#partial)

## Options / Misc

### parent

- **Tipo:** `Vue instance`

- **Dettagli:**

  Specify the parent instance for the instance to be created. Establishes a parent-child relationship between the two. The parent will be accessible as `this.$parent` for the child, and the child will be pushed into the parent's `$children` array.

- **Vedi anche:** [Parent-Child Communication](/guide/components.html#Parent-Child_Communication)

### eventi

- **Tipo:** `Oggetto`

- **Dettagli:**

  An oggetto where chiaves are eventi to listen for and valores are the corresponding funzioni. Note these are Vue eventi rather than DOM eventi. The valore can also be a stringa of a method name. The Vue instance will call `$on()` for each entry in the oggetto at instantiation.

- **Esempio:**

  ``` js
  var vm = new Vue({
    events: {
      'hook:created': function () {
        console.log('created!')
      },
      greeting: function (msg) {
        console.log(msg)
      },
      // can also use a stringa for methods
      bye: 'sayGoodbye'
    },
    methods: {
      sayGoodbye: function () {
        console.log('goodbye!')
      }
    }
  }) // -> created!
  vm.$emit('greeting', 'hi!') // -> hi!
  vm.$emit('bye')             // -> goodbye!
  ```

- **Vedi anche:**
  - [Instance Methods - Events](#Instance_Methods_/_Events)
  - [Parent-Child Communication](/guide/components.html#Parent-Child_Communication)

### mixins

- **Tipo:** `Array`

- **Dettagli:**

  The `mixins` option accepts an array of mixin oggettos. These mixin oggettos can contain instance opzioni just like normal instance oggettos, and they will be merged against the eventoual opzioni using the same option merging logic in `Vue.extend()`. e.g. If your mixin contains a created hook and the component itself also has one, both functions will be called.

  Mixin hooks are called in the order they are provided, and called before the component's own hooks.

- **Esempio:**

  ``` js
  var mixin = {
    created: function () { console.log(1) }
  }
  var vm = new Vue({
    created: function () { console.log(2) },
    mixins: [mixin]
  })
  // -> 1
  // -> 2
  ```

- **Vedi anche:** [Mixins](/guide/mixins.html)

### name

- **Tipo:** `Stringa`

- **Restriction:** only respected when used in `Vue.extend()`.

- **Dettagli:**

  Allow the component to recursively invoke itself in its template. Note that when a component is registraed globally with `Vue.component()`, the global ID is automatically set as its name.

  Another benefit of specifying a `name` option is console inspection. When inspecting an extended Vue component in the console, the Predefinito constructor name is `VueComponent`, which isn't very informative. By passing in an optional `name` option to `Vue.extend()`, you will get a better inspection output so that you know which component you are looking at. The stringa will be camelized and used as the component's constructor name.

- **Esempio:**

  ``` js
  var Ctor = Vue.extend({
    name: 'stack-overflow',
    template:
      '<div>' +
        // recursively invoke self
        '<stack-overflow></stack-overflow>' +
      '</div>'
  })

  // this will actually result in a max stack size exceeded
  // error, but let's assume it works...
  var vm = new Ctor()

  console.log(vm) // -> StackOverflow {$el: null, ...}
  ```

## Instance Properties

### vm.$data

- **Tipo:** `Oggetto`

- **Dettagli:**

  The data oggetto that the Vue instance is observing. You can swap it with a new oggetto. The Vue instance proxies access to the properties on its data oggetto.

### vm.$el

- **Tipo:** `HTMLElement`

- **Read only**

- **Dettagli:**

  The DOM elemento that the Vue instance is managing. Note that for [Fragment Instances](/guide/components.html#Fragment_Instance), `vm.$el` will return an anchor node that indicates the starting position of the fragment.

### vm.$opzioni

- **Tipo:** `Oggetto`

- **Read only**

- **Dettagli:**

  The instantiation opzioni used for the current Vue instance. This is useful when you want to include custom properties in the opzioni:

  ``` js
  new Vue({
    customOption: 'foo',
    created: function () {
      console.log(this.$opzioni.customOption) // -> 'foo'
    }
  })
  ```

### vm.$parent

- **Tipo:** `Vue instance`

- **Read only**

- **Dettagli:**

  The parent instance, if the current instance has one.

### vm.$root

- **Tipo:** `Vue instance`

- **Read only**

- **Dettagli:**

  The root Vue instance of the current component tree. If the current instance has no parents this valore will be itself.

### vm.$children

- **Tipo:** `Array<Vue instance>`

- **Read only**

- **Dettagli:**

  The direct child components of the current instance.

### vm.$refs

- **Tipo:** `Oggetto`

- **Read only**

- **Dettagli:**

  An oggetto that holds child components that have `v-ref` registraed.

- **Vedi anche:**
  - [Child Component Refs](/guide/components.html#Child_Component_Refs)
  - [v-ref](#v-ref).

### vm.$els

- **Tipo:** `Oggetto`

- **Read only**

- **Dettagli:**

  An oggetto that holds DOM elementi that have `v-el` registraed.

- **Vedi anche:** [v-el](#v-el).

## Instance Methods / Data

<h3 id="vm-watch">vm.$watch( expOFn, funzione, [opzioni] )</h3>

- **Argomenti:**
  - `{Stringa | Funzione} expOFn`
  - `{Funzione} funzione`
  - `{Oggetto} [opzioni]`
    - `{Booleano} deep`
    - `{Booleano} immediate`

- **Restituisce:** `{Funzione} unwatch`

- **Utilizzo:**

  Watch an expression or a computed function on the Vue instance for changes. The funzione gets called with the new valore and the old valore. The expression can be a single chiavepath or any valid binding expressions.

<p class="tip">Note: when mutating (rather than replacing) an Oggetto or an Array, the old valore will be the same as new valore because they reference the same Oggetto/Array. Vue doesn't keep a copy of the pre-mutate valore.</p>

- **Esempio:**

  ``` js
  // chiavepath
  vm.$watch('a.b.c', function (newVal, oldVal) {
    // do something
  })

  // expression
  vm.$watch('a + b', function (newVal, oldVal) {
    // do something
  })

  // function
  vm.$watch(
    function () {
      return this.a + this.b
    },
    function (newVal, oldVal) {
      // do something
    }
  )
  ```

  `vm.$watch` returns an unwatch function that stops firing the funzione:

  ``` js
  var unwatch = vm.$watch('a', cb)
  // later, teardown the watcher
  unwatch()
  ```

- **Option: deep**

  To also detect nested valore changes inside Oggettos, you need to pass in `deep: true` in the opzioni argument. Note that you don't need to do so to listen for Array mutations.

  ``` js
  vm.$watch('someOggetto', funzione, {
    deep: true
  })
  vm.someOggetto.nestedValue = 123
  // funzione is fired
  ```

- **Option: immediate**

  Passing in `immediate: true` in the option will trigger the funzione immediately with the current valore of the expression:

  ``` js
  vm.$watch('a', funzione, {
    immediate: true
  })
  // funzione is fired immediately with current valore of `a`
  ```

<h3 id="vm-get">vm.$get( expression )</h3>

- **Argomenti:**
  - `{Stringa} expression`

- **Utilizzo:**

  Retrieve a valore from the Vue instance given an expression. Expressions that throw errors will be suppressed and return `undefined`.

- **Esempio:**

  ``` js
  var vm = new Vue({
    data: {
      a: {
        b: 1
      }
    }
  })
  vm.$get('a.b') // -> 1
  vm.$get('a.b + 1') // -> 2
  ```

<h3 id="vm-set">vm.$set( chiavepath, valore )</h3>

- **Argomenti:**
  - `{Stringa} chiavepath`
  - `{*} valore`

- **Utilizzo:**

  Set a data valore on the Vue instance given a valid chiavepath. In most cases you should prefer setting properties using plain oggetto syntax, e.g. `vm.a.b = 123`. This method is only needed in two scenarios:

  1. When you have a chiavepath stringa and want to dynamically set the valore using that chiavepath.

  2. When you want to set a property that doesn't exist.

  If the path doesn't exist it will be recursively created and made reactive. If a new root-level reactive property is created due to a `$set` call, the Vue instance will be forced into a "digest cycle", during which all its watchers are re-evaluated.

- **Esempio:**

  ``` js
  var vm = new Vue({
    data: {
      a: {
        b: 1
      }
    }
  })

  // set an existing path
  vm.$set('a.b', 2)
  vm.a.b // -> 2

  // set a non-existent path, will force digest
  vm.$set('c', 3)
  vm.c // ->
  ```

- **Vedi anche:** [Reactivity in Depth](/guide/reactivity.html)

<h3 id="vm-delete">vm.$delete(vchiave )</h3>

- **Argomenti:**
  - `{Stringa} chiave`

- **Utilizzo:**

  Delete a root level property on the Vue instance (and also its `$data`). Forces a digest cycle. Not recommended.

<h3 id="vm-eval">vm.$eval( expression )</h3>

- **Argomenti:**
  - `{Stringa} expression`

- **Utilizzo:**

  Evaluate a valid binding expression on the current instance. The expression can also contain filters.

- **Esempio:**

  ``` js
  // assuming vm.msg = 'hello'
  vm.$eval('msg | uppercase') // -> 'HELLO'
  ```

<h3 id="vm-interpolate">vm.$interpolate( templateStringa )</h3>

- **Argomenti:**
  - `{Stringa} templateStringa`

- **Utilizzo:**

  Evaluate a piece of template stringa containing mustache interpolations. Note that this method simply performs stringa interpolation; attribute directives are ignored.

- **Esempio:**

  ``` js
  // assuming vm.msg = 'hello'
  vm.$interpolate('{{msg}} world!') // -> 'hello world!'
  ```

<h3 id="vm-log">vm.$log( [chiavepath] )</h3>

- **Argomenti:**
  - `{Stringa} [chiavepath]`

- **Utilizzo:**

  Log the current instance data as a plain oggetto, which is more inspection-friendly than a bunch of getter/setters. Also accepts an optional chiave.

  ``` js
  vm.$log() // logs entire ViewModel data
  vm.$log('item') // logs vm.item
  ```

## Instance Methods / Events

<h3 id="vm-on">vm.$on( evento, funzione )</h3>

- **Argomenti:**
  - `{Stringa} evento`
  - `{Funzione} funzione`

- **Utilizzo:**

  Listen for a custom evento on the current vm. Events can be triggered by `vm.$emit`, `vm.$dispatch` or `vm.$broadcast`. The funzione will receive all the additional Argomenti passed into these evento-triggering methods.

- **Esempio:**

  ``` js
  vm.$on('test', function (msg) {
    console.log(msg)
  })
  vm.$emit('test', 'hi')
  // -> "hi"
  ```

<h3 id="vm-once">vm.$once( evento, funzione )</h3>

- **Argomenti:**
  - `{Stringa} evento`
  - `{Funzione} funzione`

- **Utilizzo:**

  Listen for a custom evento, but only once. The listener will be removed once it triggers for the first time.

<h3 id="vm-off">vm.$off( [evento, funzione] )</h3>

- **Argomenti:**
  - `{Stringa} [evento]`
  - `{Funzione} [funzione]`

- **Utilizzo:**

  Remove evento listener(s).

  - If no Argomenti are provided, remove all evento listeners;

  - If only the evento is provided, remove all listeners for that evento;

  - If both evento and funzione are given, remove the listener for that specific funzione only.

<h3 id="vm-emit">vm.$emit( evento, [...argomenti] )</h3>

- **Argomenti:**
  - `{Stringa} evento`
  - `[...argomenti]`

  Trigger an evento on the current instance. Any additional Argomenti will be passed into the listener's funzione function.

<h3 id="vm-dispatch">vm.$dispatch( evento, [...argomenti] )</h3>

- **Argomenti:**
  - `{Stringa} evento`
  - `[...argomenti]`

- **Utilizzo:**

  Dispatch an evento, first triggering it on the instance itself, and then propagates upward along the parent chain. The propagation stops when it triggers a parent evento listener, unless that listener returns `true`. Any additional Argomenti will be passed into the listener's funzione function.

- **Esempio:**

  ``` js
  // create a parent chain
  var parent = new Vue()
  var child1 = new Vue({ parent: parent })
  var child2 = new Vue({ parent: child1 })

  parent.$on('test', function () {
    console.log('parent notified')
  })
  child1.$on('test', function () {
    console.log('child1 notified')
  })
  child2.$on('test', function () {
    console.log('child2 notified')
  })

  child2.$dispatch('test')
  // -> "child2 notified"
  // -> "child1 notified"
  // parent is NOT notified, because child1 didn't return
  // true in its funzione
  ```

- **Vedi anche:** [Parent-Child Communication](/guide/components.html#Parent-Child_Communication)

<h3 id="vm-broadcast">vm.$broadcast( evento, [...argomenti] )</h3>

- **Argomenti:**
  - `{Stringa} evento`
  - `[...argomenti]`

- **Utilizzo:**

  Broadcast an evento that propagates downward to all descendants of the current instance. Since the descendants expand into multiple sub-trees, the evento propagation will follow many different "paths". The propagation for each path will stop when a listener funzione is fired along that path, unless the funzione returns `true`.

- **Esempio:**

  ``` js
  var parent = new Vue()
  // child1 and child2 are siblings
  var child1 = new Vue({ parent: parent })
  var child2 = new Vue({ parent: parent })
  // child3 is nested under child2
  var child3 = new Vue({ parent: child2 })

  child1.$on('test', function () {
    console.log('child1 notified')
  })
  child2.$on('test', function () {
    console.log('child2 notified')
  })
  child3.$on('test', function () {
    console.log('child3 notified')
  })

  parent.$broadcast('test')
  // -> "child1 notified"
  // -> "child2 notified"
  // child3 is NOT notified, because child2 didn't return
  // true in its funzione
  ```

## Instance Methods / DOM

<h3 id="vm-appendTo">vm.$appendTo( elementoOSelettore, [funzione] )</h3>

- **Argomenti:**
  - `{Element | Stringa} elementoOSelettore`
  - `{Funzione} [funzione]`

- **Restituisce:** `vm` - the instance itself

- **Utilizzo:**

  Append the Vue instance's DOM elemento or fragment to target elemento. The target can be either an elemento or a querySelettore stringa. This method will trigger transitions if present. The funzione is fired after the transition has completed (or immediately if no transition has been triggered).

<h3 id="vm-before">vm.$before( elementoOSelettore, [funzione] )</h3>

- **Argomenti:**
  - `{Element | Stringa} elementoOSelettore`
  - `{Funzione} [funzione]`

- **Restituisce:** `vm` - the instance itself

- **Utilizzo:**

  Insert the Vue instance's DOM elemento or fragment before target elemento. The target can be either an elemento or a querySelettore stringa. This method will trigger transitions if present. The funzione is fired after the transition has completed (or immediately if no transition has been triggered).

<h3 id="vm-after">vm.$after( elementoOSelettore, [funzione] )</h3>

- **Argomenti:**
  - `{Element | Stringa} elementoOSelettore`
  - `{Funzione} [funzione]`

- **Restituisce:** `vm` - the instance itself

- **Utilizzo:**

  Insert the Vue instance's DOM elemento or fragment after target elemento. The target can be either an elemento or a querySelettore stringa. This method will trigger transitions if present. The funzione is fired after the transition has completed (or immediately if no transition has been triggered).

<h3 id="vm-remove">vm.$remove( [funzione] )</h3>

- **Argomenti:**
  - `{Funzione} [funzione]`

- **Restituisce:** `vm` - the instance itself

- **Utilizzo:**

  Remove the Vue instance's DOM elemento or fragment from the DOM. This method will trigger transitions if present. The funzione is fired after the transition has completed (or immediately if no transition has been triggered).

<h3 id="vm-nextTick">vm.$nextTick( funzione )</h3>

- **Argomenti:**
  - `{Funzione} [funzione]`

- **Utilizzo:**

  Defer the funzione to be executed after the next DOM update cycle. Use it immediately after you've changed some data to wait for the DOM update. This is the same as the global `Vue.nextTick`, except that the funzione's `this` context is automatically bound to the instance calling this method.

- **Esempio:**

  ``` js
  new Vue({
    // ...
    methods: {
      // ...
      Esempio: function () {
        // modify data
        this.message = 'changed'
        // DOM is not updated yet
        this.$nextTick(function () {
          // DOM is now updated
          // `this` is bound to the current instance
          this.doSomethingElse()
        })
      }
    }
  })
  ```

- **Vedi anche:**
  - [Vue.nextTick](#Vue-nextTick)
  - [Async Update Queue](/guide/reactivity.html#Async_Update_Queue)

## Instance Methods / Lifecycle

<h3 id="vm-mount">vm.$mount( [elementoOSelettore] )</h3>

- **Argomenti:**
  - `{Element | Stringa} [elementoOSelettore]`

- **Restituisce:** `vm` - the instance itself

- **Utilizzo:**

  If a Vue instance didn't receive the `el` option at instantiation, it will be in "unmounted" state, without an associated DOM elemento or fragment. `vm.$mount()` can be used to manually start the mounting/compilation of an unmounted Vue instance.

  If no argument is provided, the template will be created as an out-of-document fragment, and you will have to use other DOM instance methods to insert it into the document yourself. If `replace` option is set to `falso`, then an empty `<div>` will be automatically created as the wrapper elemento.

  Calling `$mount()` on an already mounted instance will have no effect. The method returns the instance itself so you can chain other instance methods after it.

- **Esempio:**

  ``` js
  var MyComponent = Vue.extend({
    template: '<div>Hello!</div>'
  })

  // create and mount to #app (will replace #app)
  new MyComponent().$mount('#app')

  // the above is the same as:
  new MyComponent({ el: '#app' })

  // or, compile off-document and append afterwards:
  new MyComponent().$mount().$appendTo('#container')
  ```

- **Vedi anche:** [Lifecycle Diagram](/guide/instance.html#Lifecycle_Diagram)

<h3 id="vm-destroy">vm.$destroy( [remove] )</h3>

- **Argomenti:**
  - `{Booleano} [remove] - Predefinito: falso`

- **Utilizzo:**

  Completely destroy a vm. Clean up its connections with other existing vms, unbind all its directives, turn off all evento listeners and, if the `remove` argument is true, remove its associated DOM elemento or fragment from the DOM.

  Triggers the `beforeDestroy` and `destroyed` hooks.

- **Vedi anche:** [Lifecycle Diagram](/guide/instance.html#Lifecycle_Diagram)

## Directives

### v-text

- **Expects:** `Stringa`

- **Dettagli:**

  Updates the elemento's `textContent`.

  Internally, `{% raw %}{{ Mustache }}{% endraw %}` interpolations are also compiled as a `v-text` directive on a textNode. The directive form requires a wrapper elemento, but offers slightly better performance and avoids FOUC (Flash of Uncompiled Content).

- **Esempio:**

  ``` html
  <span v-text="msg"></span>
  <!-- same as -->
  <span>{{msg}}</span>
  ```

### v-html

- **Expects:** `Stringa`

- **Dettagli:**

  Updates the elemento's `innerHTML`. The contents are inserted as plain HTML - data bindings are ignored. If you need to reuse template pieces, you should use [partials](#partial).

  Internally, `{% raw %}{{{ Mustache }}}{% endraw %}` interpolations are also compiled as a `v-html` directive using anchor nodes. The directive form requires a wrapper elemento, but offers slightly better performance and avoids FOUC (Flash of Uncompiled Content).

  <p class="tip">Dynamically rendering arbitrary HTML on your website can be very dangerous because it can easily lead to [XSS attacks](https://en.wikipedia.org/wiki/Cross-site_scripting). Only use `v-html` on trusted content and **never** on user-provided content.</p>

- **Esempio:**

  ``` html
  <div v-html="html"></div>
  <!-- same as -->
  <div>{{{html}}}</div>
  ```

### v-if

- **Expects:** `*`

- **Utilizzo:**

  Conditionally render the elemento based on the truthy-ness of the expression valore. The elemento and its contained data bindings / components are destroyed and re-constructed during toggles. If the elemento is a `<template>` elemento, its content will be extracted as the conditional block.

- **Vedi anche:** [Conditional Rendering](/guide/conditional.html)

### v-show

- **Expects:** `*`

- **Utilizzo:**

  Toggle's the elemento's `display` CSS property based on the truthy-ness of the expression valore. Triggers transitions if present.

- **Vedi anche:** [Conditional Rendering - v-show](/guide/conditional.html#v-show)

### v-else

- **Does not expect expression**

- **Restriction:** previous sibling elemento must have `v-if` or `v-show`.

- **Utilizzo:**

  Denote the "else block" for `v-if` and `v-show`.

  ``` html
  <div v-if="Math.random() > 0.5">
    Sorry
  </div>
  <div v-else>
    Not sorry
  </div>
  ```

- **Vedi anche:** [Conditional Rendering - v-else](/guide/conditional.html#v-else)

### v-for

- **Expects:** `Array | Oggetto | Number | Stringa`

- **Param Attributes:**
  - [`track-by`](/guide/list.html#track-by)
  - [`stagger`](/guide/transitions.html#Staggering_Transitions)
  - [`enter-stagger`](/guide/transitions.html#Staggering_Transitions)
  - [`leave-stagger`](/guide/transitions.html#Staggering_Transitions)

- **Utilizzo:**

  Render the elemento or template block multiple times based on the source data. The expression must use the special syntax to provide an alias for the current elemento being iterated on:

  ``` html
  <div v-for="item in items">
    {{ item.text }}
  </div>
  ```

  Alternatively, you can also specify an alias for the index (or the chiave if used on an Oggetto):

  ``` html
  <div v-for="(index, item) in items"></div>
  <div v-for="(chiave, val) in oggetto"></div>
  ```

  The detailed Utilizzo for `v-for` is explained in the guide section linked below.

- **Vedi anche:** [List Rendering](/guide/list.html).

### v-on

- **Shorthand:** `@`

- **Expects:** `Funzione | Inline Statement`

- **Argument:** `evento (required)`

- **Modifiers:**
  - `.stop` - call `event.stopPropagation()`.
  - `.prevent` - call `event.preventDefault()`.
  - `.capture` - add evento listener in capture mode.
  - `.self` - only trigger handler if evento was dispatched from this elemento.
  - `.{chiaveCode | chiaveAlias}` - only trigger handler on certain chiaves.

- **Utilizzo:**

  Attaches an evento listener to the elemento. The evento Tipo is denoted by the argument. The expression can either be a method name or an inline statement, or simply omitted when there are modifiers present.

  When used on a normal elemento, it listens to **native DOM eventi** only. When used on a custom elemento component, it also listens to **custom eventi** emitted on that child component.

  When listening to native DOM eventi, the method receives the native evento as the only argument. If using inline statement, the statement has access to the special `$evento` property: `v-on:click="handle('ok', $evento)"`.

  **1.0.11+** When listening the custom eventi, inline statements have access to the special `$Argomenti` property, which is an array of the additional Argomenti passed to the child components' `$emit` call.

- **Esempio:**

  ``` html
  <!-- method handler -->
  <button v-on:click="doThis"></button>

  <!-- inline statement -->
  <button v-on:click="doThat('hello', $evento)"></button>

  <!-- shorthand -->
  <button @click="doThis"></button>

  <!-- stop propagation -->
  <button @click.stop="doThis"></button>

  <!-- prevent Predefinito -->
  <button @click.prevent="doThis"></button>

  <!-- prevent Predefinito without expression -->
  <form @submit.prevent></form>

  <!-- chain modifiers -->
  <button @click.stop.prevent="doThis"></button>

  <!-- chiave modifier using chiaveAlias -->
  <input @chiaveup.enter="onEnter">

  <!-- chiave modifier using chiaveCode -->
  <input @chiaveup.13="onEnter">
  ```

  Listening to custom eventi on a child component (the handler is called when "my-evento" is emitted on the child):

  ``` html
  <my-component @my-event="handleThis"></my-component>

  <!-- inline statement -->
  <my-component @my-event="handleThis(123, $Argomenti)"></my-component>
  ```

- **Vedi anche:** [Methods and Event Handling](/guide/events.html)

### v-bind

- **Shorthand:** `:`

- **Expects:** `* (with argument) | Oggetto (without argument)`

- **Argument:** `attrOProp (optional)`

- **Modifiers:**
  - `.sync` - make the binding two-way. Only respected for prop bindings.
  - `.once` - make the binding one-time. Only respected for prop bindings.
  - `.camel` - convert the attribute name to camelCase when setting it. Only respected for normal attributes. Used for binding camelCase SVG attributes.

- **Utilizzo:**

  Dynamically bind one or more attributes, or a component prop to an expression.

  When used to bind the `class` or `style` attribute, it supports additional valore Tipos such as Array or Oggettos. See linked guide section below for more details.

  When used for prop binding, the prop must be properly declared in the child component. Prop bindings can specify a different binding Tipo using one of the modifiers.

  When used without an argument, can be used to bind an oggetto containing attribute name-valore pairs. Note in this mode `class` and `style` does not support Array or Oggettos.

- **Esempio:**

  ``` html
  <!-- bind an attribute -->
  <img v-bind:src="imageSrc">

  <!-- shorthand -->
  <img :src="imageSrc">

  <!-- class binding -->
  <div :class="{ red: isRed }"></div>
  <div :class="[classA, classB]"></div>

  <!-- style binding -->
  <div :style="{ fontSize: size + 'px' }"></div>
  <div :style="[styleOggettoA, styleOggettoB]"></div>

  <!-- binding an oggetto of attributes -->
  <div v-bind="{ id: someProp, 'other-attr': otherProp }"></div>

  <!-- prop binding. "prop" must be declared in my-component. -->
  <my-component :prop="someThing"></my-component>

  <!-- two-way prop binding -->
  <my-component :prop.sync="someThing"></my-component>

  <!-- one-time prop binding -->
  <my-component :prop.once="someThing"></my-component>
  ```

- **Vedi anche:**
  - [Class and Style Bindings](/guide/class-and-style.html)
  - [Component Props](/guide/components.html#Props)

### v-model

- **Expects:** varies based on input Tipo

- **Limited to:**
  - `<input>`
  - `<select>`
  - `<textarea>`

- **Param Attributes:**
  - [`lazy`](/guide/forms.html#lazy)
  - [`number`](/guide/forms.html#number)
  - [`debounce`](/guide/forms.html#debounce)

- **Utilizzo:**

  Create a two-way binding on a form input elemento. For detailed Utilizzo, see guide section linked below.

- **Vedi anche:** [Form Input Bindings](/guide/forms.html)

### v-ref

- **Does not expect expression**

- **Limited to:** child components

- **Argument:** `id (required)`

- **Utilizzo:**

  Register a reference to a child component on its parent for direct access. Does not expect an expression. Must provide an argument as the id to registra with. The component instance will be accessible on its parent's `$refs` oggetto.

  When used on a component together with `v-for`, the registraed valore will be an Array containing all the child component instances corresponding to the Array they are bound to. If the data source for `v-for` is an Oggetto, the registraed valore will be an Oggetto containing chiave-instance pairs mirroring the source Oggetto.

- **Note:**

  Because HTML is case-insensitive, camelCase Utilizzo like `v-ref:someRef` will be converted to all lowercase. You can use `v-ref:some-ref` which properly sets `this.$refs.someRef`.

- **Esempio:**

  ``` html
  <comp v-ref:child></comp>
  <comp v-ref:some-child></comp>
  ```

  ``` js
  // access from parent:
  this.$refs.child
  this.$refs.someChild
  ```

  With `v-for`:

  ``` html
  <comp v-ref:list v-for="item in list"></comp>
  ```

  ``` js
  // this will be an array in parent
  this.$refs.list
  ```

- **Vedi anche:** [Child Component Refs](/guide/components.html#Child_Component_Refs)

### v-el

- **Does not expect expression**

- **Argument:** `id (required)`

- **Utilizzo:**

  Register a reference to a DOM elemento on its owner Vue instance's `$els` oggetto for easier access.

- **Note:**

  Because HTML is case-insensitive, camelCase Utilizzo like `v-el:someEl` will be converted to all lowercase. You can use `v-el:some-el` which properly sets `this.$els.someEl`.

- **Esempio:**

  ``` html
  <span v-el:msg>hello</span>
  <span v-el:other-msg>world</span>
  ```
  ``` js
  this.$els.msg.textContent // -> "hello"
  this.$els.otherMsg.textContent // -> "world"
  ```

### v-pre

- **Does not expect expression**

- **Utilizzo**

  Skip compilation for this elemento and all its children. You can use this for displaying raw mustache tags. Skipping large numbers of nodes with no directives on them can also speed up compilation.

- **Esempio:**

  ``` html
  <span v-pre>{{ this will not be compiled }}</span>
  ```

### v-cloak

- **Does not expect expression**

- **Utilizzo:**

  This directive will remain on the elemento until the associated Vue instance finishes compilation. Combined with CSS rules such as `[v-cloak] { display: none }`, this directive can be used to hide un-compiled mustache bindings until the Vue instance is ready.

- **Esempio:**

  ``` css
  [v-cloak] {
    display: none;
  }
  ```

  ``` html
  <div v-cloak>
    {{ message }}
  </div>
  ```

  The `<div>` will not be visible until the compilation is done.

## Special Elements

### component

- **Attributes:**
  - `is`

- **Param Attributes:**
  - [`keep-alive`](/guide/components.html#keep-alive)
  - [`transition-mode`](/guide/components.html#transition-mode)

- **Utilizzo:**

  Alternative syntax for invoking components. Primarily used for dynamic components with the `is` attribute:

  ``` html
  <!-- a dynamic component controlled by -->
  <!-- the `componentId` property on the vm -->
  <component :is="componentId"></component>
  ```

- **Vedi anche:** [Dynamic Components](/guide/components.html#Dynamic_Components)

### slot

- **Attributes:**
  - `name`

- **Utilizzo:**

  `<slot>` elementi serve as content distribution outlets in component templates. The slot elemento itself will be replaced.

  A slot with the `name` attribute is called a named slot. A named slot will distribute content with a `slot` attribute that matches its name.

  For detailed Utilizzo, see the guide section linked below.

- **Vedi anche:** [Content Distribution with Slots](/guide/components.html#Content_Distribution_with_Slots)

### partial

- **Attributes:**
  - `name`

- **Utilizzo:**

  `<partial>` elementi serve as outlets for registraed template partials. Partial contents are also compiled by Vue when inserted. The `<partial>` elemento itself will be replaced. It requires a `name` attribute which will be used to resolve the partial's content.

- **Esempio:**

  ``` js
  // registraing a partial
  Vue.partial('my-partial', '<p>This is a partial! {{msg}}</p>')
  ```

  ``` html
  <!-- a static partial -->
  <partial name="my-partial"></partial>

  <!-- a dynamic partial -->
  <!-- renders partial with id === vm.partialId -->
  <partial v-bind:name="partialId"></partial>

  <!-- dynamic partial using v-bind shorthand -->
  <partial :name="partialId"></partial>
  ```

## Filters

### capitalize

- **Esempio:**

  ``` html
  {{ msg | capitalize }}
  ```

  *'abc' => 'Abc'*

### uppercase

- **Esempio:**

  ``` html
  {{ msg | uppercase }}
  ```

  *'abc' => 'ABC'*

### lowercase

- **Esempio:**

  ``` html
  {{ msg | lowercase }}
  ```

  *'ABC' => 'abc'*

### currency

- **Argomenti:**
  - `{Stringa} [symbol] - Predefinito: '$'`

- **Esempio:**

  ``` html
  {{ amount | currency }}
  ```

  *12345 => $12,345.00*

  Use a different symbol:

  ``` html
  {{ amount | currency '£' }}
  ```

  *12345 => £12,345.00*

### pluralize

- **Argomenti:**
  - `{Stringa} single, [double, triple, ...]`

- **Utilizzo:**

  Pluralizes the argument based on the filtered valore. When there is exactly one argument, plural forms simply add an "s" at the end. When there are more than one argument, the Argomenti will be used as array of stringas corresponding to the single, double, triple ... forms of the word to be pluralized. When the number to be pluralized exceeds the length of the Argomenti, it will use the last entry in the array.

- **Esempio:**

  ``` html
  {{count}} {{count | pluralize 'item'}}
  ```

  *1 => '1 item'*  
  *2 => '2 items'*

  ``` html
  {{date}}{{date | pluralize 'st' 'nd' 'rd' 'th'}}
  ```

  Will result in:

  *1 => '1st'*  
  *2 => '2nd'*
  *3 => '3rd'*
  *4 => '4th'*
  *5 => '5th'*

### json

- **Argomenti:**
  - `{Number} [indent] - Predefinito: 2`

- **Utilizzo:**

  Output the result of calling `JSON.stringaify()` on the valore instead of outputting the `toStringa()` valore (e.g. `[oggetto Oggetto]`).

- **Esempio:**

  Print an oggetto with 4-space indent:

  ``` html
  <pre>{{ nestedOggetto | json 4 }}</pre>
  ```

### debounce

- **Limited to:** directives that expect `Funzione` valores, e.g. `v-on`

- **Argomenti:**
  - `{Number} [wait] - Predefinito: 300`

- **Utilizzo:**

  Wrap the handler to debounce it for `x` milliseconds, where `x` is the argument. Predefinito wait time is 300ms. A debounced handler will be delayed until at least `x` ms has passed after the call moment; if the handler is called again before the delay period, the delay period is reset to `x` ms.

- **Esempio:**

  ``` html
  <input @chiaveup="onKeyup | debounce 500">
  ```

### limitBy

- **Limited to:** directives that expect `Array` valores, e.g. `v-for`

- **Argomenti:**
  - `{Number} limit`
  - `{Number} [offset]`

- **Utilizzo:**

  Limit the array to the first N items, as specified by the argument. An optional second argument can be provided to set a starting offset.

  ``` html
  <!-- only display first 10 items -->
  <div v-for="item in items | limitBy 10"></div>

  <!-- display items 5 to 15 -->
  <div v-for="item in items | limitBy 10 5"></div>
  ```

### filterBy

- **Limited to:** directives that expect `Array` valores, e.g. `v-for`

- **Argomenti:**
  - `{Stringa | Funzione} targetStringaOFunzione`
  - `"in" (optional delimiter)`
  - `{Stringa} [...searchKeys]`

- **Utilizzo:**

  Return a filtered version of the source Array. The first argument can either be a stringa or a function.

  When the first argument is a stringa, it will be used as the target stringa to search for in each elemento of the Array:

  ``` html
  <div v-for="item in items | filterBy 'hello'">
  ```

  In the above Esempio, only items that contain the target stringa `"hello"` will be displayed.

  If the item is an oggetto, the filter will recursively search every nested property of the oggetto for the target stringa. To narrow down the search scope, additional search chiaves can be specified:

  ``` html
  <div v-for="user in users | filterBy 'Jack' in 'name'">
  ```

  In the above Esempio, the filter will only search for `"Jack"` in the `name` field of each user oggetto. **It is a good idea to always limit the search scope for better performance.**

  The Esempios above are using static Argomenti - we can, of course, use dynamic Argomenti as target stringa or search chiaves. Combined with `v-model` we can easily implement Tipo-ahead filtering:

  ``` html
  <div id="filter-by-Esempio">
    <input v-model="name">
    <ul>
      <li v-for="user in users | filterBy name in 'name'">
        {{ user.name }}
      </li>
    </ul>
  </div>
  ```

  ``` js
  new Vue({
    el: '#filter-by-Esempio',
    data: {
      name: '',
      users: [
        { name: 'Bruce' },
        { name: 'Chuck' },
        { name: 'Jackie' }
      ]
    }
  })
  ```

  {% raw %}
  <div id="filter-by-Esempio" class="demo">
    <input v-model="name">
    <ul>
      <li v-for="user in users | filterBy name in 'name'">
        {{ user.name }}
      </li>
    </ul>
  </div>
  <script>
  new Vue({
    el: '#filter-by-Esempio',
    data: {
      name: '',
      users: [{ name: 'Bruce' }, { name: 'Chuck' }, { name: 'Jackie' }]
    }
  })
  </script>
  {% endraw %}

- **Additional Esempios:**

  Multiple search chiaves:

  ``` html
  <li v-for="user in users | filterBy searchText in 'name' 'phone'"></li>
  ```

  Multiple search chiaves with a dynamic Array argument:

  ``` html
  <!-- fields = ['fieldA', 'fieldB'] -->
  <div v-for="user in users | filterBy searchText in fields">
  ```

  Use a custom filter function:

  ``` html
  <div v-for="user in users | filterBy myCustomFilterFunzione">
  ```

### orderBy

- **Limited to:** directives that expect `Array` valores, e.g. `v-for`

- **Argomenti:**
  - `{Stringa} sortKey`
  - `{Stringa} [order] - Predefinito: 1`

- **Utilizzo:**

  Return a sorted version of the source Array. The `sortKey` is the chiave to use for the sorting. The optional `order` argument specifies whether the result should be in ascending (`order >= 0`) or descending (`order < 0`) order.

  For arrays of primitive valores, any truthy `sortKey` will work.

- **Esempio:**

  Sort users by name:

  ``` html
  <ul>
    <li v-for="user in users | orderBy 'name'">
      {{ user.name }}
    </li>
  </ul>
  ```

  In descending order:

  ``` html
  <ul>
    <li v-for="user in users | orderBy 'name' -1">
      {{ user.name }}
    </li>
  </ul>
  ```

  Sort primitive valores:

  ``` html
  <ul>
    <li v-for="n in numbers | orderBy true">
      {{ n }}
    </li>
  </ul>
  ```

  Dynamic sort order:

  ``` html
  <div id="orderby-Esempio">
    <button @click="order = order * -1">Reverse Sort Order</button>
    <ul>
      <li v-for="user in users | orderBy 'name' order">
        {{ user.name }}
      </li>
    </ul>
  </div>
  ```

  ``` js
  new Vue({
    el: '#orderby-Esempio',
    data: {
      order: 1,
      users: [{ name: 'Bruce' }, { name: 'Chuck' }, { name: 'Jackie' }]
    }
  })
  ```

  {% raw %}
  <div id="orderby-Esempio" class="demo">
    <button @click="order = order * -1">Reverse Sort Order</button>
    <ul>
      <li v-for="user in users | orderBy 'name' order">
        {{ user.name }}
      </li>
    </ul>
  </div>
  <script>
  new Vue({
    el: '#orderby-Esempio',
    data: {
      order: 1,
      users: [{ name: 'Bruce' }, { name: 'Chuck' }, { name: 'Jackie' }]
    }
  })
  </script>
  {% endraw %}
