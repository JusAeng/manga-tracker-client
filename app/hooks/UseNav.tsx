import { useContext } from "react";
import NavContext from "../contexts/nav/NavContext";

const UseNav = () => {
  const context = useContext(NavContext);

  if (!context) {
    throw new Error("UseNav must be used within a NavProvider");
  }

  return context;
};

export default UseNav;
