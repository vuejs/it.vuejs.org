---
title: Confronto con altri Framework
type: guide
order: 19
---

## Angular

Ci sono alcune ragioni per le quali è preferibile utilizzare Vue al posto di Angular, anche se non si There are a few reasons to use Vue over Angular, anche se potrebbero non essere valide per tutti:

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

- React, a causa della sua natura funzionale, lavora molto bene con modelli di programmazione funzionali. Comunque ciò introduce anche un a curva di apprendimento più elevata per sviluppatori giovani e principianti. Vue è molto più semplice da apprendere e rendere produttivi a questo proposito.

- Per grandi applicazioni, la community di React ha fatto molto in termini di soluzioni di controllo dello stato, es. Flux/Redux. Vue da solo non mira risolvere quel problema (vale lo stesso per il nucleo di React), ma i modelli di gestione dello stato possono essere facilmente adottati per un'architettura simile. Ho visto utenti utilizzare Redux con Vue e similmente ingegneri ad Optimizely hanno usato NuclearJS (il loro dialetto Flux) con Vue stesso.

- L'andamento nello sviluppo su React ti spinge ad inserire tutto nel JavaScript, inclusi i tuoi CSS. Ci sono state molte soluzioni CSS-in-JS qui fuori ma più o meno tutte hanno i loro problemi. E più importante, questo diverge dall'esperienza classica di produzione di CSS e rende molto scomodo sfruttare l'esistente lavoro della comunità CSS. I [componenti su file singolo](http://vuejs.org/guide/application.html#Single_File_Components) ti forniscono CSS incapsulato nei componenti permettendoti al contempo di utilizzare il tuo pre-processore preferito.

## Ember

Ember is a full-featured framework that is designed to be highly opinionated. It provides a lot of established conventions, and once you are familiar enough with them, it can make you very productive. However, it also means the learning curve is high and the flexibility suffers. It's a trade-off when you try to pick between an opinionated framework and a library with a loosely coupled set of tools that work together. The latter gives you more freedom but also requires you to make more architectural decisions.

That said, it would probably make a better comparison between Vue.js core and Ember's templating and object model layer:

- Vue provides unobtrusive reactivity on plain JavaScript objects, and fully automatic computed properties. In Ember you need to wrap everything in Ember Objects and manually declare dependencies for computed properties.

- Vue's template syntax harnesses the full power of JavaScript expressions, while Handlebars' expression and helper syntax is quite limited in comparison.

- Performance wise, Vue outperforms Ember by a fair margin, even after the latest Glimmer engine update in Ember 2.0. Vue automatically batches updates, while in Ember you need to manually manage run loops in performance-critical situations.

## Polymer

Polymer is yet another Google-sponsored project and in fact was a source of inspiration for Vue.js as well. Vue.js' components can be loosely compared to Polymer's custom elements, and both provide a very similar development style. The biggest difference is that Polymer is built upon the latest Web Components features, and requires non-trivial polyfills to work (with degraded performance) in browsers that don't support those features natively. In contrast, Vue.js works without any dependencies down to IE9.

Also, in Polymer 1.0 the team has really made its data-binding system very limited in order to compensate for the performance. For example, the only expressions supported in Polymer templates are the boolean negation and single method calls. Its computed property implementation is also not very flexible.

Finally, when deploying to production, Polymer elements need to be bundled via a Polymer-specific tool called vulcanizer. In comparison, single file Vue components can leverage everything the Webpack ecosystem has to offer, and thus you can easily use ES6 and any CSS pre-processors you want in your Vue components.

## Riot

Riot 2.0 provides a similar component-based development model (which is called a "tag" in Riot), with a minimal and beautifully designed API. I think Riot and Vue share a lot in design philosophies. However, despite being a bit heavier than Riot, Vue does offer some significant advantages over Riot:

- True conditional rendering (Riot renders all if branches and simply show/hide them)
- A far-more powerful router (Riot’s routing API is just way too minimal)
- More mature tooling support (see webpack + vue-loader)
- Transition effect system (Riot has none)
- Better performance. (Riot in fact uses dirty checking rather than a virtual-dom, and thus suffers from the same performance issues with Angular.)
