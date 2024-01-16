"use client";

import { RiHomeFill, RiSearchFill } from "react-icons/ri";
import { ImBooks } from "react-icons/im";
import { FaUserAlt, FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { useRouter, usePathname } from "next/navigation";
import UseNav from "@/app/hooks/UseNav";
import { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";

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
  const { navText, setNavText } = UseNav();
  const [vote, setVote] = useState(0);

  const handleSpeedDialAction = (action: ActionType) => {
    setNavText(action.link);
    router.push(action.link);
  };

  const handleVote = () => {
    setVote((vote + 1) % 6);
    console.log(vote);
  };

  useEffect(() => {
    setNavText(pathname);
  }, [pathname, setNavText]);

  return (
    <main
      className={
        "fixed bottom-[0px] w-[100vw] bg-[#2e2e2f] min-h-[45px] pb-[20px]"
      }
    >
      {navText.includes("manga-detail") ? (
        <div className="flex justify-evenly items-center h-[65px]">
          <button
            onClick={handleVote}
            className="w-[130px] h-[70%] bg-[#fce6b6] rounded-[10px] grid place-items-center"
          >
            {vote ? (
              <div className="relative">
                <FaStar size={28} color={"#f7bc63"} />
                <h3 className="absolute top-[8px] left-[11px] text-[10px] text-[#555555]">
                  {vote}
                </h3>
              </div>
            ) : (
              <FaRegStar size={28} color={"#f7bc63"} />
            )}
          </button>
          <button className="w-[240px] h-[70%] bg-[#555555] rounded-[10px] grid place-items-center">
            <div className="flex gap-[7px] items-center">
              <IoMdAdd size={18} color={"#ffffff"} />
              <h3 className="text-[#eeeeee] text-[18px]">Subcribe</h3>
            </div>
          </button>
        </div>
      ) : (
        <div className="flex justify-around">
          {actions.map((action) => (
            <div
              key={action.name}
              className="flex flex-col justify-center items-center cursor-pointer mt-[7px]"
              onClick={() => handleSpeedDialAction(action)}
            >
              <MenuIcon
                action={action}
                color={navText === action.link ? "#ffffff" : "#777777"}
              />
              <p
                className={
                  "text-[10px]" +
                  (navText === action.link
                    ? " text-[#ffffff]"
                    : " text-[#777777]")
                }
              >
                {action.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default Navbar;
