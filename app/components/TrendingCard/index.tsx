"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface IProp {
  image: string;
  name: string;
  author: string;
}

const TrendingCard: React.FC<IProp> = ({ image, name, author }) => {
  const router = useRouter();
  const handleView = () => {
    let temp = name.replace(/\s+/g, "-");
    router.push(`/manga-detail/${temp}`);
  };
  return (
    <main onClick={handleView}>
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
      <p>{name}</p>
      <p>{author}</p>
    </main>
  );
};

export default TrendingCard;
