"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import "./truncate.css";

interface Iprop {
  image: string;
  name: string;
  author: string;
  lastEpisode: number;
}

const MangaCard: React.FC<Iprop> = ({ image, name, author, lastEpisode }) => {
  const router = useRouter();
  const handleClick = () => {
    let temp = name.replace(/\s+/g, "-");
    router.push(`/manga-detail/${temp}`);
  };

  return (
    <main
      className="flex bg-[#3f3f3f] w-[340px] h-[96px] rounded-xl cursor-pointer"
      onClick={() => handleClick()}
    >
      <section className="m-[10px] grid place-items-center w-[25%]">
        <div className="relative w-[74px] h-[74px]">
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
      <section className="m-[10px] flex flex-col justify-evenly w-[60%] items-start">
        <div className="truncate-container">
          <h3
            className={
              "text-[#ffffff]" +
              (name.length > 32 ? " text-[15px]" : " text-[17px]")
            }
          >
            {name}
          </h3>
        </div>
        <span className="bg-[#68de7c] rounded-lg py-[1px] px-[6px] text-[11px] text-[#333333]">
          Latest vol: {lastEpisode}
        </span>
      </section>
    </main>
  );
};

export default MangaCard;
