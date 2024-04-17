"use client";

import MangaCard from "../components/MangaCard";
import useSearch from "../hooks/UseSearch";
import useProfile from "../hooks/UseProfile";
// import testData from "../temp/anime.json";
import { MangaType } from "../types/Manga";

interface IProp {
  MangaOnShelf: MangaType[];
}

const ShelfContainer: React.FC<IProp> = ({ MangaOnShelf }) => {
  // const myManga = testData;
  const { profile } = useProfile();
  const { searchText } = useSearch();

  let filtered = MangaOnShelf?.filter(
    (manga) =>
      manga.title.toLowerCase().includes(searchText.toLowerCase()) ||
      manga.author.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="grid grid-cols-2 place-items-center gap-[18px] px-[5vw]">
      {filtered.map((data, idx) => {
        return (
          <MangaCard
            key={idx}
            image={data.image}
            name={data.title}
            author={data.author}
            lastVol={data.lastVol}
          />
        );
      })}
    </div>
  );
};

export default ShelfContainer;
