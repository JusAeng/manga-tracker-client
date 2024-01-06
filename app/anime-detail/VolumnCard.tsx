"use client";
import Image from "next/image";
import { useState } from "react";

interface Iprop {
  animeName: string;
  vol: number;
}

const VolumnCard: React.FC<Iprop> = ({ animeName, vol }) => {
  const [isBuy, setIsBuy] = useState(false);
  const handleClick = () => {
    setIsBuy(!isBuy);
  };

  return (
    <div className="flex justify-between h-[54px] items-center px-[20px] border">
      <section className="flex items-center gap-[20px]">
        <div className="relative w-[44px] h-[44px] bg-[#e1e6fa]">
          {/* <Image
            src={"/tt.png"}
            alt="Picture of the author"
            fill
            sizes="100%"
            style={{
              objectFit: "cover",
            }}
            className="rounded-xl"
          /> */}
        </div>
        <div>Vol. {vol}</div>
      </section>
      <section>
        <div
          className={`w-[40px] h-[40px] rounded-[50%] cursor-pointer ${
            isBuy ? "bg-[#68de7c]" : "bg-[#f792b0] "
          }`}
          onClick={handleClick}
        ></div>
      </section>
    </div>
  );
};

export default VolumnCard;
