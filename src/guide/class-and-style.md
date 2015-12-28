---
title: Vincolo sul CSS
type: guide
order: 6
---

Una necessità molto comune quando si utilizza il vincolo dei dati è quello di manipolare le classi e lo style CSS del tag HTML in questione. Visto che entrambi sono degli attributi comuni dei tag HTML, possiamo usare `v-bind` per gestirli: dobbiamo solo calcolare il corretto risultato finale della nostra espressione. Comunque sia pasticciare gli attributi con concatenazione di string e risultati di espresioni può portare ed errori. Per questo motivo Vue.js offre dei miglioramenti quando capisce che `v-bind` è utilizzato per l'attributo `class` o `style`. In aggiunta alle stringhe, l'espressione in `v-bind` potrà valutare anche Oggetti ed Array.

## Vincolare Classi HTML

<p class="tip">Anche se potreste usare l'interpolazione con le parentesi graffe `{% raw %}class="{{ className }}"{% endraw %}` per vincolare le classi, non è raccomandato mescolare quel metodo con `v-bind:class`, usate o uno o l'altro!</p>

### Sintassi per gli Oggetti

Possiamo passare un Oggetto a `v-bind:class` per attivare classi CSS in modo dinamico. Notare che la direttiva `v-bind:class` può coesistere con l'attributo standard `class`:

``` html
<div class="static" v-bind:class="{ 'class-a': isA, 'class-b': isB }"></div>
```
``` js
data: {
  isA: true,
  isB: false
}
```

Verrà renderizzato:

``` html
<div class="static class-a"></div>
```

Quando `isA` e `isB` cambiano, la lista delle classi cambierà di conseguenza. Per esempio se `isB` diventa `true`, la classi css finali saranno `"static class-a class-b"`.

Tra le altre cose, puoi vincolare anche un oggetto:

``` html
<div v-bind:class="classObject"></div>
```
``` js
data: {
  classObject: {
    'class-a': true,
    'class-b': false
  }
}
```

Questo esempio avrà lo stesso risultato. Come avrai intuito possiamo anche vincolare una [Proprietà Derivata](computed.html) la quale restituisce un Oggetto. Questo è un metodo di sviluppo comune e molto potente.

### Sintassi per gli Array

Potete passare un Array a `v-bind:class` per applicare una lista di classi CSS:

``` html
<div v-bind:class="[classA, classB]">
```
``` js
data: {
  classA: 'class-a',
  classB: 'class-b'
}
```

Verrà renderizzato:

``` html
<div class="class-a class-b"></div>
```

Se avete la necessità di attivare una specifica classe in base ad una condizione, potete farlo usando le espressioni ternarie:

``` html
<div v-bind:class="[classA, isB ? classB : '']">
```

In questo caso `classA` verrà sempre inserita, ma `classB` verrà inserita solo se `isB` è `true`.

## Vincolare lo Style CSS

### Sintassi per gli Oggetti

La sintasssi per gli oggetti di `v-bind:style` è molto chiara - assomiglia molto a quella usata per le classi CSS, tolto il fatto che è un Oggetto JavaScript in questo caso. Puoi utilizzare la sintassi camelCase o kebab-case per i nomi delle proprietà CSS:

``` html
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```
``` js
data: {
  activeColor: 'red',
  fontSize: 30
}
```

Spesso è consigliato vincolare lo style utilizzando direttamente on oggetto, per far si di tenere il template più pulito:

``` html
<div v-bind:style="styleObject"></div>
```
``` js
data: {
  styleObject: {
    color: 'red',
    fontSize: '13px'
  }
}
```

Anche qui, la sintassi ad oggetti è spesso usata sfruttando le properità derivate le quali restituiscono un oggetto.

### Sintassi per gli Array

La sintassi ad Array per `v-bind:style` vi permette di applicare più oggetti allo stesso elemento:

``` html
<div v-bind:style="[styleObjectA, styleObjectB]">
```

### Prefisso Automatico

Quando si utilizzano delle properità CSS che richiedono dei prefissi, per esempio `transform` Vue.js cercherà in automatico di individuare ed applicare i prefissi alle properità che necessitano tale controllo.
