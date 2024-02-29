import ImageUtil from "../components/ImageUtil";
import tt from "@/app/temp/tt.png";

const ProfilePage = () => {
  return (
    <main className="main-page">
      <section className="flex flex-col justify-center items-center h-[260px]">
        <ImageUtil image={tt} w={160} h={160} imageClass="rounded-[50%]" />
        <h2 className="text-center text-[24px] text-white">JusAeng</h2>
        <p className="text-center text-[12px] relative bottom-[2px] text-[#888888]">
          @123345567890
        </p>
      </section>
      <section>
        <div className="px-[10px] flex flex-col gap-[10px]">
          <section>
            <h3 className="text-[#dddddd]">Personal Infomation</h3>
            <div className="text-[#aaaaaa] mt-[6px]">
              <span>Total subscribe: </span>
              <span className="ml-[14px]">10</span>
              <br />
              <span>Total vols: </span>
              <span className="ml-[14px]">10</span>
            </div>
          </section>
          <section>
            <h3 className="text-[#dddddd]">Top 3 Manga</h3>
            <div className="text-[#aaaaaa] mt-[6px] flex justify-center gap-[20px]">
              <div className="w-[100px] h-[150px] bg-white rounded-[10px]"></div>
              <div className="w-[100px] h-[150px] bg-white rounded-[10px]"></div>
              <div className="w-[100px] h-[150px] bg-white rounded-[10px]"></div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default ProfilePage;
