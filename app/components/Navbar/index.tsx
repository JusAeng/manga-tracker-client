"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { useRouter, usePathname } from "next/navigation";
import UseNav from "@/app/hooks/UseNav";
import { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { IoCheckmarkOutline } from "react-icons/io5";
import { ImBooks } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import { RiHomeFill } from "react-icons/ri";
import { BiSolidSearch } from "react-icons/bi";
import axiosInstance from "@/app/utils/axios";
import UseProfile from "@/app/hooks/UseProfile";

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
    icon: <BiSolidSearch size={26} />,
    header: "Search",
    keyAccess: "search",
    link: "/search",
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
  const [isVote, setIsVote] = useState(false);

  const pathParts = navText.split("/");
  const mangaId = pathParts[pathParts.length - 1];

  const [voteClick, setVoteClick] = useState(false);
  const { profile, setProfile, token } = UseProfile();
  let score = 0;
  if (profile) {
    if (profile.rateList?.hasOwnProperty(mangaId)) {
      score = profile.rateList[mangaId];
    }
  }
  const [rateScore, setRateScore] = useState(score);

  const handleAction = (action: ActionType) => {
    setNavText(action.link);
    router.push(action.link);
  };

  const handleVote = () => {
    setVoteClick(!voteClick);
  };

  const handleScoring = async (score: number) => {
    try {
      const res = await axiosInstance.put(
        `/user/rating/${mangaId}/${score}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setProfile((prevProfile) => ({
        ...prevProfile,
        rateList: {
          ...prevProfile.rateList,
          [mangaId]: score,
        },
      }));
    } catch (e) {
      console.log(e);
    }
    setRateScore(score);
  };

  const handleSubscribe = async () => {
    try {
      const res = await axiosInstance.put(`/user/subscribe/${mangaId}`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const subList = res.data as string[];
      setProfile((prevProfile) => ({
        ...prevProfile,
        subscribeList: subList,
      }));
    } catch (e) {
      alert(e);
      console.log(e);
    }
  };

  useEffect(() => {
    setNavText(pathname);
  }, [pathname, setNavText]);

  useEffect(() => {
    setRateScore(score);
  }, [score]);

  const [visible, setVisible] = useState<boolean>(true);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() || 0;
    if (latest > prev && latest > 20) {
      setVisible(false);
      setVoteClick(false);
    } else {
      setVisible(true);
      setVoteClick(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "100%" },
      }}
      animate={visible ? "visible" : "hidden"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed bottom-[-1px] left-[0px] w-[100vw] bg-primaryx min-h-[45px] pt-[2px] pb-[22px] text-white rounded-t-[20px]"
    >
      {navText.includes("manga-detail") ? (
        // In Manga Detail Page
        <div>
          {voteClick && (
            <div className="flex justify-evenly h-[50px] items-center pt-[5px]">
              {[0, 1, 2, 3, 4, 5].map((ele) => (
                <button
                  key={ele}
                  className={`text-white h-[26px] flex items-center gap-[3px] border border-[#444444] px-[15px] py-[5px] rounded-lg ${
                    rateScore === ele && "bg-[#fff6e3]"
                  }`}
                  onClick={() => handleScoring(ele)}
                >
                  <span className="mt-[3px] text-[#777777]">
                    {ele !== 0 && ele}
                  </span>
                  {ele !== 0 ? (
                    <FaStar size={15} color={"#f7bc63"} />
                  ) : (
                    <FaRegStar size={18} color={"#f7bc63"} />
                  )}
                </button>
              ))}
            </div>
          )}
          <div className="flex justify-evenly items-center h-[65px]">
            <button
              onClick={handleVote}
              className="w-[130px] h-[70%] bg-[#fff6e3] rounded-[10px] grid place-items-center"
            >
              {rateScore !== 0 ? (
                <div className="relative flex items-center">
                  <FaStar size={28} color={"#f7bc63"} />
                </div>
              ) : (
                <FaRegStar size={28} color={"#f7bc63"} />
              )}
            </button>
            <button
              className="w-[240px] h-[70%] bg-[#555555] rounded-[10px] grid place-items-center"
              onClick={handleSubscribe}
            >
              <div className="flex gap-[7px] items-center">
                {profile.subscribeList &&
                profile.subscribeList.includes(mangaId) ? (
                  <IoCheckmarkOutline size={18} />
                ) : (
                  <IoMdAdd size={18} color={"#ffffff"} />
                )}

                <h3 className="text-[#eeeeee] text-[18px]">
                  {profile.subscribeList &&
                  profile.subscribeList.includes(mangaId)
                    ? "Subscribed"
                    : "Subscribe"}
                </h3>
              </div>
            </button>
          </div>
        </div>
      ) : (
        // Navbar Default
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
    </motion.nav>
  );
};

export default Navbar;
