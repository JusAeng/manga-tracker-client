import Image from "next/image";

interface IProp {
  image: string;
  name: string;
  author: string;
}

const TrendingCard: React.FC<IProp> = ({ image, name, author }) => {
  return (
    <div className="bg-[#ff0000]">
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
      <p>{name}</p>
      <p>{author}</p>
    </div>
  );
};

export default TrendingCard;
