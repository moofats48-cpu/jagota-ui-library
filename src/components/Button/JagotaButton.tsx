/**
 * JagotaButton
 *
 * Jagota-branded button ที่ครอบ MUI Button
 * รองรับ M3 button variants ครบ 5 ตัว:
 *   filled    → default (contained) — CTA หลัก
 *   tonal     → secondary fill (containedSecondary) — CTA รอง
 *   outlined  → bordered — action รอง
 *   text      → ไม่มี border — inline action
 *   elevated  → มี shadow เล็กน้อย — floating action
 *
 * รองรับ 2 รูปทรง (shape):
 *   round   (default) → Pill shape — border-radius: 1000px
 *   square            → Rounded rectangle — border-radius: 12px (radius-md)
 *
 * ⚠️ Vibe Coding — ถามก่อนเริ่มทุกครั้ง:
 *   "Button shape สำหรับ session นี้: round หรือ square?"
 *
 * @example
 * <JagotaButton>Save</JagotaButton>
 * <JagotaButton variant="outlined">Cancel</JagotaButton>
 * <JagotaButton variant="tonal" size="small">Filter</JagotaButton>
 * <JagotaButton variant="elevated" startIcon={<AddIcon />}>Add Item</JagotaButton>
 * <JagotaButton shape="square">Square Button</JagotaButton>
 * <JagotaButton loading>Saving...</JagotaButton>
 */

import React from 'react'
import MuiButton, { type ButtonProps as MuiButtonProps } from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import { styled } from '@mui/material/styles'

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────

export type JagotaButtonVariant = 'filled' | 'tonal' | 'outlined' | 'text' | 'elevated'

/**
 * Button corner shape — aligned with Jagota Design System radius tokens.
 *
 * round  (default) → Pill / fully rounded  → border-radius: 1000px
 * square           → Rounded rectangle     → border-radius: 12px  (radius-md)
 *
 * MUI standard: shape is controlled via `theme.shape.borderRadius` globally,
 * or via `sx` per-component. JagotaButton exposes it as a first-class prop
 * so Vibe coding sessions can set it once at the top of the file.
 */
export type JagotaButtonShape = 'round' | 'square'

/** Border-radius values mapped to Jagota radius tokens */
const shapeRadius: Record<JagotaButtonShape, string> = {
  round:  '1000px',   // --radius-full  →  Pill
  square: '12px',     // --radius-md    →  Rounded rectangle
}

export interface JagotaButtonProps
  extends Omit<MuiButtonProps, 'variant' | 'color'> {
  /**
   * M3 button variant
   * @default 'filled'
   */
  variant?: JagotaButtonVariant
  /**
   * Corner shape of the button.
   * Ask at the start of every Vibe coding session: "round or square?"
   * @default 'round'
   */
  shape?: JagotaButtonShape
  /**
   * แสดง loading spinner และ disable interaction
   * @default false
   */
  loading?: boolean
}

// ─────────────────────────────────────────────────────────────────────────────
// VARIANT → MUI PROPS MAP
// ─────────────────────────────────────────────────────────────────────────────

const variantMap: Record<
  JagotaButtonVariant,
  Pick<MuiButtonProps, 'variant' | 'color'> & { sx?: object }
> = {
  filled:   { variant: 'contained',  color: 'primary'   },
  tonal:    { variant: 'contained',  color: 'secondary' },
  outlined: { variant: 'outlined',   color: 'primary'   },
  text:     { variant: 'text',       color: 'primary'   },
  // Elevated = same as filled — Jagota Policy: No shadows
  elevated: {
    variant: 'contained',
    color: 'primary',
    sx: {
      boxShadow: 'none',
      '&:hover': { boxShadow: 'none' },
    },
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// STYLED WRAPPER (เพิ่ม loading state styling)
// ─────────────────────────────────────────────────────────────────────────────

const StyledButton = styled(MuiButton)({
  position: 'relative',
  '& .JagotaButton-spinner': {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
  '& .JagotaButton-content--hidden': {
    visibility: 'hidden',
  },
})

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export function JagotaButton({
  variant = 'filled',
  shape   = 'round',
  loading = false,
  disabled,
  children,
  sx,
  ...props
}: JagotaButtonProps) {
  const { variant: muiVariant, color, sx: variantSx, ...variantProps } = variantMap[variant]

  return (
    <StyledButton
      variant={muiVariant}
      color={color}
      disabled={disabled || loading}
      sx={[
        { borderRadius: shapeRadius[shape] },   // shape takes lowest priority
        variantSx ?? {},
        ...(Array.isArray(sx) ? sx : [sx]),     // caller sx always wins
      ]}
      {...variantProps}
      {...props}
    >
      {loading && (
        <CircularProgress
          size={18}
          color="inherit"
          className="JagotaButton-spinner"
          aria-label="loading"
        />
      )}
      <span className={loading ? 'JagotaButton-content--hidden' : undefined}>
        {children}
      </span>
    </StyledButton>
  )
}

export default JagotaButton
