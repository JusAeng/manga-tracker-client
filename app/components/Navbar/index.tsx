"use client";

import { RiHomeFill, RiSearchFill } from "react-icons/ri";
import { ImBooks } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import { useRouter, usePathname } from "next/navigation";
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
  { icon: <RiHomeFill size={20} />, name: "home", link: "/" },
  // { icon: <RiSearchFill size={20} />, name: "Search", link: "/search" },
  { icon: <ImBooks size={20} />, name: "shelf", link: "/shelf" },
  { icon: <FaUserAlt size={19} />, name: "profile", link: "/profile" },
];

const MenuIcon: React.FC<MenuIconProp> = ({ action, color }) => (
  <div style={{ color }}>{action.icon}</div>
);

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [menu, setMenu] = useState(pathname);

  const handleSpeedDialAction = (action: ActionType) => {
    setMenu(action.link);
    router.push(action.link);
  };

  return (
    <main className="flex justify-around fixed bottom-[0px] w-[100vw] bg-[#2e2e2f] h-[45px]">
      {actions.map((action) => (
        <div
          key={action.name}
          className="flex flex-col justify-center items-center cursor-pointer mt-[7px]"
          onClick={() => handleSpeedDialAction(action)}
        >
          <MenuIcon
            action={action}
            color={menu === action.link ? "#ffffff" : "#777777"}
          />
          <p
            className={
              "text-[10px]" +
              (menu === action.link ? " text-[#ffffff]" : " text-[#777777]")
            }
          >
            {action.name}
          </p>
        </div>
      ))}
    </main>
  );
};

export default Navbar;
