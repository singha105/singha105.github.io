import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

export function ChevronRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 3.5 10.5 8 6 12.5" />
    </svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4.75 11.25 11.25 4.75M5.75 4.75h5.5v5.5" />
    </svg>
  );
}

export function ArrowDown(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8 3v10M3.75 8.75 8 13l4.25-4.25" />
    </svg>
  );
}

export function MenuToggleIcon({ open, ...props }: IconProps & { open: boolean }) {
  return (
    <svg {...base} {...props}>
      {open ? <path d="M4 4l8 8M12 4l-8 8" /> : <path d="M2.5 5.75h11M2.5 10.25h11" />}
    </svg>
  );
}
