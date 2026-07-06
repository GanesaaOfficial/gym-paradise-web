import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileStickyCta from "./components/MobileStickyCta";
import ScrollProgress from "./components/ScrollProgress";
import SmoothScroll from "./components/SmoothScroll";
import ScrollToTop from "./components/ScrollToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = "https://gymparadise.ominotech.com.my";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gym Paradise 3.0 | The Premier Mega Gym in Cheras Selatan",
    template: "%s | Gym Paradise 3.0",
  },
  description:
    "Experience Malaysia's premier world-class mega gym. 38,000 sq ft of pure performance, 200+ elite machines, HYROX Training Club, and massive free weight zones. Open 6AM–Midnight Mon–Sat in Cheras Selatan.",
  keywords:
    "gym, fitness, Cheras Selatan, Balakong, Seri Kembangan, Selangor, HYROX, personal training, powerlifting, bodybuilding, fitness center, mega gym Malaysia, best gym in KL",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gym Paradise 3.0 — Unlock Your Peak",
    description:
      "Malaysia's ultimate training ground. 38,000 sq ft, 200+ elite machines, HYROX, and premium amenities. Join the elite in Cheras Selatan.",
    type: "website",
    locale: "en_MY",
    siteName: "Gym Paradise 3.0",
    images: [
      {
        url: "/Photos/unnamed-33.webp",
        width: 1200,
        height: 800,
        alt: "Gym Paradise 3.0 Epic Training Floor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gym Paradise 3.0 — Unlock Your Peak",
    description:
      "Malaysia's ultimate training ground. 38,000 sq ft, 200+ elite machines, HYROX, and premium amenities.",
    images: ["/Photos/unnamed-33.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} overflow-x-clip`}>
      <body className="bg-void text-cream antialiased flex flex-col min-h-screen pb-16 md:pb-0 overflow-x-clip">
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" strategy="beforeInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" strategy="beforeInteractive" />
        <SmoothScroll />
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyCta />
        <ScrollToTop />
      </body>
    </html>
  );
}
