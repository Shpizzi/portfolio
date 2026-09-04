#!/usr/bin/env bash
# Builda il sito e prepara la cartella statica pronta per Plesk in ./public-dist
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

SITE_URL="${SITE_URL:-$(cat .site-url 2>/dev/null || true)}"

echo "==> Installazione dipendenze"
npm ci 2>/dev/null || npm install --no-audit --no-fund

echo "==> Build"
rm -rf .output public-dist
npm run build

if [ ! -f .output/public/index.html ]; then
  echo "ERRORE: build senza output prerenderizzato in .output/public" >&2
  exit 1
fi

cp -R .output/public public-dist
cp deploy/.htaccess public-dist/.htaccess

if [ -n "$SITE_URL" ]; then
  echo "==> Sitemap per $SITE_URL"
  BASE="${SITE_URL%/}"
  {
    echo '<?xml version="1.0" encoding="UTF-8"?>'
    echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
    (cd public-dist && find . -name index.html) | sed 's|^\./||; s|index\.html$||' | sort | while read -r p; do
      printf '  <url><loc>%s/%s</loc></url>\n' "$BASE" "$p"
    done
    echo '</urlset>'
  } > public-dist/sitemap.xml
  printf '\nSitemap: %s/sitemap.xml\n' "$BASE" >> public-dist/robots.txt
else
  echo "==> SITE_URL non impostato: sitemap.xml saltata (scrivi il dominio in .site-url)"
fi

echo "==> Pronto: public-dist ($(du -sh public-dist | cut -f1), $(find public-dist -name '*.html' | wc -l | tr -d ' ') pagine)"
