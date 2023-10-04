"use client";
import { Icon } from "@/app/shared";
import { useRouter } from "next/navigation";

const ActionButton = () => {
  const router = useRouter();

  return (
    <button
      className="fixed bottom-4 right-4 w-10 h-10 bg-gray-200 rounded-full shadow-lg flex justify-center items-center"
      onClick={() => router.push("/")}
    >
      <Icon.Home width="24px" height="24px" />
    </button>
  );
};

export default ActionButton;
