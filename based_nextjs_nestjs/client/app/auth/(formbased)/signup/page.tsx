import Form from "./components/client/Form";
import GoogleSignupButton from "./components/client/OAuth/GoogleSignupButton";
import KakaoSignupButton from "./components/client/OAuth/KakaoSignupButton";
import NaverSignupButton from "./components/client/OAuth/NaverSignupButton";

const Page = () => {
  return (
    <>
      <Form />
      <GoogleSignupButton />
      <KakaoSignupButton />
      <NaverSignupButton />
    </>
  );
};

export default Page;
