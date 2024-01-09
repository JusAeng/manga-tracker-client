"use client";

import useSearch from "@/app/hooks/UseSearch";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { RiSearchFill } from "react-icons/ri";
import { LuSettings2 } from "react-icons/lu";

interface Iprop {
  head: string;
  rank?: boolean;
  sort?: boolean;
  search?: boolean;
}

const MenuBar: React.FC<Iprop> = ({ head, rank, sort, search }) => {
  const router = useRouter();
  const [isSearch, setIsSearch] = useState(false);
  const [isSort, setIsSort] = useState(false);

  const { searchText, setSearchText } = useSearch();
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSort = () => {
    setIsSort(!isSort);
  };

  const handleSearch = () => {
    setIsSort(false);
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
    <div>
      <main className="bg-[#5c7df7] h-[40px] grid place-items-center w-[100%] sticky top-[0px] z-20">
        {isSearch ? (
          <div className="flex justify-between px-[10px] w-[100%]">
            <div onClick={handleSearch}>back</div>
            <div className="flex gap-[10px] items-center">
              <LuSettings2 size={20} />
              <input
                type="text"
                onChange={handleTypingSearch}
                ref={searchRef}
                value={searchText}
                className="w-[260px]"
              />
            </div>
          </div>
        ) : (
          <div className="flex justify-between items-center px-[10px] w-[100%]">
            <h1 className="bg-[#ffffff]">{head}</h1>
            <div className="flex justify-around gap-[20px]">
              {rank && <div onClick={handleRank}>rank</div>}
              {sort && (
                <div onClick={handleSort}>
                  <div>sor</div>
                </div>
              )}
              {search && <RiSearchFill size={20} onClick={handleSearch} />}
            </div>
          </div>
        )}
      </main>
      {isSort && (
        <div className="flex flex-col items-center">
          <div>subscribe date up</div>
          <div>subscribe date down</div>
        </div>
      )}
    </div>
  );
};

export default MenuBar;
