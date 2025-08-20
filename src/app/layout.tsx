import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackgroundParticles from "@/components/BackgroundParticles"; // <-- Make sure it's imported
import { ThemeProvider } from "@/providers/ThemeProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Portfolio", // You can change this
  description: "My awesome portfolio", // You can change this
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BackgroundParticles /> {/* <-- It should be here */}
        <div className="relative z-10">{children}</div> {/* <-- Children must be wrapped in a div */}
      </body>
    </html>
  );
}