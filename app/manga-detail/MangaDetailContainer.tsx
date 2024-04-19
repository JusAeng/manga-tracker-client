"use client";

import BackButton from "@/app/components/BackButton";
import VolumnCard from "./VolumnCard";
import ReadMoreContainer from "./ReadMoreContainer";
import UseNav from "@/app/hooks/UseNav";
import { useEffect, useState } from "react";
import { MangaType } from "../types/Manga";
import UseProfile from "../hooks/UseProfile";

interface IProp {
  manga: MangaType;
}

const MangaDetailContainer: React.FC<IProp> = ({ manga }) => {
  const { setNavText } = UseNav();
  const { profile } = UseProfile();

  useEffect(() => {
    setNavText("manga-detail");
  }, [setNavText]);
  return (
    <main className="bg-[#1e1e1f] min-h-screen">
      <section
        className="h-[32vh] bg-[#5c7df7] flex flex-col items-start justify-between pb-[15px]"
        style={{
          background: manga.image ? `url("${manga.image}")` : "gray",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <BackButton size={26} color="#ffffff" />
        <div className="bg-[#ffffff] rounded-[5px] text-[12px] mb-[10px] ml-[5px] px-[4px]">
          {manga.genre}
        </div>
      </section>
      <section className="relative bottom-[15px]">
        <ReadMoreContainer manga={manga} />
        <div className="container flex flex-col gap-[5px] mt-[10px] pb-[50px]">
          {manga.vols &&
            manga.vols.map((vol) => (
              <VolumnCard
                mangaId={vol.mangaId}
                key={vol.vol}
                image={vol.image}
                vol={vol.vol}
                own={
                  profile.ownerList
                    ? profile.ownerList.hasOwnProperty(manga._id) &&
                      profile.ownerList[manga._id].includes(vol.vol)
                    : false
                }
              />
            ))}
        </div>
      </section>
    </main>
  );
};

export default MangaDetailContainer;
