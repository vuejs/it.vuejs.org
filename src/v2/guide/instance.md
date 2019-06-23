---
title: L'istanza di Vue
type: guide
order: 3
---

## Creare un'istanza di Vue

Ogni applicazione Vue inizia creando una nuova **istanza di Vue** con la funzione `Vue`:

```js
var vm = new Vue({
  // opzioni
})
```

Sebbene non sia strettamente assiociato con il [pattern MVVM](https://en.wikipedia.org/wiki/Model_View_ViewModel), il design di Vue è in parte ispirato ad esso. Come convenzione, usiamo spesso la variabile `vm` (abbreviazione di ViewModel) per fare riferimento alla nostra istanza di Vue. 

Quando crei un'istanza di Vue, passi un **oggetto di opzioni**. La maggior parte di questa guida descrive come utilizzare queste opzioni per creare il comportamento desiderato. Puoi anche cercare la lista completa delle opzioni facendo [riferimento alle API](../api/#Options-Data).

Una applicazione Vue consiste in un'**istanza principale di Vue** (Root Instance) creata con `new Vue`, opzionalmente organizzata in un albero di componenti nidificati e riutilizzabili. Per esempio, un albero di componenti di una todo app potrebbe assomigliare a questo:

```
Root Instance
└─ TodoList
   ├─ TodoItem
   │  ├─ DeleteTodoButton
   │  └─ EditTodoButton
   └─ TodoListFooter
      ├─ ClearTodosButton
      └─ TodoListStatistics
```

Parleremo nel dettaglio del [sistema di componenti](components.html) più avanti. Per ora, basta sapere che tutti i componenti Vue sono anche istanze di Vue, e quindi accettano lo stesso oggetto di opzioni (con eccezioni di alcune opzioni specifiche).

## Dati e metodi

Quando un'istanza di Vue è creata, aggiunge tutte le proprietà trovate nel suo oggetto `data` al **sistema di reattività** di Vue. Quando il valore di queste proprietà cambia, la vista reagirà, aggiornandosi con i nuovi valori.

```js
// L'oggetto data
var data = { a: 1 }

// L'oggetto data è aggiunto all'istanza di Vue
var vm = new Vue({
  data: data
})

// Questo sono riferimenti allo stesso oggetto!
vm.a === data.a // => true


// Impostare la proprietà sull'instanza
// influisce anche sui dati originali
vm.a = 2
data.a // => 2

// ... e viceversa
data.a = 3
vm.a // => 3
```

Quando questi dati cambiano, la vista si renderizzaerà nuovamente. Si vuol far notare che le proprietà in `data` sono solamente **reattive** se esistitono nel momento in cui l'istanza è creata. Questo significa che se si aggiunge una nuova proprietà come:

```js
vm.b = 'ciao'
```

Le modifiche a `b` non attivano alcun aggiornamento di visualizzazione. Se sai che avrai bisogno di aggiungere un proprietà più tardi, ma inizia come vuota o non esistente, avrai bisogno di inizializzare qualche valore iniziale. Per esempio:

```js
data: {
  newTodoText: '',
  visitCount: 0,
  hideCompletedTodos: false,
  todos: [],
  error: null
}
```
L'unica eccezione a questo è l'uso di `Object.freeze()`, che previene la modifica di proprietà esistenti, il che significa che il sistema di reattività non _traccia_ i cambiamenti.


```js
var obj = {
  foo: 'bar'
}

Object.freeze(obj)

new Vue({
  el: '#app',
  data () {
    return {
      obj
    }
  }
})
```

```html
<div id="app">
  <p>{{ obj.foo }}</p>
  <!-- obj.foo non cambierà più! -->
  <button @click="obj.foo = 'baz'">Cambia valore</button>
</div>
```

In aggiunta alle proprietà `data`, l'istanza di Vue offre un numero di utili istanze di proprietà e metodi. Quest'ultime hanno come prefisso `$` per differenziarle delle proprietà definite dall'utente. Per esempio:


```js
var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data
})

vm.$data === data // => vero
vm.$el === document.getElementById('example') // => vero

// $watch è un metodo d'istanza
vm.$watch('a', function (newValue, oldValue) {
  // Questo callback verrà chiamato quando `vm.a` cambia
})
```

Nel futuro, puoi consulate le [API](../api/#Instance-Properties) per una lista completa di proprietà d'istanze e metodi.

## Ciclo di vita dei componenti

Ogni istanza di Vue passa attraverso una serie di passi di inizializzazione quando è creata - per esempio, ha bisogno di impostare l'osservazione dei dati, compilare il template, montare l'istanza sul DOM e aggiornare il DOM quando i dati cambiano. Inoltre avvia delle funzioni chiamate **lifecycle hooks**, le quali danno agli utenti l'oppurtunità di aggiungere il loro codice in fasi specifiche.

Per esempio, la funzione [`created`](../api/#created) può essere usata per eseguire codice dopo che l'istanza è creata:


```js
new Vue({
  data: {
    a: 1
  },
  created: function () {
    // `this` punta all'istanza vm
    console.log('a is: ' + this.a)
  }
})
// => "a equivale: 1"
```

Ci sono altri `hook` che saranno chiamati in fasi diverse del ciclo di vita dell'istanza, come [`mounted`](../api/#mounted), [`updated`](../api/#updated), e [`destroyed`](../api/#destroyed). Tutti i lifecycle hook sono chiamati con il `this` che punta all'istanza Vue che li invoca.

<p class="tip">Non utilizzare le [arrow function](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions) nelle proprietà delle opzioni o nei callback, come `created: () => console.log(this.a)` o `vm.$watch('a', newValue => this.myMethod())`. Da quando le arrow function sono legate al contesto genitore, `this` non sarà l'istanza di Vue come ci si aspetterebbe e spesso potrebbero generarsi errori come `Uncaught TypeError: Cannot read property of undefined` o `Uncaught TypeError: this.myMethod is not a function`.<p>

## Diagramma del ciclo di vita

Di seguito viene riportato un diagramma per il ciclo di vita dell'istanza. Non hai bisogno di comprendere pienamente tutto adesso, ma quando imparerai di più, potrebbe tornare utile.

![The Vue Instance Lifecycle](/images/lifecycle.png)
