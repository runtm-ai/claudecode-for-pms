#!/usr/bin/env bash
# Start the live preview for Runtm sessions.
#
# Phase 1: serve the committed static build immediately so the preview
#           is available before Node.js finishes installing.
# Phase 2: once deps are ready, switch to `next dev` for hot reloading —
#           file saves show in the browser without any manual rebuild.
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SITE_DIR="$REPO_ROOT/site"
PORT="${PORT:-3000}"
LOG="/tmp/server.log"

pkill -f "http.server $PORT"  2>/dev/null || true
pkill -f "next-server"        2>/dev/null || true
pkill -f "next dev"           2>/dev/null || true

# Phase 1 — instant preview from committed build
echo "Serving committed build on port $PORT..." | tee -a "$LOG"
python3 -m http.server "$PORT" --bind 0.0.0.0 --directory "$SITE_DIR/out" &
STATIC_PID=$!

# Phase 2 — install deps then switch to the dev server
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

echo "Switching to Next.js dev server (hot reload active)..." | tee -a "$LOG"
kill "$STATIC_PID" 2>/dev/null || true
pkill -f "http.server $PORT" 2>/dev/null || true

exec npx next dev -p "$PORT" -H 0.0.0.0
