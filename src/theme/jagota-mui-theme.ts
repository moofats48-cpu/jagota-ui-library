import { createTheme, type Theme, type ThemeOptions } from '@mui/material/styles'
import { lightScheme, darkScheme, palette, type ColorScheme } from '../foundation/tokens/colors'
import { fontFamily, fontWeight, typeScale } from '../foundation/tokens/typography'
import { cornerRadius } from '../foundation/tokens/shape'

/**
 * Jagota Brother Trading — MUI Theme
 *
 * แปลง Jagota Design Tokens → MUI ThemeOptions
 * ใช้กับ MUI v5/v6 + Material Design 3
 *
 * ทุก component ที่อยู่ใน <JagotaProvider> จะได้ธีมนี้อัตโนมัติ
 * โดยไม่ต้องตั้งค่าอะไรเพิ่มใน project ปลายทาง
 */

// ─────────────────────────────────────────────────────────────────────────────
// SHARED OPTIONS — เหมือนกันทั้ง light และ dark
// ─────────────────────────────────────────────────────────────────────────────

const sharedOptions: ThemeOptions = {
  // ── Typography ──────────────────────────────────────────────────────────
  typography: {
    fontFamily: fontFamily.plain,

    // Display
    h1: {
      fontFamily: fontFamily.brand,
      fontSize:   `${typeScale.displayLarge.fontSize}px`,
      lineHeight: `${typeScale.displayLarge.lineHeight}px`,
      letterSpacing: `${typeScale.displayLarge.letterSpacing}px`,
      fontWeight: fontWeight.regular,
    },
    h2: {
      fontFamily: fontFamily.brand,
      fontSize:   `${typeScale.displayMedium.fontSize}px`,
      lineHeight: `${typeScale.displayMedium.lineHeight}px`,
      letterSpacing: `${typeScale.displayMedium.letterSpacing}px`,
      fontWeight: fontWeight.regular,
    },
    h3: {
      fontFamily: fontFamily.brand,
      fontSize:   `${typeScale.displaySmall.fontSize}px`,
      lineHeight: `${typeScale.displaySmall.lineHeight}px`,
      letterSpacing: `${typeScale.displaySmall.letterSpacing}px`,
      fontWeight: fontWeight.regular,
    },
    // Headline
    h4: {
      fontFamily: fontFamily.brand,
      fontSize:   `${typeScale.headlineLarge.fontSize}px`,
      lineHeight: `${typeScale.headlineLarge.lineHeight}px`,
      letterSpacing: `${typeScale.headlineLarge.letterSpacing}px`,
      fontWeight: fontWeight.regular,
    },
    h5: {
      fontFamily: fontFamily.brand,
      fontSize:   `${typeScale.headlineMedium.fontSize}px`,
      lineHeight: `${typeScale.headlineMedium.lineHeight}px`,
      letterSpacing: `${typeScale.headlineMedium.letterSpacing}px`,
      fontWeight: fontWeight.regular,
    },
    h6: {
      fontFamily: fontFamily.brand,
      fontSize:   `${typeScale.headlineSmall.fontSize}px`,
      lineHeight: `${typeScale.headlineSmall.lineHeight}px`,
      letterSpacing: `${typeScale.headlineSmall.letterSpacing}px`,
      fontWeight: fontWeight.regular,
    },
    // Title
    subtitle1: {
      fontFamily: fontFamily.plain,
      fontSize:   `${typeScale.titleMedium.fontSize}px`,
      lineHeight: `${typeScale.titleMedium.lineHeight}px`,
      letterSpacing: `${typeScale.titleMedium.letterSpacing}px`,
      fontWeight: fontWeight.medium,
    },
    subtitle2: {
      fontFamily: fontFamily.plain,
      fontSize:   `${typeScale.titleSmall.fontSize}px`,
      lineHeight: `${typeScale.titleSmall.lineHeight}px`,
      letterSpacing: `${typeScale.titleSmall.letterSpacing}px`,
      fontWeight: fontWeight.medium,
    },
    // Body
    body1: {
      fontFamily: fontFamily.plain,
      fontSize:   `${typeScale.bodyLarge.fontSize}px`,
      lineHeight: `${typeScale.bodyLarge.lineHeight}px`,
      letterSpacing: `${typeScale.bodyLarge.letterSpacing}px`,
      fontWeight: fontWeight.regular,
    },
    body2: {
      fontFamily: fontFamily.plain,
      fontSize:   `${typeScale.bodyMedium.fontSize}px`,
      lineHeight: `${typeScale.bodyMedium.lineHeight}px`,
      letterSpacing: `${typeScale.bodyMedium.letterSpacing}px`,
      fontWeight: fontWeight.regular,
    },
    // Label / Button / Caption
    button: {
      fontFamily: fontFamily.plain,
      fontSize:   `${typeScale.labelLarge.fontSize}px`,
      lineHeight: `${typeScale.labelLarge.lineHeight}px`,
      letterSpacing: `${typeScale.labelLarge.letterSpacing}px`,
      fontWeight: fontWeight.medium,
      textTransform: 'none', // M3 ไม่ใช้ UPPERCASE
    },
    caption: {
      fontFamily: fontFamily.plain,
      fontSize:   `${typeScale.bodySmall.fontSize}px`,
      lineHeight: `${typeScale.bodySmall.lineHeight}px`,
      letterSpacing: `${typeScale.bodySmall.letterSpacing}px`,
      fontWeight: fontWeight.regular,
    },
    overline: {
      fontFamily: fontFamily.plain,
      fontSize:   `${typeScale.labelSmall.fontSize}px`,
      lineHeight: `${typeScale.labelSmall.lineHeight}px`,
      letterSpacing: `${typeScale.labelSmall.letterSpacing}px`,
      fontWeight: fontWeight.medium,
      textTransform: 'none',
    },
  },

  // ── Shape ────────────────────────────────────────────────────────────────
  shape: {
    borderRadius: cornerRadius.medium, // 12px default
  },

  // ── Shadows — Jagota Policy: No shadows. All 'none'. ────────────────────
  // Elevation is expressed via surface tint colors, not drop shadows.
  shadows: [
    'none', 'none', 'none', 'none', 'none',
    'none', 'none', 'none', 'none', 'none',
    'none', 'none', 'none', 'none', 'none',
    'none', 'none', 'none', 'none', 'none',
    'none', 'none', 'none', 'none', 'none',
  ],

  // ── Breakpoints (Jagota responsive grid) ────────────────────────────────
  breakpoints: {
    values: {
      xs: 0,
      sm: 360,
      md: 600,
      lg: 960,
      xl: 1280,
    },
  },

  // ── Spacing (4px base) ───────────────────────────────────────────────────
  spacing: 4, // spacing(1) = 4px, spacing(4) = 16px
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT OVERRIDES — ปรับ MUI default ให้ตรงกับ M3 Jagota
// ─────────────────────────────────────────────────────────────────────────────

const getComponentOverrides = (scheme: ColorScheme): ThemeOptions['components'] => ({

  // ── Button ───────────────────────────────────────────────────────────────
  MuiButton: {
    defaultProps: {
      disableElevation: true,
      variant: 'contained',
    },
    styleOverrides: {
      root: {
        borderRadius: cornerRadius.full, // pill shape
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: `${typeScale.labelLarge.fontSize}px`,
        lineHeight: `${typeScale.labelLarge.lineHeight}px`,
        letterSpacing: `${typeScale.labelLarge.letterSpacing}px`,
        fontWeight: fontWeight.medium,
        textTransform: 'none',
        minWidth: 64,
        transition: 'all 200ms cubic-bezier(0.2, 0, 0, 1)',
      },
      // Filled (Contained)
      contained: {
        backgroundColor: scheme.primary,
        color: scheme.onPrimary,
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
          backgroundColor: scheme.primary,
          opacity: 0.92,
        },
        '&:active': { boxShadow: 'none' },
        '&:disabled': {
          backgroundColor: `${scheme.onSurface}1F`, // 12% opacity
          color: `${scheme.onSurface}61`,           // 38% opacity
        },
      },
      // Outlined — neutral border (outlineVariant) + neutral text (onSurfaceVariant)
      outlined: {
        borderColor: scheme.outlineVariant,           // #C4C5DA (lighter border)
        color: scheme.onSurfaceVariant,               // #434657 (neutral text, not primary blue)
        backgroundColor: 'transparent',
        '&:hover': {
          backgroundColor: `${scheme.onSurface}0A`,  // 4% neutral hover
          borderColor: scheme.outlineVariant,
        },
        '&:disabled': {
          borderColor: `${scheme.onSurface}1F`,
          color: `${scheme.onSurface}61`,
        },
      },
      // Text
      text: {
        color: scheme.primary,
        '&:hover': {
          backgroundColor: `${scheme.primary}14`,
        },
      },
      // Tonal (ใช้ containedSecondary ใน MUI)
      containedSecondary: {
        backgroundColor: scheme.secondaryContainer,
        color: scheme.onSecondaryContainer,
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
          opacity: 0.92,
        },
      },
    },
  },

  // ── Card ─────────────────────────────────────────────────────────────────
  MuiCard: {
    defaultProps: {
      elevation: 1,
    },
    styleOverrides: {
      root: {
        borderRadius: cornerRadius.medium, // 12px
        backgroundColor: scheme.surfaceContainerLow,
        color: scheme.onSurface,
        overflow: 'hidden',
      },
    },
  },

  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: 16,
        '&:last-child': { paddingBottom: 16 },
      },
    },
  },

  // ── TextField / Input ─────────────────────────────────────────────────────
  MuiTextField: {
    defaultProps: {
      variant: 'outlined',
    },
  },

  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: cornerRadius.extraSmall, // 4px top
        backgroundColor: scheme.surface,
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: scheme.onSurface,
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: scheme.primary,
          borderWidth: 2,
        },
        '&.Mui-error .MuiOutlinedInput-notchedOutline': {
          borderColor: scheme.error,
        },
      },
      notchedOutline: {
        borderColor: scheme.outline,
      },
      input: {
        fontSize: `${typeScale.bodyLarge.fontSize}px`,
        lineHeight: `${typeScale.bodyLarge.lineHeight}px`,
        letterSpacing: `${typeScale.bodyLarge.letterSpacing}px`,
        padding: '16px 12px',
        color: scheme.onSurface,
      },
    },
  },

  MuiFilledInput: {
    styleOverrides: {
      root: {
        borderTopLeftRadius:  cornerRadius.extraSmall,
        borderTopRightRadius: cornerRadius.extraSmall,
        borderBottomLeftRadius:  0,
        borderBottomRightRadius: 0,
        backgroundColor: scheme.surfaceContainerHighest,
        '&:hover': {
          backgroundColor: scheme.surfaceContainerHigh,
        },
        '&.Mui-focused': {
          backgroundColor: scheme.surfaceContainerHighest,
        },
        '&::before': { borderBottomColor: scheme.onSurfaceVariant },
        '&::after':  { borderBottomColor: scheme.primary },
      },
    },
  },

  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: scheme.onSurfaceVariant,
        fontSize: `${typeScale.bodyLarge.fontSize}px`,
        '&.Mui-focused': { color: scheme.primary },
        '&.Mui-error':   { color: scheme.error },
      },
    },
  },

  // ── Chip ─────────────────────────────────────────────────────────────────
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: cornerRadius.small, // 8px
        fontSize: `${typeScale.labelLarge.fontSize}px`,
        height: 32,
        fontWeight: fontWeight.medium,
      },
      filled: {
        backgroundColor: scheme.secondaryContainer,
        color: scheme.onSecondaryContainer,
        '&:hover': { backgroundColor: scheme.secondaryContainer, opacity: 0.92 },
      },
      outlined: {
        borderColor: scheme.outline,
        color: scheme.onSurfaceVariant,
        '&:hover': { backgroundColor: `${scheme.onSurface}14` },
      },
    },
  },

  // ── Dialog ───────────────────────────────────────────────────────────────
  MuiDialog: {
    styleOverrides: {
      paper: {
        borderRadius: cornerRadius.extraLarge, // 28px
        backgroundColor: scheme.surfaceContainerHigh,
        color: scheme.onSurface,
        padding: 0,
        boxShadow: 'none',
      },
    },
  },

  MuiDialogTitle: {
    styleOverrides: {
      root: {
        fontSize: `${typeScale.headlineSmall.fontSize}px`,
        lineHeight: `${typeScale.headlineSmall.lineHeight}px`,
        fontWeight: fontWeight.regular,
        padding: '24px 24px 16px',
        color: scheme.onSurface,
      },
    },
  },

  MuiDialogContent: {
    styleOverrides: {
      root: {
        padding: '0 24px',
        fontSize: `${typeScale.bodyMedium.fontSize}px`,
        lineHeight: `${typeScale.bodyMedium.lineHeight}px`,
        color: scheme.onSurfaceVariant,
      },
    },
  },

  MuiDialogActions: {
    styleOverrides: {
      root: {
        padding: '24px',
        gap: 8,
      },
    },
  },

  // ── Snackbar ──────────────────────────────────────────────────────────────
  MuiSnackbar: {
    defaultProps: {
      anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
    },
  },

  MuiSnackbarContent: {
    styleOverrides: {
      root: {
        borderRadius: cornerRadius.extraSmall, // 4px
        backgroundColor: scheme.inverseSurface,
        color: scheme.inverseOnSurface,
        fontSize: `${typeScale.bodyMedium.fontSize}px`,
        lineHeight: `${typeScale.bodyMedium.lineHeight}px`,
        padding: '12px 16px',
        minWidth: 288,
        maxWidth: 568,
      },
      action: {
        color: scheme.inversePrimary,
        paddingLeft: 8,
      },
    },
  },

  // ── AppBar ────────────────────────────────────────────────────────────────
  MuiAppBar: {
    defaultProps: {
      elevation: 0,
      color: 'default',
    },
    styleOverrides: {
      root: {
        backgroundColor: scheme.surface,
        color: scheme.onSurface,
        borderBottom: `1px solid ${scheme.outlineVariant}`,
      },
    },
  },

  // ── Divider ───────────────────────────────────────────────────────────────
  MuiDivider: {
    styleOverrides: {
      root: {
        borderColor: scheme.outlineVariant,
      },
    },
  },

  // ── Switch ────────────────────────────────────────────────────────────────
  MuiSwitch: {
    styleOverrides: {
      track: {
        borderRadius: cornerRadius.full,
        backgroundColor: scheme.surfaceVariant,
        opacity: 1,
      },
      thumb: {
        boxShadow: 'none',
      },
      switchBase: {
        '&.Mui-checked': {
          color: scheme.onPrimary,
          '& + .MuiSwitch-track': {
            backgroundColor: scheme.primary,
            opacity: 1,
          },
        },
      },
    },
  },

  // ── Tooltip ───────────────────────────────────────────────────────────────
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        borderRadius: cornerRadius.extraSmall,
        backgroundColor: scheme.inverseSurface,
        color: scheme.inverseOnSurface,
        fontSize: `${typeScale.bodySmall.fontSize}px`,
        lineHeight: `${typeScale.bodySmall.lineHeight}px`,
        padding: '4px 8px',
      },
      arrow: {
        color: scheme.inverseSurface,
      },
    },
  },

  // ── List ──────────────────────────────────────────────────────────────────
  MuiListItem: {
    styleOverrides: {
      root: {
        borderRadius: cornerRadius.none,
        paddingTop: 12,
        paddingBottom: 12,
      },
    },
  },

  MuiListItemText: {
    styleOverrides: {
      primary: {
        fontSize: `${typeScale.bodyLarge.fontSize}px`,
        lineHeight: `${typeScale.bodyLarge.lineHeight}px`,
        color: scheme.onSurface,
      },
      secondary: {
        fontSize: `${typeScale.bodyMedium.fontSize}px`,
        lineHeight: `${typeScale.bodyMedium.lineHeight}px`,
        color: scheme.onSurfaceVariant,
      },
    },
  },

  // ── Tabs ──────────────────────────────────────────────────────────────────
  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: 'none',
        fontSize: `${typeScale.titleSmall.fontSize}px`,
        fontWeight: fontWeight.medium,
        letterSpacing: `${typeScale.titleSmall.letterSpacing}px`,
        color: scheme.onSurfaceVariant,
        minHeight: 48,
        '&.Mui-selected': {
          color: scheme.primary,
        },
      },
    },
  },

  MuiTabs: {
    styleOverrides: {
      indicator: {
        backgroundColor: scheme.primary,
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
      },
    },
  },

  // ── Badge ─────────────────────────────────────────────────────────────────
  MuiBadge: {
    styleOverrides: {
      badge: {
        borderRadius: cornerRadius.full,
        fontSize: `${typeScale.labelSmall.fontSize}px`,
        fontWeight: fontWeight.medium,
        minWidth: 16,
        height: 16,
        padding: '0 4px',
      },
    },
  },

  // ── Paper ─────────────────────────────────────────────────────────────────
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: 'none', // ปิด MUI default gradient
      },
      rounded: {
        borderRadius: cornerRadius.medium,
      },
    },
  },

  // ── CssBaseline ───────────────────────────────────────────────────────────
  MuiCssBaseline: {
    styleOverrides: `
      *, *::before, *::after {
        box-sizing: border-box;
      }
      html {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      body {
        margin: 0;
        font-family: ${fontFamily.plain};
      }
      :focus-visible {
        outline: 3px solid ${lightScheme.primary};
        outline-offset: 2px;
      }
    `,
  },
})

