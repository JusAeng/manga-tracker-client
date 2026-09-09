"use client";

import { MdFilterAlt } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import MangaCardMini from "./MangaCardMini";
import { useEffect, useRef, useState } from "react";
import { MangaType } from "../types/Manga";
import { sortingManga } from "../services/manga.service";
import axiosInstance from "../utils/axios";
import UseProfile from "../hooks/UseProfile";
import configEnv from "../config";
import { mockGetManga } from "../mock/api";

const SearchContainer = () => {
  const [allManga, setAllManga] = useState([] as MangaType[]);
  const { token } = UseProfile();
  const searchRef = useRef<HTMLInputElement>(null);
  const [searchText, setSearchText] = useState("");
  const [isFilter, setIsFilter] = useState(false);
  const [sort, setSort] = useState<"asc" | "desc" | "">("");

  const handleTyping = () => {
    setSearchText(searchRef.current?.value || "");
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = configEnv.USE_MOCK_DATA
          ? await mockGetManga(searchText)
          : (
              await axiosInstance.get<MangaType[]>("/manga", {
                params: searchText ? { q: searchText } : undefined,
                headers: { Authorization: `Bearer ${token}` },
              })
            ).data;
        setAllManga(data);
      } catch (e) {
        console.log(e);
      }
    };
    loadData();
  }, [token, searchText]);

  const sortedManga = [...allManga];
  if (sort) sortedManga.sort((a, b) => sortingManga(a, b, sort));

  return (
    <main className="pb-6">
      <div className="sticky top-0 z-20 bg-bg/95 backdrop-blur-md border-b border-border px-5 pt-4 pb-3">
        <div className="flex items-center gap-2">
          <div className="flex-1 flex items-center gap-2 bg-surface border border-border rounded-full h-11 px-4">
            <IoSearchOutline size={18} className="text-ink-faint shrink-0" />
            <input
              type="text"
              className="bg-transparent outline-none w-full text-[15px] text-ink placeholder:text-ink-faint"
              placeholder="Search manga"
              ref={searchRef}
              onChange={handleTyping}
            />
          </div>
          <button
            onClick={() => setIsFilter(!isFilter)}
            className={`shrink-0 grid place-items-center w-11 h-11 rounded-full border transition-colors ${
              isFilter
                ? "bg-accent text-accent-ink border-accent"
                : "bg-surface text-ink-soft border-border"
            }`}
          >
            <MdFilterAlt size={20} />
          </button>
        </div>
        {isFilter && (
          <div className="flex gap-2 pt-3">
            <button
              onClick={() => setSort(sort === "asc" ? "" : "asc")}
              className={`py-1.5 px-4 rounded-full text-[13px] font-medium border transition-colors ${
                sort === "asc"
                  ? "bg-accent text-accent-ink border-accent"
                  : "bg-surface-2 text-ink-soft border-border"
              }`}
            >
              A → Z
            </button>
            <button
              onClick={() => setSort(sort === "desc" ? "" : "desc")}
              className={`py-1.5 px-4 rounded-full text-[13px] font-medium border transition-colors ${
                sort === "desc"
                  ? "bg-accent text-accent-ink border-accent"
                  : "bg-surface-2 text-ink-soft border-border"
              }`}
            >
              Z → A
            </button>
          </div>
        )}
      </div>

      <section className="grid grid-cols-3 gap-x-3 gap-y-6 px-5 pt-6">
        {sortedManga.map((manga) => (
          <MangaCardMini
            key={manga.id}
            id={manga.id}
            image={manga.imageUrl}
            name={manga.titleEn || manga.titleOriginal}
          />
        ))}
      </section>
      {sortedManga.length === 0 && (
        <div className="px-5 pt-10 text-center text-ink-faint text-[14px]">
          No manga found.
        </div>
      )}
    </main>
  );
};

export default SearchContainer;
