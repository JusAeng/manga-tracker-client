"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { MangaDetailType } from "@/app/types/Manga";

interface IProp {
  manga: MangaDetailType;
}

const HighlightHero: React.FC<IProp> = ({ manga }) => {
  const router = useRouter();
  const title = manga.titleEn || manga.titleOriginal;
  const goToDetail = () => router.push(`/manga-detail/${manga.id}`);

  return (
    <section
      className="relative h-[52vh] min-h-[380px] cursor-pointer"
      onClick={goToDetail}
    >
      <Image
        src={manga.imageUrl}
        alt=""
        fill
        sizes="100vw"
        priority
        style={{ objectFit: "cover" }}
      />
      {/* fade into the page background at the bottom, darken at the top
          so the FEATURED badge stays readable over any cover art */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/35 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-transparent" />

      <div className="absolute top-5 left-5">
        <span className="bg-accent text-accent-ink text-[11px] font-bold px-2.5 py-1 rounded-full tracking-wide">
          FEATURED
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 px-5 pb-6">
        {manga.genres && manga.genres.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-2">
            {manga.genres.slice(0, 3).map((g) => (
              <span
                key={g.id}
                className="bg-white/10 backdrop-blur-md text-ink text-[11px] font-medium px-2.5 py-1 rounded-full border border-white/10"
              >
                {g.name}
              </span>
            ))}
          </div>
        )}
        <h2 className="text-[26px] text-ink leading-tight mb-1">{title}</h2>
        {manga.introduction && (
          <p className="text-ink-soft text-[13px] leading-snug line-clamp-2 mb-4">
            {manga.introduction}
          </p>
        )}
        <button
          onClick={(e) => {
            e.stopPropagation();
            goToDetail();
          }}
          className="flex items-center gap-2 bg-ink text-bg font-semibold text-[14px] px-5 py-2.5 rounded-full"
        >
          <FaPlay size={12} />
          View
        </button>
      </div>
    </section>
  );
};

export default HighlightHero;
