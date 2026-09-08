import type { Metadata } from "next";
import Link from "next/link";
import ArrowIcon from "@/components/ArrowIcon";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.notFound.title,
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  const { notFound } = site;

  return (
    <main id="contenu" className="legal-page">
      <div className="legal-body">
        <div className="eyebrow">{notFound.eyebrow}</div>
        <h1>{notFound.title}</h1>
        <p>{notFound.text}</p>
        <div className="not-found-actions">
          {notFound.links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`btn ${index === 0 ? "btn-ghost" : "btn-primary"}`}
            >
              {link.label}
              {index === 1 && <ArrowIcon />}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
