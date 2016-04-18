---
title: Componenti
type: guida
order: 12
---

## Che cos'è un componente?

In componente è la caratteristica più interessante di Vue.js, ed è anche lo strumento più potente.
I componenti aiutano ad estendere il classico DOM HTML con dei blocchi di codice riutilizzabile
In altre parole, i componenti sono elementi personalizzati, contenenti un template HTML,  che Vue.js compila e renderizza come elementi del DOM.
In alcuni cassi essi possono apparire come elementi nativi HTML con un attributo speciale chiamato `is`.

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

### Parsing del Template

Il motore dietro al sistem di gestione dei template in Vue.js è basato sul DOM ed utilizzare dei parser nativi del browser invece di creare di nuovi. Questo porta sia dei vantaggi, soprattutto se compariamo questo sistemo ad un classico sistema di renderizzazione basato su stringhe, ma anche alcune regole da tenere a mente per esempio, il template dev'essere sempre composto da HTML valido e seguire le classiche regole su "chi contiene cosa", in particolare:

- L'elemento `a` non può contenere altri elementi interattivi (come bottoni o link)
- L'elemento `li` deve essere figlio diretto del elemento `ul` o `ol`, e sia `ul` che `ol` possono solo contenere `li`
- L'elemento `option` deve essere figlio diretto di `select`, di conseguenza `select` può solo contenere `option` o `optgroup`
- L'elemento `table` deve contenere solo `thead`, `tbody`, `tfoot` e `tr`, tutti questi elementi devono essere figli diretti di `table`
- L'elemento `tr` può solo contenere `th` e `td`, e questi due elementi devono essere figli diretti di `tr`

Queste restrizioni esistono per evitare comportamenti del DOM inaspettati. Anche se alcune casistiche, se non rispettate, possono dare l'idea di funzionare, non potete fare affidamento su come il browser possa validare i componenti custom con elementi errati, per esempio `<my-select><option>...</option></my-select>` non è un template valido anche se `my-select` potrebbe espandersi in `<select>...</select>`.

Un'altra conseguenza che può portare ad un ordine improprio degli elementi è l'utilizzo tag personalizzati (come `<component>`, `<template>` e `<partial>`) internamente ad `ul`, `select`, `table` e altri elementi con  restrizioni simili dato che tali tag verrebbero renderizzati in modo errato dal browser.

Se dovete utilizzare un elemento personalizzato dovete far affidamento all'attributo speciale `is`:

``` html
<table>
  <tr is="my-component"></tr>
</table>
```

Nel caso di un `<template>` dentro una `<table>` conviene usare `<tbody>`, come tabelle e creare più `tbody`:

``` html
<table>
  <tbody v-for="item in items">
    <tr>Riga pari</tr>
    <tr>Riga dispari</tr>
  </tbody>
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
    // Tipi multipli (1.0.21+)
    propM: [String, Number],
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

Un componente figlio ha accesso al componente padre tramite l'utilizzo di `this.$parent`. Un'istanza Vue è disponibile a tutti i componenti e i loro discendenti tramite `this.$root`. Ogni padre ha un Array di componenti figli in un array `this.$children`.

Anche se questa logica rendere virtualmente possibile l'accesso alla catena dei padri da parte di un eventuale figlio, è vivamente sconsigliata e, invece, dovreste sempre passare i dati in modo esplicito tramite i prop. In aggiunta al discorso, è una cattiva abitudine quella di mutare lo stato di un componente padre da parte di un figlio per i seguenti motivi:

1. Rende il legame padre e figlio strettamente dipendenti;

2. Rende difficile stabilire lo stato corrente del padre senza dipendere dagli stati di eventuali figli! In un sistema ideale lo stato di ogni componente dev'essere auto gestito.

### Eventi Personalizzati

Tutte le istanze di Vue implementano un'interfaccia per facilitare la comunicazione tra gli eventi di ogni componente. Questo sistema di eventi è indipendente dal sitema degli eventi legati al DOM e lavora in modo differente.

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

Prima di approfondire la nostra consocenze sulle API, chiarifichiamo in quale ambito i contenuti vengono compilati. Immaginate un template del tipo:

``` html
<parent>
  <child-component>
    {{ msg }}
  </child-component>
