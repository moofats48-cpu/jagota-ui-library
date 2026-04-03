# Jagota Brother Trading — UI Library
## System Design Document

**Version:** 2.0.0
**Updated:** 2026-04-02
**Figma:** [PWA Design System V.2](https://www.figma.com/design/mPdeCx6pnABJC6r6pFILAR/PWA-design-system-V.2?node-id=11-1833)
**Base:** Material Design 3 (M3) · https://m3.material.io/

---

## 1. Overview

Jagota Brother Trading uses **Material Design 3** as the UI base, customized with Jagota Brand colors, typography, and spacing tokens. This library is the **single source of truth** for all design decisions — shared between Figma, Web, and React/TypeScript.

---

## 2. Design Rules (Non-Negotiable)

These rules apply to **every screen and component** in the Jagota Design System. Claude must follow these when generating any UI.

### 2.1 Language

> **All UI text must be in English by default.**

- Labels, buttons, placeholders, column headers, navigation items — all in English.
- Exception: Only change to Thai if the user explicitly requests it after the initial build.

### 2.2 No Shadows

> **Box-shadows are never used in Jagota Design. Zero. None.**

- Elevation is communicated through **surface color tiers**, not drop shadows.
- `box-shadow: none` on all components, always.
- Use `surfaceContainerLowest → surfaceContainerLow → surfaceContainer` hierarchy instead.

### 2.3 Background = Surface

> **The root page background is always `Surface`.**

| Context | Color Token | Light Value | Dark Value |
|---------|------------|-------------|------------|
| Page / App Root | `surface` | `#FBF8FF` | `#111318` |
| Cards / Important Content | `surfaceContainerLowest` | `#FFFFFF` | `#0C0E13` |
| Secondary Panels | `surfaceContainerLow` | `#F4F2FF` | `#191C23` |
| Neutral Content | transparent | (inherits Surface) | (inherits Surface) |

- **Do not** use `surfaceContainerLow` as the root background.
- **Do not** use `background.default` directly — always use the `surface` token.

### 2.4 Elevation via Color (No Shadows)

Depth and hierarchy are shown through the surface color tier system:

```
Surface (base)                     #FBF8FF  ← Page background
  └─ surfaceContainerLowest        #FFFFFF  ← Cards, elevated content
      └─ surfaceContainerLow       #F4F2FF  ← Navigation rail, sidebars
          └─ surfaceContainer      #EDECFB  ← Chips, input backgrounds
              └─ surfaceContainerHigh     #E8E7F5  ← App bars, dialogs
                  └─ surfaceContainerHighest  #E2E1F0  ← Top-level overlays
```

---

## 3. Standard App Layout

### 3.1 Layout Structure

Every Jagota application uses this shell:

```
┌───────────────────────────────────────────────────────────┐
│  Navigation Bar (fixed left)    │  Content Area (flex: 1)  │
│                                 │                           │
│  Desktop:  240px expanded       │  Background: Surface      │
│  Tablet:    80px collapsed      │  Cards: ContainerLowest   │
│  Mobile:    hidden (top bar)    │  Full width on mobile     │
│                                 │                           │
└───────────────────────────────────────────────────────────┘
```

### 3.2 Usage

```tsx
import { JagotaAppLayout, JagotaNavigationBar } from '@jagota/ui'

<JagotaAppLayout
  nav={
    <JagotaNavigationBar
      items={[
        { id: 'dashboard', label: 'Dashboard',    icon: <DashboardIcon /> },
        { id: 'analysis',  label: 'Analysis',     icon: <AnalyticsIcon /> },
        { id: 'settings',  label: 'Target Setup', icon: <SettingsIcon /> },
      ]}
      activeId="dashboard"
      moduleName="Dashboard"
      user={{ name: 'Staff Name', role: 'Category Manager' }}
      onNavigate={(id) => router.push(`/${id}`)}
    />
  }
>
  {/* Your page content here */}
  <YourPageContent />
</JagotaAppLayout>
```

### 3.3 Content Area Rules

- **Background:** transparent (inherits `Surface` from root)
- **Cards:** use `surfaceContainerLowest` (`#FFFFFF`) — only when visual separation is needed
- **Non-critical content:** no background (transparent)
- **Default padding:** `24px` desktop / `16px` mobile

---

## 4. Responsive Breakpoints

### 4.1 Breakpoint Scale

| Name | Width | Use Case |
|------|-------|----------|
| `xs` | `0px` | Very small mobile |
| `sm` | `360px` | Standard mobile |
| `md` | `600px` | Large mobile / tablet portrait |
| `lg` | `960px` | Tablet landscape |
| `xl` | `1280px` | Desktop |
| `2xl` | `1536px` | Wide desktop |

### 4.2 Navigation Sidebar Breakpoints

| Breakpoint | Sidebar State | Width |
|-----------|---------------|-------|
| Desktop `≥1280px` | Expanded | `240px` |
| Tablet `768–1279px` | Collapsed (icons only) | `80px` |
| Mobile `<768px` | Hidden → Top bar + hamburger drawer | `0px` (drawer: `320px`) |

### 4.3 Usage in Code

```tsx
// MUI sx prop — use theme breakpoints
sx={{
  padding: { xs: 2, md: 3, xl: 4 },  // 8px / 12px / 16px
  fontSize: { xs: '12px', md: '14px', xl: '16px' },
}}

// useMediaQuery hook
const isMobile = useMediaQuery(theme.breakpoints.down('md'))
const isTablet = useMediaQuery('(min-width:768px) and (max-width:1279px)')
const isDesktop = useMediaQuery(theme.breakpoints.up('xl'))
```

---

## 5. Color System

### 5.1 Brand Colors

| Role | Light | Dark | Palette Tone |
|------|-------|------|-------------|
| **Primary** (Jagota Blue) | `#0743FF` | `#BAC3FF` | Primary 40 / 80 |
| On Primary | `#FFFFFF` | `#00208E` | P100 / P20 |
| Primary Container | `#DEE0FF` | `#0743FF` | P90 / P40 |
| On Primary Container | `#0031C6` | `#D1D6FF` | P30 / P90 |

### 5.2 Full Surface Hierarchy (Light Mode)

```
Surface                    #FBF8FF  ← Root page background (always use this)
Surface Dim                #D9D9E7  ← Dimmed/disabled page state
Surface Bright             #FBF8FF  ← Same as Surface
Surface Container Lowest   #FFFFFF  ← Cards, sheets, elevated panels
Surface Container Low      #F4F2FF  ← Navigation rail, sidebars
Surface Container          #EDECFB  ← Default containers
Surface Container High     #E8E7F5  ← App bars, dialog backgrounds
Surface Container Highest  #E2E1F0  ← Highest-level containers
```

### 5.3 Dark Mode Surface Hierarchy

```
Surface                    #111318
Surface Container Lowest   #0C0E13
Surface Container Low      #191C23
Surface Container          #1D2028
Surface Container High     #282A32
Surface Container Highest  #33363D
```

---

## 6. Typography System

### 6.1 Font Family

| Role | Font | Fallback |
|------|------|---------|
| Brand (Display, Headline) | TikTok Sans | Noto Sans Thai → Sarabun → sans-serif |
| Plain (Body, Label, UI) | TikTok Sans | Noto Sans Thai → Sarabun → sans-serif |
| Mono (Code, Data) | JetBrains Mono | Fira Code → Courier New |

### 6.2 Type Scale (M3 — 15 Roles)

| Role | Size | Line Height | Weight | Letter Spacing |
|------|------|-------------|--------|---------------|
| Display Large | 57px | 64px | 400 | -0.25px |
| Display Medium | 45px | 52px | 400 | 0 |
| Display Small | 36px | 44px | 400 | 0 |
| Headline Large | 32px | 40px | 400 | 0 |
| Headline Medium | 28px | 36px | 400 | 0 |
| Headline Small | 24px | 32px | 400 | 0 |
| Title Large | 22px | 28px | 400 | 0 |
| Title Medium | 16px | 24px | **500** | 0.15px |
| Title Small | 14px | 20px | **500** | 0.10px |
| Body Large | 16px | 24px | 400 | 0.50px |
| Body Medium | 14px | 20px | 400 | 0.25px |
| Body Small | 12px | 16px | 400 | 0.40px |
| Label Large | 14px | 20px | **500** | 0.10px |
| Label Medium | 12px | 16px | **500** | 0.50px |
| Label Small | 11px | 16px | **500** | 0.50px |

---

## 7. Spacing System (4px base unit)

```
xs   =  2px  — hairline, micro
s    =  4px  — icon padding, tight gaps
m    =  8px  — default padding, small gaps
sm   = 12px  — input padding
l    = 16px  — section padding, card padding  ← most common
sl   = 20px  — dialog padding
xl   = 24px  — large section
2xl  = 32px  — page section separation
3xl  = 40px  — feature block
4xl  = 48px  — page padding
5xl  = 64px  — hero section
```

---

## 8. Shape System

| Scale | Value | Used For |
|-------|-------|---------|
| None | 0px | Flat surfaces |
| Extra-small | 4px | Tooltips, snackbars |
| Small | 8px | Chips, text fields |
| Medium | 12px | Cards, dialogs (default) |
| Large | 16px | FAB, navigation |
| Extra-large | 28px | Dialogs (full) |
| Full | 1000px | Buttons (pill), badges |

### Key Component Shapes

| Component | Shape |
|-----------|-------|
| Button (all) | Full — pill shape |
| Card | Medium (12px) |
| Dialog | Extra-large (28px) |
| Text Field | Extra-small (4px) |
| Chip | Small (8px) |
| Navigation Indicator | Full |

---

## 9. Elevation System (Color-based, No Shadows)

> **Jagota uses ZERO box-shadows. Elevation = surface color tier.**

| Level | Shadow | Use Case |
|-------|--------|---------|
| Level 0 | `none` | Background, flat |
| Level 1 | `none` | Cards (color: surfaceContainerLowest) |
| Level 2 | `none` | Popovers (color: surfaceContainerLow) |
| Level 3 | `none` | Bottom nav, FAB |
| Level 4 | `none` | Dialogs (color: surfaceContainerHigh) |
| Level 5 | `none` | Navigation drawer |

Surface tint overlays (Jagota Blue at opacity) are used instead:

```
Level 0 → 0%    transparent
Level 1 → 5%    rgba(7, 67, 255, 0.05)
Level 2 → 8%    rgba(7, 67, 255, 0.08)
Level 3 → 11%   rgba(7, 67, 255, 0.11)
Level 4 → 12%   rgba(7, 67, 255, 0.12)
Level 5 → 14%   rgba(7, 67, 255, 0.14)
```

---

## 10. Component Library

| Component | Import | Status |
|-----------|--------|--------|
| `JagotaAppLayout` | `@jagota/ui` | ✅ Ready |
| `JagotaNavigationBar` | `@jagota/ui` | ✅ Ready |
| `JagotaButton` | `@jagota/ui` | ✅ Ready |
| `JagotaCard` | `@jagota/ui` | ✅ Ready |
| `JagotaTextField` | `@jagota/ui` | ✅ Ready |
| `JagotaChip` | `@jagota/ui` | ✅ Ready |
| `JagotaDialog` | `@jagota/ui` | ✅ Ready |
| `JagotaSnackbar` | `@jagota/ui` | ✅ Ready |
| `JagotaTopAppBar` | `@jagota/ui` | ✅ Ready |

---

## 11. Quick Reference for AI-Assisted Development (Vibe Coding)

When using Claude or any AI tool to generate Jagota UI code, include these instructions:

```
Use the Jagota UI Library (@jagota/ui). Follow these rules strictly:

1. LANGUAGE: All UI text in English. Labels, buttons, headers — English only.
2. NO SHADOWS: Never use box-shadow. Use surface color tiers for depth.
3. LAYOUT: Wrap everything in <JagotaAppLayout> with <JagotaNavigationBar>.
4. BACKGROUND: Root = surface color. Cards = surfaceContainerLowest.
5. THEME: Always wrap in <JagotaProvider> for the theme to apply.
6. BREAKPOINTS: Use Jagota breakpoints (xs/sm/md/lg/xl/2xl) for responsive.
7. FONTS: TikTok Sans via theme — no manual font-family declarations.
```

---

## 12. File Structure

```
src/
├── foundation/
│   ├── tokens/
│   │   ├── colors.ts       ← Palette + Light/Dark Schemes
│   │   ├── typography.ts   ← Type Scale + Responsive
│   │   ├── spacing.ts      ← Space Scale + Grid + Breakpoints
│   │   ├── shape.ts        ← Corner Radius
│   │   ├── elevation.ts    ← Surface Tints + z-index (no shadows)
│   │   └── index.ts
│   └── styles/
│       └── foundation.css  ← CSS Custom Properties (--md-sys-*)
├── components/
│   ├── AppLayout/          ← JagotaAppLayout shell
│   ├── NavigationBar/      ← JagotaNavigationBar (sidebar)
│   ├── Button/
│   ├── Card/
│   ├── TextField/
│   ├── Chip/
│   ├── Dialog/
│   ├── Snackbar/
│   └── TopAppBar/
└── theme/
    ├── JagotaProvider.tsx  ← Theme wrapper
    ├── jagota-mui-theme.ts ← MUI createTheme config
    └── useJagotaTheme.ts
```

---

## 13. GitHub Branch Info

> **Branch = Version line of the codebase.**
> The `main` branch is the "production-ready" version of the library.
> When you push to GitHub, it overwrites that branch with your latest changes.

To update the library on GitHub:
```bash
git add .
git commit -m "update: description of what changed"
git push origin main
```

---

*Jagota Design System — Updated April 2026*
