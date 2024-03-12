import MenuBar from "../components/MenuBar";
import MangaContainer from "./MangaContainer";

const ShelfPage = () => {
  return (
    <main className="main-page flex flex-col gap-[20px]">
      <MenuBar head={"My Manga"} sort={false} search={false} />
      <MangaContainer />
    </main>
  );
};

export default ShelfPage;
