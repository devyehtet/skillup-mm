import { useId } from "react";

interface BrandMarkProps {
  className?: string;
}

export default function BrandMark({ className }: BrandMarkProps) {
  const gradientId = useId();

  return (
    <svg
      aria-label="SkillUp MM logo"
      className={className}
      role="img"
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradientId} x1="24" x2="104" y1="18" y2="114" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2F278B" />
          <stop offset="58%" stopColor="#342D94" />
          <stop offset="100%" stopColor="#3D95A5" />
        </linearGradient>
      </defs>

      <circle cx="64" cy="64" r="60" fill={`url(#${gradientId})`} />
      <polygon fill="#49E6A8" points="28 38 54 55 54 73 28 90" />
      <rect fill="#49E6A8" height="44" width="14" x="54" y="46" />
      <polygon fill="#49E6A8" points="68 46 86 46 98 58 98 76 86 90 68 90" />
      <rect fill="#49E6A8" height="44" width="14" x="88" y="46" />
    </svg>
  );
}
