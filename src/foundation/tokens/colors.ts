/**
 * Jagota Brother Trading — Design System Foundation
 * Color Tokens (Material Design 3 based)
 *
 * Brand Primary: Jagota Blue (#0743FF)
 * Source: Figma PWA Design System V.2 / Jagota-design-system-variables
 *
 * Structure:
 *   1. Primitive Palette  — raw color tones (0–100 scale per M3)
 *   2. Semantic Schemes   — role-based tokens (light + dark)
 *   3. Surface Tints      — elevation overlay tokens
 *   4. Add-ons            — custom Jagota extensions
 */

// ─────────────────────────────────────────────────────────────────────────────
// 1. PRIMITIVE PALETTE
//    Tonal palette following M3 HCT color space conventions.
//    Key = tone value (100 = white, 0 = black, 40 = main brand tone)
// ─────────────────────────────────────────────────────────────────────────────

export const palette = {
  /** Jagota Brand Blue — Primary palette */
  primary: {
    p100: '#FFFFFF',
    p99:  '#FEFBFF',
    p98:  '#FBF8FF',
    p95:  '#F0EFFF',
    p90:  '#DEE0FF',
    p80:  '#BAC3FF',
    p70:  '#96A5FF',
    p60:  '#7187FF',
    p50:  '#4868FF',
    p40:  '#0743FF', // ← Jagota Brand Blue (Main)
    p35:  '#0039E3',
    p30:  '#0031C6',
    p25:  '#0028AB',
    p20:  '#001F8F',
    p10:  '#00115A',
    p0:   '#000000',
  },

  /** Secondary — mirrors Primary palette (monochromatic brand strategy) */
  secondary: {
    s100: '#FFFFFF',
    s99:  '#FEFBFF',
    s98:  '#FBF8FF',
    s95:  '#F0EFFF',
    s90:  '#DEE0FF',
    s80:  '#BAC3FF',
    s70:  '#96A5FF',
    s60:  '#7187FF',
    s50:  '#4868FF',
    s40:  '#0743FF',
    s30:  '#2E3F94',
    s20:  '#12267D',
    s10:  '#00115A',
    s0:   '#000000',
  },

  /** Tertiary — Jagota Purple (accent / complementary) */
  tertiary: {
    t100: '#FFFFFF',
    t99:  '#FFF7FF',
    t95:  '#FFEBFF',
    t90:  '#FCD7FF',
    t80:  '#F2AFFF',
    t70:  '#E07EFF',
    t60:  '#CA4FFF',
    t40:  '#9B00B0', // Tertiary 40 (estimated from palette interpolation)
    t30:  '#780097',
    t20:  '#55006B',
    t10:  '#340043',
    t0:   '#000000',
  },

  /** Error palette (M3 standard) */
  error: {
    e100: '#FFFFFF',
    e99:  '#FFFBFF',
    e90:  '#FFDAD6',
    e80:  '#FFB4AB',
    e40:  '#BA1A1A',
    e30:  '#93000A',
    e20:  '#690005',
    e10:  '#410002',
    e0:   '#000000',
  },

  /** Neutral — Surface / Background tones */
  neutral: {
    n100: '#FFFFFF',
    n99:  '#FEFBFF',
    n98:  '#FBF8FF',
    n95:  '#F0EFFE',
    n90:  '#E2E1F0',
    n80:  '#C6C5D4',  // Outline variant approx
    n70:  '#ADACBE',
    n60:  '#9494A7',
    n50:  '#7B7A8E',  // Outline approx
    n40:  '#434657',  // On Surface Variant
    n30:  '#2E303B',  // Inverse Surface
    n20:  '#191B25',  // On Surface / On Background
    n10:  '#0E1019',
    n0:   '#000000',
  },

  /** Neutral Variant — Outline / Container tones */
  neutralVariant: {
    nv100: '#FFFFFF',
    nv90:  '#E0E1F6',  // Surface Variant
    nv80:  '#C4C5DA',  // Outline Variant
    nv70:  '#A9AABE',
    nv60:  '#8F90A4',
    nv50:  '#74768A',  // Outline
    nv40:  '#5B5C70',
    nv30:  '#434657',  // On Surface Variant
    nv20:  '#2C2F43',
    nv10:  '#181B2E',
    nv0:   '#000000',
  },
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// 2. SEMANTIC COLOR SCHEMES
// ─────────────────────────────────────────────────────────────────────────────

/** Light Mode — M3 Color Scheme mapped to Jagota palette */
export const lightScheme = {
  // Primary
  primary:                 palette.primary.p40,   // #0743FF
  onPrimary:               palette.primary.p100,  // #FFFFFF
  primaryContainer:        palette.primary.p90,   // #DEE0FF
  onPrimaryContainer:      palette.primary.p30,   // #0031C6

  // Secondary
  secondary:               palette.secondary.s40, // #0743FF
  onSecondary:             palette.secondary.s100,// #FFFFFF
  secondaryContainer:      palette.secondary.s90, // #DEE0FF
  onSecondaryContainer:    palette.secondary.s30, // #2E3F94

  // Tertiary
  tertiary:                palette.tertiary.t40,  // #9B00B0
  onTertiary:              '#FFFFFF',
  tertiaryContainer:       palette.tertiary.t90,  // #FCD7FF
  onTertiaryContainer:     palette.tertiary.t30,  // #780097

  // Error
  error:                   palette.error.e40,     // #BA1A1A
  onError:                 '#FFFFFF',
  errorContainer:          'rgba(186, 26, 26, 0.10)', // #BA1A1A @10%
  onErrorContainer:        palette.error.e30,     // #93000A

  // Background
  background:              '#FBF8FF',
  onBackground:            '#191B25',

  // Surface hierarchy
  surface:                  '#FBF8FF',
  onSurface:                '#191B25',
  surfaceVariant:           '#E0E1F6',
  onSurfaceVariant:         '#434657',
  surfaceDim:               '#D9D9E7',
  surfaceBright:            '#FBF8FF',
  surfaceContainerLowest:   '#FFFFFF',
  surfaceContainerLow:      '#F4F2FF',
  surfaceContainer:         '#EDECFB',
  surfaceContainerHigh:     '#E8E7F5',
  surfaceContainerHighest:  '#E2E1F0',

  // Outline
  outline:                 '#747689',
  outlineVariant:          '#C4C5DA',

  // Misc
  shadow:                  '#000000',
  scrim:                   '#000000',
  surfaceTint:             '#0743FF',

  // Inverse
  inverseSurface:          '#2E303B',
  inverseOnSurface:        '#F0EFFE',
  inversePrimary:          '#BAC3FF',

  // Fixed (persistent across themes)
  primaryFixed:            '#DEE0FF',
  onPrimaryFixed:          '#00115A',
  primaryFixedDim:         '#BAC3FF',
  onPrimaryFixedVariant:   '#0031C6',
  secondaryFixed:          '#DEE0FF',
  onSecondaryFixed:        '#00115A',
  secondaryFixedDim:       '#BAC3FF',
  onSecondaryFixedVariant: '#2E3F94',
  tertiaryFixed:           '#FCD7FF',
  onTertiaryFixed:         '#340043',
  tertiaryFixedDim:        '#F2AFFF',
  onTertiaryFixedVariant:  '#780097',

  // Jagota custom add-ons
  sectionBackground:       '#F5F5F5',
} as const;

/** Dark Mode — M3 Color Scheme mapped to Jagota palette */
export const darkScheme = {
  // Primary
  primary:                 '#BAC3FF',
  onPrimary:               '#00208E',
  primaryContainer:        '#0743FF',
  onPrimaryContainer:      '#D1D6FF',

  // Secondary
  secondary:               '#BAC3FF',
  onSecondary:             '#12267D',
  secondaryContainer:      '#304196',
  onSecondaryContainer:    '#A7B4FF',

  // Tertiary
  tertiary:                '#F2AFFF',
  onTertiary:              '#55006B',
  tertiaryContainer:       '#780097',
  onTertiaryContainer:     '#FCD7FF',

  // Error
  error:                   '#FFB4AB',
  onError:                 '#690005',
  errorContainer:          '#93000A',
  onErrorContainer:        '#FFDAD6',

  // Background
  background:              '#111318',
  onBackground:            '#E3E2EA',

  // Surface hierarchy (dark)
  surface:                  '#111318',
  onSurface:                '#E3E2EA',
  surfaceVariant:           '#44464F',
  onSurfaceVariant:         '#C4C6D0',
  surfaceDim:               '#111318',
  surfaceBright:            '#373943',
  surfaceContainerLowest:   '#0C0E13',
  surfaceContainerLow:      '#191C23',
  surfaceContainer:         '#1D2028',
  surfaceContainerHigh:     '#282A32',
  surfaceContainerHighest:  '#33363D',

  // Outline
  outline:                 '#8E9099',
  outlineVariant:          '#44464F',

  // Misc
  shadow:                  '#000000',
  scrim:                   '#000000',
  surfaceTint:             '#BAC3FF',

  // Inverse
  inverseSurface:          '#E3E2EA',
  inverseOnSurface:        '#2E3038',
  inversePrimary:          '#0743FF',

  // Fixed (same as light — fixed means persistent)
  primaryFixed:            '#DEE0FF',
  onPrimaryFixed:          '#00115A',
  primaryFixedDim:         '#BAC3FF',
  onPrimaryFixedVariant:   '#0031C6',
  secondaryFixed:          '#DEE0FF',
  onSecondaryFixed:        '#00115A',
  secondaryFixedDim:       '#BAC3FF',
  onSecondaryFixedVariant: '#2E3F94',
  tertiaryFixed:           '#FCD7FF',
  onTertiaryFixed:         '#340043',
  tertiaryFixedDim:        '#F2AFFF',
  onTertiaryFixedVariant:  '#780097',

  // Jagota custom
  sectionBackground:       '#1A1A1A',
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// 3. SURFACE ELEVATION TINTS (Light mode)
//    M3 uses primary color overlays at specific opacities per elevation level
// ─────────────────────────────────────────────────────────────────────────────

export const surfaceTints = {
  level0:  'transparent',
  level1:  'rgba(7, 67, 255, 0.05)',  // 5%
  level2:  'rgba(7, 67, 255, 0.08)',  // 8%
  level3:  'rgba(7, 67, 255, 0.11)',  // 11%
  level4:  'rgba(7, 67, 255, 0.12)',  // 12%
  level5:  'rgba(7, 67, 255, 0.14)',  // 14%
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// 4. TYPE EXPORTS
// ─────────────────────────────────────────────────────────────────────────────

/**
 * ColorScheme — Mapped type ที่รับทั้ง lightScheme และ darkScheme
 * ใช้ { readonly [K]: string } แทน typeof lightScheme เพื่อไม่ให้ literal types ขัดกัน
 */
export type ColorScheme = { readonly [K in keyof typeof lightScheme]: string }
export type Palette = typeof palette;
export type SurfaceTint = keyof typeof surfaceTints;

export const colors = {
  palette,
  light: lightScheme,
  dark: darkScheme,
  surfaceTints,
} as const;

export default colors;
