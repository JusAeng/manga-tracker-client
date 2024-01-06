import MenuBar from "./components/MenuBar";

export default function Home() {
  return (
    <main className="bg-[#ffffff]">
      <MenuBar head={"Homepage"} rank={true} search={true} />
      <p>This is homepage</p>
    </main>
  );
}
