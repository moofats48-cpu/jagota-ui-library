/**
 * JagotaDialog
 *
 * M3 Dialog ที่ใช้ง่าย — ไม่ต้องเขียน DialogTitle / DialogContent / DialogActions เอง
 *
 * @example
 * // Basic confirm dialog
 * <JagotaDialog
 *   open={open}
 *   title="Delete Item"
 *   content="Are you sure? This action cannot be undone."
 *   confirmLabel="Delete"
 *   cancelLabel="Cancel"
 *   onConfirm={handleDelete}
 *   onClose={() => setOpen(false)}
 *   destructive
 * />
 *
 * // Custom content dialog
 * <JagotaDialog
 *   open={open}
 *   title="Edit Profile"
 *   onClose={() => setOpen(false)}
 *   onConfirm={handleSave}
 * >
 *   <JagotaTextField label="Name" />
 *   <JagotaTextField label="Email" />
 * </JagotaDialog>
 */

import React from 'react'
import MuiDialog, { type DialogProps as MuiDialogProps } from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import { JagotaButton } from '../Button/JagotaButton'

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────

export interface JagotaDialogProps extends Omit<MuiDialogProps, 'title'> {
  /** Dialog title */
  title?: React.ReactNode
  /**
   * Short text content — ถ้าต้องการ custom layout ให้ใช้ children แทน
   */
  content?: string
  /** Label ปุ่ม confirm
   * @default 'Confirm'
   */
  confirmLabel?: string
  /** Label ปุ่ม cancel
   * @default 'Cancel'
   */
  cancelLabel?: string
  /** Callback เมื่อกด confirm */
  onConfirm?: () => void
  /** ซ่อน cancel button */
  hideCancel?: boolean
  /**
   * Confirm button เป็นสีแดง (destructive action)
   * @default false
   */
  destructive?: boolean
  /** กำลัง loading (ปิด buttons ระหว่าง async) */
  loading?: boolean
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export function JagotaDialog({
  title,
  content,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  onConfirm,
  onClose,
  hideCancel = false,
  destructive = false,
  loading = false,
  children,
  ...props
}: JagotaDialogProps) {

  const handleClose = (event: object, reason: 'backdropClick' | 'escapeKeyDown') => {
    if (loading) return   // ป้องกันปิดระหว่าง loading
    onClose?.(event, reason)
  }

  return (
    <MuiDialog onClose={handleClose} {...props}>
      {title && (
        <DialogTitle sx={{ pt: 3, px: 3, pb: 2 }}>
          {title}
        </DialogTitle>
      )}

      <DialogContent sx={{ px: 3, pb: 0 }}>
        {content && (
          <DialogContentText>{content}</DialogContentText>
        )}
        {children}
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 3, pt: 2, gap: 1 }}>
        {!hideCancel && (
          <JagotaButton
            variant="text"
            onClick={(e) => onClose?.(e, 'escapeKeyDown')}
            disabled={loading}
          >
            {cancelLabel}
          </JagotaButton>
        )}
        <JagotaButton
          variant="filled"
          onClick={onConfirm}
          loading={loading}
          sx={destructive ? {
            backgroundColor: 'error.main',
            '&:hover': { backgroundColor: 'error.dark' },
          } : {}}
        >
          {confirmLabel}
        </JagotaButton>
      </DialogActions>
    </MuiDialog>
  )
}

export default JagotaDialog
