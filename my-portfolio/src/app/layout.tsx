import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackgroundParticles from "@/components/BackgroundParticles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mayank Rathod's Portfolio",
  description: "A passionate Full-Stack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BackgroundParticles />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}