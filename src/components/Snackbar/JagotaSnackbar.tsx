/**
 * JagotaSnackbar
 *
 * M3 Snackbar + Alert ที่ใช้ง่าย — รองรับ 4 severity
 *
 * @example
 * // Basic
 * <JagotaSnackbar
 *   open={open}
 *   message="Changes saved successfully"
 *   onClose={() => setOpen(false)}
 * />
 *
 * // With severity
 * <JagotaSnackbar
 *   open={open}
 *   message="Failed to save. Please try again."
 *   severity="error"
 *   onClose={() => setOpen(false)}
 * />
 *
 * // With action button
 * <JagotaSnackbar
 *   open={open}
 *   message="Item deleted"
 *   actionLabel="Undo"
 *   onAction={handleUndo}
 *   onClose={() => setOpen(false)}
 * />
 */

import React from 'react'
import MuiSnackbar, { type SnackbarProps as MuiSnackbarProps } from '@mui/material/Snackbar'
import Alert, { type AlertColor } from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import MuiButton from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────

export interface JagotaSnackbarProps extends Omit<MuiSnackbarProps, 'message'> {
  /** ข้อความหลัก */
  message: string
  /** Title เพิ่มเติม (optional) */
  title?: string
  /**
   * Severity ของ message
   * @default 'info'
   */
  severity?: AlertColor
  /** Label ของ action button */
  actionLabel?: string
  /** Callback เมื่อกด action */
  onAction?: () => void
  /** Callback เมื่อปิด */
  onClose?: () => void
  /**
   * ตำแหน่งแสดง
   * @default bottom-center
   */
  position?: 'bottom-center' | 'bottom-left' | 'bottom-right' | 'top-center'
}

// ─────────────────────────────────────────────────────────────────────────────
// POSITION MAP
// ─────────────────────────────────────────────────────────────────────────────

const positionMap: Record<
  NonNullable<JagotaSnackbarProps['position']>,
  MuiSnackbarProps['anchorOrigin']
> = {
  'bottom-center': { vertical: 'bottom', horizontal: 'center' },
  'bottom-left':   { vertical: 'bottom', horizontal: 'left'   },
  'bottom-right':  { vertical: 'bottom', horizontal: 'right'  },
  'top-center':    { vertical: 'top',    horizontal: 'center' },
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export function JagotaSnackbar({
  message,
  title,
  severity = 'info',
  actionLabel,
  onAction,
  onClose,
  position = 'bottom-center',
  autoHideDuration = 4000,
  ...props
}: JagotaSnackbarProps) {
  const theme = useTheme()

  const handleClose = (_: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return
    onClose?.()
  }

  const action = actionLabel ? (
    <MuiButton
      color="inherit"
      size="small"
      onClick={() => { onAction?.(); onClose?.() }}
      sx={{ fontWeight: 500, letterSpacing: '0.1px' }}
    >
      {actionLabel}
    </MuiButton>
  ) : undefined

  return (
    <MuiSnackbar
      anchorOrigin={positionMap[position]}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      {...props}
    >
      <Alert
        severity={severity}
        onClose={onClose}
        action={action}
        sx={{
          borderRadius: theme.shape.borderRadius,
          minWidth: 280,
          maxWidth: 560,
          boxShadow: 'none', // Jagota Policy: No shadows
          alignItems: 'flex-start',
        }}
      >
        {title && <AlertTitle>{title}</AlertTitle>}
        {message}
      </Alert>
    </MuiSnackbar>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// HOOK — useJagotaSnackbar
// ยิง snackbar โดยไม่ต้อง manage state เอง
// ─────────────────────────────────────────────────────────────────────────────

export interface SnackbarOptions extends Omit<JagotaSnackbarProps, 'open' | 'message'> {
  message: string
}

export function useJagotaSnackbar() {
  const [state, setState] = React.useState<{ open: boolean } & SnackbarOptions>({
    open: false,
    message: '',
  })

  const show = React.useCallback((options: SnackbarOptions) => {
    setState({ ...options, open: true })
  }, [])

  const hide = React.useCallback(() => {
    setState(prev => ({ ...prev, open: false }))
  }, [])

  const SnackbarComponent = (
    <JagotaSnackbar
      {...state}
      onClose={hide}
    />
  )

  return { show, hide, SnackbarComponent }
}

export default JagotaSnackbar
