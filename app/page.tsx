"use client";

import HomeContainer from "./components/HomepageContainer";
import MenuBar from "./components/MenuBar";
import useSearch from "./hooks/UseSearch";

export default function Home() {
  const { searchText, setSearchText } = useSearch();

  return (
    <main className="bg-[#ffffff]">
      <MenuBar head={"For you"} rank={true} search={true} />
      {searchText === "" ? <HomeContainer /> : <div>Searching</div>}
    </main>
  );
}
