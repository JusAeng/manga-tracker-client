"use client";

import { PropsWithChildren, useState } from "react";
import FilterContext, { FilterType } from "./FilterContext";

const FilterProvider = ({ children }: PropsWithChildren) => {
  const [filterObject, setFilterObject] = useState({} as FilterType);

  return (
    <FilterContext.Provider value={{ filterObject, setFilterObject }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
