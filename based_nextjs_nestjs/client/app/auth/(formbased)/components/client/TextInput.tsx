"use client";
import { forwardRef } from "react";

interface Props {
  placeholder: string;
  type?: HTMLInputElement["type"];
}

const TextInput = forwardRef<HTMLInputElement, Props>(
  ({ placeholder, type }: Props, ref) => {
    return (
      <div className="w-full h-10 px-3 flex items-center border">
        <input
          className="w-full"
          type={type || "text"}
          placeholder={placeholder}
          ref={ref}
        />
      </div>
    );
  }
);
TextInput.displayName = "TextInput";

export default TextInput;
