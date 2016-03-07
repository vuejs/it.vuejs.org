---
title: Mixins
type: guide
order: 16
---

## Le Basi

L'utilizzo dei Mixins è un modo flessibile per distribuire contenuto riutilizzabile a più componenti di Vue. Un oggetto mixins può contenere qualsiasi opzione dei componenti. Quando un componente usa un mixin, tutte le opzioni del compoenent e del mixin verranno "mescolate" assieme.

Esempio:

``` js
// Definiamo un offetto mixin
var myMixin = {
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('Ciao da mixin!')
    }
  }
}

// Definiamo un componente che usa mixin
var Component = Vue.extend({
  mixins: [myMixin]
})

var component = new Component() // -> "ciao mixin!"
```

## Fusione delle Opzioni

Quando un mixin ed il componenete che lo utilizza hanno hook uguali, essi verranno fusi assieme in modo gerarchico. Per esempio le funzioni di hook verranno inserite in un array e chiamate una dopo l'altra. Da notare che le funzioni mixins verranno sempre chiamate prima:

``` js
var mixin = {
  created: function () {
    console.log('hook del mixin')
  }
}

new Vue({
  mixins: [mixin],
  created: function () {
    console.log('hook del componente')
  }
})

// -> "hook del mixin"
// -> "hook del componente"
```

Per quanto riguarda altre properità dei componenti, come i `methods`, `components` e le `directives`, esse verranno fuse nello stesso oggetto ma, in questo caso, le properità del compoenente avranno la priorità rispetto al mixin:

``` js
var mixin = {
  methods: {
    foo: function () {
      console.log('foo')
    },
    conflicting: function () {
      console.log('da mixin')
    }
  }
}

var vm = new Vue({
  mixins: [mixin],
  methods: {
    bar: function () {
      console.log('bar')
    },
    conflicting: function () {
      console.log('da self')
    }
  }
})

vm.foo() // -> "foo"
vm.bar() // -> "bar"
vm.conflicting() // -> "da self"
```

La stessa strategia di fusione è usata per `Vue.extend()`.

## Mixin Globali

Potete anche creare ed applicare i mixin a livello globale. Usate questa funzione con attenzione! Una volta che avete applicato un mixin in modo globale esso influenzerà **ogni** componente o istanza di Vue creata successivamente. Se usati con logic, possono fornire degli interessanti spunti per opzioni personalizzate:

``` js
// creiamo un handler per l'opzione personalizzata `myOption`
Vue.mixin({
  created: function () {
    var myOption = this.$options.myOption
    if (myOption) {
      console.log(myOption)
    }
  }
})

new Vue({
  myOption: 'Ciao!'
})
// -> "Ciao!"
```

<p class="tip">Utilizzate i Mixin Global con parsimonia, perché essi influenzeranno qualsiasi istanza di Vue presente comprese librerie di terze parti.
Nella maggior parte dei casi I Mixin Globali andrebbero usati solo per gestire delle opzioni, come nell esempio sopra.</p>

## Strategia di fusione tra Opzioni personalizzate

Quando un opzione personalizzata viene fusa con un altra, viene semplicemente sovrascritta. Se volete gestire la strategia di fusione dovete implementare `Vue.config.optionMergeStrategies`:

``` js
Vue.config.optionMergeStrategies.myOption = function (toVal, fromVal) {
  // return mergedVal
}
```

Per la maggior parte delle opzioni basate su oggetti, potete semplicemente usare la strategia vista per i `methods`:

``` js
var strategies = Vue.config.optionMergeStrategies
strategies.myOption = strategies.methods
```
