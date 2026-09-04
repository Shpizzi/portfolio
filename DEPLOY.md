# Deploy su Plesk — luca.scalvinoni.com

Il sito è un'applicazione TanStack Start con il prerender attivo su tutte le rotte:
la build produce dodici pagine HTML complete più i bundle JS/CSS. Non serve Node,
PHP o un database sul server: Plesk deve solo servire dei file statici.

Il repository ha due branch con ruoli diversi.

| Branch | Contenuto | Chi lo usa |
| --- | --- | --- |
| `main` | sorgenti (`src/`, config, script) | Lovable, sviluppo locale |
| `production` | solo `public-dist`, cioè l'HTML già buildato | Plesk |

`main` non viene mai riscritto, quindi la cronologia che Lovable sincronizza resta intatta.

## 1. Backup del WordPress attuale

Da Plesk, sul sottodominio `luca.scalvinoni.com`:

1. **Websites & Domains → luca.scalvinoni.com → Backup & Restore → Back Up**,
   selezionando *Configuration and content*. Scarica il file una volta pronto.
2. Annota il database: aprilo da **Databases**, oppure leggi `DB_NAME`, `DB_USER`
   in `wp-config.php` dentro la document root del sottodominio.

Via SSH lo stesso risultato:

```bash
cd /var/www/vhosts/scalvinoni.com
tar czf ~/backup-luca-$(date +%F).tar.gz luca.scalvinoni.com/
mysqldump -u UTENTE -p NOME_DB > ~/backup-luca-db-$(date +%F).sql
```

Tieni il database in piedi ancora qualche settimana dopo il passaggio: costa nulla
e ti evita di scoprire troppo tardi che serviva.

## 2. Svuotare la document root

Plesk copia i file del repository sopra a quelli esistenti ma non rimuove quelli
che non gli appartengono: i residui di WordPress resterebbero raggiungibili.
Da **File Manager**, dentro la document root del sottodominio, elimina tutto —
`wp-admin`, `wp-content`, `wp-includes`, `wp-*.php`, `.htaccess`, `index.php`.
Lascia solo eventuali cartelle di sistema Plesk come `.well-known`.

Nelle **Hosting Settings** del sottodominio puoi anche togliere il supporto PHP:
il sito non ne ha bisogno e riduce la superficie esposta.

## 3. Collegare il repository

**Websites & Domains → luca.scalvinoni.com → Git → Add Repository → Remote Git repository**

- Repository URL: `https://github.com/Shpizzi/portfolio.git`
- Branch: `production`
- Deployment path: la document root del sottodominio (quella che Plesk propone di default)
- Deployment mode: `Automatic`

Se il repository su GitHub è privato, Plesk mostra una chiave pubblica da incollare
in **Settings → Deploy keys** del repo. Per il deploy automatico, copia il webhook
che Plesk espone e aggiungilo in **Settings → Webhooks** su GitHub.

## 4. Pubblicare

Dal Mac, dentro la cartella del progetto:

```bash
./scripts/deploy.sh
```

Lo script installa le dipendenze, builda, aggiunge `.htaccess` e `sitemap.xml`,
poi aggiorna il branch `production` e lo pusha. Plesk fa il resto.

Per vedere il risultato prima di pubblicare:

```bash
./scripts/build-static.sh
npx serve public-dist
```

## Cosa fa il .htaccess

Sta in `deploy/.htaccess` e viene copiato nella build a ogni deploy.

- redirect a HTTPS, riconoscendo anche il proxy nginx che Plesk mette davanti ad Apache
- `/pagina/index.html` viene rediretto a `/pagina/`, così gli URL restano puliti
- `ErrorDocument 404 /index.html`: le rotte inesistenti restituiscono stato 404 e
  il router client mostra la pagina 404 del sito
- cache lunga sui bundle con hash nel nome, HTML sempre rivalidato, così un deploy
  si vede immediatamente
- compressione e header di sicurezza di base

## Rotte pubblicate

`/`, `/projects`, `/updates`, `/tools`, più una pagina per ogni progetto visibile e una
per ogni strumento. L'elenco `pages` di `vite.config.ts` legge entrambi da
`src/data/site.ts`, quindi non va aggiornato a mano: basta aggiungere la voce ai dati.
Uno strumento nuovo vuole anche il suo componente nella mappa in `src/routes/tools.$slug.tsx`.

Un progetto con `hidden: true` sparisce dall'elenco, dal prerender e dalla sitemap, e la
sua pagina risponde 404. I dati restano nel repository. **Al momento sono nascosti tutti**:
per rimetterne uno online togli la sua riga `hidden: true` e ripubblica.
