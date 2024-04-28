import { MangaType } from "../types/Manga";
import axiosInstance from "../utils/axios";

export function sumArrayLengths(
  ownerList: { [key: string]: number[] } | null
): number {
  if (ownerList === null) {
    return 0; // Return 0 if ownerList is null
  }

  let sum = 0;
  for (const key in ownerList) {
    if (Object.prototype.hasOwnProperty.call(ownerList, key)) {
      const array = ownerList[key];
      if (Array.isArray(array)) {
        sum += array.length;
      }
    }
  }

  return sum;
}

interface ITop3Manga {
  title: string;
  image: string;
}

export async function top3Manga(
  rateList: { [key: string]: number } | null,
  token: string
): Promise<ITop3Manga[]> {
  if (!rateList) {
    return [];
  }
  let result: ITop3Manga[] = [];
  const entries = Object.entries(rateList);
  entries.sort((a, b) => b[1] - a[1]);

  // Map each entry to a promise that fetches manga information
  const promises = entries.slice(0, 3).map(async (entry) => {
    const res = await axiosInstance.get(`/manga/${entry[0]}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { title, image } = res.data[0] as MangaType;
    return { title, image };
  });
  const mangaInfoArray = await Promise.all(promises);

  result.push(...mangaInfoArray);

  return result;
}
