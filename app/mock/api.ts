import {
  MangaDetailType,
  MangaRatingType,
  ThaiEditionType,
  VolumeType,
} from "@/app/types/Manga";
import { mockManga, mockThaiEditions, mockVolumes } from "./manga";

const delay = (ms = 0) => new Promise((r) => setTimeout(r, ms));

// In-memory only — resets on reload, same as every other mock store here.
// Keyed by mangaId; starts empty (no fake seed ratings).
const mockRatings: Record<string, { total: number; count: number; mine: number | null }> = {};

function ratingSummary(mangaId: string): MangaRatingType {
  const r = mockRatings[mangaId];
  if (!r || r.count === 0) return { averageRating: null, ratingCount: 0, myRating: r?.mine ?? null };
  return { averageRating: r.total / r.count, ratingCount: r.count, myRating: r.mine };
}

export async function mockGetMangaRating(
  mangaId: string,
): Promise<MangaRatingType> {
  await delay();
  return ratingSummary(mangaId);
}

export async function mockRateManga(
  mangaId: string,
  value: number,
): Promise<MangaRatingType> {
  await delay();
  const r = mockRatings[mangaId] ?? { total: 0, count: 0, mine: null };
  if (r.mine !== null) {
    r.total += value - r.mine;
  } else {
    r.total += value;
    r.count += 1;
  }
  r.mine = value;
  mockRatings[mangaId] = r;
  return ratingSummary(mangaId);
}

export async function mockClearRating(
  mangaId: string,
): Promise<MangaRatingType> {
  await delay();
  const r = mockRatings[mangaId];
  if (r && r.mine !== null) {
    r.total -= r.mine;
    r.count -= 1;
    r.mine = null;
  }
  return ratingSummary(mangaId);
}

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
