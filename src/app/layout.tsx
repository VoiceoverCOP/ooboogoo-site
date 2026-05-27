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
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "OooBooGoo Inc.",
    template: "%s | OooBooGoo Inc.",
  },
  description:
    "OooBooGoo Inc. is an innovation lab and media technology company building creator tools, media systems, and software products — including SHAP Media Group and Rede.fm.",
  metadataBase: new URL("https://www.ooboogoo.com"),
  openGraph: {
    siteName: "OooBooGoo Inc.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
