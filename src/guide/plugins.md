---
title: Plugins
type: guide
order: 17
---



## Scrivere un Plugin

I Plugins sono funzionalità inserite a livello globale in Vue. Non ci sono ambiti strettamente predefiniti per i plugin - ecco una lista dei tipici plugin che potresti scrivere:

1. Aggiungere dei metodo o properità globali. Esempio [vue-element](https://github.com/vuejs/vue-element)

2. Aggiungere assets globali: direttive/filtri/transizioni. Esempio [vue-touch](https://github.com/vuejs/vue-touch)

3. Aggiungere dei metodi all'istanza Vue legandoli tramite Vue.prototype.

4. Una libreria che fornisce delle API nuove, magari sfruttando alcune sopra definite. Esempio [vue-router](https://github.com/vuejs/vue-router)

Un plugin in Vue.js deve esperrore un metodo `install`. Quest'ultimo verrà chiamato dal costruttore `Vue` come primo argomento, assieme a tutte le opzioni possibili:

``` js
MyPlugin.install = function (Vue, options) {
  // 1. Aggiungi una properità o metodo globale
  Vue.myGlobalMethod = ...
  // 2. Aggiungi asset globali
  Vue.directive('my-directive', {})
  // 3. Aggiungi un metodo di istanza
  Vue.prototype.$myMethod = ...
}
```

## Usare un Plugin

Per usare un plugin basta chiamare il metodo globale `Vue.use()`ß:

``` js
// chiama `MyPlugin.install(Vue)`
Vue.use(MyPlugin)
```

Puoi anche passare delle opzioni, se richieste:

``` js
Vue.use(MyPlugin, { someOption: true })
```

Alcuni plugin, come `vue-router` chiamano in automatico `Vue.use()` se `Vue` è disponibile come variable globale. Ciò nonostante in un ambiente di sviluppo a moduli dovrai chiamare sempre `Vue.use()` in modo esplicito:

``` js
// Quando si usa CommonJS tramite Browserify o Webpack
var Vue = require('vue')
var VueRouter = require('vue-router')

// Non dimenticate di chiamare
Vue.use(VueRouter)
```

## Plugin e Strumenti Disponibili

- [vue-router](https://github.com/vuejs/vue-router): Il sistema di routing ufficiale di Vue.js, integrato profondamente con Vue.js per creare Applicazioni a Pagina Singola.

- [vue-resource](https://github.com/vuejs/vue-resource): Un plugin per permettere di effettuare chiamate asincrone tramite XMLHttpRequest o JSONP.

- [vue-async-data](https://github.com/vuejs/vue-async-data): Plugin per caricare i dati in modo asincrono.

- [vue-validator](https://github.com/vuejs/vue-validator): Un plugin per la validazione dei form.

- [vue-devtools](https://github.com/vuejs/vue-devtools): Un'estensione per Chrome devtools per fare debug delle applicazioni Vue.js.

- [vue-touch](https://github.com/vuejs/vue-touch): Aggiungi movimenti touch sfruttando Hammer.js

- [vue-element](https://github.com/vuejs/vue-element): Registra elementi personalizzati con Vue.js

- [Lista di Strumenti esterni](https://github.com/vuejs/vue/wiki/User-Contributed-Components-&-Tools)
