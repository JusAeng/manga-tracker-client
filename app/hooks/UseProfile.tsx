import { useContext } from "react";
import ProfileContext from "../contexts/profile/ProfileContext";

const UseProfile = () => {
  const context = useContext(ProfileContext);

  if (!context) {
    throw new Error("UseProfile must be used within a ProfileProvider");
  }

  return context;
};

export default UseProfile;
