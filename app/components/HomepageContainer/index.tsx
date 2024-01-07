import testData from "@/app/temp/anime.json";
import tt from "@/app/temp/tt.json";
import TrendingCard from "../TrendingCard";
import HighlightCard from "../HighlightCard";

const HomeContainer = () => {
  const myAnimes = testData;

  return (
    <main>
      <HighlightCard
        image={tt[0].image}
        genres={["sci-fi", "action"]}
        name={myAnimes[0].name}
      />
      <div>Trending Manga</div>
      <div className="flex gap-[10px]">
        <TrendingCard
          image={myAnimes[1].image}
          name={myAnimes[0].name}
          author={myAnimes[0].author}
        />
        <TrendingCard
          image={myAnimes[0].image}
          name={myAnimes[0].name}
          author={myAnimes[0].author}
        />
      </div>
    </main>
  );
};

export default HomeContainer;
