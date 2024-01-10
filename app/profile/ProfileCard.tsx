import Image from "next/image";
import tt from "@/app/temp/tt.json";

interface IProfileCard {
  subscribe: number;
  books: number;
}

const ProfileCard: React.FC<IProfileCard> = ({ subscribe, books }) => {
  return (
    <main className="h-[190px] w-[370px] rounded-[20px] grid grid-cols-2 p-[10px] bg-[#dddddd]">
      <section className="grid place-items-center">
        <div className="relative w-[80%] h-[90%] cursor-pointer">
          <Image
            src={tt[0].image}
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
      <section className="pt-[20px]">
        <h3 className="text-[20px]">zPlanC</h3>
        <div className="flex gap-[5px]">
          <p className="text-[#222222]">All Subscribe:</p>
          <p className="text-[#1885f2] fontw-semi">{subscribe}</p>
        </div>
        <div className="flex gap-[5px]">
          <p className="text-[#222222]">All Books:</p>
          <p className="text-[#1885f2] fontw-semi">{books}</p>
        </div>
      </section>
    </main>
  );
};

export default ProfileCard;
