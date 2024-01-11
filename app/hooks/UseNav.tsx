import { useContext } from "react";
import NavContext from "../contexts/nav/NavContext";

const UseNav = () => {
  const context = useContext(NavContext);

  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }

  return context;
};

export default UseNav;
