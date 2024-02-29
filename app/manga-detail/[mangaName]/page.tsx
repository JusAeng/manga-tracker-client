"use client";

import BackButton from "@/app/components/BackButton";
import VolumnCard from "../VolumnCard";
import ReadMoreContainer from "../ReadMoreContainer";
import UseNav from "@/app/hooks/UseNav";
import { useEffect } from "react";

export default function AnimeDetailPage({
  params,
}: {
  params: { mangaName: string };
}) {
  const { setNavText } = UseNav();
  useEffect(() => {
    setNavText("manga-detail");
  }, [setNavText]);
  return (
    <main className="bg-[#1e1e1f] min-h-screen">
      <section
        className="h-[32vh] bg-[#5c7df7] flex flex-col items-start justify-between pb-[15px]"
        style={{
          background:
            'url("https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/09/rent-a-girlfriend-episode-10-season-2-ruka-sarashina-kiss-whenever.jpg")',
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <BackButton size={26} color="#ffffff" />
        <div className="bg-[#ffffff] rounded-[5px] text-[12px] mb-[10px] ml-[5px] px-[4px]">
          Comady
        </div>
      </section>
      <section className="relative bottom-[15px]">
        <ReadMoreContainer />
        <div className="container flex flex-col gap-[5px] mt-[10px] pb-[50px]">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((v) => (
            <VolumnCard key={v} mangaName="Hunter" vol={v} />
          ))}
        </div>
      </section>
    </main>
  );
}
