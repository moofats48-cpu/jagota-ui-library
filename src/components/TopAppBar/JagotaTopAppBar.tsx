/**
 * JagotaTopAppBar
 *
 * M3 Top App Bar ครบ 4 types:
 *   center-aligned → title อยู่กลาง — default app bar
 *   small          → title อยู่ซ้าย — navigation pages
 *   medium         → title ใหญ่ขึ้น, อยู่ด้านล่าง
 *   large          → title ใหญ่มาก — hero sections
 *
 * @example
 * // Center aligned (default)
 * <JagotaTopAppBar
 *   title="Jagota"
 *   leading={<IconButton><ArrowBackIcon /></IconButton>}
 *   trailing={<IconButton><MoreVertIcon /></IconButton>}
 * />
 *
 * // Small with scroll behavior
 * <JagotaTopAppBar
 *   type="small"
 *   title="Order History"
 *   leading={<IconButton onClick={goBack}><ArrowBackIcon /></IconButton>}
 *   scrollBehavior="elevate"
 * />
 *
 * // Large
 * <JagotaTopAppBar type="large" title="Dashboard" />
 */

import React from 'react'
import AppBar, { type AppBarProps } from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useScrollTrigger } from '@mui/material'
import { useTheme } from '@mui/material/styles'

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────

export type TopAppBarType = 'center-aligned' | 'small' | 'medium' | 'large'
export type TopAppBarScrollBehavior = 'none' | 'elevate' | 'hide'

export interface JagotaTopAppBarProps extends Omit<AppBarProps, 'title'> {
  /**
   * App bar layout type
   * @default 'center-aligned'
   */
  type?: TopAppBarType
  /** Title text */
  title?: React.ReactNode
  /** Leading icon/button (left side) */
  leading?: React.ReactNode
  /** Trailing icons/buttons (right side) */
  trailing?: React.ReactNode
  /**
   * Scroll behavior
   * @default 'none'
   */
  scrollBehavior?: TopAppBarScrollBehavior
}

// ─────────────────────────────────────────────────────────────────────────────
// TYPOGRAPHY MAP per type
// ─────────────────────────────────────────────────────────────────────────────

const titleTypographyMap: Record<TopAppBarType, {
  variant: 'titleLarge' | 'titleMedium' | 'headlineSmall' | 'headlineMedium'
  muiVariant: 'h6' | 'subtitle1' | 'h5' | 'h4'
  fontSize: number
  fontWeight: number
}> = {
  'center-aligned': { variant: 'titleLarge',    muiVariant: 'h6',        fontSize: 22, fontWeight: 400 },
  'small':          { variant: 'titleLarge',    muiVariant: 'h6',        fontSize: 22, fontWeight: 400 },
  'medium':         { variant: 'headlineSmall', muiVariant: 'h5',        fontSize: 28, fontWeight: 400 },
  'large':          { variant: 'headlineMedium',muiVariant: 'h4',        fontSize: 32, fontWeight: 400 },
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export function JagotaTopAppBar({
  type = 'center-aligned',
  title,
  leading,
  trailing,
  scrollBehavior = 'none',
  sx,
  ...props
}: JagotaTopAppBarProps) {
  const theme = useTheme()
  const scheme = theme.palette
  const isScrolled = useScrollTrigger({ disableHysteresis: true, threshold: 0 })

  const isTwoRow = type === 'medium' || type === 'large'
  const isCentered = type === 'center-aligned'
  const typo = titleTypographyMap[type]

  const elevation = scrollBehavior === 'elevate' && isScrolled ? 2 : 0

  if (scrollBehavior === 'hide' && isScrolled) return null

  const titleNode = (
    <Typography
      variant={typo.muiVariant}
      component="h1"
      noWrap={!isTwoRow}
      sx={{
        fontSize: typo.fontSize,
        fontWeight: typo.fontWeight,
        letterSpacing: isTwoRow ? 0 : 0,
        color: scheme.onSurface,
        flex: isCentered ? 1 : undefined,
        textAlign: isCentered ? 'center' : 'left',
      }}
    >
      {title}
    </Typography>
  )

  return (
    <AppBar
      position="sticky"
      elevation={elevation}
      sx={[
        {
          backgroundColor: isScrolled && scrollBehavior === 'elevate'
            ? scheme.surfaceContainer
            : scheme.surface,
          color: scheme.onSurface,
          boxShadow: 'none', // Jagota Policy: No shadows
          // Use border-bottom always — replaces shadow for separation
          borderBottom: `1px solid ${scheme.outlineVariant}`,
          transition: 'background-color 200ms ease',
        },
        ...(Array.isArray(sx) ? sx : [sx ?? {}]),
      ]}
      {...props}
    >
      {/* ── Single-row bar (center-aligned, small) ── */}
      {!isTwoRow && (
        <Toolbar sx={{ minHeight: 64, px: 2, gap: 0.5 }}>
          {leading && <Box sx={{ mr: isCentered ? 0 : 1 }}>{leading}</Box>}
          {titleNode}
          {trailing && <Box sx={{ ml: isCentered ? 0 : 'auto' }}>{trailing}</Box>}
        </Toolbar>
      )}

      {/* ── Two-row bar (medium, large) ── */}
      {isTwoRow && (
        <>
          <Toolbar sx={{ minHeight: 64, px: 2, gap: 0.5 }}>
            {leading && <Box>{leading}</Box>}
            <Box sx={{ flex: 1 }} />
            {trailing && <Box>{trailing}</Box>}
          </Toolbar>
          <Box sx={{ px: 3, pb: type === 'large' ? 3 : 2 }}>
            {titleNode}
          </Box>
        </>
      )}
    </AppBar>
  )
}

export default JagotaTopAppBar
