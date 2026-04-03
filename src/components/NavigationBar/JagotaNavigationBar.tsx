/**
 * JagotaNavigationBar
 *
 * Sidebar Navigation — Jagota Design System (Rebuilt v2)
 *
 * ─── Layout ──────────────────────────────────────────────────────────────────
 *
 *  Desktop  (≥1280px)  → Expanded sidebar 240px
 *  Tablet   (768–1279px) → Collapsed sidebar 80px (icons only)
 *  Mobile   (<768px)   → Hidden sidebar + Top bar 56px + Drawer overlay 280px
 *
 * ─── Confirmed Color Spec ────────────────────────────────────────────────────
 *
 *  Sidebar BG             surfaceContainerLowest  #FFFFFF
 *  Sidebar border-right   surfaceVariant          #E0E1F6  (1px)
 *  Bell icon              onSurfaceVariant        #434657
 *  Bell badge             error                   #BA1A1A
 *  Module name            outline                 #747689
 *  Collapse btn BG        tertiaryContainer       #FCD7FF
 *  Collapse btn icon      onTertiaryContainer     #780097
 *  Nav item default BG    transparent
 *  Nav item hover BG      primaryContainer 10%    rgba(222,224,255,0.10)
 *  Nav item active BG     surfaceContainerLow     #F4F2FF
 *  Nav icon/label (off)   onSurfaceVariant        #434657
 *  Nav icon/label (on)    onSurface               #191B25
 *  Active dot             primary                 #0743FF
 *  Avatar border          outlineVariant 1px      #C4C5DA
 *  User name              onSurface               #191B25
 *  User role              outline                 #747689
 *
 * ─── Usage ───────────────────────────────────────────────────────────────────
 * @example
 * <JagotaAppLayout
 *   nav={
 *     <JagotaNavigationBar
 *       items={[
 *         { id: 'dashboard', label: 'Dashboard',    icon: <DashboardIcon /> },
 *         { id: 'analysis',  label: 'Analysis',     icon: <AnalyticsIcon /> },
 *         { id: 'settings',  label: 'Target Setup', icon: <SettingsIcon />, disabled: true },
 *       ]}
 *       activeId="dashboard"
 *       moduleName="Target Setup"
 *       user={{ name: 'Staff Name', role: 'Category Manager', avatarSrc: '/avatar.jpg' }}
 *       logo={<img src="/jagota-logo.svg" alt="JAGOTA" />}
 *       logoSymbolic={<img src="/jagota-logo-symbolic.svg" alt="J" />}
 *       notificationCount={3}
 *       onNavigate={(id) => router.push(`/${id}`)}
 *     />
 *   }
 * >
 *   <PageContent />
 * </JagotaAppLayout>
 */

import React, { useState, useCallback } from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import useMediaQuery from '@mui/material/useMediaQuery'

// ─────────────────────────────────────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────────────────────────────────────

const SIDEBAR_EXPANDED_WIDTH  = 240
const SIDEBAR_COLLAPSED_WIDTH = 80
const MOBILE_DRAWER_WIDTH     = 280
const MOBILE_TOPBAR_HEIGHT    = 56

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────

export interface NavItem {
  id:        string
  label:     string
  /** Icon element — recommended 20px, stroke style */
  icon:      React.ReactNode
  /** Optional badge count */
  badge?:    number
  /** Disabled — dimmed 38%, not clickable */
  disabled?: boolean
}

export interface NavUser {
  name:       string
  role:       string
  avatarSrc?: string
  /** Fallback initials if no avatarSrc */
  initials?:  string
}

export interface JagotaNavigationBarProps {
  items:                NavItem[]
  activeId?:            string
  moduleName?:          string
  /** Full JAGOTA wordmark — shown in expanded state */
  logo?:                React.ReactNode
  /** J symbolic icon — shown in collapsed state */
  logoSymbolic?:        React.ReactNode
  user?:                NavUser
  notificationCount?:   number
  onNavigate?:          (id: string) => void
  onNotificationClick?: () => void
  onUserMenuClick?:     () => void
  /** Override collapsed state externally */
  collapsed?:           boolean
  onCollapsedChange?:   (collapsed: boolean) => void
}

// ─────────────────────────────────────────────────────────────────────────────
// INLINE SVG ICONS (no external dependency)
// ─────────────────────────────────────────────────────────────────────────────

