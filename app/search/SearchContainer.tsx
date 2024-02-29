"use client";

import testData from "@/app/temp/anime.json";
import { MdFilterAlt } from "react-icons/md";
import { IoChevronBackOutline } from "react-icons/io5";
import MangaCardMini from "./MangaCardMini";
import { motion } from "framer-motion";
import { useState } from "react";

const SearchContainer = () => {
  const myAnimes = testData;
  const [isSearching, setIsSearching] = useState(false);
  const handleFilter = () => {
    console.log("noo");
  };

  return (
    <main className="pb-[10px]">
      <section className="py-[20px] px-[10px] flex justify-evenly items-center relative">
        {isSearching && (
          <div
            onClick={() => setIsSearching(false)}
            className="cursor-pointer p-[5px] absolute left-[20px]"
          >
            <IoChevronBackOutline color={"#777777"} size={28} />
          </div>
        )}
        <motion.input
          variants={{
            active: {
              paddingLeft: "40px",
              height: 40,
              paddingRight: "15px",
              borderRadius: "20px",
            },
            default: { borderRadius: "10px", y: 0 },
          }}
          onFocus={() => setIsSearching(true)}
          onBlur={() => setIsSearching(false)}
          animate={isSearching ? "active" : "default"}
          type="text"
          className="w-[84%] rounded-[10px] h-[30px] px-[10px]"
          placeholder="Search"
        />
        <div className="p-[5px] cursor-pointer" onClick={handleFilter}>
          <MdFilterAlt size={24} color={"#ffffff"} />
        </div>
      </section>
      <section className="grid grid-cols-3 place-items-center gap-y-[10px] px-[4px]">
        {myAnimes.map((anime) => (
          <MangaCardMini
            key={anime.name}
            id={""}
            image={anime.image}
            name={anime.name}
          />
        ))}
        {myAnimes.map((anime) => (
          <MangaCardMini
            key={anime.name}
            id={""}
            image={anime.image}
            name={anime.name}
          />
        ))}
        {myAnimes.map((anime) => (
          <MangaCardMini
            key={anime.name}
            id={""}
            image={anime.image}
            name={anime.name}
          />
        ))}
      </section>
    </main>
  );
};

export default SearchContainer;
