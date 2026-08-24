import type { ReactNode } from "react";
import Link from "next/link";
import { site } from "@/content/site";

export default function LegalLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main id="contenu" className="legal-page">
      <div className="legal-body">
        <Link href="/" className="legal-back">
          {site.legal.backLabel}
        </Link>
        <h1>{title}</h1>
        {children}
      </div>
    </main>
  );
}
