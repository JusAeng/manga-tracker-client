"use client";

import { PropsWithChildren, useState } from "react";
import NavContext from "./NavContext";
import { usePathname } from "next/navigation";

const NavProvider = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  const [navText, setNavText] = useState(pathname);
  return (
    <NavContext.Provider value={{ navText, setNavText }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavProvider;
