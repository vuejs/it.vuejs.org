---
title: Reattività nel Dettaglio
type: guide
order: 13
---

Abbiamo visto tutte le basi per utilizzare VueJs - ora è tempo di guardare nel dettaglio alcune parti fondamentali, la prima che andremo ad affrontare è una delle più importanti e meno visibili di VueJs, il sistema di reattività. La reattività è tutto quel sistema che vi permette di aggiornare gli oggetti Javascript della vostra istanza. La reattività rende la gestione dello stato veramente semplice ed intuitiva, ma è anche importante e bisogna capire come funziona per evitare sorprese in futuro. In questa sezione andremo ad analizzare nel dettagli il sistema di reattività per capire come funziona dietro le quinte.

## Come vengono tracciati i Cambiamenti

Quando passate un oggetto Javascript ad un'istanza Vue, ovvero alla sua opzione `data`, Vue.js in primis analizzerà tutte le sue proprietà e le convertirà in getter/setter usando la funzione [Object.defineProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty). Questa funzione è disponibile sono da ES5 in su, per questo Vue.js non supportà IE8 e predecessori.

I getter/setters saranno invisibili all utente, ma dietro le quinte questi nuovi metodi permettono a Vue.js di tracciare i cambiamenti e di effetturare un tracciamento delle dipendenze esterne per quell oggetto specifico. Da notare che il browser formattano i getter/setter in maniera diversa rispetto a Vue.js, perciò quando volete effettuare il log di un oggetto è preferibile usare `vm.$log()` piuttosto che il log nativo del browser.

Per ogni direttiva / vincolo di dati nel template, ci sarà un **watcher** dedicato, che tiene traccia di ogni cambiamento sia che proviene dal DOM, il quale va aggiornare il corrispettivo setter, sia che provenga da Vuejs, il quale andrà aggiornate il corrispettivo getter.

![data](/images/data.png)

## Trucchi per determinare i Cambiamenti

Date alcune limitazioni di ES5, Vue.js **non può capire quando una proprietà viene aggiunta od eliminata** dato Vue.js crea questi getter/setter dedicati, se vengono aggiunte proprietà al di fuori, esse non saranno reattive, per esempio:

``` js
var data = { a: 1 }
var vm = new Vue({
  data: data
})
// `vm.a` e `data.a` non sono reattivi

vm.b = 2
// `vm.b` non è reattivo

data.b = 2
// `data.b` non è reattivo
```

Però, **c'è un modo per aggiungere una proprietà reattiva** dopo che l'istanza è stata creata.

Per Vue in particolare, si può usare il metodo `$set(path, value)`:

``` js
vm.$set('b', 2)
// `vm.b` e `data.b` saranno reattivit
```

Per un oggetto, potete usare il metodo globale `Vue.set(object, key, value)`:

``` js
Vue.set(data, 'c', 3)
// `vm.c` w `data.c` ora sono reattivi
```

Qualche voltra avrete bisogno di assegnare un numero di properità ad un oggetto già esistente, per esempio utilizzando `Object.assign()` o `_.extend()`. Comunque le nuove properità non saranno reattive, per far si che lo diventino bisogna riassegnare l'oggetto in questa maniera:

``` js
//  invece di `Object.assign(this.someObject, { a: 1, b: 2 })`
this.someObject = Object.assign({}, this.someObject, { a: 1, b: 2 })
```

