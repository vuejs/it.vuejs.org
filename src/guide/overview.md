---
title: Panoramica
type: guide
order: 2
---

Vue.js (pronunciato /vjuː/, come **view**) è una libreria che si pone lo scopo di costruire interfacce web interattive. L'obbiettivo di Vue.js è quello di offire i benefici che derivano dal **vincolo di dati reattivo** e dai **componenti riutilizzabili per le viste** con delle API più semplici possibili.

Vue.js non è un framework completo - è solo improntato alla gestione dello strato delle viste. Questo d'altronde lo rende facilmente integrabile con altri framework o librerie già esistenti. In altre parole, quanto utilizzato con altri strumenti adeguati Vue.js riesce ad aiutarvi a creare Applicazioni Web a Pagina Singola sofisticate e complesse.

Se hai esperienza nello sviluppo di interfacce web e vuoi capire meglio come Vue.js si differenzi da altre librerie/framework puoi controllare la [Comparazione con gli Altri Framework](comparison.html); Se sei più interessato a capire come Vue.js si approcci allo sviluppo di Applicazioni Scalabili allora controlla la sezione [Costruire Applicazioni Scalabili](application.html).

## Vincolo di Dati Reattivo

Il core di Vue.js si basa sul Vincolo di Dati Reattivo, tale vincolo rende estremamente semplice mantenere i dati all'interno del DOM sincronizzati a dovere. Quanto si usa jQuery per manipolare il DOM, tramite QueryDOM, il codice che si scrive il più delle volte diventa imperativo, ripetitivo e soggetto ad errori. Vue.js sfrutta il concetto delle **viste manipolate dai dati**. In parole semplici significa che sfruttiamo delle parole chiavi all'interno del codice HTML per "vincolare" il DOM ai dati sottostanti. Una volta che il vincolo è creato, il DOM verrà mantenuto in sincronizzazione con i dati. Ogni volta che modificherai i dati il DOM si aggiornerà di conseguenza, in automatico. Questo rendere il codice molto più semplice da scrivere, leggere e mantenere.

![MVVM](/images/mvvm.png)

Uno degli esempi più semplici:

``` html
<!-- La nostra vista, il DOM -->
<div id="example-1">
  Ciao {{ name }}!
</div>
```

``` js
// Il nostro Modello
var exampleData = {
  name: 'Vue.js'
}

// Creiamo un istanza Vue or, ViewModel,
// che collega la Vista al Modello
var exampleVM = new Vue({
  el: '#example-1',
  data: exampleData
})
```

Risultato:
{% raw %}
<div id="example-1" class="demo">Ciao {{ name }}!</div>
<script>
var exampleData = {
  name: 'Vue.js'
}
var exampleVM = new Vue({
  el: '#example-1',
  data: exampleData
})
</script>
{% endraw %}

Questo modo di operare sembra molto simili al rendering di template, ma Vue.js ha fatto tanto lavoro dietro le quinte. I dati e le viste, il DOM, ora sono collegati, ed il tutto è ora **reattivo**. Come lo sappiamo? Potete provare ad aprire la Console degli Sviluppatori del vostro browser e modificare la variabile `exampleData.name`. Se tutto è fatto a dovere dovreste vedere l'esempio sopra aggiornarsi di conseguenza alle vostre modifiche.

Da notare come non abbiamo dovuto scrivere nessun tipo di logica per manipolare il DOM: il template HTML, arricchito con i vincoli, è una mappa dichiarativa dello stato dei dati sottostanti, i quali sono solo degli oggetti in JavaScript. Le nostre viste sono interamente guidate dai dati.

Vediamo un secondo esemppio:

``` html
<div id="example-2">
  <p v-if="greeting">Ciao!</p>
</div>
```

``` js
var exampleVM2 = new Vue({
  el: '#example-2',
  data: {
    greeting: true
  }
})
```

{% raw %}
<div id="example-2" class="demo">
  <span v-if="greeting">Ciao!</span>
</div>
<script>
var exampleVM2 = new Vue({
  el: '#example-2',
  data: {
    greeting: true
  }
})
</script>
{% endraw %}

In questo esempio abbiamo visto qualcosa di relativamente nuovo. L'attributo `v-if` che vedete è chiamato **Direttiva**. Le Direttive hanno il prefisso `v-` per indicare che sono attributi speciali che Vue.js fornisce , avrete già capito perchè, per applicare condizioni particolari al DOM. Provate voi stessi, come prima, cambiare il valore di `exampleVM2.greeting` a `false` tramite la console. Se tutto è fatto in maniera corretta dovreste vedere il messaggio "Ciao!" scomparire.

Il secondo esempio è una dimostrazione di come non solo possiamo vincolare il DOM con i dati, ma possiamo anche vincolare la **structure** del DOM ai dati. Vue.js fornisce anche un potente sistema di effetti transizioni applicabili quando si aggiungono/rimuovono elementi dal DOM.

Ci sono molte altre direttive, ognuna ha delle caratteristiche speciali. Per esempio la direttiva `v-for` serve a visualizzare i dati di un Array, oppure la direttiva `v-bind` per vincolare attributi HTML. Discuteremo delle direttive in modo approvondito in un secondo momento più avanti.

## Sistema a Componenti

Il Sistema a Componenti è un altro concetto fondamentale in Vue.js, perchè è una astrazione che ci aiuta a construire applicazioni su larga scala composte da piccoli componenti, isolati e riutilizzabili. Se ci pensiamo, quasi qualsiai interfaccia si può pensare come un albero di componenti:

![Albero a Componenti](/images/components.png)

Difatti qualsiasi tipo di applicazione costruita con Vue.js verrà formata esattamente come visto - un albero di componenti. Parleremo più nel dettaglio dei componenti durante il corso di questa guida ma per ora ecco un esempio molto astratto di come assomigli un interfaccia costruita con i componenti:

``` html
<div id="app">
  <app-nav></app-nav>
  <app-view>
    <app-sidebar></app-sidebar>
    <app-content></app-content>
  </app-view>
</div>
```

Come avrai notato i componenti di Vue.js sono molto simili ai **Componenti Personalizzati** che fanno parte della [Specifica sui Componenti Web](http://www.w3.org/wiki/WebComponents/). Difatti, la sintassi dei componenti Vue.js è fatta ad immagine e somiglianza di quelle specifiche. Per esempio implementano le così detta [Slot API](https://github.com/w3c/webcomponents/blob/gh-pages/proposals/Slots-Proposal.md) e c'è l'attributo speciale `is` però ci sono alcune differenze sostanziali:

1. La specifica dei Componenti web è ancora un lavoro non finito, e non tutti i browser implementano tale specifica. Vue.js invece non ha bisogno di nessun supporto per far funzionare i Componenti, e vengono ben interpretati da tutti i browser (IE9 e maggiori versioni). Quando serve, i componenti Vue.js possono essere anche incapsulati dentro ad elementi nativi.

2. I componenti Vue.js forniscono una caratteristiche importanti che non si trovano nei classici componenti, la più importanti sono il flusso dei dati tra vari componenti, comunicazione tra componenti totalmente personalizzata, transizioni ad effetto per il cambio di componenti.

Il Sistema a Componenti è un aspetto fondamentale quando si vogliono costruire Applicazioni su Larga scale con Vue.js. Inoltre l'ecostistema di Vue.js fornisce vari strumenti di supporto, librerie, che possono essere messe assieme per creare un ecosistema molto più simile ad un framework completo.
