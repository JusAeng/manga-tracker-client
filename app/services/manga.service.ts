import { MangaType } from "../types/Manga";

export function sortingManga(
  manga1: MangaType,
  manga2: MangaType,
  sortOrder: "asc" | "desc" = "asc"
): number {
  const name1 = manga1.title.toLowerCase();
  const name2 = manga2.title.toLowerCase();

  let comparison = 0;
  if (name1 > name2) {
    comparison = 1;
  } else if (name1 < name2) {
    comparison = -1;
  }

  return sortOrder === "asc" ? comparison : -comparison;
}
