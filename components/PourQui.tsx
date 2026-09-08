import { site } from "@/content/site";
import Glasses from "./Glasses";
import Reveal from "./Reveal";

export default function PourQui() {
  const { pourQui } = site;

  return (
    <Reveal>
      <section id="pour-qui" className="page-section">
        <div className="wrap pourqui-grid">
          <div className="pourqui-art">
            <Glasses />
          </div>
          <div className="pourqui-body">
            <div className="eyebrow">{pourQui.eyebrow}</div>
            <h2>{pourQui.title}</h2>
            {pourQui.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="callout">{pourQui.callout}</div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
