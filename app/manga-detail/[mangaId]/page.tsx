import MangaDetailContainer from "../MangaDetailContainer";
import { MangaType } from "@/app/types/Manga";
import { fetchUtil } from "@/app/utils/fetch";

export default async function AnimeDetailPage({
  params,
}: {
  params: { mangaId: string };
}) {
  // const res = await fetchUtil(`/manga/${params.mangaId}`);
  // const data = res[0] as MangaType;
  return <MangaDetailContainer mangaId={params.mangaId} />;
}
