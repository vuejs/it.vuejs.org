# it.vuejs.org

Il sito web è sviluppato utilizzando [hexo](http://hexo.io/). Il contenuto del sito è scritto sotto forma di Markdown ed è situato nella cartella `src`. Vuoi contribuire? Invia una pull request!

## Sviluppo

``` bash
$ npm install
$ npm start # dev server at http://localhost:4000
```

## Deploy

Il sito viene pubblicato utilizzando GitHub Pages, pertanto è necessario l'accesso push al repository it.vuejs.org per eseguire lo script di deploy:

``` bash
$ npm run deploy
```

Se si sta lavorando su un fork e si esegue la pubblicazione su un URL diverso, è necessario aggiornare di conseguenza:

- `url` and `deploy` sections in `_config.yml`
- `src/CNAME`

### Vuoi aiutare con la traduzione?

Se ti senti confidente a procedere con la traduzione da solo, puoi creare un fork del repository, assieme a una issue "work in progress" per informare gli altri di cosa ti vuoi occupare e procedere con la traduzione.

Grazie mille ;)
