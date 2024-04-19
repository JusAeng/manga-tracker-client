"use client";

import Image from "next/image";
import { useState } from "react";
import { IoBook } from "react-icons/io5";
import axiosInstance from "../utils/axios";
import UseProfile from "../hooks/UseProfile";

interface Iprop {
  mangaId: string;
  image: string;
  vol: number;
  own: boolean;
}

const VolumnCard: React.FC<Iprop> = ({ mangaId, image, vol, own }) => {
  const { setProfile } = UseProfile();
  const [isBuy, setIsBuy] = useState(own);
  const handleClick = async () => {
    try {
      const res = await axiosInstance.put(`/user/ownerlist/${mangaId}/${vol}`);
      const myList = res.data;
      setIsBuy(!isBuy);
      setProfile((prevProfile) => ({
        ...prevProfile,
        ownerList: {
          ...prevProfile.ownerList,
          [mangaId]: [...myList],
        },
      }));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex justify-between h-[72px] items-center px-[20px] border-b-[1px] border-[#303030] pb-[10px]">
      <section className="flex items-center gap-[20px]">
        <div className="relative w-[40px] h-[60px]">
          <Image
            src={image}
            alt="Picture of the author"
            fill
            sizes="100%"
            style={{
              objectFit: "cover",
            }}
            className="rounded-[4px]"
          />
        </div>
        {/* <div className="relative w-[40px] h-[60px] bg-[#333333] rounded-[4px] grid place-items-center text-[#4c4c4c]">
          {vol > 9 ? vol : "0" + vol}
        </div> */}
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
