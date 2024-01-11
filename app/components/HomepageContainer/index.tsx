"use client";

import testData from "@/app/temp/anime.json";
import tt from "@/app/temp/tt.json";
import TrendingCard from "../TrendingCard";
import HighlightCard from "../HighlightCard";
import MangaCard from "../MangaCard";
import useSearch from "@/app/hooks/UseSearch";

const MainContainer = () => {
  const myAnimes = testData;

  return (
    <main>
      <section className="my-[20px]">
        <HighlightCard
          // image={tt[0].image}
          image={
            "https://static.wikia.nocookie.net/mushokutensei/images/8/80/MT-MN-V19.png/revision/latest?cb=20230819000719"
          }
          genres={["sci-fi", "action"]}
          name={myAnimes[0].name}
        />
      </section>
      <section>
        <h3 className="text-white text-[18px] ml-[10px]">Trending Manga</h3>
        <div className="flex gap-[12px] overflow-x-auto whitespace-nowrap scrollbar-hide p-[10px]">
          <TrendingCard
            image={myAnimes[1].image}
            name={myAnimes[0].name}
            publisher={myAnimes[0].publisher}
          />
        </div>
      </section>
      <section className="mt-[5px]">
        <h3 className="text-white text-[18px] ml-[10px]">Recommend</h3>
        <div className="flex gap-[12px] overflow-x-auto whitespace-nowrap scrollbar-hide p-[10px]">
          <TrendingCard
            image={myAnimes[1].image}
            name={myAnimes[0].name}
            publisher={myAnimes[0].publisher}
          />
        </div>
      </section>
      <section className="pb-[50px] mt-[5px]">
        <h3 className="text-white text-[18px] ml-[10px]">New</h3>
        <div className="flex gap-[12px] overflow-x-auto whitespace-nowrap scrollbar-hide p-[10px]">
          <TrendingCard
            image={myAnimes[1].image}
            name={myAnimes[0].name}
            publisher={myAnimes[0].publisher}
          />
          <TrendingCard
            image={myAnimes[0].image}
            name={myAnimes[0].name}
            publisher={myAnimes[0].publisher}
          />
          <TrendingCard
            image={myAnimes[1].image}
            name={myAnimes[0].name}
            publisher={myAnimes[0].publisher}
          />
          <TrendingCard
            image={myAnimes[0].image}
            name={myAnimes[0].name}
            publisher={myAnimes[0].publisher}
          />
          <TrendingCard
            image={myAnimes[1].image}
            name={myAnimes[0].name}
            publisher={myAnimes[0].publisher}
          />
          <TrendingCard
            image={myAnimes[0].image}
            name={myAnimes[0].name}
            publisher={myAnimes[0].publisher}
          />
        </div>
      </section>
    </main>
  );
};

const SearchContainer = () => {
  const myAnimes = testData;
  const { searchText } = useSearch();

  let filtered = myAnimes?.filter(
    (manga) =>
      manga.name.toLowerCase().includes(searchText.toLowerCase()) ||
      manga.author.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="flex justify-center mt-[10px]">
      <div className="flex flex-col gap-[10px]">
        {filtered.map((anime) => (
          <MangaCard
            key={anime.name}
            image={anime.image}
            name={anime.name}
            author={anime.author}
            lastEpisode={anime.lastEpisode}
          />
        ))}
      </div>
    </div>
  );
};

const HomeContainer = () => {
  const { searchText } = useSearch();
  return (
    <main>{searchText === "" ? <MainContainer /> : <SearchContainer />}</main>
  );
};

export default HomeContainer;
