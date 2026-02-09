/**
 * Application Colors
 * Brand colors derived from IDS SmartTech Logo
 * 
 * These values should match the CSS variables in globals.css
 * Use Tailwind classes (e.g., 'text-ids-blue', 'bg-primary') instead of these constants when possible
 */

export const BRAND_COLORS = {
  blue: 'hsl(197, 70%, 76%)',      // #9cd0ec - Primary brand color
  yellow: 'hsl(43, 98%, 66%)',     // #fed356 - Highlight/Accent
  orange: 'hsl(19, 84%, 56%)',     // #ee6d31 - Secondary accent
} as const;

export const THEME = {
  light: {
    background: 'hsl(0, 0%, 100%)',
    backgroundSecondary: 'hsl(210, 20%, 98%)',
    backgroundTertiary: 'hsl(210, 20%, 96%)',
    foreground: 'hsl(222, 47%, 11%)',
    foregroundSecondary: 'hsl(215, 16%, 47%)',
    card: 'hsl(0, 0%, 100%)',
    border: 'hsl(214, 32%, 91%)',
  },
  dark: {
    background: 'hsl(222, 47%, 11%)',
    backgroundSecondary: 'hsl(223, 47%, 8%)',
    backgroundTertiary: 'hsl(217, 33%, 17%)',
    foreground: 'hsl(0, 0%, 100%)',
    foregroundSecondary: 'hsl(215, 20%, 65%)',
    card: 'hsl(217, 33%, 17%)',
    border: 'hsl(217, 33%, 17%)',
  },
} as const;

// CSS Variable references for use in inline styles when needed
export const CSS_VARS = {
  primary: 'var(--primary)',
  accent: 'var(--accent)',
  highlight: 'var(--highlight)',
  background: 'var(--background)',
  foreground: 'var(--foreground)',
  card: 'var(--card)',
  border: 'var(--border)',
} as const;
