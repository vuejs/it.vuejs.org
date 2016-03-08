---
title: Filtri Personalizzati
type: guida
order: 15
---

## Le Basi

Simili alle Direttive Personalizzate, potete registrare Filtri Personalizzati tramite il metodo globale `Vue.filter()`, passandogli un **filterID** ed una **filter function**. La funzione prenderà i valori come argomenti e restituirà quest'ultimi con i nuovi valori modificati:

``` js
Vue.filter('reverse', function (value) {
  return value.split('').reverse().join('')
})
```

``` html
<!-- 'abc' => 'cba' -->
<span v-text="message | reverse"></span>
```

La funzione del filtro può ricevere argomenti su riga:

``` js
Vue.filter('wrap', function (value, begin, end) {
  return begin + value + end
})
```

``` html
<!-- 'hello' => 'before hello after' -->
<span v-text="message | wrap 'before' 'after'"></span>
```

## Filtri a due Direzioni

Fino ad ora abbiamo trasformato i valori che arrivavano dal modello prima di presentarli alla vista. E' possibile creare dei filtri che facciano l'inverso, modificare il valore dalla vista prima che venga passato al modello:

``` js
Vue.filter('currencyDisplay', {
  // model -> view
  // Formattiamo il valore prima di passarlo alla vista
  read: function(val) {
    return '$'+val.toFixed(2)
  },
  // view -> model
  // formattiamo il valore prima di passarlo al modello
  write: function(val, oldVal) {
    var number = +val.replace(/[^\d.]/g, '')
    return isNaN(number) ? 0 : parseFloat(number.toFixed(2))
  }
})
```

Esempio:

{% raw %}
<div id="two-way-filter-demo" class="demo">
  <input type="text" v-model="money | currencyDisplay">
  <p>Model value: {{money}}</p>
</div>
<script>
new Vue({
  el: '#two-way-filter-demo',
  data: {
    money: 123.45
  },
  filters: {
    currencyDisplay: {
      read: function(val) {
        return '$'+val.toFixed(2)
      },
      write: function(val, oldVal) {
        var number = +val.replace(/[^\d.]/g, '')
        return isNaN(number) ? 0 : parseFloat(number.toFixed(2))
      }
    }
  }
})
</script>
{% endraw %}

## Argomenti Dinamici

Se un argomento non è racchiuso tra apici, verrà valutato dinamicamente nel contesto dei dati di vm. In più la funzione del filtro è sempre invocata utilizzando `this` come contesto della vm attuale, per esempio:

``` html
<input v-model="userInput">
<span>{{msg | concat userInput}}</span>
```

``` js
Vue.filter('concat', function (value, input) {
  // in questo caso `input` === `this.userInput`
  return value + input
})
```

L'esempio qui sopra si poteva risolvere benissimo tramite un espressione, oppure una Properità Derivata, ma per procedure e logiche più complesse i filtri sono la scelta migliore.

I filtri integrati `filterBy` e `orderBy` sono filtri che effettuano logica non insignificante sugli Array che gli vengono passati e si appoggiano totalmente allo stato corrente dell'istanza Vue.
