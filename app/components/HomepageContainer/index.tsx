"use client";

import "./index.css";
import TrendingCard from "../TrendingCard";
import HighlightHero from "../HighlightHero";
import axiosInstance from "@/app/utils/axios";
import UseProfile from "@/app/hooks/UseProfile";
import { MangaDetailType, MangaType } from "@/app/types/Manga";
import { useEffect, useState } from "react";
import configEnv from "@/app/config";
import { mockGetSection, mockGetMangaById } from "@/app/mock/api";

const Section = ({
  title,
  manga,
}: {
  title: string;
  manga: MangaType[];
}) => {
  if (manga.length === 0) return null;
  return (
    <section className="mt-6 first:mt-2">
      <h3 className="text-ink text-[17px] font-semibold px-5 mb-1">
        {title}
      </h3>
      <div className="content-x-scroll scrollbar-hide">
        {manga.map((elem) => (
          <TrendingCard
            key={elem.id}
            id={elem.id}
            image={elem.imageUrl}
            name={elem.titleEn || elem.titleOriginal}
          />
        ))}
      </div>
    </section>
  );
};

const MainContainer = () => {
  const { token } = UseProfile();
  const [highlight, setHighlight] = useState<MangaDetailType | null>(null);
  const [trendingManga, setTrendingManga] = useState([] as MangaType[]);
  const [recommendManga, setRecommendManga] = useState([] as MangaType[]);
  const [newManga, setNewManga] = useState([] as MangaType[]);

  useEffect(() => {
    // Fills in genres on top of a highlight that's already on screen —
    // never blocks the initial render, so a slow /manga/:id response
    // just means the pills pop in a beat later, not a blank hero.
    const enrichHighlight = async (id: string) => {
      try {
        const detail = configEnv.USE_MOCK_DATA
          ? await mockGetMangaById(id)
          : (
              await axiosInstance.get<MangaDetailType>(`/manga/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
              })
            ).data;
        if (detail) setHighlight(detail);
      } catch (e) {
        console.log(e);
      }
    };

    const loadData = async (mode: "trending" | "recommend" | "new") => {
      try {
        const data = configEnv.USE_MOCK_DATA
          ? await mockGetSection(mode)
          : (
              await axiosInstance.get<MangaType[]>(`/manga/${mode}`, {
                headers: { Authorization: `Bearer ${token}` },
              })
            ).data;
        switch (mode) {
          case "trending":
            setTrendingManga(data);
            // Pick the first trending title to feature as the hero — no
            // dedicated "highlight" concept on the backend, just a pick
            // from data that's already there. Show it right away with
            // what this response already has (title/image/intro), then
            // fetch genres in the background instead of making the hero
            // wait on a second round-trip before it can render at all.
            if (data.length > 0) {
              const pick = data[0];
              setHighlight({ ...pick, authors: null, genres: null });
              enrichHighlight(pick.id);
            }
            break;
          case "recommend":
            setRecommendManga(data);
            break;
          case "new":
            setNewManga(data);
            break;
          default:
            console.log("not in case");
        }
      } catch (e) {
        console.log(e);
      }
    };
    loadData("trending");
    loadData("recommend");
    loadData("new");
  }, [token]);

  // Don't show the featured pick a second time in the Trending row.
  const trendingRest = trendingManga.slice(1);

  const isEmpty =
    !highlight &&
    trendingRest.length === 0 &&
    recommendManga.length === 0 &&
    newManga.length === 0;

  return (
    <main className="pb-6">
      {highlight && <HighlightHero manga={highlight} />}
      <Section title="Trending" manga={trendingRest} />
      <Section title="Recommended for you" manga={recommendManga} />
      <Section title="New" manga={newManga} />
      {isEmpty && (
        <div className="px-5 pt-10 text-center text-ink-faint text-[14px]">
          No manga yet — check back soon.
        </div>
      )}
    </main>
  );
};

const HomeContainer = () => {
  return (
    <main className="main-page">
      <MainContainer />
    </main>
  );
};

export default HomeContainer;
