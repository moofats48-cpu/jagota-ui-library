/**
 * MUI TypeScript Module Augmentation — Jagota Design System
 *
 * เพิ่ม M3 color roles เข้าไปใน MUI Palette type
 * เพื่อให้ TypeScript รู้จัก theme.palette.onSurface, theme.palette.surface ฯลฯ
 *
 * อ้างอิง: https://mui.com/material-ui/customization/theming/#typescript
 */

declare module '@mui/material/styles' {
  interface Palette {
    // ── M3 Surface roles ──────────────────────────────────────────────────────
    surface:                 string
    surfaceVariant:          string
    surfaceDim:              string
    surfaceBright:           string
    surfaceContainerLowest:  string
    surfaceContainerLow:     string
    surfaceContainer:        string
    surfaceContainerHigh:    string
    surfaceContainerHighest: string

    // ── M3 On-Surface roles ───────────────────────────────────────────────────
    onSurface:               string
    onSurfaceVariant:        string
    onBackground:            string

    // ── M3 Primary container ──────────────────────────────────────────────────
    primaryContainer:        string
    onPrimaryContainer:      string

    // ── M3 Secondary container ────────────────────────────────────────────────
    secondaryContainer:      string
    onSecondaryContainer:    string

    // ── M3 Tertiary ───────────────────────────────────────────────────────────
    tertiary:                string
    onTertiary:              string
    tertiaryContainer:       string
    onTertiaryContainer:     string

    // ── M3 Error container ────────────────────────────────────────────────────
    errorContainer:          string
    onErrorContainer:        string

    // ── M3 Outline ────────────────────────────────────────────────────────────
    outline:                 string
    outlineVariant:          string

    // ── M3 Inverse ────────────────────────────────────────────────────────────
    inverseSurface:          string
    inverseOnSurface:        string
    inversePrimary:          string

    // ── M3 Misc ───────────────────────────────────────────────────────────────
    shadow:                  string
    scrim:                   string
    surfaceTint:             string

    // ── Jagota extras ─────────────────────────────────────────────────────────
    sectionBackground:       string
  }

  interface PaletteOptions {
    surface?:                 string
    surfaceVariant?:          string
    surfaceDim?:              string
    surfaceBright?:           string
    surfaceContainerLowest?:  string
    surfaceContainerLow?:     string
    surfaceContainer?:        string
    surfaceContainerHigh?:    string
    surfaceContainerHighest?: string

    onSurface?:               string
    onSurfaceVariant?:        string
    onBackground?:            string

    primaryContainer?:        string
    onPrimaryContainer?:      string

    secondaryContainer?:      string
    onSecondaryContainer?:    string

    tertiary?:                string
    onTertiary?:              string
    tertiaryContainer?:       string
    onTertiaryContainer?:     string

    errorContainer?:          string
    onErrorContainer?:        string

    outline?:                 string
    outlineVariant?:          string

    inverseSurface?:          string
    inverseOnSurface?:        string
    inversePrimary?:          string

    shadow?:                  string
    scrim?:                   string
    surfaceTint?:             string

    sectionBackground?:       string
  }
}

// ── ต้องมี export เพื่อให้ไฟล์นี้เป็น module ──────────────────────────────────
export {}
