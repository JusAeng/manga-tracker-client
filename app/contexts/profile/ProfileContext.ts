import { ProfileType } from "@/app/types/Profile";
import { Dispatch, SetStateAction, createContext } from "react";

interface IProfileContext {
  profile: ProfileType;
  setProfile: Dispatch<SetStateAction<ProfileType>>;
}

const ProfileContext = createContext({} as IProfileContext);

export default ProfileContext;
