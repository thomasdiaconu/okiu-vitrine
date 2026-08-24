import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.confidentialite.title,
  description: site.seo.confidentialite.description,
  alternates: {
    canonical: "/confidentialite/",
  },
};

export default function ConfidentialitePage() {
  const { confidentialite } = site;

  return (
    <LegalLayout title={confidentialite.title}>
      <p>{confidentialite.intro}</p>
      {confidentialite.sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      ))}
    </LegalLayout>
  );
}
