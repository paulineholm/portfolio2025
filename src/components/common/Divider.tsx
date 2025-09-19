import React from "react";

type DividerSize = "sm" | "md" | "lg";
type DividerColor = "midnight" | "thina" | "negev" | "freshLime";

interface DividerProps {
  size?: DividerSize;
  color?: DividerColor;
  className?: string;
}

const sizeClassMap: Record<DividerSize, string> = {
  sm: "h-[1px]",
  md: "h-[2px]",
  lg: "h-[3px]",
};

const colorStyles = (color: DividerColor): React.CSSProperties => ({
  backgroundColor: `var(--color-${color})`,
});

const Divider: React.FC<DividerProps> = ({
  size = "sm",
  color = "midnight",
  className = "",
}) => {
  return (
    <hr
      className={`${sizeClassMap[size]} ${className} mx-30 my-5 border-none`}
      style={colorStyles(color)}
      aria-label="Divider"
    />
  );
};

export default Divider;
