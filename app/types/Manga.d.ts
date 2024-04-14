export type AnimeType = {
  name: string;
  author: string;
  image: string;
  lastEpisode: number;
};

export type MangaType = {
  _id: string;
  title: string;
  otherTitles: string[];
  author: string;
  otherParticipate: string[];
  genre: string;
  otherGenres: string[];
  image: string;
  introduction: string;
  publisher: string;
  firstDateJP: string;
  firstDateTH: string;
  vols: { [key: string]: Vol };
  lastVol: string;
  subscribers: number;
  score: number;
  totalVoters: number;
};

export type VolType = {
  mangaId: string;
  vol: string;
  image: string;
  publishDate: string;
  totalOwner: number;
};
