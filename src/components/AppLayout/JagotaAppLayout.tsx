/**
 * JagotaAppLayout
 *
 * Standard Application Shell — Jagota Design System
 *
 * ─── Layout Structure ───────────────────────────────────────────────────────
 *
 *  ┌──────────────────────────────────────────┐
 *  │  Navigation Bar (left)  │  Content Area  │
 *  │  240px expanded         │  flex: 1       │
 *  │  80px collapsed         │                │
 *  │                         │                │
 *  └──────────────────────────────────────────┘
 *
 *  Background: Surface (#FBF8FF light / #111318 dark)
 *  Content background: transparent (inherits Surface)
 *  Cards / sections inside: surfaceContainerLowest (#FFFFFF light)
 *
 * ─── Responsive ─────────────────────────────────────────────────────────────
 *
 *  Desktop  (≥1280px) → Sidebar 240px expanded
 *  Tablet   (768–1279px) → Sidebar 80px collapsed
 *  Mobile   (<768px) → No sidebar. Mobile top bar + drawer overlay.
 *                       Content takes full width.
 *
 * ─── Color Rules ────────────────────────────────────────────────────────────
 *
 *  ✅ Root background    = Surface
 *  ✅ Cards / panels     = surfaceContainerLowest  (if emphasis needed)
 *  ✅ Secondary panels   = surfaceContainerLow     (e.g. sidebar section)
 *  ✅ Neutral content    = no background (transparent — inherits Surface)
 *  ✅ No box-shadows anywhere
 *  ✅ All UI text in English by default
 *
 * ─── Usage ──────────────────────────────────────────────────────────────────
 * @example
 * <JagotaAppLayout
 *   nav={
 *     <JagotaNavigationBar
 *       items={navItems}
 *       activeId={activeRoute}
 *       moduleName="Dashboard"
 *       user={{ name: 'Staff Name', role: 'Category Manager' }}
 *       onNavigate={(id) => router.push(`/${id}`)}
 *     />
 *   }
 * >
 *   <YourPageContent />
 * </JagotaAppLayout>
 */

import React from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'

// ─────────────────────────────────────────────────────────────────────────────
// CONSTANTS — must match JagotaNavigationBar constants
// ─────────────────────────────────────────────────────────────────────────────

const SIDEBAR_EXPANDED_WIDTH  = 240
const SIDEBAR_COLLAPSED_WIDTH = 80
const MOBILE_TOPBAR_HEIGHT    = 56

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────

export interface JagotaAppLayoutProps {
  /** Navigation bar component — use <JagotaNavigationBar /> here */
  nav?: React.ReactNode
  /** Main page content */
  children: React.ReactNode
  /** Force sidebar collapsed state (optional — sidebar manages its own state) */
  sidebarCollapsed?: boolean
  /** Additional sx props for the content area */
  contentSx?: React.ComponentProps<typeof Box>['sx']
}

// ─────────────────────────────────────────────────────────────────────────────
// STYLED ROOT — full viewport, surface background, flex row
// ─────────────────────────────────────────────────────────────────────────────

const LayoutRoot = styled(Box)(({ theme }) => {
  const p = theme.palette as any
  return {
    display: 'flex',
    flexDirection: 'row',
    minHeight: '100vh',
    backgroundColor: p.surface ?? theme.palette.background.default,
    color: p.onSurface ?? theme.palette.text.primary,
  }
})

// ─────────────────────────────────────────────────────────────────────────────
// CONTENT AREA — occupies remaining space beside the sidebar
// ─────────────────────────────────────────────────────────────────────────────

const ContentArea = styled(Box, {
  shouldForwardProp: (p) => p !== 'sidebarWidth' && p !== 'isMobile',
})<{ sidebarWidth: number; isMobile: boolean }>(
  ({ sidebarWidth, isMobile }) => ({
    flex: 1,
    minWidth: 0,
    // Offset for the fixed sidebar — leave space on the left
    marginLeft: isMobile ? 0 : sidebarWidth,
    // On mobile, add top margin for the top bar
    marginTop: isMobile ? MOBILE_TOPBAR_HEIGHT : 0,
    // Smooth width transition when sidebar expands/collapses
    transition: 'margin-left 250ms cubic-bezier(0.2, 0, 0, 1)',
    // Default content padding — overridable via contentSx
    padding: isMobile ? '16px' : '24px',
    overflowX: 'hidden',
  })
)

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export function JagotaAppLayout({
  nav,
  children,
  sidebarCollapsed = false,
  contentSx,
}: JagotaAppLayoutProps) {
  const theme = useTheme()

  // Responsive breakpoints — matches JagotaNavigationBar behavior
  const isMobile  = useMediaQuery(theme.breakpoints.down('md'))  // < 768px
  const isTablet  = useMediaQuery(theme.breakpoints.between('md', 'xl'))  // 768–1279px

  // Determine effective sidebar width
  const isCollapsed = isMobile ? true : (isTablet ? true : sidebarCollapsed)
  const sidebarWidth = isMobile
    ? 0
    : isCollapsed
      ? SIDEBAR_COLLAPSED_WIDTH
      : SIDEBAR_EXPANDED_WIDTH

  return (
    <LayoutRoot>
      {/* Navigation sidebar — rendered outside content flow (position: fixed inside) */}
      {nav}

      {/* Main content — offset by sidebar width */}
      <ContentArea
        sidebarWidth={sidebarWidth}
        isMobile={isMobile}
        sx={contentSx}
      >
        {children}
      </ContentArea>
    </LayoutRoot>
  )
}

export default JagotaAppLayout
