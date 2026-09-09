"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import ProfileContext from "./ProfileContext";
import { ProfileType } from "@/app/types/Profile";
import { MangaType } from "@/app/types/Manga";
import axiosInstance from "@/app/utils/axios";
import configEnv from "@/app/config";

const ProfileProvider = ({ children }: PropsWithChildren) => {
  const [profile, setProfile] = useState({
    id: "",
    displayName: "",
    pictureUrl: "",
    followedMangaIds: [],
  } as ProfileType);
  const [token, setToken] = useState("");

  // Loaded once per login so follow buttons across the app can check
  // membership locally instead of a round-trip per card.
  useEffect(() => {
    if (!token) return;
    // DevAuthProvider's mock branch and Navbar's follow toggle both
    // already handle followedMangaIds locally in mock mode — this
    // effect is the real-backend path only.
    if (configEnv.USE_MOCK_DATA) return;
    const loadFollowing = async () => {
      try {
        const res = await axiosInstance.get<MangaType[]>("/user/following", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile((prev) => ({
          ...prev,
          followedMangaIds: res.data.map((m) => m.id),
        }));
      } catch (e) {
        console.log(e);
      }
    };
    loadFollowing();
  }, [token]);

  return (
    <ProfileContext.Provider value={{ profile, setProfile, token, setToken }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
