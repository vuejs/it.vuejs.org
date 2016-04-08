---
type: api
---

## Configurazione Globale

`Vue.config` è un oggetto il quale contiene tutte le configurazioni di Vue. Potete modificare le sue proprietà, descritte di seguito, prima di inizializzare l'applicazione:

### debug

- **Tipo:** `Booleano`

- **Predefinito:** `false`

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

- **Predefinito:** `false`

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


### devtools

- **Tipo:** `Booleano`

- **Predefinito:** `true` (`false` nella build di produzione)

- **Utilizzo:**

  ``` js
  // Ricordatevi di settare questo in modo sincrono dopo aver caricato Vue
  Vue.config.devtools = true
  ```

Configurazione che ti permette di scegliere se attivare i [vue-devtools](https://github.com/vuejs/vue-devtools) nel sistema di ispezione elemento.
Questa opzione è `attiva` nelle build per lo sviluppo e `disattiva` nelle build per la produzione.
Per controllarne lo stato basta impostarla con un valore booleano `true` o `false`.

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

  Ritarda la funzione perché venga eseguita al ciclo successivo di update del DOM. Da usare immediatamente dopo un cambiamento dei dati per aspettare l'aggiornamento del DOM.

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

  Registra o restituisce un Element Direttive globale.

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

- **Vedi anche:** [Element Direttive](/guide/custom-directive.html#Elements-Directives)

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

- **Vedi anche:** [Mixins Globali](/guide/mixins.html#Global-Mixin)

## Opzioni / Dati

### data

- **Tipo:** `Oggetto | Funzione`

- **Restrizioni:** Accetta una funzione quando è utilizzato all interno di una definizione di un componente.

- **Dettagli:**

  Quando viene passato alla proprietà data di Vue.js, quest'ultimo cercherà di convertire, in modo ricorsivo, tutte le proprietà in getter/setter in modo da renderle "reattive".
  **L'oggetto dev'essere nativo**: eventuali getter/setter già presenti verranno ignorati. Non è raccomandato osservare oggetti complessi.

  Quando definite un **componente**, la proprietà `data` dev'essere dichiarata come funzione la quale restituisce l'oggetto finale, questo perché vi possono essere più istanze dello stesso componente.
  Se non facessimo così ogni istanza del componente **avrebbe una proprietà data condivisa** tra tutte le istanze del componente stesso. Con la funzione, invece, ogni istanza avrà sempre una copia diversa della proprietà data.

  Una volta che l'istanza è creata, l'oggetto originale potrà essere utilizzato tramite `vm.$data`. L'istanza di Vue farà anche da Proxy per tutte le proprietà trovate nell'ogetto data.

  Le proprietà che iniziano con `_` o `$` **non verranno** incluse nel sistema di Proxy di Vue.js perché potrebbero dare problemi con alcuni metodi interni di Vue stesso. Potrete comunque accedervi tramite `vm.$data._property`.

  Se avete bisogno di un clone fedele dell oggetto originale, potete ottenerlo usando `vm.$data` tramite `JSON.parse(JSON.stringify(...))`.

- **Esempio:**

  ``` js
  var data = { a: 1 }

  // Creazione di un'istanza
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
      size: Numero,
      // controllo sul tipo di dato più validazione
      name: {
        Tipo: Stringa,
        richiesto: true
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
          return this.a 1
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
  - [Reattività in Dettaglio: Le Properità Derivate](/guide/reactivity.html#Inside-Computed-Properties)

### methods

- **Tipo:** `Oggetto`

- **Dettagli:**

  Methods è un oggetto che contiene nuove funzioni che possono essere usate dall'istanza corrente di Vue. Questi metodi possono essere usanti anche internamente al DOM, sottoforma di espressioni.
  Tutti i metodi creati dentro metodi avranno `this` puntato all'istanza di Vue.

- **Esempio:**

  ```js
  var vm = new Vue({
    data: { a: 1 },
    methods: {
      plus: function () {
        this.a
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
  La funzione può essere anche una stringa che punta ad un Metodo interno alla proprietà metodi vista precedentemente oppure un oggetto che contiene un handler, la funzione, e la "profondità" del watch stesso.
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

- **Vedi anche:** [Diagramma del Cilo di Vita](/guide/instance.html#Lifecycle-Diagram)

### template

- **Tipo:** `Stringa`

- **Dettagli:**

  Un template, formato stringa, da usare come markup per l'istanza di Vue. Per definizione il template andrà a **sostituire** l'elemento sul quale Vue si lega.
  Quando l'opzione `replace` è impostata su `false`, il template verrà inserito dentro l'elemento sul quale Vue si lega.
  In entrambi i casi, tutto il markup interno all'elemento verrà ignorato. A meno che non vi siano degli Slot per la Distribuzione dei Contenuti.

  Se la stringa inizia con `#` verrà usata come `querySelector` e verrà presa in considerazione tutta la porzione di HTML interna al template.
  Questo permette l'uso del comune tag `<script Tipo="x-template">`.

  Da notare che in alcune situazioni, per esempio quando il template contiene un altro template di alto livello o del semplice testo, l'istanza create diventerà un'Istanza Frammentata.

- **Vedi anche:**
  - [Diagramma del Ciclo di Vita](/guide/instance.html#Lifecycle-Diagram)
  - [Distribuizione dei Contenuti](/guide/components.html#Content-Distribution-with-Slots)
  - [Istanza Frammentata](/guide/components.html#Fragment-Instance)

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

 - **Vedi anche:** [Diagramma del Ciclo di Vita](/guide/instance.html#Lifecycle-Diagram)

### created

- **Tipo:** `Funzione`

- **Dettagli:**

  Questa funzione viene chiamata in modo sincrono dopo che l'istanza di Vue viene creata. In questo statio, l'istanza ha già finito di processare le properità e le opzioni, il che significa
  che le seguenti caratteristiche sono già state istanziate: Osservazione dei dati, Proprietà derivate, Metodi, Sistema di watching ed Eventi.
  In questo stadio manca solo la compilazione del DOM e l'elemento `$el` non è ancora disponibile.

- **Vedi anche:** [Diagramma del Ciclo di Vita](/guide/instance.html#Lifecycle-Diagram)

### beforeCompile

- **Tipo:** `Funzione`

- **Dettagli:**

  Questa funzione viene chiamata prima che la compilazione inizi.

- **Vedi anche:** [Diagramma del Ciclo di Vita](/guide/instance.html#Lifecycle-Diagram)

### compiled

- **Tipo:** `Funzione`

- **Dettagli:**

  Questa funzione viene chiamata dopo che la compilazione è finita. In questo stadio tutte le direttive sono state linkate ai dati e scateneranno gli eventi di aggiornamento del DOM.
  Comunque sia ancora non è disponibile la proprietà `$el`.

- **Vedi anche:** [Diagramma del Ciclo di Vita](/guide/instance.html#Lifecycle-Diagram)

### ready

- **Tipo:** `Funzione`

- **Dettagli:**

  Questa funzione viene chiamata dopo che la compilazione **e** la proprietà `$el` è **stata inserita nel documento per le prima volta**,
  per esempio subito dopo la funzione `attached`.

- **Vedi anche:** [Diagramma del Ciclo di Vita](/guide/instance.html#Lifecycle-Diagram)

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

- **Vedi anche:** [Diagramma del Ciclo di Vita](/guide/instance.html#Lifecycle-Diagram)

### destroyed

- **Tipo:** `Funzione`

- **Dettagli:**

  Questa funzione viene chiamata quando l'istanza di Vue è stata distrutta. Al momento della chiamata, tutte le direttive ed i vincoli dei dati sono stati rimossi e l'istanza stessa distrutta.

  Da notare che se vi è una transizione in corso la funzione `destroyed` viene chiamata **dopo** che la transizione è finita.

- **Vedi anche:** [Diagramma del Ciclo di Vita](/guide/instance.html#Lifecycle-Diagram)

## Opzioni / Assets

### Direttive

- **Tipo:** `Oggetto`

- **Dettagli:**

  Un hash delle direttive disponibile dall'istanza di Vue.

- **Vedi anche:**
  - [Custom Direttive](/guide/custom-directive.html)
  - [Assets Naming Convention](/guide/components.html#Assets-Naming-Convention)

### elementDirettive

- **Tipo:** `Oggetto`

- **Dettagli:**

  Un Hash degli elementi delle direttive disponibile dall'istanza di Vue.

- **Vedi anche:**
  - [Element Direttive](/guide/custom-directive.html#Element-Directives)
  - [Assets Naming Convention](/guide/components.html#Assets-Naming-Convention)

### filters

- **Tipo:** `Oggetto`

- **Dettagli:**

  Un Hash dei filtri disponibili dall'istanza di Vue.

- **Vedi anche:**
  - [Custom Filters](/guide/custom-filter.html)
  - [Assets Naming Convention](/guide/components.html#Assets-Naming-Convention)

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

- **Vedi anche:** [Comunicazione Padre-Figlio](/guide/components.html#Parent-Child-Communication)

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
  - [Metodi di Istanza - Eventi](#Instance_Methods-Events)
  - [Comunicazione Padre-Figlio](/guide/components.html#Parent-Child-Communication)

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
      '<div +
        // richiama se stesso
        '<stack-overflow></ack-overflow>' +
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

  L elemento del DOM al quale l'istanza di Vue è legata. Da notare che nel caso della [Istanza Frammentata](/guide/components.html#Fragment-Instance), la proprietà `vm.$el`
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
  - [Componenti Figli e v-Ref](/guide/components.html#Child-Component-Refs)
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

<p class="tip">Si noti: quando si modifica (invece di rimpazzare) un Oggetto od un Array, il vecchio valore coinciderà con quello nuovo perché le referenze sono le stesse.
Vue non tiene una copia dei valori pre-modifica.</p>

- **Esempio:**

  ``` js
  // chiave valore
  vm.$watch('a.b.c', function (newVal, oldVal) {
    // esecuzione
  })

  // espressione
  vm.$watch('a b', function (newVal, oldVal) {
    // esecuzione
  })

  // funzione
  vm.$watch(
    function () {
      return th.a + this.b
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
  vm.$get('a.b 1') // -> 2
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
  Se la chiave viene impostata in un'istanza di Vue che è anche root di componenti tutti i componenti attiveranno un watcher di default per la nuova chiave.

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
  // sia vm.msg = 'Ciao'
  vm.$eval('msg | uppercase') // -> 'Ciao'
  ```

<h3 id="vm-interpolate">vm.$interpolate( template )</h3>

- **Argomenti:**
  - `{Stringa} template`

- **Utilizzo:**

  Questo metodo valuta un pezzo di template, ed eventuale stringhe passate, che contiene la sintassi "a baffi", con le graffe.

- **Esempio:**

  ``` js
  // sia vm.msg = 'Ciao'
  vm.$interpolate('{{msg}} world!') // -> 'Ciao world!'
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

  Ascolta per qualsiasi tipo di evento personalizzato interno all'istanza di Vue.
  Gli eventi possono essere attivati tramite `vm.$emit`, `vm.$dispatch` o `vm.$broadcast`.
  La funzione riceverà tutti gli argomenti passati ad una di queste funzioni sopra elencate.

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

  Ascolta per un evento personalizzato, ma solo una volta. Il funzionamento è uguale a `vm.$on`.

<h3 id="vm-off">vm.$off( [evento, funzione] )</h3>

- **Argomenti:**
  - `{Stringa} [evento]`
  - `{Funzione} [funzione]`

- **Utilizzo:**

  Rimuove l'evento/gli eventi.

  - Se nessun argomento viene passato, rimuove tutti gli eventi;

  - Se viene passato solo l'evento come argomento, rimuoverà tale evento;

  - Se viene passato l'evento ed la funzione, allora rimuvoerà l'evento di quella specifica funzione soltanto.

<h3 id="vm-emit">vm.$emit( evento, [...argomenti] )</h3>

- **Argomenti:**
  - `{Stringa} evento`
  - `[...argomenti]`

  Attiva manualmente un evento nell'istanza corrente di Vue. Tutti gli argomenti verranno passati alla funzione dell evento.

<h3 id="vm-dispatch">vm.$dispatch( evento, [...argomenti] )</h3>

- **Argomenti:**
  - `{Stringa} evento`
  - `[...argomenti]`

- **Utilizzo:**

  Esegue l'evento specificato. Prima attiva l'evento sull'istanza corrente, poi propaga l'azione su tutta la catena di padri sopra di lui.
  La propagazione si ferma quanto si arriva alla root del evento. Tutti gli argomenti verranno passati alla funzione del evento.

- **Esempio:**

  ``` js
  // create a parent chain
  var parent = new Vue()
  var child1 = new Vue({ parent: parent })
  var child2 = new Vue({ parent: child1 })

  parent.$on('test', function () {
    console.log('padre notificato')
  })
  child1.$on('test', function () {
    console.log('primo figlio notificato')
  })
  child2.$on('test', function () {
    console.log('secondo figlio notificato')
  })

  child2.$dispatch('test')
  // -> "secondo figlio notificato"
  // -> "primo figlio notificato"
  // Il padre non viene notificato perché il primo figlio non ha return true.
  ```

- **Vedi anche:** [Comuniccazione Padre-Figlio](/guide/components.html#Parent-Child-Communication)

<h3 id="vm-broadcast">vm.$broadcast( evento, [...argomenti] )</h3>

- **Argomenti:**
  - `{Stringa} evento`
  - `[...argomenti]`

- **Utilizzo:**

  Trasmette un evento che si propaga a tutti i discendenti. Dato che i discendenti possono espandersi in più rami di discendenza, l'evento seguirà tutti questi rami.
  L'evento di fermerà quando troverà la prima implementazione utile, se essa restituisce `true` allora continuerà.

- **Esempio:**

  ``` js
  var parent = new Vue()
  // Figlio uno e due sono "fratelli"
  var child1 = new Vue({ parent: parent })
  var child2 = new Vue({ parent: parent })
  // Figlio3 è interno al due
  var child3 = new Vue({ parent: child2 })

  child1.$on('test', function () {
    console.log('Figlio 1 notificato')
  })
  child2.$on('test', function () {
    console.log('Figlio 2 notificato')
  })
  child3.$on('test', function () {
    console.log('Figlio 3 notificato')
  })

  parent.$broadcast('test')
  // -> "Figlio 1 notificato"
  // -> "Figlio 2 notificato"
  // Figlio3 non viene notificato perché figlio2 non restituisce true.
  ```

## Metodi di Istanza / DOM

<h3 id="vm-appendTo">vm.$appendTo( elementoOSelettore, [funzione] )</h3>

- **Argomenti:**
  - `{Element | Stringa} elementoOSelettore`
  - `{Funzione} [funzione]`

- **Restituisce:** `vm` - se stesso come istanza

- **Utilizzo:**

  Appende l'istanza di Vue ad un Elemento del DOM o selettore specificato. L'obiettivo può essere un elemento HTML oppure un elemento preso tramite QuerySelector
  Questo metodo attiverà anche l'eventuale transizione. La viene richiamata dopo la transizione, o immediatamente se essa non è presente.

<h3 id="vm-before">vm.$before( elementoOSelettore, [funzione] )</h3>

- **Argomenti:**
  - `{Element | Stringa} elementoOSelettore`
  - `{Funzione} [funzione]`

- **Restituisce:** `vm` - se stesso come istanza

- **Utilizzo:**

  Inserisce l'istanza di Vue prima dell elemento specificato.
  L'obiettivo può essere sia un elemento oppure una stringa del tipo `QuerySelector`.
  Questo metodo attiva le transizioni se presenti e specificate.
  La funzione viene attivata dopo che la transizione è completata, o subito se non vi è transizione.

<h3 id="vm-after">vm.$after( elementoOSelettore, [funzione] )</h3>

- **Argomenti:**
  - `{Element | Stringa} elementoOSelettore`
  - `{Funzione} [funzione]`

- **Restituisce:** `vm` - se stesso come istanza

- **Utilizzo:**

  Inserisce l'istanza di Vue dopo l'elemento DOM specificato, oppure la stringa `QuerySelector` specificata.
  Questo metodo può attivare le transizioni se presenti. La funzione viene attiata dopo che la transizione è completata, o subito se la transizione non è presente.

<h3 id="vm-remove">vm.$remove( [funzione] )</h3>

- **Argomenti:**
  - `{Funzione} [funzione]`

- **Restituisce:** `vm` - se stesso come istanza

- **Utilizzo:**

  Rimuove l'istanza di Vue dal elemento DOM specificato. Questa funzione attiverà la transizione dedicata se presente.
  La funzione viene attivata dopo che la transizione è completata, o subito se non vi è transizione specificata.

<h3 id="vm-nextTick">vm.$nextTick( funzione )</h3>

- **Argomenti:**
  - `{Funzione} [funzione]`

- **Utilizzo:**

  Ritarda l'esecuzione della funzione al prossimo tick del ciclo di aggiornamento del DOM.
  Se questo metodo viene usato subito dopo l'aggiornamento di un dato, si potrà notare come il DOM venga aggiornato con ritardo.
  Questo metodo funziona esattamente come il metodo globale `Vue.nextTick`, l'unica differenza è che `this` è automaticamente legato all'istanza di Vue corrente.

- **Esempio:**

  ``` js
  new Vue({
    // ...
    methods: {
      // ...
      Esempio: function () {
        // modifica un dato
        this.message = 'changed'
        // DOM non è aggiornato
        this.$nextTick(function () {
          // DOM dom viene aggiornato
          // `this` si riferisce all'istanza corrente di Vue
          this.doSomethingElse()
        })
      }
    }
  })
  ```

- **Vedi anche:**
  - [Vue.nextTick](#Vue-nextTick)
  - [Coda di Aggiornamento Asincrona](/guide/reactivity.html#Async-Update-Queue)

## Metodi di Istanza / Ciclo di Vita

<h3 id="vm-mount">vm.$mount( [elementoOSelettore] )</h3>

- **Argomenti:**
  - `{Element | Stringa} [elementoOSelettore]`

- **Restituisce:** `vm` - se stesso come istanza

- **Utilizzo:**

  Se l'istanza di Vue non riceve `el` come opzioni durante l'istanziazione, verrà messa in uno stato di "unmounted", senza un'associazione con il DOM.
  `vm.$mount()` può essere usato per montare manualmente l'istanza di Vue al DOM.

  Se non vengono passati argomenti, l'istanza verrà montata come parte esterna al DOM e dovrete usare altri metodi per specificare l'elemento al quale si lega come root.
  Se l'opzione `replace` è impostata su `falsa`, allora un `<div>` vuoto verrà automaticamente creato per contenre l'elemento.

  Chiamare `$mount()` su un'istanza già mondata sul DOM non avrà nessun effetto. Il metodo restituisce l'istanza in se, si possono concatenare altri metodi dopo.

- **Esempio:**

  ``` js
  var MyComponent = Vue.extend({
    template: '<div>Ciao!</div>'
  })

  // Creiamo il componente e montiamolo su #app (rimpiazzerà #app)
  new MyComponent().$mount('#app')

  // Si può anche creare così, è uguale.
  new MyComponent({ el: '#app' })

  // Compiliamo l'istanza e l'appendiamo successivamente.
  new MyComponent().$mount().$appendTo('#container')
  ```

- **Vedi anche:** [Diagramma del Ciclo di Vita](/guide/instance.html#Lifecycle-Diagram)

<h3 id="vm-destroy">vm.$destroy( [remove] )</h3>

- **Argomenti:**
  - `{Booleano} [remove] - Predefinito: `false`

- **Utilizzo:**

  Distrugge completamente una vm. Ripulisce qualsiasi connessione con altre vm, slega tutte le direttive, eventi e se l'argomento `remove` è vero, rimuove l'elemento DOM associato.

  Questo metodo attiva `beforeDestroy` e `destroyed` come eventi.

- **Vedi anche:** [Diagramma del Ciclo di Vita](/guide/instance.html#Lifecycle-Diagram)

## Direttive

### v-text

- **Si Aspetta:** `Stringa`

- **Dettagli:**

  Aggiorna il testo dell'elemento nel quale viene utilizzato. Il testo viene aggiornao tramite `textContent`.

  Internamente, l'interpolazione `{% raw %}{{ Mustache }}{% endraw %}` viene compilata come direttiva `v-text`.
  La direttiva è un pelino più performance della sua controparte ad interpolazione.

- **Esempio:**

  ``` html
  <span v-text="msg"></span>
  <!-- è uguale a -->
  <span>{{msg}}</span>
  ```

### v-html

- **Si Aspetta:** `Stringa`

- **Dettagli:**

  Aggiorna il contenuto HTML, tramite `innerHTML` dell elemento.
  I binding del contenuto HTML verranno ignorati, se avete bisogno di riutilizzare pezzi di template allora avete bisogno dei [parziali](#partial).

  Internamente l'interpolazione del tipo `{% raw %}{{{ Mustache }}}{% endraw %}` viene compilata come uan direttiva `v-html`.
  La direttiva è un pelino più performance della sua controparte ad interpolazione.

  <p class="tip">Renderizzare HTML in modo dinamico può essere pericoloso perché potete essere soggetti ad [Attacchi XSS](https://it.wikipedia.org/wiki/Cross-site_scripting).
  Usate `v-html` solo su contenuto che ritenete sicuro e **MAI** su contenuto fornito dagli utenti.</p>

- **Esempio:**

  ``` html
  <div v-html="html"></div>
  <!-- è uguale a -->
  <div>{{{html}}}</div>
  ```

### v-if

- **Si Aspetta:** `*`

- **Utilizzo:**

  Renderizza l'elemento se e soltanto se la condizione viene soddisfatta.
  Il blocco che contiene i componenti ed i vincoli dei dati interno a questa direttiva vengono ricostruiti ogni volta.
  Se la direttiva è inserita in un `<template>` tutto il suo contenuto sarà soggetto alla condizione di esistente del if.

- **Vedi anche:** [Rendering Condizionale](/guide/conditional.html)

### v-show

- **Si Aspetta:** `*`

- **Utilizzo:**

  Attiva o Disattiva la visualizzazione di un elemento tramite proprietà CSS, se vi è una transizione essa verrà eseguita.

- **Vedi anche:** [Rendering Condizionale - v-show](/guide/conditional.html#v-show)

### v-else

- **Non si aspetta un espressione**

- **Restrizioni:** Il fratello più stretto, in termini di DOM, deve avere `v-if` o `v-show`.

- **Utilizzo:**

  Blocco HTML alternativo a `v-if` o `v-show`.

  ``` html
  <div v-if="Math.random() > 0.5">
    Scusa
  </div>
  <div v-else>
    Non mi scuso
  </div>
  ```

- **Vedi anche:** [Rendering Condizionale - v-else](/guide/conditional.html#v-else)

### v-for

- **Si Aspetta:** `Array | Oggetto | Numero | Stringa`

- **Attributi parametrici:**
  - [`track-by`](/guide/list.html#track-by)
  - [`stagger`](/guide/transitions.html#Staggering-Transitions)
  - [`enter-stagger`](/guide/transitions.html#Staggering-Transitions)
  - [`leave-stagger`](/guide/transitions.html#Staggering-Transitions)

- **Utilizzo:**

  Renderizza il blocco di elementi, o template, più volte in base ai dati che riceve.
  L'espressione contenente i dati deve rispettare una sintassi corretta in modo tale che avvenga la giusta iterazione:
  Potete usare due tipi di alias per l'iterazione `(in|of)`

  ``` html
  <!-- Equivale a item of items !-->
  <div v-for="item in items">
    {{ item.text }}
  </div>
  ```

  **Nota** l'utilizzo di `of` è valido solo con versioni di Vue uguali o superiori alla `v1.0.17`.
  Si può specificare un nome alternativo per l'index del ciclo for, per esempio se si ha a che fare con una collezione di oggetti:

  ``` html
  <div v-for="(index, item) in items"></div>
  <div v-for="(chiave, val) in collections"></div>
  ```

  L'utilizzo dettagliato di `v-for` è spiegato nel link seguente.

- **Vedi anche:** [Rendering delle Liste](/guide/list.html).

### v-on

- **Scorciatoia:** `@`

- **Si Aspetta:** `Funzione | Espressione Inline`

- **Argomento:** `evento (richiesto)`

- **Modificatori:**
  - `.stop` - chiama `event.stopPropagation()`.
  - `.prevent` - chiama `event.preventDefault()`.
  - `.capture` - Aggiunge l'evento alla modalità di cattura.
  - `.self` - viene attivato solo se l'elemento viene chiamato dall'elemento stesso.
  - `.{codice del carattere | chiave del carattere}` - attiva l'evento solo ad una determinata chiave.

- **Utilizzo:**

  Allega un evento ad un elemento del DOM. L'evento è l'argomento di questa direttiva.
  L'espressione può essere anche il corpo del evento stesso oppure il nome, in stringa, del evento nell'istanza di Vue.

  Quando si usano gli **eventi nativi del DOM** Vue gli ascolterà tutti. Se invece si usano eventi personalizzati andranno ascoltati dall'istanza di Vue.

  Per quanto riguarda gli eventi nativi del DOM, il metodo che gestisce l'evento riceverà l'evento stesso come unico argomento.
  Se si usa l'espressione inline allora si avrà accesso alla proprietà speciale `$event`, per esempio: `v-on:click="handle('ok', $event)"`.  **1.0.11+** Quando si ascoltano gli eventi personalizzati, l'espressione inline avrà accesso anche ad una properità speciale chiamata `$arguments` la quale è un array di tutti gli argomenti passati.

- **Esempio:**

  ``` html
  <!-- metodo -->
  <button v-on:click="doThis"></button>

  <!-- Espressione Inline -->
  <button v-on:click="doThat('Ciao', $event)"></button>

  <!-- Scorciatoia -->
  <button @click="doThis"></button>

  <!-- stop propagation -->
  <button @click.stop="doThis"></button>

  <!-- prevent default -->
  <button @click.prevent="doThis"></button>

  <!-- prevent default senza espressione -->
  <form @submit.prevent></form>

  <!-- catena di modificatori -->
  <button @click.stop.prevent="doThis"></button>

  <!-- pressione di un tasto più modificatore -->
  <input @keyup.enter="onEnter">

  <!-- pressione di un tasto con il codice -->
  <input @keyup.13="onEnter">
  ```

  Ascoltare gli eventi personalizzati su un componente personalizzato è possibile:

  ``` html
  <my-component @my-event="handleThis"></my-component>

  <!-- Espressione Inline -->
  <my-component @my-event="handleThis(123, $arguments)"></my-component>
  ```

- **Vedi anche:** [Gestione degli Eventi](/guide/Eventi.html)

### v-bind

- **Scorciatoia:** `:`

- **Si Aspetta:** `* (con Argomenti) | Oggetto (senza Argomenti)`

- **Argomento:** `attributo o Espressione (facoltativo)`

- **Modificatori:**
  - `.sync` - Rendere il vincolo a due vie, rispettato sui legami di proprietà.
  - `.once` - Effettua il vincolo una volta sola.
  - `.camel` - Converte il nome dell attributo in camelCase, rispettato dagli attributi convenzionali.

- **Utilizzo:**

  Lega uno o più attributi ad un componente o elemento del DOM.

  Quando utilizzato per legare gli attributi `class` o `style` supporta più valori come un array o un oggetto.

  Quando si lega un prop ad un componente, tale componente dev'essere esplicitamente dichiarato nei props del componente stesso.

  Quando si usa senza argomenti si può variarne l'utilizzo sfruttando un oggetto chiave-valore al posto di un argomento.
  Nota bene, il bind di classi e stili non supporta Array o Oggetti.

- **Esempio:**

  ``` html
  <!-- lega un attributo -->
  <img v-bind:src="imageSrc">

  <!-- Scorciatoia -->
  <img :src="imageSrc">

  <!-- lega delle classi -->
  <div :class="{ red: isRed }"></div>
  <div :class="[classA, classB]"></div>
  <div :class="[classA, { classB: isB, classC: isC }]">

  <!-- lega lo stile -->
  <div :style="{ fontSe: size + 'px' }"></div>
  <div :style="[styleOggettoA, styleOggettoB]"></div>

  <!-- lega un oggetto con proprietà-->
  <div v-bind="{ id: someProp, 'other-attr': otherProp }"></div>

  <!-- lega il componente usanto i prop, precedentemente dichiarato nel componente stesso. -->
  <my-component :prop="someThing"></my-component>

  <!-- prop a due vie -->
  <my-component :prop.sync="someThing"></my-component>

  <!-- prop singolo -->
  <my-component :prop.once="someThing"></my-component>
  ```

- **Vedi anche:**
  - [Vincoli delle Classi e dello Stile](/guide/class-and-style.html)
  - [Props dei Componenti](/guide/components.html#Props)

### v-model

- **Si Aspetta:** Dipende dal tipo di elemento.

- **Limitato a:**
  - `<input>`
  - `<select>`
  - `<textarea>`

- **Attributi parametrici:**
  - [`lazy`](/guide/forms.html#lazy)
  - [`number`](/guide/forms.html#number)
  - [`debounce`](/guide/forms.html#debounce)

- **Utilizzo:**

  Crea un vincolo a due vie tra un elemento, tipicamente un input di un form, e un dato di dell'istanza di Vue.

- **Vedi anche:** [Vincolo sugli input dei Form](/guide/forms.html)

### v-ref

- **Non si aspetta un'espressione**

- **Limitato a:** componenti figli

- **Argomento:** `id (richiesto)`

- **Utilizzo:**

  Registra una referenza ad un componente figlio per un accesso diretto da parte del padre.
  Questo attributo non si aspetta un'espressione ma ben sì il nome del componente da referenziare.
  L'istanza del componente figlio sarà disponibile tramite l'oggetto `$refs`.

  Quando viene usato assieme a `v-for`, il valore registrato sarà un array contenente tutti i componenti figli.
  Se l'origine dei dati di `v-for` è in oggetto, quest'ultimo dovrà essere una combinazione di chiavi-istanze per ogni componente che si vuole referenziare.

- **Note:**

  Dato che HTML è case-insensitive, la sintassi camelCase verrà convertita tutta in lowercase. Potete usare `v-ref:some-ref` la quale verrà propriamente impostata come `this.$refs.someRef`.

- **Esempio:**

  ``` html
  <comp v-ref:child></comp>
  <comp v-ref:some-child></comp>
  ```

  ``` js
  // accesso dal padre:
  this.$refs.child
  this.$refs.someChild
  ```

  con `v-for`:

  ``` html
  <comp v-ref:list v-for="item in list"></comp>
  ```

  ``` js
  // questo risulterà un array
  this.$refs.list
  ```

- **Vedi anche:** [Referenze Padre-Figlio](/guide/components.html#Child-Component-Refs)

### v-el

- **Non si aspetta un'espressione**

- **Argomento:** `id (richiesto)`

- **Utilizzo:**

  Registra la refernze al DOM per determinare il proprietario dell'istanza di Vue e del oggetto `$els`.

- **Note:**

  Dato che HTML è case-insensitive, la sintassi camelCase verrà convertita tutta in lowercase. Potete usare `v-el:some-el` la quale verrà convertita in `this.$els.someEl`.

- **Esempio:**

  ``` html
  <span v-el:msg>Ciao</span>
  <span v-el:other-msg>world</span>
  ```
  ``` js
  this.$els.msg.textContent // -> "Ciao"
  this.$els.otherMsg.textContent // -> "world"
  ```

### v-pre

- **Non si aspetta un'espressione**

- **Utilizzo**

  Salta la compilazione del elemento corrente e dei suoi figli
  Usato per debug principalmente o per visualizzare codice sorgente interno alle graffe.

- **Esempio:**

  ``` html
  <span pre>{{ Questo non verrà compilato 1 + 1}}</span>
  ```

### v-cloak

- **Non si aspetta un'espressione**

- **Utilizzo:**

  Questa direttiva rimarrà sul elemento finchè l'istanza di Vue non termina la sua compilazione
  Combinato con regole CSS del tipo `[v-cloak] { display: none }`, questa direttiva è utile per nascondere la sintassi ancora non compilata nel DOM affinchè si dia all'istanza di Vue il tempo di prepararsi.

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

  L elemento `<div>` non sarà visibile finch la compilazione di Vue non è terminata.

## Elementi Speciali

### component

- **Attributi:**
  - `is`

- **Attributi parametrici:**
  - [`keep-alive`](/guide/components.html#keep-alive)
  - [`transition-mode`](/guide/components.html#transition-mode)

- **Utilizzo:**

  Sintassi alternativa per invocare dei componenti. Usata principalmente per componenti dinamici:

  ``` html
  <!-- Un componente dinamico controllato dalla -->
  <!-- proprietà `componentId` dentro la VM -->
  <component :is="componentId"></component>
  ```

- **Vedi anche:** [Componenti Dinamici](/guide/components.html#Dynamic-Components)

### slot

- **Attributi:**
  - `name`

- **Utilizzo:**

  L elemento `<slot>` servce a distribuire componenti. L elemento in se verrà rimpiazzato dal componente stesso.

  Uno slot che ha `name` come attributo viene detto "Slot nominativo" e verrà sostituito con un componente che ha lo stesso nome dello slot.

  Per maggiori dettagli su come funzionano gli slot utilizzate il link sotto,

- **Vedi anche:** [Distribuizione dei Contenuti con Slots](/guide/components.html#Content-Distribution-with-Slots)

### partial

- **Attributi:**
  - `name`

- **Utilizzo:**

  Gli elementi `<partial>` servono a registrato porzioni di template riutilizzabili.
  I parziali vengono interpretati da Vue e rimpiazzati con il template che essi contengono. L elemento in se verrà rimpiazzato.
  Per funzionare a dovere, un parziale ha bisogno di un attributo chiamato `name` il quale identifica il contenuto del parziale stesso.

- **Esempio:**

  ``` js
  // Registra un parziale
  Vue.partial('my-partial', '<p>Parziale inizializzato! {{msg}}</p>')
  ```

  ``` html
  <!-- parziale statico-->
  <partial name="my-partial"></partial>

  <!-- parziale dinamico -->
  <!-- renderizza qualsiasi parziale che soddisfa id === vm.partialId -->
  <partial v-bind:name="partialId"></partial>

  <!-- parziale dinamico tramite la scorciatoia -->
  <partial :name="partialId"></partial>
  ```

## Filtri

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
  - `{Stringa} [simbolo] - Predefinito: '$'`

- **Esempio:**

  ``` html
  {{ amount | currency }}
  ```

  *12345 => $12,345.00*

  Con un simbolo diverso:

  ``` html
  {{ amount | currency '£' }}
  ```

  *12345 => £12,345.00*

### pluralize

- **Argomenti:**
  - `{Stringa} singolare, [doppia, tripla, ...]`

- **Utilizzo:**

  Rende una stringa plurale. Quando c'è solo un argomento tenterà di aggiungere una sola `s` alla fine.
  Quando ci sono più argomenti questi ultimi verranno utilizzati per le varie forme plurali necessarie.
  Quando il numero di argomenti eccede le forme plurali, verrà utilizzata sempre l'ultima forma fornita.

  <p class="tip">Pluralize funziona solo per la lingua inglese..</p>

- **Esempio:**

  ``` html
  {{count}} {{count | pluralize 'item'}}
  ```

  *1 => '1 item'*  
  *2 => '2 items'*

  ``` html
  {{date}}{{date | pluralize 'st' 'nd' 'rd' 'th'}}
  ```

  Risulterà in:

  *1 => '1st'*  
  *2 => '2nd'*
  *3 => '3rd'*
  *4 => '4th'*
  *5 => '5th'*

### json

- **Argomenti:**
  - `{Numero} [identazione] - Predefinito: 2`

- **Utilizzo:**

  Visualizza il risultato della chiamata a `JSON.stringaify()` sul valore passato come argomento.

- **Esempio:**

  Stampa un oggetto con 4 punti di identazione:

  ``` html
  <pre>{{ Oggetto | json 4 }}</pre>
  ```

### debounce

- **Limitato a:** Questa direttiva di aspetta una funzione da richiamare come su `v-on`.

- **Argomenti:**
  - `{Numero} [tempo] - Predefinito: 300`

- **Utilizzo:**

  Aggiunge un delay ad un evento per del DOM legato ad un determinato elemento, inoltre si possono specificare i millisecodi, come argomento, per un eventuale ritardo più prolungato.
  Di default il delay è a 300ms.

- **Esempio:**

  ``` html
  <input @keyup="onKeyup | debounce 500">
  ```

### limitBy

- **Limitato a:** Questa direttiva di aspetta un argomento ed è preceduta da `v-for`

- **Argomenti:**
  - `{Numero} limit`
  - `{Numero} [offset]`

- **Utilizzo:**

  Limita l'iterazione con l'array ad un numero di elementi specificato.
  Si può specificare un secondo argomento che viene usato come punto di partenza, offset, per l'iterazione.

  ``` html
  <!-- Visualizza i primi 10 elementi -->
  <div v-for="item in items | limitBy 10"></div>

  <!-- visualizza gli elementi dal 5 al 15 -->
  <div v-for="item in items | limitBy 10 5"></div>
  ```

### filterBy

- **Limitato a:** Si aspetta un array e una direttiva `v-for`

- **Argomenti:**
  - `{Stringa | Funzione} Target iniziale`
  - `"in" (facoltativo, limitatore)`
  - `{Stringa} [chiave di ricerca]`

- **Utilizzo:**

  Restituisce una versione filtrata, alterata, dell'array originale passato tramite `v-for`. Il primo argomento può essere una stringa o una funzione.

  Quando il primo argomento è una stringa, viene usata come target per la ricerca nell'array

  ``` html
  <div v-for="item in items | filterBy 'Ciao'">
  ```

  In questo caso solo gli elementi contenenti `"Ciao"` verranno visualizzati.

  Se gli elementi ciclati sono degli oggetti, il filtro cercherà di essere più ricorsivo possibile.
  Per evitare che si scorra tutto l'oggetto si può utilizzare una chiave come terzo parametro del filtro.

  ``` html
  <div v-for="user in users | filterBy 'Jack' in 'name'">
  ```

  In questo esempio il filtro viene applicato solo a tutti i campi `name` degli oggetti in users. **E' sempre una buona idea limitare il filtro per questione di prestazioni.**

  Gli esempi visti fin'ora usavano il primo argomento in modo statico. Questa non è l'unica possibilità difatti possiamo anche usare una variabiile per creare
  una specie di filtro dinamico per una lista combinando il tutto con la direttiva `v-model`.

  ``` html
  <div id="esempio-filter-by">
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
    el: '#esempio-filter-by',
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
  <div id="esempio-filter-by" class="demo">
    <input v-model="name">
    <ul>
      <li v-for="user in users | filterBy name in 'name'">
        {{ user.name }}
      </li>
    </ul>
  </div>
  <script>
  new Vue({
    el: '#esempio-filter-by',
    data: {
      name: '',
      users: [{ name: 'Bruce' }, { name: 'Chuck' }, { name: 'Jackie' }]
    }
  })
  </script>
  {% endraw %}

- **Altri Esempi:**

  Utilizzando più chiavi di filtro:

  ``` html
  <li v-for="user in users | filterBy searchText in 'name' 'phone'"></li>
  ```

  Chiavi multiple con argomento dinamico:

  ``` html
  <!-- fields = ['fieldA', 'fieldB'] -->
  <div v-for="user in users | filterBy searchText in fields">
  ```

  Funzione personalizzata di filtro:

  ``` html
  <div v-for="user in users | filterBy myCustomFilterFunzione">
  ```

### orderBy

- **Limitato a:** Si aspetta un array passato dalla direttiva `v-for`

- **Argomenti:**
  - `{Stringa | Array | Funzione} chiave di ordinamento`
  - `{Stringa} [order] - Predefinito: 1`

- **Utilizzo:**

  Restituisce una versione riordinata dell'array di origine. La chiave di ordinamento è obbligatoria per specificare come ordinare l'array. Per rendere il sistema più flessibile è possibile passare un Array di chiavi di ordinamento oppure una funzione dedicata alla strategia di ordinamento stessa. Il secondo argomento è facoltativo ed indica il tipo di ordine `ascendente` (`order >= 0`) o `discendente` (`order < 0`).

  Per gli array primitivi si può omettere `sortKeys` ed inderire una costante come `orderBy 1`.

- **Esempio:**

  Orginare gli utenti per nome:

  ``` html
  <ul>
    <li v-for="user in users | orderBy 'name'">
      {{ user.name }}
    </li>
  </ul>
  ```

  Ordinare gli utenti per ordine decrescente:

  ``` html
  <ul>
    <li v-for="user in users | orderBy 'name' -1">
      {{ user.name }}
    </li>
  </ul>
  ```

  Ordinare i numeri per valore primitivo:

  ``` html
  <ul>
    <li v-for="n in numbers | orderBy true">
      {{ n }}
    </li>
  </ul>
  ```

  Ordinamento dinamico:

  ``` html
  <div id="esempio-orderBy">
    <button @click="order = order * -1">Cambia l'ordine</button>
    <ul>
      <li v-for="user in users | orderBy 'name' order">
        {{ user.name }}
      </li>
    </ul>
  </div>
  ```

  ``` js
  new Vue({
    el: '#esempio-orderBy',
    data: {
      order: 1,
      users: [{ name: 'Bruce' }, { name: 'Chuck' }, { name: 'Jackie' }]
    }
  })
  ```
  
  Ordinamento utilizzando due chiavi:
  
  ``` html
  <ul>
    <li v-for="user in users | orderBy 'lastName' 'firstName'">
      {{ user.lastName }} {{ user.firstName }}
    </li>
  </ul>
  ```
  
  Esempio concreto:

  {% raw %}
  <div id="esempio-orderBy" class="demo">
    <button @click="order = order * -1">Cambia l'ordine</button>
    <ul>
      <li v-for="user in users | orderBy 'name' order">
        {{ user.name }}
      </li>
    </ul>
  </div>
  <script>
  new Vue({
    el: '#esempio-orderBy',
    data: {
      order: 1,
      users: [{ name: 'Bruce' }, { name: 'Chuck' }, { name: 'Jackie' }]
    }
  })
  </script>
  {% endraw %}

Sort using a Function:

  ``` html
  <div id="orderby-compare-example" class="demo">
    <button @click="order = order * -1">Inverti l'Ordine</button>
    <ul>
      <li v-for="user in users | orderBy ageByTen">
        {{ user.name }} - {{ user.age }}
      </li>
    </ul>
  </div>
  ```

  ``` js
  new Vue({
    el: '#orderby-compare-example',
    data: {
      order: 1,
      users: [
        {
          name: 'Jackie',
          age: 62
        },
        {
          name: 'Chuck',
          age: 76
        },
        {
          name: 'Bruce',
          age: 61
        }
      ]
    },
    methods: {
      ageByTen: function (a, b) {
        return Math.floor(a.age / 10) - Math.floor(b.age / 10)
      }
    }
  })
  ```

  {% raw %}
  <div id="orderby-compare-example" class="demo">
    <button @click="order = order * -1">Inverti l'Ordine</button>
    <ul id="orderby-compare-example">
      <li v-for="user in users | orderBy ageByTen order">
        {{ user.name }} - {{ user.age }}
      </li>
    </ul>
  </div>
  <script>
  new Vue({
    el: '#orderby-compare-example1',
    data: {
      order: 1,
      users: [
        {
          name: 'Jackie',
          age: 62
        },
        {
          name: 'Chuck',
          age: 76
        },
        {
          name: 'Bruce',
          age: 61
        }
      ]
    },
    methods: {
      ageByTen: function (a, b) {
        return Math.floor(a.age / 10) - Math.floor(b.age / 10)
      }
    }
  })
  </script>
  {% endraw %}

## Metodi di Estensioni per Array

  Vue.js estende `Array.prototype` aggiungendo due nuovi metodi che rendono più facile effettuare operazioni sugli Array ed assicurarsi che il sistema reattivo sia propriamente attivato.

### array.$set(index, value)

- **Argomenti**
  - `{Numerico} indice`
  - `{*} valore`

- **Utilizzo**

  Impostare un elemento in un array specificanto l'indice nel Array

  ``` js
    vm.animals.$set(0, { name: 'Aardvark' })
  ```

- **Vedi anche:** [Come rilevare i Cambiamenti sugli Array](/guide/list.html#Caveats)

### array.$remove(reference)

- **Argomenti**
  - `{Referenza} referenza`

- **Utilizzo**

  Questo è un metodo che fa da "wrapper" a più metodi sugli Array. Il funzionamento è semplice, prima cerca l'elemento tramite l'indice e poi effettua `array.splice(index, 1)`

  ``` js
    vm.animals.$remove(0)
    // oppure
    var aardvark = vm.animals[0]
    vm.animals.$remove(aardvark)
  ```

- **Vedi anche:** [Metodi di Mutazione](/guide/list.html#Mutation-Methods)