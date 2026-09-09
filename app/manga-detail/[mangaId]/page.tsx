import MangaDetailContainer from "../MangaDetailContainer";

export default async function MangaDetailPage({
  params,
}: {
  params: { mangaId: string };
}) {
  return <MangaDetailContainer mangaId={params.mangaId} />;
}
