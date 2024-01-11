export type AnimeType = {
  name: string;
  author: string;
  image: string;
  lastEpisode: number;
};

export type MangaType = {
  id: string;
  name: string;
  otherNames: string[];
  image: string;
  author: string;
  publisher: string;
  introduction: string;
  genre: string;
  otherGenres: string[];
  vols: number[];
  volImages: string[];
  subscribers: number;
  score: number;
  voter: number;
};
