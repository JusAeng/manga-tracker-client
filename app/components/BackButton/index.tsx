"use client";

import { useRouter } from "next/navigation";
import { FaAngleLeft } from "react-icons/fa";

interface IBackButton {
  size: number;
  color: string;
  classAdd?: string;
}

const BackButton: React.FC<IBackButton> = ({ size, color, classAdd }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className={
        classAdd ? classAdd : "p-[2px] m-[5px] rounded-[50%] bg-[#444444]"
      }
    >
      <FaAngleLeft size={size} color={color} />
    </button>
  );
};

export default BackButton;
