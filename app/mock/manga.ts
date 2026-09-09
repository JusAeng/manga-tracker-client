// Local, frontend-only mock data — lets the app be previewed/demoed
// without a running backend. Wired in via NEXT_PUBLIC_USE_MOCK_DATA (see
// app/config/index.ts and app/mock/api.ts). Shapes mirror exactly what
// manga-tracker-api-go actually returns (models/*.go), so swapping the
// flag off requires no component changes.

import {
  MangaDetailType,
  ThaiEditionType,
  VolumeType,
} from "@/app/types/Manga";

const cover = (seed: string) => `https://picsum.photos/seed/${seed}/600/900`;
const thumb = (seed: string) => `https://picsum.photos/seed/${seed}-vol/200/300`;

export const mockManga: MangaDetailType[] = [
  {
    id: "mock-1",
    titleOriginal: "彷徨いの刃",
    titleEn: "Wandering Blade",
    introduction:
      "After the war ends, a lone swordsman wanders the countryside searching for a purpose beyond the battlefield he once knew.",
    imageUrl: cover("wandering-blade"),
    firstDateJp: "2018-04-12",
    status: "ongoing",
    authors: [{ authorId: "a1", name: "Kenji Aoyama", role: "author" }],
    genres: [
      { id: "g1", name: "Action" },
      { id: "g2", name: "Historical" },
    ],
  },
  {
    id: "mock-2",
    titleOriginal: "星屑のカフェ",
    titleEn: "Stardust Café",
    introduction:
      "A small café at the edge of town where every customer's story quietly unfolds over a cup of coffee.",
    imageUrl: cover("stardust-cafe"),
    firstDateJp: "2020-09-01",
    status: "ongoing",
    authors: [{ authorId: "a2", name: "Mio Sakurai", role: "author" }],
    genres: [
      { id: "g3", name: "Slice of Life" },
      { id: "g4", name: "Drama" },
    ],
  },
  {
    id: "mock-3",
    titleOriginal: "深海のリヴァイア",
    titleEn: "Leviathan of the Deep",
    introduction:
      "A crew of salvage divers uncovers something ancient beneath the trench — and it's still very much alive.",
    imageUrl: cover("leviathan-deep"),
    firstDateJp: "2016-01-20",
    status: "completed",
    authors: [
      { authorId: "a3", name: "Ryo Kitagawa", role: "story" },
      { authorId: "a4", name: "Nana Ezaki", role: "artist" },
    ],
    genres: [
      { id: "g1", name: "Action" },
      { id: "g5", name: "Horror" },
      { id: "g6", name: "Mystery" },
    ],
  },
  {
    id: "mock-4",
    titleOriginal: "魔法学院の落ちこぼれ",
    titleEn: "The Academy's Failing Mage",
    introduction:
      "Ranked dead last in a school of prodigies, Yuna discovers her 'useless' magic might be the one thing no one else can do.",
    imageUrl: cover("failing-mage"),
    firstDateJp: "2021-03-15",
    status: "ongoing",
    authors: [{ authorId: "a5", name: "Haru Tsukishima", role: "author" }],
    genres: [
      { id: "g7", name: "Fantasy" },
      { id: "g8", name: "School" },
      { id: "g2", name: "Comedy" },
    ],
  },
  {
    id: "mock-5",
    titleOriginal: "鉄槌の刻",
    titleEn: "Hour of the Hammer",
    introduction:
      "In a city run by rival mech-fighting guilds, a disgraced engineer builds one last machine to settle an old score.",
    imageUrl: cover("hour-hammer"),
    firstDateJp: "2019-07-08",
    status: "ongoing",
    authors: [{ authorId: "a6", name: "Daichi Nomura", role: "author" }],
    genres: [
      { id: "g1", name: "Action" },
      { id: "g9", name: "Sci-Fi" },
    ],
  },
  {
    id: "mock-6",
    titleOriginal: "夜行バスの終点",
    titleEn: "Last Stop of the Night Bus",
    introduction:
      "Six strangers on the last bus out of the city each carry a secret — and the driver seems to know all of them.",
    imageUrl: cover("night-bus"),
    firstDateJp: "2022-11-02",
    status: "ongoing",
    authors: [{ authorId: "a7", name: "Emi Kondo", role: "author" }],
    genres: [
      { id: "g6", name: "Mystery" },
      { id: "g4", name: "Drama" },
    ],
  },
];

export const mockThaiEditions: Record<string, ThaiEditionType[]> = {
  "mock-1": [
    {
      id: "mock-1-ed1",
      mangaId: "mock-1",
      publisherId: "p1",
      titleTh: "ดาบร่อนเร่",
      firstDateTh: "2019-02-10",
    },
  ],
  "mock-2": [
    {
      id: "mock-2-ed1",
      mangaId: "mock-2",
      publisherId: "p2",
      titleTh: "คาเฟ่ผงดาว",
      firstDateTh: "2021-05-20",
    },
  ],
  "mock-3": [
    {
      id: "mock-3-ed1",
      mangaId: "mock-3",
      publisherId: "p1",
      titleTh: "เลวีอาธานใต้สมุทร",
      firstDateTh: "2017-08-01",
    },
  ],
  "mock-4": [
    {
      id: "mock-4-ed1",
      mangaId: "mock-4",
      publisherId: "p3",
      titleTh: "นักเวทย์บ๊องท้ายห้อง",
      firstDateTh: "2022-01-12",
    },
  ],
  "mock-5": [
    {
      id: "mock-5-ed1",
      mangaId: "mock-5",
      publisherId: "p2",
      titleTh: "ยามค้อนเหล็กประหาร",
      firstDateTh: "2020-06-18",
    },
  ],
  "mock-6": [
    {
      id: "mock-6-ed1",
      mangaId: "mock-6",
      publisherId: "p3",
      titleTh: "ปลายทางรถบัสราตรี",
      firstDateTh: "2023-03-09",
    },
  ],
};

const volumesFor = (thaiEditionId: string, count: number): VolumeType[] =>
  Array.from({ length: count }, (_, i) => ({
    id: `${thaiEditionId}-v${i + 1}`,
    thaiEditionId,
    volumeNumber: i + 1,
    isbn: null,
    publishDate: `2023-0${(i % 9) + 1}-15`,
    price: 95 + i * 5,
    imageUrl: thumb(`${thaiEditionId}-${i + 1}`),
    status: "released",
  }));

export const mockVolumes: Record<string, VolumeType[]> = {
  "mock-1-ed1": volumesFor("mock-1-ed1", 6),
  "mock-2-ed1": volumesFor("mock-2-ed1", 3),
  "mock-3-ed1": volumesFor("mock-3-ed1", 8),
  "mock-4-ed1": volumesFor("mock-4-ed1", 4),
  "mock-5-ed1": volumesFor("mock-5-ed1", 5),
  "mock-6-ed1": volumesFor("mock-6-ed1", 2),
};
