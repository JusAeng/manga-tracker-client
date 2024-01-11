"use client";

import { PropsWithChildren, useState } from "react";
import NavContext from "./NavContext";

const NavProvider = ({ children }: PropsWithChildren) => {
  const [navText, setNavText] = useState("");
  return (
    <NavContext.Provider value={{ navText, setNavText }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavProvider;
