---
title: Installazione
type: guide
order: 0
vue_version: 1.0.12
dev_size: "244.43"
min_size: "69.35"
gz_size: "23.79"
---

> **Nota di Compatibilità:** Vue.js non supporta IE8 o versioni precedenti.

## Locale

Per installare Vue.js in locale scaricate lo script ed includetelo nel classico script tag. `Vue` verrà registrata come variabile globale. **Ricorda: Non usate la versione compressa durante lo sviluppo perchè andreste a perdere tutti gli avvisi per eventuali errori comuni.**

<div id="downloads">
<a class="button" href="/js/vue.js" download>Versione di Sviluppo</a><span class="light info">Completa di avvisi e modalità debug</span>

<a class="button" href="/js/vue.min.js" download>Version di Produzione</a><span class="light info">Niente avvisi, {{gz_size}}kb min+gzip</span>
</div>

### CDN

Vue.js è disponibile su [jsdelivr](//cdn.jsdelivr.net/vue/{{vue_version}}/vue.min.js) oppure [cdnjs](//cdnjs.cloudflare.com/ajax/libs/vue/{{vue_version}}/vue.min.js) (ci vuole del tempo prima che venga sincronizzata con l'ultima versione, perciò magari non è ancora disponbile online).

### Versione CSP compatibile

Alcuni ambienti, come il Google Chrome Apps, obbligano l'utilizzo delle CSP (Content Security Policies) e non permettono l'uso di `new Function()` per valutare le espressioni nel codice. In questi casi puoi usare la [Versione CSP compatibile](https://github.com/vuejs/vue/tree/csp/dist).

## NPM

NPM è il sistema di installazione consigliato quando si costruiscono applicazioni di modeste dimensioni con Vue.js. Si accoppia in modo ottimale con i comuni moduli di CommonJS come, per esempio [Webpack](http://webpack.github.io/) oppure [Browserify](http://browserify.org/). Vue.js inoltre fornisce uno strumento di accompagnamento per l'authoring di [Componenti a file Singolo](application.html#Single_File_Components).

``` bash
# Ultima version stabile
$ npm install vue
# Ultima versione + CSP-compliant
$ npm install vue@csp
```

## Versione per lo Sviluppo

**Attenzione**: Il pacchetto CommonJS distribuito via NPM (`vue.common.js`) **non è** checked into source control, perciò per usare l'ultima versione del codice sorgente di Vue.js dovrete ricompilarlo a mano!

``` bash
git clone https://github.com/vuejs/vue.git node_modules/vue
cd node_modules/vue
npm install
npm run build
```

## Bower

``` bash
# Ultima versione stabile
$ bower install vue
```

## Caricatore dei Moduli AMD

La versione locale o quelle installate via Bower sono racchiuse utilizzando un UMD pertanto possono essere utilizzate direttamente come moduli AMD.
