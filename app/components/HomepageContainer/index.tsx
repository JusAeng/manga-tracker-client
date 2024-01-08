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
      <div className="flex gap-[10px] overflow-x-auto whitespace-nowrap scrollbar-hide bg-[#e0e0e0] p-[10px]">
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
      <div>
        <p className="mb-[10px]">Recommend</p>
        <div className="flex gap-[10px] overflow-x-auto whitespace-nowrap scrollbar-hide bg-[#e0e0e0] p-[10px]">
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
      </div>
      <div className="mb-[30px]">
        <p className="mb-[10px]">New</p>
        <div className="flex gap-[10px] overflow-x-auto whitespace-nowrap scrollbar-hide bg-[#e0e0e0] p-[10px]">
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
      </div>
    </main>
  );
};

export default HomeContainer;
