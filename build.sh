#!/bin/bash
# ─────────────────────────────────────────────────────────────────────────────
# @jagota/ui — Build Script
# รันที่เครื่อง Developer เพื่อ build library และ push ขึ้น GitHub
# ─────────────────────────────────────────────────────────────────────────────

set -e  # หยุดทันทีถ้า error

echo "📦 @jagota/ui — Build Started"
echo "================================"

# ── 1. Install dependencies ──────────────────────────────────────────────────
echo ""
echo "1️⃣  Installing dependencies..."
npm install

# ── 2. Type check ────────────────────────────────────────────────────────────
echo ""
echo "2️⃣  TypeScript type check..."
npm run typecheck

# ── 3. Build library ─────────────────────────────────────────────────────────
echo ""
echo "3️⃣  Building library (ESM + CJS + .d.ts)..."
npx vite build

# ── 4. Verify output ─────────────────────────────────────────────────────────
echo ""
echo "4️⃣  Verifying output files..."

REQUIRED_FILES=(
  "dist/index.js"
  "dist/index.cjs"
  "dist/index.d.ts"
  "dist/styles/foundation.css"
)

ALL_OK=true
for f in "${REQUIRED_FILES[@]}"; do
  if [ -f "$f" ]; then
    SIZE=$(du -h "$f" | cut -f1)
    echo "  ✅ $f ($SIZE)"
  else
    echo "  ❌ MISSING: $f"
    ALL_OK=false
  fi
done

if [ "$ALL_OK" = false ]; then
  echo ""
  echo "❌ Build failed — some output files are missing"
  exit 1
fi

# ── 5. Summary ───────────────────────────────────────────────────────────────
echo ""
echo "================================"
echo "✅ Build completed successfully!"
echo ""
echo "📁 Output:"
ls -lh dist/
echo ""
echo "🚀 Next step:"
echo "   git add -A && git commit -m 'build: v1.0.0 initial release'"
echo "   git push origin main"
echo ""
echo "📦 Install from GitHub:"
echo "   npm install github:jagota-brother/jagota-ui"
echo ""
