import { default as Alert } from '@mui/material/Alert';
import { AlertColor } from '@mui/material/Alert';
import { default as AppBar } from '@mui/material/AppBar';
import { AppBarProps } from '@mui/material/AppBar';
import { default as Avatar } from '@mui/material/Avatar';
import { default as Badge } from '@mui/material/Badge';
import { default as Box } from '@mui/material/Box';
import { default as Button } from '@mui/material/Button';
import { ButtonProps } from '@mui/material/Button';
import { default as Card } from '@mui/material/Card';
import { default as CardActions } from '@mui/material/CardActions';
import { default as CardContent } from '@mui/material/CardContent';
import { default as CardHeader } from '@mui/material/CardHeader';
import { CardProps } from '@mui/material/Card';
import { default as Checkbox } from '@mui/material/Checkbox';
import { default as Chip } from '@mui/material/Chip';
import { ChipProps } from '@mui/material/Chip';
import { default as CircularProgress } from '@mui/material/CircularProgress';
import { default as Container } from '@mui/material/Container';
import { default as default_2 } from 'react';
import { default as Dialog } from '@mui/material/Dialog';
import { default as DialogActions } from '@mui/material/DialogActions';
import { default as DialogContent } from '@mui/material/DialogContent';
import { DialogProps } from '@mui/material/Dialog';
import { default as DialogTitle } from '@mui/material/DialogTitle';
import { default as Divider } from '@mui/material/Divider';
import { default as Drawer } from '@mui/material/Drawer';
import { default as Fab } from '@mui/material/Fab';
import { default as FormControl } from '@mui/material/FormControl';
import { default as FormHelperText } from '@mui/material/FormHelperText';
import { default as FormLabel } from '@mui/material/FormLabel';
import { default as Grid } from '@mui/material/Grid';
import { default as IconButton } from '@mui/material/IconButton';
import { default as InputLabel } from '@mui/material/InputLabel';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { default as LinearProgress } from '@mui/material/LinearProgress';
import { default as List } from '@mui/material/List';
import { default as ListItem } from '@mui/material/ListItem';
import { default as ListItemButton } from '@mui/material/ListItemButton';
import { default as ListItemIcon } from '@mui/material/ListItemIcon';
import { default as ListItemText } from '@mui/material/ListItemText';
import { default as Menu } from '@mui/material/Menu';
import { default as MenuItem } from '@mui/material/MenuItem';
import { default as Paper } from '@mui/material/Paper';
import { default as Radio } from '@mui/material/Radio';
import { default as RadioGroup } from '@mui/material/RadioGroup';
import { ReactNode } from 'react';
import { default as Select } from '@mui/material/Select';
import { default as Skeleton } from '@mui/material/Skeleton';
import { default as Slider } from '@mui/material/Slider';
import { default as Snackbar } from '@mui/material/Snackbar';
import { SnackbarProps } from '@mui/material/Snackbar';
import { default as Stack } from '@mui/material/Stack';
import { default as Switch } from '@mui/material/Switch';
import { default as Tab } from '@mui/material/Tab';
import { default as Tabs } from '@mui/material/Tabs';
import { default as TextField } from '@mui/material/TextField';
import { TextFieldProps } from '@mui/material/TextField';
import { Theme } from '@mui/material/styles';
import { default as Toolbar } from '@mui/material/Toolbar';
import { default as Tooltip } from '@mui/material/Tooltip';
import { default as Typography } from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

export { Alert }

export { AppBar }

export { Avatar }

export { Badge }

export { Box }

export declare const breakpoints: {
    readonly xs: 0;
    readonly sm: 360;
    readonly md: 600;
    readonly lg: 960;
    readonly xl: 1280;
    readonly '2xl': 1536;
};

export { Button }

export { Card }

export { CardActions }

export { CardContent }

export { CardHeader }

export { Checkbox }

export { Chip }

export { CircularProgress }

/**
 * Jagota Brother Trading — JagotaProvider
 *
 * Wrapper หลักที่ทุก project ต้อง wrap ครั้งเดียวใน App.tsx
 * จัดการ:
 *   - MUI Theme (light / dark)
 *   - Dark mode toggle
 *   - CssBaseline (reset styles)
 *
 * @example
 * // App.tsx
 * import { JagotaProvider } from '@jagota/ui'
 *
 * function App() {
 *   return (
 *     <JagotaProvider>
 *       <YourApp />
 *     </JagotaProvider>
 *   )
 * }
 *
 * // เปิด dark mode ตั้งแต่ต้น
 * <JagotaProvider defaultMode="dark">...</JagotaProvider>
 *
 * // ใช้ system preference อัตโนมัติ
 * <JagotaProvider defaultMode="system">...</JagotaProvider>
 */
export declare type ColorMode = 'light' | 'dark' | 'system';

