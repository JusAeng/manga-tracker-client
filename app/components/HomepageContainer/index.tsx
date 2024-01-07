import testData from "@/app/temp/anime.json";
import tt from "@/app/temp/tt.json";
import TrendingCard from "../TrendingCard";
import HighlightCard from "../HighlightCard";
import AnimeCard from "../AnimeCard";

const HomeContainer = () => {
  const myAnimes = testData;

  return (
    <main>
      <HighlightCard
        image={tt[0].image}
        genres={["sci-fi", "action"]}
        name={myAnimes[0].name}
      />
      <p>Trending Manga</p>
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
      <div className="mb-[30px]">
        <p>Recommend</p>
        <div className="flex flex-col items-center">
          <AnimeCard
            image={myAnimes[4].image}
            name={myAnimes[4].name}
            author={myAnimes[4].author}
            lastEpisode={12}
          />
          <AnimeCard
            image={myAnimes[4].image}
            name={myAnimes[4].name}
            author={myAnimes[4].author}
            lastEpisode={12}
          />
          <AnimeCard
            image={myAnimes[4].image}
            name={myAnimes[4].name}
            author={myAnimes[4].author}
            lastEpisode={12}
          />
          <AnimeCard
            image={myAnimes[4].image}
            name={myAnimes[4].name}
            author={myAnimes[4].author}
            lastEpisode={12}
          />
          <AnimeCard
            image={myAnimes[4].image}
            name={myAnimes[4].name}
            author={myAnimes[4].author}
            lastEpisode={12}
          />
        </div>
      </div>
    </main>
  );
};

export default HomeContainer;
