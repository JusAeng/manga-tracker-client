import { Dispatch, SetStateAction, createContext } from "react";

interface IFilterContext {
  filterText: string;
  setFilterText: Dispatch<SetStateAction<string>>;
}

const FilterContext = createContext({} as IFilterContext);

export default FilterContext;
