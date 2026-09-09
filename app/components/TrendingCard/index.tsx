"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ImageUtil from "../ImageUtil";

interface IProp {
  id: string;
  image: string;
  name: string;
  w?: number;
  h?: number;
}

const TrendingCard: React.FC<IProp> = ({ id, image, name, w, h }) => {
  const router = useRouter();
  const handleView = () => {
    router.push(`/manga-detail/${id}`);
  };
  const tempW = w || 128;
  const tempH = h || 184;
  return (
    <motion.div
      whileTap={{ scale: 0.96 }}
      onClick={handleView}
      className="cursor-pointer shrink-0"
      style={{ width: tempW }}
    >
      <ImageUtil
        image={image}
        w={tempW}
        h={tempH}
        imageClass="rounded-2xl shadow-card"
      />
      <p className="text-ink text-[13px] mt-2 truncate font-medium">{name}</p>
    </motion.div>
  );
};

export default TrendingCard;
