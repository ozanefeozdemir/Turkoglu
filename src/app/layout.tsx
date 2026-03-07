import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { ThemeProvider } from "@/context/ThemeProvider";
import { LanguageProvider } from "@/context/LanguageProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Türkoğlu Tersanecilik | Denizlerin Güvenilir Gücü",
    template: "%s | Türkoğlu Tersanecilik",
  },
  verification: {
    google: "AnoSjtowSmLlcOp2ejzOuZDLNSunjKHPpiDj8i8rPZo",
  },
  description:
    "1985'ten bu yana yeni gemi inşası, bakım-onarım ve refit hizmetleri sunan Türkoğlu Tersanecilik. Uluslararası standartlarda üretim.",
  keywords: [
    "tersane",
    "gemi inşa",
    "shipyard",
    "bakım onarım",
    "refit",
    "Türkoğlu",
    "Tuzla tersane",
  ],
  openGraph: {
    title: "Türkoğlu Tersanecilik",
    description: "Denizlerin Güvenilir Gücü - 1985'ten bu yana gemi inşa ve onarım.",
    type: "website",
    locale: "tr_TR",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/turkoglu_oval_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={inter.variable} data-theme="light" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ScrollToTop />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

