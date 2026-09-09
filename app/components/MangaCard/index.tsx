"use client";

import { motion } from "framer-motion";
import ImageUtil from "../ImageUtil";
import { useRouter } from "next/navigation";
import { StaticImageData } from "next/image";
import noimage from "@/app/assets/pictures/noimage.jpg";

interface IMangaCard {
  id: string;
  image: string | StaticImageData;
  name: string;
}

const MangaCardNew: React.FC<IMangaCard> = ({ id, image, name }) => {
  const router = useRouter();
  const handleClick = async () => {
    router.push(`/manga-detail/${id}`);
  };

  return (
    <motion.div
      whileTap={{ scale: 0.96 }}
      className="w-[160px] cursor-pointer"
      onClick={handleClick}
    >
      <ImageUtil
        image={image || noimage}
        w={160}
        h={230}
        objectFit="cover"
        imageClass="rounded-2xl shadow-card"
      />
      <h3 className="text-ink text-[14px] mt-2 text-center truncate font-medium">
        {name}
      </h3>
    </motion.div>
  );
};

export default MangaCardNew;
