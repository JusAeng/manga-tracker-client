import { ProfileType } from "../types/Profile";
import { fetchUtil } from "../utils/fetch";
import ProfileContainer from "./ProfileContainer";

const ProfilePage = async () => {
  const profile =
    (await fetchUtil("/user/profile", {
      cache: "no-store",
    })) || ({} as ProfileType);

  return <ProfileContainer profile={profile} />;
};

export default ProfilePage;
