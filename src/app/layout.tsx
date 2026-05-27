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
    "OooBooGoo Inc. is a Canadian innovation lab and media technology company building creator tools, media systems, and software products - including SHAP Media Group and Rede.fm.",
  metadataBase: new URL("https://www.ooboogoo.com"),
  keywords: [
    "OooBooGoo", "SHAP Media Group", "Rede.fm", "creator platform",
    "media consulting", "livestream consulting", "podcast production",
    "content strategy", "creator tools", "media systems", "Sean Shapiro",
    "Toronto media company", "Canada media",
  ],
  authors: [{ name: "OooBooGoo Inc.", url: "https://www.ooboogoo.com" }],
  creator: "OooBooGoo Inc.",
  publisher: "OooBooGoo Inc.",
  openGraph: {
    siteName: "OooBooGoo Inc.",
    locale: "en_CA",
    type: "website",
    url: "https://www.ooboogoo.com",
    title: "OooBooGoo Inc.",
    description:
      "An innovation lab and media technology company building creator tools, media systems, and software products.",
    images: [
      {
        url: "/ooboogoo-logo-trim.jpg",
        width: 1200,
        height: 630,
        alt: "OooBooGoo Inc.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OooBooGoo Inc.",
    description:
      "An innovation lab and media technology company building creator tools, media systems, and software products.",
    images: ["/ooboogoo-logo-trim.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: "https://www.ooboogoo.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.ooboogoo.com/#organization",
      name: "OooBooGoo Inc.",
      url: "https://www.ooboogoo.com",
      logo: "https://www.ooboogoo.com/ooboogoo-logo-trim.jpg",
      description:
        "Canadian innovation lab and media technology company building creator tools, media systems, and software products.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "7805 Bayview Avenue, Suite 217",
        addressLocality: "Thornhill",
        addressRegion: "Ontario",
        postalCode: "L3T 7N1",
        addressCountry: "CA",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "hello@ooboogoo.com",
        contactType: "customer service",
      },
      subOrganization: [
        {
          "@type": "Organization",
          name: "SHAP Media Group",
          url: "https://www.ooboogoo.com/shap-media",
          description:
            "Media consulting and production arm of OooBooGoo Inc. Specialising in livestream consulting, creator coaching, podcast development, and strategic communications.",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+14162220157",
            email: "info@shapmediagroup.com",
            contactType: "customer service",
          },
        },
        {
          "@type": "SoftwareApplication",
          name: "Rede.fm",
          url: "https://www.ooboogoo.com/rede-fm",
          applicationCategory: "BusinessApplication",
          description:
            "Preparation and production platform for creators, broadcasters, podcasters, and live show hosts.",
          operatingSystem: "Web, iOS (coming soon), Android (coming soon)",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.ooboogoo.com/#website",
      url: "https://www.ooboogoo.com",
      name: "OooBooGoo Inc.",
      publisher: { "@id": "https://www.ooboogoo.com/#organization" },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
