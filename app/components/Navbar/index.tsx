"use client";

import "./index.css";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { useRouter, usePathname } from "next/navigation";
import UseNav from "@/app/hooks/UseNav";
import { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { ImBooks } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import { RiHomeFill } from "react-icons/ri";

interface ActionType {
  icon: JSX.Element;
  keyAccess: string;
  header: string;
  link: string;
}

const actions: ActionType[] = [
  {
    icon: <RiHomeFill size={24} />,
    header: "Home",
    keyAccess: "home",
    link: "/",
  },
  {
    icon: <ImBooks size={24} />,
    header: "Shelf",
    keyAccess: "shelf",
    link: "/shelf",
  },
  {
    icon: <FaUserAlt size={22} />,
    header: "Profile",
    keyAccess: "profile",
    link: "/profile",
  },
];

interface IMenuIcon {
  icon: JSX.Element;
  color: string;
}

const MenuIcon: React.FC<IMenuIcon> = ({ icon, color }) => (
  <div style={{ color }}>{icon}</div>
);

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { navText, setNavText } = UseNav();
  const [vote, setVote] = useState(0);

  const handleAction = (action: ActionType) => {
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

  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <main className={`navbar ${visible ? "" : "hidden"}`}>
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
              key={action.keyAccess}
              className="flex flex-col justify-center items-center cursor-pointer mt-[7px] px-[7px] pb-[5px]"
              onClick={() => handleAction(action)}
            >
              <MenuIcon
                icon={action.icon}
                color={navText === action.link ? "#ffffff" : "#777777"}
              />
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default Navbar;
