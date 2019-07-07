---
title: Sintassi del template
type: guide
order: 4
---

Vue.js utilizza una sintassi di template basata su HTML che permette di associare in modo dichiarativo il DOM renderizzato ai dati dell'istanza di Vue sottostante. Tutti i template Vue.js è valido HTML che può essere analizzato da browser compatibili con le specifiche e da parser HTML.

Sotto il cofano, Vue compila i template in funzioni di render del DOM virtuale. Combinato con il sistema di reattività, Vue è in grado di comprendere in modo intelligente il minimo numero di componenti da re-renderizzare e applicare la quantità minima di manipolazioni DOM quando lo stato dell'app cambia.

Se sei familiare con i concetti del DOM virtuale e preferisci la potenza cruda di Javascript, puoi anche [scrivere direttamente funzioni di render](render-function.html) al posto di template, con supporto opzionale di JSX.

## Interpolazioni

### Testo

La forma più semplice di associazione dei dati è la interpolazione del testo utilizzando la sintassi "Mustache" (doppie parantesi graffe)


``` html
<span>Messaggio: {{ msg }}</span>
```

Il tag mustache sarà sostituito con il valore della proprietà `msg` nel corrispondente oggetto dati. Sarà inoltre aggiornato ogni volta che la proprietà delll'oggetto dati `msg` camabia.

È anche possibile eseguire interpolazioni una tantum che non si aggiorna sulla modifica dei dati usando la [direttiva v-once](../api/#v-once), ma tieni presente che ciò influirà anche su qualsiasi associazione sullo stesso nodo:

``` html
<span v-once>Questo non cambierà mai: {{ msg }}</span>
```

### Raw HTML

La sintassi mustaches interpreta i dati come testo normale, non HTML. Per generare un vero codice HTML, avrai bisogno di utilizzare la direttiva `v-html` 

``` html
<p>Usando la sintassi mustaches: {{ rawHtml }}</p>
<p>Usando la direttiva v-html: <span v-html="rawHtml"></span></p>
```

{% raw %}
<div id="example1" class="demo">
  <p>Usando la sintassi mustaches: {{ rawHtml }}</p>
  <p>Usando la direttiva v-html: <span v-html="rawHtml"></span></p>
</div>
<script>
new Vue({
  el: '#example1',
  data: function () {
  	return {
  	  rawHtml: '<span style="color: red">Questo dovrebbe essere rosso</span>'
  	}
  }
})
</script>
{% endraw %}

I contenuti dello `span` saranno sostituiti con il valore dalla proprietà `rawHtml`, interpretata come HTML semplice - l'associzione dei dati viene ignorata. Nota che non puoi usare `v-html` per comporre template parziali, perchè Vue non è un engine basato sulle stringhe. Invece, i componenti sono preferiti come unità fondamentali per il riutilizzo e la composizione dell'interfaccia utente.

<p class="tip">Renderizzare dinamicamente HTML arbitrario sul tuo sito potrebbe essere davvero pericoloso perchè può condurre facilmente alle [vulnerabilità XSS](https://en.wikipedia.org/wiki/Cross-site_scripting). Usa solo l'interpolazione HTML su contenuto fidato e **mai** su contenuto fornito dall'utente.</p>

### Attributi

La sintassi mustaches non può essere utilizzata all'interno di attributi HTML. Invece, viene utilizzata la [direttiva v-bind](../api/#v-bind):

``` html
<div v-bind:id="dynamicId"></div>
```
In caso di attributi booleani, dove la loro semplice esistenza implica `true`, ` v-bind` funziona in modo un po' diverso. In questo esempio:

``` html
<button v-bind:disabled="isButtonDisabled">Bottone</button>
```

Se `isButtonDisabled` ha come valore `null`, `undefined`, o `false`, l'attributo `disabled` non verrà incluso nell'elemento `<button>` renderizzato.

### Using JavaScript Expressions

So far we've only been binding to simple property keys in our templates. But Vue.js actually supports the full power of JavaScript expressions inside all data bindings:

``` html
{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ message.split('').reverse().join('') }}

<div v-bind:id="'list-' + id"></div>
```

These expressions will be evaluated as JavaScript in the data scope of the owner Vue instance. One restriction is that each binding can only contain **one single expression**, so the following will **NOT** work:

``` html
<!-- this is a statement, not an expression: -->
{{ var a = 1 }}

<!-- flow control won't work either, use ternary expressions -->
{{ if (ok) { return message } }}
```

<p class="tip">Template expressions are sandboxed and only have access to a whitelist of globals such as `Math` and `Date`. You should not attempt to access user defined globals in template expressions.</p>

## Directives

Directives are special attributes with the `v-` prefix. Directive attribute values are expected to be **a single JavaScript expression** (with the exception for `v-for`, which will be discussed later). A directive's job is to reactively apply side effects to the DOM when the value of its expression changes. Let's review the example we saw in the introduction:

``` html
<p v-if="seen">Now you see me</p>
```

Here, the `v-if` directive would remove/insert the `<p>` element based on the truthiness of the value of the expression `seen`.

### Arguments

Some directives can take an "argument", denoted by a colon after the directive name. For example, the `v-bind` directive is used to reactively update an HTML attribute:

``` html
<a v-bind:href="url"> ... </a>
```

Here `href` is the argument, which tells the `v-bind` directive to bind the element's `href` attribute to the value of the expression `url`.

Another example is the `v-on` directive, which listens to DOM events:

``` html
<a v-on:click="doSomething"> ... </a>
```

Here the argument is the event name to listen to. We will talk about event handling in more detail too.

### Modifiers

Modifiers are special postfixes denoted by a dot, which indicate that a directive should be bound in some special way. For example, the `.prevent` modifier tells the `v-on` directive to call `event.preventDefault()` on the triggered event:

``` html
<form v-on:submit.prevent="onSubmit"> ... </form>
```

You'll see other examples of modifiers later, [for `v-on`](events.html#Event-Modifiers) and [for `v-model`](forms.html#Modifiers), when we explore those features.

## Shorthands

The `v-` prefix serves as a visual cue for identifying Vue-specific attributes in your templates. This is useful when you are using Vue.js to apply dynamic behavior to some existing markup, but can feel verbose for some frequently used directives. At the same time, the need for the `v-` prefix becomes less important when you are building a [SPA](https://en.wikipedia.org/wiki/Single-page_application) where Vue.js manages every template. Therefore, Vue.js provides special shorthands for two of the most often used directives, `v-bind` and `v-on`:

### `v-bind` Shorthand

``` html
<!-- full syntax -->
<a v-bind:href="url"> ... </a>

<!-- shorthand -->
<a :href="url"> ... </a>
```

### `v-on` Shorthand

``` html
<!-- full syntax -->
<a v-on:click="doSomething"> ... </a>

<!-- shorthand -->
<a @click="doSomething"> ... </a>
```

They may look a bit different from normal HTML, but `:` and `@` are valid chars for attribute names and all Vue.js supported browsers can parse it correctly. In addition, they do not appear in the final rendered markup. The shorthand syntax is totally optional, but you will likely appreciate it when you learn more about its usage later.
