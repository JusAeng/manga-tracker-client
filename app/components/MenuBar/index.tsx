"use client";

import useSearch from "@/app/hooks/UseSearch";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { RiSearchFill } from "react-icons/ri";

interface Iprop {
  head: string;
  rank?: boolean;
  sort?: boolean;
  search?: boolean;
}

const MenuBar: React.FC<Iprop> = ({ head, rank, sort, search }) => {
  const router = useRouter();
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

  const handleRank = () => {
    router.push("/rank");
  };

  useEffect(() => {
    setSearchText("");
  }, [setSearchText]);

  useEffect(() => {
    searchRef.current?.focus();
  }, [isSearch]);

  return (
    <main className="bg-[#5c7df7] h-[40px] grid place-items-center w-[100%] sticky top-[0px] z-20">
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
          <div className="flex justify-around gap-[20px]">
            {rank && <div onClick={handleRank}>rank</div>}
            {sort && (
              <div onClick={handleFilter}>
                <div>sor</div>
              </div>
            )}
            {search && <RiSearchFill size={20} onClick={handleSearch} />}
          </div>
        </div>
      )}
    </main>
  );
};

export default MenuBar;
