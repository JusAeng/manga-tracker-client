import axiosInstance from "@/app/utils/axios";
import MangaDetailContainer from "../MangaDetailContainer";
import { MangaType } from "@/app/types/Manga";

export default async function AnimeDetailPage({
  params,
}: {
  params: { mangaId: string };
}) {
  const res = await axiosInstance.get(`/manga/${params.mangaId}`);
  const data = res.data[0] as MangaType;
  return <MangaDetailContainer manga={data} />;
}
