export const colors = {
  surface: "#FFFFFF",
  background: "#F7F8F9",
  surfaceHover: "#edeff1",
  border: "#E7E8EC",

  textPrimary: "#14161A",
  textSecondary: "#5c5b58",

  accent: "#1c5397",
  accentTint: "#cde2fb",
};

export const font = {
  family: "'Inter', sans-serif",
  size: {
    sm: "13px",
    base: "15px",
    md: "20px",
    lg: "25px",
    xl: "32px",
  },
  weight: {
    regular: 400,
    medium: 600,
    semibold: 700,
  },
};

export const radius = {
  sm: "8px",
  md: "12px",
};

export const shadow = {
  sm: "0 1px 3px rgba(0, 0, 0, 0.06)",
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
