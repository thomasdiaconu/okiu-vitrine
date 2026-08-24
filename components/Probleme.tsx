import { site } from "@/content/site";
import Reveal from "./Reveal";

export default function Probleme() {
  const { probleme } = site;

  return (
    <Reveal>
      <section id="probleme" className="section-line page-section">
        <div className="wrap problem-grid">
          <div>
            <div className="eyebrow">{probleme.eyebrow}</div>
            <h2>{probleme.title}</h2>
            <p>{probleme.text}</p>
          </div>
          <div className="chip-cloud">
            {probleme.chips.map((chip) => (
              <span key={chip.label} className={chip.hot ? "chip hot" : "chip"}>
                {chip.label}
              </span>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
