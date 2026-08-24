import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.mentionsLegales.title,
  description: site.seo.mentionsLegales.description,
  alternates: {
    canonical: "/mentions-legales/",
  },
};

export default function MentionsLegalesPage() {
  const { mentionsLegales } = site;

  return (
    <LegalLayout title={mentionsLegales.title}>
      <p>{mentionsLegales.intro}</p>
      {mentionsLegales.sections.map((section) => (
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
