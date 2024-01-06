import { Dispatch, SetStateAction, createContext } from "react";

interface ISearchContext {
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
}

const SearchContext = createContext({} as ISearchContext);

export default SearchContext;
