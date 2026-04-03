#!/bin/bash
# ─────────────────────────────────────────────────────────────────────────────
# fix-git.sh — ลบ node_modules ออกจาก git tracking + push
# รันครั้งเดียวในโฟลเดอร์ jagota-ui-foundation
# ─────────────────────────────────────────────────────────────────────────────

set -e

echo "🔧 Fixing git tracking..."
echo ""

# ── 1. Untrack node_modules (ไม่ลบไฟล์จริง) ──────────────────────────────
echo "1️⃣  Removing node_modules from git index..."
git rm -r --cached node_modules 2>/dev/null && echo "  ✅ node_modules untracked" || echo "  ℹ️  node_modules not tracked (already clean)"

# ── 2. Untrack .DS_Store ──────────────────────────────────────────────────
echo ""
echo "2️⃣  Removing .DS_Store from git index..."
git rm --cached .DS_Store 2>/dev/null && echo "  ✅ .DS_Store untracked" || echo "  ℹ️  .DS_Store not tracked (already clean)"

# ── 3. Stage all fixes (.gitignore + package.json updated) ───────────────
echo ""
echo "3️⃣  Staging updated files..."
git add .gitignore package.json README.md
echo "  ✅ Files staged"

# ── 4. Commit ────────────────────────────────────────────────────────────
echo ""
echo "4️⃣  Committing..."
git commit -m "fix: remove node_modules from tracking, fix .gitignore, update repo URL"
echo "  ✅ Committed"

# ── 5. Push ──────────────────────────────────────────────────────────────
echo ""
echo "5️⃣  Pushing to GitHub..."
git push
echo "  ✅ Pushed!"

# ── Done ─────────────────────────────────────────────────────────────────
echo ""
echo "================================"
echo "✅ Done! Repo is clean."
echo ""
echo "📦 ทดสอบ install ใน project อื่นด้วย:"
echo "   npm install github:moofats48-cpu/JAGOTA-UI-Library"
echo ""
