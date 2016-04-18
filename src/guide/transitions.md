---
title: Transizioni
type: guida
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
- `v-for` verrà attivato ad ogni aggiunta o rimozione per attivarlo quando si cambia ordine bisogna sfruttare [plugin vue-animated-list](https://github.com/vuejs/vue-animated-list))
- Componenti Dinamici (che vedremo [nella prossima sezione](components.html#Dynamic-Components))
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

Si possono usare anche le transizioni nominate in modo dinamico, inoltre è possibile utilizzare più transizioni tramite un unico nome dinamico:

``` html
<div v-if="show" :transition="transitionName">Ciao</div>
```

```js
new Vue({
  el: '...',
  data: {
    show: false,
    transitionName: 'fade'
  }
})
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

### Classi Personalizzate per le Transizioni

> Novità in 1.0.14

You can specify custom `enterClass` and `leaveClass` in the transition definition. These will override the conventional class names. Useful when you want to combine Vue's transition system with an existing CSS animation library, e.g. [Animate.css](https://daneden.github.io/animate.css/):

``` html
<div v-show="ok" class="animated" transition="bounce">Watch me bounce</div>
```

``` js
Vue.transition('bounce', {
  enterClass: 'bounceInLeft',
  leaveClass: 'bounceOutRight'
})
```

### Dichiarare il Tipo di Transizione

> Novità in 1.0.14

Vue.js needs to attach event listeners in order to know when the transition has ended. It can either be `transitionend` or `animationend`, depending on the type of CSS rules applied. If you are only using one or the other, Vue.js can automatically detect the correct type. However, if in some cases you want to have both on the same element, for example having a CSS animation triggered by Vue, and also having a CSS transition effect on hover, you will have to explicitly declare the type you want Vue to care about:

``` js
Vue.transition('bounce', {
  // Vue will now only care about `animationend` events
  // for this transition
  type: 'animation'
})
```

### Flusso della Transizione

Quando la proprietà `show` cambia valore, Vue.js inserirà/rimuoverà l elemento `<div>` appropriatamente ed applicherà le transizioni necessarie secondo questo schema:

- Quando `show` diventa falso, Vue.js:
  1. Chiamerà l'hook `beforeLeave`;
  2. Applicherà la classe `v-leave` all elemento coinvolto per iniziare la transizione;
  3. Chiamerà l'hook `leave`;
  4. Aspetterà la fine della transizione; (per farlo ascolta l'evento `transitionend`)
  5. Rimuoverà l elemento dal DOM e rimuove la class `v-leave`;
  6. Chiamerà l'hook `afterLeave`.

- Quando `show` diventa true, Vue.js:
  1. Chiamerà l'hook `beforeEnter`;
  2. Applicherà la classe `v-enter` all elemento;
  3. Inserirà l elemento all interno del DOM;
  4. Chiamerà l'hook `enter`;
  5. Forzerà il layout CSS in modo tale da iniziare la transizione ed applicare `v-enter`, una volta iniziata la transizione rimuoverà `v-enter`;
  6. Aspetterà che la transizione finisca;
  7. Chiamerà l'hook `afterEnter`.

In aggiunta a tutto ciò, se rimuovete un elemento mentre è in fase di transizione, verrà chiamato l'hook `enterCancelled` il quale darà l'opportunità di cancellare l'azione e di ripulire l'elemento. Stessa cosa succede quando si esce dalla transizione.

Tutti gli hook che abbiamo descritto vengono sempre chiamati con `this` associato alla istanza corrente di Vue. Se l elemento che attiva la transizione è il nodo principale dell'istanza allora l'istanza stessa sarà il contesto, altrimenti il proprietrario della transizione sarà scelto come contesto.

In fine le funzioni `enter` e `leave` possono ricevere un secondo argomento come callback. Quando passate il secondo argomento significa che volete controllare come la transizione debba finire, perciò invece di aspettare l'evento `transitionend`, Vue.js  aspetterà che il tuo callout finisca la transizione. Per esempio:

``` js
enter: function (el) {
  // Niente argomento, la transizione
  // sarà determinata dall evento transitioned
}
```

vs.

``` js
enter: function (el, done) {
  // con il secondo argomento, la transizione
  // finirà solo se `done` viene chiamato.
}
```

<p class="tip">Quando ci sono più elementi in transizione assieme, Vue.js li gestirà in blocco e applicherà solo uno delle transizioni personalizzate.</p>

### Animazioni CSS

Le animazioni CSS sono applicate come le transizioni CSS, la differenza sostanziale è che `v-enter` non verrà rimosso immediatamente ma solo dopo l'evento `animationend`.

Esempio: (senza i prefissi CSS per le regole)

``` html
<span v-show="show" transition="bounce">Guardami bene!</span>
```

``` css
.bounce-transition {
  display: inline-block; /* otherwise scale animation won't work */
}
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
  <span v-show="show" transition="bounce">Guardami bene!</span>
  <br>
  <button @click="show = !show">Toggle</button>
</div>

<style>
   .bounce-transition {
     display: inline-block;
   }
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
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    50% {
      -webkit-transform: scale(1.5);
      transform: scale(1.5);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @keyframes bounce-out {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    50% {
      -webkit-transform: scale(1.5);
      transform: scale(1.5);
    }
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
  }
  @-webkit-keyframes bounce-in {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    50% {
      -webkit-transform: scale(1.5);
      transform: scale(1.5);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @-webkit-keyframes bounce-out {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    50% {
      -webkit-transform: scale(1.5);
      transform: scale(1.5);
    }
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
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

## Transizioni JavaScript

Potete anche utilizzare l'hook JavaScript senza transizioni via CSS. Quando si gestiscono le transizioni JavaScript **sono richieste le funzioni di callback sia per `enter` che per `leave`***, altrimenti le chiamate verranno fatte in modo sincrono e la transizione finirà immediatamente.

E' anche una buona idea dichiarare `css: false` in modo esplicito quando si utilizzano le transizioni JavaScript in modo tale che Vue.js possa saltare lo scan di eventuale CSS. Questo aiuta anche a prevenire eventuali interferenze con altri CSS.

L'esempio seguente è una transizione JavaScript utilizzando jQuery:

``` js
Vue.transition('fade', {
  css: false,
  enter: function (el, done) {
    // Elemento già inserito nel DOM
    // viene chiamato done, una volta finita l'animazione.
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

Ora si può utilizzare con l'attributo `transition`, senza problemi:

``` html
<p transition="fade"></p>
```

## Transizione a Fasi

E' possibile creare transizioni a fari utilizzando `transition` assieme `v-for`. Potete anche utilizzare gli attributi `stagger`, `enter-stagger` o `leave-stagger` per specificare come gestire le fasi:

``` html
<div v-for="item in list" transition="stagger" stagger="100"></div>
```

Oppure, potete sfruttare gli hook `stagger`, `enterStagger` o `leaveStagger` per un controllo migliore:

``` js
Vue.transition('stagger', {
  stagger: function (index) {
    // qui si aumenta il delay di 50ms per ogni elemento di transizione
    // impostando il delay massimo a 300ms
    return Math.min(300, index * 50)
  }
})
```

Esempio:

<iframe width="100%" height="200" style="margin-left:10px" src="http://jsfiddle.net/yyx990803/mvo99bse/embedded/result,html,js,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
