/**
 * Jagota Brother Trading — Design System Foundation
 * Elevation Tokens (Material Design 3)
 *
 * M3 elevation system uses two layers:
 *   1. Shadow      — drop shadow (box-shadow) for depth perception
 *   2. Surface Tint — primary color overlay at increasing opacity
 *
 * Surface tints apply the Jagota Primary (#0743FF) at:
 *   Level 0 → 0%   (no tint)
 *   Level 1 → 5%
 *   Level 2 → 8%
 *   Level 3 → 11%
 *   Level 4 → 12%
 *   Level 5 → 14%
 *
 * Component mapping:
 *   Level 0 — Background, flat surfaces
 *   Level 1 — Cards, menus (low elevation)
 *   Level 2 — Popovers, autocomplete
 *   Level 3 — Bottom navigation, FAB
 *   Level 4 — Dialogs, modal drawers
 *   Level 5 — Navigation drawers (highest)
 */

// ─────────────────────────────────────────────────────────────────────────────
// SHADOW VALUES
//   Jagota Design Policy: No box-shadows.
//   Elevation is expressed via surface tint overlays only (per M3 Color Tint).
//   All shadow levels are 'none' — hierarchy is communicated through color.
// ─────────────────────────────────────────────────────────────────────────────

export const shadows = {
  level0: 'none',
  level1: 'none',
  level2: 'none',
  level3: 'none',
  level4: 'none',
  level5: 'none',
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// SURFACE TINT OVERLAYS (Light mode — Jagota Blue primary)
// ─────────────────────────────────────────────────────────────────────────────

export const lightTints = {
  level0: 'transparent',
  level1: 'rgba(7, 67, 255, 0.05)',
  level2: 'rgba(7, 67, 255, 0.08)',
  level3: 'rgba(7, 67, 255, 0.11)',
  level4: 'rgba(7, 67, 255, 0.12)',
  level5: 'rgba(7, 67, 255, 0.14)',
} as const;

/** Dark mode tints — use dark primary (#BAC3FF) */
export const darkTints = {
  level0: 'transparent',
  level1: 'rgba(186, 195, 255, 0.05)',
  level2: 'rgba(186, 195, 255, 0.08)',
  level3: 'rgba(186, 195, 255, 0.11)',
  level4: 'rgba(186, 195, 255, 0.12)',
  level5: 'rgba(186, 195, 255, 0.14)',
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// ELEVATION LEVEL — combined token (shadow + tint)
// ─────────────────────────────────────────────────────────────────────────────

export interface ElevationLevel {
  shadow:    string;
  lightTint: string;
  darkTint:  string;
  zIndex:    number;
}

export const elevation: Record<string, ElevationLevel> = {
  level0: {
    shadow:    shadows.level0,
    lightTint: lightTints.level0,
    darkTint:  darkTints.level0,
    zIndex:    0,
  },
  level1: {
    shadow:    shadows.level1,
    lightTint: lightTints.level1,
    darkTint:  darkTints.level1,
    zIndex:    1,
  },
  level2: {
    shadow:    shadows.level2,
    lightTint: lightTints.level2,
    darkTint:  darkTints.level2,
    zIndex:    2,
  },
  level3: {
    shadow:    shadows.level3,
    lightTint: lightTints.level3,
    darkTint:  darkTints.level3,
    zIndex:    3,
  },
  level4: {
    shadow:    shadows.level4,
    lightTint: lightTints.level4,
    darkTint:  darkTints.level4,
    zIndex:    4,
  },
  level5: {
    shadow:    shadows.level5,
    lightTint: lightTints.level5,
    darkTint:  darkTints.level5,
    zIndex:    5,
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Z-INDEX SCALE (Jagota layer system)
// ─────────────────────────────────────────────────────────────────────────────

export const zIndex = {
  base:          0,
  raised:        10,
  dropdown:      100,
  sticky:        200,
  overlay:       300,
  drawer:        400,
  modal:         500,
  toast:         600,
  tooltip:       700,
  popover:       800,
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT ELEVATION MAPPING
// ─────────────────────────────────────────────────────────────────────────────

export const componentElevation = {
  // Flat
  background:          'level0',
  surface:             'level0',
  card:                'level1',
  cardHovered:         'level2',

  // Overlays
  menu:                'level2',
  autocomplete:        'level2',
  datePicker:          'level3',
  bottomNavigationBar: 'level2',
  fab:                 'level3',
  fabPressed:          'level3',
  dialog:              'level3',
  navigationDrawer:    'level1',
  bottomSheet:         'level1',
  sideSheet:           'level1',
  searchBar:           'level2',
  appBar:              'level2',
  topAppBarScrolled:   'level2',
} as const;

export type ElevationKey = keyof typeof elevation;

export default elevation;
