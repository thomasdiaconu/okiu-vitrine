import { site } from "@/content/site";
import Reveal from "./Reveal";

export default function Pilote() {
  return (
    <Reveal>
      <section id="pilote" className="pilot section-line page-section">
        <div className="wrap">
          <blockquote>
            {site.pilote.quote}
            <cite>{site.pilote.cite}</cite>
          </blockquote>
        </div>
      </section>
    </Reveal>
  );
}
