import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./site.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "OooBooGoo Inc.",
    template: "%s | OooBooGoo Inc.",
  },
  description:
    "OooBooGoo Inc. develops thoughtful software for macOS and iOS — tools built for productivity, creativity, and clarity.",
  metadataBase: new URL("https://www.ooboogoo.com"),
  openGraph: {
    siteName: "OooBooGoo Inc.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
