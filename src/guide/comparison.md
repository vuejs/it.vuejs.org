---
title: Confronto con altri Framework
type: guide
order: 19
---

## Angular

Ci sono alcune ragioni per le quali è preferibile utilizzare Vue al posto di Angular, anche se potrebbero non essere valide per tutti:

- Vue.js è molto più semplice di Angular, sia in termini di API che di design. Puoi imparare praticamente tutto velocemente ed essere subito produttivo.

- Vue.js è una soluzione più flessibile e meno ostinata. Questo ti permette di strutturare la tua app come vuoi tu, invece di essere costretto a fare tutto alla maniera di Angular. È solo un livello d'interfaccia quindi puoi usarlo come una leggera funzionalità addizionale delle tue pagine, anziché come una SPA (Applicazione a Pagina Singola) in piena regola. Ti lascia più spazio per integrarsi con altre librerie, lasciandoti responsabile delle decisioni architetturali. Ad esempio, il nucleo di Vue.js non contiene di base funzionalità di routing o ajax, e generalmente assume che tu stia costruendo l'applicazione utilizzando un module bundler esterno. Questa è probabilmente la distinzione più importante.

- Angular utilizza il two-way binding (legame a doppio senso) tra gli scope (ambiti). Anche Vue supporta il legame a doppio senso, ma il funzionamento predefinito è a senso unico, un flusso di dati genitore-figlio tra i componenti. Utilizzare il legame a senso unico permette di studiare un flusso di dati più agile nelle grosse applicazioni.

- Vue.js separa in maniera più netta le direttive e i componenti. Le Direttive sono pensate per incapsulare solo le manipolazioni DOM, mentre i Componenti sono delle unità autosufficienti che hanno le loro proprie viste e logiche dati. In Angular c'è molta confusione tra le due.

- Vue.js ha migliori performance ed è molto, molto più semplice da ottimizzare, perché non utilizza il dirty checking (controllo sporco). Angular rallenta molto quando ci sono molti watcher (osservatori), perché ogni qualvolta qualcosa negli ambiti cambia, tutti quegli osservatori devono essere ricontrollati. Inoltre, il digest cycle viene eseguito più volte per "stabilizzare" se qualche osservatore innesca altri aggiornamenti. Gli utenti Angular devono spesso ricorrere a teniche poco ortodosse per aggirare il suddetto ciclo, ed in alcuni casi semplicemente non c'è modo di ottimizzare un ambito con grosse quantità di osservatori. Vue.js non soffre di questo problema affatto perché utilizza un sistema di tracciamento delle dipendenze con coda asincrona - tutte le modifiche si innescano indipendentemente a meno ché non abbiano esplicite relazioni di dipendenza. L'unico accenno di ottimizzazione del quale avrai mai bisogno è il parametro `track-by` nelle liste `v-for`.

È interessante notare che ci sono abbastanza similitudini nel modo in cui Angular 2 e Vue affrontano questi problemi di Angular 1.

## React

React e Vue.js condividono una somiglianza nel fatto che entrambi forniscono componenti delle Viste reattivi e componibili. Ci sono, certamente, anche molte differenze.

Innanzitutto l'implementazione interna è fondamentalmente differente. Il render (calcolo) di React sfrutta il DOM Virtuale - una rappresentazione in memoria di come il DOM reale dovrebbe apparire. Quando uno stato cambia, React fa un completo ricalcolo del DOM Virtuale, ne confronta le differenze e quindi sistema il DOM reale.

L'approccio del DOM virtuale fornisce una maniera funzionale di descrivere la tua vista in qualsiasi punto nel tempo, che è davvero bello. A causa del fatto che non utilizza osservabili e ricalcola l'intera app ad ogni aggiornamento, la vista è per definizione assicurata essere in sincronia con i dati. Questo apre anche alla possibilità di applicazioni Javascript isomorfiche (che possono girare lato server e lato client).

Invece di un DOM virtuale, Vue.js utilizza il DOM reale come template e mantiene i riferimenti ai nodi reali per il legame dei dati. Questo limita Vue.js ad ambienti nei quali il DOM è presente. Comunque, contrariamente alla comune idea sbagliata che il DOM virtuale renda React più veloce di chiunque altro, Vue.js effettivamente surclassa React quando si tratta di aggiornamenti istantanei, e richiede praticamente nessuna ottimizzazione manuale. Con React, hai bisogno di implementare `shouldComponentUpdate` dappertutto oppure utilizzare strutture immutabili per ottenere ricalcoli pienamente ottimizzati.

In ambiente API, un problema con React (o JSX) è che la funzione di calcolo spesso coinvolge molta logica, e finisce per assomigliare più ad un pezzo di codice (quale è in effetti) più che una rappresentazione visuale dell'interfaccia. Per alcuni sviluppatori questo è un bonus, ma per figure ibride designer/sviluppatori come me, avere un template rende più semplice pensare in maniera visuale al design ed ai CSS. JSX mischiato alla logica JavaSCript rompe quel modello visuale del quale ho bisogno per mappare il codice al design. Al contrario, Vue.js paga il prezzo di un DSL (Linguaggio Specifico di Dominio) di legame dati leggero così che si abbia un template visivamente scansionabile con la logica incapsulata in filtri e direttive.

Un altro problema con React è che, a causa del fatto che gli aggiornamenti del DOM sono completamente delegati al DOM virtuale, è un po' complesso quando hai **bisogno** di controllare il DOM direttamente (anche se teoricamente puoi, se lo fai stai essenzialmente remando contro il principio della libreria stessa).