// ─────────────────────────────────────────────────────────────────────────────
// LIGHT THEME
// ─────────────────────────────────────────────────────────────────────────────

export const jagotaLightTheme: Theme = createTheme({
  ...sharedOptions,

  palette: {
    mode: 'light',
    primary: {
      main:        lightScheme.primary,
      light:       palette.primary.p60,
      dark:        palette.primary.p30,
      contrastText: lightScheme.onPrimary,
    },
    secondary: {
      main:        lightScheme.secondary,
      light:       palette.secondary.s60,
      dark:        palette.secondary.s30,
      contrastText: lightScheme.onSecondary,
    },
    error: {
      main:        lightScheme.error,
      contrastText: lightScheme.onError,
    },
    warning: {
      main:        '#F59E0B',
      contrastText: '#FFFFFF',
    },
    info: {
      main:        lightScheme.tertiary,
      contrastText: lightScheme.onTertiary,
    },
    success: {
      main:        '#22C55E',
      contrastText: '#FFFFFF',
    },
    background: {
      default: lightScheme.background,
      paper:   lightScheme.surfaceContainerLow,
    },
    text: {
      primary:   lightScheme.onSurface,
      secondary: lightScheme.onSurfaceVariant,
      disabled:  `${lightScheme.onSurface}61`,
    },
    divider: lightScheme.outlineVariant,
    action: {
      hover:           `${lightScheme.primary}14`,
      selected:        `${lightScheme.primary}1F`,
      disabled:        `${lightScheme.onSurface}61`,
      disabledBackground: `${lightScheme.onSurface}1F`,
      focus:           `${lightScheme.primary}1F`,
    },
  },

  components: getComponentOverrides(lightScheme),
})

