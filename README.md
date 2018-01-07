# it.vuejs.org
Il sito web è sviluppato utilizzando [hexo](http://hexo.io/). Il contenuto del sito è scritto sotto forma di Markdown ed è situato nella cartella `src`. Vuoi contribuire? Invia una pull request!

## Developing
Inizia lo sviluppo su `localhost:4000`:

```
$ npm install -g hexo-cli
$ npm install
$ hexo server
```

## Deploying
Il sito viene distribuito utilizzando le pagine GitHub, pertanto è necessario l'accesso push al repository vuejs.org per eseguire lo script di distribuzione:


`$ npm run deploy`

Se si sta lavorando su un fork e si esegue la distribuzione su un URL diverso, è necessario aggiornare di conseguenza:
url and deploy sections in` _config.yml`
src/CNAME
