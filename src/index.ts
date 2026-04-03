/**
 * @jagota/ui — Jagota Brother Trading UI Library
 * @version 1.0.0
 *
 * ─── วิธีใช้งาน ────────────────────────────────────────────────────────────
 *
 * 1. ติดตั้ง (หลัง push ขึ้น GitHub):
 *    npm install github:jagota-brother/jagota-ui
 *
 * 2. ครอบ App ด้วย JagotaProvider (ทำแค่ครั้งเดียว):
 *    import { JagotaProvider } from '@jagota/ui'
 *    function App() {
 *      return <JagotaProvider><YourApp /></JagotaProvider>
 *    }
 *
 * 3. ใช้ MUI components ได้เลย — ธีม Jagota ถูกใส่อัตโนมัติ:
 *    import Button from '@mui/material/Button'
 *    import Card from '@mui/material/Card'
 *
 * 4. ใช้ hook เพื่อดึงค่า theme:
 *    import { useJagotaTheme } from '@jagota/ui'
 *    const { colors, isDark, toggleMode } = useJagotaTheme()
 *
 * ───────────────────────────────────────────────────────────────────────────
 */

// ── Theme & Provider ──────────────────────────────────────────────────────────
export { JagotaProvider }                     from './theme/JagotaProvider'
export type { JagotaProviderProps, ColorMode, JagotaContextValue } from './theme/JagotaProvider'

export { useJagotaTheme, useJagotaColors, useColorMode } from './theme/useJagotaTheme'
export type { JagotaThemeHook }               from './theme/useJagotaTheme'

export { jagotaLightTheme, jagotaDarkTheme, createJagotaMuiTheme } from './theme/jagota-mui-theme'

// ── Design Tokens (Foundation) ────────────────────────────────────────────────
export { colors, lightScheme, darkScheme, palette, surfaceTints } from './foundation/tokens/colors'
export { typography, typeScale, fontFamily, fontWeight }           from './foundation/tokens/typography'
export { space, spacingScale, spacing, breakpoints, layoutGrid }   from './foundation/tokens/spacing'
export { shape, cornerRadius, componentShape }                     from './foundation/tokens/shape'
export { elevation, shadows, zIndex }                              from './foundation/tokens/elevation'

// ── Re-export MUI essentials (ให้ Vibe Coder import จากที่เดียว) ──────────────
// ไม่ต้อง import จาก @mui/material โดยตรง
export { default as Box }        from '@mui/material/Box'
export { default as Stack }      from '@mui/material/Stack'
export { default as Grid }       from '@mui/material/Grid'
export { default as Container }  from '@mui/material/Container'
export { default as Typography } from '@mui/material/Typography'
export { default as Divider }    from '@mui/material/Divider'
export { default as Button }     from '@mui/material/Button'
export { default as IconButton } from '@mui/material/IconButton'
export { default as Card }       from '@mui/material/Card'
export { default as CardContent} from '@mui/material/CardContent'
export { default as CardActions} from '@mui/material/CardActions'
export { default as CardHeader } from '@mui/material/CardHeader'
export { default as TextField }  from '@mui/material/TextField'
export { default as Chip }       from '@mui/material/Chip'
export { default as Avatar }     from '@mui/material/Avatar'
export { default as Badge }      from '@mui/material/Badge'
export { default as Dialog }     from '@mui/material/Dialog'
export { default as DialogTitle }   from '@mui/material/DialogTitle'
export { default as DialogContent } from '@mui/material/DialogContent'
export { default as DialogActions } from '@mui/material/DialogActions'
export { default as Snackbar }   from '@mui/material/Snackbar'
export { default as Alert }      from '@mui/material/Alert'
export { default as AppBar }     from '@mui/material/AppBar'
export { default as Toolbar }    from '@mui/material/Toolbar'
export { default as Tabs }       from '@mui/material/Tabs'
export { default as Tab }        from '@mui/material/Tab'
export { default as Switch }     from '@mui/material/Switch'
export { default as Checkbox }   from '@mui/material/Checkbox'
export { default as Radio }      from '@mui/material/Radio'
export { default as RadioGroup } from '@mui/material/RadioGroup'
export { default as Slider }     from '@mui/material/Slider'
export { default as CircularProgress } from '@mui/material/CircularProgress'
export { default as LinearProgress }   from '@mui/material/LinearProgress'
export { default as Skeleton }   from '@mui/material/Skeleton'
export { default as Tooltip }    from '@mui/material/Tooltip'
export { default as Menu }       from '@mui/material/Menu'
export { default as MenuItem }   from '@mui/material/MenuItem'
export { default as List }       from '@mui/material/List'
export { default as ListItem }   from '@mui/material/ListItem'
export { default as ListItemText }    from '@mui/material/ListItemText'
export { default as ListItemIcon }    from '@mui/material/ListItemIcon'
export { default as ListItemButton }  from '@mui/material/ListItemButton'
export { default as Paper }      from '@mui/material/Paper'
export { default as Drawer }     from '@mui/material/Drawer'
export { default as Fab }        from '@mui/material/Fab'
export { default as FormControl}      from '@mui/material/FormControl'
export { default as FormLabel }       from '@mui/material/FormLabel'
export { default as FormHelperText }  from '@mui/material/FormHelperText'
export { default as InputLabel }      from '@mui/material/InputLabel'
export { default as Select }          from '@mui/material/Select'

// ── Types ─────────────────────────────────────────────────────────────────────
export type { ColorScheme }    from './foundation/tokens/colors'
export type { TypeScaleKey }   from './foundation/tokens/typography'
export type { SpacingKey }     from './foundation/tokens/spacing'
export type { CornerRadiusKey }from './foundation/tokens/shape'
export type { ElevationKey }   from './foundation/tokens/elevation'

// ── Phase 3: Jagota Components ────────────────────────────────────────────────
// Jagota-branded components พร้อม M3 behavior และ Jagota theme ในตัว
// แนะนำให้ใช้ components เหล่านี้แทน MUI components โดยตรง
export {
  JagotaButton,
  JagotaCard,
  JagotaTextField,
  JagotaChip,
  JagotaDialog,
  JagotaSnackbar,
  JagotaTopAppBar,
  JagotaNavigationBar,
  JagotaAppLayout,
  useJagotaSnackbar,
} from './components'

export type {
  JagotaButtonProps,
  JagotaButtonVariant,
  JagotaCardProps,
  JagotaCardType,
  JagotaCardPadding,
  JagotaTextFieldProps,
  JagotaTextFieldStatus,
  JagotaChipProps,
  JagotaChipType,
  JagotaDialogProps,
  JagotaSnackbarProps,
  SnackbarOptions,
  JagotaTopAppBarProps,
  TopAppBarType,
  TopAppBarScrollBehavior,
  JagotaNavigationBarProps,
  JagotaAppLayoutProps,
  NavItem,
  NavUser,
} from './components'
