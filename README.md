# it.vuejs.org

Il sito web è sviluppato utilizzando [hexo](http://hexo.io/). Il contenuto del sito è scritto sotto forma di Markdown ed è situato nella cartella `src`. Vuoi contribuire? Invia una pull request

## Sviluppo

``` bash
$ npm install
$ npm start # dev server at http://localhost:4000
```

## Distribuzione

Il sito viene distribuito utilizzando le pagine GitHub, pertanto è necessario l'accesso push al repository it.vuejs.org per eseguire lo script di distribuzione:

``` bash
$ npm run deploy
```

Se si sta lavorando su un fork e si esegue la distribuzione su un URL diverso, è necessario aggiornare di conseguenza:

- `url` and `deploy` sections in `_config.yml`
- `src/CNAME`

### Vuoi aiutare con la traduzione?

Se ti senti a posto con la traduzione di qualche tipo da solo, puoi dare un fork al repository, creare un problema "work in progress" per informare gli altri che stai facendo la traduzione e andare a farlo.

Grazie mille ;)
