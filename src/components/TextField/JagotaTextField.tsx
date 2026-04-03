/**
 * JagotaTextField
 *
 * M3 Text Field ครบ 2 variants:
 *   outlined → default — form fields ทั่วไป
 *   filled   → M3 filled — search bars, inline forms
 *
 * เพิ่ม convenience props:
 *   - status: 'error' | 'success' | 'warning' (แสดง icon + สี)
 *   - maxLength: แสดง character counter อัตโนมัติ
 *
 * @example
 * <JagotaTextField label="Email" type="email" />
 * <JagotaTextField label="Search" variant="filled" />
 * <JagotaTextField label="Username" status="error" helperText="Already taken" />
 * <JagotaTextField label="Bio" multiline rows={4} maxLength={200} />
 */

import React, { useState } from 'react'
import MuiTextField, { type TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import { useTheme } from '@mui/material/styles'

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────

export type JagotaTextFieldStatus = 'default' | 'error' | 'success' | 'warning'

export interface JagotaTextFieldProps
  extends Omit<MuiTextFieldProps, 'color' | 'variant'> {
  /**
   * M3 text field style
   * @default 'outlined'
   */
  variant?: 'outlined' | 'filled'
  /**
   * Validation status — แสดง helper text สีต่างๆ
   * @default 'default'
   */
  status?: JagotaTextFieldStatus
  /**
   * จำนวนตัวอักษรสูงสุด — แสดง counter (x/max) ใน helperText
   */
  maxLength?: number
}

// ─────────────────────────────────────────────────────────────────────────────
// STATUS ICON (text-based เพื่อไม่พึ่ง icon library)
// ─────────────────────────────────────────────────────────────────────────────

const statusEndAdornment: Partial<Record<JagotaTextFieldStatus, React.ReactNode>> = {
  error:   <InputAdornment position="end"><span style={{ color: 'inherit', fontSize: 16 }}>✕</span></InputAdornment>,
  success: <InputAdornment position="end"><span style={{ fontSize: 16 }}>✓</span></InputAdornment>,
  warning: <InputAdornment position="end"><span style={{ fontSize: 16 }}>⚠</span></InputAdornment>,
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export function JagotaTextField({
  variant = 'outlined',
  status = 'default',
  maxLength,
  helperText,
  inputProps,
  InputProps,
  value,
  onChange,
  sx,
  ...props
}: JagotaTextFieldProps) {
  const theme = useTheme()
  const [internalValue, setInternalValue] = useState<string>(
    typeof value === 'string' ? value : ''
  )

  // track length ถ้า uncontrolled
  const currentLength = typeof value === 'string'
    ? value.length
    : internalValue.length

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (maxLength && e.target.value.length > maxLength) return
    setInternalValue(e.target.value)
    onChange?.(e)
  }

  // Helper text: ถ้ามี maxLength ให้ append counter
  const resolvedHelperText = maxLength
    ? helperText
      ? `${helperText}  (${currentLength}/${maxLength})`
      : `${currentLength}/${maxLength}`
    : helperText

  // Status → MUI color/error
  // ✅ ดึงสีจาก theme.palette — ห้าม hardcode hex
  const isError = status === 'error'
  const successColor = theme.palette.success.main
  const warningColor = theme.palette.warning.main

  const successSx = status === 'success'
    ? {
        '& .MuiOutlinedInput-notchedOutline': { borderColor: successColor },
        '& .MuiFilledInput-underline:after':   { borderBottomColor: successColor },
        '& .MuiFormHelperText-root': { color: successColor },
        '& .MuiInputLabel-root.Mui-focused': { color: successColor },
      }
    : {}
  const warningSx = status === 'warning'
    ? {
        '& .MuiOutlinedInput-notchedOutline': { borderColor: warningColor },
        '& .MuiFilledInput-underline:after':   { borderBottomColor: warningColor },
        '& .MuiFormHelperText-root': { color: warningColor },
        '& .MuiInputLabel-root.Mui-focused': { color: warningColor },
      }
    : {}

  return (
    <MuiTextField
      variant={variant}
      error={isError}
      helperText={resolvedHelperText}
      value={value ?? internalValue}
      onChange={handleChange}
      inputProps={{ maxLength, ...inputProps }}
      InputProps={{
        endAdornment: status !== 'default' ? statusEndAdornment[status] : undefined,
        ...InputProps,
      }}
      sx={[
        successSx,
        warningSx,
        ...(Array.isArray(sx) ? sx : [sx ?? {}]),
      ]}
      {...props}
    />
  )
}

export default JagotaTextField
