import { useTheme as useMuiTheme } from '@mui/material/styles'
import { useJagotaContext, type ColorMode } from './JagotaProvider'
import { lightScheme, darkScheme, type ColorScheme } from '../foundation/tokens/colors'
import { typeScale } from '../foundation/tokens/typography'
import { spacingScale } from '../foundation/tokens/spacing'
import { cornerRadius } from '../foundation/tokens/shape'

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

// ─────────────────────────────────────────────────────────────────────────────
// RETURN TYPE
// ─────────────────────────────────────────────────────────────────────────────

export interface JagotaThemeHook {
  /** โหมดสีปัจจุบัน: 'light' | 'dark' */
  mode: 'light' | 'dark'
  /** โหมดที่ user เลือก (รวม 'system') */
  selectedMode: ColorMode
  /** เปลี่ยนโหมดสี */
  setMode: (mode: ColorMode) => void
  /** toggle light ↔ dark */
  toggleMode: () => void

  /** สี Semantic ของ theme ปัจจุบัน (พร้อมใช้ใน style) */
  colors: ColorScheme

  /** Type scale (ขนาด font ทุก role) */
  typeScale: typeof typeScale

  /** Spacing values (px) */
  spacing: typeof spacingScale

  /** Corner radius values (px) */
  radius: typeof cornerRadius

  /** MUI theme object (สำหรับ advanced use) */
  muiTheme: ReturnType<typeof useMuiTheme>

  /** Helper: ตรวจว่าตอนนี้เป็น dark mode */
  isDark: boolean
  /** Helper: ตรวจว่าตอนนี้เป็น light mode */
  isLight: boolean
}

// ─────────────────────────────────────────────────────────────────────────────
// HOOK
// ─────────────────────────────────────────────────────────────────────────────

export function useJagotaTheme(): JagotaThemeHook {
  const { mode, selectedMode, setMode, toggleMode } = useJagotaContext()
  const muiTheme = useMuiTheme()

  // เลือก color scheme ตาม mode ปัจจุบัน
  const colors = mode === 'dark' ? darkScheme : lightScheme

  return {
    mode,
    selectedMode,
    setMode,
    toggleMode,
    colors,
    typeScale,
    spacing: spacingScale,
    radius: cornerRadius,
    muiTheme,
    isDark:  mode === 'dark',
    isLight: mode === 'light',
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// CONVENIENCE HOOKS
// ─────────────────────────────────────────────────────────────────────────────

/**
 * ดึงแค่ color scheme ของ mode ปัจจุบัน
 *
 * @example
 * const colors = useJagotaColors()
 * <div style={{ color: colors.primary }}>
 */
export function useJagotaColors() {
  const { mode } = useJagotaContext()
  return mode === 'dark' ? darkScheme : lightScheme
}

/**
 * ดึงแค่ dark mode controls
 *
 * @example
 * const { isDark, toggleMode } = useColorMode()
 */
export function useColorMode() {
  const { mode, selectedMode, setMode, toggleMode } = useJagotaContext()
  return {
    mode,
    selectedMode,
    isDark:  mode === 'dark',
    isLight: mode === 'light',
    setMode,
    toggleMode,
  }
}

export default useJagotaTheme
