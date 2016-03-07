---
title: Rendering Condizionato
type: guide
order: 7
---

## v-if

Nei template basati sulle stringhe, come per esempio Handlebars, dovreste scrivere un blocco condizionale così:

``` html
<!-- Handlebars template -->
{{#if ok}}
  <h1>Yes</h1>
{{/if}}
```

Con Vue.js usiamo la direttiva `v-if` per ottenere lo stesso risultato:

``` html
<h1 v-if="ok">Yes</h1>
```

E' anche possibile aggiungere il blocco "else" tramite `v-else`:

``` html
<h1 v-if="ok">Yes</h1>
<h1 v-else>No</h1>
```

## Template v-if

Visto che `v-if` è una direttiva, ha bisogno di essere legata ad un elemento del DOM, se dobbiamo gestire più elementi con un solo `v-if` conviene raggruppare tali elementi utilizzando il tag `<template>`, il quale funziona come un contenitore invisibile. Il rendering finale non includera il tag `<template>`.

``` html
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
```

## v-show

Un altra opzione per il rendering condizionato è la direttiva `v-show`. L'utilizzo è molto simile:

``` html
<h1 v-show="ok">Hello!</h1>
```

La differenza sostanziale è che l'elemento con la direttiva `v-show` verrà sempre renderizzato e rimarrà nel DOM; `v-show` semplicemente cambierà la proprietà CSS `display` del elemento.

Da notare che `v-show` non supporta la sintassi con `<template>` vista precedentemente.

## v-else

Puoi utilizzare la direttiva `v-else` per indicare un "elemento alternativo" per `v-if` o `v-show`:

``` html
<div v-if="Math.random() > 0.5">
  Sorry
</div>
<div v-else>
  Not sorry
</div>
```

L'elemento `v-else` deve seguire immediatamente `v-if` o `v-show` - altrimenti verrà ignorato.

## v-if vs. v-show

Quando un blocco `v-if` viene attivato, Vue.js dovrà fare un rendering parziale perché il condenuto dentro a `v-if` può contenere altri vincoli o espressioni. `v-if` effettua un vero e proprio rendering per assicurarsi che tutti i componenti figli, nel caso ci siano, vengano gestiti a dovere e distrutti/ricreati in base allo stato della condizione di `v-if`.

`v-if` è definito **lazy**: se la condizione non è soddisfatta al primo rendering, non succederà nulla - il rendering non inizia finché la condizione non è soddisfatta per la prima volta (e successivamente viene messa in cache).

Per contrasto, `v-show` è molto più semplice - l'elemento è sempre renderizzato e conservato, viene nascosto sfruttando una properità CSS.

In generale, `v-if` ha un costo di attivazione più alto, mentre `v-show` ha un costo di rendering più alto, in termini di performance. Dovete stabilire voi quando utilizzare `v-show` o `v-if` in base alle vostre esigenze specifiche.
