import { useState, useEffect, ReactNode } from "react";

const REFERENCE_WIDTH = 1440;
const REFERENCE_HEIGHT = 7276;

export const ScaleWrapper = ({
  children,
  width = REFERENCE_WIDTH,
  height = REFERENCE_HEIGHT,
  anchor = "top",              // "top" | "bottom"
  fillViewportHeight = false,  // true = container ngoài luôn = 100vh
}: {
  children: ReactNode;
  width?: number;
  height?: number;
  anchor?: "top" | "bottom";
  fillViewportHeight?: boolean;
}) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      setScale(window.innerWidth / width);
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [width]);

  const outerHeight = fillViewportHeight ? "100vh" : height * scale;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: outerHeight,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width,
          height,
          transform: `scale(${scale})`,
          transformOrigin: anchor === "bottom" ? "bottom left" : "top left",
          position: "absolute",
          left: 0,
          ...(anchor === "bottom" ? { bottom: 0 } : { top: 0 }),
        }}
      >
        {children}
      </div>
    </div>
  );
};