/** Bell icon — matches assets/icon/notification.svg (filled style, 20×20 viewBox) */
const BellIcon = ({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3.33337 15.8334V14.1667H5.00004V8.33335C5.00004 7.18058 5.34726 6.15974 6.04171 5.27085C6.73615 4.36808 7.63893 3.7778 8.75004 3.50002V2.91669C8.75004 2.56946 8.8681 2.2778 9.10421 2.04169C9.35421 1.79169 9.65282 1.66669 10 1.66669C10.3473 1.66669 10.6389 1.79169 10.875 2.04169C11.125 2.2778 11.25 2.56946 11.25 2.91669V3.50002C12.3612 3.7778 13.2639 4.36808 13.9584 5.27085C14.6528 6.15974 15 7.18058 15 8.33335V14.1667H16.6667V15.8334H3.33337ZM10 18.3334C9.54171 18.3334 9.14587 18.1736 8.81254 17.8542C8.4931 17.5209 8.33337 17.125 8.33337 16.6667H11.6667C11.6667 17.125 11.5 17.5209 11.1667 17.8542C10.8473 18.1736 10.4584 18.3334 10 18.3334ZM6.66671 14.1667H13.3334V8.33335C13.3334 7.41669 13.007 6.63196 12.3542 5.97919C11.7014 5.32641 10.9167 5.00002 10 5.00002C9.08337 5.00002 8.29865 5.32641 7.64587 5.97919C6.9931 6.63196 6.66671 7.41669 6.66671 8.33335V14.1667Z"
      fill={color}
    />
  </svg>
)

const ChevronLeftIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"/>
  </svg>
)

const ChevronRightIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
)

const HamburgerIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="7" x2="20" y2="7"/>
    <line x1="4" y1="12" x2="20" y2="12"/>
    <line x1="4" y1="17" x2="20" y2="17"/>
  </svg>
)

const MoreVertIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="5" r="1.8"/>
    <circle cx="12" cy="12" r="1.8"/>
    <circle cx="12" cy="19" r="1.8"/>
  </svg>
)

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
)

// ─────────────────────────────────────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

/** Bell button with notification badge */
function BellButton({
  count,
  dotOnly = false,
  onClick,
}: {
  count?:   number
  dotOnly?: boolean
  onClick?: () => void
}) {
  const theme = useTheme()
  const p     = theme.palette as any
  const iconColor  = p.onSurfaceVariant ?? theme.palette.text.secondary   // #434657
  const errorColor = theme.palette.error.main                              // #BA1A1A
  const bgSurface  = p.surfaceContainerLowest ?? '#FFFFFF'

  return (
    <Box
      component="button"
      onClick={onClick}
      aria-label={`Notifications${count ? ` (${count})` : ''}`}
      sx={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: 36, height: 36,
        borderRadius: '10px',
        border: 'none', background: 'transparent',
        cursor: 'pointer', position: 'relative', flexShrink: 0,
        color: iconColor,
        transition: 'background-color 150ms ease',
        '&:hover':  { backgroundColor: 'rgba(222,224,255,0.10)' },
        '&:active': { backgroundColor: 'rgba(222,224,255,0.18)' },
      }}
    >
      <BellIcon color={iconColor} />
      {count && count > 0 ? (
        dotOnly ? (
          <Box sx={{
            position: 'absolute', top: 4, right: 4,
            width: 7, height: 7,
            borderRadius: '50%',
            backgroundColor: errorColor,
            border: `1.5px solid ${bgSurface}`,
          }} />
        ) : (
          <Box sx={{
            position: 'absolute', top: 2, right: 2,
            minWidth: 16, height: 16,
            borderRadius: '100px',
            backgroundColor: errorColor,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            px: '3px',
          }}>
            <Typography sx={{ fontSize: 10, fontWeight: 600, color: '#FFFFFF', lineHeight: 1 }}>
              {count > 9 ? '9+' : count}
            </Typography>
          </Box>
        )
      ) : null}
    </Box>
  )
}

