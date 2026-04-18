/**
 * BDNHOST Split-Color Brand Logo
 * CRITICAL: "BDN" is always #0B4EA2 (blue), "HOST" is always #F5A623 (orange)
 */

interface BrandLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeMap = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-4xl",
  xl: "text-5xl",
};

export function BrandLogo({ size = "md", className = "" }: BrandLogoProps) {
  return (
    <span className={`brand-name font-extrabold ${sizeMap[size]} ${className}`}>
      <span className="bdn" style={{ color: "#0B4EA2" }}>BDN</span>
      <span className="host" style={{ color: "#F5A623" }}>HOST</span>
    </span>
  );
}
