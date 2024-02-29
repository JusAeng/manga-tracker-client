"use client";

import ImageUtil from "../ImageUtil";
import { useRouter } from "next/navigation";
import { StaticImageData } from "next/image";

interface IMangaCard {
  image: string | StaticImageData;
  name: string;
  author: string;
  lastVol: number;
}

const MangaCardNew: React.FC<IMangaCard> = ({
  image,
  name,
  author,
  lastVol,
}) => {
  const router = useRouter();
  const handleClick = () => {
    let temp = name.replace(/\s+/g, "-");
    router.push(`/manga-detail/${temp}`);
  };

  return (
    <div className="w-[150px]" onClick={handleClick}>
      <ImageUtil
        image={image}
        w={150}
        h={225}
        objectFit="cover"
        imageClass="rounded-[10px] cursor-pointer"
      />
      <h3 className="text-white text-center px-[3px] truncate">{name}</h3>
      <p className="relative bottom-[3px] text-white text-center text-[12px]">
        lastest vol: {lastVol}
      </p>
    </div>
  );
};

export default MangaCardNew;
