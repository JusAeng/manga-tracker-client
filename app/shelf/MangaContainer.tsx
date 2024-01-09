"use client";

import MangaCard from "../components/MangaCard";
import useSearch from "../hooks/UseSearch";
import testData from "../temp/anime.json";

const MangaContainer = () => {
  const myAnimes = testData;
  const { searchText } = useSearch();

  let filtered = myAnimes?.filter(
    (manga) =>
      manga.name.toLowerCase().includes(searchText.toLowerCase()) ||
      manga.author.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center gap-[10px] mt-[10px]">
      {filtered.map((data) => {
        return (
          <MangaCard
            key={data.name}
            image={data.image}
            name={data.name}
            author={data.author}
            lastEpisode={data.lastEpisode}
          />
        );
      })}
    </div>
  );
};

export default MangaContainer;
