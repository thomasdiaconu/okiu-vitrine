import { site } from "@/content/site";
import ArrowIcon from "./ArrowIcon";

export default function Header() {
  return (
    <header>
      <nav className="wrap nav-bar" aria-label="Navigation principale">
        <a href="/" className="logo">
          <span className="logo-mark" aria-hidden="true">
            <span className="a" />
            <span className="b" />
          </span>
          <span className="visually-hidden">{site.brand}</span>
        </a>
        <div className="nav-links">
          {site.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={link.mobileVisible ? "nav-link nav-link-mobile" : "nav-link"}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a href={site.nav.ctaHref} className="btn btn-primary nav-cta">
          <span className="cta-compact">{site.nav.ctaMobile}</span>
          <span className="cta-full">{site.nav.ctaDesktop}</span>
          <ArrowIcon />
        </a>
      </nav>
    </header>
  );
}