/** Collapse / Expand button — tertiaryContainer background */
function CollapseButton({
  isCollapsed,
  onClick,
}: {
  isCollapsed: boolean
  onClick:     () => void
}) {
  const theme = useTheme()
  const p     = theme.palette as any
  const btnBg   = p.tertiaryContainer ?? '#FCD7FF'     // #FCD7FF
  const btnIcon = p.onTertiaryContainer ?? '#780097'   // #780097

  return (
    <Box
      component="button"
      onClick={onClick}
      aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      sx={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: 28, height: 28,
        borderRadius: '8px',
        border: 'none',
        backgroundColor: btnBg,
        color: btnIcon,
        cursor: 'pointer', flexShrink: 0,
        transition: 'opacity 150ms ease, background-color 150ms ease',
        '&:hover':  { opacity: 0.85 },
        '&:active': { opacity: 0.70 },
      }}
    >
      {isCollapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
    </Box>
  )
}

/** Nav item in Expanded state — icon + label + optional dot */
function NavItemExpanded({
  item,
  isActive,
  onClick,
}: {
  item:     NavItem
  isActive: boolean
  onClick:  () => void
}) {
  const theme = useTheme()
  const p     = theme.palette as any

  // Confirmed colors
  const activeBg     = p.surfaceContainerLow     ?? '#F4F2FF'  // #F4F2FF
  const activeColor  = p.onSurface               ?? '#191B25'  // #191B25
  const defaultColor = p.onSurfaceVariant        ?? '#434657'  // #434657
  const dotColor     = theme.palette.primary.main              // #0743FF
  const hoverBg      = 'rgba(222,224,255,0.10)'

  const isDisabled = item.disabled ?? false
  const itemColor  = isActive ? activeColor : defaultColor

  return (
    <Box
      component="button"
      onClick={isDisabled ? undefined : onClick}
      aria-current={isActive ? 'page' : undefined}
      aria-disabled={isDisabled || undefined}
      title={isDisabled ? `${item.label} (unavailable)` : undefined}
      sx={{
        display: 'flex', alignItems: 'center',
        gap: '10px',
        width: '100%',
        padding: '10px 12px',
        backgroundColor: isActive ? activeBg : 'transparent',
        border: 'none',
        borderRadius: '10px',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        opacity: isDisabled ? 0.38 : 1,
        pointerEvents: isDisabled ? 'none' : 'auto',
        transition: 'background-color 150ms ease',
        textAlign: 'left',
        '&:hover': !isActive ? { backgroundColor: hoverBg } : {},
        '&:active': { opacity: isDisabled ? 0.38 : 0.85 },
      }}
    >
      {/* Icon — transparent box, colored icon */}
      <Box sx={{
        width: 20, height: 20, flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: itemColor,
        '& svg, & .MuiSvgIcon-root': { width: 20, height: 20, fontSize: 20 },
      }}>
        {item.icon}
      </Box>

      {/* Label */}
      <Typography sx={{
        flex: 1,
        fontSize: 13, fontWeight: isActive ? 600 : 500,
        lineHeight: '20px', letterSpacing: '0.1px',
        color: itemColor,
        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
      }}>
        {item.label}
      </Typography>

      {/* Active dot */}
      {isActive && (
        <Box sx={{
          width: 6, height: 6,
          borderRadius: '50%',
          backgroundColor: dotColor,
          flexShrink: 0,
        }} />
      )}
    </Box>
  )
}

/** Nav item in Collapsed state — icon only, centered */
function NavItemCollapsed({
  item,
  isActive,
  onClick,
}: {
  item:     NavItem
  isActive: boolean
  onClick:  () => void
}) {
  const theme = useTheme()
  const p     = theme.palette as any

  const activeBg     = p.surfaceContainerLow ?? '#F4F2FF'
  const activeColor  = p.onSurface           ?? '#191B25'
  const defaultColor = p.onSurfaceVariant    ?? '#434657'
  const hoverBg      = 'rgba(222,224,255,0.10)'

  const isDisabled = item.disabled ?? false
  const itemColor  = isActive ? activeColor : defaultColor

  return (
    <Tooltip title={item.label} placement="right" arrow>
      <Box
        component="button"
        onClick={isDisabled ? undefined : onClick}
        aria-current={isActive ? 'page' : undefined}
        aria-disabled={isDisabled || undefined}
        sx={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: 48, height: 48,
          borderRadius: '12px',
          border: 'none',
          backgroundColor: isActive ? activeBg : 'transparent',
          cursor: isDisabled ? 'not-allowed' : 'pointer',
          opacity: isDisabled ? 0.38 : 1,
          pointerEvents: isDisabled ? 'none' : 'auto',
          transition: 'background-color 150ms ease',
          alignSelf: 'center',
          color: itemColor,
          '& svg, & .MuiSvgIcon-root': { width: 20, height: 20, fontSize: 20 },
          '&:hover': !isActive ? { backgroundColor: hoverBg } : {},
          '&:active': { opacity: isDisabled ? 0.38 : 0.85 },
        }}
      >
        {item.icon}
      </Box>
    </Tooltip>
  )
}

