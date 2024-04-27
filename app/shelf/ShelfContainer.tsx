"use client";

import MangaCard from "../components/MangaCard";
import useSearch from "../hooks/UseSearch";
import useProfile from "../hooks/UseProfile";
// import testData from "../temp/anime.json";
import { MangaType } from "../types/Manga";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axios";
import { fetchUtil } from "../utils/fetch";

const ShelfContainer = () => {
  // const myManga = testData;
  const { profile } = useProfile();
  const { searchText } = useSearch();

  const [MangaOnShelf, setMangaOnShelf] = useState([] as MangaType[]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch("/api/subscribelist");
        const data = (await res.json()).data;
        if (data) {
          setMangaOnShelf(data);
        }
      } catch (e) {
        console.log(e);
      }
    };
    loadData();
  }, [profile]);

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
