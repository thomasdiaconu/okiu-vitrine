import { site } from "@/content/site";
import Reveal from "./Reveal";

export default function Probleme() {
  const { probleme } = site;

  return (
    <Reveal>
      <section id="probleme" className="s-white page-section">
        <div className="wrap problem-grid">
          <div>
            <div className="eyebrow">{probleme.eyebrow}</div>
            <h2>{probleme.title}</h2>
            {probleme.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="problem-side">
            <div className="bigstat">
              <div className="fig">
                {probleme.stat.value}
                <small>{probleme.stat.unit}</small>
              </div>
              <div className="sub">{probleme.stat.detail}</div>
              <p className="txt">{probleme.stat.text}</p>
            </div>
            <ul className="tasklist">
              {probleme.taches.map((tache) => (
                <li key={tache}>{tache}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
