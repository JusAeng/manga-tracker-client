"use client";

import ImageUtil from "../components/ImageUtil";
import { useRouter } from "next/navigation";

interface IProp {
  id: string;
  image: string;
  name: string;
}

const MangaCardMini: React.FC<IProp> = ({ id, image, name }) => {
  const router = useRouter();
  const handleClick = async () => {
    router.push(`/manga-detail/${id}`);
  };

  return (
    <main className="w-[100px] cursor-pointer" onClick={handleClick}>
      <ImageUtil image={image} w={100} h={150} imageClass="rounded-[5px]" />
      <p className="truncate text-white text-[12px] text-center mt-[4px] px-[2px]">
        {name}
      </p>
    </main>
  );
};

export default MangaCardMini;