export declare const colors: {
    readonly palette: {
        /** Jagota Brand Blue — Primary palette */
        readonly primary: {
            readonly p100: "#FFFFFF";
            readonly p99: "#FEFBFF";
            readonly p98: "#FBF8FF";
            readonly p95: "#F0EFFF";
            readonly p90: "#DEE0FF";
            readonly p80: "#BAC3FF";
            readonly p70: "#96A5FF";
            readonly p60: "#7187FF";
            readonly p50: "#4868FF";
            readonly p40: "#0743FF";
            readonly p35: "#0039E3";
            readonly p30: "#0031C6";
            readonly p25: "#0028AB";
            readonly p20: "#001F8F";
            readonly p10: "#00115A";
            readonly p0: "#000000";
        };
        /** Secondary — mirrors Primary palette (monochromatic brand strategy) */
        readonly secondary: {
            readonly s100: "#FFFFFF";
            readonly s99: "#FEFBFF";
            readonly s98: "#FBF8FF";
            readonly s95: "#F0EFFF";
            readonly s90: "#DEE0FF";
            readonly s80: "#BAC3FF";
            readonly s70: "#96A5FF";
            readonly s60: "#7187FF";
            readonly s50: "#4868FF";
            readonly s40: "#0743FF";
            readonly s30: "#2E3F94";
            readonly s20: "#12267D";
            readonly s10: "#00115A";
            readonly s0: "#000000";
        };
        /** Tertiary — Jagota Purple (accent / complementary) */
        readonly tertiary: {
            readonly t100: "#FFFFFF";
            readonly t99: "#FFF7FF";
            readonly t95: "#FFEBFF";
            readonly t90: "#FCD7FF";
            readonly t80: "#F2AFFF";
            readonly t70: "#E07EFF";
            readonly t60: "#CA4FFF";
            readonly t40: "#9B00B0";
            readonly t30: "#780097";
            readonly t20: "#55006B";
            readonly t10: "#340043";
            readonly t0: "#000000";
        };
        /** Error palette (M3 standard) */
        readonly error: {
            readonly e100: "#FFFFFF";
            readonly e99: "#FFFBFF";
            readonly e90: "#FFDAD6";
            readonly e80: "#FFB4AB";
            readonly e40: "#BA1A1A";
            readonly e30: "#93000A";
            readonly e20: "#690005";
            readonly e10: "#410002";
            readonly e0: "#000000";
        };
        /** Neutral — Surface / Background tones */
        readonly neutral: {
            readonly n100: "#FFFFFF";
            readonly n99: "#FEFBFF";
            readonly n98: "#FBF8FF";
            readonly n95: "#F0EFFE";
            readonly n90: "#E2E1F0";
            readonly n80: "#C6C5D4";
            readonly n70: "#ADACBE";
            readonly n60: "#9494A7";
            readonly n50: "#7B7A8E";
            readonly n40: "#434657";
            readonly n30: "#2E303B";
            readonly n20: "#191B25";
            readonly n10: "#0E1019";
            readonly n0: "#000000";
        };
        /** Neutral Variant — Outline / Container tones */
        readonly neutralVariant: {
            readonly nv100: "#FFFFFF";
            readonly nv90: "#E0E1F6";
            readonly nv80: "#C4C5DA";
            readonly nv70: "#A9AABE";
            readonly nv60: "#8F90A4";
            readonly nv50: "#74768A";
            readonly nv40: "#5B5C70";
            readonly nv30: "#434657";
            readonly nv20: "#2C2F43";
            readonly nv10: "#181B2E";
            readonly nv0: "#000000";
        };
    };
    readonly light: {
        readonly primary: "#0743FF";
        readonly onPrimary: "#FFFFFF";
        readonly primaryContainer: "#DEE0FF";
        readonly onPrimaryContainer: "#0031C6";
        readonly secondary: "#0743FF";
        readonly onSecondary: "#FFFFFF";
        readonly secondaryContainer: "#DEE0FF";
        readonly onSecondaryContainer: "#2E3F94";
        readonly tertiary: "#9B00B0";
        readonly onTertiary: "#FFFFFF";
        readonly tertiaryContainer: "#FCD7FF";
        readonly onTertiaryContainer: "#780097";
        readonly error: "#BA1A1A";
        readonly onError: "#FFFFFF";
        readonly errorContainer: "rgba(186, 26, 26, 0.10)";
        readonly onErrorContainer: "#93000A";
        readonly background: "#FBF8FF";
        readonly onBackground: "#191B25";
        readonly surface: "#FBF8FF";
        readonly onSurface: "#191B25";
        readonly surfaceVariant: "#E0E1F6";
        readonly onSurfaceVariant: "#434657";
        readonly surfaceDim: "#D9D9E7";
        readonly surfaceBright: "#FBF8FF";
        readonly surfaceContainerLowest: "#FFFFFF";
        readonly surfaceContainerLow: "#F4F2FF";
        readonly surfaceContainer: "#EDECFB";
        readonly surfaceContainerHigh: "#E8E7F5";
        readonly surfaceContainerHighest: "#E2E1F0";
        readonly outline: "#747689";
        readonly outlineVariant: "#C4C5DA";
        readonly shadow: "#000000";
        readonly scrim: "#000000";
        readonly surfaceTint: "#0743FF";
        readonly inverseSurface: "#2E303B";
        readonly inverseOnSurface: "#F0EFFE";
        readonly inversePrimary: "#BAC3FF";
        readonly primaryFixed: "#DEE0FF";
        readonly onPrimaryFixed: "#00115A";
        readonly primaryFixedDim: "#BAC3FF";
        readonly onPrimaryFixedVariant: "#0031C6";
        readonly secondaryFixed: "#DEE0FF";
        readonly onSecondaryFixed: "#00115A";
        readonly secondaryFixedDim: "#BAC3FF";
        readonly onSecondaryFixedVariant: "#2E3F94";
        readonly tertiaryFixed: "#FCD7FF";
        readonly onTertiaryFixed: "#340043";
        readonly tertiaryFixedDim: "#F2AFFF";
        readonly onTertiaryFixedVariant: "#780097";
        readonly sectionBackground: "#F5F5F5";
    };
    readonly dark: {
        readonly primary: "#BAC3FF";
        readonly onPrimary: "#00208E";
        readonly primaryContainer: "#0743FF";
        readonly onPrimaryContainer: "#D1D6FF";
        readonly secondary: "#BAC3FF";
        readonly onSecondary: "#12267D";
        readonly secondaryContainer: "#304196";
        readonly onSecondaryContainer: "#A7B4FF";
        readonly tertiary: "#F2AFFF";
        readonly onTertiary: "#55006B";
        readonly tertiaryContainer: "#780097";
        readonly onTertiaryContainer: "#FCD7FF";
        readonly error: "#FFB4AB";
        readonly onError: "#690005";
        readonly errorContainer: "#93000A";
        readonly onErrorContainer: "#FFDAD6";
        readonly background: "#111318";
        readonly onBackground: "#E3E2EA";
        readonly surface: "#111318";
        readonly onSurface: "#E3E2EA";
        readonly surfaceVariant: "#44464F";
        readonly onSurfaceVariant: "#C4C6D0";
        readonly surfaceDim: "#111318";
        readonly surfaceBright: "#373943";
        readonly surfaceContainerLowest: "#0C0E13";
        readonly surfaceContainerLow: "#191C23";
        readonly surfaceContainer: "#1D2028";
        readonly surfaceContainerHigh: "#282A32";
        readonly surfaceContainerHighest: "#33363D";
        readonly outline: "#8E9099";
        readonly outlineVariant: "#44464F";
        readonly shadow: "#000000";
        readonly scrim: "#000000";
        readonly surfaceTint: "#BAC3FF";
        readonly inverseSurface: "#E3E2EA";
        readonly inverseOnSurface: "#2E3038";
        readonly inversePrimary: "#0743FF";
        readonly primaryFixed: "#DEE0FF";
        readonly onPrimaryFixed: "#00115A";
        readonly primaryFixedDim: "#BAC3FF";
        readonly onPrimaryFixedVariant: "#0031C6";
        readonly secondaryFixed: "#DEE0FF";
        readonly onSecondaryFixed: "#00115A";
        readonly secondaryFixedDim: "#BAC3FF";
        readonly onSecondaryFixedVariant: "#2E3F94";
        readonly tertiaryFixed: "#FCD7FF";
        readonly onTertiaryFixed: "#340043";
        readonly tertiaryFixedDim: "#F2AFFF";
        readonly onTertiaryFixedVariant: "#780097";
        readonly sectionBackground: "#1A1A1A";
    };
    readonly surfaceTints: {
        readonly level0: "transparent";
        readonly level1: "rgba(7, 67, 255, 0.05)";
        readonly level2: "rgba(7, 67, 255, 0.08)";
        readonly level3: "rgba(7, 67, 255, 0.11)";
        readonly level4: "rgba(7, 67, 255, 0.12)";
        readonly level5: "rgba(7, 67, 255, 0.14)";
    };
};

/**
 * ColorScheme — Mapped type ที่รับทั้ง lightScheme และ darkScheme
 * ใช้ { readonly [K]: string } แทน typeof lightScheme เพื่อไม่ให้ literal types ขัดกัน
 */
export declare type ColorScheme = {
    readonly [K in keyof typeof lightScheme]: string;
};

export declare const componentShape: {
    readonly filledButton: 1000;
    readonly outlinedButton: 1000;
    readonly textButton: 1000;
    readonly tonalButton: 1000;
    readonly elevatedButton: 1000;
    readonly iconButton: 1000;
    readonly fab: 16;
    readonly fabExtended: 16;
    readonly fabLarge: 28;
    readonly textField: 4;
    readonly textFieldOutlined: 4;
    readonly select: 4;
    readonly searchBar: 1000;
    readonly chip: 8;
    readonly filterChip: 8;
    readonly inputChip: 8;
    readonly suggestionChip: 8;
    readonly card: 12;
    readonly cardElevated: 12;
    readonly cardFilled: 12;
    readonly cardOutlined: 12;
    readonly dialog: 28;
    readonly bottomSheet: 28;
    readonly sideSheet: 16;
    readonly navigationDrawer: 16;
    readonly navigationBar: 1000;
    readonly navigationRail: 1000;
    readonly navigationDrawerItem: 1000;
    readonly tab: 1000;
    readonly badge: 1000;
    readonly snackbar: 4;
    readonly tooltip: 4;
    readonly menu: 4;
    readonly menuItem: 0;
    readonly table: 4;
    readonly tableCell: 0;
    readonly avatar: 1000;
    readonly banner: 12;
    readonly tag: 4;
    readonly statusBadge: 4;
};

