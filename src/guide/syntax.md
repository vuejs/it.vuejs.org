---
title: Sintassi del Vincolo dei Dati
type: guide
order: 4
---

Vue.js implementa un sistema di template basato sul DOM della pagina HTML. Questo significa chhe tutti i template Vue.js sono visti come delle porzioni di DOM con qualche funzionalità in più. Tenete a mente che questo rende i template di Vue.js molto differenti dai template su unica stringa.

## Interpolazioni

### Testo

La più base delle interpolazioni è quella che utilizza la sintassi "Mustache", o a Baffo, (le doppie parentesi graffe assomigliano a dei baffi):

``` html
<span>Messaggio: {{ msg }}</span>
```

Le parentesi graffe verranno rimpiazzate dal valore della variable `msg`, più propriamente andrà a sostituire la proprietà dell'oggetto `data` di Vue. Essendo reattiva ogni cambiamento a `msg` verrà riflettuto sulla vista

Puoi anche effettuare un interpolazione unica omettendo il sistema di sincronizzazione:

``` html
<span>Questo messaggio non cambierà più: {{* msg }}</span>
```

### HTML Puro

Le doppie parentesi graffe interpretano i dati come testo, non come HTML. Per ottenere un interpretazione HTML pura bisogna usare tre parentesi graffe:

``` html
<div>{{{ raw_html }}}</div>
```

