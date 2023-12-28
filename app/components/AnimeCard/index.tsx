import Image from "next/image";
import "./index.scss";

const AnimeCard = () => {
  return (
    <main className="flex bg-[#f0f6ff] w-[335px] h-[96px] rounded-xl">
      <section className="m-[10px]">
        <div className="anime-card-image"></div>
        {/* <Image
          src="https://static.wikia.nocookie.net/rehero/images/4/44/Megumin.jpg/revision/latest/scale-to-width-down/1200?cb=20180330001646"
          alt="Picture of the author"
          width={68}
          height={10}
          className="rounded-xl"
        /> */}
      </section>
      <section className="m-[10px]">
        <div>One Piece</div>
        <div>3,455,192</div>
        <div className="bg-[#fa9daa] rounded-lg px-[3px]">Chapter 17</div>
      </section>
    </main>
  );
};

export default AnimeCard;
