---
title: Per Iniziare
type: guide
order: 1
---

Iniziamo con un piccolo e veloce tour di come funziona il binding dei dati.
Se sei più interessato a capire come funziona il tutto da una prospettiva più ampia leggi [questo post](http://blog.evanyou.me/2015/10/25/vuejs-re-introduction/).

Il modo più facile di provare Vue.js è di utilizzare [l'esempio su JSFiddle](https://jsfiddle.net/yyx990803/okv0rgrk/).
Sentiti libero di aprilo in un'altra tab e di seguire l'esempio assieme a questa documentazione, se invece preferisci installare Vue.js consulta la pagina [Installazione](/guide/installation.html).

### Ciao Mondo!

``` html
<div id="app">
  {{ message }}
</div>
```
``` js
new Vue({
  el: '#app',
  data: {
    message: 'Ciao Vue.js!'
  }
})
```
{% raw %}
<div id="app" class="demo">
  {{ message }}
</div>
<script>
new Vue({
  el: '#app',
  data: {
    message: 'Ciao Vue.js!'
  }
})
</script>
{% endraw %}

### Two Way Binding

``` html
<div id="app">
  <p>{{ message }}</p>
  <input v-model="message">
</div>
```
``` js
new Vue({
  el: '#app',
  data: {
    message: 'Ciao Vue.js!'
  }
})
```
{% raw %}
<div id="app2" class="demo">
  <p>{{ message }}</p>
  <input v-model="message">
</div>
<script>
new Vue({
  el: '#app2',
  data: {
    message: 'Ciao Vue.js!'
  }
})
</script>
{% endraw %}

### Rappresentare una Lista

``` html
<div id="app">
  <ul>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ul>
</div>
```
``` js
new Vue({
  el: '#app',
  data: {
    todos: [
      { text: 'Impara JavaScript' },
      { text: 'Impara Vue.js' },
      { text: 'Costruisci qualcosa di interessante' }
    ]
  }
})
```
{% raw %}
<div id="app3" class="demo">
  <ul>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ul>
</div>
<script>
new Vue({
  el: '#app3',
  data: {
    todos: [
      { text: 'Impara JavaScript' },
      { text: 'Impara Vue.js' },
      { text: 'Costruisci qualcosa di interessante' }
    ]
  }
})
</script>
{% endraw %}

### Gestire gli Input

``` html
<div id="app">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">Capovolgi il Messaggio</button>
</div>
```
``` js
new Vue({
  el: '#app',
  data: {
    message: 'Ciao Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
```
{% raw %}
<div id="app4" class="demo">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">Capovolgi il Messaggio</button>
</div>
<script>
new Vue({
  el: '#app4',
  data: {
    message: 'Ciao Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
</script>
{% endraw %}

### Ora Tutto Assieme

``` html
<div id="app">
  <input v-model="newTodo" v-on:keyup.enter="addTodo">
  <ul>
    <li v-for="todo in todos">
      <span>{{ todo.text }}</span>
      <button v-on:click="removeTodo($index)">X</button>
    </li>
  </ul>
</div>
```
``` js
new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todos: [
      { text: 'Aggiungi qualche compito' }
    ]
  },
  methods: {
    addTodo: function () {
      var text = this.newTodo.trim()
      if (text) {
        this.todos.push({ text: text })
        this.newTodo = ''
      }
    },
    removeTodo: function (index) {
      this.todos.splice(index, 1)
    }
  }
})
```
{% raw %}
<div id="app5" class="demo">
  <input v-model="newTodo" v-on:keyup.enter="addTodo">
  <ul>
    <li v-for="todo in todos">
      <span>{{ todo.text }}</span>
      <button v-on:click="removeTodo($index)">X</button>
    </li>
  </ul>
</div>
<script>
new Vue({
  el: '#app5',
  data: {
    newTodo: '',
    todos: [
      { text: 'Aggiungi qualche compito' }
    ]
  },
  methods: {
    addTodo: function () {
      var text = this.newTodo.trim()
      if (text) {
        this.todos.push({ text: text })
        this.newTodo = ''
      }
    },
    removeTodo: function (index) {
      this.todos.splice(index, 1)
    }
  }
})
</script>
{% endraw %}

Speriamo che questa introduzione di base vi abbia dato un'idea di come Vue.js lavori.
Siamo sicuri che avrete molte domande ora, continuate a leggere questa guida perché vi risponderemo a tutto.
