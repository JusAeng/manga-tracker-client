"use client";

import { PropsWithChildren, useEffect } from "react";
import axiosInstance from "@/app/utils/axios";
import UseProfile from "@/app/hooks/UseProfile";
import configEnv from "@/app/config";

// Dev-only stand-in for AuthProvider — skips the real LIFF/LINE login
// flow entirely and just uses NEXT_PUBLIC_DEV_TOKEN directly. Mint one
// with `make devtoken` in manga-tracker-api-go (needs a real user row to
// show real profile data — see that script's README section). Only
// mounted when DEV_TOKEN is set (see layout.tsx); the real
// LiffProvider/AuthProvider path is untouched and still used otherwise.
const DevAuthProvider = ({ children }: PropsWithChildren) => {
  const { setProfile, setToken } = UseProfile();

  useEffect(() => {
    if (configEnv.USE_MOCK_DATA) {
      // No backend at all in this mode — just enough state for the rest
      // of the app (which checks `token`/`profile` truthiness) to render.
      setToken("mock-token");
      setProfile((prev) => ({
        ...prev,
        id: "mock-user",
        displayName: "Demo User",
        pictureUrl: "",
      }));
      return;
    }

    setToken(configEnv.DEV_TOKEN);

    const loadProfile = async () => {
      try {
        const res = await axiosInstance.get("/user/profile", {
          headers: { Authorization: `Bearer ${configEnv.DEV_TOKEN}` },
        });
        setProfile((prev) => ({
          ...prev,
          id: res.data?.id ?? prev.id,
          displayName: res.data?.displayName ?? "Dev User",
          pictureUrl: res.data?.pictureUrl ?? "",
        }));
      } catch (e) {
        console.log("DevAuthProvider: failed to load /user/profile", e);
      }
    };
    loadProfile();
  }, [setProfile, setToken]);

  return <>{children}</>;
};

export default DevAuthProvider;
