import AnimeCard from "../components/AnimeCard";
import MenuBar from "../components/MenuBar";
import testData from "../temp/anime.json";

const ShelfPage = () => {
  const myAnimes = testData;

  return (
    <main>
      <MenuBar head={"My Manga"} sort={true} search={true} />
      <div className="flex flex-col items-center gap-[10px] mt-[10px]">
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
      </div>
    </main>
  );
};

export default ShelfPage;
