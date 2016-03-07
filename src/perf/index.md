---
title: Comparare le Prestazioni
---

## Banco prova: TodoMVC

> *Last Updated: 2014-10-12*

Stai cercando l'applicazione di prova TodoMVC? E' stata rimossa dopo una discussione con altri autori di altri framwork, abbiamo raggiunto un accordo che stabilisce che:

1. L'intenzione originale dell'applicazione di prova, e simili, era di stabilire le prestazioni del Browser piuttosto che quelle dei frameworks. Il test di routine "Attiva un'azione xxx volte in modo sincrono" è fuorviante e non riflette un utilizzo reale del framework.

2. Dato che ci sono differenze interne, ogni framework usa un diverso approccio al rendering asincrono, frameworks come Vuejs, Om o Mercury sono vantaggiati sotto questo aspetto perché parte dei calcoli viene omessa durante il loop degli eventi coinvolti oltretutto in un esempio concreto, di utilizzo in produzione, non ci sono stati differenti vantaggi.

3. In sostanza il banco prova scaturiva più discussioni controverse che confronti positivi ed ecco perché è stato rimosso, in futuro sarò lieto di rimpiazzarlo con qualcosa di più completo e che sia più dettagliato a sottolineare le differenze di prestazioni tra i vari frameworks.