</parent>
```

In questo caso `msg` andrebbe vincolato ai dati del padre oppure del figlio? La risposta è del padre, una regola di base per stabilire l'ambito dei componenti è:

> Tutto ciò che viene compilato all'interno dell'ambito del padre appartiene al padre stesso, tutto quello che viene compilato nell'ambito del figlio appartiene al figlio.

Un esempio di errore molto comunque è quello di cercare di legare una direttiva del figlio a qualche metodo o proprietà del padre:

``` html
<!-- Non funziona -->
<child-component v-show="someParentProperty"></child-component>
```

Mettiamo caso che `someParentProperty` sia una proprietà interna del figlio, l'esempio sopra comunque non funzionerebbe come previsto. Il padre non deve essere a conoscenza dello stato del figlio, o per lo meno non dovrebbe preoccuparsene.

Se avete proprio la necessità di legare direttive figlie a qualche componente padre, dovete farlo all'interno della definizione del componente figlio stessa:

``` js
Vue.component('child-component', {
  // Questo funziona, siamo nell'ambito giusto
  template: '<div v-show="someChildProperty">Child</div>',
  data: function () {
    return {
      someChildProperty: true
    }
  }
})
```

### Slot Singolo

Il contenuto del padre verrà **scartato** a meno che il componente figlio non contenga almeno un elemento `<slot>`. Quando viene rilevato un elemento slot, senza contenuti ne attributi, tutto il contenuto del padre andrà a rimpiazzare lo slot stesso.

Se invece c'è del contenuto dentro uno `<slot>` allora verrà considerato **contenuto di rimpiazzio**. Ciò significa che verrà visualizzato se il padre non ha niente da mostrare.

Supponiamo di avere un componente del tipo:

``` html
<div>
  <h1>Questo è un componente!</h1>
  <slot>
    Questo contenuto verrà visualizzato se il padre non ha bisogno dello slot
  </slot>
</div>
```

Il padre che utilizzerà il componente:

``` html
<my-component>
  <p>Contenuto originale</p>
  <p>Altro contenuto originale</p>
</my-component>
```

Il risultato finale sarà

``` html
<div>
  <h1>Questo è un componente!</h1>
  <p>Contenuto originale</p>
  <p>Altro contenuto originale</p>
</div>
```

### Slots Nominativi

Gli elementi `<slot>` hanno un attributo speciale chiamato `name`, tale attributo può essere utilizzato per personalizzare il contenuto distribuito dagli slot stessi. Puoi avere slot multipli con nomi differenti. Il contenuto di uno slot nominativo viene cercato usando il nome dello slot come referenza.

Possono ancora esistere gli slot anonimi, i quali vengono utilizzati come **slot di default**.

Ecco un esempio di slot multipli:

``` html
<div>
  <slot name="one"></slot>
  <slot></slot>
  <slot name="two"></slot>
</div>
```

Codice del Padre:

``` html
<multi-insertion>
  <p slot="one">One</p>
  <p slot="two">Two</p>
  <p>Default A</p>
</multi-insertion>
```

Risultato:

``` html
<div>
  <p slot="one">One</p>
  <p>Default A</p>
  <p slot="two">Two</p>
</div>
```

Il sistema degli slot e la distribuzione dei contenuti è un meccanismo utilissimo per comporre template con componenti che interagiscono tra di loro.

## Componenti Dinamici

Sfruttando una singla istanza puoi cambiare dinamicamente i componenti utilizzati tramite l'elemento `<component>` e il suo attributo `is`:

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
  <!-- il componente cambierà in base al valore di is -->
</component>
```

### `keep-alive`

Nel caso tu voglia mantenere lo stato del componente anche se cambia, in modo da evitare una doppia renderizzazione, puoi utilizzare la direttiva `keep-alive`:

``` html
<component :is="currentView" keep-alive>
  <!-- il componente inattivo verrà messo in cache -->
</component>
```

### Hook `activate`

Quando si cambiano componenti, ed il componente in arrivo deve fare qualche lavoro asincrono prima di essere renderizzato, si può sfruttare l hook `activate` per gestire quel frangente tra il richiamo e la renderizzazione:

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

Da notare che questo `activate` viene chiamato solo durante il cambio di componenti o al primo richiamo del componente stesso. Non viene chiamato se viene inserito all interno di un'istanza Vue.

