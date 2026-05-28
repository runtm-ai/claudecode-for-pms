#!/usr/bin/env bash
# Build and serve the Next.js static export for the live preview.
#
# Wire this as the template's start command on runtm so the preview
# shows the built site instead of a directory listing of the repo root.
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SITE_DIR="$REPO_ROOT/site"
PORT="${PORT:-3000}"
LOG="/tmp/server.log"

if ! command -v node >/dev/null 2>&1; then
  echo "Installing Node.js 20..." | tee -a "$LOG"
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - >>"$LOG" 2>&1
  sudo apt-get install -y nodejs >>"$LOG" 2>&1
fi

cd "$SITE_DIR"

if [ ! -d node_modules ]; then
  echo "Installing dependencies..." | tee -a "$LOG"
  npm install >>"$LOG" 2>&1
fi

echo "Building site..." | tee -a "$LOG"
npm run build >>"$LOG" 2>&1

pkill -f "http.server $PORT" 2>/dev/null || true

echo "Serving $SITE_DIR/out on port $PORT..." | tee -a "$LOG"
exec python3 -m http.server "$PORT" --bind 0.0.0.0 --directory "$SITE_DIR/out"
