---
title: Vincolo sugli input dei Form
type: guide
order: 10
---

## Utilizzo di Base

Potete usare la direttiva `v-model` per creare un vincolo a dure direzioni tra l'elemento del form, un input, e i dati presenti in Vue. Vue.js cercherà sempre di aggiornare il vincolo con un occhio di riguardo al tipo di dato.

### Testo

``` html
<span>Messaggio: {{ message }}</span>
<br>
<input type="text" v-model="message" placeholder="Modificami">
```

{% raw %}
<div id="example-1" class="demo">
  <span>Messaggio: {{ message }}</span><br>
  <input type="text" v-model="message" placeholder="Modificami">
</div>
<script>
new Vue({
  el: '#example-1',
  data: {
    message: ''
  }
})
</script>
{% endraw %}

### Checkbox

Checkbox singolo, valore booleano:

``` html
<input type="checkbox" id="checkbox" v-model="checked">
<label for="checkbox">{{ checked }}</label>
```
{% raw %}
<div id="example-2" class="demo">
  <input type="checkbox" id="checkbox" v-model="checked">
  <label for="checkbox">{{ checked }}</label>
</div>
<script>
new Vue({
  el: '#example-2',
  data: {
    checked: false
  }
})
</script>
{% endraw %}

Checkbox multipli, vincolati allo stesso Array:

``` html
<input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
<label for="jack">Jack</label>
<input type="checkbox" id="john" value="John" v-model="checkedNames">
<label for="john">John</label>
<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
<label for="mike">Mike</label>
<br>
<span>Nomi selezionati: {{ checkedNames | json }}</span>
```

``` js
new Vue({
   el: '...',
   data: {
     checkedNames: []
   }
})
```

```
{% raw %}
<div id="example-3" class="demo">
  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
  <label for="jack">Jack</label>
  <input type="checkbox" id="john" value="John" v-model="checkedNames">
  <label for="john">John</label>
  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
  <label for="mike">Mike</label>
  <br>
  <span>Nomi selezionati: {{ checkedNames | json }}</span>
</div>
<script>
new Vue({
  el: '#example-3',
  data: {
    checkedNames: []
  }
})
</script>
{% endraw %}

### Radio


``` html
<input type="radio" id="one" value="Uno" v-model="picked">
<label for="one">Uno</label>
<br>
<input type="radio" id="two" value="Due" v-model="picked">
<label for="two">Due</label>
<br>
<span>Selezionato: {{ picked }}</span>
```
{% raw %}
<div id="example-4" class="demo">
  <input type="radio" id="one" value="Uno" v-model="picked">
  <label for="one">Uno</label>
  <br>
  <input type="radio" id="two" value="Due" v-model="picked">
  <label for="two">Due</label>
  <br>
  <span>Selezionato: {{ picked }}</span>
</div>
<script>
new Vue({
  el: '#example-4',
  data: {
    picked: ''
  }
})
</script>
{% endraw %}

### Select

Select singolo:

``` html
<select v-model="selected">
  <option selected>A</option>
  <option>B</option>
  <option>C</option>
</select>
<span>Selezionato: {{ selected }}</span>
```
{% raw %}
<div id="example-5" class="demo">
  <select v-model="selected">
    <option selected>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <span>Selezionato: {{ selected }}</span>
</div>
<script>
new Vue({
  el: '#example-5',
  data: {
    selected: null
  }
})
</script>
{% endraw %}

Select multiplo, vincolato ad un Array:

``` html
<select v-model="selected" multiple>
  <option selected>A</option>
  <option>B</option>
  <option>C</option>
</select>
<br>
<span>Selezionati: {{ selected | json }}</span>
```
{% raw %}
<div id="example-6" class="demo">
  <select v-model="selected" multiple style="width: 50px">
    <option selected>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <br>
  <span>Selezionati: {{ selected | json }}</span>
</div>
<script>
new Vue({
  el: '#example-6',
  data: {
    selected: []
  }
})
</script>
{% endraw %}

Opzioni dinamiche renderizzate con `v-for`:

``` html
<select v-model="selected">
  <option v-for="option in options" v-bind:value="option.value">
    {{ option.text }}
  </option>
