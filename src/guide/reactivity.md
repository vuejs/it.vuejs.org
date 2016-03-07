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

2. Aggiungere una properità reattiva al livello alto della vostra istanza Vue obbligherà i watchers a rivalutare l'istanza stessa, perché non esiste un watcher che aveva tale properità come dipendenza. Le prestazioni di tale operazione sono accettabili (e sono molto simili alle prestazioni del controllo analogo su Angular), ma si possono evitare problemi con la dichiarazione delle properità nell oggetto data.

## Coda di aggiornamento Asincrona

Per definizione, Vue.js aggiorna il DOM della pagina in modo **asincrono**. Ogni volta che un dato cambia, Vue aprirà una cosa e metterà in buffer tutti i cambiamenti avvenuti. Se un watcher viene richiamato più volte verrà messo in coda solo una volta sola ed al successivo ciclo di aggiornamento verrà fatto uscire dalla coda ed eseguito. Di default Vue usa un `MutationObserver` per gestire la coda asincrona, ma puoi anche ripiegare su `setTimeout(fn, 0)` se necessario.

Un esempio, volete impostare `vm.someData = 'new value'`, il DOM non verrà aggiornato automaticamente ma al successivo "tick", quando la coda viene interrogata e liberata. La maggior parte delle volte tale comportamento va bene, e non ci accorgiamo nemmeno del tick di differenza ma in alcune sicutazioni, come uno stato che dipende da un altro aggiornamento precedente, la differenza di update può essere notata. La filosofia di Vue.js vi incoraggia sempre a pensare prima ai dati, senza toccare il DOM in maniera diretta, con aggiornamenti che dipendono da altri, però a volte è necessario per questo esiste un metodo chiamato `Vue.nextTick(callback)` che viene chiamato immediatamento ignorando la coda:

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
vm.msg = 'new message' // cabio di dati
vm.$el.textContent === 'new message' // false
Vue.nextTick(function () {
  vm.$el.textContent === 'new message' // true
})
```

Naturalmente il sistema `vm.$nextTick()` può essere usato anche per i componenti, dato che è un metodo globale lo troverete nello scope di `this`:

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
      console.log(this.$el.textContent) // => 'non aggiornato'
      this.$nextTick(function () {
        console.log(this.$el.textContent) // => 'aggiornato'
      })
    }
  }
})
```

## Le proprietà derivate

Come visto in precedenza, Vue.js **non** tratta le proprietà derivate come dei semplici getter. Ogni proprietà derivata tiene traccia delle dipendenze a lei associate, ovvero le proprietà dalla quale deriva. Quando una properità derivata viene richiamata, Vue.js aggiorna la lista delle dipendenze di tale proprietà e tiene in cache il risultato. Tale cache viene invalidata, e ricalcolata, ogni volta che una dipendenza cambia stato/valore. Questo fa si che se non viene cambiato lo stato, la proprietà derivata accederà sempre e solo al valore salvato nella cache, invece di richiamare la properità tramite un getter.

Perché abbiamo bisogno del sistema di caching? Immaginate di avere una proprietà derivata che effettua molte istruzioni, portando via tempo computazionale, chiamiamola **A**. Poi abbiamo un'altra properità derivata che dipende da **A**, ogni volta che viene chiamata questa nuova properità derivata **A** dovrebbe rifare tutti i calcoli!

A causa del sistema di cachine, la funzione di getter non viene sempre richiamata ma, considerate il seguente esempio:

``` js
var vm = new Vue({
  data: {
    msg: 'ciao'
  },
  computed: {
    example: function () {
      return Date.now() + this.msg
    }
  }
})
```

La properità derivata `example` ha solo una dipendenza: `vm.msg`. `Date.now()` **non è** una dipendenza reattiva, perché non ha niente a che fare con il sistema di osservamento dati di Vue. Ogni volta che `example` verrà chiamata, la data calcolata sarà sempre la stesse a meno che `vm.msg` non scateni una rivalutazione, tramite cambiamento del suo stato.

In alcuni casi avrete bisogno di ottenere sempre il getter senza cache. Potete farlo disattivando la cache per ogni properità derivata:

``` js
computed: {
  example: {
    cache: false, // Ora non viene più usata la cache
    get: function () {
      return Date.now() + this.msg
    }
  }
}
```

Ogni volta che accedete a `vm.example`, la data cambierà sempre. **Attenzione però, questo aggiornamento affligge solo l'accesso programmatico interno in Javascript; il vincolo dei dati è sempre dipendente.** Quando una proprietà derivata, anche senza cache, viene utilizzata nel template tipo `{% raw %}{{example}}{% endraw %}`, tale elemento del DOM verrà aggiornato se e soltanto se le dipendenze della properità derivata cambiano stato.
