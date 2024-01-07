import MenuBar from "../components/MenuBar";
import ProfileCard from "./ProfileCard";

const ProfilePage = () => {
  return (
    <main>
      <MenuBar head={"Profile Page"} />
      <div className="flex flex-col items-center mt-[20px]">
        <ProfileCard />
      </div>
    </main>
  );
};

export default ProfilePage;
