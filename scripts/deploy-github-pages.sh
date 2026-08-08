#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DIST="$ROOT/dist/portfolio/browser"
REPO_URL="${GITHUB_PAGES_REPO:-git@github.com:javidmehran/javidmehran.github.io.git}"
TMP="$(mktemp -d)"

cleanup() {
  rm -rf "$TMP"
}
trap cleanup EXIT

if [[ ! -d "$DIST" ]]; then
  echo "Build output not found at $DIST"
  echo "Run: npm run build:gh"
  exit 1
fi

# SPA fallback for GitHub Pages
cp "$DIST/index.html" "$DIST/404.html"
touch "$DIST/.nojekyll"

git clone --depth 1 "$REPO_URL" "$TMP/site"
rsync -a --delete \
  --exclude '.git' \
  "$DIST/" "$TMP/site/"

cd "$TMP/site"
git add -A

if git diff --cached --quiet; then
  echo "No changes to deploy."
  exit 0
fi

git -c user.name='portfolio-deploy' -c user.email='portfolio-deploy@users.noreply.github.com' \
  commit -m "Deploy portfolio site"

git push origin HEAD:main
echo "Deployed to $REPO_URL"