/** User avatar with optional photo and initials fallback */
function UserAvatar({
  user,
  size = 40,
}: {
  user: NavUser
  size?: number
}) {
  const theme = useTheme()
  const p     = theme.palette as any
  const borderColor = p.outlineVariant ?? '#C4C5DA'   // #C4C5DA
  const fallbackBg  = p.primaryContainer ?? '#DEE0FF'
  const fallbackFg  = p.onPrimaryContainer ?? '#0031C6'

  const initials = user.initials
    ?? (user.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase())

  return (
    <Box sx={{
      width: size, height: size,
      borderRadius: '50%',
      border: `1px solid ${borderColor}`,
      overflow: 'hidden',
      flexShrink: 0,
      backgroundColor: fallbackBg,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      {user.avatarSrc ? (
        <Box
          component="img"
          src={user.avatarSrc}
          alt={user.name}
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <Typography sx={{
          fontSize: size * 0.3, fontWeight: 600,
          color: fallbackFg, lineHeight: 1,
          userSelect: 'none',
        }}>
          {initials}
        </Typography>
      )}
    </Box>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// SIDEBAR PANEL (shared between desktop and drawer)
// ─────────────────────────────────────────────────────────────────────────────

function SidebarPanel({
  items,
  activeId,
  moduleName,
  logo,
  logoSymbolic,
  user,
  notificationCount,
  isCollapsed,
  isMobile,
  onNavigate,
  onNotificationClick,
  onUserMenuClick,
  onCollapse,
  onClose,
}: {
  items:                NavItem[]
  activeId?:            string
  moduleName?:          string
  logo?:                React.ReactNode
  logoSymbolic?:        React.ReactNode
  user?:                NavUser
  notificationCount?:   number
  isCollapsed:          boolean
  isMobile:             boolean
  onNavigate?:          (id: string) => void
  onNotificationClick?: () => void
  onUserMenuClick?:     () => void
  onCollapse?:          () => void
  onClose?:             () => void
}) {
  const theme = useTheme()
  const p     = theme.palette as any

  // Sidebar palette
  const sidebarBg      = p.surfaceContainerLowest ?? '#FFFFFF'
  const borderColor    = p.surfaceVariant         ?? '#E0E1F6'
  const moduleColor    = p.outline                ?? '#747689'
  const onSurfaceColor = p.onSurface              ?? '#191B25'
  const onSVColor      = p.onSurfaceVariant       ?? '#434657'
  const dividerColor   = p.surfaceVariant          ?? '#E0E1F6'  // lighter than outlineVariant

  const width = isMobile
    ? MOBILE_DRAWER_WIDTH
    : isCollapsed
      ? SIDEBAR_COLLAPSED_WIDTH
      : SIDEBAR_EXPANDED_WIDTH

  return (
    <Box sx={{
      width,
      height: '100%',
      backgroundColor: sidebarBg,
      borderRight: `1px solid ${borderColor}`,
      display: 'flex', flexDirection: 'column',
      overflow: 'hidden',
      transition: 'width 250ms cubic-bezier(0.2, 0, 0, 1)',
    }}>

      {/* ── HEADER — Logo + Bell (40px bottom padding = gap to menu group) ── */}
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: isCollapsed && !isMobile ? 'center' : 'space-between',
        padding: isCollapsed && !isMobile ? '16px 12px 40px' : '14px 16px 40px',
        minHeight: 56,
        flexShrink: 0,
      }}>
        {/* Logo */}
        <Box sx={{
          display: 'flex', alignItems: 'center',
          overflow: 'hidden', flexShrink: 0,
          maxWidth: isCollapsed && !isMobile ? 40 : 'none',
        }}>
          {isCollapsed && !isMobile ? (
            // Collapsed: J symbolic
            logoSymbolic ? (
              <Box sx={{ width: 36, height: 36, flexShrink: 0 }}>{logoSymbolic}</Box>
            ) : (
              // Fallback J box
              <Box sx={{
                width: 36, height: 36, borderRadius: '10px',
                backgroundColor: theme.palette.primary.main,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontWeight: 700, fontSize: 18,
                fontFamily: '"TikTok Sans", "Noto Sans Thai", sans-serif',
              }}>J</Box>
            )
          ) : (
            // Expanded: full wordmark
            logo ? (
              <Box sx={{ height: 24, display: 'flex', alignItems: 'center' }}>{logo}</Box>
            ) : (
              <Typography sx={{
                fontSize: 20, fontWeight: 700,
                fontFamily: '"TikTok Sans", "Noto Sans Thai", sans-serif',
                color: theme.palette.primary.main,
                letterSpacing: '-0.5px',
              }}>JAGOTA</Typography>
            )
          )}
        </Box>

        {/* Right side: Bell (+ close on mobile) */}
        {(!isCollapsed || isMobile) && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <BellButton
              count={notificationCount}
              dotOnly={false}
              onClick={onNotificationClick}
            />
            {isMobile && onClose && (
              <Box
                component="button"
                onClick={onClose}
                sx={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: 36, height: 36,
                  borderRadius: '10px', border: 'none',
                  background: 'transparent', cursor: 'pointer',
                  color: onSVColor,
                  '&:hover': { backgroundColor: 'rgba(222,224,255,0.10)' },
                }}
              >
                <CloseIcon />
              </Box>
            )}
          </Box>
        )}

        {/* Collapsed desktop: Bell only, centered separately below */}
        {isCollapsed && !isMobile && (
          <BellButton count={notificationCount} onClick={onNotificationClick} />
        )}
      </Box>

      {/* ── MODULE NAME ROW + COLLAPSE BUTTON ───────────────────────────── */}
      <Box sx={{
        display: 'flex', alignItems: 'center',
        justifyContent: isCollapsed && !isMobile ? 'center' : 'space-between',
        padding: isCollapsed && !isMobile ? '4px 12px 8px' : '2px 16px 10px',
        flexShrink: 0,
        minHeight: 36,
      }}>
        {/* Module name — only in expanded or mobile */}
        {(!isCollapsed || isMobile) && moduleName && (
          <Typography sx={{
            fontSize: 11, fontWeight: 500,
            lineHeight: '16px', letterSpacing: '0.5px',
            textTransform: 'uppercase',
            color: moduleColor,
            flex: 1, minWidth: 0,
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
          }}>
            {moduleName}
          </Typography>
        )}

        {/* Collapse button — hidden on mobile (mobile uses close X instead) */}
        {!isMobile && onCollapse && (
          <CollapseButton isCollapsed={isCollapsed} onClick={onCollapse} />
        )}
      </Box>

      {/* ── NAV ITEMS ────────────────────────────────────────────────────── */}
      <Box
        component="nav"
        sx={{
          flex: 1,
          display: 'flex', flexDirection: 'column',
          padding: isCollapsed && !isMobile ? '4px 12px' : '4px 8px',
          gap: '2px',
          overflowY: 'auto',
          overflowX: 'hidden',
        }}
      >
        {items.map((item) => {
          const isActive = item.id === activeId
          const handleClick = () => onNavigate?.(item.id)

          return isCollapsed && !isMobile ? (
            <NavItemCollapsed
              key={item.id}
              item={item}
              isActive={isActive}
              onClick={handleClick}
            />
          ) : (
            <NavItemExpanded
              key={item.id}
              item={item}
              isActive={isActive}
              onClick={handleClick}
            />
          )
        })}
      </Box>

      {/* ── DIVIDER — full width, no horizontal margin ───────────────────── */}
      <Box sx={{ height: '1px', backgroundColor: dividerColor, flexShrink: 0 }} />

      {/* ── USER SECTION ─────────────────────────────────────────────────── */}
      {user && (
        <Box sx={{
          display: 'flex', alignItems: 'center',
          justifyContent: isCollapsed && !isMobile ? 'center' : 'flex-start',
          gap: '10px',
          padding: isCollapsed && !isMobile ? '12px' : '12px 16px',
          flexShrink: 0,
          minHeight: 64,
        }}>
          {/* Avatar */}
          <UserAvatar user={user} size={40} />

          {/* Name + Role — only in expanded or mobile */}
          {(!isCollapsed || isMobile) && (
            <>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography sx={{
                  fontSize: 13, fontWeight: 600,
                  lineHeight: '18px', letterSpacing: '0.1px',
                  color: onSurfaceColor,
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                }}>
                  {user.name}
                </Typography>
                <Typography sx={{
                  fontSize: 11, fontWeight: 500,
                  lineHeight: '16px', letterSpacing: '0.5px',
                  color: moduleColor,
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                }}>
                  {user.role}
                </Typography>
              </Box>

              {/* More menu button */}
              <Box
                component="button"
                onClick={onUserMenuClick}
                aria-label="User menu"
                sx={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: 32, height: 32,
                  borderRadius: '8px', border: 'none',
                  background: 'transparent', cursor: 'pointer', flexShrink: 0,
                  color: p.onSurfaceVariant ?? '#434657',
                  '&:hover': { backgroundColor: 'rgba(222,224,255,0.10)' },
                }}
              >
                <MoreVertIcon />
              </Box>
            </>
          )}
        </Box>
      )}
    </Box>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export function JagotaNavigationBar({
  items,
  activeId,
  moduleName,
  logo,
  logoSymbolic,
  user,
  notificationCount,
  onNavigate,
  onNotificationClick,
  onUserMenuClick,
  collapsed: collapsedProp,
  onCollapsedChange,
}: JagotaNavigationBarProps) {
  const theme = useTheme()
  const p     = theme.palette as any

  // Responsive
  const isMobile  = useMediaQuery('(max-width:767px)')
  const isTablet  = useMediaQuery('(min-width:768px) and (max-width:1279px)')
  const isDesktop = useMediaQuery('(min-width:1280px)')

  // Collapse state — tablet auto-collapses, desktop user-controlled
  const [internalCollapsed, setInternalCollapsed] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const isCollapsed = isMobile
    ? false  // mobile uses drawer, not collapsed sidebar
    : isTablet
      ? true  // tablet always collapsed
      : (collapsedProp !== undefined ? collapsedProp : internalCollapsed)

  const handleCollapse = useCallback(() => {
    const next = !internalCollapsed
    setInternalCollapsed(next)
    onCollapsedChange?.(next)
  }, [internalCollapsed, onCollapsedChange])

  const surfaceBg  = p.surface ?? '#FBF8FF'
  const borderClr  = p.outlineVariant ?? '#C4C5DA'
  const onSVColor  = p.onSurfaceVariant ?? '#434657'

  // ── MOBILE LAYOUT ──────────────────────────────────────────────────────────
  if (isMobile) {
    return (
      <>
        {/* Top App Bar */}
        <Box sx={{
          position: 'fixed', top: 0, left: 0, right: 0,
          height: MOBILE_TOPBAR_HEIGHT,
          backgroundColor: p.surfaceContainerLowest ?? '#FFFFFF',
          borderBottom: `1px solid ${p.surfaceVariant ?? '#E0E1F6'}`,
          display: 'flex', alignItems: 'center',
          padding: '0 8px 0 4px',
          zIndex: 1200,
          gap: 0,
        }}>
          {/* Hamburger — outlined square style (matches Figma design) */}
          <Box
            component="button"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open navigation"
            sx={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: 40, height: 40, borderRadius: '12px',
              border: `1.5px solid ${p.outlineVariant ?? '#C4C5DA'}`,
              background: 'transparent', cursor: 'pointer', flexShrink: 0,
              color: onSVColor,
              '&:hover': { backgroundColor: 'rgba(222,224,255,0.10)' },
            }}
          >
            <HamburgerIcon />
          </Box>

          {/* Logo — 12px fixed gap from hamburger, left-aligned (NOT flex:1) */}
          <Box sx={{ display: 'flex', alignItems: 'center', ml: '12px' }}>
            {logo ? (
              <Box sx={{ height: 20, display: 'flex', alignItems: 'center' }}>{logo}</Box>
            ) : (
              <Typography sx={{
                fontSize: 17, fontWeight: 700,
                fontFamily: '"TikTok Sans", "Noto Sans Thai", sans-serif',
                color: theme.palette.primary.main,
              }}>JAGOTA</Typography>
            )}
          </Box>

          {/* Spacer — pushes bell to far right */}
          <Box sx={{ flex: 1 }} />

          {/* Bell */}
          <BellButton
            count={notificationCount}
            dotOnly
            onClick={onNotificationClick}
          />
        </Box>

        {/* Drawer Overlay */}
        {drawerOpen && (
          <>
            {/* Scrim */}
            <Box
              onClick={() => setDrawerOpen(false)}
              sx={{
                position: 'fixed', inset: 0,
                backgroundColor: 'rgba(0,0,0,0.32)',
                zIndex: 1299,
              }}
            />
            {/* Drawer panel */}
            <Box sx={{
              position: 'fixed', top: 0, left: 0, bottom: 0,
              width: MOBILE_DRAWER_WIDTH,
              zIndex: 1300,
            }}>
              <SidebarPanel
                items={items}
                activeId={activeId}
                moduleName={moduleName}
                logo={logo}
                logoSymbolic={logoSymbolic}
                user={user}
                notificationCount={notificationCount}
                isCollapsed={false}
                isMobile={true}
                onNavigate={(id) => { onNavigate?.(id); setDrawerOpen(false) }}
                onNotificationClick={onNotificationClick}
                onUserMenuClick={onUserMenuClick}
                onClose={() => setDrawerOpen(false)}
              />
            </Box>
          </>
        )}
      </>
    )
  }

  // ── DESKTOP / TABLET SIDEBAR ───────────────────────────────────────────────
  return (
    <Box sx={{
      position: 'fixed', top: 0, left: 0, bottom: 0,
      width: isCollapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_EXPANDED_WIDTH,
      transition: 'width 250ms cubic-bezier(0.2, 0, 0, 1)',
      zIndex: 1200,
    }}>
      <SidebarPanel
        items={items}
        activeId={activeId}
        moduleName={moduleName}
        logo={logo}
        logoSymbolic={logoSymbolic}
        user={user}
        notificationCount={notificationCount}
        isCollapsed={isCollapsed}
        isMobile={false}
        onNavigate={onNavigate}
        onNotificationClick={onNotificationClick}
        onUserMenuClick={onUserMenuClick}
        onCollapse={isDesktop ? handleCollapse : undefined}
      />
    </Box>
  )
}