export { Container }

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
export declare const cornerRadius: {
    /** 0px — Sharp edges, bottom sheet background */
    readonly none: 0;
    /** 4px — Tooltips, small menus, snackbars */
    readonly extraSmall: 4;
    /** 8px — Chips, text fields, select inputs */
    readonly small: 8;
    /** 12px — Cards, dialogs, modals */
    readonly medium: 12;
    /** 16px — FAB, navigation components */
    readonly large: 16;
    /** 20px — Large cards, feature panels */
    readonly largeIncreased: 20;
    /** 28px — Extended FAB, bottom sheet top */
    readonly extraLarge: 28;
    /** 32px — Full-width banners */
    readonly extraLargeIncreased: 32;
    /** 48px — Dialog / sheet radius (very rounded) */
    readonly extraExtraLarge: 48;
    /** 1000px — Pills, avatar chips, fully circular */
    readonly full: 1000;
};

export declare type CornerRadiusKey = keyof typeof cornerRadius;

export declare const createJagotaMuiTheme: (mode?: "light" | "dark") => Theme;

/** Dark Mode — M3 Color Scheme mapped to Jagota palette */
export declare const darkScheme: {
    readonly primary: "#BAC3FF";
    readonly onPrimary: "#00208E";
    readonly primaryContainer: "#0743FF";
    readonly onPrimaryContainer: "#D1D6FF";
    readonly secondary: "#BAC3FF";
    readonly onSecondary: "#12267D";
    readonly secondaryContainer: "#304196";
    readonly onSecondaryContainer: "#A7B4FF";
    readonly tertiary: "#F2AFFF";
    readonly onTertiary: "#55006B";
    readonly tertiaryContainer: "#780097";
    readonly onTertiaryContainer: "#FCD7FF";
    readonly error: "#FFB4AB";
    readonly onError: "#690005";
    readonly errorContainer: "#93000A";
    readonly onErrorContainer: "#FFDAD6";
    readonly background: "#111318";
    readonly onBackground: "#E3E2EA";
    readonly surface: "#111318";
    readonly onSurface: "#E3E2EA";
    readonly surfaceVariant: "#44464F";
    readonly onSurfaceVariant: "#C4C6D0";
    readonly surfaceDim: "#111318";
    readonly surfaceBright: "#373943";
    readonly surfaceContainerLowest: "#0C0E13";
    readonly surfaceContainerLow: "#191C23";
    readonly surfaceContainer: "#1D2028";
    readonly surfaceContainerHigh: "#282A32";
    readonly surfaceContainerHighest: "#33363D";
    readonly outline: "#8E9099";
    readonly outlineVariant: "#44464F";
    readonly shadow: "#000000";
    readonly scrim: "#000000";
    readonly surfaceTint: "#BAC3FF";
    readonly inverseSurface: "#E3E2EA";
    readonly inverseOnSurface: "#2E3038";
    readonly inversePrimary: "#0743FF";
    readonly primaryFixed: "#DEE0FF";
    readonly onPrimaryFixed: "#00115A";
    readonly primaryFixedDim: "#BAC3FF";
    readonly onPrimaryFixedVariant: "#0031C6";
    readonly secondaryFixed: "#DEE0FF";
    readonly onSecondaryFixed: "#00115A";
    readonly secondaryFixedDim: "#BAC3FF";
    readonly onSecondaryFixedVariant: "#2E3F94";
    readonly tertiaryFixed: "#FCD7FF";
    readonly onTertiaryFixed: "#340043";
    readonly tertiaryFixedDim: "#F2AFFF";
    readonly onTertiaryFixedVariant: "#780097";
    readonly sectionBackground: "#1A1A1A";
};

export { Dialog }

export { DialogActions }

export { DialogContent }

export { DialogTitle }

export { Divider }

export { Drawer }

export declare const elevation: Record<string, ElevationLevel>;

export declare type ElevationKey = keyof typeof elevation;

declare interface ElevationLevel {
    shadow: string;
    lightTint: string;
    darkTint: string;
    zIndex: number;
}

export { Fab }

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
export declare const fontFamily: {
    /** Brand font — Display, Headline, Title Large */
    readonly brand: "\"TikTok Sans\", \"Noto Sans Thai\", \"Sarabun\", sans-serif";
    /** Plain font — Body, Label, UI text */
    readonly plain: "\"TikTok Sans\", \"Noto Sans Thai\", \"Sarabun\", sans-serif";
    /** Monospace — Code snippets, data tables */
    readonly mono: "\"JetBrains Mono\", \"Fira Code\", \"Courier New\", monospace";
};

export declare const fontWeight: {
    readonly regular: 400;
    readonly medium: 500;
    readonly semiBold: 600;
    readonly bold: 700;
};

export { FormControl }

export { FormHelperText }

export { FormLabel }

export { Grid }

export { IconButton }

export { InputLabel }

/**
 * Page layout wrapper — sidebar nav + main content area
 *
 * @example
 * <JagotaAppLayout nav={<JagotaNavigationBar ... />}>
 *   <PageContent />
 * </JagotaAppLayout>
 */
export declare function JagotaAppLayout({ nav, children }: JagotaAppLayoutProps): JSX_2.Element;

export declare interface JagotaAppLayoutProps {
    nav: default_2.ReactNode;
    children: default_2.ReactNode;
}

export declare function JagotaButton({ variant, loading, disabled, children, sx, ...props }: JagotaButtonProps): JSX_2.Element;

export declare interface JagotaButtonProps extends Omit<ButtonProps, 'variant' | 'color'> {
    /**
     * M3 button variant
     * @default 'filled'
     */
    variant?: JagotaButtonVariant;
    /**
     * แสดง loading spinner และ disable interaction
     * @default false
     */
    loading?: boolean;
}

export declare type JagotaButtonVariant = 'filled' | 'tonal' | 'outlined' | 'text' | 'elevated';

export declare function JagotaCard({ type, padding, onClick, children, sx, ...props }: JagotaCardProps): JSX_2.Element;

export declare type JagotaCardPadding = 'none' | 'compact' | 'comfortable' | 'spacious';

export declare interface JagotaCardProps extends Omit<CardProps, 'variant'> {
    /**
     * M3 card type
     * @default 'elevated'
     */
    type?: JagotaCardType;
    /**
     * Built-in padding preset
     * @default 'none' (ให้ CardContent จัดการเอง)
     */
    padding?: JagotaCardPadding;
    /**
     * ถ้าใส่ onClick จะ wrap ด้วย CardActionArea อัตโนมัติ
     */
    onClick?: default_2.MouseEventHandler<HTMLElement>;
}

export declare type JagotaCardType = 'elevated' | 'filled' | 'outlined';

export declare function JagotaChip({ type, selected, sx, ...props }: JagotaChipProps): JSX_2.Element;

export declare interface JagotaChipProps extends Omit<ChipProps, 'color' | 'variant'> {
    /**
     * M3 chip type — กำหนด behavior และ style
     * @default 'assist'
     */
    type?: JagotaChipType;
    /**
     * สถานะ selected (สำหรับ filter chip)
     * @default false
     */
    selected?: boolean;
}

export declare type JagotaChipType = 'assist' | 'filter' | 'input' | 'suggestion';

export declare interface JagotaContextValue {
    /** โหมดสีปัจจุบัน (ค่าที่ resolve แล้ว — ไม่มี 'system') */
    mode: 'light' | 'dark';
    /** โหมดที่ user เลือก (อาจเป็น 'system') */
    selectedMode: ColorMode;
    /** MUI Theme object ปัจจุบัน */
    theme: Theme;
    /** เปลี่ยนโหมดสี */
    setMode: (mode: ColorMode) => void;
    /** toggle ระหว่าง light ↔ dark */
    toggleMode: () => void;
}

