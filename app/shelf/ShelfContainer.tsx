"use client";

import MangaCard from "../components/MangaCard";
import useSearch from "../hooks/UseSearch";
import useProfile from "../hooks/UseProfile";
import { MangaType } from "../types/Manga";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axios";
import { ImBooks } from "react-icons/im";
import configEnv from "../config";
import { mockManga } from "../mock/manga";

const ShelfContainer = () => {
  const { profile, token } = useProfile();
  const { searchText } = useSearch();

  const [MangaOnShelf, setMangaOnShelf] = useState([] as MangaType[]);

  useEffect(() => {
    const loadData = async () => {
      if (configEnv.USE_MOCK_DATA) {
        const ids = profile.followedMangaIds ?? [];
        setMangaOnShelf(mockManga.filter((m) => ids.includes(m.id)));
        return;
      }
      try {
        const res = await axiosInstance.get<MangaType[]>("/user/following", {
          headers: { Authorization: `Bearer ${token}` },
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

  const filtered = MangaOnShelf.filter((manga) =>
    (manga.titleEn || manga.titleOriginal)
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  return filtered.length > 0 ? (
    <div className="grid grid-cols-2 gap-x-4 gap-y-7 px-5 pt-2">
      {filtered.map((data) => (
        <MangaCard
          id={data.id}
          key={data.id}
          image={data.imageUrl}
          name={data.titleEn || data.titleOriginal}
        />
      ))}
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center gap-4 pt-24 px-10 text-center">
      <div className="w-16 h-16 rounded-full bg-surface-2 grid place-items-center">
        <ImBooks size={24} className="text-ink-faint" />
      </div>
      <p className="text-ink-soft text-[14px] leading-relaxed">
        Your shelf is empty.
        <br />
        Follow a manga to see it here.
      </p>
    </div>
  );
};

export default ShelfContainer;
