"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const React = require("react");
const styles = require("@mui/material/styles");
const CssBaseline = require("@mui/material/CssBaseline");
const Box = require("@mui/material/Box");
const Stack = require("@mui/material/Stack");
const Grid = require("@mui/material/Grid");
const Container = require("@mui/material/Container");
const Typography = require("@mui/material/Typography");
const Divider = require("@mui/material/Divider");
const MuiButton = require("@mui/material/Button");
const IconButton = require("@mui/material/IconButton");
const MuiCard = require("@mui/material/Card");
const CardContent = require("@mui/material/CardContent");
const CardActions = require("@mui/material/CardActions");
const CardHeader = require("@mui/material/CardHeader");
const MuiTextField = require("@mui/material/TextField");
const MuiChip = require("@mui/material/Chip");
const Avatar = require("@mui/material/Avatar");
const Badge = require("@mui/material/Badge");
const MuiDialog = require("@mui/material/Dialog");
const DialogTitle = require("@mui/material/DialogTitle");
const DialogContent = require("@mui/material/DialogContent");
const DialogActions = require("@mui/material/DialogActions");
const MuiSnackbar = require("@mui/material/Snackbar");
const Alert = require("@mui/material/Alert");
const AppBar = require("@mui/material/AppBar");
const Toolbar = require("@mui/material/Toolbar");
const Tabs = require("@mui/material/Tabs");
const Tab = require("@mui/material/Tab");
const Switch = require("@mui/material/Switch");
const Checkbox = require("@mui/material/Checkbox");
const Radio = require("@mui/material/Radio");
const RadioGroup = require("@mui/material/RadioGroup");
const Slider = require("@mui/material/Slider");
const CircularProgress = require("@mui/material/CircularProgress");
const LinearProgress = require("@mui/material/LinearProgress");
const Skeleton = require("@mui/material/Skeleton");
const Tooltip = require("@mui/material/Tooltip");
const Menu = require("@mui/material/Menu");
const MenuItem = require("@mui/material/MenuItem");
const List = require("@mui/material/List");
const ListItem = require("@mui/material/ListItem");
const ListItemText = require("@mui/material/ListItemText");
const ListItemIcon = require("@mui/material/ListItemIcon");
const ListItemButton = require("@mui/material/ListItemButton");
const Paper = require("@mui/material/Paper");
const Drawer = require("@mui/material/Drawer");
const Fab = require("@mui/material/Fab");
const FormControl = require("@mui/material/FormControl");
const FormLabel = require("@mui/material/FormLabel");
const FormHelperText = require("@mui/material/FormHelperText");
const InputLabel = require("@mui/material/InputLabel");
const Select = require("@mui/material/Select");
const useMediaQuery = require("@mui/material/useMediaQuery");
const CardActionArea = require("@mui/material/CardActionArea");
const DialogContentText = require("@mui/material/DialogContentText");
const AlertTitle = require("@mui/material/AlertTitle");
const InputAdornment = require("@mui/material/InputAdornment");
const material = require("@mui/material");
const palette = {
  /** Jagota Brand Blue — Primary palette */
  primary: {
    p100: "#FFFFFF",
    p99: "#FEFBFF",
    p98: "#FBF8FF",
    p95: "#F0EFFF",
    p90: "#DEE0FF",
    p80: "#BAC3FF",
    p70: "#96A5FF",
    p60: "#7187FF",
    p50: "#4868FF",
    p40: "#0743FF",
    // ← Jagota Brand Blue (Main)
    p35: "#0039E3",
    p30: "#0031C6",
    p25: "#0028AB",
    p20: "#001F8F",
    p10: "#00115A",
    p0: "#000000"
  },
  /** Secondary — mirrors Primary palette (monochromatic brand strategy) */
  secondary: {
    s100: "#FFFFFF",
    s99: "#FEFBFF",
    s98: "#FBF8FF",
    s95: "#F0EFFF",
    s90: "#DEE0FF",
    s80: "#BAC3FF",
    s70: "#96A5FF",
    s60: "#7187FF",
    s50: "#4868FF",
    s40: "#0743FF",
    s30: "#2E3F94",
    s20: "#12267D",
    s10: "#00115A",
    s0: "#000000"
  },
  /** Tertiary — Jagota Purple (accent / complementary) */
  tertiary: {
    t100: "#FFFFFF",
    t99: "#FFF7FF",
    t95: "#FFEBFF",
    t90: "#FCD7FF",
    t80: "#F2AFFF",
    t70: "#E07EFF",
    t60: "#CA4FFF",
    t40: "#9B00B0",
    // Tertiary 40 (estimated from palette interpolation)
    t30: "#780097",
    t20: "#55006B",
    t10: "#340043",
    t0: "#000000"
  },
  /** Error palette (M3 standard) */
  error: {
    e100: "#FFFFFF",
    e99: "#FFFBFF",
    e90: "#FFDAD6",
    e80: "#FFB4AB",
    e40: "#BA1A1A",
    e30: "#93000A",
    e20: "#690005",
    e10: "#410002",
    e0: "#000000"
  },
  /** Neutral — Surface / Background tones */
  neutral: {
    n100: "#FFFFFF",
    n99: "#FEFBFF",
    n98: "#FBF8FF",
    n95: "#F0EFFE",
    n90: "#E2E1F0",
    n80: "#C6C5D4",
    // Outline variant approx
    n70: "#ADACBE",
    n60: "#9494A7",
    n50: "#7B7A8E",
    // Outline approx
    n40: "#434657",
    // On Surface Variant
    n30: "#2E303B",
    // Inverse Surface
    n20: "#191B25",
    // On Surface / On Background
    n10: "#0E1019",
    n0: "#000000"
  },
  /** Neutral Variant — Outline / Container tones */
  neutralVariant: {
    nv100: "#FFFFFF",
    nv90: "#E0E1F6",
    // Surface Variant
    nv80: "#C4C5DA",
    // Outline Variant
    nv70: "#A9AABE",
    nv60: "#8F90A4",
    nv50: "#74768A",
    // Outline
    nv40: "#5B5C70",
    nv30: "#434657",
    // On Surface Variant
    nv20: "#2C2F43",
    nv10: "#181B2E",
    nv0: "#000000"
  }
};
const lightScheme = {
  // Primary
  primary: palette.primary.p40,
  // #0743FF
  onPrimary: palette.primary.p100,
  // #FFFFFF
  primaryContainer: palette.primary.p90,
  // #DEE0FF
  onPrimaryContainer: palette.primary.p30,
  // #0031C6
  // Secondary
  secondary: palette.secondary.s40,
  // #0743FF
  onSecondary: palette.secondary.s100,
  // #FFFFFF
  secondaryContainer: palette.secondary.s90,
  // #DEE0FF
  onSecondaryContainer: palette.secondary.s30,
  // #2E3F94
  // Tertiary
  tertiary: palette.tertiary.t40,
  // #9B00B0
  onTertiary: "#FFFFFF",
  tertiaryContainer: palette.tertiary.t90,
  // #FCD7FF
  onTertiaryContainer: palette.tertiary.t30,
  // #780097
  // Error
  error: palette.error.e40,
  // #BA1A1A
  onError: "#FFFFFF",
  errorContainer: "rgba(186, 26, 26, 0.10)",
  // #BA1A1A @10%
  onErrorContainer: palette.error.e30,
  // #93000A
  // Background
  background: "#FBF8FF",
  onBackground: "#191B25",
  // Surface hierarchy
  surface: "#FBF8FF",
  onSurface: "#191B25",
  surfaceVariant: "#E0E1F6",
  onSurfaceVariant: "#434657",
  surfaceDim: "#D9D9E7",
  surfaceBright: "#FBF8FF",
  surfaceContainerLowest: "#FFFFFF",
  surfaceContainerLow: "#F4F2FF",
  surfaceContainer: "#EDECFB",
  surfaceContainerHigh: "#E8E7F5",
  surfaceContainerHighest: "#E2E1F0",
  // Outline
  outline: "#747689",
  outlineVariant: "#C4C5DA",
  // Misc
  shadow: "#000000",
  scrim: "#000000",
  surfaceTint: "#0743FF",
  // Inverse
  inverseSurface: "#2E303B",
  inverseOnSurface: "#F0EFFE",
  inversePrimary: "#BAC3FF",
  // Fixed (persistent across themes)
  primaryFixed: "#DEE0FF",
  onPrimaryFixed: "#00115A",
  primaryFixedDim: "#BAC3FF",
  onPrimaryFixedVariant: "#0031C6",
  secondaryFixed: "#DEE0FF",
  onSecondaryFixed: "#00115A",
  secondaryFixedDim: "#BAC3FF",
  onSecondaryFixedVariant: "#2E3F94",
  tertiaryFixed: "#FCD7FF",
  onTertiaryFixed: "#340043",
  tertiaryFixedDim: "#F2AFFF",
  onTertiaryFixedVariant: "#780097",
  // Jagota custom add-ons
  sectionBackground: "#F5F5F5"
};
const darkScheme = {
  // Primary
  primary: "#BAC3FF",
  onPrimary: "#00208E",
  primaryContainer: "#0743FF",
  onPrimaryContainer: "#D1D6FF",
  // Secondary
  secondary: "#BAC3FF",
  onSecondary: "#12267D",
  secondaryContainer: "#304196",
  onSecondaryContainer: "#A7B4FF",
  // Tertiary
  tertiary: "#F2AFFF",
  onTertiary: "#55006B",
  tertiaryContainer: "#780097",
  onTertiaryContainer: "#FCD7FF",
  // Error
  error: "#FFB4AB",
  onError: "#690005",
  errorContainer: "#93000A",
  onErrorContainer: "#FFDAD6",
  // Background
  background: "#111318",
  onBackground: "#E3E2EA",
  // Surface hierarchy (dark)
  surface: "#111318",
  onSurface: "#E3E2EA",
  surfaceVariant: "#44464F",
  onSurfaceVariant: "#C4C6D0",
  surfaceDim: "#111318",
  surfaceBright: "#373943",
  surfaceContainerLowest: "#0C0E13",
  surfaceContainerLow: "#191C23",
  surfaceContainer: "#1D2028",
  surfaceContainerHigh: "#282A32",
  surfaceContainerHighest: "#33363D",
  // Outline
  outline: "#8E9099",
  outlineVariant: "#44464F",
  // Misc
  shadow: "#000000",
  scrim: "#000000",
  surfaceTint: "#BAC3FF",
  // Inverse
  inverseSurface: "#E3E2EA",
  inverseOnSurface: "#2E3038",
  inversePrimary: "#0743FF",
  // Fixed (same as light — fixed means persistent)
  primaryFixed: "#DEE0FF",
  onPrimaryFixed: "#00115A",
  primaryFixedDim: "#BAC3FF",
  onPrimaryFixedVariant: "#0031C6",
  secondaryFixed: "#DEE0FF",
  onSecondaryFixed: "#00115A",
  secondaryFixedDim: "#BAC3FF",
  onSecondaryFixedVariant: "#2E3F94",
  tertiaryFixed: "#FCD7FF",
  onTertiaryFixed: "#340043",
  tertiaryFixedDim: "#F2AFFF",
  onTertiaryFixedVariant: "#780097",
  // Jagota custom
  sectionBackground: "#1A1A1A"
};
const surfaceTints = {
  level0: "transparent",
  level1: "rgba(7, 67, 255, 0.05)",
  // 5%
  level2: "rgba(7, 67, 255, 0.08)",
  // 8%
  level3: "rgba(7, 67, 255, 0.11)",
  // 11%
  level4: "rgba(7, 67, 255, 0.12)",
  // 12%
  level5: "rgba(7, 67, 255, 0.14)"
  // 14%
};
const colors = {
  palette,
  light: lightScheme,
  dark: darkScheme,
  surfaceTints
};
const fontFamily = {
  /** Brand font — Display, Headline, Title Large */
  brand: '"TikTok Sans", "Noto Sans Thai", "Sarabun", sans-serif',
  /** Plain font — Body, Label, UI text */
  plain: '"TikTok Sans", "Noto Sans Thai", "Sarabun", sans-serif',
  /** Monospace — Code snippets, data tables */
  mono: '"JetBrains Mono", "Fira Code", "Courier New", monospace'
};
const fontWeight = {
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700
};
const typeScale = {
  /** 57/64 — Hero banners, splash screens */
  displayLarge: {
    fontFamily: fontFamily.brand,
    fontSize: 57,
    lineHeight: 64,
    letterSpacing: -0.25,
    fontWeight: fontWeight.regular,
    fontWeightEmphasis: fontWeight.medium
  },
  /** 45/52 — Large page headers */
  displayMedium: {
    fontFamily: fontFamily.brand,
    fontSize: 45,
    lineHeight: 52,
    letterSpacing: 0,
    fontWeight: fontWeight.regular,
    fontWeightEmphasis: fontWeight.medium
  },
  /** 36/44 — Section display headers */
  displaySmall: {
    fontFamily: fontFamily.brand,
    fontSize: 36,
    lineHeight: 44,
    letterSpacing: 0,
    fontWeight: fontWeight.regular,
    fontWeightEmphasis: fontWeight.medium
  },
  /** 32/40 — Major section titles */
  headlineLarge: {
    fontFamily: fontFamily.brand,
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: 0,
    fontWeight: fontWeight.regular,
    fontWeightEmphasis: fontWeight.medium
  },
  /** 28/36 — Card section headings */
  headlineMedium: {
    fontFamily: fontFamily.brand,
    fontSize: 28,
    lineHeight: 36,
    letterSpacing: 0,
    fontWeight: fontWeight.regular,
    fontWeightEmphasis: fontWeight.medium
  },
  /** 24/32 — Sub-section headings */
  headlineSmall: {
    fontFamily: fontFamily.brand,
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: 0,
    fontWeight: fontWeight.regular,
    fontWeightEmphasis: fontWeight.medium
  },
  /** 22/28 — Dialog titles, card titles */
  titleLarge: {
    fontFamily: fontFamily.brand,
    fontSize: 22,
    lineHeight: 28,
    letterSpacing: 0,
    fontWeight: fontWeight.regular,
    fontWeightEmphasis: fontWeight.medium
  },
  /** 16/24 — List item titles, input labels */
  titleMedium: {
    fontFamily: fontFamily.plain,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
    fontWeight: fontWeight.medium,
    fontWeightEmphasis: fontWeight.semiBold
  },
  /** 14/20 — Small component titles */
  titleSmall: {
    fontFamily: fontFamily.plain,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.1,
    fontWeight: fontWeight.medium,
    fontWeightEmphasis: fontWeight.semiBold
  },
  /** 16/24 — Body reading (long form) */
  bodyLarge: {
    fontFamily: fontFamily.plain,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
    fontWeight: fontWeight.regular,
    fontWeightEmphasis: fontWeight.medium
  },
  /** 14/20 — Standard body text */
  bodyMedium: {
    fontFamily: fontFamily.plain,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
    fontWeight: fontWeight.regular,
    fontWeightEmphasis: fontWeight.medium
  },
  /** 12/16 — Secondary body, descriptions */
  bodySmall: {
    fontFamily: fontFamily.plain,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
    fontWeight: fontWeight.regular,
    fontWeightEmphasis: fontWeight.medium
  },
  /** 14/20 — Prominent labels, button text */
  labelLarge: {
    fontFamily: fontFamily.plain,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.1,
    fontWeight: fontWeight.medium,
    fontWeightEmphasis: fontWeight.semiBold
  },
  /** 12/16 — Input labels, chip text */
  labelMedium: {
    fontFamily: fontFamily.plain,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.5,
    fontWeight: fontWeight.medium,
    fontWeightEmphasis: fontWeight.semiBold
  },
  /** 11/16 — Caption, overline, badge */
  labelSmall: {
    fontFamily: fontFamily.plain,
    fontSize: 11,
    lineHeight: 16,
    letterSpacing: 0.5,
    fontWeight: fontWeight.medium,
    fontWeightEmphasis: fontWeight.semiBold
  }
};
const typeScaleMobile = {
  displayLarge: { fontSize: 40, lineHeight: 48 },
  displayMedium: { fontSize: 32, lineHeight: 40 },
  displaySmall: { fontSize: 28, lineHeight: 36 },
  headlineLarge: { fontSize: 24, lineHeight: 32 },
  headlineMedium: { fontSize: 20, lineHeight: 28 },
  headlineSmall: { fontSize: 18, lineHeight: 26 },
  titleLarge: { fontSize: 18, lineHeight: 24 },
  titleMedium: { fontSize: 14, lineHeight: 20 },
  titleSmall: { fontSize: 12, lineHeight: 18 },
  bodyLarge: { fontSize: 14, lineHeight: 20 },
  bodyMedium: { fontSize: 12, lineHeight: 18 },
  bodySmall: { fontSize: 11, lineHeight: 16 },
  labelLarge: { fontSize: 12, lineHeight: 18 },
  labelMedium: { fontSize: 11, lineHeight: 16 },
  labelSmall: { fontSize: 10, lineHeight: 14 }
};
const typeScaleTablet = {
  displayLarge: { fontSize: 48, lineHeight: 56 },
  displayMedium: { fontSize: 40, lineHeight: 48 },
  displaySmall: { fontSize: 32, lineHeight: 40 },
  headlineLarge: { fontSize: 28, lineHeight: 36 },
  headlineMedium: { fontSize: 24, lineHeight: 32 },
  headlineSmall: { fontSize: 22, lineHeight: 28 },
  titleLarge: { fontSize: 20, lineHeight: 28 },
  titleMedium: { fontSize: 16, lineHeight: 24 },
  titleSmall: { fontSize: 14, lineHeight: 20 },
  bodyLarge: { fontSize: 16, lineHeight: 24 },
  bodyMedium: { fontSize: 14, lineHeight: 20 },
  bodySmall: { fontSize: 12, lineHeight: 16 },
  labelLarge: { fontSize: 14, lineHeight: 20 },
  labelMedium: { fontSize: 12, lineHeight: 16 },
  labelSmall: { fontSize: 11, lineHeight: 16 }
};
const typography = {
  fontFamily,
  fontWeight,
  typeScale,
  responsive: {
    mobile: typeScaleMobile,
    tablet: typeScaleTablet
  }
};
const cornerRadius = {
  /** 0px — Sharp edges, bottom sheet background */
  none: 0,
  /** 4px — Tooltips, small menus, snackbars */
  extraSmall: 4,
  /** 8px — Chips, text fields, select inputs */
  small: 8,
  /** 12px — Cards, dialogs, modals */
  medium: 12,
  /** 16px — FAB, navigation components */
  large: 16,
  /** 20px — Large cards, feature panels */
  largeIncreased: 20,
  /** 28px — Extended FAB, bottom sheet top */
  extraLarge: 28,
  /** 32px — Full-width banners */
  extraLargeIncreased: 32,
  /** 48px — Dialog / sheet radius (very rounded) */
  extraExtraLarge: 48,
  /** 1000px — Pills, avatar chips, fully circular */
  full: 1e3
};
const componentShape = {
  // Buttons
  filledButton: cornerRadius.full,
  // pill shape
  outlinedButton: cornerRadius.full,
  textButton: cornerRadius.full,
  tonalButton: cornerRadius.full,
  elevatedButton: cornerRadius.full,
  iconButton: cornerRadius.full,
  // FAB
  fab: cornerRadius.large,
  fabExtended: cornerRadius.large,
  fabLarge: cornerRadius.extraLarge,
  // Input / Form
  textField: cornerRadius.extraSmall,
  // top corners only
  textFieldOutlined: cornerRadius.extraSmall,
  select: cornerRadius.extraSmall,
  searchBar: cornerRadius.full,
  // Selection
  chip: cornerRadius.small,
  filterChip: cornerRadius.small,
  inputChip: cornerRadius.small,
  suggestionChip: cornerRadius.small,
  // Cards & Surfaces
  card: cornerRadius.medium,
  cardElevated: cornerRadius.medium,
  cardFilled: cornerRadius.medium,
  cardOutlined: cornerRadius.medium,
  // Dialogs & Sheets
  dialog: cornerRadius.extraLarge,
  bottomSheet: cornerRadius.extraLarge,
  // top corners only
  sideSheet: cornerRadius.large,
  // edge corners only
  navigationDrawer: cornerRadius.large,
  // right corners only
  // Navigation
  navigationBar: cornerRadius.full,
  // indicator pill
  navigationRail: cornerRadius.full,
  navigationDrawerItem: cornerRadius.full,
  tab: cornerRadius.full,
  // Misc
  badge: cornerRadius.full,
  snackbar: cornerRadius.extraSmall,
  tooltip: cornerRadius.extraSmall,
  menu: cornerRadius.extraSmall,
  menuItem: cornerRadius.none,
  // Jagota custom
  table: cornerRadius.extraSmall,
  tableCell: cornerRadius.none,
  avatar: cornerRadius.full,
  banner: cornerRadius.medium,
  tag: cornerRadius.extraSmall,
  statusBadge: cornerRadius.extraSmall
};
const toRadius = (value) => {
  if (value === cornerRadius.full) return "1000px";
  return `${value}px`;
};
const shape = {
  cornerRadius,
  component: componentShape,
  toRadius
};
const shadows = {
  level0: "none",
  level1: "0px 1px 2px rgba(0,0,0,0.30), 0px 1px 3px 1px rgba(0,0,0,0.15)",
  level2: "0px 1px 2px rgba(0,0,0,0.30), 0px 2px 6px 2px rgba(0,0,0,0.15)",
  level3: "0px 4px 8px 3px rgba(0,0,0,0.15), 0px 1px 3px rgba(0,0,0,0.30)",
  level4: "0px 6px 10px 4px rgba(0,0,0,0.15), 0px 2px 3px rgba(0,0,0,0.30)",
  level5: "0px 8px 12px 6px rgba(0,0,0,0.15), 0px 4px 4px rgba(0,0,0,0.30)"
};
const lightTints = {
  level0: "transparent",
  level1: "rgba(7, 67, 255, 0.05)",
  level2: "rgba(7, 67, 255, 0.08)",
  level3: "rgba(7, 67, 255, 0.11)",
  level4: "rgba(7, 67, 255, 0.12)",
  level5: "rgba(7, 67, 255, 0.14)"
};
const darkTints = {
  level0: "transparent",
  level1: "rgba(186, 195, 255, 0.05)",
  level2: "rgba(186, 195, 255, 0.08)",
  level3: "rgba(186, 195, 255, 0.11)",
  level4: "rgba(186, 195, 255, 0.12)",
  level5: "rgba(186, 195, 255, 0.14)"
};
const elevation = {
  level0: {
    shadow: shadows.level0,
    lightTint: lightTints.level0,
    darkTint: darkTints.level0,
    zIndex: 0
  },
  level1: {
    shadow: shadows.level1,
    lightTint: lightTints.level1,
    darkTint: darkTints.level1,
    zIndex: 1
  },
  level2: {
    shadow: shadows.level2,
    lightTint: lightTints.level2,
    darkTint: darkTints.level2,
    zIndex: 2
  },
  level3: {
    shadow: shadows.level3,
    lightTint: lightTints.level3,
    darkTint: darkTints.level3,
    zIndex: 3
  },
  level4: {
    shadow: shadows.level4,
    lightTint: lightTints.level4,
    darkTint: darkTints.level4,
    zIndex: 4
  },
  level5: {
    shadow: shadows.level5,
    lightTint: lightTints.level5,
    darkTint: darkTints.level5,
    zIndex: 5
  }
};
const zIndex = {
  base: 0,
  raised: 10,
  dropdown: 100,
  sticky: 200,
  overlay: 300,
  drawer: 400,
  modal: 500,
  toast: 600,
  tooltip: 700,
  popover: 800
};
const sharedOptions = {
  // ── Typography ──────────────────────────────────────────────────────────
  typography: {
    fontFamily: fontFamily.plain,
    // Display
    h1: {
      fontFamily: fontFamily.brand,
      fontSize: `${typeScale.displayLarge.fontSize}px`,
      lineHeight: `${typeScale.displayLarge.lineHeight}px`,
      letterSpacing: `${typeScale.displayLarge.letterSpacing}px`,
      fontWeight: fontWeight.regular
    },
    h2: {
      fontFamily: fontFamily.brand,
      fontSize: `${typeScale.displayMedium.fontSize}px`,
      lineHeight: `${typeScale.displayMedium.lineHeight}px`,
      letterSpacing: `${typeScale.displayMedium.letterSpacing}px`,
      fontWeight: fontWeight.regular
    },
    h3: {
      fontFamily: fontFamily.brand,
      fontSize: `${typeScale.displaySmall.fontSize}px`,
      lineHeight: `${typeScale.displaySmall.lineHeight}px`,
      letterSpacing: `${typeScale.displaySmall.letterSpacing}px`,
      fontWeight: fontWeight.regular
    },
    // Headline
    h4: {
      fontFamily: fontFamily.brand,
      fontSize: `${typeScale.headlineLarge.fontSize}px`,
      lineHeight: `${typeScale.headlineLarge.lineHeight}px`,
      letterSpacing: `${typeScale.headlineLarge.letterSpacing}px`,
      fontWeight: fontWeight.regular
    },
    h5: {
      fontFamily: fontFamily.brand,
      fontSize: `${typeScale.headlineMedium.fontSize}px`,
      lineHeight: `${typeScale.headlineMedium.lineHeight}px`,
      letterSpacing: `${typeScale.headlineMedium.letterSpacing}px`,
      fontWeight: fontWeight.regular
    },
    h6: {
      fontFamily: fontFamily.brand,
      fontSize: `${typeScale.headlineSmall.fontSize}px`,
      lineHeight: `${typeScale.headlineSmall.lineHeight}px`,
      letterSpacing: `${typeScale.headlineSmall.letterSpacing}px`,
      fontWeight: fontWeight.regular
    },
    // Title
    subtitle1: {
      fontFamily: fontFamily.plain,
      fontSize: `${typeScale.titleMedium.fontSize}px`,
      lineHeight: `${typeScale.titleMedium.lineHeight}px`,
      letterSpacing: `${typeScale.titleMedium.letterSpacing}px`,
      fontWeight: fontWeight.medium
    },
    subtitle2: {
      fontFamily: fontFamily.plain,
      fontSize: `${typeScale.titleSmall.fontSize}px`,
      lineHeight: `${typeScale.titleSmall.lineHeight}px`,
      letterSpacing: `${typeScale.titleSmall.letterSpacing}px`,
      fontWeight: fontWeight.medium
    },
    // Body
    body1: {
      fontFamily: fontFamily.plain,
      fontSize: `${typeScale.bodyLarge.fontSize}px`,
      lineHeight: `${typeScale.bodyLarge.lineHeight}px`,
      letterSpacing: `${typeScale.bodyLarge.letterSpacing}px`,
      fontWeight: fontWeight.regular
    },
    body2: {
      fontFamily: fontFamily.plain,
      fontSize: `${typeScale.bodyMedium.fontSize}px`,
      lineHeight: `${typeScale.bodyMedium.lineHeight}px`,
      letterSpacing: `${typeScale.bodyMedium.letterSpacing}px`,
      fontWeight: fontWeight.regular
    },
    // Label / Button / Caption
    button: {
      fontFamily: fontFamily.plain,
      fontSize: `${typeScale.labelLarge.fontSize}px`,
      lineHeight: `${typeScale.labelLarge.lineHeight}px`,
      letterSpacing: `${typeScale.labelLarge.letterSpacing}px`,
      fontWeight: fontWeight.medium,
      textTransform: "none"
      // M3 ไม่ใช้ UPPERCASE
    },
    caption: {
      fontFamily: fontFamily.plain,
      fontSize: `${typeScale.bodySmall.fontSize}px`,
      lineHeight: `${typeScale.bodySmall.lineHeight}px`,
      letterSpacing: `${typeScale.bodySmall.letterSpacing}px`,
      fontWeight: fontWeight.regular
    },
    overline: {
      fontFamily: fontFamily.plain,
      fontSize: `${typeScale.labelSmall.fontSize}px`,
      lineHeight: `${typeScale.labelSmall.lineHeight}px`,
      letterSpacing: `${typeScale.labelSmall.letterSpacing}px`,
      fontWeight: fontWeight.medium,
      textTransform: "none"
    }
  },
  // ── Shape ────────────────────────────────────────────────────────────────
  shape: {
    borderRadius: cornerRadius.medium
    // 12px default
  },
  // ── Shadows (M3) ─────────────────────────────────────────────────────────
  shadows: [
    "none",
    // 0
    shadows.level1,
    // 1
    shadows.level2,
    // 2
    shadows.level3,
    // 3
    shadows.level4,
    // 4
    shadows.level5,
    // 5
    shadows.level5,
    // 6–24 (MUI ต้องการ 25 levels)
    shadows.level5,
    shadows.level5,
    shadows.level5,
    shadows.level5,
    shadows.level5,
    shadows.level5,
    shadows.level5,
    shadows.level5,
    shadows.level5,
    shadows.level5,
    shadows.level5,
    shadows.level5,
    shadows.level5,
    shadows.level5,
    shadows.level5,
    shadows.level5,
    shadows.level5,
    shadows.level5
  ],
  // ── Breakpoints (Jagota responsive grid) ────────────────────────────────
  breakpoints: {
    values: {
      xs: 0,
      sm: 360,
      md: 600,
      lg: 960,
      xl: 1280
    }
  },
  // ── Spacing (4px base) ───────────────────────────────────────────────────
  spacing: 4
  // spacing(1) = 4px, spacing(4) = 16px
};
const getComponentOverrides = (scheme) => ({
  // ── Button ───────────────────────────────────────────────────────────────
  MuiButton: {
    defaultProps: {
      disableElevation: true,
      variant: "contained"
    },
    styleOverrides: {
      root: {
        borderRadius: cornerRadius.full,
        // pill shape
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: `${typeScale.labelLarge.fontSize}px`,
        lineHeight: `${typeScale.labelLarge.lineHeight}px`,
        letterSpacing: `${typeScale.labelLarge.letterSpacing}px`,
        fontWeight: fontWeight.medium,
        textTransform: "none",
        minWidth: 64,
        transition: "all 200ms cubic-bezier(0.2, 0, 0, 1)"
      },
      // Filled (Contained)
      contained: {
        backgroundColor: scheme.primary,
        color: scheme.onPrimary,
        boxShadow: "none",
        "&:hover": {
          boxShadow: shadows.level1,
          backgroundColor: scheme.primary,
          opacity: 0.92
        },
        "&:active": { boxShadow: "none" },
        "&:disabled": {
          backgroundColor: `${scheme.onSurface}1F`,
          // 12% opacity
          color: `${scheme.onSurface}61`
          // 38% opacity
        }
      },
      // Outlined
      outlined: {
        borderColor: scheme.outline,
        color: scheme.primary,
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: `${scheme.primary}14`,
          // 8% opacity
          borderColor: scheme.outline
        },
        "&:disabled": {
          borderColor: `${scheme.onSurface}1F`,
          color: `${scheme.onSurface}61`
        }
      },
      // Text
      text: {
        color: scheme.primary,
        "&:hover": {
          backgroundColor: `${scheme.primary}14`
        }
      },
      // Tonal (ใช้ containedSecondary ใน MUI)
      containedSecondary: {
        backgroundColor: scheme.secondaryContainer,
        color: scheme.onSecondaryContainer,
        boxShadow: "none",
        "&:hover": {
          boxShadow: shadows.level1,
          opacity: 0.92
        }
      }
    }
  },
  // ── Card ─────────────────────────────────────────────────────────────────
  MuiCard: {
    defaultProps: {
      elevation: 1
    },
    styleOverrides: {
      root: {
        borderRadius: cornerRadius.medium,
        // 12px
        backgroundColor: scheme.surfaceContainerLow,
        color: scheme.onSurface,
        overflow: "hidden"
      }
    }
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: 16,
        "&:last-child": { paddingBottom: 16 }
      }
    }
  },
  // ── TextField / Input ─────────────────────────────────────────────────────
  MuiTextField: {
    defaultProps: {
      variant: "outlined"
    }
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: cornerRadius.extraSmall,
        // 4px top
        backgroundColor: scheme.surface,
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: scheme.onSurface
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: scheme.primary,
          borderWidth: 2
        },
        "&.Mui-error .MuiOutlinedInput-notchedOutline": {
          borderColor: scheme.error
        }
      },
      notchedOutline: {
        borderColor: scheme.outline
      },
      input: {
        fontSize: `${typeScale.bodyLarge.fontSize}px`,
        lineHeight: `${typeScale.bodyLarge.lineHeight}px`,
        letterSpacing: `${typeScale.bodyLarge.letterSpacing}px`,
        padding: "16px 12px",
        color: scheme.onSurface
      }
    }
  },
  MuiFilledInput: {
    styleOverrides: {
      root: {
        borderTopLeftRadius: cornerRadius.extraSmall,
        borderTopRightRadius: cornerRadius.extraSmall,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: scheme.surfaceContainerHighest,
        "&:hover": {
          backgroundColor: scheme.surfaceContainerHigh
        },
        "&.Mui-focused": {
          backgroundColor: scheme.surfaceContainerHighest
        },
        "&::before": { borderBottomColor: scheme.onSurfaceVariant },
        "&::after": { borderBottomColor: scheme.primary }
      }
    }
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: scheme.onSurfaceVariant,
        fontSize: `${typeScale.bodyLarge.fontSize}px`,
        "&.Mui-focused": { color: scheme.primary },
        "&.Mui-error": { color: scheme.error }
      }
    }
  },
  // ── Chip ─────────────────────────────────────────────────────────────────
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: cornerRadius.small,
        // 8px
        fontSize: `${typeScale.labelLarge.fontSize}px`,
        height: 32,
        fontWeight: fontWeight.medium
      },
      filled: {
        backgroundColor: scheme.secondaryContainer,
        color: scheme.onSecondaryContainer,
        "&:hover": { backgroundColor: scheme.secondaryContainer, opacity: 0.92 }
      },
      outlined: {
        borderColor: scheme.outline,
        color: scheme.onSurfaceVariant,
        "&:hover": { backgroundColor: `${scheme.onSurface}14` }
      }
    }
  },
  // ── Dialog ───────────────────────────────────────────────────────────────
  MuiDialog: {
    styleOverrides: {
      paper: {
        borderRadius: cornerRadius.extraLarge,
        // 28px
        backgroundColor: scheme.surfaceContainerHigh,
        color: scheme.onSurface,
        padding: 0,
        boxShadow: shadows.level3
      }
    }
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        fontSize: `${typeScale.headlineSmall.fontSize}px`,
        lineHeight: `${typeScale.headlineSmall.lineHeight}px`,
        fontWeight: fontWeight.regular,
        padding: "24px 24px 16px",
        color: scheme.onSurface
      }
    }
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        padding: "0 24px",
        fontSize: `${typeScale.bodyMedium.fontSize}px`,
        lineHeight: `${typeScale.bodyMedium.lineHeight}px`,
        color: scheme.onSurfaceVariant
      }
    }
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        padding: "24px",
        gap: 8
      }
    }
  },
  // ── Snackbar ──────────────────────────────────────────────────────────────
  MuiSnackbar: {
    defaultProps: {
      anchorOrigin: { vertical: "bottom", horizontal: "center" }
    }
  },
  MuiSnackbarContent: {
    styleOverrides: {
      root: {
        borderRadius: cornerRadius.extraSmall,
        // 4px
        backgroundColor: scheme.inverseSurface,
        color: scheme.inverseOnSurface,
        fontSize: `${typeScale.bodyMedium.fontSize}px`,
        lineHeight: `${typeScale.bodyMedium.lineHeight}px`,
        padding: "12px 16px",
        minWidth: 288,
        maxWidth: 568
      },
      action: {
        color: scheme.inversePrimary,
        paddingLeft: 8
      }
    }
  },
  // ── AppBar ────────────────────────────────────────────────────────────────
  MuiAppBar: {
    defaultProps: {
      elevation: 0,
      color: "default"
    },
    styleOverrides: {
      root: {
        backgroundColor: scheme.surface,
        color: scheme.onSurface,
        borderBottom: `1px solid ${scheme.outlineVariant}`
      }
    }
  },
  // ── Divider ───────────────────────────────────────────────────────────────
  MuiDivider: {
    styleOverrides: {
      root: {
        borderColor: scheme.outlineVariant
      }
    }
  },
  // ── Switch ────────────────────────────────────────────────────────────────
  MuiSwitch: {
    styleOverrides: {
      track: {
        borderRadius: cornerRadius.full,
        backgroundColor: scheme.surfaceVariant,
        opacity: 1
      },
      thumb: {
        boxShadow: "none"
      },
      switchBase: {
        "&.Mui-checked": {
          color: scheme.onPrimary,
          "& + .MuiSwitch-track": {
            backgroundColor: scheme.primary,
            opacity: 1
          }
        }
      }
    }
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
        padding: "4px 8px"
      },
      arrow: {
        color: scheme.inverseSurface
      }
    }
  },
  // ── List ──────────────────────────────────────────────────────────────────
  MuiListItem: {
    styleOverrides: {
      root: {
        borderRadius: cornerRadius.none,
        paddingTop: 12,
        paddingBottom: 12
      }
    }
  },
  MuiListItemText: {
    styleOverrides: {
      primary: {
        fontSize: `${typeScale.bodyLarge.fontSize}px`,
        lineHeight: `${typeScale.bodyLarge.lineHeight}px`,
        color: scheme.onSurface
      },
      secondary: {
        fontSize: `${typeScale.bodyMedium.fontSize}px`,
        lineHeight: `${typeScale.bodyMedium.lineHeight}px`,
        color: scheme.onSurfaceVariant
      }
    }
  },
  // ── Tabs ──────────────────────────────────────────────────────────────────
  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: "none",
        fontSize: `${typeScale.titleSmall.fontSize}px`,
        fontWeight: fontWeight.medium,
        letterSpacing: `${typeScale.titleSmall.letterSpacing}px`,
        color: scheme.onSurfaceVariant,
        minHeight: 48,
        "&.Mui-selected": {
          color: scheme.primary
        }
      }
    }
  },
  MuiTabs: {
    styleOverrides: {
      indicator: {
        backgroundColor: scheme.primary,
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3
      }
    }
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
        padding: "0 4px"
      }
    }
  },
  // ── Paper ─────────────────────────────────────────────────────────────────
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: "none"
        // ปิด MUI default gradient
      },
      rounded: {
        borderRadius: cornerRadius.medium
      }
    }
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
    `
  }
});
const jagotaLightTheme = styles.createTheme({
  ...sharedOptions,
  palette: {
    mode: "light",
    primary: {
      main: lightScheme.primary,
      light: palette.primary.p60,
      dark: palette.primary.p30,
      contrastText: lightScheme.onPrimary
    },
    secondary: {
      main: lightScheme.secondary,
      light: palette.secondary.s60,
      dark: palette.secondary.s30,
      contrastText: lightScheme.onSecondary
    },
    error: {
      main: lightScheme.error,
      contrastText: lightScheme.onError
    },
    warning: {
      main: "#F59E0B",
      contrastText: "#FFFFFF"
    },
    info: {
      main: lightScheme.tertiary,
      contrastText: lightScheme.onTertiary
    },
    success: {
      main: "#22C55E",
      contrastText: "#FFFFFF"
    },
    background: {
      default: lightScheme.background,
      paper: lightScheme.surfaceContainerLow
    },
    text: {
      primary: lightScheme.onSurface,
      secondary: lightScheme.onSurfaceVariant,
      disabled: `${lightScheme.onSurface}61`
    },
    divider: lightScheme.outlineVariant,
    action: {
      hover: `${lightScheme.primary}14`,
      selected: `${lightScheme.primary}1F`,
      disabled: `${lightScheme.onSurface}61`,
      disabledBackground: `${lightScheme.onSurface}1F`,
      focus: `${lightScheme.primary}1F`
    }
  },
  components: getComponentOverrides(lightScheme)
});
const jagotaDarkTheme = styles.createTheme({
  ...sharedOptions,
  palette: {
    mode: "dark",
    primary: {
      main: darkScheme.primary,
      light: palette.primary.p80,
      dark: palette.primary.p40,
      contrastText: darkScheme.onPrimary
    },
    secondary: {
      main: darkScheme.secondary,
      light: palette.secondary.s80,
      dark: palette.secondary.s40,
      contrastText: darkScheme.onSecondary
    },
    error: {
      main: darkScheme.error,
      contrastText: darkScheme.onError
    },
    warning: {
      main: "#FCD34D",
      contrastText: "#1C1410"
    },
    info: {
      main: darkScheme.tertiary,
      contrastText: darkScheme.onTertiary
    },
    success: {
      main: "#86EFAC",
      contrastText: "#052E16"
    },
    background: {
      default: darkScheme.background,
      paper: darkScheme.surfaceContainerLow
    },
    text: {
      primary: darkScheme.onSurface,
      secondary: darkScheme.onSurfaceVariant,
      disabled: `${darkScheme.onSurface}61`
    },
    divider: darkScheme.outlineVariant,
    action: {
      hover: `${darkScheme.primary}14`,
      selected: `${darkScheme.primary}1F`,
      disabled: `${darkScheme.onSurface}61`,
      disabledBackground: `${darkScheme.onSurface}1F`,
      focus: `${darkScheme.primary}1F`
    }
  },
  components: getComponentOverrides(darkScheme)
});
const createJagotaMuiTheme = (mode = "light") => mode === "dark" ? jagotaDarkTheme : jagotaLightTheme;
const JagotaContext = React.createContext(null);
JagotaContext.displayName = "JagotaContext";
const getSystemMode = () => {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};
const resolveMode = (mode) => {
  if (mode === "system") return getSystemMode();
  return mode;
};
function JagotaProvider({
  children,
  defaultMode = "light",
  disableCssBaseline = false
}) {
  const [selectedMode, setSelectedMode] = React.useState(defaultMode);
  const resolvedMode = React.useMemo(() => resolveMode(selectedMode), [selectedMode]);
  const theme = React.useMemo(
    () => createJagotaMuiTheme(resolvedMode),
    [resolvedMode]
  );
  const setMode = React.useCallback((mode) => {
    setSelectedMode(mode);
    if (typeof window !== "undefined") {
      localStorage.setItem("jagota-color-mode", mode);
    }
  }, []);
  const toggleMode = React.useCallback(() => {
    setMode(resolvedMode === "light" ? "dark" : "light");
  }, [resolvedMode, setMode]);
  const contextValue = React.useMemo(() => ({
    mode: resolvedMode,
    selectedMode,
    theme,
    setMode,
    toggleMode
  }), [resolvedMode, selectedMode, theme, setMode, toggleMode]);
  return /* @__PURE__ */ jsxRuntime.jsx(JagotaContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsxRuntime.jsxs(styles.ThemeProvider, { theme, children: [
    !disableCssBaseline && /* @__PURE__ */ jsxRuntime.jsx(CssBaseline, {}),
    children
  ] }) });
}
function useJagotaContext() {
  const context = React.useContext(JagotaContext);
  if (!context) {
    throw new Error(
      "[JagotaUI] useJagotaContext ต้องใช้ภายใน <JagotaProvider>\nวิธีแก้: ครอบ <JagotaProvider> ที่ root ของ App"
    );
  }
  return context;
}
const spacingScale = {
  /** 2px — Hairline gaps, micro spacing */
  xs: 2,
  /** 4px — Icon inner padding, tight gaps */
  s: 4,
  /** 8px — Default inner padding, small gaps */
  m: 8,
  /** 12px — Input padding, medium gaps */
  sm: 12,
  /** 16px — Section padding, card padding */
  l: 16,
  /** 20px — Dialog / modal padding */
  sl: 20,
  /** 24px — Large section spacing */
  xl: 24,
  /** 32px — Page section separation */
  "2xl": 32,
  /** 40px — Feature block spacing */
  "3xl": 40,
  /** 48px — Page-level padding */
  "4xl": 48,
  /** 64px — Hero section padding */
  "5xl": 64
};
const spacingArray = [2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64];
const BASE_UNIT = 4;
const spacing = (units) => `${units * BASE_UNIT}px`;
const layoutGrid = {
  /** Mobile (< 600px) — 4 columns */
  mobile: {
    columns: 4,
    gutter: 16,
    // px between columns
    margin: 16,
    // px side margin
    maxWidth: 600
  },
  /** Tablet (600px – 1024px) — 8 columns */
  tablet: {
    columns: 8,
    gutter: 24,
    margin: 24,
    maxWidth: 1024
  },
  /** Desktop (1024px – 1440px) — 12 columns */
  desktop: {
    columns: 12,
    gutter: 24,
    margin: 24,
    maxWidth: 1440
  },
  /** Wide (> 1440px) — 12 columns with expanded margins */
  wide: {
    columns: 12,
    gutter: 24,
    margin: 48,
    maxWidth: 1920
  }
};
const breakpoints = {
  xs: 0,
  // < 360px  — very small mobile
  sm: 360,
  // ≥ 360px  — standard mobile
  md: 600,
  // ≥ 600px  — large mobile / tablet portrait
  lg: 960,
  // ≥ 960px  — tablet landscape
  xl: 1280,
  // ≥ 1280px — desktop
  "2xl": 1536
  // ≥ 1536px — wide desktop
};
const space = {
  scale: spacingScale,
  array: spacingArray,
  fn: spacing,
  grid: layoutGrid,
  breakpoints
};
function useJagotaTheme() {
  const { mode, selectedMode, setMode, toggleMode } = useJagotaContext();
  const muiTheme = styles.useTheme();
  const colors2 = mode === "dark" ? darkScheme : lightScheme;
  return {
    mode,
    selectedMode,
    setMode,
    toggleMode,
    colors: colors2,
    typeScale,
    spacing: spacingScale,
    radius: cornerRadius,
    muiTheme,
    isDark: mode === "dark",
    isLight: mode === "light"
  };
}
function useJagotaColors() {
  const { mode } = useJagotaContext();
  return mode === "dark" ? darkScheme : lightScheme;
}
function useColorMode() {
  const { mode, selectedMode, setMode, toggleMode } = useJagotaContext();
  return {
    mode,
    selectedMode,
    isDark: mode === "dark",
    isLight: mode === "light",
    setMode,
    toggleMode
  };
}
const variantMap = {
  filled: { variant: "contained", color: "primary" },
  tonal: { variant: "contained", color: "secondary" },
  outlined: { variant: "outlined", color: "primary" },
  text: { variant: "text", color: "primary" },
  elevated: {
    variant: "contained",
    color: "primary",
    sx: {
      boxShadow: "0px 1px 2px rgba(0,0,0,0.3), 0px 1px 3px 1px rgba(0,0,0,0.15)",
      "&:hover": {
        boxShadow: "0px 1px 2px rgba(0,0,0,0.3), 0px 2px 6px 2px rgba(0,0,0,0.15)"
      }
    }
  }
};
const StyledButton = styles.styled(MuiButton)({
  position: "relative",
  "& .JagotaButton-spinner": {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)"
  },
  "& .JagotaButton-content--hidden": {
    visibility: "hidden"
  }
});
function JagotaButton({
  variant = "filled",
  loading = false,
  disabled,
  children,
  sx,
  ...props
}) {
  const { variant: muiVariant, color, sx: variantSx, ...variantProps } = variantMap[variant];
  return /* @__PURE__ */ jsxRuntime.jsxs(
    StyledButton,
    {
      variant: muiVariant,
      color,
      disabled: disabled || loading,
      sx: [variantSx ?? {}, ...Array.isArray(sx) ? sx : [sx]],
      ...variantProps,
      ...props,
      children: [
        loading && /* @__PURE__ */ jsxRuntime.jsx(
          CircularProgress,
          {
            size: 18,
            color: "inherit",
            className: "JagotaButton-spinner",
            "aria-label": "loading"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: loading ? "JagotaButton-content--hidden" : void 0, children })
      ]
    }
  );
}
const paddingMap = {
  none: 0,
  compact: 8,
  comfortable: 16,
  spacious: 24
};
function JagotaCard({
  type = "elevated",
  padding = "none",
  onClick,
  children,
  sx,
  ...props
}) {
  const theme = styles.useTheme();
  const scheme = theme.palette;
  const p = paddingMap[padding];
  const typeStyles = {
    elevated: {
      backgroundColor: scheme.surfaceContainerLow,
      boxShadow: "0px 1px 2px rgba(0,0,0,0.3), 0px 1px 3px 1px rgba(0,0,0,0.15)",
      "&:hover": onClick ? {
        boxShadow: "0px 1px 2px rgba(0,0,0,0.3), 0px 2px 6px 2px rgba(0,0,0,0.15)"
      } : {}
    },
    filled: {
      backgroundColor: scheme.surfaceContainerHighest,
      boxShadow: "none"
    },
    outlined: {
      backgroundColor: scheme.surface,
      boxShadow: "none",
      border: `1px solid ${scheme.outlineVariant}`
    }
  }[type];
  const cardContent = onClick ? /* @__PURE__ */ jsxRuntime.jsx(CardActionArea, { onClick, sx: { height: "100%" }, children }) : children;
  return /* @__PURE__ */ jsxRuntime.jsx(
    MuiCard,
    {
      sx: [
        typeStyles,
        p > 0 ? { padding: p } : {},
        ...Array.isArray(sx) ? sx : [sx ?? {}]
      ],
      ...props,
      children: cardContent
    }
  );
}
const statusEndAdornment = {
  error: /* @__PURE__ */ jsxRuntime.jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsxRuntime.jsx("span", { style: { color: "inherit", fontSize: 16 }, children: "✕" }) }),
  success: /* @__PURE__ */ jsxRuntime.jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsxRuntime.jsx("span", { style: { fontSize: 16 }, children: "✓" }) }),
  warning: /* @__PURE__ */ jsxRuntime.jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsxRuntime.jsx("span", { style: { fontSize: 16 }, children: "⚠" }) })
};
function JagotaTextField({
  variant = "outlined",
  status = "default",
  maxLength,
  helperText,
  inputProps,
  InputProps,
  value,
  onChange,
  sx,
  ...props
}) {
  const theme = styles.useTheme();
  const [internalValue, setInternalValue] = React.useState(
    typeof value === "string" ? value : ""
  );
  const currentLength = typeof value === "string" ? value.length : internalValue.length;
  const handleChange = (e) => {
    if (maxLength && e.target.value.length > maxLength) return;
    setInternalValue(e.target.value);
    onChange == null ? void 0 : onChange(e);
  };
  const resolvedHelperText = maxLength ? helperText ? `${helperText}  (${currentLength}/${maxLength})` : `${currentLength}/${maxLength}` : helperText;
  const isError = status === "error";
  const successColor = theme.palette.success.main;
  const warningColor = theme.palette.warning.main;
  const successSx = status === "success" ? {
    "& .MuiOutlinedInput-notchedOutline": { borderColor: successColor },
    "& .MuiFilledInput-underline:after": { borderBottomColor: successColor },
    "& .MuiFormHelperText-root": { color: successColor },
    "& .MuiInputLabel-root.Mui-focused": { color: successColor }
  } : {};
  const warningSx = status === "warning" ? {
    "& .MuiOutlinedInput-notchedOutline": { borderColor: warningColor },
    "& .MuiFilledInput-underline:after": { borderBottomColor: warningColor },
    "& .MuiFormHelperText-root": { color: warningColor },
    "& .MuiInputLabel-root.Mui-focused": { color: warningColor }
  } : {};
  return /* @__PURE__ */ jsxRuntime.jsx(
    MuiTextField,
    {
      variant,
      error: isError,
      helperText: resolvedHelperText,
      value: value ?? internalValue,
      onChange: handleChange,
      inputProps: { maxLength, ...inputProps },
      InputProps: {
        endAdornment: status !== "default" ? statusEndAdornment[status] : void 0,
        ...InputProps
      },
      sx: [
        successSx,
        warningSx,
        ...Array.isArray(sx) ? sx : [sx ?? {}]
      ],
      ...props
    }
  );
}
function JagotaChip({
  type = "assist",
  selected = false,
  sx,
  ...props
}) {
  const theme = styles.useTheme();
  const scheme = theme.palette;
  const typeStyles = {
    assist: {
      variant: "outlined",
      sx: {
        borderColor: scheme.outlineVariant,
        color: scheme.onSurface,
        "&:hover": { backgroundColor: `${scheme.onSurface}14` }
      }
    },
    filter: {
      variant: selected ? "filled" : "outlined",
      sx: selected ? {
        backgroundColor: scheme.secondaryContainer,
        color: scheme.onSecondaryContainer,
        borderColor: "transparent",
        "& .MuiChip-label": { paddingLeft: selected ? 8 : void 0 }
      } : {
        borderColor: scheme.outline,
        color: scheme.onSurfaceVariant,
        "&:hover": { backgroundColor: `${scheme.onSurface}14` }
      }
    },
    input: {
      variant: "outlined",
      sx: {
        borderColor: scheme.outline,
        color: scheme.onSurfaceVariant
      }
    },
    suggestion: {
      variant: "outlined",
      sx: {
        borderColor: scheme.outline,
        color: scheme.onSurfaceVariant,
        "&:hover": {
          backgroundColor: `${scheme.primary}14`,
          borderColor: scheme.primary,
          color: scheme.primary
        }
      }
    }
  };
  const { sx: typeSx, ...typeProps } = typeStyles[type];
  return /* @__PURE__ */ jsxRuntime.jsx(
    MuiChip,
    {
      ...typeProps,
      sx: [
        typeSx,
        ...Array.isArray(sx) ? sx : [sx ?? {}]
      ],
      ...props
    }
  );
}
function JagotaDialog({
  title,
  content,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
  onClose,
  hideCancel = false,
  destructive = false,
  loading = false,
  children,
  ...props
}) {
  const handleClose = (event, reason) => {
    if (loading) return;
    onClose == null ? void 0 : onClose(event, reason);
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(MuiDialog, { onClose: handleClose, ...props, children: [
    title && /* @__PURE__ */ jsxRuntime.jsx(DialogTitle, { sx: { pt: 3, px: 3, pb: 2 }, children: title }),
    /* @__PURE__ */ jsxRuntime.jsxs(DialogContent, { sx: { px: 3, pb: 0 }, children: [
      content && /* @__PURE__ */ jsxRuntime.jsx(DialogContentText, { children: content }),
      children
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs(DialogActions, { sx: { px: 3, pb: 3, pt: 2, gap: 1 }, children: [
      !hideCancel && /* @__PURE__ */ jsxRuntime.jsx(
        JagotaButton,
        {
          variant: "text",
          onClick: (e) => onClose == null ? void 0 : onClose(e, "escapeKeyDown"),
          disabled: loading,
          children: cancelLabel
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        JagotaButton,
        {
          variant: "filled",
          onClick: onConfirm,
          loading,
          sx: destructive ? {
            backgroundColor: "error.main",
            "&:hover": { backgroundColor: "error.dark" }
          } : {},
          children: confirmLabel
        }
      )
    ] })
  ] });
}
const positionMap = {
  "bottom-center": { vertical: "bottom", horizontal: "center" },
  "bottom-left": { vertical: "bottom", horizontal: "left" },
  "bottom-right": { vertical: "bottom", horizontal: "right" },
  "top-center": { vertical: "top", horizontal: "center" }
};
function JagotaSnackbar({
  message,
  title,
  severity = "info",
  actionLabel,
  onAction,
  onClose,
  position = "bottom-center",
  autoHideDuration = 4e3,
  ...props
}) {
  const theme = styles.useTheme();
  const handleClose = (_, reason) => {
    if (reason === "clickaway") return;
    onClose == null ? void 0 : onClose();
  };
  const action = actionLabel ? /* @__PURE__ */ jsxRuntime.jsx(
    MuiButton,
    {
      color: "inherit",
      size: "small",
      onClick: () => {
        onAction == null ? void 0 : onAction();
        onClose == null ? void 0 : onClose();
      },
      sx: { fontWeight: 500, letterSpacing: "0.1px" },
      children: actionLabel
    }
  ) : void 0;
  return /* @__PURE__ */ jsxRuntime.jsx(
    MuiSnackbar,
    {
      anchorOrigin: positionMap[position],
      autoHideDuration,
      onClose: handleClose,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsxs(
        Alert,
        {
          severity,
          onClose,
          action,
          sx: {
            borderRadius: theme.shape.borderRadius,
            minWidth: 280,
            maxWidth: 560,
            boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14)",
            alignItems: "flex-start"
          },
          children: [
            title && /* @__PURE__ */ jsxRuntime.jsx(AlertTitle, { children: title }),
            message
          ]
        }
      )
    }
  );
}
function useJagotaSnackbar() {
  const [state, setState] = React.useState({
    open: false,
    message: ""
  });
  const show = React.useCallback((options) => {
    setState({ ...options, open: true });
  }, []);
  const hide = React.useCallback(() => {
    setState((prev) => ({ ...prev, open: false }));
  }, []);
  const SnackbarComponent = /* @__PURE__ */ jsxRuntime.jsx(
    JagotaSnackbar,
    {
      ...state,
      onClose: hide
    }
  );
  return { show, hide, SnackbarComponent };
}
const titleTypographyMap = {
  "center-aligned": { variant: "titleLarge", muiVariant: "h6", fontSize: 22, fontWeight: 400 },
  "small": { variant: "titleLarge", muiVariant: "h6", fontSize: 22, fontWeight: 400 },
  "medium": { variant: "headlineSmall", muiVariant: "h5", fontSize: 28, fontWeight: 400 },
  "large": { variant: "headlineMedium", muiVariant: "h4", fontSize: 32, fontWeight: 400 }
};
function JagotaTopAppBar({
  type = "center-aligned",
  title,
  leading,
  trailing,
  scrollBehavior = "none",
  sx,
  ...props
}) {
  const theme = styles.useTheme();
  const scheme = theme.palette;
  const isScrolled = material.useScrollTrigger({ disableHysteresis: true, threshold: 0 });
  const isTwoRow = type === "medium" || type === "large";
  const isCentered = type === "center-aligned";
  const typo = titleTypographyMap[type];
  const elevation2 = scrollBehavior === "elevate" && isScrolled ? 2 : 0;
  if (scrollBehavior === "hide" && isScrolled) return null;
  const titleNode = /* @__PURE__ */ jsxRuntime.jsx(
    Typography,
    {
      variant: typo.muiVariant,
      component: "h1",
      noWrap: !isTwoRow,
      sx: {
        fontSize: typo.fontSize,
        fontWeight: typo.fontWeight,
        letterSpacing: isTwoRow ? 0 : 0,
        color: scheme.onSurface,
        flex: isCentered ? 1 : void 0,
        textAlign: isCentered ? "center" : "left"
      },
      children: title
    }
  );
  return /* @__PURE__ */ jsxRuntime.jsxs(
    AppBar,
    {
      position: "sticky",
      elevation: elevation2,
      sx: [
        {
          backgroundColor: isScrolled && scrollBehavior === "elevate" ? scheme.surfaceContainer : scheme.surface,
          color: scheme.onSurface,
          boxShadow: elevation2 > 0 ? "0px 1px 2px rgba(0,0,0,0.3), 0px 1px 3px 1px rgba(0,0,0,0.15)" : "none",
          borderBottom: elevation2 === 0 ? `1px solid ${scheme.outlineVariant}` : "none",
          transition: "background-color 200ms ease, box-shadow 200ms ease"
        },
        ...Array.isArray(sx) ? sx : [sx ?? {}]
      ],
      ...props,
      children: [
        !isTwoRow && /* @__PURE__ */ jsxRuntime.jsxs(Toolbar, { sx: { minHeight: 64, px: 2, gap: 0.5 }, children: [
          leading && /* @__PURE__ */ jsxRuntime.jsx(Box, { sx: { mr: isCentered ? 0 : 1 }, children: leading }),
          titleNode,
          trailing && /* @__PURE__ */ jsxRuntime.jsx(Box, { sx: { ml: isCentered ? 0 : "auto" }, children: trailing })
        ] }),
        isTwoRow && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
          /* @__PURE__ */ jsxRuntime.jsxs(Toolbar, { sx: { minHeight: 64, px: 2, gap: 0.5 }, children: [
            leading && /* @__PURE__ */ jsxRuntime.jsx(Box, { children: leading }),
            /* @__PURE__ */ jsxRuntime.jsx(Box, { sx: { flex: 1 } }),
            trailing && /* @__PURE__ */ jsxRuntime.jsx(Box, { children: trailing })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(Box, { sx: { px: 3, pb: type === "large" ? 3 : 2 }, children: titleNode })
        ] })
      ]
    }
  );
}
const SIDEBAR_EXPANDED_WIDTH = 240;
const SIDEBAR_COLLAPSED_WIDTH = 80;
const MOBILE_DRAWER_WIDTH = 320;
const MOBILE_TOPBAR_HEIGHT = 56;
const TABLET_BP = 768;
const DESKTOP_BP = 1280;
const HamburgerIcon = () => /* @__PURE__ */ jsxRuntime.jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ jsxRuntime.jsx("line", { x1: "4", y1: "7", x2: "20", y2: "7" }),
  /* @__PURE__ */ jsxRuntime.jsx("line", { x1: "4", y1: "12", x2: "20", y2: "12" }),
  /* @__PURE__ */ jsxRuntime.jsx("line", { x1: "4", y1: "17", x2: "20", y2: "17" })
] });
const BellIcon = () => /* @__PURE__ */ jsxRuntime.jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" }),
  /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M13.73 21a2 2 0 0 1-3.46 0" })
] });
const ChevronLeftIcon = () => /* @__PURE__ */ jsxRuntime.jsx("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntime.jsx("polyline", { points: "15 18 9 12 15 6" }) });
const ChevronRightIcon = () => /* @__PURE__ */ jsxRuntime.jsx("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntime.jsx("polyline", { points: "9 18 15 12 9 6" }) });
const CloseIcon = () => /* @__PURE__ */ jsxRuntime.jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ jsxRuntime.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
  /* @__PURE__ */ jsxRuntime.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
] });
const MoreVertIcon = () => /* @__PURE__ */ jsxRuntime.jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: [
  /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "12", cy: "5", r: "1.5" }),
  /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "12", cy: "12", r: "1.5" }),
  /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "12", cy: "19", r: "1.5" })
] });
const SidebarRoot = styles.styled(Box, {
  shouldForwardProp: (p) => p !== "isCollapsed"
})(({ theme, isCollapsed }) => {
  const p = theme.palette;
  return {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: isCollapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_EXPANDED_WIDTH,
    backgroundColor: p.surface ?? theme.palette.background.paper,
    borderRight: `1px solid ${p.surfaceVariant ?? theme.palette.divider}`,
    display: "flex",
    flexDirection: "column",
    transition: "width 250ms cubic-bezier(0.2, 0, 0, 1)",
    overflow: "hidden",
    zIndex: 1200
  };
});
const MobileTopBar = styles.styled(Box)(({ theme }) => {
  const p = theme.palette;
  return {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: MOBILE_TOPBAR_HEIGHT,
    backgroundColor: p.surface ?? theme.palette.background.paper,
    borderBottom: `1px solid ${p.surfaceVariant ?? theme.palette.divider}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 16px",
    zIndex: 1200
  };
});
const DrawerOverlay = styles.styled(Box)({
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0,0,0,0.32)",
  zIndex: 1299
});
const DrawerPanel = styles.styled(Box)(({ theme }) => {
  const p = theme.palette;
  return {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: MOBILE_DRAWER_WIDTH,
    backgroundColor: p.surface ?? theme.palette.background.paper,
    display: "flex",
    flexDirection: "column",
    zIndex: 1300,
    boxShadow: "2px 0 16px rgba(0,0,0,0.15)",
    // elevation shadow — ไม่ใช่ brand color
    overflowY: "auto"
  };
});
function BellButton({
  count,
  dotOnly = false,
  onClick
}) {
  const theme = styles.useTheme();
  const p = theme.palette;
  const surface = p.surface ?? theme.palette.background.paper;
  const onSurfaceVariant = p.onSurfaceVariant ?? theme.palette.text.secondary;
  const primaryContainer = p.primaryContainer ?? theme.palette.primary.light;
  const errorColor = theme.palette.error.main;
  const onError = theme.palette.error.contrastText;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Box,
    {
      component: "button",
      onClick,
      "aria-label": `Notifications${count ? ` (${count})` : ""}`,
      sx: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 32,
        height: 32,
        borderRadius: "12px",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        position: "relative",
        color: onSurfaceVariant,
        transition: "background-color 150ms ease",
        // Interactive states
        "&:hover": { backgroundColor: styles.alpha(primaryContainer, 0.1) },
        "&:active": { backgroundColor: styles.alpha(primaryContainer, 0.16) }
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(BellIcon, {}),
        count && count > 0 ? dotOnly ? (
          // Mobile: dot เล็กๆ ไม่มีตัวเลข
          /* @__PURE__ */ jsxRuntime.jsx(Box, { sx: {
            position: "absolute",
            top: 2,
            right: 2,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: errorColor,
            border: `1.5px solid ${surface}`
          } })
        ) : (
          // Desktop: badge มีตัวเลข
          /* @__PURE__ */ jsxRuntime.jsx(Box, { sx: {
            position: "absolute",
            top: 0,
            right: 0,
            minWidth: 16,
            height: 16,
            borderRadius: "100px",
            backgroundColor: errorColor,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: "3px"
          }, children: /* @__PURE__ */ jsxRuntime.jsx(Typography, { sx: {
            fontSize: 11,
            fontWeight: 500,
            color: onError,
            lineHeight: "16px",
            letterSpacing: "0.5px"
          }, children: count > 99 ? "99+" : count }) })
        ) : null
      ]
    }
  );
}
function CollapseButton({ isCollapsed, onClick }) {
  var _a;
  const theme = styles.useTheme();
  const p = theme.palette;
  const onSurface = p.onSurface ?? theme.palette.text.primary;
  const tertiaryContainer = p.tertiaryContainer ?? ((_a = p.secondary) == null ? void 0 : _a.light) ?? theme.palette.secondary.light;
  return /* @__PURE__ */ jsxRuntime.jsx(
    Box,
    {
      component: "button",
      onClick,
      "aria-label": isCollapsed ? "Expand sidebar" : "Collapse sidebar",
      sx: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 32,
        height: 32,
        borderRadius: "12px",
        border: "none",
        backgroundColor: tertiaryContainer,
        cursor: "pointer",
        flexShrink: 0,
        color: onSurface,
        transition: "background-color 150ms ease, opacity 150ms ease",
        // Interactive states
        "&:hover": { opacity: 0.85 },
        "&:active": { opacity: 0.7 }
      },
      children: isCollapsed ? /* @__PURE__ */ jsxRuntime.jsx(ChevronRightIcon, {}) : /* @__PURE__ */ jsxRuntime.jsx(ChevronLeftIcon, {})
    }
  );
}
function MenuItemExpanded({
  item,
  isActive,
  onClick
}) {
  const theme = styles.useTheme();
  const p = theme.palette;
  const surface = p.surface ?? theme.palette.background.paper;
  const surfaceContainerLow = p.surfaceContainerLow ?? theme.palette.action.selected;
  const onSurfaceVariant = p.onSurfaceVariant ?? theme.palette.text.secondary;
  const primaryContainer = p.primaryContainer ?? theme.palette.primary.light;
  const primary = theme.palette.primary.main;
  const isDisabled = item.disabled ?? false;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Box,
    {
      component: "button",
      onClick: isDisabled ? void 0 : onClick,
      "aria-current": isActive ? "page" : void 0,
      "aria-disabled": isDisabled || void 0,
      sx: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "100%",
        padding: "12px",
        backgroundColor: isActive ? surfaceContainerLow : "transparent",
        border: "none",
        borderRadius: "12px",
        cursor: isDisabled ? "not-allowed" : "pointer",
        opacity: isDisabled ? 0.38 : 1,
        pointerEvents: isDisabled ? "none" : "auto",
        transition: "background-color 150ms ease, background-image 150ms ease, opacity 150ms ease",
        // Hover — Primary Container @ 10%
        "&:hover": isActive ? {
          backgroundImage: `linear-gradient(${styles.alpha(primaryContainer, 0.1)}, ${styles.alpha(primaryContainer, 0.1)})`,
          backgroundColor: surfaceContainerLow
        } : {
          backgroundColor: styles.alpha(primaryContainer, 0.1)
        },
        // Pressed — Primary Container @ 16%
        "&:active": isActive ? {
          backgroundImage: `linear-gradient(${styles.alpha(primaryContainer, 0.16)}, ${styles.alpha(primaryContainer, 0.16)})`,
          backgroundColor: surfaceContainerLow
        } : {
          backgroundColor: styles.alpha(primaryContainer, 0.16)
        }
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(Box, { sx: {
          width: 24,
          height: 24,
          flexShrink: 0,
          backgroundColor: surface,
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "& svg, & .MuiSvgIcon-root": { width: 16, height: 16, fontSize: 16 },
          color: onSurfaceVariant
        }, children: item.icon }),
        /* @__PURE__ */ jsxRuntime.jsx(Box, { sx: { flex: 1, minWidth: 0, display: "flex", alignItems: "center" }, children: /* @__PURE__ */ jsxRuntime.jsx(Typography, { sx: {
          fontSize: 12,
          fontWeight: 600,
          lineHeight: "16px",
          letterSpacing: "0.5px",
          color: onSurfaceVariant,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis"
        }, children: item.label }) }),
        /* @__PURE__ */ jsxRuntime.jsx(Box, { sx: {
          width: 6,
          height: 6,
          flexShrink: 0,
          borderRadius: "50%",
          backgroundColor: primary,
          opacity: isActive ? 1 : 0,
          transition: "opacity 150ms ease"
        } })
      ]
    }
  );
}
function MenuItemCollapsed({
  item,
  isActive,
  onClick
}) {
  const theme = styles.useTheme();
  const p = theme.palette;
  const surface = p.surface ?? theme.palette.background.paper;
  const surfaceContainerLow = p.surfaceContainerLow ?? theme.palette.action.selected;
  const onSurfaceVariant = p.onSurfaceVariant ?? theme.palette.text.secondary;
  const primaryContainer = p.primaryContainer ?? theme.palette.primary.light;
  const primary = theme.palette.primary.main;
  const isDisabled = item.disabled ?? false;
  return /* @__PURE__ */ jsxRuntime.jsx(Tooltip, { title: item.label, placement: "right", arrow: true, children: /* @__PURE__ */ jsxRuntime.jsxs(
    Box,
    {
      component: "button",
      onClick: isDisabled ? void 0 : onClick,
      "aria-current": isActive ? "page" : void 0,
      "aria-disabled": isDisabled || void 0,
      sx: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 48,
        height: 48,
        backgroundColor: isActive ? surfaceContainerLow : "transparent",
        border: "none",
        borderRadius: "12px",
        cursor: isDisabled ? "not-allowed" : "pointer",
        opacity: isDisabled ? 0.38 : 1,
        pointerEvents: isDisabled ? "none" : "auto",
        transition: "background-color 150ms ease, background-image 150ms ease, opacity 150ms ease",
        // Hover
        "&:hover": isActive ? {
          backgroundImage: `linear-gradient(${styles.alpha(primaryContainer, 0.1)}, ${styles.alpha(primaryContainer, 0.1)})`,
          backgroundColor: surfaceContainerLow
        } : {
          backgroundColor: styles.alpha(primaryContainer, 0.1)
        },
        // Pressed
        "&:active": isActive ? {
          backgroundImage: `linear-gradient(${styles.alpha(primaryContainer, 0.16)}, ${styles.alpha(primaryContainer, 0.16)})`,
          backgroundColor: surfaceContainerLow
        } : {
          backgroundColor: styles.alpha(primaryContainer, 0.16)
        }
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(Box, { sx: {
          width: 32,
          height: 32,
          backgroundColor: surface,
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "& svg, & .MuiSvgIcon-root": { width: 16, height: 16, fontSize: 16 },
          color: onSurfaceVariant
        }, children: item.icon }),
        isActive && /* @__PURE__ */ jsxRuntime.jsx(Box, { sx: {
          position: "absolute",
          top: 12,
          right: 6,
          width: 6,
          height: 6,
          borderRadius: "50%",
          backgroundColor: primary
        } })
      ]
    }
  ) });
}
function UserFooterExpanded({ user, onMenuClick }) {
  const theme = styles.useTheme();
  const p = theme.palette;
  const onSurface = p.onSurface ?? theme.palette.text.primary;
  const onSurfaceVariant = p.onSurfaceVariant ?? theme.palette.text.secondary;
  const outline = p.outline ?? theme.palette.text.disabled;
  const outlineVariant = p.outlineVariant ?? theme.palette.divider;
  const surfaceVariant = p.surfaceVariant ?? theme.palette.divider;
  const primaryContainer = p.primaryContainer ?? theme.palette.primary.light;
  const initials = user.initials ?? user.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
  return /* @__PURE__ */ jsxRuntime.jsxs(Box, { sx: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "24px",
    borderTop: `1px solid ${surfaceVariant}`,
    flexShrink: 0
  }, children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      Avatar,
      {
        src: user.avatarSrc,
        alt: user.name,
        sx: { width: 40, height: 40, fontSize: 14, flexShrink: 0, border: `1px solid ${outlineVariant}` },
        children: initials
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsxs(Box, { sx: { flex: 1, minWidth: 0 }, children: [
      /* @__PURE__ */ jsxRuntime.jsx(Typography, { sx: {
        fontSize: 12,
        fontWeight: 600,
        lineHeight: "16px",
        letterSpacing: "0.5px",
        color: onSurface,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }, children: user.name }),
      /* @__PURE__ */ jsxRuntime.jsx(Typography, { sx: {
        fontSize: 11,
        fontWeight: 500,
        lineHeight: "16px",
        letterSpacing: "0.5px",
        color: outline,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }, children: user.role })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(
      Box,
      {
        component: "button",
        onClick: onMenuClick,
        "aria-label": "User menu",
        sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 32,
          height: 32,
          borderRadius: "12px",
          border: "none",
          background: "transparent",
          cursor: "pointer",
          flexShrink: 0,
          color: onSurfaceVariant,
          transition: "background-color 150ms ease",
          "&:hover": { backgroundColor: styles.alpha(primaryContainer, 0.1) },
          "&:active": { backgroundColor: styles.alpha(primaryContainer, 0.16) }
        },
        children: /* @__PURE__ */ jsxRuntime.jsx(MoreVertIcon, {})
      }
    )
  ] });
}
function UserFooterCollapsed({ user }) {
  const theme = styles.useTheme();
  const p = theme.palette;
  const surfaceVariant = p.surfaceVariant ?? theme.palette.divider;
  const outlineVariant = p.outlineVariant ?? theme.palette.divider;
  const initials = user.initials ?? user.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
  return /* @__PURE__ */ jsxRuntime.jsx(Box, { sx: {
    display: "flex",
    justifyContent: "center",
    padding: "24px 8px",
    borderTop: `1px solid ${surfaceVariant}`,
    flexShrink: 0
  }, children: /* @__PURE__ */ jsxRuntime.jsx(Tooltip, { title: `${user.name} · ${user.role}`, placement: "right", arrow: true, children: /* @__PURE__ */ jsxRuntime.jsx(
    Avatar,
    {
      src: user.avatarSrc,
      alt: user.name,
      sx: { width: 40, height: 40, fontSize: 14, border: `1px solid ${outlineVariant}` },
      children: initials
    }
  ) }) });
}
function ExpandedMenuContent({
  items,
  activeId,
  moduleName,
  user,
  onNavigate,
  onUserMenuClick,
  onCollapse,
  showCollapseBtn = true
}) {
  const theme = styles.useTheme();
  const p = theme.palette;
  const outline = p.outline ?? theme.palette.text.disabled;
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    moduleName && /* @__PURE__ */ jsxRuntime.jsxs(Box, { sx: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      px: "24px",
      py: "12px",
      flexShrink: 0
    }, children: [
      /* @__PURE__ */ jsxRuntime.jsx(Typography, { sx: {
        fontSize: 14,
        fontWeight: 500,
        lineHeight: "20px",
        letterSpacing: "0.1px",
        color: outline,
        whiteSpace: "nowrap"
      }, children: moduleName }),
      showCollapseBtn && /* @__PURE__ */ jsxRuntime.jsx(CollapseButton, { isCollapsed: false, onClick: onCollapse ?? (() => {
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(Box, { sx: {
      flex: 1,
      overflowY: "auto",
      px: "24px",
      pb: "24px",
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }, children: items.map((item) => /* @__PURE__ */ jsxRuntime.jsx(
      MenuItemExpanded,
      {
        item,
        isActive: item.id === activeId,
        onClick: () => onNavigate == null ? void 0 : onNavigate(item.id)
      },
      item.id
    )) }),
    user && /* @__PURE__ */ jsxRuntime.jsx(UserFooterExpanded, { user, onMenuClick: onUserMenuClick })
  ] });
}
function JagotaNavigationBar({
  items,
  activeId,
  moduleName,
  logo,
  user,
  notificationCount,
  onNavigate,
  onNotificationClick,
  onUserMenuClick,
  collapsed: collapsedProp,
  onCollapsedChange
}) {
  const theme = styles.useTheme();
  const p = theme.palette;
  const onSurface = p.onSurface ?? theme.palette.text.primary;
  const onSurfaceVariant = p.onSurfaceVariant ?? theme.palette.text.secondary;
  const outlineVariant = p.outlineVariant ?? theme.palette.divider;
  const surfaceVariant = p.surfaceVariant ?? theme.palette.divider;
  const primary = theme.palette.primary.main;
  const primaryContainer = p.primaryContainer ?? theme.palette.primary.light;
  const isMobile = useMediaQuery(`(max-width:${TABLET_BP - 1}px)`);
  const isDesktop = useMediaQuery(`(min-width:${DESKTOP_BP}px)`);
  const [internalCollapsed, setInternalCollapsed] = React.useState(true);
  const [mobileDrawerOpen, setMobileDrawerOpen] = React.useState(false);
  React.useEffect(() => {
    setInternalCollapsed(!isDesktop);
  }, [isDesktop]);
  const isCollapsed = collapsedProp !== void 0 ? collapsedProp : internalCollapsed;
  const handleToggle = React.useCallback(() => {
    const next = !isCollapsed;
    setInternalCollapsed(next);
    onCollapsedChange == null ? void 0 : onCollapsedChange(next);
  }, [isCollapsed, onCollapsedChange]);
  const DefaultLogo = /* @__PURE__ */ jsxRuntime.jsx(Typography, { sx: {
    fontWeight: 700,
    fontSize: 20,
    color: primary,
    letterSpacing: "0.04em",
    lineHeight: 1
  }, children: "JAGOTA" });
  if (isMobile) {
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsxs(MobileTopBar, { children: [
        /* @__PURE__ */ jsxRuntime.jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: "12px" }, children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            Box,
            {
              component: "button",
              onClick: () => setMobileDrawerOpen(true),
              "aria-label": "Open menu",
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 32,
                height: 32,
                borderRadius: "12px",
                border: `1px solid ${outlineVariant}`,
                // outlined ตาม Figma
                background: "transparent",
                cursor: "pointer",
                color: onSurfaceVariant,
                transition: "background-color 150ms ease",
                "&:hover": { backgroundColor: styles.alpha(primaryContainer, 0.1) },
                "&:active": { backgroundColor: styles.alpha(primaryContainer, 0.16) }
              },
              children: /* @__PURE__ */ jsxRuntime.jsx(HamburgerIcon, {})
            }
          ),
          logo ?? DefaultLogo
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(BellButton, { count: notificationCount, dotOnly: true, onClick: onNotificationClick })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(Box, { sx: { height: MOBILE_TOPBAR_HEIGHT, flexShrink: 0 } }),
      mobileDrawerOpen && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(DrawerOverlay, { onClick: () => setMobileDrawerOpen(false) }),
        /* @__PURE__ */ jsxRuntime.jsxs(DrawerPanel, { children: [
          /* @__PURE__ */ jsxRuntime.jsxs(Box, { sx: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: "24px",
            minHeight: 64,
            flexShrink: 0,
            borderBottom: `1px solid ${surfaceVariant}`
          }, children: [
            logo ?? DefaultLogo,
            /* @__PURE__ */ jsxRuntime.jsx(
              Box,
              {
                component: "button",
                onClick: () => setMobileDrawerOpen(false),
                "aria-label": "Close menu",
                sx: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 32,
                  height: 32,
                  borderRadius: "12px",
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  color: onSurface,
                  transition: "background-color 150ms ease",
                  "&:hover": { backgroundColor: styles.alpha(primaryContainer, 0.1) },
                  "&:active": { backgroundColor: styles.alpha(primaryContainer, 0.16) }
                },
                children: /* @__PURE__ */ jsxRuntime.jsx(CloseIcon, {})
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(
            ExpandedMenuContent,
            {
              items,
              activeId,
              moduleName,
              user,
              onNavigate: (id) => {
                onNavigate == null ? void 0 : onNavigate(id);
                setMobileDrawerOpen(false);
              },
              onUserMenuClick,
              showCollapseBtn: false
            }
          )
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsxs(SidebarRoot, { isCollapsed, children: [
      /* @__PURE__ */ jsxRuntime.jsx(Box, { sx: {
        display: "flex",
        flexDirection: isCollapsed ? "column" : "row",
        alignItems: "center",
        justifyContent: isCollapsed ? "center" : "space-between",
        px: isCollapsed ? "8px" : "24px",
        py: "16px",
        gap: isCollapsed ? "16px" : 0,
        flexShrink: 0,
        borderBottom: isCollapsed ? "none" : `1px solid ${surfaceVariant}`
      }, children: isCollapsed ? (
        // Collapsed header: Logo symbolic (J) + Bell
        /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(Box, { sx: { width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ jsxRuntime.jsx(Typography, { sx: {
            fontSize: 28,
            fontWeight: 700,
            color: primary,
            fontFamily: '"TikTok Sans", "Noto Sans Thai", sans-serif',
            lineHeight: 1
          }, children: "J" }) }),
          /* @__PURE__ */ jsxRuntime.jsx(BellButton, { count: notificationCount, onClick: onNotificationClick })
        ] })
      ) : (
        // Expanded header: Logo + Bell
        /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
          logo ?? DefaultLogo,
          /* @__PURE__ */ jsxRuntime.jsx(BellButton, { count: notificationCount, onClick: onNotificationClick })
        ] })
      ) }),
      isCollapsed && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(Box, { sx: { display: "flex", justifyContent: "center", px: "8px", pt: "8px", flexShrink: 0 }, children: /* @__PURE__ */ jsxRuntime.jsx(CollapseButton, { isCollapsed: true, onClick: handleToggle }) }),
        /* @__PURE__ */ jsxRuntime.jsx(Box, { sx: {
          flex: 1,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          px: "8px",
          py: "24px"
        }, children: items.map((item) => /* @__PURE__ */ jsxRuntime.jsx(
          MenuItemCollapsed,
          {
            item,
            isActive: item.id === activeId,
            onClick: () => onNavigate == null ? void 0 : onNavigate(item.id)
          },
          item.id
        )) }),
        user && /* @__PURE__ */ jsxRuntime.jsx(UserFooterCollapsed, { user })
      ] }),
      !isCollapsed && /* @__PURE__ */ jsxRuntime.jsx(
        ExpandedMenuContent,
        {
          items,
          activeId,
          moduleName,
          user,
          onNavigate,
          onUserMenuClick,
          onCollapse: handleToggle,
          showCollapseBtn: true
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(Box, { sx: {
      flexShrink: 0,
      width: isCollapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_EXPANDED_WIDTH,
      transition: "width 250ms cubic-bezier(0.2, 0, 0, 1)"
    } })
  ] });
}
function JagotaAppLayout({ nav, children }) {
  const theme = styles.useTheme();
  const p = theme.palette;
  const pageBackground = p.surfaceContainerLow ?? theme.palette.background.default;
  return /* @__PURE__ */ jsxRuntime.jsxs(Box, { sx: { display: "flex", minHeight: "100vh", backgroundColor: pageBackground }, children: [
    nav,
    /* @__PURE__ */ jsxRuntime.jsx(Box, { component: "main", sx: { flex: 1, minWidth: 0, overflow: "auto" }, children })
  ] });
}
exports.Box = Box;
exports.Stack = Stack;
exports.Grid = Grid;
exports.Container = Container;
exports.Typography = Typography;
exports.Divider = Divider;
exports.Button = MuiButton;
exports.IconButton = IconButton;
exports.Card = MuiCard;
exports.CardContent = CardContent;
exports.CardActions = CardActions;
exports.CardHeader = CardHeader;
exports.TextField = MuiTextField;
exports.Chip = MuiChip;
exports.Avatar = Avatar;
exports.Badge = Badge;
exports.Dialog = MuiDialog;
exports.DialogTitle = DialogTitle;
exports.DialogContent = DialogContent;
exports.DialogActions = DialogActions;
exports.Snackbar = MuiSnackbar;
exports.Alert = Alert;
exports.AppBar = AppBar;
exports.Toolbar = Toolbar;
exports.Tabs = Tabs;
exports.Tab = Tab;
exports.Switch = Switch;
exports.Checkbox = Checkbox;
exports.Radio = Radio;
exports.RadioGroup = RadioGroup;
exports.Slider = Slider;
exports.CircularProgress = CircularProgress;
exports.LinearProgress = LinearProgress;
exports.Skeleton = Skeleton;
exports.Tooltip = Tooltip;
exports.Menu = Menu;
exports.MenuItem = MenuItem;
exports.List = List;
exports.ListItem = ListItem;
exports.ListItemText = ListItemText;
exports.ListItemIcon = ListItemIcon;
exports.ListItemButton = ListItemButton;
exports.Paper = Paper;
exports.Drawer = Drawer;
exports.Fab = Fab;
exports.FormControl = FormControl;
exports.FormLabel = FormLabel;
exports.FormHelperText = FormHelperText;
exports.InputLabel = InputLabel;
exports.Select = Select;
exports.JagotaAppLayout = JagotaAppLayout;
exports.JagotaButton = JagotaButton;
exports.JagotaCard = JagotaCard;
exports.JagotaChip = JagotaChip;
exports.JagotaDialog = JagotaDialog;
exports.JagotaNavigationBar = JagotaNavigationBar;
exports.JagotaProvider = JagotaProvider;
exports.JagotaSnackbar = JagotaSnackbar;
exports.JagotaTextField = JagotaTextField;
exports.JagotaTopAppBar = JagotaTopAppBar;
exports.breakpoints = breakpoints;
exports.colors = colors;
exports.componentShape = componentShape;
exports.cornerRadius = cornerRadius;
exports.createJagotaMuiTheme = createJagotaMuiTheme;
exports.darkScheme = darkScheme;
exports.elevation = elevation;
exports.fontFamily = fontFamily;
exports.fontWeight = fontWeight;
exports.jagotaDarkTheme = jagotaDarkTheme;
exports.jagotaLightTheme = jagotaLightTheme;
exports.layoutGrid = layoutGrid;
exports.lightScheme = lightScheme;
exports.palette = palette;
exports.shadows = shadows;
exports.shape = shape;
exports.space = space;
exports.spacing = spacing;
exports.spacingScale = spacingScale;
exports.surfaceTints = surfaceTints;
exports.typeScale = typeScale;
exports.typography = typography;
exports.useColorMode = useColorMode;
exports.useJagotaColors = useJagotaColors;
exports.useJagotaSnackbar = useJagotaSnackbar;
exports.useJagotaTheme = useJagotaTheme;
exports.zIndex = zIndex;
//# sourceMappingURL=index.cjs.map
