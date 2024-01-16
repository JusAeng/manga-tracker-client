"use client";
// import Welcome from 'components/welcome';
import { PropsWithChildren, useEffect, useState } from "react";
import { useLiff } from "react-liff";
// import axios from 'utils/axios';

interface IToken {
  token: string;
}

const AuthProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const [loadingToken, setLoadingToken] = useState(true);
  const { error, isLoggedIn, isReady, liff } = useLiff();

  useEffect(() => {
    if (!isLoggedIn) return;

    initApp();
  }, [liff, isLoggedIn]);

  const initApp = async () => {
    const tokenId = liff.getIDToken();
    if (!tokenId) return;
    alert(tokenId);
    // const response = await getUserData(tokenId);
    // if (!response) return;

    // const { token } = response;

    // axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    // setLoadingToken(false);
  };

  const getUserData = async (userId: string) => {
    //     try {
    //       const response = await axios.post<IToken>('/auth', {
    //         userId,
    //       });
    //       return response.data;
    //     } catch (error) {
    //       return null;
    //     }
    return null;
  };

  //   if (!isReady || loadingToken) return <Welcome />;

  return <>{children}</>;
};

export default AuthProvider;
