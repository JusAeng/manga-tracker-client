"use client";

import "./index.css";
import testData from "@/app/temp/anime.json";
import TrendingCard from "../TrendingCard";
import HighlightCard from "../HighlightCard";
import MangaCard from "../MangaCard";
import useSearch from "@/app/hooks/UseSearch";
import { useLiff } from "react-liff";
import axiosInstance from "@/app/utils/axios";
import UseProfile from "@/app/hooks/UseProfile";
import { MangaType } from "@/app/types/Manga";
import { useEffect, useState } from "react";
import { getLatestVolImage } from "@/app/services/manga.service";

const MainContainer = () => {
  const myAnimes = testData;

  const { token } = UseProfile();
  const [highlightManga, setHighlihgtManga] = useState({} as MangaType);
  const [trendingManga, setTrendingManga] = useState([] as MangaType[]);
  const [recommendManga, setRecommendManga] = useState([] as MangaType[]);
  const [newManga, setNewManga] = useState([] as MangaType[]);
  const { liff } = useLiff();

  const handleCopyClick = () => {
    // Create a temporary textarea element
    const textarea = document.createElement("textarea");
    textarea.value = liff.getIDToken() || "nani";

    // Append the textarea to the DOM
    document.body.appendChild(textarea);

    // Select the text in the textarea
    textarea.select();
    textarea.setSelectionRange(0, 99999);

    // Copy the selected text to the clipboard using the Clipboard API
    document.execCommand("copy");

    // Remove the temporary textarea from the DOM
    document.body.removeChild(textarea);
  };

  useEffect(() => {
    const loadData = async (mode: string) => {
      try {
        const response = await axiosInstance.get(`/manga/${mode}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = response.data;
        switch (mode) {
          case "highlight":
            setHighlihgtManga(data[0]);
            break;
          case "trending":
            setTrendingManga(data);
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
    loadData("highlight");
    loadData("trending");
    loadData("recommend");
    loadData("new");
  }, [token]);

  return (
    <main>
      <section className="py-[20px]">
        <HighlightCard
          image={getLatestVolImage(highlightManga)}
          genres={highlightManga.otherGenres}
          name={highlightManga.title}
          id={highlightManga._id}
        />
      </section>
      {/* <button onClick={handleCopyClick}>Click</button> */}
      {trendingManga && (
        <section>
          <h3 className="text-white text-[18px] ml-[10px]">Trending Manga</h3>
          <div className="content-x-scroll scrollbar-hide">
            {trendingManga.map((elem, idx) => (
              <TrendingCard
                key={elem.title}
                id={elem._id}
                image={elem.image}
                name={elem.title}
                publisher={elem.publisher}
              />
            ))}
          </div>
        </section>
      )}
      {recommendManga && (
        <section className="mt-[5px]">
          <h3 className="text-white text-[18px] ml-[10px]">Recommend</h3>
          <div className="content-x-scroll scrollbar-hide">
            {recommendManga.map((anime) => (
              <TrendingCard
                id={anime._id}
                key={anime.title}
                image={anime.image}
                name={anime.title}
                publisher={anime.publisher}
              />
            ))}
          </div>
        </section>
      )}

      {newManga && (
        <section className="mt-[5px]">
          <h3 className="text-white text-[18px] ml-[10px]">New</h3>
          <div className="content-x-scroll scrollbar-hide">
            {newManga.map((anime, idx) => {
              return (
                <TrendingCard
                  id={anime._id}
                  key={anime.title}
                  image={anime.image}
                  name={anime.title}
                  publisher={anime.publisher}
                />
              );
            })}
          </div>
        </section>
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
