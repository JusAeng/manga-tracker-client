"use client";

import { RiHomeFill, RiSearchFill } from "react-icons/ri";
import { ImBooks } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ActionType {
  icon: JSX.Element;
  name: string;
  link: string;
}

interface MenuIconProp {
  action: ActionType;
  color: string;
}

const actions: ActionType[] = [
  { icon: <RiHomeFill size={20} />, name: "Home", link: "/" },
  { icon: <RiSearchFill size={20} />, name: "Search", link: "/search" },
  { icon: <ImBooks size={20} />, name: "Shelf", link: "/shelf" },
  { icon: <FaUserAlt size={20} />, name: "Profile", link: "/profile" },
];

const MenuIcon: React.FC<MenuIconProp> = ({ action, color }) => (
  <div style={{ color }}>{action.icon}</div>
);

const Navbar = () => {
  const router = useRouter();
  const [menu, setMenu] = useState("Home");

  const handleSpeedDialAction = (action: ActionType) => {
    setMenu(action.name);
    router.push(action.link);
    console.log(action.link);
  };

  return (
    <main className="flex border justify-around">
      {actions.map((action) => (
        <div
          key={action.name}
          className="border grid place-items-center cursor-pointer"
          onClick={() => handleSpeedDialAction(action)}
        >
          <MenuIcon
            action={action}
            color={menu === action.name ? "#0000AA" : "#000000"}
          />
        </div>
      ))}
    </main>
  );
};

export default Navbar;
