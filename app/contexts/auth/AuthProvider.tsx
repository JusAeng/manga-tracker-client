"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import Image from "next/image";
import { useLiff } from "react-liff";
import axiosInstance from "@/app/utils/axios";
import UseProfile from "@/app/hooks/UseProfile";
import { ProfileType } from "@/app/types/Profile";

import gif from "@/app/assets/pictures/dont-care-idc.gif";

// POST /auth returns the bare user row — no followedMangaIds, that's
// populated separately by ProfileProvider once the token is set.
interface IToken {
  token: string;
  profile: Omit<ProfileType, "followedMangaIds">;
}

const AuthProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const [loadingToken, setLoadingToken] = useState(true);
  const { error, isLoggedIn, isReady, liff } = useLiff();
  const { setProfile, setToken } = UseProfile();

  useEffect(() => {
    const initApp = async () => {
      const lineToken = liff.getIDToken();
      if (!lineToken) return;
      const response = await getUserData(lineToken);
      if (!response) return;

      const { token, profile } = response;
      setProfile({ ...profile, followedMangaIds: [] });
      setToken(token);
      // setLoadingToken(false);
    };

    if (!isLoggedIn) return;
    initApp();
  }, [liff, isLoggedIn, isReady, setProfile, setToken]);

  if (!isReady) {
    return (
      <div className="w-[100vw] h-[800vh] grid place-items-center">
        <div className="flex flex-col justify-center">
          <Image src={gif} alt="Picture of the author" />
          <div className="text-[#777777]">Loading</div>
        </div>
      </div>
    );
  }

  const getUserData = async (lineToken: string) => {
    try {
      // const response = await fetch(
      //   "https://mgt-backend-deploy-spk23ljzqq-as.a.run.app/auth",
      //   {
      //     method: "POST",
      //     body: JSON.stringify({
      //       token: lineToken,
      //     }),
      //   }
      // );
      // let res = await response.json();
      // return res;

      const response = await axiosInstance.post<IToken>("/auth", {
        token: lineToken,
      });
      return response.data;
    } catch (error) {
      alert(error);
      alert("catch");
      return null;
    }
  };

  //   if (!isReady || loadingToken) return <Welcome />;

  return <>{children}</>;
};

export default AuthProvider;
