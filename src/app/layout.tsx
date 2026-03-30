import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
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
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white">
        {children}
      </body>
    </html>
  );
}
