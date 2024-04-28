"use client";

import "./index.css";
import testData from "@/app/temp/anime.json";
import TrendingCard from "../TrendingCard";
import HighlightCard from "../HighlightCard";
import MangaCard from "../MangaCard";
import useSearch from "@/app/hooks/UseSearch";
import { useLiff } from "react-liff";

const MainContainer = () => {
  const myAnimes = testData;

  const highlightManga = [1];
  const trendingManga = [1];
  const recommendManga = [1];
  const newManga = [1];
  const { error, isLoggedIn, isReady, liff } = useLiff();

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
          image={
            "https://static.wikia.nocookie.net/mushokutensei/images/8/80/MT-MN-V19.png/revision/latest?cb=20230819000719"
          }
          genres={["sci-fi", "action"]}
          name={myAnimes[0].name}
          id={"660d975d9fb2c1bc731793fa"}
        />
      </section>
      {/* <button onClick={handleCopyClick}>Click</button> */}
      {trendingManga.length > 0 && (
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
      )}
      {recommendManga.length > 0 && (
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
      )}

      {newManga.length > 0 && (
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
