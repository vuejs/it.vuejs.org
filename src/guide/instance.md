---
title: L'instanza di Vue
type: guida
order: 3
---

## Costruttore

Tutte le applicazioni con Vue.js sono inizializzate creando l'**istanza Vue globale** tramite il costruttore di `Vue`:

``` js
var vm = new Vue({
  // opzioni
})
```

Un'istanza di Vue è sostanzialmente un **ViewModel** com'è definito nel [Modello MVVM](https://en.wikipedia.org/wiki/Model_View_ViewModel), come lo è la variabile chiamata `vm` che vedrete nel corso di questa documentazione.

Quando si inizializza un instanza Vue, hai bisogno di passargli **delle opzioni** le quali conterrano eventuali dati, template, metodi, callbacks e molto altro. La lista dettagliata delle opzioni la si può trovare nella sezione delle API.

Il costruttore `Vue` può essere esteso per crare componenti **riutilizzabili** e che includano le opzioni predefinite:

``` js
var MyComponent = Vue.extend({
  // opzioni estese
})

// Tutte le istanze di `MyComponent` avranno anche le opzioni
// predefinite di vue
var myComponentInstance = new MyComponent()
```

Sebbene si possa estendere l'istanza in modo imperativo, nella maggior parte dei casi è buona cosa registrare il componente direttamente dal costruttore Vue e gestirlo come un elemento personalizzato, da qui poi puoi assemblare il template in modo dichiarativo. Parleremo del sistema a componenti nel dettaglio più avanti. Per ora rimaniamo con l'idea che i componenti estendono sostanzialmente l'istanza di Vue.js

## Proprietà e Metodi

Ogni istanza Vue **delega** tutte le sue proprietà trovate nel suo oggetto `data`:

``` js
var data = { a: 1 }
var vm = new Vue({
  data: data
})

vm.a === data.a // -> true

// Impostiamo la proprietù in modo che influenzi i dati originali
vm.a = 2
data.a // -> 2

// ... e vice versa
data.a = 3
vm.a // -> 3
```

Da notare che solo le proprietà delegate sono **reattive**. Se si aggiunge una nuova proprietà dopo la creazione dell'istanza allora quest'ultima non scatenerà nessun tipo di aggiornamento nella nostra vista, o DOM. Discuteremo del concetto di reattività più avanti nella guida.

In aggiunta alla proprietà `data`, l'istanza di Vue espone una numerosa quantità di utili ed interessanti metodi. Questi metodi e proprietà si possono trovare all'interno della nostra istanza prefissati con un `$` per differenziarli dai dati delegati dall'istanza stessa.
Per esempio:

``` js
var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data
})

vm.$data === data // -> true
vm.$el === document.getElementById('example') // -> true

// $watch è un metodo dell'istanza
vm.$watch('a', function (newVal, oldVal) {
  // Questo callback viene richiamato quando `vm.a` cambia
})
```

Consulta le [API](/api) per una lista completa di tutte le proprietà e metodi disponibili.

## Ciclo di Vita dell'istanza

Ogni istanza di Vue, quando creata, passa attraverso una serie di inizializzazioni - per esempio, ha bisogno di impostare l'osservazione dei dati, compilare i template, creare i vincoli dei dati necessari etc. Durante tutto questo ha anche bisogno di invocare alcuni **hooks per il Ciclo di Vita**, che danno l'opportunità di eseguire delle porzioni di logica customizzata. Per esempio l'hook `created` viene chiamato appena l'istanza viene creata:

``` js
var vm = new Vue({
  data: {
    a: 1
  },
  created: function () {
    // `this` punta all'istanza vm
    console.log('a è: ' + this.a)
  }
})
// -> "a è: 1"
```

Ci sono tanti altri hooks che vengono chiamati in fasi differenti del ciclo di vità dell'istanza di Vue.js per esempio `compiled`, `ready` e `destroyed`. Tutti gli hooks del ciclo di vita sono chiamati utilizzando `this` per richiamare l'istanza corrente. Alcuni di voi potrebbero chiedersi dove stia la parte di "controllers", tipica di un framework MVC, all'interno di Vue.js, la risposta è: non ci sono controllers. La logica di ogni componente viene suddivisa attraverso questi hooks.

## Diagramma del Ciclo di Vita

Qui sotto c'è un diagramma riassuntivo del ciclo di vita di un'istanza. Non c'è nessun bisogno di capire al volo tutti i punti, questo diagramma sarà sicuramente utile in futuro.

![Ciclo di Vita](/images/lifecycle.png)
