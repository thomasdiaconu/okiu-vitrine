import { site } from "@/content/site";
import PhoneMockup from "./PhoneMockup";
import Reveal from "./Reveal";

export default function Parcours() {
  const { parcours } = site;

  return (
    <Reveal>
      <section id="parcours" className="s-white page-section">
        <div className="wrap">
          <div className="journey-head">
            <div className="eyebrow">{parcours.eyebrow}</div>
            <h2>{parcours.title}</h2>
          </div>
          <div className="journey-grid">
            <div className="timeline">
              {parcours.etapes.map((etape) => (
                <div key={etape.num} className="tl-item">
                  <div className="tl-ring">{etape.num}</div>
                  <h3>{etape.title}</h3>
                  <p>{etape.text}</p>
                </div>
              ))}
            </div>
            <div className="journey-phone">
              <PhoneMockup data={site.phone} />
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
