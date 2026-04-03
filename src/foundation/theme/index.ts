/**
 * Jagota Brother Trading — Design System Foundation
 * Theme Configuration
 *
 * Provides a complete M3-compatible theme object for:
 *   - React + MUI (Material UI v5+)
 *   - Direct consumption in custom component libraries
 *
 * Usage:
 *   import { lightTheme, darkTheme } from '@jagota/ui-foundation';
 *   <ThemeProvider theme={lightTheme}>...</ThemeProvider>
 */

import { lightScheme, darkScheme, palette, surfaceTints } from '../tokens/colors';
import { fontFamily, fontWeight, typeScale } from '../tokens/typography';
import { spacingScale, breakpoints } from '../tokens/spacing';
import { cornerRadius } from '../tokens/shape';
import { shadows } from '../tokens/elevation';

// ─────────────────────────────────────────────────────────────────────────────
// JAGOTA THEME TYPE
// ─────────────────────────────────────────────────────────────────────────────

export interface JagotaTheme {
  mode:       'light' | 'dark';
  palette:    JagotaPalette;
  typography: JagotaTypography;
  shape:      JagotaShape;
  spacing:    JagotaSpacing;
  shadows:    JagotaShadows;
  motion:     JagotaMotion;
  breakpoints: JagotaBreakpoints;
}

export interface JagotaPalette {
  mode: 'light' | 'dark';
  primary:           { main: string; on: string; container: string; onContainer: string; };
  secondary:         { main: string; on: string; container: string; onContainer: string; };
  tertiary:          { main: string; on: string; container: string; onContainer: string; };
  error:             { main: string; on: string; container: string; onContainer: string; };
  background:        { default: string; on: string; };
  surface:           {
    default: string;
    on: string;
    variant: string;
    onVariant: string;
    dim: string;
    bright: string;
    containerLowest: string;
    containerLow: string;
    container: string;
    containerHigh: string;
    containerHighest: string;
  };
  outline:           { main: string; variant: string; };
  inverse:           { surface: string; onSurface: string; primary: string; };
  shadow:            string;
  scrim:             string;
  surfaceTint:       string;
  tints:             typeof surfaceTints;
  raw:               typeof palette;
}

export interface JagotaTypography {
  fontFamilyBrand:  string;
  fontFamilyPlain:  string;
  fontFamilyMono:   string;
  weights:          typeof fontWeight;
  scale:            typeof typeScale;
}

export interface JagotaShape {
  none:                  number;
  extraSmall:            number;
  small:                 number;
  medium:                number;
  large:                 number;
  largeIncreased:        number;
  extraLarge:            number;
  extraLargeIncreased:   number;
  extraExtraLarge:       number;
  full:                  number;
}

export interface JagotaSpacing {
  xs:  number; s:   number; m:   number; sm:  number;
  l:   number; sl:  number; xl:  number;
  '2xl': number; '3xl': number; '4xl': number; '5xl': number;
  fn:  (units: number) => string;
}

export interface JagotaShadows {
  level0: string; level1: string; level2: string;
  level3: string; level4: string; level5: string;
}

export interface JagotaMotion {
  easing: {
    standard:            string;
    standardDecelerate:  string;
    standardAccelerate:  string;
    emphasized:          string;
    emphasizedDecelerate: string;
    emphasizedAccelerate: string;
  };
  duration: {
    short1: number; short2: number; short3: number; short4: number;
    medium1: number; medium2: number; medium3: number; medium4: number;
    long1: number;  long2: number;  long3: number;  long4: number;
  };
}

export interface JagotaBreakpoints {
  xs: number; sm: number; md: number; lg: number; xl: number; '2xl': number;
}

// ─────────────────────────────────────────────────────────────────────────────
// SHARED THEME CONFIG (mode-independent)
// ─────────────────────────────────────────────────────────────────────────────

const sharedConfig = {
  typography: {
    fontFamilyBrand: fontFamily.brand,
    fontFamilyPlain: fontFamily.plain,
    fontFamilyMono:  fontFamily.mono,
    weights:         fontWeight,
    scale:           typeScale,
  } as JagotaTypography,

  shape: {
    none:                  cornerRadius.none,
    extraSmall:            cornerRadius.extraSmall,
    small:                 cornerRadius.small,
    medium:                cornerRadius.medium,
    large:                 cornerRadius.large,
    largeIncreased:        cornerRadius.largeIncreased,
    extraLarge:            cornerRadius.extraLarge,
    extraLargeIncreased:   cornerRadius.extraLargeIncreased,
    extraExtraLarge:       cornerRadius.extraExtraLarge,
    full:                  cornerRadius.full,
  } as JagotaShape,

  spacing: {
    ...spacingScale,
    fn: (units: number) => `${units * 4}px`,
  } as JagotaSpacing,

  shadows: shadows as JagotaShadows,

  motion: {
    easing: {
      standard:             'cubic-bezier(0.2, 0, 0, 1)',
      standardDecelerate:   'cubic-bezier(0, 0, 0, 1)',
      standardAccelerate:   'cubic-bezier(0.3, 0, 1, 1)',
      emphasized:           'cubic-bezier(0.2, 0, 0, 1)',
      emphasizedDecelerate: 'cubic-bezier(0.05, 0.7, 0.1, 1)',
      emphasizedAccelerate: 'cubic-bezier(0.3, 0, 0.8, 0.15)',
    },
    duration: {
      short1: 50,  short2: 100, short3: 150, short4: 200,
      medium1: 250, medium2: 300, medium3: 350, medium4: 400,
      long1: 450,  long2: 500,  long3: 550,  long4: 600,
    },
  } as JagotaMotion,

  breakpoints: breakpoints as JagotaBreakpoints,
};

