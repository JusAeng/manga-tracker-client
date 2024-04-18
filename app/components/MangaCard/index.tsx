"use client";

import ImageUtil from "../ImageUtil";
import { useRouter } from "next/navigation";
import { StaticImageData } from "next/image";
import noimage from "@/app/assets/pictures/noimage.jpg";

interface IMangaCard {
  id: string;
  image: string | StaticImageData;
  name: string;
  author: string;
  lastVol: number;
}

const MangaCardNew: React.FC<IMangaCard> = ({
  id,
  image,
  name,
  author,
  lastVol,
}) => {
  const router = useRouter();
  const handleClick = async () => {
    router.push(`/manga-detail/${id}`);
  };

  return (
    <div className="w-[150px]" onClick={handleClick}>
      <ImageUtil
        image={image || noimage}
        w={150}
        h={225}
        objectFit="cover"
        imageClass="rounded-[10px] cursor-pointer"
      />
      <h3 className="text-white text-center px-[3px] truncate">{name}</h3>
      <p className="relative bottom-[3px] text-white text-center text-[11px]">
        lastest vol: {lastVol}
      </p>
    </div>
  );
};

export default MangaCardNew;
