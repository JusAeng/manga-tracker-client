import AnimeCard from "../components/AnimeCard";
import testData from "../temp/anime.json";

const ShelfPage = () => {
  const myAnimes = testData;

  return (
    <main className="flex flex-col items-center gap-[10px] bg-[#a0f6ff]">
      {myAnimes.map((data) => {
        return (
          <AnimeCard
            key={data.name}
            image={data.image}
            name={data.name}
            author={data.author}
            lastEpisode={data.lastEpisode}
          />
        );
      })}
    </main>
  );
};

export default ShelfPage;
