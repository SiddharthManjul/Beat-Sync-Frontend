import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navigate from "../components/navbar";
import { AuthType } from '@particle-network/auth-core';
import { EthereumGoerli } from '@particle-network/chains';
import { AuthCoreContextProvider, PromptSettingType } from '@particle-network/auth-core-modal';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beat Sync",
  description: "Song Staking Decentralized App for DJs & parties",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navigate />
          {children}
        </Providers>
      </body>
    </html>
  );
}
