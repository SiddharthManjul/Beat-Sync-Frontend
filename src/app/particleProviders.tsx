"use client";

import React, { useState, useEffect } from "react";

import { AuthType } from "@particle-network/auth-core";
import { EthereumGoerli } from "@particle-network/chains";
import {
  AuthCoreContextProvider,
  PromptSettingType,
} from "@particle-network/auth-core-modal";
require("dotenv").config();

export default function ParticleProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <React.StrictMode>
      <AuthCoreContextProvider
        options={{
          projectId: process.env.REACT_APP_PROJECT_ID as string,
          clientKey: process.env.REACT_APP_CLIENT_KEY as string,
          appId: process.env.REACT_APP_APP_ID as string,
          authTypes: [AuthType.email, AuthType.google, AuthType.twitter],
          themeType: "dark",
          fiatCoin: "USD",
          language: "en",
          erc4337: {
            name: "SIMPLE",
            version: "1.0.0",
          },
          promptSettingConfig: {
            promptPaymentPasswordSettingWhenSign: PromptSettingType.first,
            promptMasterPasswordSettingWhenLogin: PromptSettingType.first,
          },
          wallet: {
            visible: true,
            customStyle: {
              supportChains: [EthereumGoerli],
            },
          },
        }}
      >
        {mounted && children}
      </AuthCoreContextProvider>
    </React.StrictMode>
  );
}
