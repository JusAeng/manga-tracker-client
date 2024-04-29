"use client";

import BackButton from "@/app/components/BackButton";
import Image from "next/image";
import VolumnCard from "./VolumnCard";
import ReadMoreContainer from "./ReadMoreContainer";
import UseNav from "@/app/hooks/UseNav";
import { useEffect, useState } from "react";
import { MangaType } from "../types/Manga";
import UseProfile from "../hooks/UseProfile";
import axiosInstance from "../utils/axios";

interface IProp {
  mangaId: string;
}

const MangaDetailContainer: React.FC<IProp> = ({ mangaId }) => {
  const [manga, setManga] = useState({} as MangaType);
  const { token } = UseProfile();
  const { setNavText } = UseNav();
  const { profile } = UseProfile();

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axiosInstance.get(`/manga/${mangaId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.data) {
          setManga(response.data[0]);
        }
      } catch (e) {
        console.log(e);
      }
    };
    setNavText("manga-detail");
    loadData();
  }, [mangaId, setNavText, token]);

  return (
    <main className="bg-[#1e1e1f] min-h-screen">
      {/* <section
        className={`h-[32vh] bg-[#5c7df7] flex flex-col items-start justify-between pb-[15px]`}
      >
        <BackButton size={26} color="#ffffff" />
        <div className="bg-[#ffffff] rounded-[5px] text-[12px] mb-[10px] ml-[5px] px-[4px]">
          {manga.genre}
        </div>
      </section> */}
      <section className="h-[32vh] bg-[#ffaaff]">
        <div className={`relative`} style={{ height: `100%`, width: `100%` }}>
          <Image
            src={manga.image}
            className="z-10"
            alt="Picture of the author"
            fill
            sizes="100%"
            style={{
              objectFit: "cover",
            }}
          />
          <div className="relative z-20">
            <BackButton size={26} color="#ffffff" />
          </div>
        </div>
        <div className="bg-[#ffffff] rounded-[5px] text-[12px] w-fit px-[4px] ml-[10px] bottom-[44px] relative z-20">
          {manga.genre}
        </div>
      </section>
      <section className="relative bottom-[15px] z-20">
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
