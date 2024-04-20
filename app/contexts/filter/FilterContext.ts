import { Dispatch, SetStateAction, createContext } from "react";

export interface FilterType {
  genres: string[];
  publishers: string[];
}

interface IFilterContext {
  filterObject: FilterType;
  setFilterObject: Dispatch<SetStateAction<FilterType>>;
}

const FilterContext = createContext({} as IFilterContext);

export default FilterContext;
