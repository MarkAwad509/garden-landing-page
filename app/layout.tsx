import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import type { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pandapavers.com"),
  title: "Panda Pavers & Gardening",
  description:
    "Creating extraordinary outdoor living environments since 2007 with custom synthetic turf, paver installations, outdoor kitchens, and lighting.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Panda Pavers & Gardening",
    description:
      "Creating extraordinary outdoor living environments since 2007 with custom synthetic turf, paver installations, outdoor kitchens, and lighting.",
    url: "https://pandapavers.com",
    siteName: "Panda Pavers & Gardening",
    images: [
      {
        url: "/patio-garden-hero.png",
        width: 1536,
        height: 1024,
        alt: "Finished backyard patio, turf, planting, and landscape lighting by Panda Pavers & Gardening",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Panda Pavers & Gardening",
    description:
      "Creating extraordinary outdoor living environments since 2007 with custom synthetic turf, paver installations, outdoor kitchens, and lighting.",
    images: ["/patio-garden-hero.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
