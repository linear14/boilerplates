"use client";
import Link from "next/link";

const GNB = () => {
  return (
    <div className="w-full h-14 box-border px-6 flex place-content-between items-center border-b">
      <Link href={"/auth"}>홈</Link>
      <div className="flex gap-4">
        <Link href={"/auth/signin"}>로그인</Link>
        <Link href={"/auth/signup"}>회원가입</Link>
      </div>
    </div>
  );
};

export default GNB;
