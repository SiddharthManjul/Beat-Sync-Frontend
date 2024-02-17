"use client";

import React, { useState, useEffect } from "react";

import { ModalProvider } from "@particle-network/connect-react-ui"; // @particle-network/connectkit to use Auth Core
import { WalletEntryPosition } from "@particle-network/auth";
import { Ethereum, EthereumGoerli } from "@particle-network/chains";
import { evmWallets } from "@particle-network/connect";

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
      <ModalProvider
        options={{
          projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
          clientKey: process.env.NEXT_PUBLIC_CLIENT_KEY as string,
          appId: process.env.NEXT_PUBLIC_APP_ID as string,
          chains: [Ethereum, EthereumGoerli],
          particleWalletEntry: {
            //optional: particle wallet config
            displayWalletEntry: true, //display wallet button when connect particle success.
            defaultWalletEntryPosition: WalletEntryPosition.BR,
            supportChains: [Ethereum, EthereumGoerli],
            customStyle: {}, //optional: custom wallet style
          },
          securityAccount: {
            //optional: particle security account config
            //prompt set payment password. 0: None, 1: Once(default), 2: Always
            promptSettingWhenSign: 1,
            //prompt set master password. 0: None(default), 1: Once, 2: Always
            promptMasterPasswordSettingWhenLogin: 1,
          },
          wallets: evmWallets({
            projectId: "walletconnect projectId", //replace with walletconnect projectId
            showQrModal: false,
          }),
        }}
        theme={"auto"}
        language={"en"} //optional:localize, default en
        walletSort={["Particle Auth", "Wallet"]} //optional:walelt order
        particleAuthSort={[
          //optional:display particle auth items and order
          "email",
          "phone",
          "google",
          "apple",
          "facebook",
        ]}
      >
        {mounted && children}
      </ModalProvider>
    </React.StrictMode>
  );
}
