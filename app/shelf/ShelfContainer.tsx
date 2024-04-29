"use client";

import MangaCard from "../components/MangaCard";
import useSearch from "../hooks/UseSearch";
import useProfile from "../hooks/UseProfile";
// import testData from "../temp/anime.json";
import { MangaType } from "../types/Manga";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axios";
import { getLatestVolImage } from "../services/manga.service";

const ShelfContainer = () => {
  // const myManga = testData;
  const { profile, token } = useProfile();
  const { searchText } = useSearch();

  const [MangaOnShelf, setMangaOnShelf] = useState([] as MangaType[]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await axiosInstance("/user/subscribelist", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.data) {
          setMangaOnShelf(res.data);
        }
      } catch (e) {
        console.log(e);
      }
    };
    loadData();
  }, [profile, token]);

  let filtered = MangaOnShelf.filter(
    (manga) =>
      manga.title.toLowerCase().includes(searchText.toLowerCase()) ||
      manga.author.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="grid grid-cols-2 place-items-center gap-[18px] px-[5vw]">
      {filtered.map((data, idx) => {
        return (
          <MangaCard
            id={data._id}
            key={idx}
            image={getLatestVolImage(data)}
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
