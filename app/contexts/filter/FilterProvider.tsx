import { PropsWithChildren, useState } from "react";
import FilterContext from "./FilterContext";

const FilterProvider = ({ children }: PropsWithChildren) => {
  const [filterText, setFilterText] = useState("");

  return (
    <FilterContext.Provider value={{ filterText, setFilterText }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