### `transition-mode`

L attributo `transition-mode` vi permette di specificare in che modo avvenga il cambio di due o più componenti dinamici.

Per definizione, la transizione avviene in modo simultaneo. Questo però non vi impedisce di provare altri due modi disponibili:

- `in-out`: Il nuovo componente entra per primo, il componente che deve svanire lo fa finita la transizione del nuovo componente.

- `out-in`: Il componente attuale esce di scena per primo, il nuovo componente apparirà quando la transizione è finita.

**Esempio**

``` html
<!-- fade out prima, poi fade in -->
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

## Altri Particolari

### I Componenti e v-for

Potete usare `v-for` sui componenti come fate su qualsiasi altro elemento:

``` html
<my-component v-for="item in items"></my-component>
```

Però, tale metodo non passerà nessun dato al componente perché ogni componente ha il proprio ambito isolato. Per passargli i dati tramite un ciclo `v-for` dovete utilizzare una sintassi del tipo:

``` html
<my-component
  v-for="item in items"
  :item="item"
  :index="$index">
</my-component>
```

La motivazione dietro tutto cioè è che non si vuole legare strettamente il componente al funzionamento di `v-for`, se si obbliga a rendere esplicita la provenienza dei dati, sarà più facile riutilizzare il componente.

### Authoring dei Componenti Riutilizzabili

Quando si effettua authoring dei componenti, è buona cosa tenere a mente quando si vuole riutilizzare tale componente altrove. A volte può capitare di avere dei componenti poco riutilizzabili ma tenete a mente che è sempre meglio esporre un'interfaccia API pulita e chiara per ogni componente.

Le API per un componente in Vue.js si suddividono sostanzialmente in tre parti - props, eventi e slots:

- **Props** ti permettono di ricevere dati dall'esterno del componente;

- **Eventi** ti permetto di attivare azioni che vengono distribuite all'esterno dei componenti;

- **Slots** ti permettono di inserire del contenuto esterno all'interno della struttura del componente.

Con le scorciatoie dedicate per `v-bind` e `v-on`, l'intento è quello di fornire delle API chiare anche nel template:

``` html
<my-component
  :foo="baz"
  :bar="qux"
  @event-a="doThis"
  @event-b="doThat">
  <!-- content -->
  <img slot="icon" src="...">
  <p slot="main-text">Ciao!</p>
</my-component>
```

### Componenti Asincroni

In applicazioni molto grosse, è utile poter dividere il tutto in piccole parti, e caricare solo i componenti quanto solo veramente necessari. Per facilitare questo processo, Vue.js vi permette di definire i vostri componenti in una funzione factory che automaticamente risolverà e renderizzerà i componenti per voi quando richiesti:

``` js
Vue.component('async-example', function (resolve, reject) {
  setTimeout(function () {
    resolve({
      template: '<div>Sono Asincrono!</div>'
    })
  }, 1000)
})
```

La funzione factory riceve un callback chiamato `resolve`, il quale dovrebbe essere chiamato quando avete ricevuto la definizione del componente dal server. Potete anche chiamare `reject(reason)` per indicare un caricamento fallito, con tanto di moticazione. Nel nostro esempio il `setTimeout` dimostra come il componente venga caricato un secondo dopo in modo asincrono. La logica di caricamento è totalmente gestita da voi. Un consiglio è quello di utilizzare i componenti asincroni ed la [funzione code-splitting di Webpack](http://webpack.github.io/docs/code-splitting.html):

``` js
Vue.component('async-webpack-example', function (resolve) {
  // Usando require il vostro codice saprà che
  // webpack è necessario per importare il componente in modo
  // asincrono ed automatico.
  require(['./my-async-component'], resolve)
})
```

### Convenzione sui Nomi da usare

Alcuni elementi, come le direttive ed i componenti, vengono renderizzari dentro il codice HTML sotto forma di attributi oppure tag personalizzati. Dato che gli attributi ed i tag in HTML sono **case-insensitive**, è buona cosa utilizzare la sintassi kebab-case piuttosto che camelCase, quest'ultima potrebbe recare confusione.

Vue.js supporta l'uso di camelCase o PascalCase per le direttive o i componenti, e cercherà nel migliore dei modi di tradurle in kebab-case:

``` js
// Nella definizione di un componente
components: {
  // registri il componente tramite camelCase
  myComponent: { /*... */ }
}
```

``` html
<!-- utilizza il kebab-case nel template -->
<my-component></my-component>
```

Questo approccio funzione bene con le [scorciatoie pr oggetti in ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#New_notations_in_ECMAScript_6):

``` js
// PascalCase
import TextBox from './components/text-box';
import DropdownMenu from './components/dropdown-menu';

