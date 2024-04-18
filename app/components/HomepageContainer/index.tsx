"use client";

import "./index.css";
import testData from "@/app/temp/anime.json";
import TrendingCard from "../TrendingCard";
import HighlightCard from "../HighlightCard";
import MangaCard from "../MangaCard";
import useSearch from "@/app/hooks/UseSearch";
import { useLiff } from "react-liff";
import { useEffect } from "react";

const MainContainer = () => {
  const myAnimes = testData;
  const { error, isLoggedIn, isReady, liff } = useLiff();

  // useEffect(() => {
  //   if (!isLoggedIn) return;
  // }, [liff, isLoggedIn, isReady]);

  // if (!isReady) {
  //   return <h1>Loading</h1>;
  // }
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
  return (
    <main>
      <section className="py-[20px]">
        <HighlightCard
          // image={tt[0].image}
          image={
            "https://static.wikia.nocookie.net/mushokutensei/images/8/80/MT-MN-V19.png/revision/latest?cb=20230819000719"
          }
          genres={["sci-fi", "action"]}
          name={myAnimes[0].name}
        />
      </section>
      <button onClick={handleCopyClick}>Click</button>
      <section>
        <h3 className="text-white text-[18px] ml-[10px]">Trending Manga</h3>
        <div className="content-x-scroll scrollbar-hide">
          <TrendingCard
            id={myAnimes[0]._id}
            image={myAnimes[1].image}
            name={myAnimes[0].name}
            publisher={myAnimes[0].publisher}
          />
        </div>
      </section>
      <section className="mt-[5px]">
        <h3 className="text-white text-[18px] ml-[10px]">Recommend</h3>
        <div className="content-x-scroll scrollbar-hide">
          {myAnimes.map((anime) => (
            <TrendingCard
              id={anime._id}
              key={anime.name}
              image={anime.image}
              name={anime.name}
              publisher={anime.publisher}
            />
          ))}
        </div>
      </section>
      <section className="mt-[5px]">
        <h3 className="text-white text-[18px] ml-[10px]">New</h3>
        <div className="content-x-scroll scrollbar-hide">
          {myAnimes.map((anime, idx) => {
            if (idx > 3) {
              return (
                <TrendingCard
                  id={anime._id}
                  key={anime.name}
                  image={anime.image}
                  name={anime.name}
                  publisher={anime.publisher}
                />
              );
            }
          })}
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
            lastVol={anime.lastEpisode}
          />
        ))}
      </div>
    </div>
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
