import { useState, useEffect, ReactNode } from "react";

const REFERENCE_WIDTH = 1440;
const REFERENCE_HEIGHT = 7276;
const MAX_SCALE = 1.5;

export const ScaleWrapper = ({ children }: { children: ReactNode }) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const viewportWidth = window.innerWidth;
      const scaleW = viewportWidth / REFERENCE_WIDTH;
      const computed = scaleW;
      const clamped = Math.min(Math.max(computed, 0.5), MAX_SCALE);
      setScale(clamped);
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div
      style={{
        width: REFERENCE_WIDTH,
        height: REFERENCE_HEIGHT,
        transform: `scale(${scale})`,
        transformOrigin: "top left",
        position: "relative",
      }}
    >
      {children}
    </div>
  );
};
