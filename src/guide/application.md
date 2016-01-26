---
title: Costruire un'Applicazione scalabile
type: guide
order: 18
---

La libreria principale di Vue.js è progettata per essere essenziale e flessibile - ciò è dato dal fatto che si prende cura sullo del view layer senza obbligare lo sviluppatore a qualsivoglia architettura. Questa caratteristica avvantaggi sicuramente l'introduzione di Vue.js in progetti già avviati ma potrebbe essere un problema per chi comincia un progetto da zero.

L'ecosistema di Vue.js però fornisce anche degli strumenti indipendenti dalla libreria principale che ti permettono di costrutire applicazioni scalabile in Single Page. Questo tipo di desgin fa si che Vue.js ricada più sotto la categoria di framework piuttosto che di libreria javascript, ma questa è solo un introduzione al vastita di funzionalità di Vue.js; Più avanti andremo a vedeere nel dettaglio tutte le parti dello stack di Vue.js.

## Modularizzazione

Per una applicazione complessa, è necessario concepire ed organizzare il codice sfruttando il concetto di modularizzazione. L'approccio raccomandato è di scrivere il codice sfruttando i moduli ES6 e CommonJS e impachettarli tramite [Webpack](http://webpack.github.io/) o [Browserify](http://browserify.org/).

Webpack e Browserify sono più di semplici gestori di moduli. Essi forniscono anche un valido sistema di APIs che vi permetterà di sfruttare pre-processori per il vostro codice JavaScript. Per esempio potete scrivere il vostro codice guardando al futuro con la sintassi ES2015/2016 usando [babel-loader](https://github.com/babel/babel-loader) o [babelify](https://github.com/babel/babelify).

Se non gli avete mai usati prima, è raccomandato iniziare a familiarizzare con questi strumenti, tramite tutorial e documentazioni, e partire direttamente a scrivere codice con le caratteristiche ECMAScript in mente.

## Componenti su File Singolo

In un progetto tipico di Vue.js, la nostra interfaccia sarà divisa in vari componenti, sarebbe carino poter incapsulare ogni componente in un file singolo dedicato contenente il CSS, il template HTML e la logica JavaScript. Come detto prima, se usate Webpack o Browserify, potrete scrivere i vostri componenti in questa maniera:

<img src="/images/vue-component.png">

E se usate dei pre processori potete addirittura scrivere:

<img src="/images/vue-component-with-pre-processors.png">

Potete costruire questi file singoli usando Webpack + [vue-loader](https://github.com/vuejs/vue-loader) oppure Browserify + [vueify](https://github.com/vuejs/vueify). Il team di Vue.js vi consiglia l'utilizzo di Webpack perchè è più facile tracciare le dipendenze tra i vari componenti rispetto a Browserify.forms.

Potete trovare degli esempi di setup su Github:

- [Webpack + vue-loader](https://github.com/vuejs/vue-loader-example)
- [Browserify + vueify](https://github.com/vuejs/vueify-example)

## Routing

For Single Page Applications, it is recommended to use the [official vue-router library](https://github.com/vuejs/vue-router), which is currently in technical preview. For more details, please refer to vue-router's [documentation](http://vuejs.github.io/vue-router/).

If you just need some very simple routing logic, you can also implement it by manually listening on `hashchange` and utilizing a dynamic component:

**Example:**

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
// Switching pages in your route handler:
app.currentView = 'page1'
```

With this mechanism it's also very easy to leverage external routing libraries such as [Page.js](https://github.com/visionmedia/page.js) or [Director](https://github.com/flatiron/director).

## Communication with Server

All Vue instances can have their raw `$data` directly serialized with `JSON.stringify()` with no additional effort. The community has contributed the [vue-resource](https://github.com/vuejs/vue-resource) plugin, which provides an easy way to work with RESTful APIs. You can also use any Ajax library you like, e.g. `$.ajax` or [SuperAgent](https://github.com/visionmedia/superagent). Vue.js also plays nicely with no-backend services such as Firebase and Parse.

## State Management

In large applications, state management often becomes complex due to multiple pieces of state scattered across many components and the interactions between them. It is often overlooked that the source of truth in Vue.js applications is the raw data object - a Vue instances simply proxies access to it. Therefore, if you have a piece of state that should be shared by multiple instances, you should avoid duplicating it and share it by identity:

``` js
var sourceOfTruth = {}

var vmA = new Vue({
  data: sourceOfTruth
})

var vmB = new Vue({
  data: sourceOfTruth
})
```

Now whenever `sourceOfTruth` is mutated, both `vmA` and `vmB` will update their views automatically. Extending this idea further, we would arrive at the **store pattern**:

``` js
var store = {
  state: {
    message: 'Hello!'
  },
  actionA: function () {
    this.state.message = 'action A triggered'
  },
  actionB: function () {
    this.state.message = 'action B triggered'
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

Notice we are putting all actions that mutate the store's state inside the store itself. This type of centralized state management makes it easier to understand what type of mutations could happen to the state, and how are they triggered. Each component can still own and manage its private state.

![State Management](/images/state.png)

One thing to take note is that you should never replace the original state object in your actions - the components and the store need to share reference to the same object in order for the mutations to be observed.

If we enforce a convention where components are never allowed to directly mutate state that belongs to a store, but should instead dispatch events that notify the store to perform actions, we've essentially arrived at the [Flux](https://facebook.github.io/flux/) architecture. The benefits of this convention is we can record all state mutations happening to the store, and on top of that we can implement advanced debugging helpers such as mutation logs, snapshots, history re-rolls etc.

The Flux architecture is commonly used in React applications. Turns out the core idea behind Flux can be quite simply achieved in Vue.js, thanks to the unobtrusive reactivity system. Do note what we demonstrated here is just an example to introduce the concept - you may not need it at all for simple scenarios, and you should adapt the pattern to fit the real needs of your application.

## Unit Testing

Anything compatible with a module-based build system works. A recommendation is using the [Karma](http://karma-runner.github.io/0.12/index.html) test runner. It has a lot of community plugins, including support for [Webpack](https://github.com/webpack/karma-webpack) and [Browserify](https://github.com/Nikku/karma-browserify). For detailed setup, please refer to each project's respective documentation.

In terms of code structure for testing, the best practice is to export raw options / functions in your component modules. Consider this example:

``` js
// my-component.js
module.exports = {
  template: '<span>{{msg}}</span>',
  data: function () {
    return {
      msg: 'hello!'
    }
  }
  created: function () {
    console.log('my-component created!')
  }
}
```

You can use that file in your entry module like this:

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

And you can test that module like this:

``` js
// Some Jasmine 2.0 tests
describe('my-component', function () {
  // require source module
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

There are example Karma configurations for both [Webpack](https://github.com/vuejs/vue-loader-example/blob/master/build/karma.conf.js) and [Browserify](https://github.com/vuejs/vueify-example/blob/master/karma.conf.js).

<p class="tip">Since Vue.js directives perform updates asynchronously, when you are asserting DOM state after changing the data, you will have to do so in a `Vue.nextTick` callback.</p>

## Deploying for Production

The minified standalone build of Vue.js has already stripped out all the warnings for you for a smaller file size, but when you are using tools like Browserify or Webpack to build Vue.js applications, you will need some additional configuration to achieve this.

### Webpack

Use Webpack's [DefinePlugin](http://webpack.github.io/docs/list-of-plugins.html#defineplugin) to indicate a production environment, so that warning blocks can be automatically dropped by UglifyJS during minification. Example config:

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

Just run your bundling command with `NODE_ENV` set to `"production"`. Vue automatically applies [envify](https://github.com/hughsk/envify) transform to itself and makes warning blocks unreachable. For example:

``` bash
NODE_ENV=production browserify -e main.js | uglifyjs -c -m > build.js
```

## An App Example

The [Vue.js Hackernews Clone](https://github.com/vuejs/vue-hackernews) is an example application that uses Webpack + vue-loader for code organization, vue-router for routing, and HackerNews' official Firebase API as the backend. It's by no means a big application, but it demonstrates the combined usage of the concepts discussed on this page.