</select>
<span>Selezionato: {{ selected }}</span>
```
``` js
new Vue({
  el: '...',
  data: {
    selected: 'A',
    options: [
      { text: 'Uno', value: 'A' },
      { text: 'Due', value: 'B' },
      { text: 'Tre', value: 'C' }
    ]
  }
})
```
{% raw %}
<div id="example-7" class="demo">
  <select v-model="selected">
    <option v-for="option in options" v-bind:value="option.value">
      {{ option.text }}
    </option>
  </select>
  <span>Selezionato: {{ selected }}</span>
</div>
<script>
new Vue({
  el: '#example-7',
  data: {
    selected: 'A',
    options: [
      { text: 'Uno', value: 'A' },
      { text: 'Due', value: 'B' },
      { text: 'Tre', value: 'C' }
    ]
  }
})
</script>
{% endraw %}

## Vincolo sui Valori

Quando si lega `v-model` ad un Radio, Checkbox o Select solitamente è un legame statico, con stringhe o valori booleani:

``` html
<!-- `picked` è una stringa con valore "a" quando viene selezionato questo input -->
<input type="radio" v-model="picked" value="a">

<!-- `toggle` è o vero o falso -->
<input type="checkbox" v-model="toggle">

<!-- `selected` è una stringa con valore "abc" quando selezionata !-->
<select v-model="selected">
  <option value="abc">ABC</option>
</select>
```

A volte c'è bisogno di legare il valore ad una proprietà dinamica dell'istanza di Vue. Per compiere ciò dobbiamo utilizzare l'attributo `v-bind`. In aggiunta, `v-bind` ci permette di legare valori distinti per le condizioni booleane.

### Checkbox

``` html
<input
  type="checkbox"
  v-model="toggle"
  v-bind:true-value="a"
  v-bind:false-value="b">
```

``` js
// quando selezionato:
vm.toggle === vm.a
// quando deselezionato:
vm.toggle === vm.b
```

### Radio

``` html
<input type="radio" v-model="pick" v-bind:value="a">
```

``` js
// quando selezionato:
vm.pick === vm.a
```

### Opzioni della Select

``` html
<select v-model="selected">
  <!-- Oggetto inline -->
  <option v-bind:value="{ number: 123 }">123</option>
</select>
```

``` js
// Quando selezionato:
typeof vm.selected // -> 'object'
vm.selected.number // -> 123
```

## Attributi parametrici

### lazy

Per definizione, `v-model` sincronizza l'input con i dati ad ogni evento di inserimento, keypress per esempio. Si può aggiungee un attributo `lazy` per cambiare il modo con il quale vengono sincronizzati i dati:

``` html
<!-- Verrà sincronizzato dopo l'immisione -->
<input v-model="msg" lazy>
```

### number

Se volete convertire automaticamente l'input in numeri potete farlo tramite l'attributo `number`:

``` html
<input v-model="age" number>
```

### debounce

Il parametro `debounce` vi permette di impostare un ritardo dopo ogni pressione di un tasto in modo tale che i dati vengano sincronizzati dopo il ritardo stesso. Questo può essere utile quando si fanno operazioni dispendiose ad ogni cambiamento del valore di input, per esempio un campo di testo per l'auto completamento della parola.

``` html
<input v-model="msg" debounce="500">
```
 {% raw %}
<div id="debounce-demo" class="demo">
  {{ msg }}<br>
  <input v-model="msg" debounce="500">
</div>
<script>
new Vue({
  el:'#debounce-demo',
  data: { msg: 'Modificami' }
})
</script>
{% endraw %}

Da notare che `debounce` non ritarda l'evento di input bensì l'operazione di sincronizzazione dei dati. E' consigliato l'uso di `vm.$watch()` per reagire al cambiamento dei dati con `debounce` attivo. Per fare il `debouncing` di eventi del DOM dovreste utilizzare [il filtro per il debounce](/api/#debounce).
