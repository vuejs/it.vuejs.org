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

- **Restrizioni:** Accetta una funzione quando è utilizzato all interno di una definizione di un componente.

- **Dettagli:**

  Quando viene passato alla proprietà data di Vue.js, quest'ultimo cercherà di convertire, in modo ricorsivo, tutte le proprietà in getter/setter in modo da renderle "reattive".
  **L'oggetto dev'essere nativo**: eventuali getter/setter già presenti verranno ignorati. Non è raccomandato osservare oggetti complessi.

  Quando definite un **componente**, la proprietà `data` dev'essere dichiarata come funzione la quale restituisce l'oggetto finale, questo perchè vi possono essere più istanze dello stesso componente.
  Se non facessimo così ogni istanza del componente **avrebbe una proprietà data condivisa** tra tutte le istanze del componente stesso. Con la funzione, invece, ogni istanza avrà sempre una copia diversa della proprietà data.

  Una volta che l'istanza è creata, l'oggetto originale potrà essere utilizzato tramite `vm.$data`. L'istanza di Vue farà anche da Proxy per tutte le proprietà trovate nell'ogetto data.

  Le proprietà che iniziano con `_` o `$` **non verranno** incluse nel sistema di Proxy di Vue.js perchè potrebbero dare problemi con alcuni metodi interni di Vue stesso. Potrete comunque accedervi tramite `vm.$data._property`.

  Se avete bisogno di un clone fedele dell oggetto originale, potete ottenerlo usando `vm.$data` tramite `JSON.parse(JSON.stringify(...))`.

- **Esempio:**

  ``` js
  var data = { a: 1 }

  // Creazione di un istanza
  var vm = new Vue({
    data: data
  })
  vm.a // -> 1
  vm.$data === data // -> vero

  // utilizzo tramite funzione
  var Component = Vue.extend({
    data: function () {
      return { a: 1 }
    }
  })
  ```

- **Vedi anche:** [Reattività nel dettaglio](/guide/reactivity.html).

### props

- **Tipo:** `Array | Oggetto`

- **Dettagli:**

  Una lista di possibili attributi pubblici che vengono utilizzati per accettare dati dal componente padre nel DOM.
  Ha la sintassi tipica di un Array, ma può essere anche un Oggetto nel caso si vogliano passare configurazioni più complesse, come il controllo del tipo di dato e/o eventuali validazioni.

