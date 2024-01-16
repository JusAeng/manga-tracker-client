"use client";

import React, { PropsWithChildren } from "react";
import { LiffProvider as LineLiffProvider } from "react-liff";

const LiffProvider = ({ children }: PropsWithChildren) => {
  return (
    <LineLiffProvider liffId="2002829031-VRBZNkb5">{children}</LineLiffProvider>
  );
};

export default LiffProvider;