export default {
  components: {
    // usati nel template come <text-box> e <dropdown-menu>
    TextBox,
    DropdownMenu
  }
}
```

### Componenti Ricorsivi

Un componente può invocare se stesso in modo ricorsivo, però questo è possibile solo quando l'opzione `name` è specificata:

``` js
var StackOverflow = Vue.extend({
  name: 'stack-overflow',
  template:
    '<div>' +
      // invocazione ricorsiva
      '<stack-overflow></stack-overflow>' +
    '</div>'
})
```

Una chiamata come quella dell'esempio sopra, porterebbe il vostro codice ad un errore del tipo "max stack size exceeded", assicuratevi che le chiamate ricorsive siano sempre monitorate da qualche condizione che ne limiti la creazione stessa. Quando registrate un componente a livello globale tramite `Vue.component()`, l'ID viene automaticamente generato e associato alla opzione `name`.

### Istanze Frammentate

Quando si utilizza l'opzione `template` di un componente, essa andrà a sostituire il contenuto del componente per ogni istanza Vue nella quale il componente viene chiamato. A conoscenza di ciò è consigliato sempre tenere un unico livello di root per tutti i componenti di una singola istanza Vue.

Invece di un template del genere:

``` html
<div>root node 1</div>
<div>root node 2</div>
```

E' consigliato questo:

``` html
<div>
  Un solo livello di Root!
  <div>node 1</div>
  <div>node 2</div>
</div>
```

Ci sono molte situazione che possono trasformare una istanza Vue in un'**istanza frammentata**:

1. Il template contiene più elementi di root assieme.
2. Il template contiene solo testo.
3. Il template contiene un altro componente (il quale potrebbe essere frammentato):
4. Il template contiene solo una direttiva come `<partial>` oppure una vou-route `<router-view>`.
5. Il template contiene un elemento di root con delle condizioni tipo `v-if` o `v-for`.

La ragione per la quale tutte questi punto possono portare ad una istanza frammentata è che non si riesce più a definire quale sia l'elemento di rotto principale, questo costringe Vue a gestire tutto il contenuto del DOM come un template. Questo non impedirà di renderizzare il tutto correttamente ma non avendo un elemento di root l'opzione `$el` punterà ad un elemento non corretto, di solito un elemento del DOM testuale.

La cosa più importante di ciò è che **verranno ignorate tutte le direttive non di controllo, tutti gli attributi che non sono prop e tutte le transizioni dei componenti**, perché non c'è nessun elemento di root definito al quale legarle:

``` html
<!-- Non funzionerà -->
<example v-show="ok" transition="fade"></example>

<!-- Funzionerà, i prop funzionano -->
<example :prop="someData"></example>

<!-- il controllo funziona ma senza transizioni-->
<example v-if="ok"></example>
```

Ci sono dei casi nei quali le istanze frammentate sono l'unico modo di operare, in generale però è sempre meglio evitarle specificando un singolo elemento di root. Oltre alle motivazioni citate precedentemente, avere un elemento di root migliora anche le prestazioni.

### Template Inline

Quando si utilizzano i template inline, lo si fa tramite l'utilizzo di un attributo speciale chiamato `inline-template`, questo permette di utilizzare il contenuto scritto nel componente come unico contenuto per il suo template:

``` html
<my-component inline-template>
  <p>Questi due elemento sono compilati come parte del template del componente</p>
  <p>Senza inclusione da parte di un eventuale componente padre</p>
</my-component>
```

Comunque sia gli `inline-template` rendono lo scope del vostro template più difficile da definire, e rendono il contenuto del template impossibile da salvare in cache. E' sempre consigliato salvare e definire il template internamente al componente tramite l'opzione `template`.
