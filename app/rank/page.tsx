import BackButton from "../components/BackButton";
import mangas from "@/app/temp/anime.json";
import RankCard from "./RankCard";

const RankPage = () => {
  return (
    <main className="min-h-screen bf-[#1e1e1f]">
      <div className="h-[45px] bg-[#2e2e2f] flex items-center gap-[20px] px-[10px]">
        <BackButton size={22} color={"#ffffff"} classAdd=" " />
        <h1 className="text-[#ffffff]">Ranking</h1>
      </div>
      <div>
        <section className="text-[#ffffff]">Monthly Hot</section>
        <div className="flex justify-center gap-[1px]">
          {/* <section className="text-[#ffffff] bg-[#333333] w-[190px]">
            <h3>Top Score</h3>
          </section> */}
          <section className="text-[#ffffff] bg-[#333333] w-[190px]">
            <h3>Top Subscribe</h3>
            <div className="flex flex-col gap-[10px] items-center">
              {mangas.map((m) => {
                return (
                  <RankCard
                    key={m.name}
                    image={m.image}
                    name={m.name}
                    subscriber={7}
                    score={5}
                    rankType="subscribe"
                  />
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default RankPage;
