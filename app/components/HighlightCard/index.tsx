"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { IoMdAdd } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import SubButton from "../SubButton";

interface IProp {
  image: string;
  genres: string[];
  name: string;
}

const HighlightCard: React.FC<IProp> = ({ image, genres, name }) => {
  const router = useRouter();

  const handleView = () => {
    let temp = name.replace(/\s+/g, "-");
    router.push(`/manga-detail/${temp}`);
  };
  const handleSub = () => {
    console.log("subscribe");
  };
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
          alt="Picture of the author"
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
          <div className="flex gap-[7px]">
            <IoMdAdd size={21} color={"#ffffff"} />
            <span className="text-[#ffffff]">Subscribe</span>
          </div>
        </button>
        {/* <SubButton /> */}
      </div>
    </main>
  );
};

export default HighlightCard;
