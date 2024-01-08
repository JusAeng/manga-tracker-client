import Image from "next/image";

interface IProp {
  image: string;
  name: string;
  author: string;
}

const TrendingCard: React.FC<IProp> = ({ image, name, author }) => {
  return (
    <div>
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
    </div>
  );
};

export default TrendingCard;
