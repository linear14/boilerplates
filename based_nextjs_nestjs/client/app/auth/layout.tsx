import { PropsWithChildren } from "react";
import GNB from "./components/client/GNB";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <GNB />
      <div className="w-full px-4">{children}</div>
    </>
  );
};

export default AuthLayout;
