/**
 * Jagota Brother Trading — Design System Foundation
 * Spacing Tokens
 *
 * Base unit: 4px (follows M3 4dp grid)
 * Source: Jagota-design-system-variables/Spacing.json
 *
 * Scale naming follows Jagota Figma convention (Xs → 5XL)
 * Numeric aliases also provided for programmatic use.
 */

// ─────────────────────────────────────────────────────────────────────────────
// SPACING SCALE
// ─────────────────────────────────────────────────────────────────────────────

export const spacingScale = {
  /** 2px — Hairline gaps, micro spacing */
  xs:   2,
  /** 4px — Icon inner padding, tight gaps */
  s:    4,
  /** 8px — Default inner padding, small gaps */
  m:    8,
  /** 12px — Input padding, medium gaps */
  sm:   12,
  /** 16px — Section padding, card padding */
  l:    16,
  /** 20px — Dialog / modal padding */
  sl:   20,
  /** 24px — Large section spacing */
  xl:   24,
  /** 32px — Page section separation */
  '2xl': 32,
  /** 40px — Feature block spacing */
  '3xl': 40,
  /** 48px — Page-level padding */
  '4xl': 48,
  /** 64px — Hero section padding */
  '5xl': 64,
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// NUMERIC INDEX — for loop-based usage
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Ordered spacing array (px values):
 * [2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64]
 */
export const spacingArray = [2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64] as const;

// ─────────────────────────────────────────────────────────────────────────────
// SPACING HELPER FUNCTION
//   spacing(2) → 16px (index 4 on 4px base)
//   Follows MUI sx prop convention: 1 unit = 4px
// ─────────────────────────────────────────────────────────────────────────────

const BASE_UNIT = 4;

/**
 * Returns a px value from a numeric multiplier.
 * @param units — number of 4px base units
 * @returns string like "16px"
 *
 * @example
 *   spacing(2)  // "8px"
 *   spacing(4)  // "16px"
 *   spacing(6)  // "24px"
 */
export const spacing = (units: number): string => `${units * BASE_UNIT}px`;

// ─────────────────────────────────────────────────────────────────────────────
// LAYOUT GRID — M3 Responsive Layout
// ─────────────────────────────────────────────────────────────────────────────

export const layoutGrid = {
  /** Mobile (< 600px) — 4 columns */
  mobile: {
    columns:  4,
    gutter:   16,   // px between columns
    margin:   16,   // px side margin
    maxWidth: 600,
  },
  /** Tablet (600px – 1024px) — 8 columns */
  tablet: {
    columns:  8,
    gutter:   24,
    margin:   24,
    maxWidth: 1024,
  },
  /** Desktop (1024px – 1440px) — 12 columns */
  desktop: {
    columns:   12,
    gutter:    24,
    margin:    24,
    maxWidth:  1440,
  },
  /** Wide (> 1440px) — 12 columns with expanded margins */
  wide: {
    columns:   12,
    gutter:    24,
    margin:    48,
    maxWidth:  1920,
  },
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// BREAKPOINTS (matches M3 adaptive layout + Jagota PWA targets)
// ─────────────────────────────────────────────────────────────────────────────

export const breakpoints = {
  xs:  0,     // < 360px  — very small mobile
  sm:  360,   // ≥ 360px  — standard mobile
  md:  600,   // ≥ 600px  — large mobile / tablet portrait
  lg:  960,   // ≥ 960px  — tablet landscape
  xl:  1280,  // ≥ 1280px — desktop
  '2xl': 1536, // ≥ 1536px — wide desktop
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// TYPE EXPORTS
// ─────────────────────────────────────────────────────────────────────────────

export type SpacingKey = keyof typeof spacingScale;

export const space = {
  scale:      spacingScale,
  array:      spacingArray,
  fn:         spacing,
  grid:       layoutGrid,
  breakpoints,
} as const;

export default space;
