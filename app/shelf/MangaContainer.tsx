"use client";

import MangaCard from "../components/MangaCard";
import useSearch from "../hooks/UseSearch";
import testData from "../temp/anime.json";
import tempCover from "../temp/mangacover19.jpeg";

const MangaContainer = () => {
  const myAnimes = testData;
  const { searchText } = useSearch();

  let filtered = myAnimes?.filter(
    (manga) =>
      manga.name.toLowerCase().includes(searchText.toLowerCase()) ||
      manga.author.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="grid grid-cols-2 place-items-center gap-[18px] pb-[55px] px-[5vw]">
      {filtered.map((data) => {
        return (
          <MangaCard
            key={data.name}
            image={data.image}
            name={data.name}
            author={data.author}
            lastVol={data.lastEpisode}
          />
        );
      })}
    </div>
  );
};

export default MangaContainer;
