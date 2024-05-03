import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import SearchProvider from "./contexts/search/SearchProvider";
import NavProvider from "./contexts/nav/NavProvider";
import LiffProvider from "./contexts/auth/LiffProvider";
import AuthProvider from "./contexts/auth/AuthProvider";
import ProfileProvider from "./contexts/profile/ProfileProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manga Tracker App",
  description: "tracking your manga",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-[#1e1e1f] scrollbar-hide"}>
        <LiffProvider>
          <ProfileProvider>
            <AuthProvider>
              <NavProvider>
                <SearchProvider>
                  {children}
                  <Navbar />
                </SearchProvider>
              </NavProvider>
            </AuthProvider>
          </ProfileProvider>
        </LiffProvider>
      </body>
    </html>
  );
}
