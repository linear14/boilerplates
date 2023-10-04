"use client";

interface Props {
  width?: string;
  height?: string;
  color?: string;
}

// icon:home | Material Design Icons https://materialdesignicons.com/ | Austin Andrews
const IconHome = ({ width, height, color }: Props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={color || "currentColor"}
      height={height || "1em"}
      width={width || "1em"}
    >
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z" />
    </svg>
  );
};

export default IconHome;