Il contenuto verrà inserito come HTML, I vincoli con i dati verranno ignorati. Se questo sistema inizia a diventare ripetitivo puoi sempre fare uso dei [Parziali](/api/#partial).

<p class="tip">Attenzione, fare il rendering dinamico di HTML sulla tua applicazione può essere pericolo in quanto può scatenare [Attacchi XSS](https://en.wikipedia.org/wiki/Cross-site_scripting). Usate questa procedura se e soltanto se avete la certezza sicura di dove provenga l'HTML che volete interpretare e **mai** renderizzare HTML generato dagli utenti.</p>

### Attributi

Le parentesi graffe possono essere usate anche negli attributi dello specifico elemento HTML:

``` html
<div id="item-{{ id }}"></div>
```

Da notare che l'interpolazione degli attributi è disabilitata neglle specifiche direttive oppure negli attributi personali di Vue.js. Non preoccupatevi perchè Vue.js vi allerterà qualora utilizziate male le parentesi graffe.

## Espressioni Vincolanti

Il testo all'interno delle doppie parentesi graffe viene chiamato **espressione vincolante**. In Vue.js, un espressione vincolante consiste in una singola espressione JavaScript seguita, molte volta, da uno o più filtri dedicati.

### Espressioni in JavaScript

Fin'ora abbiamo solo visto come vegono gestite le proprità dell'oggetto data nel nostro template HTML. Vue.js può anche interpretare complesse espressioni JavaScript all'interno delle parentesi graffe:

``` html
{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ message.split('').reverse().join('') }}
```

Queste espressioni vengono valutate nell'ambito di chi, in quel momento, detiene l'istanza Vue utilizzata. Questo sistema ha una sola restrizione, ogni doppia graffa può contenere **una singola espressione** perciò i seguenti esempi **NON** funzioneranno:

``` html
<!-- Questa, in particolare, non è un espressione: -->
{{ var a = 1 }}

<!-- Costrutti di controllo non funzionano: -->
{{ if (ok) { return message } }}
```

### Filtri

Vue.js permette di inserire dei "filtri" opzionali alla fine di un espressione tra parentesi graffe, tutti i filtri sono suddivisi da una `pipe`:

``` html
{{ message | capitalize }}
```

In questo caso stiamo "accodando" (piping) il risultato della espressione di sinistra, ovvero il valore della proprietà `message`, alla parte di espressione dopo la `pipe` che, in questo caso, è il funzione interna `capitalize`. Vue.js fornisce una serie di filtri integrati già pronti all'utilizzo, successivamente vedremo come scrivere filtri personalizzati.

Da notare che la `pipe` non fa parte della sintassi generale di JavaScript, difatti non può essere mescolata con altre espressioni ma solo usata come conflusso di dati tra la parte sinistra della pipe e la parte destra dell'espressione.

I filtri possono essere concatenati:

``` html
{{ message | filterA | filterB }}
```

Inoltre possono ricevere parametri come argomenti

``` html
{{ message | filterA 'arg1' arg2 }}
```

La funzione del filtro in se riceverà sempre il risultato dell'espressione a sinistra della pipe come primo argomento. Il resto degli argomenti vengono presi come vendono scritti, i valori circondati da apici verranno interpretati come stringhe, gli altri sempre come espressioni. Nell'esempio sopra la stringa `'arg1'` verrà passata come secondo parametro della funzione del filtro, invece il secondo parametro `arg2` verra valutato come risultato di un espressione e poi passato alla funzione del filtro.

## Direttive

Le direttive sono attributi speciali che hanno `v-` come prefisso. Il contenuto delle direttive dev'essere sempre sottoforma di **espressione vincolante**, perciò si possono sfruttare tutte le regole dei filtri ed espressioni viste fin'ora. Il compito primario di una direttiva è quella di applicare, in modo reattivo, un comportamento speciale al DOM quando l'espressione della direttiva cambia.
Rivediamo l'esempio dell'introduzione:

``` html
<p v-if="greeting">Ciao!</p>
```

In questo caso, la direttiva `v-if` rimuoverà l'intero elemento del DOM `<p>` se l'espressione `greeting` risulta non veritiera.

### Argomenti

Alcune direttive possono ricevete degli "argomenti", separati da un `:` dopo il nome della direttiva stessa. Per esempio `v-bind` può essere utilizzato per aggiornare in modo reattivo un singolo attributo HTML:

``` html
<a v-bind:href="url"></a>
```

In questo caso `href` è l'argomento, che impone a `v-bind` di legare l'attributo concreto `href` dello specifico tag HTML al valore dell'espressione che ne risulta da `url`. Sicuramente avrete notato che la stesso identico risultato si può ottenre con l'intrepolazione degli attributi, nello specifico si poteva scrivere `{% raw %}href="{{url}}"{% endraw %}`: e avreste ottenuto lo stesso risultato, correttamente; difatti l'inrepolazione degli attributi viene "tradotta" in `v-bind` internamente da Vue.js.

Un altro esempio è la direttiva `v-on`, la quale ascolta per eventi legati al DOM:

``` html
<a v-on:click="doSomething">
```

In questo caso l'argomento principale è l'evento da ascoltare, il click, parleremo più in dettagli di come gestire gli eventi.

### Modificatori

I modificatori sono suffissi speciali, separati da un punto, che indica in che modo particolare la direttiva debba legarsi. Per esempio, il modificatore `.literal` impone alla direttiva di intrpretare il valore della suo attributo come una stringa piuttosto che come un espressione:

``` html
<a v-bind:href.literal="/a/b/c"></a>
```

Ovviamente questo esempio sembra fuorviante perchè potremmo fare benissimo `href="/a/b/c"` invece di usare una direttiva. Abbiamo usato questo esempio solo per farvi vedere la sintassi, successivamente vedremo degli usi più pratici.

## Scorciatoie

Il prefisso `v-` è prettamente utilizza per marcare tutti gli attributi specifici di Vue.js. E' molto utile quando Vue.js applica comportamenti dinamici a del markup giù esistente, ma può sembrare prolisso quando si inizia ad utilizzare molto spesso. Allo stesso tempo il prefisso `v-` diventa sempre meno importante quando si costruisco applicazioni quasi interamente con Vue.js. Ecco perchè Vue.js offre delle interessanti ed utili scorciatoie per due delle direttive più utilizzate `v-bind` e `v-on`:

### Scorciatoia per `v-bind`

``` html
<!-- Sintassi completa -->
<a v-bind:href="url"></a>

<!-- Scorciatoia -->
<a :href="url"></a>

or

<!-- Sintassi completa -->
<button v-bind:disabled="someDynamicCondition">Button</button>

<!-- Scorciatoia -->
<button :disabled="someDynamicCondition">Button</button>
```


### Scorciatoia per `v-on`

``` html
<!-- Sintassi completa -->
<a v-on:click="doSomething"></a>

<!-- Scorciatoia -->
<a @click="doSomething"></a>
```

Queste scorciatoie possono sembrare differenti, ed invalide, rispetto al markup HTML standard, ma tutti i browsers che supportano Vue.js possono intrpretarle senza problemi e soprattutto non appariranno nel markup renderizzato all'utente finale. Le scorciatoie sono facoltative, ma molto consigliate e imparerete ad apprezzarle più avanti durante questa guida.
