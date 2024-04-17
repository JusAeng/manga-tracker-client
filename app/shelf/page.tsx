import MenuBar from "../components/MenuBar";
import axiosInstance from "../utils/axios";
import ShelfContainer from "./ShelfContainer";

const ShelfPage = async () => {
  const res = await axiosInstance.get("/user/subscribelist");
  const myManga = res.data;

  return (
    <main className="main-page flex flex-col gap-[20px]">
      <MenuBar head={"My Manga"} sort={false} search={false} />
      <ShelfContainer MangaOnShelf={myManga} />
    </main>
  );
};

export default ShelfPage;
