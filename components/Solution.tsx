import { site } from "@/content/site";
import PilierIcon from "./PilierIcon";
import Reveal from "./Reveal";

export default function Solution() {
  const { solution } = site;

  return (
    <Reveal>
      <section id="solution" className="page-section">
        <div className="wrap">
          <div className="solution-head">
            <div className="eyebrow">{solution.eyebrow}</div>
            <h2>{solution.title}</h2>
            <p className="lead">{solution.lead}</p>
          </div>
          <div className="cards3">
            {solution.piliers.map((pilier) => (
              <div key={pilier.num} className="card">
                <div className="ico">
                  <PilierIcon name={pilier.icon} />
                </div>
                <h3>{pilier.title}</h3>
                <p>{pilier.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
