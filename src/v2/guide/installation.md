---
title: Installazione
type: guide
order: 1
vue_version: 2.6.10
gz_size: "33.90"
---

### Note di compatibilità
 
Vue **non** supporta IE8 e inferiori, perchè utilizza le funzionalità di ECMAScript 5 che non sono compatibili in IE8. Comunque Vue supporta tutti i [browsers conformi con ECMAScript 5](https://caniuse.com/#feat=es5)

### Note di rilascio

Ultima versione stabile: {{vue_version}}

Le note di rilascio per ogni versione sono disponibili su [GitHub](https://github.com/vuejs/vue/releases).

## Vue Devtools

Durante l'utilizzo di Vue, raccomandiamo anche di installare [Vue Devtools](https://github.com/vuejs/vue-devtools#vue-devtools) nel tuo browser, permettendoti di ispezionare e debuggare le applicazioni Vue in una interfaccia user-friendly.

## Inclusione diretta tramite `<script>`

Semplicemente scarica e includi Vue con un tag `script`. `Vue` sarà registrato come variabile globale.


<p class="tip">Non utilizzare la versione compressa durante lo sviluppo. Così facendo perderai tutti gli avvertimenti per gli errori comuni!</p>

<div id="downloads">
<a class="button" href="/js/vue.js" download>Versione per sviluppo</a><span class="light info">Completa con avvertimenti e modalità debug</span>

<a class="button" href="/js/vue.min.js" download>Versione per produzione</a><span class="light info">Senza avvertimenti, {{gz_size}}KB min+gzip</span>
</div>

### CDN

Per prototipazione o per l'apprendimento, puoi utilizzare l'ultima versione con:

``` html
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```

Per la produzione, raccomandiamo di aggiungere il link a una specifica versione e build per evitare eventuali bug delle nuove versioni: 


``` html
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.0/dist/vue.js"></script>
```

Se stai usando moduli ES nativi, ci sono anche build compatibili con tali moduli:

``` html
<script type="module">
  import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.0/dist/vue.esm.browser.js'
</script>
```

Puoi anche cercare la sorgente del pacchetto NPM andando su [cdn.jsdelivr.net/npm/vue](https://cdn.jsdelivr.net/npm/vue/).

Vue è anche disponibile su [unpkg](https://unpkg.com/vue@{{vue_version}}/dist/vue.js) e [cdnjs](https://cdnjs.cloudflare.com/ajax/libs/vue/{{vue_version}}/vue.js) (cdnjs impiega un po' di tempo per la sincronizzazione quindi le ultime versioni potrebbero non essere ancora disponibili).

Assicurati di aver letto riguardo alle [differenti build di Vue](#Explanation-of-Different-Builds) e di usare la **versione di produzione** nei tuoi siti pubblicati, sostituendo `vue.js` con `vue.min.js`. Quest'ultima è una piccola build ottimizzata per la velocità invece che per lo sviluppo.

## NPM

NPM è il metodo d'installazione raccomandato quando si sviluppano applicazioni su larga scala con Vue. Si abbina bene con i moduli di bundler come [Webpack](https://webpack.js.org/) o [Browserify](http://browserify.org/). Vue fornisce anche strumenti per la creazione guidata di [Single File Components](single-file-components.html).

``` bash
# ultimna versione stabile
$ npm install vue
```

## CLI

Vue.js fornisce anche una [CLI ufficiale](https://github.com/vuejs/vue-cli) per un set-up rapido di applicazioni Single Page. Inoltre dispone di una configurazione di build per un moderno flusso di lavoro per lo sviluppo frontend. Ci impiega solamente alcuni minuti per creare applicazioni con hot-reload, lint-on-save e build pronte per la produzione. Consulta [la documentazione ufficiale relativa alla Vue CLI](https://cli.vuejs.org) per maggiori dettagli.

<p class="tip">La CLI presuppone una conoscenza pregressa di Node.js e degli strumenti di build associati. Se sei nuovo nell'utilizzare Vue o negli strumenti di build front-end, ti raccomandiamo fortemente di consultare <a href="./">la guida</a> senza nessun strumento di build prima di usare la CLI.</p>

<div class="vue-mastery"><a href="https://www.vuemastery.com/courses/real-world-vue-js/vue-cli" target="_blank" rel="noopener" title="Vue CLI">Guarda una spiegazione video su Vue Mastery</a></div>

## Spiegazione delle differenti build

In the [`dist/` directory of the NPM package](https://cdn.jsdelivr.net/npm/vue/dist/) you will find many different builds of Vue.js. Here's an overview of the difference between them:

| | UMD | CommonJS | Moduli Es |
| --- | --- | --- | --- |
| **Completa** | vue.js | vue.common.js | vue.esm.js |
| **Solo runtime** | vue.runtime.js | vue.runtime.common.js | vue.runtime.esm.js |
| **Completa (produzione)** | vue.min.js | - | - |
| **Solo runtime (produzione)** | vue.runtime.min.js | - | - |

### Terms

- **Full**: builds that contains both the compiler and the runtime.

- **Compiler**: code that is responsible for compiling template strings into JavaScript render functions.

- **Runtime**: code that is responsible for creating Vue instances, rendering and patching virtual DOM, etc. Basically everything minus the compiler.

- **[UMD](https://github.com/umdjs/umd)**: UMD builds can be used directly in the browser via a `<script>` tag. The default file from jsDelivr CDN at [https://cdn.jsdelivr.net/npm/vue](https://cdn.jsdelivr.net/npm/vue) is the Runtime + Compiler UMD build (`vue.js`).

- **[CommonJS](http://wiki.commonjs.org/wiki/Modules/1.1)**: CommonJS builds are intended for use with older bundlers like [browserify](http://browserify.org/) or [webpack 1](https://webpack.github.io). The default file for these bundlers (`pkg.main`) is the Runtime only CommonJS build (`vue.runtime.common.js`).

- **[ES Module](http://exploringjs.com/es6/ch_modules.html)**: ES module builds are intended for use with modern bundlers like [webpack 2](https://webpack.js.org) or [rollup](https://rollupjs.org/). The default file for these bundlers (`pkg.module`) is the Runtime only ES Module build (`vue.runtime.esm.js`).

### Runtime + Compiler vs. Runtime-only

If you need to compile templates on the client (e.g. passing a string to the `template` option, or mounting to an element using its in-DOM HTML as the template), you will need the compiler and thus the full build:

``` js
// this requires the compiler
new Vue({
  template: '<div>{{ hi }}</div>'
})

// this does not
new Vue({
  render (h) {
    return h('div', this.hi)
  }
})
```

When using `vue-loader` or `vueify`, templates inside `*.vue` files are pre-compiled into JavaScript at build time. You don't really need the compiler in the final bundle, and can therefore use the runtime-only build.

Since the runtime-only builds are roughly 30% lighter-weight than their full-build counterparts, you should use it whenever you can. If you still wish to use the full build instead, you need to configure an alias in your bundler:

#### Webpack

``` js
module.exports = {
  // ...
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
    }
  }
}
```

#### Rollup

``` js
const alias = require('rollup-plugin-alias')

rollup({
  // ...
  plugins: [
    alias({
      'vue': 'vue/dist/vue.esm.js'
    })
  ]
})
```

#### Browserify

Add to your project's `package.json`:

``` js
{
  // ...
  "browser": {
    "vue": "vue/dist/vue.common.js"
  }
}
```

### Development vs. Production Mode

Development/production modes are hard-coded for the UMD builds: the un-minified files are for development, and the minified files are for production.

CommonJS and ES Module builds are intended for bundlers, therefore we don't provide minified versions for them. You will be responsible for minifying the final bundle yourself.

CommonJS and ES Module builds also preserve raw checks for `process.env.NODE_ENV` to determine the mode they should run in. You should use appropriate bundler configurations to replace these environment variables in order to control which mode Vue will run in. Replacing `process.env.NODE_ENV` with string literals also allows minifiers like UglifyJS to completely drop the development-only code blocks, reducing final file size.

#### Webpack

Use Webpack's [DefinePlugin](https://webpack.js.org/plugins/define-plugin/):

``` js
var webpack = require('webpack')

module.exports = {
  // ...
  plugins: [
    // ...
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
}
```

#### Rollup

Use [rollup-plugin-replace](https://github.com/rollup/rollup-plugin-replace):

``` js
const replace = require('rollup-plugin-replace')

rollup({
  // ...
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}).then(...)
```

#### Browserify

Apply a global [envify](https://github.com/hughsk/envify) transform to your bundle.

``` bash
NODE_ENV=production browserify -g envify -e main.js | uglifyjs -c -m > build.js
```

Also see [Production Deployment Tips](deployment.html).

### CSP environments

Some environments, such as Google Chrome Apps, enforce Content Security Policy (CSP), which prohibits the use of `new Function()` for evaluating expressions. The full build depends on this feature to compile templates, so is unusable in these environments.

On the other hand, the runtime-only build is fully CSP-compliant. When using the runtime-only build with [Webpack + vue-loader](https://github.com/vuejs-templates/webpack-simple) or [Browserify + vueify](https://github.com/vuejs-templates/browserify-simple), your templates will be precompiled into `render` functions which work perfectly in CSP environments.

## Dev Build

**Important**: the built files in GitHub's `/dist` folder are only checked-in during releases. To use Vue from the latest source code on GitHub, you will have to build it yourself!

``` bash
git clone https://github.com/vuejs/vue.git node_modules/vue
cd node_modules/vue
npm install
npm run build
```

## Bower

Only UMD builds are available from Bower.

``` bash
# latest stable
$ bower install vue
```

## AMD Module Loaders

All UMD builds can be used directly as an AMD module.
