import BackButton from "@/app/components/BackButton";
import VolumnCard from "../VolumnCard";
import ReadMoreContainer from "../ReadMoreContainer";

export default function AnimeDetailPage({
  params,
}: {
  params: { mangaName: string };
}) {
  return (
    <main>
      <div
        className="h-[30vh] bg-[#5c7df7]"
        // style={{
        //   background:
        //     'url("https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg")',
        // }}
      >
        <BackButton />
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
