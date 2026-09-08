import Link from "next/link";
import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer>
      <div className="wrap footer-row">
        <a href="/" className="logo">
          <span className="logo-mark" aria-hidden="true">
            <span className="a" />
            <span className="b" />
          </span>
          {site.brand}
        </a>
        <div className="tag">{site.footer.tagline}</div>
        <nav className="footer-links" aria-label="Liens légaux">
          {site.footer.legalLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <a href={site.footer.contactLink.href}>{site.footer.contactLink.label}</a>
        </nav>
        <div className="tag">{site.footer.copyright}</div>
      </div>
    </footer>
  );
}
