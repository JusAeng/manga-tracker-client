import MenuBar from "../components/MenuBar";
import MangaContainer from "./MangaContainer";

const ShelfPage = () => {
  return (
    <main className="main-page flex flex-col gap-[20px]">
      <MenuBar head={"My Manga"} sort={true} search={true} />
      <MangaContainer />
    </main>
  );
};

export default ShelfPage;
