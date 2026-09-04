#!/usr/bin/env bash
# Builda e pubblica il sito statico sul branch "production", quello che Plesk scarica.
# Il branch main (sorgenti) non viene mai riscritto.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

BRANCH="${DEPLOY_BRANCH:-production}"
REMOTE="${DEPLOY_REMOTE:-origin}"

if [ -n "$(git status --porcelain -- ':!public-dist')" ]; then
  echo "Ci sono modifiche non committate sui sorgenti. Committa prima di fare deploy." >&2
  exit 1
fi

bash scripts/build-static.sh

SRC_SHA="$(git rev-parse --short HEAD)"
WORKTREE="$(mktemp -d)"
trap 'git worktree remove --force "$WORKTREE" 2>/dev/null || true; rm -rf "$WORKTREE"' EXIT

if git show-ref --verify --quiet "refs/heads/$BRANCH"; then
  git worktree add "$WORKTREE" "$BRANCH"
else
  git worktree add --detach "$WORKTREE"
  git -C "$WORKTREE" checkout --orphan "$BRANCH"
  git -C "$WORKTREE" rm -rf . >/dev/null 2>&1 || true
fi

find "$WORKTREE" -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +
cp -R public-dist/. "$WORKTREE"/

git -C "$WORKTREE" add -A
if git -C "$WORKTREE" diff --cached --quiet; then
  echo "Nessuna modifica da pubblicare."
else
  git -C "$WORKTREE" commit -m "build da $SRC_SHA"
  git -C "$WORKTREE" push "$REMOTE" "$BRANCH"
  echo "Pubblicato su $REMOTE/$BRANCH. Ora fai Pull su Plesk (o attendi il webhook)."
fi