export declare const jagotaDarkTheme: Theme;

export declare function JagotaDialog({ title, content, confirmLabel, cancelLabel, onConfirm, onClose, hideCancel, destructive, loading, children, ...props }: JagotaDialogProps): JSX_2.Element;

export declare interface JagotaDialogProps extends Omit<DialogProps, 'title'> {
    /** Dialog title */
    title?: default_2.ReactNode;
    /**
     * Short text content — ถ้าต้องการ custom layout ให้ใช้ children แทน
     */
    content?: string;
    /** Label ปุ่ม confirm
     * @default 'Confirm'
     */
    confirmLabel?: string;
    /** Label ปุ่ม cancel
     * @default 'Cancel'
     */
    cancelLabel?: string;
    /** Callback เมื่อกด confirm */
    onConfirm?: () => void;
    /** ซ่อน cancel button */
    hideCancel?: boolean;
    /**
     * Confirm button เป็นสีแดง (destructive action)
     * @default false
     */
    destructive?: boolean;
    /** กำลัง loading (ปิด buttons ระหว่าง async) */
    loading?: boolean;
}

export declare const jagotaLightTheme: Theme;

export declare function JagotaNavigationBar({ items, activeId, moduleName, logo, user, notificationCount, onNavigate, onNotificationClick, onUserMenuClick, collapsed: collapsedProp, onCollapsedChange, }: JagotaNavigationBarProps): JSX_2.Element;

export declare interface JagotaNavigationBarProps {
    items: NavItem[];
    activeId?: string;
    moduleName?: string;
    /** Logo element — แนะนำ height 20px */
    logo?: default_2.ReactNode;
    user?: NavUser;
    /** จำนวน notification — desktop แสดงตัวเลข, mobile แสดงแค่ dot */
    notificationCount?: number;
    onNavigate?: (id: string) => void;
    onNotificationClick?: () => void;
    onUserMenuClick?: () => void;
    collapsed?: boolean;
    onCollapsedChange?: (collapsed: boolean) => void;
}

export declare function JagotaProvider({ children, defaultMode, disableCssBaseline, }: JagotaProviderProps): JSX_2.Element;

export declare interface JagotaProviderProps {
    children: ReactNode;
    /**
     * โหมดสีตั้งต้น
     * @default 'light'
     */
    defaultMode?: ColorMode;
    /**
     * ปิด CssBaseline (ถ้า project มี global styles ของตัวเอง)
     * @default false
     */
    disableCssBaseline?: boolean;
}

export declare function JagotaSnackbar({ message, title, severity, actionLabel, onAction, onClose, position, autoHideDuration, ...props }: JagotaSnackbarProps): JSX_2.Element;

export declare interface JagotaSnackbarProps extends Omit<SnackbarProps, 'message'> {
    /** ข้อความหลัก */
    message: string;
    /** Title เพิ่มเติม (optional) */
    title?: string;
    /**
     * Severity ของ message
     * @default 'info'
     */
    severity?: AlertColor;
    /** Label ของ action button */
    actionLabel?: string;
    /** Callback เมื่อกด action */
    onAction?: () => void;
    /** Callback เมื่อปิด */
    onClose?: () => void;
    /**
     * ตำแหน่งแสดง
     * @default bottom-center
     */
    position?: 'bottom-center' | 'bottom-left' | 'bottom-right' | 'top-center';
}

export declare function JagotaTextField({ variant, status, maxLength, helperText, inputProps, InputProps, value, onChange, sx, ...props }: JagotaTextFieldProps): JSX_2.Element;

export declare interface JagotaTextFieldProps extends Omit<TextFieldProps, 'color' | 'variant'> {
    /**
     * M3 text field style
     * @default 'outlined'
     */
    variant?: 'outlined' | 'filled';
    /**
     * Validation status — แสดง helper text สีต่างๆ
     * @default 'default'
     */
    status?: JagotaTextFieldStatus;
    /**
     * จำนวนตัวอักษรสูงสุด — แสดง counter (x/max) ใน helperText
     */
    maxLength?: number;
}

export declare type JagotaTextFieldStatus = 'default' | 'error' | 'success' | 'warning';

/**
 * Jagota Brother Trading — useJagotaTheme
 *
 * Hook หลักสำหรับ Vibe Coder ที่ต้องการ access ค่า theme ใน component
 *
 * @example
 * import { useJagotaTheme } from '@jagota/ui'
 *
 * function MyComponent() {
 *   const { colors, mode, toggleMode } = useJagotaTheme()
 *
 *   return (
 *     <div style={{ background: colors.surface }}>
 *       <button onClick={toggleMode}>
 *         ตอนนี้: {mode}
 *       </button>
 *     </div>
 *   )
 * }
 */
export declare interface JagotaThemeHook {
    /** โหมดสีปัจจุบัน: 'light' | 'dark' */
    mode: 'light' | 'dark';
    /** โหมดที่ user เลือก (รวม 'system') */
    selectedMode: ColorMode;
    /** เปลี่ยนโหมดสี */
    setMode: (mode: ColorMode) => void;
    /** toggle light ↔ dark */
    toggleMode: () => void;
    /** สี Semantic ของ theme ปัจจุบัน (พร้อมใช้ใน style) */
    colors: ColorScheme;
    /** Type scale (ขนาด font ทุก role) */
    typeScale: typeof typeScale;
    /** Spacing values (px) */
    spacing: typeof spacingScale;
    /** Corner radius values (px) */
    radius: typeof cornerRadius;
    /** MUI theme object (สำหรับ advanced use) */
    muiTheme: ReturnType<typeof useTheme>;
    /** Helper: ตรวจว่าตอนนี้เป็น dark mode */
    isDark: boolean;
    /** Helper: ตรวจว่าตอนนี้เป็น light mode */
    isLight: boolean;
}

export declare function JagotaTopAppBar({ type, title, leading, trailing, scrollBehavior, sx, ...props }: JagotaTopAppBarProps): JSX_2.Element | null;

export declare interface JagotaTopAppBarProps extends Omit<AppBarProps, 'title'> {
    /**
     * App bar layout type
     * @default 'center-aligned'
     */
    type?: TopAppBarType;
    /** Title text */
    title?: default_2.ReactNode;
    /** Leading icon/button (left side) */
    leading?: default_2.ReactNode;
    /** Trailing icons/buttons (right side) */
    trailing?: default_2.ReactNode;
    /**
     * Scroll behavior
     * @default 'none'
     */
    scrollBehavior?: TopAppBarScrollBehavior;
}

export declare const layoutGrid: {
    /** Mobile (< 600px) — 4 columns */
    readonly mobile: {
        readonly columns: 4;
        readonly gutter: 16;
        readonly margin: 16;
        readonly maxWidth: 600;
    };
    /** Tablet (600px – 1024px) — 8 columns */
    readonly tablet: {
        readonly columns: 8;
        readonly gutter: 24;
        readonly margin: 24;
        readonly maxWidth: 1024;
    };
    /** Desktop (1024px – 1440px) — 12 columns */
    readonly desktop: {
        readonly columns: 12;
        readonly gutter: 24;
        readonly margin: 24;
        readonly maxWidth: 1440;
    };
    /** Wide (> 1440px) — 12 columns with expanded margins */
    readonly wide: {
        readonly columns: 12;
        readonly gutter: 24;
        readonly margin: 48;
        readonly maxWidth: 1920;
    };
};

