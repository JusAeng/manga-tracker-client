"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface Iprop {
  image: string;
  name: string;
  subscriber: number;
  score: number;
  rankType: string;
}

const RankCard: React.FC<Iprop> = ({
  image,
  name,
  subscriber,
  score,
  rankType,
}) => {
  const router = useRouter();
  const handleClick = () => {
    let temp = name.replace(/\s+/g, "-");
    router.push(`/manga-detail/${temp}`);
  };

  return (
    <main
      className="flex bg-[#3f3f3f] w-[170px] h-[60px] rounded-xl cursor-pointer"
      onClick={() => handleClick()}
    >
      <section className="m-[10px] grid place-items-center w-[25%]">
        <div className="relative w-[70px] h-[70px]">
          <Image
            src={image}
            alt="Picture of the author"
            fill
            sizes="100%"
            style={{
              objectFit: "cover",
            }}
            className="rounded-[50%]"
          />
        </div>
      </section>
      <section className="flex flex-col justify-evenly w-[60%] items-start">
        <div className="w-[90px] truncate">
          <h3 className={"text-[#ffffff] text-[11px] truncate"}>{name}</h3>
        </div>
        <span className="text-[11px] text-[#999999]">Latest vol: {6}</span>
      </section>
    </main>
  );
};

export default RankCard;
