import { useContext } from "react";
import FilterContext from "../contexts/filter/FilterContext";

const UseFilter = () => {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }

  return context;
};

export default UseFilter;