Per applicazioni che necessitano di manipolazioni DOM personalizzate ad-hoc, specialmente animazioni con particolari necessità di sincronizzazione, questa potrebbe risultare una restrizione particolarmente fastidiosa. Su questo fronte, Vue.js permette più flessibilità e ci sono [numerosi siti vincitori dei FWA/Awwwards](https://github.com/vuejs/vue/wiki/Projects-Using-Vue.js#interactive-experiences) costruiti con Vue.js.

Note addizionali:

- Il team di React ha obiettivi molto ambiziosi per rendere React un paradigma di sviluppo UI agnostico nei confronti delle piattaforme, mentre Vue è più orientato a fornire una soluzuione pragmatica per il web.

- React, a causa della sua natura funzionale, lavora molto bene con modelli di programmazione funzionali. Comunque ciò introduce anche una curva di apprendimento più elevata per sviluppatori giovani e principianti. Vue è molto più semplice da apprendere e rendere produttivi a questo proposito.

- Per grandi applicazioni, la community di React ha fatto molto in termini di soluzioni di controllo dello stato, es. Flux/Redux. Vue da solo non mira risolvere quel problema (vale lo stesso per il nucleo di React), ma i modelli di gestione dello stato possono essere facilmente adottati per un'architettura simile. Vue ha il suo unico sistema di gestione degli stati chiamato [Vuex](https://github.com/vuejs/vuex), ed è anche possibile [usare Redux con Vue](https://github.com/egoist/revue).

- L'andamento nello sviluppo su React ti spinge ad inserire tutto nel JavaScript, inclusi i tuoi CSS. Ci sono state molte soluzioni CSS-in-JS qui fuori ma più o meno tutte hanno i loro problemi. E più importante, questo diverge dall'esperienza classica di produzione di CSS e rende molto scomodo sfruttare l'esistente lavoro della comunità CSS. I [componenti su file singolo](http://vuejs.org/guide/application.html#Single_File_Components) ti forniscono CSS incapsulato nei componenti permettendoti al contempo di utilizzare il tuo pre-processore preferito.

## Ember

Ember è un framework pienamente funzionale che è strutturato per essere altamente vincolato. Fornisce molte convenzioni assodate, e una volta che familiarizzi abbastanza con loro, puoi essere molto produttivo. Comunque, questo significa anche una curva di apprendimento più elevata e ne risente la flessibilità. È un compromesso quando devi scegliere tra un framework vincolato e una libreria con una serie di strumenti svincolati che hai bisogno lavorino assieme. L'ultimo ti dà più libertà ma richiede anche che tu prenda molte più decisioni architetturali.

Detto questo, potrai avere un confronto migliore tra il nocciolo di Vue.js e il sistema di template e il livello di object model di Ember:

- Vue fornisce reattività non intrusiva su semplici, e proprietà computazionali pienamente automatiche. In Ember devi incapsulare tutto in Oggetti Ember e manualmente dichiarare le dipendenze per le proprietà computazionali.

- La sintassi di template di Vue imbriglia tutte le potenzialità delle espressioni JavaScript, mentre le espressioni di Handlebars e la sintassi degli helper è un po' limitata al confronto.

- Per quanto riguarda le performance, Vue surclassa Ember di un cospicuo margine, anche dopo l'ultimo update al motore Glimmer in Ember 2.0. Vue automatizza autonomamente gli aggiornamenti, mentre in Ember hai bisogno di eseguire manualmente i cicli d'esecuzione in situazioni critiche.

## Polymer

Polymer è un altro progetto sponsorizzato da Google ed in effetti è stato fonte di ispirazione per Vue.js stesso. I componenti di Vue.js possono essere vagamente paragonati agli elementi personalizzati di Polymer, ed entrambi forniscono uno stile di sviluppo molto simile. La più grande differenza risiede nel fatto che Polymer è costruito sulle ultime caratteristiche dei Web Component, e richiede polyfill non semplici per poter funzionare (con ridotte performance) in browser che non supportano queste funzioni nativamente. Al contrario, Vue.js funziona senza alcuna dipendenza fino ad IE9.

In più, in Polymer 1.0 il team has davvero reso il suo vincolo dei dati molto limitato, per compensare le performance. Ad esempio, l'unica espressione supportata nei teplate Polymer sono la negazione booleana e chiamate a metodi singoli. La sua implementazione di proprietà computazionali è anch'essa poco flessibile.

Concludendo, mandando in produzione, gli elementi Polyme devono essere incorporati tramite uno strumento specifico di Polymer chiamato Vulcanizer. Al confronto, i componenti su file singolo di Vue possono sfruttare tutto quello che l'ecosistema di Webpack ha da offrire, e dunque puoi facilmente utilizzare preprocessori ES6 e CSS che preferisci nei tuoi componenti.

## Riot

Riot 2.0 fornisce un modello di sviluppo a componenti molto simile (chiamato "tag" in Riot), con un'API minimale e magnificamente progettata. Penso che Vue e Riot condividano molto in filosofia di progetto. Comunque, pur essendo un po' più pesante di Riot, Vue offre importanti vantaggi su di esso:

- Vero ricalcolo condizionale (Riot calcola tutti i rami "if" e semplicemente li mostra/nasconde)
- Un router molto più potente (L'api di routing di Riot è fin troppo minimale)
- Un supporto agli strumenti più maturi (vedi webpack + vue-loader)
- Sistema di effetti e transizioni (Riot non lo ha)
- Migliori performance. (Riot in effetti usa il dirty checking al posto del virtual-dom, e quindi soffre delle stesse problematiche di performance di Angular)
