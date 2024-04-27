"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import ProfileContext from "./ProfileContext";
import { ProfileType } from "@/app/types/Profile";
import axiosInstance from "@/app/utils/axios";

const ProfileProvider = ({ children }: PropsWithChildren) => {
  const [profile, setProfile] = useState({
    _id: "",
    name: "",
    image: "",
    totalSubscribe: 0,
    totalBooks: 0,
    subscribeList: [],
    ownerList: {},
    rateList: {},
  } as ProfileType);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/user/profile");
        if (response.status != 200) {
          throw new Error("Failed to fetch data");
        }
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // Clean-up function
    return () => {};
  }, []);

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