// ─────────────────────────────────────────────────────────────────────────────
// LIGHT THEME
// ─────────────────────────────────────────────────────────────────────────────

export const lightTheme: JagotaTheme = {
  mode: 'light',

  palette: {
    mode:      'light',
    primary:   { main: lightScheme.primary,   on: lightScheme.onPrimary,   container: lightScheme.primaryContainer,   onContainer: lightScheme.onPrimaryContainer },
    secondary: { main: lightScheme.secondary, on: lightScheme.onSecondary, container: lightScheme.secondaryContainer, onContainer: lightScheme.onSecondaryContainer },
    tertiary:  { main: lightScheme.tertiary,  on: lightScheme.onTertiary,  container: lightScheme.tertiaryContainer,  onContainer: lightScheme.onTertiaryContainer },
    error:     { main: lightScheme.error,     on: lightScheme.onError,     container: lightScheme.errorContainer,     onContainer: lightScheme.onErrorContainer },
    background: { default: lightScheme.background, on: lightScheme.onBackground },
    surface: {
      default:          lightScheme.surface,
      on:               lightScheme.onSurface,
      variant:          lightScheme.surfaceVariant,
      onVariant:        lightScheme.onSurfaceVariant,
      dim:              lightScheme.surfaceDim,
      bright:           lightScheme.surfaceBright,
      containerLowest:  lightScheme.surfaceContainerLowest,
      containerLow:     lightScheme.surfaceContainerLow,
      container:        lightScheme.surfaceContainer,
      containerHigh:    lightScheme.surfaceContainerHigh,
      containerHighest: lightScheme.surfaceContainerHighest,
    },
    outline:    { main: lightScheme.outline, variant: lightScheme.outlineVariant },
    inverse:    { surface: lightScheme.inverseSurface, onSurface: lightScheme.inverseOnSurface, primary: lightScheme.inversePrimary },
    shadow:     lightScheme.shadow,
    scrim:      lightScheme.scrim,
    surfaceTint: lightScheme.surfaceTint,
    tints:      surfaceTints,
    raw:        palette,
  },

  ...sharedConfig,
};

// ─────────────────────────────────────────────────────────────────────────────
// DARK THEME
// ─────────────────────────────────────────────────────────────────────────────

export const darkTheme: JagotaTheme = {
  mode: 'dark',

  palette: {
    mode:      'dark',
    primary:   { main: darkScheme.primary,   on: darkScheme.onPrimary,   container: darkScheme.primaryContainer,   onContainer: darkScheme.onPrimaryContainer },
    secondary: { main: darkScheme.secondary, on: darkScheme.onSecondary, container: darkScheme.secondaryContainer, onContainer: darkScheme.onSecondaryContainer },
    tertiary:  { main: darkScheme.tertiary,  on: darkScheme.onTertiary,  container: darkScheme.tertiaryContainer,  onContainer: darkScheme.onTertiaryContainer },
    error:     { main: darkScheme.error,     on: darkScheme.onError,     container: darkScheme.errorContainer,     onContainer: darkScheme.onErrorContainer },
    background: { default: darkScheme.background, on: darkScheme.onBackground },
    surface: {
      default:          darkScheme.surface,
      on:               darkScheme.onSurface,
      variant:          darkScheme.surfaceVariant,
      onVariant:        darkScheme.onSurfaceVariant,
      dim:              darkScheme.surfaceDim,
      bright:           darkScheme.surfaceBright,
      containerLowest:  darkScheme.surfaceContainerLowest,
      containerLow:     darkScheme.surfaceContainerLow,
      container:        darkScheme.surfaceContainer,
      containerHigh:    darkScheme.surfaceContainerHigh,
      containerHighest: darkScheme.surfaceContainerHighest,
    },
    outline:    { main: darkScheme.outline, variant: darkScheme.outlineVariant },
    inverse:    { surface: darkScheme.inverseSurface, onSurface: darkScheme.inverseOnSurface, primary: darkScheme.inversePrimary },
    shadow:     darkScheme.shadow,
    scrim:      darkScheme.scrim,
    surfaceTint: darkScheme.surfaceTint,
    tints:      surfaceTints,
    raw:        palette,
  },

  ...sharedConfig,
};

// ─────────────────────────────────────────────────────────────────────────────
// THEME FACTORY
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Returns the appropriate theme for the given mode.
 * @example
 *   const theme = createJagotaTheme('dark');
 */
export const createJagotaTheme = (mode: 'light' | 'dark' = 'light'): JagotaTheme =>
  mode === 'dark' ? darkTheme : lightTheme;

export default { lightTheme, darkTheme, createJagotaTheme };
