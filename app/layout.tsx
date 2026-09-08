import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRAND, SITE_URL, site } from "@/content/site";
import "../styles/tokens.css";
import "../styles/globals.css";

const geist = Geist({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: site.seo.home.title,
    template: `%s — ${BRAND}`,
  },
  description: site.seo.home.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: BRAND,
    title: site.seo.home.title,
    description: site.seo.home.description,
    url: "/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: site.seo.home.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.home.title,
    description: site.seo.home.description,
    images: ["/og-image.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: BRAND,
  url: SITE_URL,
  // Marque carrée (cercle + point), pas la bannière Open Graph 1200×630 : un logo
  // d'entité doit être identifiable en vignette, pas un visuel promotionnel.
  logo: `${SITE_URL}/icon.svg`,
  description: site.seo.home.description,
  areaServed: "FR",
  // sameAs à ajouter une fois les profils tiers créés (LinkedIn, etc. — Sprint 2
  // de CLAUDE-seo.md §6.1) : c'est ce qui désambiguïse OKIU d'Okinawa International
  // University aux yeux des systèmes d'entités.
};

const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: BRAND,
  applicationCategory: "BusinessApplication",
  description: site.seo.home.description,
  featureList: site.solution.piliers.map((pilier) => `${pilier.title} — ${pilier.text}`),
  // offers volontairement omis : pas de prix public en phase pilote (CLAUDE-seo.md §3.6).
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={geist.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationJsonLd) }}
        />
        <a href="#contenu" className="skip-link">
          Aller au contenu
        </a>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
