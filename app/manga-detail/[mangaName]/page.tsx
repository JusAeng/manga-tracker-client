import BackButton from "@/app/components/BackButton";
import VolumnCard from "../VolumnCard";
import ReadMoreContainer from "../ReadMoreContainer";

export default function AnimeDetailPage({
  params,
}: {
  params: { mangaName: string };
}) {
  return (
    <main className="bg-[#1e1e1f] min-h-screen">
      <div
        className="h-[30vh] bg-[#5c7df7] flex flex-col items-start justify-between"
        style={{
          background:
            'url("https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/09/rent-a-girlfriend-episode-10-season-2-ruka-sarashina-kiss-whenever.jpg")',
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <BackButton />
        <div className="bg-[#ffffff] rounded-[5px] text-[12px] mb-[10px] ml-[5px] px-[4px]">
          Comady
        </div>
      </div>
      <ReadMoreContainer />
      <div className="container flex flex-col gap-[5px] mt-[10px]">
        {[1, 2, 3, 4, 5].map((v) => (
          <VolumnCard key={v} mangaName="Hunter" vol={v} />
        ))}
      </div>
    </main>
  );
}
