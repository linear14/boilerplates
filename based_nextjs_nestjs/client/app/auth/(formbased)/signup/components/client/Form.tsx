"use client";

import { useRef } from "react";
import Button from "../../../components/client/Button";
import TextInput from "../../../components/client/TextInput";
import Label from "../../../components/server/Label";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  return (
    <form className="w-[420px] border rounded-lg border-neutral-300 box-border flex flex-col p-4 gap-8">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label text="이름" />
          <TextInput ref={nameRef} placeholder="이름(실명)을 입력해주세요" />
        </div>
        <div className="flex flex-col gap-2">
          <Label text="이메일" />
          <TextInput
            ref={emailRef}
            type="email"
            placeholder="example@donghyun.com"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label text="비밀번호" />
          <TextInput
            ref={passwordRef}
            type="password"
            placeholder="영문+숫자 조합 8자리 이상 입력해주세요"
          />
        </div>
      </div>
      <Button
        text="회원가입"
        onClick={(e) => {
          e.preventDefault();
          console.log({
            name: nameRef.current?.value,
            email: emailRef.current?.value,
            password: passwordRef.current?.value,
          });
        }}
        type="submit"
        backgroundColorTailwind="bg-green-500"
        textColorTailwind="text-white"
      />
    </form>
  );
};

export default Form;