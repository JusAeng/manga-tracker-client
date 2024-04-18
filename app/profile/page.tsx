import axiosInstance from "../utils/axios";
import ProfileContainer from "./ProfileContainer";

const ProfilePage = async () => {
  const res = await axiosInstance.get("user/profile");
  const profile = res.data;

  return <ProfileContainer profile={profile} />;
};

export default ProfilePage;
