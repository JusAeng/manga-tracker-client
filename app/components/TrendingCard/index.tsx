"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface IProp {
  image: string;
  name: string;
  publisher: string;
}

const TrendingCard: React.FC<IProp> = ({ image, name, publisher }) => {
  const router = useRouter();
  const handleView = () => {
    let temp = name.replace(/\s+/g, "-");
    router.push(`/manga-detail/${temp}`);
  };
  return (
    <main onClick={handleView} className="cursor-pointer w-[100px]">
      <div className="relative w-[100px] h-[120px]">
        <Image
          src={image}
          alt="Picture of the author"
          fill
          sizes="100%"
          style={{
            objectFit: "cover",
          }}
          className="rounded-xl"
        />
      </div>
      <div className="flex items-center gap-[5px] mt-[2px]">
        <div className="w-[3px] bg-[#444444] h-[32px] rounded-[1px]"></div>
        <div>
          <p className="text-white truncate w-[100%] pr-[10px] text-[14px]">
            {"One piece"}
          </p>
          <p className="text-[#777777] text-[11px]">{publisher}</p>
        </div>
      </div>
    </main>
  );
};

export default TrendingCard;
