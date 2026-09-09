import {
  MangaDetailType,
  ThaiEditionType,
  VolumeType,
} from "@/app/types/Manga";
import { mockManga, mockThaiEditions, mockVolumes } from "./manga";

const delay = (ms = 0) => new Promise((r) => setTimeout(r, ms));

export async function mockGetManga(q?: string): Promise<MangaDetailType[]> {
  await delay();
  if (!q) return mockManga;
  const needle = q.toLowerCase();
  return mockManga.filter(
    (m) =>
      m.titleEn.toLowerCase().includes(needle) ||
      m.titleOriginal.toLowerCase().includes(needle),
  );
}

export async function mockGetMangaById(
  id: string,
): Promise<MangaDetailType | null> {
  await delay();
  return mockManga.find((m) => m.id === id) ?? null;
}

export async function mockGetThaiEditions(
  mangaId: string,
): Promise<ThaiEditionType[]> {
  await delay();
  return mockThaiEditions[mangaId] ?? [];
}

export async function mockGetVolumes(
  thaiEditionId: string,
): Promise<VolumeType[]> {
  await delay();
  return mockVolumes[thaiEditionId] ?? [];
}

// A handful of "picks" per home-screen section — same list, different
// slice, close enough for previewing the layout without a real
// recommendation engine (which is what the real /manga/trending etc.
// placeholder endpoints do anyway — see manga-tracker-api-go's README).
export async function mockGetSection(
  mode: "trending" | "recommend" | "new",
): Promise<MangaDetailType[]> {
  await delay();
  if (mode === "trending") return mockManga.slice(0, 3);
  if (mode === "new") return mockManga.slice(3, 6);
  return [...mockManga].reverse();
}
