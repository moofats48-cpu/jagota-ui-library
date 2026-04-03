import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  type ReactNode,
} from 'react'
import {
  ThemeProvider as MuiThemeProvider,
  type Theme,
} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { createJagotaMuiTheme } from './jagota-mui-theme'

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

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────

export type ColorMode = 'light' | 'dark' | 'system'

export interface JagotaContextValue {
  /** โหมดสีปัจจุบัน (ค่าที่ resolve แล้ว — ไม่มี 'system') */
  mode: 'light' | 'dark'
  /** โหมดที่ user เลือก (อาจเป็น 'system') */
  selectedMode: ColorMode
  /** MUI Theme object ปัจจุบัน */
  theme: Theme
  /** เปลี่ยนโหมดสี */
  setMode: (mode: ColorMode) => void
  /** toggle ระหว่าง light ↔ dark */
  toggleMode: () => void
}

// ─────────────────────────────────────────────────────────────────────────────
// CONTEXT
// ─────────────────────────────────────────────────────────────────────────────

const JagotaContext = createContext<JagotaContextValue | null>(null)
JagotaContext.displayName = 'JagotaContext'

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────

/** ดึง system color preference จาก browser */
const getSystemMode = (): 'light' | 'dark' => {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/** Resolve ColorMode → 'light' | 'dark' */
const resolveMode = (mode: ColorMode): 'light' | 'dark' => {
  if (mode === 'system') return getSystemMode()
  return mode
}

// ─────────────────────────────────────────────────────────────────────────────
// PROVIDER COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export interface JagotaProviderProps {
  children: ReactNode
  /**
   * โหมดสีตั้งต้น
   * @default 'light'
   */
  defaultMode?: ColorMode
  /**
   * ปิด CssBaseline (ถ้า project มี global styles ของตัวเอง)
   * @default false
   */
  disableCssBaseline?: boolean
}

export function JagotaProvider({
  children,
  defaultMode = 'light',
  disableCssBaseline = false,
}: JagotaProviderProps) {

  const [selectedMode, setSelectedMode] = useState<ColorMode>(defaultMode)

  // Resolve mode (handle 'system')
  const resolvedMode = useMemo(() => resolveMode(selectedMode), [selectedMode])

  // สร้าง MUI Theme ตาม mode
  const theme = useMemo(
    () => createJagotaMuiTheme(resolvedMode),
    [resolvedMode],
  )

  // Handler: เปลี่ยน mode
  const setMode = useCallback((mode: ColorMode) => {
    setSelectedMode(mode)
    // บันทึกลง localStorage เพื่อจำระหว่าง session
    if (typeof window !== 'undefined') {
      localStorage.setItem('jagota-color-mode', mode)
    }
  }, [])

  // Handler: toggle light ↔ dark
  const toggleMode = useCallback(() => {
    setMode(resolvedMode === 'light' ? 'dark' : 'light')
  }, [resolvedMode, setMode])

  const contextValue = useMemo<JagotaContextValue>(() => ({
    mode: resolvedMode,
    selectedMode,
    theme,
    setMode,
    toggleMode,
  }), [resolvedMode, selectedMode, theme, setMode, toggleMode])

  return (
    <JagotaContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme}>
        {!disableCssBaseline && <CssBaseline />}
        {children}
      </MuiThemeProvider>
    </JagotaContext.Provider>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// HOOK — useJagotaContext (internal)
// ─────────────────────────────────────────────────────────────────────────────

export function useJagotaContext(): JagotaContextValue {
  const context = useContext(JagotaContext)
  if (!context) {
    throw new Error(
      '[JagotaUI] useJagotaContext ต้องใช้ภายใน <JagotaProvider>\n' +
      'วิธีแก้: ครอบ <JagotaProvider> ที่ root ของ App'
    )
  }
  return context
}

export default JagotaProvider
