/**
 * JagotaChip
 *
 * M3 Chip ครบ 4 types:
 *   assist     → action chip — "Open in Maps", "Save", "Share"
 *   filter     → toggleable filter — category selection
 *   input      → tag ที่ลบได้ — selected items, tags
 *   suggestion → quick reply / auto-complete option
 *
 * @example
 * <JagotaChip type="assist" label="Open Map" icon={<MapIcon />} onClick={...} />
 *
 * <JagotaChip
 *   type="filter"
 *   label="Electronics"
 *   selected={activeFilter === 'electronics'}
 *   onClick={() => setFilter('electronics')}
 * />
 *
 * <JagotaChip type="input" label="Bangkok" onDelete={() => removeTag('Bangkok')} />
 *
 * <JagotaChip type="suggestion" label="Tomorrow 9AM" onClick={...} />
 */

import React from 'react'
import MuiChip, { type ChipProps as MuiChipProps } from '@mui/material/Chip'
import { useTheme } from '@mui/material/styles'

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────

export type JagotaChipType = 'assist' | 'filter' | 'input' | 'suggestion'

export interface JagotaChipProps extends Omit<MuiChipProps, 'color' | 'variant'> {
  /**
   * M3 chip type — กำหนด behavior และ style
   * @default 'assist'
   */
  type?: JagotaChipType
  /**
   * สถานะ selected (สำหรับ filter chip)
   * @default false
   */
  selected?: boolean
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export function JagotaChip({
  type = 'assist',
  selected = false,
  sx,
  ...props
}: JagotaChipProps) {
  const theme = useTheme()
  const scheme = theme.palette

  // ── Per-type styles ──
  const typeStyles: Record<JagotaChipType, object> = {
    assist: {
      variant: 'outlined' as const,
      sx: {
        borderColor: scheme.outlineVariant,
        color: scheme.onSurface,
        '&:hover': { backgroundColor: `${scheme.onSurface}14` },
      },
    },
    filter: {
      variant: selected ? 'filled' : 'outlined' as const,
      sx: selected
        ? {
            backgroundColor: scheme.secondaryContainer,
            color: scheme.onSecondaryContainer,
            borderColor: 'transparent',
            '& .MuiChip-label': { paddingLeft: selected ? 8 : undefined },
          }
        : {
            borderColor: scheme.outline,
            color: scheme.onSurfaceVariant,
            '&:hover': { backgroundColor: `${scheme.onSurface}14` },
          },
    },
    input: {
      variant: 'outlined' as const,
      sx: {
        borderColor: scheme.outline,
        color: scheme.onSurfaceVariant,
      },
    },
    suggestion: {
      variant: 'outlined' as const,
      sx: {
        borderColor: scheme.outline,
        color: scheme.onSurfaceVariant,
        '&:hover': {
          backgroundColor: `${scheme.primary}14`,
          borderColor: scheme.primary,
          color: scheme.primary,
        },
      },
    },
  }

  const { sx: typeSx, ...typeProps } = typeStyles[type] as { sx: object; variant: 'filled' | 'outlined' }

  return (
    <MuiChip
      {...typeProps}
      sx={[
        typeSx,
        ...(Array.isArray(sx) ? sx : [sx ?? {}]),
      ]}
      {...props}
    />
  )
}

export default JagotaChip