/** Light Mode — M3 Color Scheme mapped to Jagota palette */
export declare const lightScheme: {
    readonly primary: "#0743FF";
    readonly onPrimary: "#FFFFFF";
    readonly primaryContainer: "#DEE0FF";
    readonly onPrimaryContainer: "#0031C6";
    readonly secondary: "#0743FF";
    readonly onSecondary: "#FFFFFF";
    readonly secondaryContainer: "#DEE0FF";
    readonly onSecondaryContainer: "#2E3F94";
    readonly tertiary: "#9B00B0";
    readonly onTertiary: "#FFFFFF";
    readonly tertiaryContainer: "#FCD7FF";
    readonly onTertiaryContainer: "#780097";
    readonly error: "#BA1A1A";
    readonly onError: "#FFFFFF";
    readonly errorContainer: "rgba(186, 26, 26, 0.10)";
    readonly onErrorContainer: "#93000A";
    readonly background: "#FBF8FF";
    readonly onBackground: "#191B25";
    readonly surface: "#FBF8FF";
    readonly onSurface: "#191B25";
    readonly surfaceVariant: "#E0E1F6";
    readonly onSurfaceVariant: "#434657";
    readonly surfaceDim: "#D9D9E7";
    readonly surfaceBright: "#FBF8FF";
    readonly surfaceContainerLowest: "#FFFFFF";
    readonly surfaceContainerLow: "#F4F2FF";
    readonly surfaceContainer: "#EDECFB";
    readonly surfaceContainerHigh: "#E8E7F5";
    readonly surfaceContainerHighest: "#E2E1F0";
    readonly outline: "#747689";
    readonly outlineVariant: "#C4C5DA";
    readonly shadow: "#000000";
    readonly scrim: "#000000";
    readonly surfaceTint: "#0743FF";
    readonly inverseSurface: "#2E303B";
    readonly inverseOnSurface: "#F0EFFE";
    readonly inversePrimary: "#BAC3FF";
    readonly primaryFixed: "#DEE0FF";
    readonly onPrimaryFixed: "#00115A";
    readonly primaryFixedDim: "#BAC3FF";
    readonly onPrimaryFixedVariant: "#0031C6";
    readonly secondaryFixed: "#DEE0FF";
    readonly onSecondaryFixed: "#00115A";
    readonly secondaryFixedDim: "#BAC3FF";
    readonly onSecondaryFixedVariant: "#2E3F94";
    readonly tertiaryFixed: "#FCD7FF";
    readonly onTertiaryFixed: "#340043";
    readonly tertiaryFixedDim: "#F2AFFF";
    readonly onTertiaryFixedVariant: "#780097";
    readonly sectionBackground: "#F5F5F5";
};

export { LinearProgress }

export { List }

export { ListItem }

export { ListItemButton }

export { ListItemIcon }

export { ListItemText }

export { Menu }

export { MenuItem }

export declare interface NavItem {
    id: string;
    label: string;
    /** Icon element — แนะนำ size 16px (ใช้ใน 24×24 box) */
    icon: default_2.ReactNode;
    badge?: number;
    /** Disabled item — แสดงแบบ dimmed (38% opacity), ไม่สามารถคลิกได้ */
    disabled?: boolean;
}

export declare interface NavUser {
    name: string;
    role: string;
    avatarSrc?: string;
    initials?: string;
}

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
export declare const palette: {
    /** Jagota Brand Blue — Primary palette */
    readonly primary: {
        readonly p100: "#FFFFFF";
        readonly p99: "#FEFBFF";
        readonly p98: "#FBF8FF";
        readonly p95: "#F0EFFF";
        readonly p90: "#DEE0FF";
        readonly p80: "#BAC3FF";
        readonly p70: "#96A5FF";
        readonly p60: "#7187FF";
        readonly p50: "#4868FF";
        readonly p40: "#0743FF";
        readonly p35: "#0039E3";
        readonly p30: "#0031C6";
        readonly p25: "#0028AB";
        readonly p20: "#001F8F";
        readonly p10: "#00115A";
        readonly p0: "#000000";
    };
    /** Secondary — mirrors Primary palette (monochromatic brand strategy) */
    readonly secondary: {
        readonly s100: "#FFFFFF";
        readonly s99: "#FEFBFF";
        readonly s98: "#FBF8FF";
        readonly s95: "#F0EFFF";
        readonly s90: "#DEE0FF";
        readonly s80: "#BAC3FF";
        readonly s70: "#96A5FF";
        readonly s60: "#7187FF";
        readonly s50: "#4868FF";
        readonly s40: "#0743FF";
        readonly s30: "#2E3F94";
        readonly s20: "#12267D";
        readonly s10: "#00115A";
        readonly s0: "#000000";
    };
    /** Tertiary — Jagota Purple (accent / complementary) */
    readonly tertiary: {
        readonly t100: "#FFFFFF";
        readonly t99: "#FFF7FF";
        readonly t95: "#FFEBFF";
        readonly t90: "#FCD7FF";
        readonly t80: "#F2AFFF";
        readonly t70: "#E07EFF";
        readonly t60: "#CA4FFF";
        readonly t40: "#9B00B0";
        readonly t30: "#780097";
        readonly t20: "#55006B";
        readonly t10: "#340043";
        readonly t0: "#000000";
    };
    /** Error palette (M3 standard) */
    readonly error: {
        readonly e100: "#FFFFFF";
        readonly e99: "#FFFBFF";
        readonly e90: "#FFDAD6";
        readonly e80: "#FFB4AB";
        readonly e40: "#BA1A1A";
        readonly e30: "#93000A";
        readonly e20: "#690005";
        readonly e10: "#410002";
        readonly e0: "#000000";
    };
    /** Neutral — Surface / Background tones */
    readonly neutral: {
        readonly n100: "#FFFFFF";
        readonly n99: "#FEFBFF";
        readonly n98: "#FBF8FF";
        readonly n95: "#F0EFFE";
        readonly n90: "#E2E1F0";
        readonly n80: "#C6C5D4";
        readonly n70: "#ADACBE";
        readonly n60: "#9494A7";
        readonly n50: "#7B7A8E";
        readonly n40: "#434657";
        readonly n30: "#2E303B";
        readonly n20: "#191B25";
        readonly n10: "#0E1019";
        readonly n0: "#000000";
    };
    /** Neutral Variant — Outline / Container tones */
    readonly neutralVariant: {
        readonly nv100: "#FFFFFF";
        readonly nv90: "#E0E1F6";
        readonly nv80: "#C4C5DA";
        readonly nv70: "#A9AABE";
        readonly nv60: "#8F90A4";
        readonly nv50: "#74768A";
        readonly nv40: "#5B5C70";
        readonly nv30: "#434657";
        readonly nv20: "#2C2F43";
        readonly nv10: "#181B2E";
        readonly nv0: "#000000";
    };
};

export { Paper }

export { Radio }

export { RadioGroup }

declare interface ResponsiveTypeOverride {
    fontSize: number;
    lineHeight: number;
}

export { Select }

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
export declare const shadows: {
    readonly level0: "none";
    readonly level1: "0px 1px 2px rgba(0,0,0,0.30), 0px 1px 3px 1px rgba(0,0,0,0.15)";
    readonly level2: "0px 1px 2px rgba(0,0,0,0.30), 0px 2px 6px 2px rgba(0,0,0,0.15)";
    readonly level3: "0px 4px 8px 3px rgba(0,0,0,0.15), 0px 1px 3px rgba(0,0,0,0.30)";
    readonly level4: "0px 6px 10px 4px rgba(0,0,0,0.15), 0px 2px 3px rgba(0,0,0,0.30)";
    readonly level5: "0px 8px 12px 6px rgba(0,0,0,0.15), 0px 4px 4px rgba(0,0,0,0.30)";
};

