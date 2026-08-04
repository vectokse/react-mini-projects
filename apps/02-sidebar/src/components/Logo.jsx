export default function Logo({ size = 40, color = "#2563EB" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="0" width="160" height="160" rx="36" fill={color} />
      <rect
        x="34"
        y="34"
        width="92"
        height="30"
        rx="8"
        fill="#FFFFFF"
        opacity="0.95"
      />
      <rect
        x="34"
        y="72"
        width="92"
        height="30"
        rx="8"
        fill="#FFFFFF"
        opacity="0.7"
      />
      <rect
        x="34"
        y="110"
        width="60"
        height="16"
        rx="6"
        fill="#FFFFFF"
        opacity="0.45"
      />
    </svg>
  );
}
