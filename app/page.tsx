import AnimeCard from "./components/AnimeCard";

export default function Home() {
  return (
    <main className="bg-[#f0f6ff] h-[100vh]">
      <AnimeCard
        image={
          "https://static.wikia.nocookie.net/rehero/images/4/44/Megumin.jpg/revision/latest/scale-to-width-down/1200?cb=20180330001646"
        }
        name={"One Piece"}
        author={"Endo"}
        lastChaper={17}
      />
      <AnimeCard
        image={
          "https://static.wikia.nocookie.net/rehero/images/4/44/Megumin.jpg/revision/latest/scale-to-width-down/1200?cb=20180330001646"
        }
        name={"One Piece"}
        author={"Endo"}
        lastChaper={17}
      />
    </main>
  );
}
