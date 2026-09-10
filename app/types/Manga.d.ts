export type MangaType = {
  id: string;
  titleOriginal: string;
  titleEn: string;
  introduction: string;
  imageUrl: string;
  firstDateJp: string | null;
  status: string;
};

export type MangaAuthorType = {
  authorId: string;
  name: string;
  role: string;
};

export type GenreType = {
  id: string;
  name: string;
};

// What GET /manga/:id actually returns.
export type MangaDetailType = MangaType & {
  authors: MangaAuthorType[] | null;
  genres: GenreType[] | null;
};

// What GET /manga/:id/rating returns, and what PUT/DELETE
// /user/rating/:id return after rating/un-rating.
export type MangaRatingType = {
  averageRating: number | null;
  ratingCount: number;
  myRating: number | null;
};

export type ThaiEditionType = {
  id: string;
  mangaId: string;
  publisherId: string;
  titleTh: string;
  firstDateTh: string | null;
};

export type VolumeType = {
  id: string;
  thaiEditionId: string;
  volumeNumber: number;
  isbn: string | null;
  publishDate: string | null;
  price: number | null;
  imageUrl: string;
  status: string;
};