- **Esempio:**

  ``` js
  // sintassi semplice
  Vue.component('props-demo-simple', {
    props: ['size', 'myMessage']
  })

  // sintassi ad oggetto
  Vue.component('props-demo-advanced', {
    props: {
      // controllo sul tipo di dato
      size: Number,
      // controllo sul tipo di dato più validazione
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

  L'oggetto computed contiene tutte le proprietà derivate che dipendono da altre proprietà. Il contesto interno di computed è sempre legato all'istanza di Vue corrente.

- **Esempio:**

  ```js
  var vm = new Vue({
    data: { a: 1 },
    computed: {
      // solo getter
      aDouble: function () {
        return this.a * 2
      },
      // anche setter
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
  - [Proprietà Derivate](/guide/computed.html)
  - [Reattività in Dettaglio: Le Properità Derivate](/guide/reactivity.html#Inside_Computed_Properties)

### methods

- **Tipo:** `Oggetto`

- **Dettagli:**

  Methods è un oggetto che contiene nuove funzioni che possono essere usate dall'istanza corrente di Vue. Questi metodi possono essere usanti anche internamente al DOM, sottoforma di espressioni.
  Tutti i metodi creati dentro Methods avranno `this` puntato all'istanza di Vue.

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

- **Vedi anche:** [Gestione dei Metodi ed Eventi](/guide/Eventi.html)

### watch

- **Tipo:** `Oggetto`

- **Dettagli:**

  Watch contiene delle funzioni dove la chiave è l'espressione da osservare ed il corpo della funzione è il valore di tale chiave.
  La funzione può essere anche una stringa che punta ad un Metodo interno alla proprietà Methods vista precedentemente oppure un oggetto che contiene un handler, la funzione, e la "profondità" del watch stesso.
  L'istanza di Vue chiamerà `$watch()` per ogni chiave in data al momento dell'istanziazione.

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
      // Metodo come stringa
      'b': 'someMethod',
      // Oggetto
      'c': {
        handler: function (val, oldVal) { /* ... */ },
        deep: true
      }
    }
  })
  vm.a = 2 // -> new: 2, old: 1
  ```

- **Vedi anche:** [Metodi di Istanza - vm.$watch](#vm-watch)

## Opzioni / DOM

### el

- **Tipo:** `Stringa | ElementoHTML | Funzione`

- **Restrizioni:** Accetta solo il tipo `Funzione` quando viene utilizzato dentro la definizione di un componente.

- **Dettagli:**

  Fornisce all'istanza di Vue un elemento del DOM al quale legarsi. Può essere un selettore CSS, un elemento HTML oppure una funzione che restituisce un elemento HTML.
  Si noti che l'elemento passato serve solo come ancora per Vue; Se tale elemento è un template, esso verrà rimpiazzato a meno che il parametro `replace` è falso. L'elemento infine sarà accessibile tramite `vm.$el`.

  Quando si usa `Vue.extend`, bisogna fornire una funzione in modo tale che ogni istanza successiva sia separata dalla precedente.

  Se questa opzione è disponibile durante l'istanziazione, l'istanza verrà immessa subito dopo la compilazione; altrimenti dovrete specificare voi, tramite `vm.$mount()` quando far partire la compilazione.

- **Vedi anche:** [Diagramma del Cilo di Vita](/guide/instance.html#Lifecycle_Diagram)

### template

- **Tipo:** `Stringa`

- **Dettagli:**

  Un template, formato stringa, da usare come markup per l'istanza di Vue. Per definizione il template andrà a **sostituire** l'elemento sul quale Vue si lega.
  Quando l'opzione `replace` è impostata su `false`, il template verrà inserito dentro l'elemento sul quale Vue si lega.
  In entrambi i casi, tutto il markup interno all'elemento verrà ignorato. A meno che non vi siano degli Slot per la Distribuzione dei Contenuti.

  Se la stringa inizia con `#` verrà usata come `querySelector` e verrà presa in considerazione tutta la porzione di HTML interna al template.
  Questo permette l'uso del comune tag `<script Tipo="x-template">`.

  Da notare che in alcune situazioni, per esempio quando il template contiene un altro template di alto livello o del semplice testo, l'istanza create diventerà un Istanza Frammentata.

- **Vedi anche:**
  - [Diagramma del Ciclo di Vita](/guide/instance.html#Lifecycle_Diagram)
  - [Distribuizione dei Contenuti](/guide/components.html#Content_Distribution_with_Slots)
  - [Istanza Frammentata](/guide/components.html#Fragment_Instance)

### replace

- **Tipo:** `Booleano`  

- **Predefinito:** `true`

- **Restrizioni:** Viene presa in considerazione solo se **template** è presente.

- **Dettagli:**

  Determina se rimpiazzare l'elemento al quale l'istanza è legata con il template fornito. Se è impostata su `false`, il template sostituirà il contenuto HTML dell elemento al quale l'istanza è stata legata e non il tuo markup totale.

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

  Risulterà in:

  ``` html
  <p>replaced</p>
  ```

  Quando `replace` è su `false`:

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

  Risulterà in:

  ``` html
  <div id="insert">
    <p>inserted</p>
  </div>
  ```

## Opzioni / Funzioni per il Ciclo di Vita

### init

 - **Tipo:** `Funzione`

 - **Dettagli:**

   Questa funzione viene chiamata in moto sincrono dopo l'istanziazione ma prima di aver processare qualsiasi properità dell'istanza.

 - **Vedi anche:** [Diagramma del Ciclo di Vita](/guide/instance.html#Lifecycle_Diagram)

### created

- **Tipo:** `Funzione`

- **Dettagli:**

  Questa funzione viene chiamata in modo sincrono dopo che l'istanza di Vue viene creata. In questo statio, l'istanza ha già finito di processare le properità e le opzioni, il che significa 
  che le seguenti caratteristiche sono già state istanziate: Osservazione dei dati, Proprietà derivate, Metodi, Sistema di watching ed Eventi.
  In questo stadio manca solo la compilazione del DOM e l'elemento `$el` non è ancora disponibile.

- **Vedi anche:** [Diagramma del Ciclo di Vita](/guide/instance.html#Lifecycle_Diagram)

### beforeCompile

- **Tipo:** `Funzione`

- **Dettagli:**

  Questa funzione viene chiamata prima che la compilazione inizi.

- **Vedi anche:** [Diagramma del Ciclo di Vita](/guide/instance.html#Lifecycle_Diagram)

### compiled

- **Tipo:** `Funzione`

- **Dettagli:**

  Questa funzione viene chiamata dopo che la compilazione è finita. In questo stadio tutte le direttive sono state linkate ai dati e scateneranno gli eventi di aggiornamento del DOM.
  Comunque sia ancora non è disponibile la proprietà `$el`.

- **Vedi anche:** [Diagramma del Ciclo di Vita](/guide/instance.html#Lifecycle_Diagram)

### ready

- **Tipo:** `Funzione`

- **Dettagli:**

  Questa funzione viene chiamata dopo che la compilazione **e** la proprietà `$el` è **stata inserita nel documento per le prima volta**,
  per esempio subito dopo la funzione `attached`.

- **Vedi anche:** [Diagramma del Ciclo di Vita](/guide/instance.html#Lifecycle_Diagram)

### attached

- **Tipo:** `Funzione`

- **Dettagli:**

  Questa funzione viene chiamata quando la properità `vm.$el` è stata legata al DOM tramite una direttiva oppure tramite un metodo di Vue come `$appendTo()`. Direct manipulation of `vm.$el` will **not** trigger this hook.

### detached

- **Tipo:** `Funzione`

- **Dettagli:**

  Questa funzione viene chiamata quando la properità `vm.$el` viene rimossa dal DOM tramite una direttiva oppure tramite un metodo dell'istanza di Vue.
  La manipolazione diretta di `vm.$el` **non** attiverà questa funzione.

### beforeDestroy

- **Tipo:** `Funzione`

- **Dettagli:**

  Questa funzione viene chiamata proprio prima che l'istanza di Vue venga distrutta. In questo stadio l'istanza è ancora funzionante al 100%.

- **Vedi anche:** [Diagramma del Ciclo di Vita](/guide/instance.html#Lifecycle_Diagram)

### destroyed

- **Tipo:** `Funzione`

- **Dettagli:**

  Questa funzione viene chiamata quando l'istanza di Vue è stata distrutta. Al momento della chiamata, tutte le direttive ed i vincoli dei dati sono stati rimossi e l'istanza stessa distrutta.

  Da notare che se vi è una transizione in corso la funzione `destroyed` viene chiamata **dopo** che la transizione è finita.

- **Vedi anche:** [Diagramma del Ciclo di Vita](/guide/instance.html#Lifecycle_Diagram)

## Opzioni / Assets

### directives

- **Tipo:** `Oggetto`

- **Dettagli:**

  Un hash delle direttive disponibile dall'istanza di Vue.

- **Vedi anche:**
  - [Custom Directives](/guide/custom-directive.html)
  - [Assets Naming Convention](/guide/components.html#Assets_Naming_Convention)

### elementDirectives

- **Tipo:** `Oggetto`

- **Dettagli:**

  Un Hash degli elementi delle direttive disponibile dall'istanza di Vue.

- **Vedi anche:**
  - [Element Directives](/guide/custom-directive.html#Element_Directives)
  - [Assets Naming Convention](/guide/components.html#Assets_Naming_Convention)

### filters

- **Tipo:** `Oggetto`

- **Dettagli:**

  Un Hash dei filtri disponibili dall'istanza di Vue.

- **Vedi anche:**
  - [Custom Filters](/guide/custom-filter.html)
  - [Assets Naming Convention](/guide/components.html#Assets_Naming_Convention)

### components

- **Tipo:** `Oggetto`

- **Dettagli:**

  Un hash dei componenti disponibili dall'istanza di Vue.

- **Vedi anche:**
  - [Components](/guide/components.html)

### transitions

- **Tipo:** `Oggetto`

- **Dettagli:**

  Un hash delle transizioni disponibili dall'instanza di Vue.

- **Vedi anche:**
  - [Transitions](/guide/transitions.html)

### partials

- **Tipo:** `Oggetto`

- **Dettagli:**

  Un hash dei template parziali disponibili dall'istanza di Vue.

- **Vedi anche:**
  - [Special Elements - partial](#partial)

## Opzioni / Misc

### parent

- **Tipo:** `istanza di Vue`

- **Dettagli:**

  Specifica l'istanza padre dell'istanza in fase di creazione, stabilendo una relatione padre-figlio.
  L'istanza padre sarà disponibile tramite `this.$parent` da parte del figlio, il padre ritroverà il figlio nel suo array `$children`.

- **Vedi anche:** [Comunicazione Padre-Figlio](/guide/components.html#Parent-Child_Communication)

### Eventi

- **Tipo:** `Oggetto`

- **Dettagli:**

  Eventi è un oggetto contenente delle proprietà legate a funzioni. Eventi contiene eventi relativi a Vue e non al DOM, la chiave della proprietà 
  verrà usata come nome dello specifico elemento mentre il valore in stringa, o funzione, sarà il corpo del evento stesso.
  L'istanza di Vue chiamerà `$on()` per ogni chiave trovata nel oggetto Eventi.

- **Esempio:**

  ``` js
  var vm = new Vue({
    Eventi: {
      'hook:created': function () {
        console.log('Creato!')
      },
      greeting: function (msg) {
        console.log(msg)
      },
      // si può anche usare una stringa
      bye: 'sayGoodbye'
    },
    methods: {
      sayGoodbye: function () {
        console.log('Ciao Ciao!')
      }
    }
  }) // -> created!
  vm.$emit('greeting', 'Ciao da custom!') // -> Ciao da custom!
  vm.$emit('bye')             // -> Ciao Ciao!
  ```

- **Vedi anche:**
  - [Metodi di Istanza - Eventi](#Instance_Methods_/_Eventi)
  - [Comunicazione Padre-Figlio](/guide/components.html#Parent-Child_Communication)

### mixins

- **Tipo:** `Array`

- **Dettagli:**

  L'opzione `mixins` accetta un array di mixin sotto forma di oggetti. Questi mixin contengono opzioni d'istanza e andranno a sovrascrivere eventuali opzioni dentro l'istanza stessa
  con la stessa logica che avviene con `Vue.extend()`. Per esempio se mixin contiene una funzione per `created`, ed il componente ha la stessa funzione,
  entrambe le funzioni verranno chiamate.

  Le funzioni interne al Mixin verranno chiamate in ordine di apparizione e prima delle funzioni interne del componente stesso.

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

- **Restrizioni:** Viene considerata solo se usata dentro `Vue.extend()`.

- **Dettagli:**

  Permete al componente di invocare se stesso in modo ricorsivo internamente al template. Si noti che quando un componente è registrato globalmente tramite `Vue.component()`,
  l'ID globale sarà automaticamente anche il suo nome.

  Un altro beneficio nello specificare il nome di un componente è per avere un vantaggio durante l'ispezione in console.
  Quando si fa l'ispezione di un componente il nome predefinito che salta fuori è `VueComponent`, il quale non è molto d'aiuto.
  Passandogli un nome specifico a `Vue.extend()`, avrete una visuale migliore in output e potrete capire quale componente dovete guardare.
  La stringa utilizzera la sintassi camelCase per il nome del costruttore.

- **Esempio:**

  ``` js
  var Ctor = Vue.extend({
    name: 'stack-overflow',
    template:
      '<div>' +
        // richiama se stesso
        '<stack-overflow></stack-overflow>' +
      '</div>'
  })

  // Questo, in verità, non può funzionare in quanto
  // Risulterà un errore di stack di memoria
  var vm = new Ctor()

  console.log(vm) // -> StackOverflow {$el: null, ...}
  ```

## Proprietà d'Istanza

### vm.$data

- **Tipo:** `Oggetto`

- **Dettagli:**

  L'oggetto data contiene gli elementi che l'istanza Vue sta osservando, è possibile intercambiare questo oggetto.
  L'istanza di Vue farà da Proxy per tutte le proprietà del oggetto data.

### vm.$el

- **Tipo:** `ElementoHTML`

- **Sola Lettura**

- **Dettagli:**

  L elemento del DOM al quale l'istanza di Vue è legata. Da notare che nel caso della [Istanza Frammentata](/guide/components.html#Fragment_Instance), la proprietà `vm.$el`
  restituirà la posizione di ancoraggio iniziale del frammento.

### vm.$options

- **Tipo:** `Oggetto`

- **Sola Lettura**

- **Dettagli:**

  Questo oggetto contiene tutte le opzioni dell'istanza corrente di Vue.
  Molto interessante come proprietà quando si vogliono aggiungere e/o personalizzare le opzioni di istanza.

  ``` js
  new Vue({
    customOpzione: 'foo',
    created: function () {
      console.log(this.$options.customOption) // -> 'foo'
    }
  })
  ```

### vm.$parent

- **Tipo:** `istanza di Vue`

- **Sola Lettura**

- **Dettagli:**

  L'istanza padre, se esiste.

### vm.$root

- **Tipo:** `istanza di Vue`

- **Sola Lettura**

- **Dettagli:**

  L'istanza di root dell albero corrente dei componenti. Se l'istanza è l'istanza di root allora questa opzione restituirà come valore l'istanza stessa.

### vm.$children

- **Tipo:** `Array<Istanza di Vue>`

- **Sola Lettura**

- **Dettagli:**

  Il figlio più prossimo dell'istanza di Vue corrente.

### vm.$refs

- **Tipo:** `Oggetto`

- **Sola Lettura**

- **Dettagli:**

  Questa proprietà contiene un oggetto con tutti i figli che hanno `v-ref` registrato.

- **Vedi anche:**
  - [Componenti Figli e v-Ref](/guide/components.html#Child_Component_Refs)
  - [v-ref](#v-ref).

### vm.$els

- **Tipo:** `Oggetto`

- **Sola Lettura**

- **Dettagli:**

  Un oggetto che contiene tutti gli elementi del DOM che hanno `v-el` registrato.

- **Vedi anche:** [v-el](#v-el).

## Metodi di Istanza / Data

<h3 id="vm-watch">vm.$watch( espressioneOFunzione, funzione, [opzioni] )</h3>

- **Argomenti:**
  - `{Stringa | Funzione} espressioneOFunzione`
  - `{Funzione} funzione`
  - `{Oggetto} [opzioni]`
    - `{Booleano} deep`
    - `{Booleano} immediate`

- **Restituisce:** `{Funzione} unwatch`

- **Utilizzo:**

  Osserva, `watch`, un espressione oppure una funzione dell'istanza di Vue in attesa di cambiamenti.
  Se qualche cambiamento viene rilevate la funzione riceverà il vecchio valore ed il nuovo valore.
  L'espressione può essere di tipo chiave-valore o una stringa logica.

<p class="tip">Si noti: quando si modifica (invece di rimpazzare) un Oggetto od un Array, il vecchio valore coinciderà con quello nuovo perchè le referenze sono le stesse.
Vue non tiene una copia dei valori pre-modifica.</p>

- **Esempio:**

  ``` js
  // chiave valore
  vm.$watch('a.b.c', function (newVal, oldVal) {
    // esecuzione
  })

  // espressione
  vm.$watch('a + b', function (newVal, oldVal) {
    // esecuzione
  })

  // funzione
  vm.$watch(
    function () {
      return this.a + this.b
    },
    function (newVal, oldVal) {
      // esecuzione
    }
  )
  ```

  `vm.$watch` restituisce una funzione non osservata che permette di fermare l'evento:

  ``` js
  var unwatch = vm.$watch('a', cb)
  // successivamente blocchiamo l'evento di watching
  unwatch()
  ```

- **Opzione: deep**

   Per osservare, ed individuare, cambiamenti interni al oggetto, dovete passare l'opzione `deep: true` come argomento di watch..
   Note that you don't need to do so to listen for Array mutations.

  ``` js
  vm.$watch('oggetto', funzione, {
    deep: true
  })
  vm.oggetto.nestedValue = 123
  // La funzione viene richiamata
  ```

- **Opzione: immediate**

  Passando al watch l'opzione `immediate: true` essa attiverà la funzione del watch immediatamente anche con il valore iniziale:

  ``` js
  vm.$watch('a', funzione, {
    immediate: true
  })
  // il Watch viene attivato immediatamente con il valore corrente di `a`
  ```

<h3 id="vm-get">vm.$get( espressione )</h3>

- **Argomenti:**
  - `{Stringa} espressione`

- **Utilizzo:**

  Restituisce un valore dall'istanza di Vue tramite l'espressione passata.
  Eventuali errori interni all'espressione passata risulterano in un `undefined`.

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

<h3 id="vm-set">vm.$set( chiave, valore )</h3>

- **Argomenti:**
  - `{Stringa} chiave`
  - `{*} valore`

- **Utilizzo:**

  Imposta un valore di una determinata chiave nell'istanza di Vue.
  In molti casi è preferibile impostare le proprietà tramite l'oggetto stesso, per esempio `vm.a.b = 123`. Questo metodo è utile per due scenari in particolare:

  1. Quando il valore è impostato dinamicamente e la chiave è una stringa.

  2. Quando si vuole creare una coppia chiave-valore che non esisteva in precedenza.

  Se la chiave non esiste verrà creatà ed impostata in modo che sia reattiva.
  Se la chiave viene impostata in un istanza di Vue che è anche root di componenti tutti i componenti attiveranno un watcher di default per la nuova chiave.

- **Esempio:**

  ``` js
  var vm = new Vue({
    data: {
      a: {
        b: 1
      }
    }
  })

  // imposta un nuovo valore
  vm.$set('a.b', 2)
  vm.a.b // -> 2

  // crea una nuova coppia chiave valore
  vm.$set('c', 3)
  vm.c // ->
  ```

- **Vedi anche:** [Reattività nel Dettaglio](/guide/reactivity.html)

<h3 id="vm-delete">vm.$delete(chiave)</h3>

- **Argomenti:**
  - `{Stringa} chiave`

- **Utilizzo:**

  Elimina una chiave tra le proprietà dell'istanza di Vue. Non raccomandato come uso quotidiano.

<h3 id="vm-eval">vm.$eval( espressione )</h3>

- **Argomenti:**
  - `{Stringa} espressione`

- **Utilizzo:**

  Questo metodo valuterà l'espressione passata, l'espressione può anche contenere dei filtri.

- **Esempio:**

  ``` js
  // sia vm.msg = 'hello'
  vm.$eval('msg | uppercase') // -> 'HELLO'
  ```

<h3 id="vm-interpolate">vm.$interpolate( template )</h3>

- **Argomenti:**
  - `{Stringa} template`

- **Utilizzo:**

  Questo metodo valuta un pezzo di template, ed eventuale stringhe passate, che contiene la sintassi "a baffi", con le graffe.

- **Esempio:**

  ``` js
  // sia vm.msg = 'hello'
  vm.$interpolate('{{msg}} world!') // -> 'hello world!'
  ```

<h3 id="vm-log">vm.$log( [chiave] )</h3>

- **Argomenti:**
  - `{Stringa} [chiave]`

- **Utilizzo:**

  Esegue un log della chiave passata. Se non viene passata nessuna chiave verrà effettuato il log dell'intera istanza di Vue.

  ``` js
  vm.$log() // log intera istanza
  vm.$log('item') // log vm.item
  ```

## Metodi di Istanza / Eventi

<h3 id="vm-on">vm.$on( evento, funzione )</h3>

- **Argomenti:**
  - `{Stringa} evento`
  - `{Funzione} funzione`

- **Utilizzo:**

  Listen for a custom evento on the current vm. Eventi can be triggered by `vm.$emit`, `vm.$dispatch` or `vm.$broadcast`. The funzione will receive all the additional Argomenti passed into these evento-triggering methods.

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

## Metodi di Istanza / DOM

<h3 id="vm-appendTo">vm.$appendTo( elementoOSelettore, [funzione] )</h3>

- **Argomenti:**
  - `{Element | Stringa} elementoOSelettore`
  - `{Funzione} [funzione]`

- **Restituisce:** `vm` - the instance itself

- **Utilizzo:**

  Append the istanza di Vue's DOM elemento or fragment to target elemento. The target can be either an elemento or a querySelettore stringa. This method will trigger transitions if present. The funzione is fired after the transition has completed (or immediately if no transition has been triggered).

<h3 id="vm-before">vm.$before( elementoOSelettore, [funzione] )</h3>

- **Argomenti:**
  - `{Element | Stringa} elementoOSelettore`
  - `{Funzione} [funzione]`

- **Restituisce:** `vm` - the instance itself

- **Utilizzo:**

  Insert the istanza di Vue's DOM elemento or fragment before target elemento. The target can be either an elemento or a querySelettore stringa. This method will trigger transitions if present. The funzione is fired after the transition has completed (or immediately if no transition has been triggered).

<h3 id="vm-after">vm.$after( elementoOSelettore, [funzione] )</h3>

- **Argomenti:**
  - `{Element | Stringa} elementoOSelettore`
  - `{Funzione} [funzione]`

- **Restituisce:** `vm` - the instance itself

- **Utilizzo:**

  Insert the istanza di Vue's DOM elemento or fragment after target elemento. The target can be either an elemento or a querySelettore stringa. This method will trigger transitions if present. The funzione is fired after the transition has completed (or immediately if no transition has been triggered).

<h3 id="vm-remove">vm.$remove( [funzione] )</h3>

- **Argomenti:**
  - `{Funzione} [funzione]`

- **Restituisce:** `vm` - the instance itself

- **Utilizzo:**

  Remove the istanza di Vue's DOM elemento or fragment from the DOM. This method will trigger transitions if present. The funzione is fired after the transition has completed (or immediately if no transition has been triggered).

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

## Metodi di Istanza / Lifecycle

<h3 id="vm-mount">vm.$mount( [elementoOSelettore] )</h3>

- **Argomenti:**
  - `{Element | Stringa} [elementoOSelettore]`

- **Restituisce:** `vm` - the instance itself

- **Utilizzo:**

  If a istanza di Vue didn't receive the `el` option at instantiation, it will be in "unmounted" state, without an associated DOM elemento or fragment. `vm.$mount()` can be used to manually start the mounting/compilation of an unmounted istanza di Vue.

  If no argument is provided, the template will be created as an out-of-document fragment, and you will have to use other DOM Metodi di Istanza to insert it into the document yourself. If `replace` option is set to `falso`, then an empty `<div>` will be automatically created as the wrapper elemento.

  Calling `$mount()` on an already mounted instance will have no effect. The method returns the instance itself so you can chain other Metodi di Istanza after it.

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

- **Vedi anche:** [Diagramma del Ciclo di Vita](/guide/instance.html#Lifecycle_Diagram)

<h3 id="vm-destroy">vm.$destroy( [remove] )</h3>

- **Argomenti:**
  - `{Booleano} [remove] - Predefinito: falso`

- **Utilizzo:**

  Completely destroy a vm. Clean up its connections with other existing vms, unbind all its directives, turn off all evento listeners and, if the `remove` argument is true, remove its associated DOM elemento or fragment from the DOM.

  Triggers the `beforeDestroy` and `destroyed` hooks.

- **Vedi anche:** [Diagramma del Ciclo di Vita](/guide/instance.html#Lifecycle_Diagram)

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

  Conditionally render the elemento based on the truthy-ness of the espressione valore. The elemento and its contained data bindings / components are destroyed and re-constructed during toggles. If the elemento is a `<template>` elemento, its content will be extracted as the conditional block.

- **Vedi anche:** [Conditional Rendering](/guide/conditional.html)

### v-show

- **Expects:** `*`

- **Utilizzo:**

  Toggle's the elemento's `display` CSS property based on the truthy-ness of the espressione valore. Triggers transitions if present.

- **Vedi anche:** [Conditional Rendering - v-show](/guide/conditional.html#v-show)

### v-else

- **Does not expect espressione**

- **Restrizioni:** previous sibling elemento must have `v-if` or `v-show`.

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

  Render the elemento or template block multiple times based on the source data. The espressione must use the special syntax to provide an alias for the current elemento being iterated on:

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

  Attaches an evento listener to the elemento. The evento Tipo is denoted by the argument. The espressione can either be a method name or an inline statement, or simply omitted when there are modifiers present.

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

  <!-- prevent Predefinito without espressione -->
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

- **Vedi anche:** [Methods and Event Handling](/guide/Eventi.html)

### v-bind

- **Shorthand:** `:`

- **Expects:** `* (with argument) | Oggetto (without argument)`

- **Argument:** `attrOProp (optional)`

- **Modifiers:**
  - `.sync` - make the binding two-way. Only respected for prop bindings.
  - `.once` - make the binding one-time. Only respected for prop bindings.
  - `.camel` - convert the attribute name to camelCase when setting it. Only respected for normal attributes. Used for binding camelCase SVG attributes.

- **Utilizzo:**

  Dynamically bind one or more attributes, or a component prop to an espressione.

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

- **Does not expect espressione**

- **Limited to:** child components

- **Argument:** `id (required)`

- **Utilizzo:**

  Register a reference to a child component on its parent for direct access. Does not expect an espressione. Must provide an argument as the id to registra with. The component instance will be accessible on its parent's `$refs` oggetto.

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

- **Does not expect espressione**

- **Argument:** `id (required)`

- **Utilizzo:**

  Register a reference to a DOM elemento on its owner istanza di Vue's `$els` oggetto for easier access.

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

- **Does not expect espressione**

- **Utilizzo**

  Skip compilation for this elemento and all its children. You can use this for displaying raw mustache tags. Skipping large numbers of nodes with no directives on them can also speed up compilation.

- **Esempio:**

  ``` html
  <span v-pre>{{ this will not be compiled }}</span>
  ```

### v-cloak

- **Does not expect espressione**

- **Utilizzo:**

  This directive will remain on the elemento until the associated istanza di Vue finishes compilation. Combined with CSS rules such as `[v-cloak] { display: none }`, this directive can be used to hide un-compiled mustache bindings until the istanza di Vue is ready.

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

  `<slot>` elementi serve as Distribuizione dei Contenuti outlets in component templates. The slot elemento itself will be replaced.

  A slot with the `name` attribute is called a named slot. A named slot will distribute content with a `slot` attribute that matches its name.

  For detailed Utilizzo, see the guide section linked below.

- **Vedi anche:** [Distribuizione dei Contenuti with Slots](/guide/components.html#Content_Distribution_with_Slots)

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
