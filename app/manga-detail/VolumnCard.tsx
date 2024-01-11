"use client";
import Image from "next/image";
import { useState } from "react";
import { IoBook } from "react-icons/io5";

interface Iprop {
  mangaName: string;
  vol: number;
}

const VolumnCard: React.FC<Iprop> = ({ mangaName, vol }) => {
  const [isBuy, setIsBuy] = useState(false);
  const handleClick = () => {
    setIsBuy(!isBuy);
  };

  return (
    <div className="flex justify-between h-[60px] items-center px-[20px] border-b-[1px] border-[#303030] pb-[5px]">
      <section className="flex items-center gap-[20px]">
        {/* <div className="relative w-[44px] h-[54px]">
          <Image
            src={"/tt.png"}
            alt="Picture of the author"
            fill
            sizes="100%"
            style={{
              objectFit: "cover",
            }}
            className="rounded-[4px]"
          />
        </div> */}
        <div className="relative w-[44px] h-[54px] bg-[#333333] rounded-[4px] grid place-items-center text-[#4c4c4c]">
          {vol > 9 ? vol : "0" + vol}
        </div>
        <div className="text-[#dddddd]">Vol. {vol}</div>
      </section>
      <section>
        <div
          className={`w-[40px] h-[40px] grid place-items-center rounded-[50%] cursor-pointer ${
            isBuy ? "bg-[#68de7c]" : "bg-[#555555] "
          }`}
          onClick={handleClick}
        >
          <IoBook color={isBuy ? "#333333" : "777777"} />
        </div>
      </section>
    </div>
  );
};

export default VolumnCard;