export declare const shape: {
    readonly cornerRadius: {
        /** 0px — Sharp edges, bottom sheet background */
        readonly none: 0;
        /** 4px — Tooltips, small menus, snackbars */
        readonly extraSmall: 4;
        /** 8px — Chips, text fields, select inputs */
        readonly small: 8;
        /** 12px — Cards, dialogs, modals */
        readonly medium: 12;
        /** 16px — FAB, navigation components */
        readonly large: 16;
        /** 20px — Large cards, feature panels */
        readonly largeIncreased: 20;
        /** 28px — Extended FAB, bottom sheet top */
        readonly extraLarge: 28;
        /** 32px — Full-width banners */
        readonly extraLargeIncreased: 32;
        /** 48px — Dialog / sheet radius (very rounded) */
        readonly extraExtraLarge: 48;
        /** 1000px — Pills, avatar chips, fully circular */
        readonly full: 1000;
    };
    readonly component: {
        readonly filledButton: 1000;
        readonly outlinedButton: 1000;
        readonly textButton: 1000;
        readonly tonalButton: 1000;
        readonly elevatedButton: 1000;
        readonly iconButton: 1000;
        readonly fab: 16;
        readonly fabExtended: 16;
        readonly fabLarge: 28;
        readonly textField: 4;
        readonly textFieldOutlined: 4;
        readonly select: 4;
        readonly searchBar: 1000;
        readonly chip: 8;
        readonly filterChip: 8;
        readonly inputChip: 8;
        readonly suggestionChip: 8;
        readonly card: 12;
        readonly cardElevated: 12;
        readonly cardFilled: 12;
        readonly cardOutlined: 12;
        readonly dialog: 28;
        readonly bottomSheet: 28;
        readonly sideSheet: 16;
        readonly navigationDrawer: 16;
        readonly navigationBar: 1000;
        readonly navigationRail: 1000;
        readonly navigationDrawerItem: 1000;
        readonly tab: 1000;
        readonly badge: 1000;
        readonly snackbar: 4;
        readonly tooltip: 4;
        readonly menu: 4;
        readonly menuItem: 0;
        readonly table: 4;
        readonly tableCell: 0;
        readonly avatar: 1000;
        readonly banner: 12;
        readonly tag: 4;
        readonly statusBadge: 4;
    };
    readonly toRadius: (value: number) => string;
};

export { Skeleton }

export { Slider }

export { Snackbar }

export declare interface SnackbarOptions extends Omit<JagotaSnackbarProps, 'open' | 'message'> {
    message: string;
}

export declare const space: {
    readonly scale: {
        /** 2px — Hairline gaps, micro spacing */
        readonly xs: 2;
        /** 4px — Icon inner padding, tight gaps */
        readonly s: 4;
        /** 8px — Default inner padding, small gaps */
        readonly m: 8;
        /** 12px — Input padding, medium gaps */
        readonly sm: 12;
        /** 16px — Section padding, card padding */
        readonly l: 16;
        /** 20px — Dialog / modal padding */
        readonly sl: 20;
        /** 24px — Large section spacing */
        readonly xl: 24;
        /** 32px — Page section separation */
        readonly '2xl': 32;
        /** 40px — Feature block spacing */
        readonly '3xl': 40;
        /** 48px — Page-level padding */
        readonly '4xl': 48;
        /** 64px — Hero section padding */
        readonly '5xl': 64;
    };
    readonly array: readonly [2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64];
    readonly fn: (units: number) => string;
    readonly grid: {
        /** Mobile (< 600px) — 4 columns */
        readonly mobile: {
            readonly columns: 4;
            readonly gutter: 16;
            readonly margin: 16;
            readonly maxWidth: 600;
        };
        /** Tablet (600px – 1024px) — 8 columns */
        readonly tablet: {
            readonly columns: 8;
            readonly gutter: 24;
            readonly margin: 24;
            readonly maxWidth: 1024;
        };
        /** Desktop (1024px – 1440px) — 12 columns */
        readonly desktop: {
            readonly columns: 12;
            readonly gutter: 24;
            readonly margin: 24;
            readonly maxWidth: 1440;
        };
        /** Wide (> 1440px) — 12 columns with expanded margins */
        readonly wide: {
            readonly columns: 12;
            readonly gutter: 24;
            readonly margin: 48;
            readonly maxWidth: 1920;
        };
    };
    readonly breakpoints: {
        readonly xs: 0;
        readonly sm: 360;
        readonly md: 600;
        readonly lg: 960;
        readonly xl: 1280;
        readonly '2xl': 1536;
    };
};

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
export declare const spacing: (units: number) => string;

export declare type SpacingKey = keyof typeof spacingScale;

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
export declare const spacingScale: {
    /** 2px — Hairline gaps, micro spacing */
    readonly xs: 2;
    /** 4px — Icon inner padding, tight gaps */
    readonly s: 4;
    /** 8px — Default inner padding, small gaps */
    readonly m: 8;
    /** 12px — Input padding, medium gaps */
    readonly sm: 12;
    /** 16px — Section padding, card padding */
    readonly l: 16;
    /** 20px — Dialog / modal padding */
    readonly sl: 20;
    /** 24px — Large section spacing */
    readonly xl: 24;
    /** 32px — Page section separation */
    readonly '2xl': 32;
    /** 40px — Feature block spacing */
    readonly '3xl': 40;
    /** 48px — Page-level padding */
    readonly '4xl': 48;
    /** 64px — Hero section padding */
    readonly '5xl': 64;
};

export { Stack }

export declare const surfaceTints: {
    readonly level0: "transparent";
    readonly level1: "rgba(7, 67, 255, 0.05)";
    readonly level2: "rgba(7, 67, 255, 0.08)";
    readonly level3: "rgba(7, 67, 255, 0.11)";
    readonly level4: "rgba(7, 67, 255, 0.12)";
    readonly level5: "rgba(7, 67, 255, 0.14)";
};

export { Switch }

export { Tab }

export { Tabs }

export { TextField }

export { Toolbar }

export { Tooltip }

export declare type TopAppBarScrollBehavior = 'none' | 'elevate' | 'hide';

export declare type TopAppBarType = 'center-aligned' | 'small' | 'medium' | 'large';

