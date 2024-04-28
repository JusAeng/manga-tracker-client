"use client";

import { useEffect, useState } from "react";
import ImageUtil from "../components/ImageUtil";
import { sumArrayLengths, top3Manga } from "../services/profile.service";
import { MangaType } from "../types/Manga";
import { ProfileType } from "../types/Profile";
import axiosInstance from "../utils/axios";
import UseProfile from "../hooks/UseProfile";

interface ITop3Manga {
  title: string;
  image: string;
}

const ProfileContainer = () => {
  const { profile, token } = UseProfile();
  const [favManga, setFavManga] = useState([] as ITop3Manga[]);
  // const favManga = await top3Manga(profile.rateList);
  // const favMangaEmpty: ITop3Manga[] = Array.from(
  //   { length: 3 - favManga.length },
  //   () => ({ title: "", image: "" })
  // );

  useEffect(() => {
    const getTop3 = async () => {
      let temp = await top3Manga(profile.rateList, token);
      setFavManga(temp);
    };
    getTop3();
  }, [profile, profile.rateList, token]);

  return (
    <main className="main-page">
      <section className="flex flex-col justify-center items-center h-[260px]">
        <ImageUtil
          image={profile.image}
          w={160}
          h={160}
          imageClass="rounded-[50%]"
        />
        <h2 className="text-center text-[24px] text-white">{profile.name}</h2>
        <p className="text-center text-[12px] relative bottom-[2px] text-[#888888]">
          @{profile._id}
        </p>
      </section>
      <section>
        <div className="px-[10px] flex flex-col gap-[10px]">
          <section>
            <h3 className="text-[#dddddd]">Personal Infomation</h3>
            <div className="text-[#aaaaaa]">
              <span>Total subscribe: </span>
              <span className="ml-[14px]">{profile.totalSubscribe}</span>
              <br />
              <span>Total manga book: </span>
              <span className="ml-[14px]">{profile.totalBooks}</span>
            </div>
          </section>
          <section>
            <h3 className="text-[#dddddd]">Top 3 Manga</h3>
            <div className="text-[#aaaaaa] mt-[6px] flex justify-center gap-[20px]">
              {favManga.map((fav, idx) => (
                <ImageUtil
                  key={idx}
                  image={fav.image}
                  w={100}
                  h={150}
                  imageClass="rounded-xl"
                />
              ))}
              {Array.from({ length: 3 - favManga.length }, () => 0).map(
                (fav, idx) => {
                  // let temp = favManga.length + 1;
                  return (
                    <div
                      key={idx}
                      className="w-[100px] h-[150px] bg-[#555555] rounded-xl text-[#999999] text-xl grid place-items-center"
                    >
                      {/* temp+idx */}
                    </div>
                  );
                }
              )}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default ProfileContainer;
