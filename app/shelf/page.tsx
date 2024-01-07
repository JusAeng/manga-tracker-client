import MenuBar from "../components/MenuBar";
import MangaContainer from "./MangaContainer";

const ShelfPage = () => {
  return (
    <main>
      <MenuBar head={"My Manga"} sort={true} search={true} />
      <MangaContainer />
    </main>
  );
};

export default ShelfPage;
