import MenuBar from "../components/MenuBar";
import axiosInstance from "../utils/axios";
import { fetchUtil } from "../utils/fetch";
import ShelfContainer from "./ShelfContainer";

const ShelfPage = async () => {
  // const res = await fetchUtil("/user/subscribelist");
  // const myManga = res;

  return (
    <main className="main-page flex flex-col gap-[20px]">
      <MenuBar head={"My Manga"} sort={false} search={false} />
      <ShelfContainer />
    </main>
  );
};

export default ShelfPage;
