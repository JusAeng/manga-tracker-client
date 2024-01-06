"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface Iprop {
  image: string;
  name: string;
  author: string;
  lastEpisode: number;
}

const AnimeCard: React.FC<Iprop> = ({ image, name, author, lastEpisode }) => {
  const router = useRouter();
  const handleClick = () => {
    let temp = name.replace(/\s+/g, "-");
    router.push(`/anime-detail/${temp}`);
  };

  return (
    <main
      className="flex bg-[#ffffff] w-[335px] h-[96px] rounded-xl cursor-pointer shadow-card"
      onClick={() => handleClick()}
    >
      <section className="m-[10px] grid place-items-center w-[25%]">
        <div className="relative w-[68px] h-[68px]">
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
      </section>
      <section className="m-[10px] w-[60%]">
        <h3>{name}</h3>
        <p className="text-sm text-[#9e9e9e]">{author}</p>
        <span className="bg-[#fab6b1] rounded-lg px-[3px] text-[11px]">
          Chapter {lastEpisode}
        </span>
      </section>
    </main>
  );
};

export default AnimeCard;
