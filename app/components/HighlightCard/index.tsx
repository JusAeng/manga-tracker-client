"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

interface IProp {
  image: string;
  genres: string[];
  name: string;
}

const HighlightCard: React.FC<IProp> = ({ image, genres, name }) => {
  const router = useRouter();

  const handleView = () => {
    let temp = name.replace(/\s+/g, "-");
    router.push(`/anime-detail/${temp}`);
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
      <div className="relative w-[350px] h-[400px] cursor-pointer">
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
          className="bg-[#ff00f0] h-[20px] w-[100px]"
          onClick={handleView}
        >
          View
        </button>
        <button className="bg-[#f0f0f0] h-[20px] w-[100px]" onClick={handleSub}>
          Subscribe
        </button>
      </div>
    </main>
  );
};

export default HighlightCard;