Ci sono anche alcuni trucchi per gli Array, discussi in [precedenza sulla guida alle liste](/guide/list.html#Caveats).

## Inizializzare i Vostri Dati

Nonostante esistano delle API che permettano di dichiarare in modo dinamico le proprietà reattive, è sempre consigliato farlo inizialmente, con l'opzione `data`.

Invece di questo::

``` js
var vm = new Vue({
  template: '<div>{{msg}}</div>'
})
// aggiungi `msg` dopo
vm.$set('msg', 'Hello!')
```

E' consigliato questo:

``` js
var vm = new Vue({
  data: {
    // dichiarare msg dentro data anche se vuoto
    msg: ''
  },
  template: '<div>{{msg}}</div>'
})
// impostare msg dopo
vm.msg = 'Hello!'
```

Vi sono anche due ragioni dietro questo suggerimento:

1. L'oggetto `data` è come lo schema per il vostro componente ed il suo stato. Dichiarare tutte le properità al suo interno rende il componente più facile da capire ed utilizzare.

2. Aggiungere una properità reattiva al livello alto della vostra istanza Vue obbligherà i watchers a rivalutare l'istanza stessa, perchè non esiste un watcher che aveva tale properità come dipendenza. Le prestazioni di tale operazione sono accettabili (e sono molto simili alle prestazioni del controllo analogo su Angular), ma si possono evitare problemi con la dichiarazione delle properità nell oggetto data.

## Async Update Queue

By default, Vue.js performs DOM updates **asynchronously**. Whenever a data change is observed, Vue will open a queue and buffer all the data changes that happens in the same event loop. If the same watcher is triggered multiple times, it will be pushed into the queue only once. Then, in the next event loop "tick", Vue flushes the queue and performs only the necessary DOM updates. Internally Vue uses `MutationObserver` if available for the asynchronous queuing and falls back to `setTimeout(fn, 0)`.

For example, when you set `vm.someData = 'new value'`, the DOM will not update immediately. It will update in the next "tick", when the queue is flushed. Most of the time we don't need to care about this, but it can be tricky when you want to do something that depends on the post-update DOM state. Although Vue.js generally encourages developers to think in a "data-driven" fashion and avoid touching the DOM directly, sometimes it might be necessary to get your hands dirty. In order to wait until Vue.js has finished updating the DOM after a data change, you can use `Vue.nextTick(callback)` immediately after the data is changed. The callback will be called after the DOM has been updated. For example:

``` html
<div id="example">{{msg}}</div>
```

``` js
var vm = new Vue({
  el: '#example',
  data: {
    msg: '123'
  }
})
vm.msg = 'new message' // change data
vm.$el.textContent === 'new message' // false
Vue.nextTick(function () {
  vm.$el.textContent === 'new message' // true
})
```

There is also the `vm.$nextTick()` instance method, which is especially handy inside components, because it doesn't need global `Vue` and its callback's `this` context will be automatically bound to the current Vue instance:

``` js
Vue.component('example', {
  template: '<span>{{msg}}</span>',
  data: function () {
    return {
      msg: 'not updated'
    }
  },
  methods: {
    updateMessage: function () {
      this.msg = 'updated'
      console.log(this.$el.textContent) // => 'not updated'
      this.$nextTick(function () {
        console.log(this.$el.textContent) // => 'updated'
      })
    }
  }
})
```

## Inside Computed Properties

It should be noted that Vue.js computed properties are **not** simple getters. Each computed property keeps track of its own reactive dependencies. When a computed property is evaluated, Vue.js updates its dependency list and caches the result value. The cached value is only invalidated when one of the tracked dependencies have changed. Therefore, as long as the dependencies did not change, accessing the computed property will directly return the cached value instead of calling the getter.

Why do we need caching? Imagine we have an expensive computed property **A**, which requires looping through a huge Array and doing a lot of computations. Then, we may have other computed properties that in turn depend on **A**. Without caching, we would be calling **A**’s getter many more times than necessary!

Because of computed property caching, the getter function is not always called when you access a computed property. Consider the following example:

``` js
var vm = new Vue({
  data: {
    msg: 'hi'
  },
  computed: {
    example: function () {
      return Date.now() + this.msg
    }
  }
})
```

The computed property `example` has only one dependency: `vm.msg`. `Date.now()` is **not** a reactive dependency, because it has nothing to do with Vue's data observation system. Therefore, when you programmatically access `vm.example`, you will find the timestamp to remain the same unless `vm.msg` triggers a re-evaluation.

In some use cases you may want to preserve the simple getter-like behavior, where every time you access `vm.example` it simply calls the getter again. You can do that by turning off caching for a specific computed property:

``` js
computed: {
  example: {
    cache: false,
    get: function () {
      return Date.now() + this.msg
    }
  }
}
```

Now, every time you access `vm.example`, the timestamp will be up-to-date. **However, note this only affects programmatic access inside JavaScript; data-bindings are still dependency-driven.** When you bind to a computed property in the template as `{% raw %}{{example}}{% endraw %}`, the DOM will only be updated when a reactive dependency has changed.
