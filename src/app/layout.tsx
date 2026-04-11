import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubtleAmbient from "@/components/SubtleAmbient";

const gtSuper = localFont({
  src: [
    {
      path: "../../fonts/GT-Super-Display-Regular-Trial.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/GT-Super-Display-Medium-Trial.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/GT-Super-Display-Bold-Trial.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gt-super",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Canada Decoded — Immigration Pathways, Decoded.",
  description:
    "We decode pathways, break down real strategies, and connect you to the right opportunities. Canada isn't complicated — it's just not explained properly.",
  keywords: [
    "Canada immigration",
    "PGWP",
    "PR pathways",
    "LMIA",
    "SOWP",
    "Canada decoded",
    "Express Entry",
    "PNP",
  ],
  openGraph: {
    title: "Canada Decoded — Immigration Pathways, Decoded.",
    description:
      "We decode pathways, break down real strategies, and connect you to the right opportunities.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${gtSuper.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white font-sans">
        <SubtleAmbient />
        <Navbar />
        <main className="flex-1 relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
