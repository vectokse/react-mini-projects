export const colors = {
  surface: "#FFFFFF",
  background: "#F7F8F9",
  surfaceHover: "#edeff1",
  border: "#E7E8EC",

  textPrimary: "#14161A",
  textSecondary: "#5c5b58",
  textLight: "#e5e7eb",

  accent: "#d97706",
  accentTint: "#ffedd5",

  black: "#000000",
  

  success: "#10b981",
  error: "#ef4444",
  warning: "#f59e0b",
};

export const font = {
  family: {
    primary: "'Poppins', sans-serif",
    heading: "'Playfair Display', serif",
  },
  size: {
    xs: "13px",
    sm: "14px",
    base: "15px",
    md: "20px",
    lg: "25px",
    xl: "32px",
    xxl: "48px",
    
  },
  weight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
};

export const radius = {
  sm: "8px",
  md: "12px",
  lg: "24px", 
  full: "9999px",
};

export const shadow = {
  sm: "0 1px 3px rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", 
  lg: "0 25px 50px -12px rgba(0, 0, 0, 0.25)", 
};

const sizes = {
  mobile: "600px",
  tablet: "768px",
  desktop: "1024px",
  shortScreen: "450px",
};

const device = {
  mobile: `@media (max-width: ${sizes.mobile})`,
  tablet: `@media (max-width: ${sizes.tablet})`,
  desktop: `@media (max-width: ${sizes.desktop})`,
  isNotShort: `@media (min-height: ${sizes.shortScreen})`,
};

export const theme = { colors, font, radius, shadow, sizes, device };

export default theme;