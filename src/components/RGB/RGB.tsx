import React from "react";
import "./RGB.css";

interface RGBProps {
  color: string;
  className?: string;
  [x: string]: any; // For the rest parameters
}

export const RGB: React.FC<RGBProps> = ({ color, className = "", ...rest }) => {
  return (
    <span {...rest} className={["rgb", className].filter(Boolean).join(" ")}>
      <i className="rgb__icon" style={{ backgroundColor: color }} />
      {color}
    </span>
  );
};
