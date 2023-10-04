import { PropsWithChildren } from "react";

const FormBasedLayout = ({ children }: PropsWithChildren) => {
  return (
    <div
      className="
      w-[420px] flex flex-col justify-center gap-4 mt-20 mx-auto p-4
      border rounded-lg border-neutral-300 box-border
      "
    >
      {children}
    </div>
  );
};

export default FormBasedLayout;
