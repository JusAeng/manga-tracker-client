import { Dispatch, SetStateAction, createContext } from "react";

interface INavContext {
  navText: string;
  setNavText: Dispatch<SetStateAction<string>>;
}

const NavContext = createContext({} as INavContext);

export default NavContext;
