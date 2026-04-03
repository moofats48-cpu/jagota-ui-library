/**
 * JagotaCard
 *
 * M3 Card ครบ 3 types:
 *   elevated  → มี shadow (default) — content card ทั่วไป
 *   filled    → ไม่มี shadow, filled surface — highlight card
 *   outlined  → มี border, ไม่มี shadow — secondary info
 *
 * Clickable mode: ใส่ onClick เพื่อให้ card กด/hover ได้
 *
 * @example
 * <JagotaCard>
 *   <CardContent>Hello</CardContent>
 * </JagotaCard>
 *
 * <JagotaCard type="filled" onClick={() => navigate('/detail')}>
 *   <CardContent>Clickable filled card</CardContent>
 * </JagotaCard>
 *
 * <JagotaCard type="outlined" padding="comfortable">
 *   <CardContent>Outlined card</CardContent>
 * </JagotaCard>
 */

import React from 'react'
import MuiCard, { type CardProps as MuiCardProps } from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import { useTheme } from '@mui/material/styles'

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────

export type JagotaCardType = 'elevated' | 'filled' | 'outlined'
export type JagotaCardPadding = 'none' | 'compact' | 'comfortable' | 'spacious'

export interface JagotaCardProps extends Omit<MuiCardProps, 'variant'> {
  /**
   * M3 card type
   * @default 'elevated'
   */
  type?: JagotaCardType
  /**
   * Built-in padding preset
   * @default 'none' (ให้ CardContent จัดการเอง)
   */
  padding?: JagotaCardPadding
  /**
   * ถ้าใส่ onClick จะ wrap ด้วย CardActionArea อัตโนมัติ
   */
  onClick?: React.MouseEventHandler<HTMLElement>
}

// ─────────────────────────────────────────────────────────────────────────────
// PADDING MAP
// ─────────────────────────────────────────────────────────────────────────────

const paddingMap: Record<JagotaCardPadding, number> = {
  none:        0,
  compact:     8,
  comfortable: 16,
  spacious:    24,
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export function JagotaCard({
  type = 'elevated',
  padding = 'none',
  onClick,
  children,
  sx,
  ...props
}: JagotaCardProps) {
  const theme = useTheme()
  const scheme = theme.palette
  const p = paddingMap[padding]

  // ── Type → sx styles ──
  const typeStyles: object = {
    elevated: {
      // Jagota Policy: No shadows — use surfaceContainerLowest for elevation
      backgroundColor: scheme.surfaceContainerLowest ?? scheme.background?.paper,
      boxShadow: 'none',
      '&:hover': onClick ? {
        backgroundColor: scheme.surfaceContainerLow ?? scheme.background?.paper,
        boxShadow: 'none',
      } : {},
    },
    filled: {
      backgroundColor: scheme.surfaceContainerHighest,
      boxShadow: 'none',
    },
    outlined: {
      backgroundColor: scheme.surface,
      boxShadow: 'none',
      border: `1px solid ${scheme.outlineVariant}`,
    },
  }[type]

  const cardContent = onClick ? (
    <CardActionArea onClick={onClick} sx={{ height: '100%' }}>
      {children}
    </CardActionArea>
  ) : children

  return (
    <MuiCard
      sx={[
        typeStyles,
        p > 0 ? { padding: p } : {},
        ...(Array.isArray(sx) ? sx : [sx ?? {}]),
      ]}
      {...props}
    >
      {cardContent}
    </MuiCard>
  )
}

export default JagotaCard
