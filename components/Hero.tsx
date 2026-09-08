import { site } from "@/content/site";
import ArrowIcon from "./ArrowIcon";
import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  const { hero } = site;

  return (
    <section className="hero page-section">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">{hero.eyebrow}</div>
          <h1>{hero.title}</h1>
          <p className="lead">{hero.lead}</p>
          <div className="hero-ctas">
            <a href={hero.ctaPrimary.href} className="btn btn-primary">
              {hero.ctaPrimary.label}
              <ArrowIcon />
            </a>
            <a href={hero.ctaSecondary.href} className="btn btn-ghost">
              {hero.ctaSecondary.label}
            </a>
          </div>
          <div className="hero-note">{hero.note}</div>
        </div>
        <div className="phone-column">
          <PhoneMockup data={hero.phone} />
          <p className="phone-caption">{hero.phoneCaption}</p>
        </div>
      </div>
    </section>
  );
}
