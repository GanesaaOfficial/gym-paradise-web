import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileStickyCta from "./components/MobileStickyCta";

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Gym Paradise 3.0 | Cheras Selatan",
    template: "%s | Gym Paradise 3.0",
  },
  description:
    "Malaysia's 1st World-Class Mega Gym — 38,000 sq ft, 200+ machines, HYROX Training Club, Grip Galaxy. Day pass RM25–35. Open 6AM–Midnight Mon–Sat. Lot 1897B Jalan KPB 9, Balakong, Seri Kembangan.",
  keywords:
    "gym, fitness, Cheras Selatan, Balakong, Seri Kembangan, Selangor, HYROX, day pass, membership, personal training, powerlifting, bodybuilding, mega gym Malaysia, 38000 sq ft gym",
  openGraph: {
    title: "Gym Paradise 3.0 — Unlock Your Potential",
    description:
      "Malaysia's 1st World-Class Mega Gym — 38,000 sq ft · 200+ machines · HYROX Training Club · Grip Galaxy. Open 6AM–Midnight Mon–Sat in Balakong, Cheras Selatan.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${dmSans.variable}`}>
      <body className="bg-void text-cream antialiased flex flex-col min-h-screen pb-16 md:pb-0">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyCta />
      </body>
    </html>
  );
}
