/**
 * Jagota Brother Trading — Design System Foundation
 * Shape Tokens (Corner Radius)
 *
 * Based on Material Design 3 Shape Scale
 * Source: Jagota-design-system-variables/Shape-Radius.json
 *
 * M3 maps shape tokens to specific component families:
 *   None         → Bottom sheets, Navigation drawer
 *   Extra-small  → Menu items, Tooltips, Snackbars
 *   Small        → Chips, Text fields, Input components
 *   Medium       → Cards, Dialogs
 *   Large        → FAB, Extended FAB, Navigation bars
 *   Extra-large  → Large FAB, Bottom sheet headers
 *   Full         → Badges, Buttons (pill style)
 */

// ─────────────────────────────────────────────────────────────────────────────
// CORNER RADIUS SCALE
// ─────────────────────────────────────────────────────────────────────────────

export const cornerRadius = {
  /** 0px — Sharp edges, bottom sheet background */
  none:               0,
  /** 4px — Tooltips, small menus, snackbars */
  extraSmall:         4,
  /** 8px — Chips, text fields, select inputs */
  small:              8,
  /** 12px — Cards, dialogs, modals */
  medium:             12,
  /** 16px — FAB, navigation components */
  large:              16,
  /** 20px — Large cards, feature panels */
  largeIncreased:     20,
  /** 28px — Extended FAB, bottom sheet top */
  extraLarge:         28,
  /** 32px — Full-width banners */
  extraLargeIncreased: 32,
  /** 48px — Dialog / sheet radius (very rounded) */
  extraExtraLarge:    48,
  /** 1000px — Pills, avatar chips, fully circular */
  full:               1000,
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT SHAPE MAPPING
//   Maps M3 component families to Jagota shape tokens
// ─────────────────────────────────────────────────────────────────────────────

export const componentShape = {
  // Buttons
  filledButton:      cornerRadius.full,       // pill shape
  outlinedButton:    cornerRadius.full,
  textButton:        cornerRadius.full,
  tonalButton:       cornerRadius.full,
  elevatedButton:    cornerRadius.full,
  iconButton:        cornerRadius.full,

  // FAB
  fab:               cornerRadius.large,
  fabExtended:       cornerRadius.large,
  fabLarge:          cornerRadius.extraLarge,

  // Input / Form
  textField:         cornerRadius.extraSmall, // top corners only
  textFieldOutlined: cornerRadius.extraSmall,
  select:            cornerRadius.extraSmall,
  searchBar:         cornerRadius.full,

  // Selection
  chip:              cornerRadius.small,
  filterChip:        cornerRadius.small,
  inputChip:         cornerRadius.small,
  suggestionChip:    cornerRadius.small,

  // Cards & Surfaces
  card:              cornerRadius.medium,
  cardElevated:      cornerRadius.medium,
  cardFilled:        cornerRadius.medium,
  cardOutlined:      cornerRadius.medium,

  // Dialogs & Sheets
  dialog:            cornerRadius.extraLarge,
  bottomSheet:       cornerRadius.extraLarge,   // top corners only
  sideSheet:         cornerRadius.large,        // edge corners only
  navigationDrawer:  cornerRadius.large,        // right corners only

  // Navigation
  navigationBar:     cornerRadius.full,         // indicator pill
  navigationRail:    cornerRadius.full,
  navigationDrawerItem: cornerRadius.full,
  tab:               cornerRadius.full,

  // Misc
  badge:             cornerRadius.full,
  snackbar:          cornerRadius.extraSmall,
  tooltip:           cornerRadius.extraSmall,
  menu:              cornerRadius.extraSmall,
  menuItem:          cornerRadius.none,

  // Jagota custom
  table:             cornerRadius.extraSmall,
  tableCell:         cornerRadius.none,
  avatar:            cornerRadius.full,
  banner:            cornerRadius.medium,
  tag:               cornerRadius.extraSmall,
  statusBadge:       cornerRadius.extraSmall,
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// HELPER — converts cornerRadius value to CSS string
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Returns a CSS border-radius string.
 * Clamps "full" (1000) to "50%" for circular shapes to avoid large values.
 */
export const toRadius = (value: number): string => {
  if (value === cornerRadius.full) return '1000px';
  return `${value}px`;
};

// ─────────────────────────────────────────────────────────────────────────────
// TYPE EXPORTS
// ─────────────────────────────────────────────────────────────────────────────

export type CornerRadiusKey = keyof typeof cornerRadius;
export type ComponentShapeKey = keyof typeof componentShape;

export const shape = {
  cornerRadius,
  component: componentShape,
  toRadius,
} as const;

export default shape;