export declare const typeScale: {
    /** 57/64 — Hero banners, splash screens */
    displayLarge: {
        fontFamily: "\"TikTok Sans\", \"Noto Sans Thai\", \"Sarabun\", sans-serif";
        fontSize: number;
        lineHeight: number;
        letterSpacing: number;
        fontWeight: 400;
        fontWeightEmphasis: 500;
    };
    /** 45/52 — Large page headers */
    displayMedium: {
        fontFamily: "\"TikTok Sans\", \"Noto Sans Thai\", \"Sarabun\", sans-serif";
        fontSize: number;
        lineHeight: number;
        letterSpacing: number;
        fontWeight: 400;
        fontWeightEmphasis: 500;
    };
    /** 36/44 — Section display headers */
    displaySmall: {
        fontFamily: "\"TikTok Sans\", \"Noto Sans Thai\", \"Sarabun\", sans-serif";
        fontSize: number;
        lineHeight: number;
        letterSpacing: number;
        fontWeight: 400;
        fontWeightEmphasis: 500;
    };
    /** 32/40 — Major section titles */
    headlineLarge: {
        fontFamily: "\"TikTok Sans\", \"Noto Sans Thai\", \"Sarabun\", sans-serif";
        fontSize: number;
        lineHeight: number;
        letterSpacing: number;
        fontWeight: 400;
        fontWeightEmphasis: 500;
    };
    /** 28/36 — Card section headings */
    headlineMedium: {
        fontFamily: "\"TikTok Sans\", \"Noto Sans Thai\", \"Sarabun\", sans-serif";
        fontSize: number;
        lineHeight: number;
        letterSpacing: number;
        fontWeight: 400;
        fontWeightEmphasis: 500;
    };
    /** 24/32 — Sub-section headings */
    headlineSmall: {
        fontFamily: "\"TikTok Sans\", \"Noto Sans Thai\", \"Sarabun\", sans-serif";
        fontSize: number;
        lineHeight: number;
        letterSpacing: number;
        fontWeight: 400;
        fontWeightEmphasis: 500;
    };
    /** 22/28 — Dialog titles, card titles */
    titleLarge: {
        fontFamily: "\"TikTok Sans\", \"Noto Sans Thai\", \"Sarabun\", sans-serif";
        fontSize: number;
        lineHeight: number;
        letterSpacing: number;
        fontWeight: 400;
        fontWeightEmphasis: 500;
    };
    /** 16/24 — List item titles, input labels */
    titleMedium: {
        fontFamily: "\"TikTok Sans\", \"Noto Sans Thai\", \"Sarabun\", sans-serif";
        fontSize: number;
        lineHeight: number;
        letterSpacing: number;
        fontWeight: 500;
        fontWeightEmphasis: 600;
    };
    /** 14/20 — Small component titles */
    titleSmall: {
        fontFamily: "\"TikTok Sans\", \"Noto Sans Thai\", \"Sarabun\", sans-serif";
        fontSize: number;
        lineHeight: number;
        letterSpacing: number;
        fontWeight: 500;
        fontWeightEmphasis: 600;
    };
    /** 16/24 — Body reading (long form) */
    bodyLarge: {
        fontFamily: "\"TikTok Sans\", \"Noto Sans Thai\", \"Sarabun\", sans-serif";
        fontSize: number;
        lineHeight: number;
        letterSpacing: number;
        fontWeight: 400;
        fontWeightEmphasis: 500;
    };
    /** 14/20 — Standard body text */
    bodyMedium: {
        fontFamily: "\"TikTok Sans\", \"Noto Sans Thai\", \"Sarabun\", sans-serif";
        fontSize: number;
        lineHeight: number;
        letterSpacing: number;
        fontWeight: 400;
        fontWeightEmphasis: 500;
    };
    /** 12/16 — Secondary body, descriptions */
    bodySmall: {
        fontFamily: "\"TikTok Sans\", \"Noto Sans Thai\", \"Sarabun\", sans-serif";
        fontSize: number;
        lineHeight: number;
        letterSpacing: number;
        fontWeight: 400;
        fontWeightEmphasis: 500;
    };
    /** 14/20 — Prominent labels, button text */
    labelLarge: {
        fontFamily: "\"TikTok Sans\", \"Noto Sans Thai\", \"Sarabun\", sans-serif";
        fontSize: number;
        lineHeight: number;
        letterSpacing: number;
        fontWeight: 500;
        fontWeightEmphasis: 600;
    };
    /** 12/16 — Input labels, chip text */
    labelMedium: {
        fontFamily: "\"TikTok Sans\", \"Noto Sans Thai\", \"Sarabun\", sans-serif";
        fontSize: number;
        lineHeight: number;
        letterSpacing: number;
        fontWeight: 500;
        fontWeightEmphasis: 600;
    };
    /** 11/16 — Caption, overline, badge */
    labelSmall: {
        fontFamily: "\"TikTok Sans\", \"Noto Sans Thai\", \"Sarabun\", sans-serif";
        fontSize: number;
        lineHeight: number;
        letterSpacing: number;
        fontWeight: 500;
        fontWeightEmphasis: 600;
    };
};

export declare type TypeScaleKey = keyof typeof typeScale;

export { Typography }

export declare const typography: {
    readonly fontFamily: {
        /** Brand font — Display, Headline, Title Large */
        readonly brand: "\"TikTok Sans\", \"Noto Sans Thai\", \"Sarabun\", sans-serif";
        /** Plain font — Body, Label, UI text */
        readonly plain: "\"TikTok Sans\", \"Noto Sans Thai\", \"Sarabun\", sans-serif";
        /** Monospace — Code snippets, data tables */
        readonly mono: "\"JetBrains Mono\", \"Fira Code\", \"Courier New\", monospace";
    };
    readonly fontWeight: {
        readonly regular: 400;
        readonly medium: 500;
        readonly semiBold: 600;
        readonly bold: 700;
    };
    readonly typeScale: {
        /** 57/64 — Hero banners, splash screens */
        displayLarge: {
            fontFamily: "\"TikTok Sans\", \"Noto Sans Thai\", \"Sarabun\", sans-serif";
            fontSize: number;
            lineHeight: number;
            letterSpacing: number;
            fontWeight: 400;
            fontWeightEmphasis: 500;
        };
        /** 45/52 — Large page headers */
        displayMedium: {
            fontFamily: "\"TikTok Sans\", \"Noto Sans Thai\", \"Sarabun\", sans-serif";
            fontSize: number;
            lineHeight: number;
            letterSpacing: number;
            fontWeight: 400;
            fontWeightEmphasis: 500;
        };
        /** 36/44 — Section display headers */
        displaySmall: {
            fontFamily: "\"TikTok Sans\", \"Noto Sans Thai\", \"Sarabun\", sans-serif";
            fontSize: number;
            lineHeight: number;
            letterSpacing: number;
            fontWeight: 400;
            fontWeightEmphasis: 500;
        };
        /** 32/40 — Major section titles */
        headlineLarge: {
            fontFamily: "\"TikTok Sans\", \"Noto Sans Thai\", \"Sarabun\", sans-serif";
            fontSize: number;
            lineHeight: number;
            letterSpacing: number;
            fontWeight: 400;
            fontWeightEmphasis: 500;
        };
        /** 28/36 — Card section headings */
        headlineMedium: {
            fontFamily: "\"TikTok Sans\", \"Noto Sans Thai\", \"Sarabun\", sans-serif";
            fontSize: number;
            lineHeight: number;
            letterSpacing: number;
            fontWeight: 400;
            fontWeightEmphasis: 500;
        };
        /** 24/32 — Sub-section headings */
        headlineSmall: {
            fontFamily: "\"TikTok Sans\", \"Noto Sans Thai\", \"Sarabun\", sans-serif";
            fontSize: number;
            lineHeight: number;
            letterSpacing: number;
            fontWeight: 400;
            fontWeightEmphasis: 500;
        };
        /** 22/28 — Dialog titles, card titles */
        titleLarge: {
            fontFamily: "\"TikTok Sans\", \"Noto Sans Thai\", \"Sarabun\", sans-serif";
            fontSize: number;
            lineHeight: number;
            letterSpacing: number;
            fontWeight: 400;
            fontWeightEmphasis: 500;
        };
        /** 16/24 — List item titles, input labels */
        titleMedium: {
            fontFamily: "\"TikTok Sans\", \"Noto Sans Thai\", \"Sarabun\", sans-serif";
            fontSize: number;
            lineHeight: number;
            letterSpacing: number;
            fontWeight: 500;
            fontWeightEmphasis: 600;
        };
        /** 14/20 — Small component titles */
        titleSmall: {
            fontFamily: "\"TikTok Sans\", \"Noto Sans Thai\", \"Sarabun\", sans-serif";
            fontSize: number;
            lineHeight: number;
            letterSpacing: number;
            fontWeight: 500;
            fontWeightEmphasis: 600;
        };
        /** 16/24 — Body reading (long form) */
        bodyLarge: {
            fontFamily: "\"TikTok Sans\", \"Noto Sans Thai\", \"Sarabun\", sans-serif";
            fontSize: number;
            lineHeight: number;
            letterSpacing: number;
            fontWeight: 400;
            fontWeightEmphasis: 500;
        };
        /** 14/20 — Standard body text */
        bodyMedium: {
            fontFamily: "\"TikTok Sans\", \"Noto Sans Thai\", \"Sarabun\", sans-serif";
            fontSize: number;
            lineHeight: number;
            letterSpacing: number;
            fontWeight: 400;
            fontWeightEmphasis: 500;
        };
        /** 12/16 — Secondary body, descriptions */
        bodySmall: {
            fontFamily: "\"TikTok Sans\", \"Noto Sans Thai\", \"Sarabun\", sans-serif";
            fontSize: number;
            lineHeight: number;
            letterSpacing: number;
            fontWeight: 400;
            fontWeightEmphasis: 500;
        };
        /** 14/20 — Prominent labels, button text */
        labelLarge: {
            fontFamily: "\"TikTok Sans\", \"Noto Sans Thai\", \"Sarabun\", sans-serif";
            fontSize: number;
            lineHeight: number;
            letterSpacing: number;
            fontWeight: 500;
            fontWeightEmphasis: 600;
        };
        /** 12/16 — Input labels, chip text */
        labelMedium: {
            fontFamily: "\"TikTok Sans\", \"Noto Sans Thai\", \"Sarabun\", sans-serif";
            fontSize: number;
            lineHeight: number;
            letterSpacing: number;
            fontWeight: 500;
            fontWeightEmphasis: 600;
        };
        /** 11/16 — Caption, overline, badge */
        labelSmall: {
            fontFamily: "\"TikTok Sans\", \"Noto Sans Thai\", \"Sarabun\", sans-serif";
            fontSize: number;
            lineHeight: number;
            letterSpacing: number;
            fontWeight: 500;
            fontWeightEmphasis: 600;
        };
    };
    readonly responsive: {
        readonly mobile: Record<string, ResponsiveTypeOverride>;
        readonly tablet: Record<string, ResponsiveTypeOverride>;
    };
};

