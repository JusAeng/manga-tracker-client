"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
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
import configEnv from "@/app/config";

interface ActionType {
  icon: JSX.Element;
  keyAccess: string;
  header: string;
  link: string;
}

const actions: ActionType[] = [
  {
    icon: <RiHomeFill size={20} />,
    header: "Home",
    keyAccess: "home",
    link: "/",
  },
  {
    icon: <BiSolidSearch size={21} />,
    header: "Search",
    keyAccess: "search",
    link: "/search",
  },
  {
    icon: <ImBooks size={19} />,
    header: "Shelf",
    keyAccess: "shelf",
    link: "/shelf",
  },
  {
    icon: <FaUserAlt size={18} />,
    header: "Profile",
    keyAccess: "profile",
    link: "/profile",
  },
];

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { navText, setNavText } = UseNav();

  const pathParts = navText.split("/");
  const mangaId = pathParts[pathParts.length - 1];

  const { profile, setProfile, token } = UseProfile();
  const isFollowing = profile.followedMangaIds?.includes(mangaId) ?? false;

  const handleAction = (action: ActionType) => {
    setNavText(action.link);
    router.push(action.link);
  };

  const handleFollow = async () => {
    if (configEnv.USE_MOCK_DATA) {
      setProfile((prevProfile) => {
        const current = prevProfile.followedMangaIds ?? [];
        const followedMangaIds = current.includes(mangaId)
          ? current.filter((id) => id !== mangaId)
          : [...current, mangaId];
        return { ...prevProfile, followedMangaIds };
      });
      return;
    }
    try {
      const res = await axiosInstance.put(`/user/follow/${mangaId}`, null, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const followedIds = res.data as string[];
      setProfile((prevProfile) => ({
        ...prevProfile,
        followedMangaIds: followedIds,
      }));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setNavText(pathname);
  }, [pathname, setNavText]);

  const [visible, setVisible] = useState<boolean>(true);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() || 0;
    if (latest > prev && latest > 20) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "140%", opacity: 0 },
      }}
      animate={visible ? "visible" : "hidden"}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="fixed bottom-0 left-0 w-full z-50 px-4 pb-6"
    >
      {navText.includes("manga-detail") ? (
        // In Manga Detail Page
        <div className="flex justify-center">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleFollow}
            className={`flex items-center gap-2 h-12 px-7 rounded-full font-semibold text-[15px] shadow-card border transition-colors ${
              isFollowing
                ? "bg-surface-2 text-ink border-border"
                : "bg-accent text-accent-ink border-accent"
            }`}
          >
            {isFollowing ? (
              <IoCheckmarkOutline size={17} />
            ) : (
              <IoMdAdd size={17} />
            )}
            {isFollowing ? "Following" : "Follow"}
          </motion.button>
        </div>
      ) : (
        // Navbar Default
        <div className="mx-auto w-fit flex items-center gap-1 bg-surface/95 backdrop-blur-md border border-border rounded-full px-2 py-2 shadow-card">
          {actions.map((action) => {
            const active = navText === action.link;
            return (
              <button
                key={action.keyAccess}
                onClick={() => handleAction(action)}
                className="relative flex flex-col items-center justify-center w-14 h-12"
              >
                <span
                  className={`grid place-items-center w-11 h-9 rounded-full transition-colors ${
                    active
                      ? "bg-accent text-accent-ink"
                      : "text-ink-faint"
                  }`}
                >
                  {action.icon}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
