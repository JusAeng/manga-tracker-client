import { PropsWithChildren, useState } from "react";
import SearchContext from "./SearchContext";

const SearchProvider = ({ children }: PropsWithChildren) => {
  const [searchText, setSearchText] = useState<string>("");

  return (
    <SearchContext.Provider value={{ searchText, setSearchText }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
