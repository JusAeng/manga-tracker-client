"use client";

import React, { PropsWithChildren } from "react";
import { LiffProvider as LineLiffProvider } from "react-liff";
import configEnv from "@/app/config";

const LiffProvider = ({ children }: PropsWithChildren) => {
  return (
    <LineLiffProvider liffId={configEnv.LIFF_ID}>{children}</LineLiffProvider>
  );
};

export default LiffProvider;
