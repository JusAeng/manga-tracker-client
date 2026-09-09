import HomeContainer from "./components/HomepageContainer";
import MenuBar from "./components/MenuBar";

export default function Home() {
  return (
    <main className="bg-bg min-h-screen">
      <MenuBar head={"Manga for you"} />
      <HomeContainer />
    </main>
  );
}
