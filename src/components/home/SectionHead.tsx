import React from "react";

type SectionHeadColor = "midnight" | "thina" | "negev" | "freshLime";

interface SectionHeadProps {
  text?: string;
  color?: SectionHeadColor;
}

const colorStyles = (color: SectionHeadColor): React.CSSProperties => ({
  color: `var(--color-${color})`,
});

const SectionHead: React.FC<SectionHeadProps> = ({
  text = "",
  color = "midnight",
}) => {
  return (
    <h2 className="text-center py-6" style={colorStyles(color)}>
      {text}
    </h2>
  );
};

export default SectionHead;
