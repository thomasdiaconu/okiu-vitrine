import { site } from "@/content/site";
import Reveal from "./Reveal";

export default function PourQui() {
  const { pourQui } = site;

  return (
    <Reveal>
      <section id="pour-qui" className="section-line page-section">
        <div className="wrap pourqui-body">
          <div className="eyebrow">{pourQui.eyebrow}</div>
          <h2>{pourQui.title}</h2>
          {pourQui.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="callout">{pourQui.callout}</div>
        </div>
      </section>
    </Reveal>
  );
}
