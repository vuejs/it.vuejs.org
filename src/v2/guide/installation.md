---
title: Installazione
type: guide
order: 1
vue_version: 2.6.10
gz_size: "33.90"
---

### Nota di compatibilità
 
Vue **non** supporta IE8 e inferiori, perchè utilizza le funzionalità di ECMAScript 5 che non sono compatibili in IE8. Comunque Vue supporta tutti i [browsers conformi con ECMAScript 5](https://caniuse.com/#feat=es5)

### Note di rilascio

Ultima versione stabile: {{vue_version}}

Le note di rilascio per ogni versione sono disponibili su [GitHub](https://github.com/vuejs/vue/releases).

## Vue Devtools

Durante l'utilizzo di Vue, raccomandiamo anche di installare [Vue Devtools](https://github.com/vuejs/vue-devtools#vue-devtools) nel tuo browser, il quale di ispezionare e debuggare le applicazioni Vue in un'interfaccia user-friendly.

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

Nella [cartella `/dist` del pacchetto NPM ](https://cdn.jsdelivr.net/npm/vue/dist/) troverai differenti build di Vue.js. Di seguito è riporatata una panoramica sulle principali differenze:

| | UMD | CommonJS | ES Module |
| --- | --- | --- | --- |
| **Completa** | vue.js | vue.common.js | vue.esm.js |
| **Solo runtime** | vue.runtime.js | vue.runtime.common.js | vue.runtime.esm.js |
| **Completa (produzione)** | vue.min.js | - | - |
| **Solo runtime (produzione)** | vue.runtime.min.js | - | - |

### Termini

- **Completa**: build che contiene sia il compilatare che il runtime.

- **Compilatore**: codice che è responsabile delle compiliazione delle stringhe del template in funzioni di rendering Javascript.

- **Runtime**: codice che è responsabile delle creazione delle istanze di Vue, del rendering, del virtual DOM, ecc. Di base è tutto al di fuori del compilatore.

- **[UMD](https://github.com/umdjs/umd)**: le build UMD possono essere usate direttamente del browser tramite il tag `<script>`. Il file di default presente in jsDelivr CDN all'indirizzo [https://cdn.jsdelivr.net/npm/vue](https://cdn.jsdelivr.net/npm/vue) contiene la build UMD con Runtime + Compilatore (`vue.js`).

- **[CommonJS](http://wiki.commonjs.org/wiki/Modules/1.1)**: le build CommonJS sono utilizzate con i vecchi bundler come [browserify](http://browserify.org/) o [webpack 1](https://webpack.github.io). Il file di default per questi bundler (`pkg.main`) è la build CommonJS con solo Runtime (`vue.runtime.common.js`).

- **[ES Module](http://exploringjs.com/es6/ch_modules.html)**: le build con ES Module sono utilizzate con i moderni bundler come [webpack 2](https://webpack.js.org) o [rollup](https://rollupjs.org/). Il file di default per questi bundler (`pkg.module`) è la build che utilizza ES Module con solo Runtime.

### Runtime + Compilatore vs. solo Runtime

Se hai bisogno di compilare template sul client (per esempio passare una stringa all'opzione `template`, o fare il mounting a un elemento che utilizza il suo codice HTML in-DOM come modello), avrai bisogno del compilatore e di conseguenza della build completa:

``` js
// necessita del compilatore
new Vue({
  template: '<div>{{ hi }}</div>'
})

// questo invece no
new Vue({
  render (h) {
    return h('div', this.hi)
  }
})
```

Quando di usa `vue-loader` o `vueify`, i template dentro i file `*.vue` sono pre-compilati in codice Javascript a tempo di build. Non c'è bisogno del compilatore nella bundle finale, perciò si può utilizzare la build con solo il runtime.

Dal momento che le build con solo runtime sono circa il 30% più leggere rispetto alle build complete, dovresti usarle quando puoi. Se ancora preferisci utilizzare la build completa, hai bisogno di configuarare un alias nel tuo bundler:

#### Webpack

``` js
module.exports = {
  // ...
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' per webpack 1
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

Aggiungere al `package.json` del progetto:

``` js
{
  // ...
  "browser": {
    "vue": "vue/dist/vue.common.js"
  }
}
```

### Modalità Sviluppo vs. Modalità Produzione

Le modalità di sviluppo/produzione sono _hard-coded_ per le build UMD: i file non minimizzati sono per lo sviluppo mentre i file minimizzati sono per la produzione.

Le build CommonJS e ES Module sono pensate per i bundler, perciò non disponiamo di versioni minimizzate per tali build. Di conseguenza dovrai minimizzare il bundle finale da te.

Le build CommonJS e ES Module inoltre preservano il controllo `process.env.NODE_ENV` per determinare la modalità nelle quali vengono eseguite. Dovresti usare una configurazione appropriata del bundler per rimpiazzare queste variabili d'ambiente in modo tale da controllare in quale modalità Vue verrà eseguito. Cambiando  `process.env.NODE_ENV`con una stringa permette inoltre ai minimizzatori come UglifyJS di rilasciare completamente i blocchi di codice relativi allo sviluppo, riducendo la dimensione del file finale.


#### Webpack

Usa Webpack [DefinePlugin](https://webpack.js.org/plugins/define-plugin/):

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

Usa [rollup-plugin-replace](https://github.com/rollup/rollup-plugin-replace):

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

Applica una trasformazione globale [envify](https://github.com/hughsk/envify) al tuo bundle.

``` bash
NODE_ENV=production browserify -g envify -e main.js | uglifyjs -c -m > build.js
```

Guarda anche [Distribuzione](deployment.html)

### Ambienti CSP

Alcuni ambienti, come Google Chrome Apps, impongono il cosiddetto Content Security Policy (CSP) il quale proibisce l'uso di `new Function()` per valutare espressioni. La build completa dipende da questa caratteristica per compilare i template, di conseguenza è inutilizzabile in questi ambienti.

D'altro canto, la build con solo runtime è compatibile con gli ambienti CSP. Quando si usa questa build con [Webpack + vue-loader](https://github.com/vuejs-templates/webpack-simple) o [Browserify + vueify](https://github.com/vuejs-templates/browserify-simple), i template verranno pre-compilati in funzioni `render` le quali sono compatibili con gli ambienti CSP

## Build per lo sviluppo

**Importante**: le build nella cartella `/dist` di GitHub sono controllate solo durante i rilasci. Per usare Vue dall'ultimo codice sorgente su GitHub, dovrai buildarlo da te!

``` bash
git clone https://github.com/vuejs/vue.git node_modules/vue
cd node_modules/vue
npm install
npm run build
```

## Bower

Utilizzando Bower sono disponibili sono le build UMD

``` bash
# ultima versione stabile
$ bower install vue
```

## Moduli AMD

Tutte le build UMD possono essere usate direttamente con moduli AMD.
