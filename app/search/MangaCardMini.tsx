"use client";

import { motion } from "framer-motion";
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
    <motion.div
      whileTap={{ scale: 0.94 }}
      className="w-full cursor-pointer"
      onClick={handleClick}
    >
      <ImageUtil image={image} w={110} h={158} imageClass="rounded-xl shadow-card" />
      <p className="truncate text-ink text-[12.5px] text-center mt-1.5 px-0.5 font-medium">
        {name}
      </p>
    </motion.div>
  );
};

export default MangaCardMini;
