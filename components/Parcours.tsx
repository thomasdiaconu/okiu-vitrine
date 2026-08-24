import { site } from "@/content/site";
import Reveal from "./Reveal";

export default function Parcours() {
  const { parcours } = site;

  return (
    <Reveal>
      <section id="parcours" className="journey section-line page-section">
        <div className="wrap">
          <div className="journey-head">
            <div className="eyebrow">{parcours.eyebrow}</div>
            <h2>{parcours.title}</h2>
          </div>
          <div className="timeline">
            {parcours.etapes.map((etape) => (
              <div key={etape.num} className="tl-item">
                <div className="tl-ring">{etape.num}</div>
                <h3>{etape.title}</h3>
                <p>{etape.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
