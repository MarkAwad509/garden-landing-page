import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Panda Pavers & Gardening",
  description:
    "Creating extraordinary outdoor living environments since 2007 with custom synthetic turf, paver installations, outdoor kitchens, and lighting.",
  openGraph: {
    title: "Panda Pavers & Gardening",
    description:
      "Creating extraordinary outdoor living environments since 2007 with custom synthetic turf, paver installations, outdoor kitchens, and lighting.",
    url: "https://pandapavers.com",
    siteName: "Panda Pavers & Gardening",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Panda Pavers & Gardening",
    description:
      "Creating extraordinary outdoor living environments since 2007 with custom synthetic turf, paver installations, outdoor kitchens, and lighting.",
  },
};

export default function RootLayout({ children } : { children: ReactNode }) {
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
