---
title: Costruire un'Applicazione scalabile
type: guida
order: 18
---

La libreria principale di Vue.js è progettata per essere essenziale e flessibile - ciò è dato dal fatto che si prende cura sullo del view layer senza obbligare lo sviluppatore a qualsivoglia architettura. Questa caratteristica avvantaggi sicuramente l'introduzione di Vue.js in progetti già avviati ma potrebbe essere un problema per chi comincia un progetto da zero.

L'ecosistema di Vue.js però fornisce anche degli strumenti indipendenti dalla libreria principale che ti permettono di costrutire applicazioni scalabile in Single Page. Questo tipo di desgin fa si che Vue.js ricada più sotto la categoria di framework piuttosto che di libreria javascript, ma questa è solo un'introduzione al vastita di funzionalità di Vue.js; Più avanti andremo a vedeere nel dettaglio tutte le parti dello stack di Vue.js.

## Modularizzazione

Per una applicazione complessa, è necessario concepire ed organizzare il codice sfruttando il concetto di modularizzazione. L'approccio raccomandato è di scrivere il codice sfruttando i moduli ES6 e CommonJS e impachettarli tramite [Webpack](http://webpack.github.io/) o [Browserify](http://browserify.org/).

Webpack e Browserify sono più di semplici gestori di moduli. Essi forniscono anche un valido sistema di APIs che vi permetterà di sfruttare pre-processori per il vostro codice JavaScript. Per esempio potete scrivere il vostro codice guardando al futuro con la sintassi ES2015/2016 usando [babel-loader](https://github.com/babel/babel-loader) o [babelify](https://github.com/babel/babelify).

Se non gli avete mai usati prima, è raccomandato iniziare a familiarizzare con questi strumenti, tramite tutorial e documentazioni, e partire direttamente a scrivere codice con le caratteristiche ECMAScript in mente.

## Componenti su File Singolo

In un progetto tipico costruito con Vue.js, la nostra interfaccia sarà divisa in vari componenti, sarebbe carino poter incapsulare ogni componente in un file singolo dedicato contenente il CSS, il template HTML e la logica JavaScript. Come detto prima, se usate Webpack o Browserify, potrete scrivere i vostri componenti in questa maniera:

<img src="/images/vue-component.png">

E se usate dei pre processori potete addirittura scrivere:

<img src="/images/vue-component-with-pre-processors.png">

Potete costruire questi file singoli usando Webpack + [vue-loader](https://github.com/vuejs/vue-loader) oppure Browserify + [vueify](https://github.com/vuejs/vueify).
Il team di Vue.js vi consiglia l'utilizzo di Webpack perché è più facile tracciare le dipendenze tra i vari componenti rispetto a Browserify.forms.

Potete trovare gli esempi ufficiali su Github:

- [Webpack + vue-loader](https://github.com/vuejs-templates/webpack)
- [Browserify + vueify](https://github.com/vuejs-templates/browserify)

## Routing

Per applicazioni a pagina singola è raccomandato l'utilizzo della [libreria ufficial vue-router](https://github.com/vuejs/vue-router), il quale è ancora in preview tecnica. Per maggiori dettagli potete consultare la [documentazione](http://vuejs.github.io/vue-router/).

Se avete bisogno di una logica più semplice di routing, potete anche implementare manualmente il tutto utilizzando `hashchange` e i componenti dinamici:

**Esempio:**

``` html
<div id="app">
  <component :is="currentView"></component>
</div>
```

``` js
Vue.component('home', { /* ... */ })
Vue.component('page1', { /* ... */ })
var app = new Vue({
  el: '#app',
  data: {
    currentView: 'home'
  }
})
// Da qui cambiate le pagine:
app.currentView = 'page1'
```

Con questo tipo di approccio è anche facile utilizzare librerie esterne come [Page.js](https://github.com/visionmedia/page.js) o [Director](https://github.com/flatiron/director).

## Comunicaione con il Server

Tutte le istanze Vue hanno la proprietà `$data` direttamente serializzata tramite `JSON.stringify()` senza dover far nulla manualmente. La community di Vue ha aiutato a sviluppare un plugin chiamato [vue-resource](https://github.com/vuejs/vue-resource), il quale fornisce un'interfaccia semplice ed intuitiva per lavorare con l'architettura REST. Come con il routing, puoi utilizzare qualsiasi altra liberia come `$.ajax` oppure [SuperAgent](https://github.com/visionmedia/superagent). Vue.js può anche funzionare benissimo con servizi come Firebase o Parse.

## Controllo dello Stato

In una grossa applicazione, il controllo dello stato dei vari componenti diventa sempre più complesso al crescere dello scambio di eventi e proprietà tra i vari componenti. In Vue.js l'oggetto data è la fonte primaria, tutte le istanze di Vue semplicemente fungono come proxy a quella specifica fonte di dati perciò lo stesso stato è condiviso da più istanze di Vue, detto questo non ha senso duplicare la fonte di dati:

``` js
var sourceOfTruth = {}

var vmA = new Vue({
  data: sourceOfTruth
})

var vmB = new Vue({
  data: sourceOfTruth
})
```

Ora ogni volta che `sourceOfTruth` cambia, muta, sia `vmA` che `vmB` riceveranno gli aggiornamenti per le loro viste in automatico. Estendendo questa idea ancor di più si può arrivare al paradigma detto **store pattern**:

``` js
var store = {
  state: {
    message: 'Ciao!'
  },
  actionA: function () {
    this.state.message = 'Azione A attivata'
  },
  actionB: function () {
    this.state.message = 'Azione B attivata'
  }
}

var vmA = new Vue({
  data: {
    privateState: {},
    sharedState: store.state
  }
})

var vmB = new Vue({
  data: {
    privateState: {},
    sharedState: store.state
  }
})
```

Da notare che stiamo inserendo tutte le azioni che mutano lo store, dentro lo store stesso. Questo permette di avere un controllo dello stato centralizzato e rende più facile capire quali tipi di cambiamento possono avvenire, come essi vengono attivati e cosa possono cambiare. Ogni componente può, successivamente, gestire il proprio stato privato in base alle informazioni dello stato condiviso.

![State Management](/images/state.png)

Una cosa da notare è che non dovreste mai cambiare lo stato originale tramize le funzioni di un'istanza in particolare. Il componente e lo store devono condividere lo stesso oggetto in modo tale da poter sfruttare, ed osservare, i cambiamenti di stato.

Se dovessi forzare questo cambio di stato, della proprietà nello store,  da parte dei componenti dovremmo implementare un sistema di eventi che notifichino tale azione e si arriverebbe dunque ad avere un'architettura simile a quella che si trova su [Flux](https://facebook.github.io/flux/). I benefici di tale architettura sono il fatto che si possa tener traccia di tutti i cambiamenti da parte dei componenti, un debug avanzato, la possibilità di fare il revert di un cambiamento etc.

L'architettura Flux è molto usata nelle applicazioni React. L'idea dietro Flux, comunque, è facilmente implementabile in Vue.js grazie al sistema di reattività non invasivo. Da notare che comunque quello dimostrato qui è solo un concetto, uno dei tanti scenari possibili, non è detto che vi debba servire a tutti i costi, dipende sempre da cosa state implementando.

## Unit Testing

Tutto ciò che è compatibile con un sistema a moduli funziona. Vue raccomanda l'utilizzo di [Karma](http://karma-runner.github.io/0.12/index.html) per i tests. Ha molti plugin sviluppati dalla community, incluso il suporto a [Webpack](https://github.com/webpack/karma-webpack) e [Browserify](https://github.com/Nikku/karma-browserify). Per maggiori informazioni su come impostare Karma, fate riferimento alla documentazione ufficiale del progetto.

Per quanto riguarda la struttura del codice per i tests, di seguito ci sono alcune linee guida per testare un sistema con un componente singolo:

``` js
// my-component.js
module.exports = {
  template: '<span>{{msg}}</span>',
  data: function () {
    return {
      msg: 'Ciao!'
    }
  }
  created: function () {
    console.log('my-component created!')
  }
}
```

Il componente può essere utilizzato in un'istanza Vue:

``` js
// main.js
var Vue = require('vue')
var app = new Vue({
  el: '#app',
  data: { /* ... */ },
  components: {
    'my-component': require('./my-component')
  }
})
```

Ed il test può essere scritto come segue:

``` js
// Some Jasmine 2.0 tests
describe('my-component', function () {
  // richiediamo il componente
  var myComponent = require('../src/my-component')
  it('should have a created hook', function () {
    expect(typeof myComponent.created).toBe('function')
  })
  it('should set correct default data', function () {
    expect(typeof myComponent.data).toBe('function')
    var defaultData = myComponent.data()
    expect(defaultData.msg).toBe('hello!')
  })
})
```

Ci sono esempi per configurare Karma sia con [Webpack](https://github.com/vuejs/vue-loader-example/blob/master/build/karma.conf.js) che con [Browserify](https://github.com/vuejs/vueify-example/blob/master/karma.conf.js).

<p class="tip">Dato che le direttive di Vue.js vengono aggiornate in modo asincrono, quando fate delle affermazioni sullo stato del DOM assicuratevi di utilizzare `Vue.nextTick`.</p>

## Distruibuzione in Produzione

La versione compressa di Vue.js è già ridotta ai minimi termini, senza debug e di dimensioni veramente ridotte. Se utilizzate Browserify o Webpack per fare una build personalizzata allora vi serviranno alcune configurazioni per ottenre lo stesso risultato.

### Webpack

E' consigliato l'uso di [DefinePlugin](http://webpack.github.io/docs/list-of-plugins.html#defineplugin) per indircare l'ambiente di produzione, così tutto il sistema di debug verrà automaticamente scartato da UglifyJS durante la compressione. Ecco un esempio di configurazione:

``` js
var webpack = require('webpack')

module.exports = {
  // ...
  plugins: [
    // ...
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}
```

### Browserify

Potete semplicemente eseguire il comando con `NODE_ENV` su `"production"`. Vue automaticamente applicherà [envify](https://github.com/hughsk/envify) per trasformare se stesso e togliere blocchi di warning e debug. Un esempio:

``` bash
NODE_ENV=production browserify -e main.js | uglifyjs -c -m > build.js
```

## Esempio di Applicazione

Il [Clone di HackerNews in Vue.js](https://github.com/vuejs/vue-hackernews) è un esempio completo di applicazione che utilizza Webpack + vue-loader per l'organizzazione del codice, vue-router per il routing e le API ufficiali di HackerNews come server. Non è un'applicazione complessa, ne esageratamente grande, ma è un'utile dimostrazione di tutti i concetti discussi in questa pagina.
