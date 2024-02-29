import ImageUtil from "../components/ImageUtil";

interface IProp {
  id: string;
  image: string;
  name: string;
}

const MangaCardMini: React.FC<IProp> = ({ id, image, name }) => {
  return (
    <main className="w-[100px]">
      <ImageUtil image={image} w={100} h={150} imageClass="rounded-[5px]" />
      <p className="truncate text-white text-[12px] text-center mt-[4px] px-[2px]">
        {name}
      </p>
    </main>
  );
};

export default MangaCardMini;
