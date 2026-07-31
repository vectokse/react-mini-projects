const colors = {
  primary: "#0E5C46",
  primaryHover: "#0A4835",
  primaryTint: "#E7F1EE",

  background: "#F3F4F6",
  surface: "#FFFFFF",

  border: "#E7E8EC",
  borderStrong: "#D6D8DD",

  textPrimary: "#14161A",
  textSecondary: "#6B7280",
  textMuted: "#9CA3AF",

  badgeBg: "#EFF0F3",
  badgeText: "#667085",

  danger: "#D92D20",
};

const font = {
  family: {
    sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    mono: "'SF Mono', Menlo, monospace",
  },
  size: {
    xs: "11px",
    sm: "13px",
    base: "15px",
    md: "18px",
    lg: "24px",
    xl: "28px",
  },
  weight: {
    regular: 500,
    bold: 700,
    heavy: 800,
  },
};

const radius = {
  sm: "6px",
  md: "12px",
  lg: "16px",
  xl: "20px",
  full: "999px",
};

const shadow = {
  xs: "0 1px 2px rgba(16, 24, 40, 0.04)",
  sm: "0 1px 3px rgba(16, 24, 40, 0.06), 0 1px 2px rgba(16, 24, 40, 0.04)",
  md: "0 4px 12px rgba(16, 24, 40, 0.08)",
};

export const theme = { colors, font, radius, shadow };
