"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { IoMdAdd } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { useState } from "react";
import { subscribe } from "diagnostics_channel";
import { IoCheckmarkOutline } from "react-icons/io5";
import UseProfile from "@/app/hooks/UseProfile";
import { useEffect } from "react";
import axiosInstance from "@/app/utils/axios";

interface IProp {
  id: string;
  image: string;
  genres: string[];
  name: string;
}

const HighlightCard: React.FC<IProp> = ({ id, image, genres, name }) => {
  const router = useRouter();
  const { profile, setProfile, token } = UseProfile();
  const [isSubscribe, setIsSubscribe] = useState(false);

  const handleView = () => {
    router.push(`/manga-detail/${id}`);
  };
  const handleSub = async () => {
    try {
      const res = await axiosInstance.put(`/user/subscribe/${id}`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const subList = res.data as string[];
      setIsSubscribe(!isSubscribe);
      setProfile((prevProfile) => ({
        ...prevProfile,
        subscribeList: subList,
      }));
    } catch (e) {
      alert(e);
      console.log(e);
    }
  };

  useEffect(() => {
    if (profile) {
      if (profile.subscribeList) {
        if (profile.subscribeList.includes(id)) {
          setIsSubscribe(true);
        }
      }
    }
  }, [id, profile]);

  return (
    <main className="flex flex-col items-center relative">
      {/* <div
        className="h-[400px] w-[350px] bg-[#5c7df7] flex gap-[20px] items-end justify-center relative"
        style={{
          // background: `url("${image}")`,
          background: `url("${image}")`,
          backgroundPosition: "cover",
        }}
        onClick={handleView}
      ></div> */}
      <div className="relative w-[340px] h-[510px] cursor-pointer">
        <Image
          src={image}
          alt=""
          fill
          sizes="100%"
          style={{
            objectFit: "cover",
          }}
          className="rounded-xl"
          onClick={handleView}
        />
      </div>
      <div className="absolute flex gap-[20px] justify-center bottom-[10px]">
        <button
          className="bg-[#ffffff] h-[40px] w-[150px] rounded-[8px] grid place-items-center"
          onClick={handleView}
        >
          <div className="flex gap-[9px] items-center">
            <FaPlay size={13} />
            <h3 className="text-[19px]">View</h3>
          </div>
        </button>
        <button
          className="bg-[#555555] h-[40px] w-[150px] rounded-[8px] grid place-items-center"
          onClick={handleSub}
        >
          {isSubscribe ? (
            <div className="flex gap-[6px] items-center" onClick={handleSub}>
              <IoCheckmarkOutline size={18} color={"#ffffff"} />
              <span className="text-[#ffffff]">Subscribed</span>
            </div>
          ) : (
            <div className="flex gap-[7px]" onClick={handleSub}>
              <IoMdAdd size={21} color={"#ffffff"} />
              <span className="text-[#ffffff]">Subscribe</span>
            </div>
          )}
        </button>
      </div>
    </main>
  );
};

export default HighlightCard;
