"use client";

import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import "./Styles.scss";
import { MangaDetailType } from "../types/Manga";

interface IProp {
  manga: MangaDetailType;
}

const ReadMoreContainer: React.FC<IProp> = ({ manga }) => {
  const [fullShow, setFullShow] = useState(false);
  const authorNames = (manga.authors ?? []).map((a) => a.name).join(", ");

  return (
    <main className="flex flex-col bg-bg w-full rounded-t-2xl px-5 pt-4">
      <h1 className="text-[21px] text-ink">
        {manga.titleEn || manga.titleOriginal}
      </h1>
      {authorNames && (
        <p className="text-ink-soft text-[13px] mt-0.5">{authorNames}</p>
      )}
      {manga.introduction && (
        <>
          <div
            className={
              "mt-2 " +
              (!fullShow
                ? "readmore-container-less"
                : "readmore-container-full")
            }
          >
            <p className="leading-5 text-[14px] text-ink">
              {manga.introduction}
            </p>
          </div>
          <button
            className="flex justify-center py-2 text-ink-faint"
            onClick={() => setFullShow(!fullShow)}
          >
            {!fullShow ? (
              <FaAngleDown size={16} />
            ) : (
              <FaAngleUp size={16} />
            )}
          </button>
        </>
      )}
    </main>
  );
};

export default ReadMoreContainer;
