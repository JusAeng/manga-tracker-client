"use client";

import BackButton from "@/app/components/BackButton";
import Image from "next/image";
import VolumnCard from "./VolumnCard";
import ReadMoreContainer from "./ReadMoreContainer";
import { useEffect, useState } from "react";
import {
  MangaDetailType,
  MangaRatingType,
  ThaiEditionType,
  VolumeType,
} from "../types/Manga";
import UseProfile from "../hooks/UseProfile";
import axiosInstance from "../utils/axios";
import configEnv from "../config";
import {
  mockClearRating,
  mockGetMangaById,
  mockGetMangaRating,
  mockGetThaiEditions,
  mockGetVolumes,
  mockRateManga,
} from "../mock/api";

interface IProp {
  mangaId: string;
}

interface EditionWithVolumes {
  edition: ThaiEditionType;
  volumes: VolumeType[];
}

const MangaDetailContainer: React.FC<IProp> = ({ mangaId }) => {
  const [manga, setManga] = useState<MangaDetailType | null>(null);
  const [editions, setEditions] = useState<EditionWithVolumes[]>([]);
  const [rating, setRating] = useState<MangaRatingType | null>(null);
  const { token } = UseProfile();

  useEffect(() => {
    const loadData = async () => {
      try {
        if (configEnv.USE_MOCK_DATA) {
          const m = await mockGetMangaById(mangaId);
          setManga(m);
          const eds = await mockGetThaiEditions(mangaId);
          const withVols = await Promise.all(
            eds.map(async (edition) => ({
              edition,
              volumes: await mockGetVolumes(edition.id),
            }))
          );
          setEditions(withVols);
          setRating(await mockGetMangaRating(mangaId));
          return;
        }

        const headers = { Authorization: `Bearer ${token}` };

        const mangaRes = await axiosInstance.get<MangaDetailType>(
          `/manga/${mangaId}`,
          { headers }
        );
        setManga(mangaRes.data);

        const [editionsRes, ratingRes] = await Promise.all([
          axiosInstance.get<ThaiEditionType[]>(
            `/manga/${mangaId}/thai-editions`,
            { headers }
          ),
          axiosInstance.get<MangaRatingType>(`/manga/${mangaId}/rating`, {
            headers,
          }),
        ]);
        setRating(ratingRes.data);
        const withVolumes = await Promise.all(
          editionsRes.data.map(async (edition) => {
            const volumesRes = await axiosInstance.get<VolumeType[]>(
              `/thai-editions/${edition.id}/volumes`,
              { headers }
            );
            return { edition, volumes: volumesRes.data };
          })
        );
        setEditions(withVolumes);
      } catch (e) {
        console.log(e);
      }
    };
    loadData();
  }, [mangaId, token]);

  const handleRate = async (value: number) => {
    try {
      if (configEnv.USE_MOCK_DATA) {
        setRating(await mockRateManga(mangaId, value));
        return;
      }
      const res = await axiosInstance.put<MangaRatingType>(
        `/user/rating/${mangaId}`,
        { rating: value },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setRating(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleClearRating = async () => {
    try {
      if (configEnv.USE_MOCK_DATA) {
        setRating(await mockClearRating(mangaId));
        return;
      }
      const res = await axiosInstance.delete<MangaRatingType>(
        `/user/rating/${mangaId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setRating(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  if (!manga) return null;

  return (
    <main className="bg-bg min-h-screen">
      <section className="relative h-[38vh] min-h-[280px]">
        <Image
          src={manga.imageUrl}
          alt=""
          fill
          sizes="100%"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-black/30" />
        <div className="absolute top-0 left-0 right-0 pt-4 px-4">
          <BackButton
            size={18}
            color="#ffffff"
            classAdd="p-2.5 rounded-full bg-black/40 backdrop-blur-md"
          />
        </div>
        {manga.genres && manga.genres.length > 0 && (
          <div className="absolute bottom-4 left-5 right-5 flex flex-wrap gap-1.5">
            {manga.genres.map((g) => (
              <span
                key={g.id}
                className="bg-black/40 backdrop-blur-md text-ink text-[11px] font-medium px-2.5 py-1 rounded-full border border-white/10"
              >
                {g.name}
              </span>
            ))}
          </div>
        )}
      </section>

      <section className="relative -mt-4 z-10">
        <ReadMoreContainer
          manga={manga}
          rating={rating}
          onRate={handleRate}
          onClearRating={handleClearRating}
        />
        <div className="px-5 flex flex-col gap-5 mt-1 pb-28">
          {editions.map(({ edition, volumes }) => (
            <div key={edition.id}>
              <div className="flex items-baseline justify-between mb-2">
                <h4 className="text-ink text-[15px] font-semibold">
                  {edition.titleTh}
                </h4>
                {edition.firstDateTh && (
                  <span className="text-ink-faint text-[12px]">
                    {edition.firstDateTh.slice(0, 10)}
                  </span>
                )}
              </div>
              <div className="bg-surface border border-border rounded-2xl overflow-hidden">
                {volumes.map((vol) => (
                  <VolumnCard
                    key={vol.id}
                    image={vol.imageUrl}
                    volumeNumber={vol.volumeNumber}
                    publishDate={vol.publishDate}
                  />
                ))}
                {volumes.length === 0 && (
                  <div className="px-4 py-6 text-center text-ink-faint text-[13px]">
                    No volumes yet.
                  </div>
                )}
              </div>
            </div>
          ))}
          {editions.length === 0 && (
            <div className="text-center text-ink-faint text-[13px] pt-2">
              No Thai edition yet.
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default MangaDetailContainer;
