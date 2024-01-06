import VolumnCard from "../VolumnCard";

export default function AnimeDetailPage({
  params,
}: {
  params: { animeName: string };
}) {
  return (
    <div>
      <div
        className="h-[30vh] bg-[#5c7df7]"
        // style={{
        //   background:
        //     'url("https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg")',
        // }}
      ></div>
      <div className="h-[10vh] bg-[#e1e6fa] mb-[10px]">
        detail {params.animeName}
      </div>
      <div className="container flex flex-col gap-[5px]">
        {[1, 2, 3, 4, 5].map((v) => (
          <VolumnCard key={v} animeName="Hunter" vol={v} />
        ))}
      </div>
    </div>
  );
}
