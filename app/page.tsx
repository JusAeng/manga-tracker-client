import HomeContainer from "./components/HomepageContainer";
import MenuBar from "./components/MenuBar";

export default function Home() {
  return (
    <main className="bg-[#1e1e1f]">
      <MenuBar head={"For you"} rank={true} search={true} />
      <HomeContainer />
    </main>
  );
}
