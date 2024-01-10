import MenuBar from "../components/MenuBar";
import MangaContainer from "./MangaContainer";

const ShelfPage = () => {
  return (
    <main className="min-h-screen bg-[#1e1e1f]">
      <MenuBar head={"My Manga"} sort={true} search={true} />
      <MangaContainer />
    </main>
  );
};

export default ShelfPage;
