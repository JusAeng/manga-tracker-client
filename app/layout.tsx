import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import SearchProvider from "./contexts/search/SearchProvider";
import NavProvider from "./contexts/nav/NavProvider";
import LiffProvider from "./contexts/auth/LiffProvider";
import AuthProvider from "./contexts/auth/AuthProvider";
import DevAuthProvider from "./contexts/auth/DevAuthProvider";
import ProfileProvider from "./contexts/profile/ProfileProvider";
import configEnv from "./config";

export const metadata: Metadata = {
  title: "Manga Tracker App",
  description: "tracking your manga",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // NEXT_PUBLIC_DEV_TOKEN or NEXT_PUBLIC_USE_MOCK_DATA set → skip LIFF/
  // LINE entirely for local dev. Unset (the normal/production case) →
  // the real flow, untouched.
  const useDevAuth = Boolean(configEnv.DEV_TOKEN) || configEnv.USE_MOCK_DATA;

  const app = (
    <NavProvider>
      <SearchProvider>
        {children}
        <Navbar />
      </SearchProvider>
    </NavProvider>
  );

  return (
    <html lang="en">
      <body className="bg-bg text-ink scrollbar-hide">
        {useDevAuth ? (
          <ProfileProvider>
            <DevAuthProvider>{app}</DevAuthProvider>
          </ProfileProvider>
        ) : (
          <LiffProvider>
            <ProfileProvider>
              <AuthProvider>{app}</AuthProvider>
            </ProfileProvider>
          </LiffProvider>
        )}
      </body>
    </html>
  );
}
