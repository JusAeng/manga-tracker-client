// Every API/LIFF call in this app happens client-side ("use client"
// components running in the LINE in-app browser), so these need the
// NEXT_PUBLIC_ prefix to actually reach the browser bundle — a plain
// process.env.X here would only ever resolve server-side.
const configEnv = {
  API_BASE_URL:
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://mgt-backend-deploy-spk23ljzqq-as.a.run.app",
  LIFF_ID: process.env.NEXT_PUBLIC_LIFF_ID || "2002829031-VRBZNkb5",
  // Dev-only bypass for the real LIFF/LINE login — set this to skip
  // straight past LiffProvider/AuthProvider. Mint one with
  // `make devtoken` in manga-tracker-api-go, never set in production.
  DEV_TOKEN: process.env.NEXT_PUBLIC_DEV_TOKEN || "",
  // Frontend-only demo mode — every screen reads from app/mock/manga.ts
  // instead of the real API, and DevAuthProvider skips the network
  // entirely. Lets the app run and be screenshotted with zero backend.
  USE_MOCK_DATA: process.env.NEXT_PUBLIC_USE_MOCK_DATA === "true",
};

export default configEnv;
