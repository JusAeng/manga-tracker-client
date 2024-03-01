"use client";

import testData from "@/app/temp/anime.json";
import { MdFilterAlt } from "react-icons/md";
import { IoChevronBackOutline, IoChevronDownOutline } from "react-icons/io5";
import MangaCardMini from "./MangaCardMini";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import FilterDropdown from "./FilterDropdown";

interface FilterElementsType {
  accessKey: string;
  header: string;
}

interface AddedType {
  [key: string]: string[];
}

const allFilterElements: FilterElementsType[] = [
  {
    accessKey: "publishers",
    header: "Publishers",
  },
  {
    accessKey: "genres",
    header: "Genres",
  },
  {
    accessKey: "sort",
    header: "Sort",
  },
];

const SearchContainer = () => {
  const myManga = testData;

  const searchRef = useRef<HTMLInputElement>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState("");

  const [isFilter, setIsFilter] = useState(false);
  const [filterOption, setFilterOption] = useState("");
  const [filterItems, setFilterItems] = useState({
    publishers: [],
    genres: [],
    sort: [],
  } as AddedType);

  const handleTyping = () => {
    const textSearchRef = searchRef.current?.value || "";
    setSearchText(textSearchRef);
  };

  const handleInputFocus = () => {
    setIsSearching(true);
    setIsFilter(false);
    setFilterOption("");
  };

  const toggleFilter = () => {
    setIsFilter(!isFilter);
    setFilterOption("");
  };

  const handleFilterOption = (option: string) => {
    if (option === filterOption) {
      setFilterOption("");
    } else {
      setFilterOption(option);
    }
  };

  const handleOptionManuSelect = (option: string, optionMenu: string) => {
    console.log(optionMenu);
    setFilterOption("");

    if (option === "sort") {
      setFilterItems((prevState) => ({
        ...prevState,
        sort: [optionMenu],
      }));
      return;
    }

    setFilterItems((prevState) => ({
      ...prevState,
      [option]: [...prevState[option], optionMenu],
    }));
  };

  let filteredMyManga = myManga?.filter((manga) =>
    manga.name.toLowerCase().includes(searchText.toLowerCase())
  );

  useEffect(() => {
    console.log(filterItems);
  }, [filterItems]);

  return (
    <main className="pb-[10px]">
      <section className="sticky top-[0px] z-20 bg-primaryx">
        <section className="pt-[20px] pb-[10px] px-[10px] flex justify-around items-center relative">
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
          <div className="p-[5px] cursor-pointer" onClick={toggleFilter}>
            <MdFilterAlt size={24} color={"#ffffff"} />
          </div>
        </section>
        {isFilter ? (
          <motion.section
            className="bg-primaryx absolute w-[100%] z-20 pb-[16px] rounded-b-[8px] text-white grid grid-cols-3"
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: "-20%", opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {allFilterElements.map((element) => (
              <div
                key={element.accessKey}
                className="flex flex-col border border-[#555555] items-center"
              >
                <button
                  onClick={() => handleFilterOption(element.accessKey)}
                  className={`flex items-center gap-[4px] w-fit py-[2px] px-[10px] rounded-[15px] mb-[5px] ${
                    element.accessKey === filterOption ? "bg-[#ffaaaa]" : ""
                  }`}
                >
                  <p>{element.header}</p>
                  <IoChevronDownOutline size={12} />
                </button>
                {filterItems[element.accessKey].map((item) => (
                  <div key={item}>{item}</div>
                ))}
                {filterOption === element.accessKey ? (
                  <FilterDropdown
                    option={element.accessKey}
                    added={filterItems[element.accessKey]}
                    callback={handleOptionManuSelect}
                  />
                ) : (
                  <></>
                )}
              </div>
            ))}
          </motion.section>
        ) : (
          <></>
        )}
      </section>

      <section className="grid grid-cols-3 place-items-center gap-y-[10px] px-[4px] pt-[10px]">
        {filteredMyManga.map((anime) => (
          <MangaCardMini
            key={anime.name}
            id={""}
            image={anime.image}
            name={anime.name}
          />
        ))}
        {myManga.map((anime) => (
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
