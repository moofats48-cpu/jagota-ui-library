/**
 * Jagota Brother Trading — Design System Foundation
 * Typography Tokens (Material Design 3 Type Scale)
 *
 * Font Family: TikTok Sans (Brand + Plain)
 * Weights: Regular (400) · Medium (500) · SemiBold (600)
 *
 * Scale Structure (M3):
 *   Display   → Hero / Large headers
 *   Headline  → Section titles
 *   Title     → Card / Component titles
 *   Body      → Long-form reading content
 *   Label     → UI labels, buttons, captions
 *
 * Responsive: Baseline (Desktop) | Tablet | Mobile
 */

// ─────────────────────────────────────────────────────────────────────────────
// FONT FAMILIES
// ─────────────────────────────────────────────────────────────────────────────

export const fontFamily = {
  /** Brand font — Display, Headline, Title Large */
  brand: '"TikTok Sans", "Noto Sans Thai", "Sarabun", sans-serif',
  /** Plain font — Body, Label, UI text */
  plain: '"TikTok Sans", "Noto Sans Thai", "Sarabun", sans-serif',
  /** Monospace — Code snippets, data tables */
  mono: '"JetBrains Mono", "Fira Code", "Courier New", monospace',
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// FONT WEIGHTS
// ─────────────────────────────────────────────────────────────────────────────

export const fontWeight = {
  regular:  400,
  medium:   500,
  semiBold: 600,
  bold:     700,
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// TYPE SCALE — BASELINE (Desktop / Default)
//   size: px · lineHeight: px · letterSpacing: px · weight: number
//   Each role also carries "weightEmphasis" for emphasized text variants
// ─────────────────────────────────────────────────────────────────────────────

export interface TypeStyle {
  fontFamily:       string;
  fontSize:         number;  // px
  lineHeight:       number;  // px
  letterSpacing:    number;  // px
  fontWeight:       number;
  fontWeightEmphasis: number;
}

export const typeScale = {
  /** 57/64 — Hero banners, splash screens */
  displayLarge: {
    fontFamily:         fontFamily.brand,
    fontSize:           57,
    lineHeight:         64,
    letterSpacing:      -0.25,
    fontWeight:         fontWeight.regular,
    fontWeightEmphasis: fontWeight.medium,
  },
  /** 45/52 — Large page headers */
  displayMedium: {
    fontFamily:         fontFamily.brand,
    fontSize:           45,
    lineHeight:         52,
    letterSpacing:      0,
    fontWeight:         fontWeight.regular,
    fontWeightEmphasis: fontWeight.medium,
  },
  /** 36/44 — Section display headers */
  displaySmall: {
    fontFamily:         fontFamily.brand,
    fontSize:           36,
    lineHeight:         44,
    letterSpacing:      0,
    fontWeight:         fontWeight.regular,
    fontWeightEmphasis: fontWeight.medium,
  },
  /** 32/40 — Major section titles */
  headlineLarge: {
    fontFamily:         fontFamily.brand,
    fontSize:           32,
    lineHeight:         40,
    letterSpacing:      0,
    fontWeight:         fontWeight.regular,
    fontWeightEmphasis: fontWeight.medium,
  },
  /** 28/36 — Card section headings */
  headlineMedium: {
    fontFamily:         fontFamily.brand,
    fontSize:           28,
    lineHeight:         36,
    letterSpacing:      0,
    fontWeight:         fontWeight.regular,
    fontWeightEmphasis: fontWeight.medium,
  },
  /** 24/32 — Sub-section headings */
  headlineSmall: {
    fontFamily:         fontFamily.brand,
    fontSize:           24,
    lineHeight:         32,
    letterSpacing:      0,
    fontWeight:         fontWeight.regular,
    fontWeightEmphasis: fontWeight.medium,
  },
  /** 22/28 — Dialog titles, card titles */
  titleLarge: {
    fontFamily:         fontFamily.brand,
    fontSize:           22,
    lineHeight:         28,
    letterSpacing:      0,
    fontWeight:         fontWeight.regular,
    fontWeightEmphasis: fontWeight.medium,
  },
  /** 16/24 — List item titles, input labels */
  titleMedium: {
    fontFamily:         fontFamily.plain,
    fontSize:           16,
    lineHeight:         24,
    letterSpacing:      0.15,
    fontWeight:         fontWeight.medium,
    fontWeightEmphasis: fontWeight.semiBold,
  },
  /** 14/20 — Small component titles */
  titleSmall: {
    fontFamily:         fontFamily.plain,
    fontSize:           14,
    lineHeight:         20,
    letterSpacing:      0.10,
    fontWeight:         fontWeight.medium,
    fontWeightEmphasis: fontWeight.semiBold,
  },
  /** 16/24 — Body reading (long form) */
  bodyLarge: {
    fontFamily:         fontFamily.plain,
    fontSize:           16,
    lineHeight:         24,
    letterSpacing:      0.50,
    fontWeight:         fontWeight.regular,
    fontWeightEmphasis: fontWeight.medium,
  },
  /** 14/20 — Standard body text */
  bodyMedium: {
    fontFamily:         fontFamily.plain,
    fontSize:           14,
    lineHeight:         20,
    letterSpacing:      0.25,
    fontWeight:         fontWeight.regular,
    fontWeightEmphasis: fontWeight.medium,
  },
  /** 12/16 — Secondary body, descriptions */
  bodySmall: {
    fontFamily:         fontFamily.plain,
    fontSize:           12,
    lineHeight:         16,
    letterSpacing:      0.40,
    fontWeight:         fontWeight.regular,
    fontWeightEmphasis: fontWeight.medium,
  },
  /** 14/20 — Prominent labels, button text */
  labelLarge: {
    fontFamily:         fontFamily.plain,
    fontSize:           14,
    lineHeight:         20,
    letterSpacing:      0.10,
    fontWeight:         fontWeight.medium,
    fontWeightEmphasis: fontWeight.semiBold,
  },
  /** 12/16 — Input labels, chip text */
  labelMedium: {
    fontFamily:         fontFamily.plain,
    fontSize:           12,
    lineHeight:         16,
    letterSpacing:      0.50,
    fontWeight:         fontWeight.medium,
    fontWeightEmphasis: fontWeight.semiBold,
  },
  /** 11/16 — Caption, overline, badge */
  labelSmall: {
    fontFamily:         fontFamily.plain,
    fontSize:           11,
    lineHeight:         16,
    letterSpacing:      0.50,
    fontWeight:         fontWeight.medium,
    fontWeightEmphasis: fontWeight.semiBold,
  },
} satisfies Record<string, TypeStyle>;

// ─────────────────────────────────────────────────────────────────────────────
// RESPONSIVE TYPE SCALE
//   Overrides fontSize and lineHeight per breakpoint.
//   letterSpacing and fontWeight remain constant.
// ─────────────────────────────────────────────────────────────────────────────

export interface ResponsiveTypeOverride {
  fontSize:    number;
  lineHeight:  number;
}

export const typeScaleMobile: Record<string, ResponsiveTypeOverride> = {
  displayLarge:   { fontSize: 40, lineHeight: 48 },
  displayMedium:  { fontSize: 32, lineHeight: 40 },
  displaySmall:   { fontSize: 28, lineHeight: 36 },
  headlineLarge:  { fontSize: 24, lineHeight: 32 },
  headlineMedium: { fontSize: 20, lineHeight: 28 },
  headlineSmall:  { fontSize: 18, lineHeight: 26 },
  titleLarge:     { fontSize: 18, lineHeight: 24 },
  titleMedium:    { fontSize: 14, lineHeight: 20 },
  titleSmall:     { fontSize: 12, lineHeight: 18 },
  bodyLarge:      { fontSize: 14, lineHeight: 20 },
  bodyMedium:     { fontSize: 12, lineHeight: 18 },
  bodySmall:      { fontSize: 11, lineHeight: 16 },
  labelLarge:     { fontSize: 12, lineHeight: 18 },
  labelMedium:    { fontSize: 11, lineHeight: 16 },
  labelSmall:     { fontSize: 10, lineHeight: 14 },
};

export const typeScaleTablet: Record<string, ResponsiveTypeOverride> = {
  displayLarge:   { fontSize: 48, lineHeight: 56 },
  displayMedium:  { fontSize: 40, lineHeight: 48 },
  displaySmall:   { fontSize: 32, lineHeight: 40 },
  headlineLarge:  { fontSize: 28, lineHeight: 36 },
  headlineMedium: { fontSize: 24, lineHeight: 32 },
  headlineSmall:  { fontSize: 22, lineHeight: 28 },
  titleLarge:     { fontSize: 20, lineHeight: 28 },
  titleMedium:    { fontSize: 16, lineHeight: 24 },
  titleSmall:     { fontSize: 14, lineHeight: 20 },
  bodyLarge:      { fontSize: 16, lineHeight: 24 },
  bodyMedium:     { fontSize: 14, lineHeight: 20 },
  bodySmall:      { fontSize: 12, lineHeight: 16 },
  labelLarge:     { fontSize: 14, lineHeight: 20 },
  labelMedium:    { fontSize: 12, lineHeight: 16 },
  labelSmall:     { fontSize: 11, lineHeight: 16 },
};

// ─────────────────────────────────────────────────────────────────────────────
// TYPE EXPORTS
// ─────────────────────────────────────────────────────────────────────────────

export type TypeScaleKey = keyof typeof typeScale;

export const typography = {
  fontFamily,
  fontWeight,
  typeScale,
  responsive: {
    mobile: typeScaleMobile,
    tablet: typeScaleTablet,
  },
} as const;

export default typography;
