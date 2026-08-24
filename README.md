# OKIU — Site vitrine

Site vitrine statique du copilote OKIU (dirigeants de magasins d'optique indépendants). Next.js 16, App Router, export 100 % statique — aucun backend, aucune API route.

Voir `CLAUDE.md` pour les décisions de projet, le design system et le plan d'implémentation détaillé.

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Génère l'export statique dans `out/` (`output: 'export'` dans `next.config.ts`).

Pour vérifier l'export localement avant déploiement :

```bash
npx serve out
```

## Variables d'environnement

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_FORM_ENDPOINT` | URL du service d'envoi du formulaire « Devenir magasin pilote » (Web3Forms). Sans elle, la soumission affiche l'état d'erreur avec le lien `mailto:` de secours. |
| `NEXT_PUBLIC_FORM_ACCESS_KEY` | Clé d'accès Web3Forms (obtenue sur [web3forms.com](https://web3forms.com), sans création de compte). Publique par nature (exposée côté client), à verrouiller au domaine de prod dans le dashboard Web3Forms. |

Créer un fichier `.env.local` (non versionné) :

```bash
NEXT_PUBLIC_FORM_ENDPOINT=https://api.web3forms.com/submit
NEXT_PUBLIC_FORM_ACCESS_KEY=colle-ta-clé-ici
```

## Déploiement

Hébergement cible : Vercel (export statique). Ne jamais déployer sur l'infrastructure Ver'Optic.

1. Connecter le dépôt Git au projet Vercel.
2. Renseigner `NEXT_PUBLIC_FORM_ENDPOINT` et `NEXT_PUBLIC_FORM_ACCESS_KEY` dans les variables d'environnement du projet Vercel.
3. Vérifier le domaine et le HTTPS.
4. Tester le formulaire de bout en bout en production.

## Structure

Voir la section « Arborescence cible » de `CLAUDE.md`. En résumé :

- `content/site.ts` — tous les textes du site (source unique).
- `components/` — un composant par section, autonome.
- `styles/tokens.css` / `styles/globals.css` — design system.
- `app/` — routes (`/`, `/mentions-legales`, `/confidentialite`), `sitemap.ts`, `robots.ts`.
