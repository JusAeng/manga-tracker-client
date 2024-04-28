import MenuBar from "../components/MenuBar";
import ShelfContainer from "./ShelfContainer";

const ShelfPage = async () => {
  return (
    <main className="main-page flex flex-col gap-[20px]">
      <MenuBar head={"My Manga"} sort={false} search={false} />
      <ShelfContainer />
    </main>
  );
};

export default ShelfPage;
