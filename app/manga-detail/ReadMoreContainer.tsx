"use client";

import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import "./Styles.scss";
import { MangaType } from "../types/Manga";

interface IProp {
  manga: MangaType;
}

const GradientText: React.FC<IProp> = ({ manga }) => {
  const [fullShow, setFullShow] = useState(false);

  return (
    <main className="flex flex-col bg-[#1e1e1f] w-[100vw] rounded-t-[20px] px-[12px]">
      <div className="mt-[5px]">
        <div className="flex items-center justify-between">
          <h3 className="text-[22px] text-[#ffffff]">{manga.title}</h3>
          <div className="flex items-center gap-[6px] relative">
            <FaStar size={18} color={"#f7bc63"} />
            <h3 className="text-[18px] text-[#ffffff] mt-[3px]">
              {manga.score}
            </h3>
          </div>
        </div>
        <div className="flex gap-[5px]">
          <span className="text-[#dddddd]">{manga.author},</span>
          <span className="text-[#dddddd]">
            {manga.vols ? manga.vols.length : 0} vols,
          </span>
          <span className="text-[#dddddd]">
            {" "}
            {manga.subscribers} subscribers
          </span>
        </div>
      </div>
      <div
        className={
          !fullShow ? " readmore-container-less" : " readmore-container-full"
        }
      >
        <p className="leading-4 mt-[2px] text-[#ffffff]">
          {/* Lorem, ipsum dolor sit amet consectetur adipis icing elit. Ullam
          deserunt voluptate voluptates ab neque porro aliquid totam recusandae
          ratione repellendus. Consequatur reprehenderit error quae sapiente,
          soluta cum repellendus quis aperiam. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dicta eligendi debitis quia accusantium,
          voluptate ratione recusandae error nulla reprehenderit consectetur
          quos quis temporibus sequi incidunt vero atque unde doloribus
          excepturi. */}
          {manga.introduction}
        </p>
      </div>
      <button
        className="flex justify-center py-[4px]"
        onClick={() => setFullShow(!fullShow)}
      >
        {!fullShow ? (
          <FaAngleDown size={18} color={"#ffffff"} />
        ) : (
          <FaAngleUp size={18} color={"#ffffff"} />
        )}
      </button>
    </main>
  );
};

export default GradientText;
