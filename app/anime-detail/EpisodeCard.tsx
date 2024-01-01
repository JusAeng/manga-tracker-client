import Image from "next/image";

const EpisodeCard = () => {
  return (
    <div className="flex justify-between">
      <section className="flex">
        <div className="relative w-[44px] h-[44px]">
          <Image
            src={"/tt.png"}
            alt="Picture of the author"
            fill
            style={{
              objectFit: "cover",
            }}
            className="rounded-xl"
          />
        </div>
        <div>Chapter 1</div>
      </section>
      <section>
        <div className="w-[44px] h-[44px] rounded-[50%] bg-[#00ff00]"></div>
      </section>
    </div>
  );
};

export default EpisodeCard;
