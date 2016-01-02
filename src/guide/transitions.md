---
title: Transizioni
type: guide
order: 11
---

Tramite il sistema di transizioni di Vue.js potrai applicare gli effetti di transizione tipici agli elementi che aggiungi o rimuovi dal DOM. Vue.js aggiungerà/rimuoverà automaticamente determinate classi CSS le quali attivano tali effetti. Ovviamente potrete definire le vostre classi personalizzate per fare transizioni del tutto uniche.

Per sfruttare le transizioni dovrete utilizzare l'attributo `transition` sul vostro elemento:

``` html
<div v-if="show" transition="my-transition"></div>
```

L'attributo `transition` può essere usato accoppiato con:

- `v-if`
- `v-show`
- `v-for` (verrà attivato ad ogni aggiunta o rimozione)
- Componenti Dinamici (che vedremo [nella prossima sezione](components.html#Dynamic_Components))
- Su un nuovo componente attivato tramite l'istanza Vue, per esempio `vm.$appendTo(el)`.

Quando un elemento è inserito o rimosso tramite transizioni, Vue cercherà:

1. Di trovare la transizione registrata tramite il metodo `Vue.transition(id, hooks)` oppure passata tramite l'attributo `transitions`. Se trova la transizione, chiamarà l'hook adeguato per ogni fase della transizione stessa.

2. Di capire in automatico quando un elemento ha già applicata o meno una classe CSS di transizione e rimuoverla o aggiungerla al momento giusto.

3. Di eseguire immediatamente l'operazione di rimozione/aggiunta se non trova l'hook dedicato alla transizione che si vuole effettuare.

## Transizioni via CSS

### Esempio

Una transizione via CSS assomiglia a questa:

``` html
<div v-if="show" transition="expand">hello</div>
```

Dovrai anche devinire le regole CSS per la transizione, in particolare `.expand-transition`, `.expand-enter` e `.expand-leave`:

``` css
/* La transizione vera e propria */
.expand-transition {
  transition: all .3s ease;
  height: 30px;
  padding: 10px;
  background-color: #eee;
  overflow: hidden;
}

/* .expand-enter è lo stato iniziale del elemento */
/* .expand-leave è lo stato finale del elemento */
.expand-enter, .expand-leave {
  height: 0;
  padding: 0 10px;
  opacity: 0;
}
```

In aggiunta puoi fornire degli hook in JavaScript:

``` js
Vue.transition('expand', {

  beforeEnter: function (el) {
    el.textContent = 'beforeEnter'
  },
  enter: function (el) {
    el.textContent = 'enter'
  },
  afterEnter: function (el) {
    el.textContent = 'afterEnter'
  },
  enterCancelled: function (el) {
    // handle cancellation
  },

  beforeLeave: function (el) {
    el.textContent = 'beforeLeave'
  },
  leave: function (el) {
    el.textContent = 'leave'
  },
  afterLeave: function (el) {
    el.textContent = 'afterLeave'
  },
  leaveCancelled: function (el) {
    // handle cancellation
  }
})
```

{% raw %}
<div id="demo">
  <div v-if="show" transition="expand">Ciao</div>
  <button @click="show = !show">Cambia</button>
</div>

<style>
.expand-transition {
  transition: all .3s ease;
  height: 30px;
  padding: 10px;
  background-color: #eee;
  overflow: hidden;
}
.expand-enter, .expand-leave {
  height: 0;
  padding: 0 10px;
  opacity: 0;
}
</style>

<script>
new Vue({
  el: '#demo',
  data: {
    show: true,
    transitionState: 'Idle'
  },
  transitions: {
    expand: {
      beforeEnter: function (el) {
        el.textContent = 'beforeEnter'
      },
      enter: function (el) {
        el.textContent = 'enter'
      },
      afterEnter: function (el) {
        el.textContent = 'afterEnter'
      },
      beforeLeave: function (el) {
        el.textContent = 'beforeLeave'
      },
      leave: function (el) {
        el.textContent = 'leave'
      },
      afterLeave: function (el) {
        el.textContent = 'afterLeave'
      }
    }
  }
})
</script>
{% endraw %}

### Le classi CSS per le Transizioni

In base al valore contenuto nell attributo `transition`, verranno attivate determinate classi CSS. Per esempio se avete una transizione del tipo `transition="fade"`, tre classi CSS sono coinvolte:

1. La classe `.fade-transition`, quella di base e sarà sempre presente.

2. La classe `.fade-enter` che definisce lo stato iniziale della transizione. E' applicata al primo frame e subito rimossa.

3. La classe `.fade-leave` che definisce lo stato finale della transzione. Viene applicata quando la transizione è finita.

Se l'attributo `transition` non ha valore, le classi applicate saranno quelle di default `.v-transition`, `.v-enter` e `.v-leave`.

### Flusso della Transizione

When the `show` property changes, Vue.js will insert or remove the `<div>` element accordingly, and apply transition classes as specified below:

- When `show` becomes false, Vue.js will:
  1. Call `beforeLeave` hook;
  2. Apply `v-leave` class to the element to trigger the transition;
  3. Call `leave` hook;
  4. Wait for the transition to finish; (listening to a `transitionend` event)
  5. Remove the element from the DOM and remove `v-leave` class;
  6. Call `afterLeave` hook.

- When `show` becomes true, Vue.js will:
  1. Call `beforeEnter` hook;
  2. Apply `v-enter` class to the element;
  3. Insert it into the DOM;
  4. Call `enter` hook;
  5. Force a CSS layout so `v-enter` is actually applied, then remove the `v-enter` class to trigger a transition back to the element's original state;
  6. Wait for the transition to finish;
  7. Call `afterEnter` hook.

In addition, if you remove an element when its enter transition is in progress, the `enterCancelled` hook will be called to give you the opportunity to clean up changes or timers created in `enter`. Vice-versa for leaving transitions.

All of the above hook functions are called with their `this` contexts set to the associated Vue instances. If the element is the root node of a Vue instance, that instance will be used as the context. Otherwise, the context will be the owner instance of the transition directive.

Finally, the `enter` and `leave` can optionally take a second callback argument. When you do so, you are indicating that you want to explicitly control when the transition should end, so instead of waiting for the CSS `transitionend` event, Vue.js will expect you to eventually call the callback to finish the transition. For example:

``` js
enter: function (el) {
  // no second argument, transition end
  // determined by CSS transitionend event
}
```

vs.

``` js
enter: function (el, done) {
  // with the second argument, the transition
  // will only end when `done` is called.
}
```

<p class="tip">When multiple elements are being transitioned together, Vue.js batches them and only applies one forced layout.</p>

### CSS Animations

CSS animations are applied in the same way with CSS transitions, the difference being that `v-enter` is not removed immediately after the element is inserted, but on an `animationend` event.

Example: (omitting prefixed CSS rules here)

``` html
<span v-show="show" transition="bounce">Look at me!</span>
```

``` css
.bounce-enter {
  animation: bounce-in .5s;
}
.bounce-leave {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}
```

{% raw %}
<div id="anim" class="demo">
  <span v-show="show" transition="bounce">Look at me!</span>
  <br>
  <button @click="show = !show">Toggle</button>
</div>

<style>
  .bounce-enter {
    -webkit-animation: bounce-in .5s;
    animation: bounce-in .5s;
  }
  .bounce-leave {
    -webkit-animation: bounce-out .5s;
    animation: bounce-out .5s;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
      -webkit-transform: scale(0);
    }
    50% {
      transform: scale(1.5);
      -webkit-transform: scale(1.5);
    }
    100% {
      transform: scale(1);
      -webkit-transform: scale(1);
    }
  }
  @keyframes bounce-out {
    0% {
      transform: scale(1);
      -webkit-transform: scale(1);
    }
    50% {
      transform: scale(1.5);
      -webkit-transform: scale(1.5);
    }
    100% {
      transform: scale(0);
      -webkit-transform: scale(0);
    }
  }
  @-webkit-keyframes bounce-in {
    0% {
      -webkit-transform: scale(0);
    }
    50% {
      -webkit-transform: scale(1.5);
    }
    100% {
      -webkit-transform: scale(1);
    }
  }
  @-webkit-keyframes bounce-out {
    0% {
      -webkit-transform: scale(1);
    }
    50% {
      -webkit-transform: scale(1.5);
    }
    100% {
      -webkit-transform: scale(0);
    }
  }
</style>

<script>
new Vue({
  el: '#anim',
  data: { show: true }
})
</script>
{% endraw %}

## JavaScript Transitions

You can also use just the JavaScript hooks without defining any CSS rules. When using JavaScript only transitions, **the `done` callbacks are required for the `enter` and `leave` hooks**, otherwise they will be called synchronously and the transition will finish immediately.

It's also a good idea to explicitly declare `css: false` for your JavaScript transitions so that Vue.js can skip the CSS detection. This also prevents cascaded CSS rules from accidentally interfering with the transition.

The following example registers a custom JavaScript transition using jQuery:

``` js
Vue.transition('fade', {
  css: false,
  enter: function (el, done) {
    // element is already inserted into the DOM
    // call done when animation finishes.
    $(el)
      .css('opacity', 0)
      .animate({ opacity: 1 }, 1000, done)
  },
  enterCancelled: function (el) {
    $(el).stop()
  },
  leave: function (el, done) {
    // same as enter
    $(el).animate({ opacity: 0 }, 1000, done)
  },
  leaveCancelled: function (el) {
    $(el).stop()
  }
})
```

Then you can use it with the `transition` attribute, same deal:

``` html
<p transition="fade"></p>
```

## Staggering Transitions

It's possible to create staggering transitions when using `transition` with `v-for`. You can do this either by adding a `stagger`, `enter-stagger` or `leave-stagger` attribute to your transitioned element:

``` html
<div v-for="list" transition stagger="100"></div>
```

Or, you can provide a `stagger`, `enterStagger` or `leaveStagger` hook for finer-grained control:

``` js
Vue.transition('stagger', {
  stagger: function (index) {
    // increase delay by 50ms for each transitioned item,
    // but limit max delay to 300ms
    return Math.min(300, index * 50)
  }
})
```

Example:

<iframe width="100%" height="200" style="margin-left:10px" src="http://jsfiddle.net/yyx990803/mvo99bse/embedded/result,html,js,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
