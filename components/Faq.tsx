import { site } from "@/content/site";
import Reveal from "./Reveal";

export default function Faq() {
  const { faq } = site;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <Reveal>
      <section id="faq" className="page-section">
        <div className="wrap faq-body">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
          />
          <div className="eyebrow">{faq.eyebrow}</div>
          <h2>{faq.title}</h2>
          <div className="faq-list">
            {faq.items.map((item) => (
              <details key={item.question} className="faq-item">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
