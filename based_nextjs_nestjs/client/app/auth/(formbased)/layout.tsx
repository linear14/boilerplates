import { PropsWithChildren } from "react";

const FormBasedLayout = ({ children }: PropsWithChildren) => {
  return <div className="w-full flex justify-center pt-20">{children}</div>;
};

export default FormBasedLayout;
