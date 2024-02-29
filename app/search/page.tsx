import testData from "@/app/temp/anime.json";
import TrendingCard from "../components/TrendingCard";

const SearchPage = () => {
  const myAnimes = testData;
  return (
    <main className="main-page">
      <div className="flex flex-wrap gap-5">
        {myAnimes.map((anime) => (
          <TrendingCard
            key={anime.name}
            image={anime.image}
            name={anime.name}
            publisher={anime.publisher}
            w={80}
            h={120}
          />
        ))}
      </div>
    </main>
  );
};

export default SearchPage;
