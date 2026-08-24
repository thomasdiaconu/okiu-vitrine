import { site } from "@/content/site";
import Reveal from "./Reveal";

export default function Confiance() {
  const { confiance } = site;

  return (
    <Reveal>
      <section id="confiance" className="page-section">
        <div className="wrap trust-grid">
          <div>
            <div className="eyebrow">{confiance.eyebrow}</div>
            <h2>{confiance.title}</h2>
            <p className="lead">{confiance.lead}</p>
            <ul className="trust-list">
              {confiance.garanties.map((garantie) => (
                <li key={garantie}>
                  <span className="check" aria-hidden="true">
                    <svg viewBox="0 0 12 12" fill="none">
                      <path d="M2 6.5L4.5 9L10 3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {garantie}
                </li>
              ))}
            </ul>
          </div>
          <div className="journal-card">
            <div className="jh">{confiance.journal.heading}</div>
            {confiance.journal.rows.map((row) => (
              <div key={row.label} className="journal-row">
                <span className="l">{row.label}</span>
                <span className="r">{row.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
