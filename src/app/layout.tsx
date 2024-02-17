import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import ParticleProviders from "./particleProviders";
import Navigate from "../components/navbar";

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
        <ParticleProviders>
          <Providers>
            <Navigate />
            {children}
          </Providers>
        </ParticleProviders>
      </body>
    </html>
  );
}
