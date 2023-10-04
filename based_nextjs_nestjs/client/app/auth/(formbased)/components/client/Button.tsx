"use client";
import React from "react";

interface Props {
  text: string;
  backgroundColorTailwind: string;
  textColorTailwind?: string;
  type?: HTMLButtonElement["type"];
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  text,
  backgroundColorTailwind,
  textColorTailwind,
  type,
  onClick,
}: Props) => {
  return (
    <button
      className={`
        ${backgroundColorTailwind} ${textColorTailwind || "text-white"}
        px-3 py-2 h-12 font-bold rounded-lg
        hover:opacity-80 transition-opacity
      `}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
