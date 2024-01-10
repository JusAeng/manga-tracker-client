import MenuBar from "../components/MenuBar";
import ProfileCard from "./ProfileCard";

const ProfilePage = () => {
  return (
    <main className="bg-[#1e1e1f] min-h-screen">
      <MenuBar head={"My Profile"} />
      <div className="flex flex-col items-center mt-[20px]">
        <ProfileCard subscribe={12} books={144} />
      </div>
    </main>
  );
};

export default ProfilePage;