export default JagotaNavigationBar

// ─────────────────────────────────────────────────────────────────────────────
// JagotaAppLayout — page shell wrapper
// ─────────────────────────────────────────────────────────────────────────────

export interface JagotaAppLayoutProps {
  /** Navigation bar — use <JagotaNavigationBar /> */
  nav?: React.ReactNode
  /** Page content */
  children: React.ReactNode
  /** Override sidebar collapsed state */
  sidebarCollapsed?: boolean
}

/**
 * Standard Application Shell — sidebar nav + content area
 *
 * Layout rules:
 *   - Background = Surface (#FBF8FF)
 *   - Cards inside use surfaceContainerLowest (#FFFFFF)
 *   - No shadows anywhere
 *   - All UI text in English by default
 *
 * @example
 * <JagotaAppLayout nav={<JagotaNavigationBar ... />}>
 *   <PageContent />
 * </JagotaAppLayout>
 */
export function JagotaAppLayout({
  nav,
  children,
  sidebarCollapsed = false,
}: JagotaAppLayoutProps) {
  const theme = useTheme()
  const p     = theme.palette as any

  const isMobile  = useMediaQuery('(max-width:767px)')
  const isTablet  = useMediaQuery('(min-width:768px) and (max-width:1279px)')

  const isCollapsed  = isMobile ? true : (isTablet ? true : sidebarCollapsed)
  const sidebarWidth = isMobile
    ? 0
    : isCollapsed
      ? SIDEBAR_COLLAPSED_WIDTH
      : SIDEBAR_EXPANDED_WIDTH

  return (
    <Box sx={{
      display: 'flex', flexDirection: 'row',
      minHeight: '100vh',
      // ✅ Root background = Surface
      backgroundColor: p.surface ?? '#FBF8FF',
      color: p.onSurface ?? '#191B25',
    }}>
      {nav}
      <Box
        component="main"
        sx={{
          flex: 1, minWidth: 0,
          marginLeft: isMobile ? 0 : `${sidebarWidth}px`,
          marginTop: isMobile ? `${MOBILE_TOPBAR_HEIGHT}px` : 0,
          transition: 'margin-left 250ms cubic-bezier(0.2, 0, 0, 1)',
          padding: isMobile ? '16px' : '24px',
          overflowX: 'hidden',
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
