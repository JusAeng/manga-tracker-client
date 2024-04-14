export type ProfileType = {
  _id: string;
  name: string;
  image: string;
  totalSubscribe: number;
  totalBooks: number;
  subscribeList: string[] | null;
  ownerList: { [key: string]: number[] } | null;
  rateList: { [key: string]: number } | null;
};
