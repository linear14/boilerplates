import Form from "./components/client/Form";
import GoogleLoginButton from "./components/client/OAuth/GoogleLoginButton";
import KakaoLoginButton from "./components/client/OAuth/KakaoLoginButton";
import NaverLoginButton from "./components/client/OAuth/NaverLoginButton";

const Page = () => {
  return (
    <>
      <Form />
      <GoogleLoginButton />
      <KakaoLoginButton />
      <NaverLoginButton />
    </>
  );
};

export default Page;
