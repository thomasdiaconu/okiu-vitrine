import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";

export const dynamic = "force-static";

/**
 * Date de dernière modification réelle du contenu de chaque page.
 * À mettre à jour manuellement quand le contenu change — ne pas utiliser
 * `new Date()` au build, qui ferait bouger le lastmod de toutes les pages
 * à chaque déploiement, même sans changement de contenu (§3.2 CLAUDE-seo.md).
 */
const LAST_MODIFIED: Record<string, string> = {
  home: "2026-08-25",
  mentionsLegales: "2026-08-25",
  confidentialite: "2026-08-25",
};

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, lastModified: LAST_MODIFIED.home },
    {
      url: `${SITE_URL}/mentions-legales/`,
      lastModified: LAST_MODIFIED.mentionsLegales,
    },
    {
      url: `${SITE_URL}/confidentialite/`,
      lastModified: LAST_MODIFIED.confidentialite,
    },
  ];
}