// ─────────────────────────────────────────────────────────────────────────────
// DARK THEME
// ─────────────────────────────────────────────────────────────────────────────

export const jagotaDarkTheme: Theme = createTheme({
  ...sharedOptions,

  palette: {
    mode: 'dark',
    primary: {
      main:        darkScheme.primary,
      light:       palette.primary.p80,
      dark:        palette.primary.p40,
      contrastText: darkScheme.onPrimary,
    },
    secondary: {
      main:        darkScheme.secondary,
      light:       palette.secondary.s80,
      dark:        palette.secondary.s40,
      contrastText: darkScheme.onSecondary,
    },
    error: {
      main:        darkScheme.error,
      contrastText: darkScheme.onError,
    },
    warning: {
      main:        '#FCD34D',
      contrastText: '#1C1410',
    },
    info: {
      main:        darkScheme.tertiary,
      contrastText: darkScheme.onTertiary,
    },
    success: {
      main:        '#86EFAC',
      contrastText: '#052E16',
    },
    background: {
      default: darkScheme.background,
      paper:   darkScheme.surfaceContainerLow,
    },
    text: {
      primary:   darkScheme.onSurface,
      secondary: darkScheme.onSurfaceVariant,
      disabled:  `${darkScheme.onSurface}61`,
    },
    divider: darkScheme.outlineVariant,
    action: {
      hover:           `${darkScheme.primary}14`,
      selected:        `${darkScheme.primary}1F`,
      disabled:        `${darkScheme.onSurface}61`,
      disabledBackground: `${darkScheme.onSurface}1F`,
      focus:           `${darkScheme.primary}1F`,
    },
  },

  components: getComponentOverrides(darkScheme),
})

// ─────────────────────────────────────────────────────────────────────────────
// FACTORY
// ─────────────────────────────────────────────────────────────────────────────

export const createJagotaMuiTheme = (mode: 'light' | 'dark' = 'light'): Theme =>
  mode === 'dark' ? jagotaDarkTheme : jagotaLightTheme

export default jagotaLightTheme