/**
 * ดึงแค่ dark mode controls
 *
 * @example
 * const { isDark, toggleMode } = useColorMode()
 */
export declare function useColorMode(): {
    mode: "light" | "dark";
    selectedMode: ColorMode;
    isDark: boolean;
    isLight: boolean;
    setMode: (mode: ColorMode) => void;
    toggleMode: () => void;
};

/**
 * ดึงแค่ color scheme ของ mode ปัจจุบัน
 *
 * @example
 * const colors = useJagotaColors()
 * <div style={{ color: colors.primary }}>
 */
export declare function useJagotaColors(): {
    readonly primary: "#0743FF";
    readonly onPrimary: "#FFFFFF";
    readonly primaryContainer: "#DEE0FF";
    readonly onPrimaryContainer: "#0031C6";
    readonly secondary: "#0743FF";
    readonly onSecondary: "#FFFFFF";
    readonly secondaryContainer: "#DEE0FF";
    readonly onSecondaryContainer: "#2E3F94";
    readonly tertiary: "#9B00B0";
    readonly onTertiary: "#FFFFFF";
    readonly tertiaryContainer: "#FCD7FF";
    readonly onTertiaryContainer: "#780097";
    readonly error: "#BA1A1A";
    readonly onError: "#FFFFFF";
    readonly errorContainer: "rgba(186, 26, 26, 0.10)";
    readonly onErrorContainer: "#93000A";
    readonly background: "#FBF8FF";
    readonly onBackground: "#191B25";
    readonly surface: "#FBF8FF";
    readonly onSurface: "#191B25";
    readonly surfaceVariant: "#E0E1F6";
    readonly onSurfaceVariant: "#434657";
    readonly surfaceDim: "#D9D9E7";
    readonly surfaceBright: "#FBF8FF";
    readonly surfaceContainerLowest: "#FFFFFF";
    readonly surfaceContainerLow: "#F4F2FF";
    readonly surfaceContainer: "#EDECFB";
    readonly surfaceContainerHigh: "#E8E7F5";
    readonly surfaceContainerHighest: "#E2E1F0";
    readonly outline: "#747689";
    readonly outlineVariant: "#C4C5DA";
    readonly shadow: "#000000";
    readonly scrim: "#000000";
    readonly surfaceTint: "#0743FF";
    readonly inverseSurface: "#2E303B";
    readonly inverseOnSurface: "#F0EFFE";
    readonly inversePrimary: "#BAC3FF";
    readonly primaryFixed: "#DEE0FF";
    readonly onPrimaryFixed: "#00115A";
    readonly primaryFixedDim: "#BAC3FF";
    readonly onPrimaryFixedVariant: "#0031C6";
    readonly secondaryFixed: "#DEE0FF";
    readonly onSecondaryFixed: "#00115A";
    readonly secondaryFixedDim: "#BAC3FF";
    readonly onSecondaryFixedVariant: "#2E3F94";
    readonly tertiaryFixed: "#FCD7FF";
    readonly onTertiaryFixed: "#340043";
    readonly tertiaryFixedDim: "#F2AFFF";
    readonly onTertiaryFixedVariant: "#780097";
    readonly sectionBackground: "#F5F5F5";
} | {
    readonly primary: "#BAC3FF";
    readonly onPrimary: "#00208E";
    readonly primaryContainer: "#0743FF";
    readonly onPrimaryContainer: "#D1D6FF";
    readonly secondary: "#BAC3FF";
    readonly onSecondary: "#12267D";
    readonly secondaryContainer: "#304196";
    readonly onSecondaryContainer: "#A7B4FF";
    readonly tertiary: "#F2AFFF";
    readonly onTertiary: "#55006B";
    readonly tertiaryContainer: "#780097";
    readonly onTertiaryContainer: "#FCD7FF";
    readonly error: "#FFB4AB";
    readonly onError: "#690005";
    readonly errorContainer: "#93000A";
    readonly onErrorContainer: "#FFDAD6";
    readonly background: "#111318";
    readonly onBackground: "#E3E2EA";
    readonly surface: "#111318";
    readonly onSurface: "#E3E2EA";
    readonly surfaceVariant: "#44464F";
    readonly onSurfaceVariant: "#C4C6D0";
    readonly surfaceDim: "#111318";
    readonly surfaceBright: "#373943";
    readonly surfaceContainerLowest: "#0C0E13";
    readonly surfaceContainerLow: "#191C23";
    readonly surfaceContainer: "#1D2028";
    readonly surfaceContainerHigh: "#282A32";
    readonly surfaceContainerHighest: "#33363D";
    readonly outline: "#8E9099";
    readonly outlineVariant: "#44464F";
    readonly shadow: "#000000";
    readonly scrim: "#000000";
    readonly surfaceTint: "#BAC3FF";
    readonly inverseSurface: "#E3E2EA";
    readonly inverseOnSurface: "#2E3038";
    readonly inversePrimary: "#0743FF";
    readonly primaryFixed: "#DEE0FF";
    readonly onPrimaryFixed: "#00115A";
    readonly primaryFixedDim: "#BAC3FF";
    readonly onPrimaryFixedVariant: "#0031C6";
    readonly secondaryFixed: "#DEE0FF";
    readonly onSecondaryFixed: "#00115A";
    readonly secondaryFixedDim: "#BAC3FF";
    readonly onSecondaryFixedVariant: "#2E3F94";
    readonly tertiaryFixed: "#FCD7FF";
    readonly onTertiaryFixed: "#340043";
    readonly tertiaryFixedDim: "#F2AFFF";
    readonly onTertiaryFixedVariant: "#780097";
    readonly sectionBackground: "#1A1A1A";
};

export declare function useJagotaSnackbar(): {
    show: (options: SnackbarOptions) => void;
    hide: () => void;
    SnackbarComponent: JSX_2.Element;
};

export declare function useJagotaTheme(): JagotaThemeHook;

export declare const zIndex: {
    readonly base: 0;
    readonly raised: 10;
    readonly dropdown: 100;
    readonly sticky: 200;
    readonly overlay: 300;
    readonly drawer: 400;
    readonly modal: 500;
    readonly toast: 600;
    readonly tooltip: 700;
    readonly popover: 800;
};

export { }
