"use client";

import useSearch from "@/app/hooks/UseSearch";
import { useEffect, useRef, useState } from "react";

interface Iprop {
  head: string;
  rank?: boolean;
  sort?: boolean;
  search?: boolean;
}

const MenuBar: React.FC<Iprop> = ({ head, rank, sort, search }) => {
  const [isSearch, setIsSearch] = useState(false);
  const [isFilter, setIsFilter] = useState(false);

  const { searchText, setSearchText } = useSearch();
  const searchRef = useRef<HTMLInputElement>(null);

  const handleFilter = () => {
    setIsFilter(!isFilter);
  };

  const handleSearch = () => {
    setIsFilter(false);
    setSearchText("");
    setIsSearch(!isSearch);
  };

  const handleTypingSearch = () => {
    const textSearchRef = searchRef.current?.value || "";
    setSearchText(textSearchRef);
  };

  useEffect(() => {
    setSearchText("");
  }, [setSearchText]);

  return (
    <main className="bg-[#5c7df7] h-[40px] grid place-items-center">
      {isSearch ? (
        <div className="flex justify-between px-[10px] w-[100%]">
          <div onClick={handleSearch}>back</div>
          <input
            type="text"
            onChange={handleTypingSearch}
            ref={searchRef}
            value={searchText}
          />
        </div>
      ) : (
        <div className="flex justify-between items-center px-[10px] w-[100%]">
          <h1 className="bg-[#ffffff]">{head}</h1>
          <div className="flex justify-around bg-[#ffffff] gap-[20px]">
            {rank && <div>rank</div>}
            {sort && (
              <div onClick={handleFilter}>
                <div>sor</div>
              </div>
            )}
            {search && (
              <div onClick={handleSearch}>
                <div>search</div>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default MenuBar;
