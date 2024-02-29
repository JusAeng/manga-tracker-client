import ImageUtil from "../components/ImageUtil";
import tt from "@/app/temp/tt.png";

const ProfilePage = () => {
  return (
    <main className="main-page">
      <section className="flex flex-col justify-center items-center h-[260px] bg-[#555555]">
        <ImageUtil image={tt} w={160} h={160} imageClass="rounded-[50%]" />
        <h2 className="text-center text-[24px]">JusAeng</h2>
        <p className="text-center text-[12px] relative bottom-[3px]">
          @123345567890
        </p>
      </section>
      <section>
        <div>
          <h3>Personal Infomation</h3>
          <p>All manga: </p>
          <p>Total vols: </p>
        </div>
      </section>
    </main>
  );
};

export default ProfilePage;
