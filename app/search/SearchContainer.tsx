"use client";

import testData from "@/app/temp/anime.json";
import { MdFilterAlt } from "react-icons/md";
import { IoChevronBackOutline } from "react-icons/io5";
import MangaCardMini from "./MangaCardMini";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

interface FilterElementsType {
  accessKey: string;
  header: string;
  dropdown: JSX.Element;
}

const allFilterElements: FilterElementsType[] = [
  {
    accessKey: "Publisher",
    header: "publisher",
    dropdown: <></>,
  },
  {
    accessKey: "Genres",
    header: "genres",
    dropdown: <></>,
  },
  {
    accessKey: "Sort",
    header: "sort",
    dropdown: <></>,
  },
];

const SearchContainer = () => {
  const myAnimes = testData;

  const searchRef = useRef<HTMLInputElement>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState("");

  const [isFilter, setIsFilter] = useState(false);
  const [filter, setFilter] = useState([] as string[]);
  const [filterOption, setFilterOption] = useState("");

  const handleTyping = () => {
    const textSearchRef = searchRef.current?.value || "";
    setSearchText(textSearchRef);
  };

  const handleFilterOption = (option: string) => {
    if (option === filterOption) {
      setFilterOption("");
    } else {
      setFilterOption(option);
    }
  };
  const handleInputFocus = () => {
    setIsSearching(true);
    setIsFilter(false);
  };

  let filteredMyAnime = myAnimes?.filter((manga) =>
    manga.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <main className="pb-[10px]">
      <section className="sticky top-[0px] z-20 bg-primaryx">
        <section className="pt-[20px] pb-[10px] px-[10px] flex justify-evenly items-center relative">
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
            onFocus={handleInputFocus}
            onBlur={() => setIsSearching(false)}
            animate={isSearching ? "active" : "default"}
            type="text"
            className="w-[84%] rounded-[10px] h-[30px] px-[10px]"
            placeholder="Search"
            ref={searchRef}
            onChange={handleTyping}
          />
          <div
            className="p-[5px] cursor-pointer"
            onClick={() => setIsFilter(!isFilter)}
          >
            <MdFilterAlt size={24} color={"#ffffff"} />
          </div>
        </section>
        {isFilter ? (
          <motion.section
            className="bg-primaryx absolute w-[100%] z-20 text-white flex justify-around pb-[10px]"
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: "-30%", opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {allFilterElements.map((element) => (
              <div key={element.accessKey} className="flex flex-col">
                <button onClick={() => handleFilterOption(element.accessKey)}>
                  {element.header}
                </button>
                {filterOption === element.accessKey ? element.dropdown : <></>}
              </div>
            ))}
            {/* <div className="flex flex-col">
              <button onClick={() => handleFilterOption("publisher")}>
                Publisher
              </button>
              {filterOption === "publisher" ? <>nani</> : <></>}
            </div>
            <div className="flex flex-col">
              <button onClick={() => handleFilterOption("genres")}>
                Genres
              </button>
              {filterOption === "genres" ? <>nani</> : <></>}
            </div>
            <div className="flex flex-col">
              <button onClick={() => handleFilterOption("sort")}>Sort</button>
              {filterOption === "sort" ? <>nani</> : <></>}
            </div> */}
          </motion.section>
        ) : (
          <></>
        )}
      </section>

      <section className="grid grid-cols-3 place-items-center gap-y-[10px] px-[4px] pt-[10px]">
        {filteredMyAnime.map((anime) => (
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
