# @jagota/ui

**Jagota Brother Trading — React UI Component Library**

Built on [Material Design 3](https://m3.material.io/) and [MUI v6](https://mui.com/), themed with Jagota brand colors.

---

## Features

- ✅ Material Design 3 color system (light & dark mode)
- ✅ Jagota brand tokens (colors, typography, spacing, shape, elevation)
- ✅ 8 production-ready components: Button, Card, TextField, Chip, Dialog, Snackbar, TopAppBar, NavigationBar
- ✅ Full TypeScript support with M3 palette augmentation
- ✅ ESM + CJS dual build
- ✅ Zero config — wrap once with `<JagotaProvider>`

---

## Installation

```bash
npm install github:jagota-brother/jagota-ui
```

Install peer dependencies (if not already):

```bash
npm install @mui/material @emotion/react @emotion/styled react react-dom
```

---

## Quick Start

### 1. Wrap your app with `JagotaProvider`

```tsx
// App.tsx
import { JagotaProvider } from '@jagota/ui'

function App() {
  return (
    <JagotaProvider>
      <YourApp />
    </JagotaProvider>
  )
}
```

### 2. Use MUI components — Jagota theme is applied automatically

```tsx
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

function MyPage() {
  return (
    <Card>
      <CardContent>
        <Button variant="contained">Save</Button>
      </CardContent>
    </Card>
  )
}
```

### 3. Use Jagota components for full M3 behavior

```tsx
import {
  JagotaButton,
  JagotaCard,
  JagotaTextField,
  JagotaChip,
  JagotaDialog,
  JagotaSnackbar,
  JagotaTopAppBar,
  JagotaNavigationBar,
  JagotaAppLayout,
} from '@jagota/ui'
```

---

## Components

### JagotaButton

M3 Button — 5 variants: `filled`, `tonal`, `outlined`, `text`, `elevated`

```tsx
<JagotaButton variant="filled">Confirm</JagotaButton>
<JagotaButton variant="tonal">Secondary</JagotaButton>
<JagotaButton variant="outlined">Cancel</JagotaButton>
<JagotaButton variant="text">Learn more</JagotaButton>

{/* With loading state */}
<JagotaButton variant="filled" loading>Saving...</JagotaButton>
```

### JagotaCard

M3 Card — 3 types: `elevated` (default), `filled`, `outlined`

```tsx
<JagotaCard type="elevated">
  <CardContent>Content here</CardContent>
</JagotaCard>

{/* Clickable card */}
<JagotaCard type="filled" onClick={() => navigate('/detail')}>
  <CardContent>Click me</CardContent>
</JagotaCard>

{/* With padding preset */}
<JagotaCard type="outlined" padding="comfortable">
  <Typography>Outlined card</Typography>
</JagotaCard>
```

### JagotaTextField

M3 TextField — variants: `outlined` (default), `filled`

```tsx
<JagotaTextField label="Search" placeholder="Type to search..." />

{/* With status */}
<JagotaTextField label="Email" status="error" helperText="Invalid email" />
<JagotaTextField label="Username" status="success" helperText="Available!" />
<JagotaTextField label="Amount" status="warning" helperText="Check amount" />
```

### JagotaChip

M3 Chip — 4 types: `assist`, `filter`, `input`, `suggestion`

```tsx
<JagotaChip type="assist" label="Share" icon={<ShareIcon />} />
<JagotaChip type="filter" label="Electronics" selected={isSelected} onClick={toggle} />
<JagotaChip type="input" label="Bangkok" onDelete={removeTag} />
<JagotaChip type="suggestion" label="Tomorrow 9AM" onClick={select} />
```

### JagotaDialog

M3 Dialog — with confirm/cancel actions

```tsx
<JagotaDialog
  open={open}
  title="Delete Item"
  content="This action cannot be undone."
  confirmLabel="Delete"
  cancelLabel="Cancel"
  onConfirm={handleDelete}
  onClose={() => setOpen(false)}
  destructive
/>
```

### JagotaSnackbar

M3 Snackbar — 4 severities: `info`, `success`, `warning`, `error`

```tsx
<JagotaSnackbar
  open={open}
  message="Changes saved successfully"
  severity="success"
  onClose={() => setOpen(false)}
/>

{/* With action button */}
<JagotaSnackbar
  open={open}
  message="Item deleted"
  actionLabel="Undo"
  onAction={handleUndo}
  onClose={() => setOpen(false)}
/>
```

Or use the hook:

```tsx
const { show, SnackbarComponent } = useJagotaSnackbar()

// Somewhere in your component tree:
{SnackbarComponent}

// Trigger:
show({ message: 'Saved!', severity: 'success' })
```

### JagotaTopAppBar

M3 Top App Bar — 4 types: `center-aligned` (default), `small`, `medium`, `large`

```tsx
<JagotaTopAppBar
  title="Jagota"
  leading={<IconButton><ArrowBackIcon /></IconButton>}
  trailing={<IconButton><MoreVertIcon /></IconButton>}
  scrollBehavior="elevate"
/>
```

### JagotaNavigationBar + JagotaAppLayout

Custom sidebar navigation with responsive behavior:
- **Desktop (≥1280px)** — Expanded sidebar 240px
- **Tablet (768–1279px)** — Collapsed sidebar 80px
- **Mobile (<768px)** — Top bar + Hamburger drawer 320px

```tsx
<JagotaAppLayout
  nav={
    <JagotaNavigationBar
      items={[
        { id: 'dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
        { id: 'analysis',  label: 'Analysis',  icon: <AnalyticsIcon /> },
        { id: 'settings',  label: 'Settings',  icon: <SettingsIcon />, disabled: true },
      ]}
      activeId="dashboard"
      moduleName="Target Setup"
      user={{ name: 'Staff Name', role: 'Category Manager' }}
      notificationCount={3}
      onNavigate={(id) => router.push(`/${id}`)}
    />
  }
>
  <PageContent />
</JagotaAppLayout>
```

---

## Theme & Dark Mode

```tsx
import { useJagotaTheme } from '@jagota/ui'

function Settings() {
  const { mode, toggleMode } = useJagotaTheme()
  return (
    <Switch checked={mode === 'dark'} onChange={toggleMode} />
  )
}
```

Access design tokens:

```tsx
import { lightScheme, darkScheme, palette, typeScale, spacing } from '@jagota/ui'

// lightScheme.primary        → '#5B4CDB'
// typeScale.bodyLarge.fontSize → 16
// spacing(4)                 → '16px'
```

Use M3 colors in custom components:

```tsx
import { useTheme } from '@mui/material/styles'

function MyComponent() {
  const theme = useTheme()
  const { onSurface, surfaceContainerLow, primaryContainer } = theme.palette as any
  return <Box sx={{ backgroundColor: surfaceContainerLow, color: onSurface }} />
}
```

---

## Design Tokens

| Category | Key exports |
|----------|-------------|
| Colors | `lightScheme`, `darkScheme`, `palette` |
| Typography | `typeScale`, `fontFamily`, `fontWeight` |
| Spacing | `space`, `spacing()`, `breakpoints` |
| Shape | `cornerRadius`, `shape` |
| Elevation | `shadows`, `elevation`, `zIndex` |

---

## License

UNLICENSED — Internal use at Jagota Brother Trading only.
