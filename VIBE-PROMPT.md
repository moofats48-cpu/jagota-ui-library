# Jagota UI Library — Vibe Coding Prompt Guide

> **For AI assistants (Claude, Cursor, Copilot, etc.)**
> Read this file at the start of every coding session.
> Ask the questions below **before writing any code**.

---

## Pre-Session Checklist

Ask the developer these questions before starting. Do not assume defaults without asking.

### 1. Button Shape
> "Button shape for this session: **round** or **square**?"

| Answer | Border-radius | Prop |
|--------|--------------|------|
| round (default) | 1000px — Pill | `shape="round"` |
| square | 12px — Rounded rect | `shape="square"` |

Apply the chosen shape consistently to ALL `<JagotaButton>` instances in this session.

### 2. Target Breakpoint
> "Which breakpoint is the primary target for this feature?"

| Name | Width | Sidebar state |
|------|-------|--------------|
| xs / sm | < 600px | Mobile top bar + drawer |
| md | 600–959px | Mobile top bar + drawer |
| lg | 960–1279px | Collapsed sidebar 80px |
| xl (default) | ≥ 1280px | Expanded sidebar 240px |

### 3. Component / Feature Scope
> "What component or feature are we building?"

This determines which existing components to import from the library.

### 4. Color Deviations
> "Are there any one-off colors not in the design system for this feature?"

If yes, use the nearest semantic token instead of a hardcoded hex.
Only use raw hex values for brand assets (logos, illustrations).

---

## Core Design Rules (always apply)

| Rule | Value |
|------|-------|
| Background | `surface` (#FBF8FF) |
| Cards | `surfaceContainerLowest` (#FFFFFF) |
| Shadows | **None** — use surface color tiers for depth |
| UI language | **English** — all labels, placeholders, aria-labels |
| Font | `'TikTok Sans', 'Noto Sans Thai', sans-serif` |
| Icon set | SVG from `src/assets/icon/` |

---

## NavigationBar — Badge Rules

| Context | Bell badge display |
|---------|-------------------|
| Side navbar (desktop, expanded + collapsed) | Number badge — shows count, `>9` displays "9+" |
| Top bar (mobile, `<960px`) | Dot badge only — no number |

---

## Available Components

```
JagotaButton        props: variant, shape, size, loading, startIcon, endIcon
JagotaCard          props: type (elevated | outlined | tonal)
JagotaTextField     (MUI TextField with Jagota theme)
JagotaChip          props: variant, selected
JagotaDialog        (MUI Dialog with Jagota theme)
JagotaSnackbar      props: message, action, severity
JagotaTopAppBar     props: title, onBack, actions
JagotaNavigationBar props: items, activeId, moduleName, logo, logoSymbolic, user,
                           notificationCount, collapsed, onNavigate, ...
JagotaAppLayout     props: nav, children, sidebarCollapsed
```

---

## Standard App Shell

```tsx
import { JagotaAppLayout, JagotaNavigationBar } from '@jagota/ui'

<JagotaAppLayout
  nav={
    <JagotaNavigationBar
      items={navItems}
      activeId={currentPage}
      moduleName="Module Name"
      logo={<img src="/jagota-logo.svg" alt="JAGOTA" />}
      logoSymbolic={<img src="/jagota-logo-symbolic.svg" alt="J" />}
      user={{ name: 'Staff Name', role: 'Category Manager' }}
      notificationCount={3}
      onNavigate={(id) => router.push(`/${id}`)}
    />
  }
>
  {/* Page content here — background is Surface automatically */}
  <YourPageContent />
</JagotaAppLayout>
```

---

## Radius Tokens (for reference)

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-xs` | 4px | Text fields |
| `--radius-sm` | 8px | Chips, collapse button |
| `--radius-md` | 12px | Cards, nav items, **Square buttons** |
| `--radius-lg` | 16px | FAB |
| `--radius-xl` | 28px | Dialogs |
| `--radius-full` | 1000px | **Round buttons**, avatars |

---

*Last updated: April 2026 — Design System v2.0*
