# CLAUDE.md — Site vitrine OKIU

Instructions de projet pour Claude Code. Lire ce fichier en entier avant toute modification.

## 1. Contexte

OKIU est un copilote IA pour dirigeants de magasins d'optique — indépendants, adhérents d'une enseigne ou d'un groupement — qui gèrent eux-mêmes l'accueil, le conseil, la vente et l'administratif de leur magasin. Il se place au-dessus des outils existants (logiciel métier Polylogic, emails, plateformes de mutuelles), automatise le cycle du tiers payant (demande de prise en charge → accusé → contrôle des rejets) et ne remonte au dirigeant, sur smartphone, que les décisions réellement humaines. Le produit est en phase pilote chez Ver'Optic.

> **Cible (2026-09-08) :** la cible n'est pas limitée aux opticiens indépendants — le critère qui compte est l'absence d'une équipe dédiée au tiers payant (donc aussi les adhérents d'enseignes/groupements qui gèrent leur back-office eux-mêmes), pas le statut juridique du magasin. Voir `content/site.ts` (`pourQui`).

**Ce dépôt contient uniquement le site vitrine.** Pas l'application, pas le GraphEngine, pas d'API.

Objectif du site : crédibiliser OKIU auprès d'un opticien qui le découvre en 60 secondes (contact direct, bouche-à-oreille), et poser les fondations SEO. La cible lit majoritairement sur smartphone.

> **Historique de marque :** le produit et ce site s'appelaient auparavant CHΛRLY (avec un Λ, lambda grec U+039B, à la place du A). Renommé OKIU après vérification de disponibilité. La maquette de référence (`docs/maquette/charly-site-vitrine.html`, figée) prédate les deux noms — voir `docs/maquette/NOTE.md`.

> **CHΛRLY, nouveau sens (2026-09-08) :** le nom revient, mais pour désigner autre chose — le copilote avec lequel le dirigeant interagit *dans l'application* (le « il » de la section Solution, l'assistant qui prépare l'écran du téléphone), pas le produit/l'entreprise. `BRAND` (OKIU) reste la seule marque du site et de l'entreprise ; `COPILOT_NAME` (`content/site.ts`) est un nom distinct, à révéler avec parcimonie, pas à substituer à `BRAND`. Premier usage : la légende sous le `PhoneMockup` du hero (`hero.phoneCaption`).

## 2. Décisions figées (ne pas remettre en cause)

- **One-page dense** + 2 pages annexes (`/mentions-legales`, `/confidentialite`). Pas d'autres pages.
- **Next.js 16, App Router, export 100 % statique** (`output: 'export'`). Aucun backend, aucune API route, aucun serveur.
- **Formulaire** : service externe (Web3Forms ou Formspree — clé dans `NEXT_PUBLIC_FORM_ENDPOINT`), avec honeypot anti-spam et fallback `mailto:`.
- **CSS custom avec les tokens de la maquette**. Pas de Tailwind, pas de librairie de composants, pas de CSS-in-JS.
- **Police unique : Geist** (`next/font/google`, variable, auto-hébergée). Fraunces et Inter retirées le 2026-09-08 (refonte style Apple). Aucune requête runtime vers Google Fonts.
- Header : logo seul, nom de marque en `.visually-hidden` ; le nom reste visible dans le footer, le hero (lead) et l'image OG.
- **Analytics sans cookies** (Plausible ou Vercel Analytics). Pas de bannière de consentement.
- **Langue : français uniquement.** Tout le contenu, les commentaires utiles et les messages d'erreur visibles sont en français.
- **Marque : OKIU** (typographie standard, sans caractère spécial). Règles :
  - Définir une constante `BRAND = "OKIU"` dans `content/site.ts` et l'utiliser partout ; ne jamais retaper le nom à la main dans les composants.
  - Identifiants techniques en ASCII minuscule : dépôt, dossiers, URLs, domaine, emails restent `okiu` (ex. `okiu-vitrine`, `okiu.fr`).
- Déploiement : Vercel (ou équivalent statique). Jamais sur l'infrastructure Ver'Optic.

## 3. Design system (source : maquette `charly-site-vitrine.html`)

> **Refonte style Apple (2026-09-08)** : la maquette `docs/maquette/charly-site-vitrine.html` reste la référence pour la structure et les couleurs, mais **plus pour la typographie, le header, le hero, ni les bordures**. Référence visuelle de ces points : `docs/refonte-apple/comparateur.html` (colonne Après, réglages Geist / logo seul / compacte / centré / grand chiffre).

La maquette de référence est la source de vérité visuelle. La porter fidèlement, ne pas la « réinterpréter ».

### Tokens (dans `styles/tokens.css`, importé par `app/layout.tsx`)

```css
:root {
  --bg: #F4F6F6;        /* fond général */
  --surface: #FFFFFF;   /* cartes, panneaux */
  --ink: #12181B;       /* texte principal */
  --ink-soft: #52616B;  /* texte secondaire, légendes, méta */
  --ink-faint: #8A9AA0; /* ⚠ contraste limite : réservé aux éléments décoratifs, jamais au texte porteur de sens */
  --ink-body: #2A353B;  /* corps de texte (paragraphes de lecture), ratio ≥ 10:1 */
  --teal: #1F6F63;      /* accent principal */
  --teal-deep: #16544B;
  --amber: #C97A3D;     /* accent secondaire (parcimonie) */
  --line: #E0E5E4;      /* bordures */
  --radius: 26px;
  --maxw: 1120px;
  --header-h: 56px;
  --font-sans: var(--font-geist), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --shadow-card: 0 1px 2px rgba(18, 24, 27, 0.04), 0 30px 60px -44px rgba(18, 24, 27, 0.25);
}
```

### Typographie

- Police unique : **Geist** (`next/font/google`, variable, auto-hébergée), sur `--font-sans`.
- Titres (`h1`–`h3`) : weight 600, `letter-spacing: -0.028em`.
- Corps : 17px, `line-height: 1.5`.
- H1 hero : `clamp(36px, 5.4vw, 64px)`.

### Principes visuels

- Beaucoup d'air : sections en `padding: 120px 0` (84px < 720px).
- Boutons pilule (`border-radius: 999px`) : `.btn-primary` fond `--ink`, `.btn-ghost` bordure `--line`.
- Eyebrow : 13px, sans point ni capitales (`text-transform: none`), `color: var(--ink-soft)`.
- Header fixe translucide avec `backdrop-filter: saturate(180%) blur(20px)`, sans trait.
- Surfaces au lieu de traits : pas de bordure sur cartes, FAQ, journal, callout ; alternance de fond blanc (`.s-white`) / `--bg` entre sections ; ombre `--shadow-card` unique pour les tuiles en relief.
- Animations `reveal` au scroll via IntersectionObserver — **toujours** derrière `@media (prefers-reduced-motion: no-preference)`.
- Sobriété : pas de gradients criards, pas d'ombres lourdes, pas d'emoji dans l'UI.

### Responsive (spécification normative)

La maquette est desktop-first avec des règles partielles et 3 breakpoints non harmonisés (720/860/900px). **Normaliser à 2 breakpoints** lors du portage :

```css
/* Mobile par défaut (design de référence : 360–390px) */
@media (min-width: 720px)  { /* tablette : nav-cta visible, padding sections 120px */ }
@media (min-width: 960px)  { /* desktop : grilles 2–3 colonnes, layout final */ }
```

Approche **mobile-first** dans le code (styles de base = mobile, media queries en `min-width`), même si la maquette est écrite en `max-width` : la cible principale lit sur smartphone, c'est l'état par défaut qui doit être le plus soigné.

Comportements par section :

| Élément | Mobile (< 720px) | Tablette (≥ 720px) | Desktop (≥ 960px) |
|---|---|---|---|
| Header | 56 px, logo seul + lien FAQ + CTA compact (le CTA est la raison d'être du site : ne pas le masquer, version courte « Devenir pilote » si nécessaire) | nav ancres complète + CTA | idem |
| Sections | `padding: 84px 0` | `120px 0` | idem |
| Hero | 1 colonne centrée, texte puis téléphone ; CTA pleine largeur empilés | idem, CTA sur une ligne | 1 colonne centrée à toutes les largeurs, téléphone 280 px < 720 px, 320 px ensuite |
| PhoneMockup | largeur réduite ~260px, jamais coupé horizontalement | 292px | 292px |
| Problème | 1 colonne (texte puis grand chiffre + tâches) | idem | 2 colonnes |
| Solution (3 piliers) | cartes empilées | idem | 3 colonnes |
| Parcours (5 temps) | liste seule, numérotée | idem | liste + téléphone collant (`position: sticky`) ≥ 960 px |
| Confiance | 1 colonne | idem | 2 colonnes |
| FAQ | `<details>` pleine largeur — déjà naturellement responsive | largeur lecture ~720px centrée | idem |
| Formulaire CTA | champs pleine largeur empilés, `padding: 52px 26px`, `margin: 0 16px` | selon maquette | idem |
| Pages annexes | texte ~65ch, marges 20px | idem | idem |

Règles transverses :
- Typographie fluide via `clamp()` (déjà en place pour h1/h2 dans la maquette — généraliser aux leads).
- **Cibles tactiles ≥ 44×44px** : boutons, liens de nav, summaries de FAQ, champs de formulaire.
- Aucun défilement horizontal à 360px (tester notamment chips du problème et PhoneMockup).
- `font-size` des inputs ≥ 16px (évite le zoom automatique iOS au focus).
- Images/SVG : `max-width: 100%; height: auto`.
- Le hover n'est jamais porteur d'information seul (pas de hover fiable au tactile) ; états `:focus-visible` et `:active` soignés.
- Largeurs de test obligatoires : **360px, 390px, 720px, 960px, 1120px** (+ un vrai iPhone/Android avant mise en ligne — le smartphone du dirigeant est le terrain réel).

## 4. Arborescence cible

```
okiu-vitrine/
├── CLAUDE.md
├── docs/
│   ├── maquette/
│   │   ├── charly-site-vitrine.html   # source de vérité visuelle, FIGÉE (ne jamais la modifier ni la renommer)
│   │   └── NOTE.md                    # « La maquette prédate les renommages CHΛRLY puis OKIU ; CLAUDE.md prime sur la marque actuelle »
│   ├── refonte-apple/
│   │   ├── comparateur.html           # référence visuelle avant/après de la refonte style Apple (2026-09-08)
│   │   └── og-image.html              # source HTML de public/og-image.png (capture Playwright 1200×630)
│   ├── plan.md                        # plan du site, implémentation, stack, SEO
│   └── textes.md                      # textes validés des sections nouvelles (Pour qui, FAQ, formulaire)
├── app/
│   ├── layout.tsx               # fonts, metadata globale, JSON-LD Organization, Header/Footer
│   ├── page.tsx                 # one-page : assemble les 9 sections
│   ├── mentions-legales/page.tsx
│   ├── confidentialite/page.tsx
│   ├── sitemap.ts               # 3 URLs
│   └── robots.ts
├── components/
│   ├── Header.tsx               # nav par ancres + CTA
│   ├── Hero.tsx
│   ├── Probleme.tsx
│   ├── Solution.tsx             # les 3 piliers
│   ├── Parcours.tsx             # « Une journée avec OKIU » (5 temps)
│   ├── Confiance.tsx            # « Jamais d'exécution à l'aveugle »
│   ├── Pilote.tsx               # Ver'Optic
│   ├── PourQui.tsx
│   ├── Faq.tsx                  # <details>/<summary> + JSON-LD FAQPage
│   ├── Cta.tsx                  # formulaire « Devenir magasin pilote »
│   ├── Footer.tsx
│   ├── PhoneMockup.tsx          # écran smartphone illustratif (SVG/CSS, pas d'image bitmap)
│   ├── ChevronIcon.tsx          # chevron du lien texte du hero (16×16)
│   ├── PilierIcon.tsx           # icônes des 3 piliers de Solution (oeil / coche / cloche)
│   ├── Glasses.tsx              # illustration SVG tracée de « Pour qui »
│   └── Reveal.tsx               # wrapper IntersectionObserver (client component)
├── content/
│   └── site.ts                  # TOUS les textes du site (un seul fichier, typé)
├── styles/
│   ├── tokens.css
│   └── globals.css
├── public/
│   └── og-image.png             # 1200×630
├── next.config.js               # output: 'export'
└── CLAUDE.md
```

## 5. Conventions

- **Séparation contenu/présentation stricte** : aucun texte en dur dans les composants. Tout vient de `content/site.ts` (objets typés par section). Raison : les textes seront itérés souvent, et réutilisés lors du futur éclatement multi-pages.
- **Server Components par défaut.** `"use client"` uniquement pour `Reveal.tsx`, le formulaire (`Cta.tsx`) et l'éventuel menu mobile.
- Chaque section = un composant autonome, promouvable plus tard en page dédiée. Ne pas créer de dépendances entre sections.
- HTML sémantique : une seule `<h1>` (hero), `<h2>` par section, `<section id="...">` pour les ancres, `<nav>`, `<footer>`, `<details>` pour la FAQ.
- Ancres officielles : `#probleme`, `#solution`, `#parcours`, `#confiance`, `#pilote`, `#pour-qui`, `#faq`, `#devenir-pilote`.
- TypeScript strict. Pas de `any`.
- Pas de dépendance ajoutée sans nécessité démontrée. La cible : `next`, `react`, `react-dom` et rien d'autre (analytics exclu).

## 6. Plan d'implémentation détaillé

Exécuter les phases dans l'ordre. Chaque phase a un critère de sortie vérifiable : ne pas passer à la suivante sans l'avoir atteint.

### Phase 0 — Initialisation

- [x] `npx create-next-app@latest okiu-vitrine` (TypeScript, App Router, sans Tailwind, sans src/).
- [x] `next.config.js` : `output: 'export'`, `images: { unoptimized: true }` (requis en export statique), `trailingSlash: true`.
- [x] Créer `styles/tokens.css` (tokens §3) et `styles/globals.css` (reset minimal, styles de base body/headings/boutons portés depuis la maquette).
- [x] `app/layout.tsx` : `next/font/google` pour Fraunces (`axes: ['opsz']`, weights 340/440/560) et Inter (400/500/600/700), exposées en variables CSS ; `lang="fr"` ; import des styles.
- [x] Vérifier : `npm run build` produit `out/` sans erreur ni warning.

**Sortie :** build statique vert, page vide correctement typographiée (fond `--bg`, Fraunces/Inter chargées localement).

### Phase 1 — Socle de contenu

- [x] Créer `content/site.ts` avec la structure complète : `hero`, `probleme`, `solution` (3 piliers), `parcours` (5 étapes), `confiance` (4 garanties), `pilote`, `pourQui`, `faq` (Q/R), `cta`, `footer`, `nav`.
- [x] Y porter les textes existants de la maquette (hero, piliers, parcours, confiance, pilote, CTA) — les reprendre tels quels, ils sont validés.
- [x] Rédiger un premier jet des textes manquants : **inutile — les textes des sections nouvelles (Pour qui, FAQ, formulaire, micro-textes) sont fournis dans `docs/textes.md`, pré-rédigés et validés. Les porter tels quels dans `site.ts`, sans les réécrire ni les « améliorer ».** Seuls les placeholders `[À COMPLÉTER]` et `contact@…` restent à signaler pour complétion humaine.

Questions FAQ à couvrir :
1. OKIU remplace-t-il mon logiciel métier ? (Non — il se place au-dessus, ne remplace rien.)
2. Et s'il fait une erreur en mon nom ? (Arrêt contrôlé sur toute situation inconnue, mode supervisé au démarrage, journal complet de chaque action.)
3. Que se passe-t-il si le site de la mutuelle change ? (OKIU s'arrête et prévient — jamais d'exécution à l'aveugle.)
4. Qui voit mes données ? (Hébergement sur l'infrastructure du magasin, pas de cloud tiers en V1.)
5. Avec quels logiciels métier fonctionne-t-il ? (Polylogic aujourd'hui, autres ensuite.)
6. Combien ça coûte ? (Réponse honnête : phase pilote, conditions à discuter.)

**Sortie :** `site.ts` compile, aucun texte ne vivra ailleurs que dans ce fichier.

### Phase 2 — Structure et navigation

- [x] `Header.tsx` : logo (mark cercle teal + point amber de la maquette), liens d'ancres, CTA « Devenir magasin pilote ». Fixe, translucide, blur. Sur mobile, appliquer la spec responsive du §3 : le CTA reste visible (version compacte), contrairement à la maquette qui le masquait sous 720px — c'est la raison d'être du site.
- [x] `Footer.tsx` : contact email, liens légaux, © OKIU.
- [x] `app/page.tsx` : assembler les 9 sections vides (squelettes avec `id`, eyebrow, `<h2>`).
- [x] `Reveal.tsx` : client component IntersectionObserver ajoutant une classe `is-visible` ; transition opacity/translateY en CSS, désactivée si `prefers-reduced-motion`.
- [x] Navigation par ancres fluide (`scroll-behavior: smooth` + `scroll-margin-top` égal à la hauteur du header sur les sections).

**Sortie :** squelette complet navigable au clavier et à la souris, ancres fonctionnelles avec le header fixe.

### Phase 3 — Sections (portage fidèle de la maquette, puis compléments)

Ordre : d'abord les sections existantes dans la maquette (portage), puis les nouvelles.

- [x] `Hero.tsx` — grille 2 colonnes (texte / visuel), 2 CTA, note sous les boutons.
- [x] `Probleme.tsx` — « Chaque vente laisse des tâches invisibles » + accroche ~30 min/jour.
- [x] `Solution.tsx` — 3 piliers : Il observe / Il vérifie et agit / Il vous alerte si besoin.
- [x] `Parcours.tsx` — les 5 temps numérotés d'« Une journée avec OKIU ».
- [x] `PhoneMockup.tsx` — l'écran smartphone (liste de décisions + journal) en SVG/CSS avec les tokens. Intégré au hero et/ou au parcours. `aria-hidden` si purement décoratif, sinon alt descriptif.
- [x] `Confiance.tsx` — « Jamais d'exécution à l'aveugle » : arrêt contrôlé, mode supervisé, journal complet, données chez vous.
- [x] `Pilote.tsx` — Ver'Optic, démarche « construit en conditions réelles ». Prévoir dans `site.ts` un champ optionnel `chiffres` (vide aujourd'hui) pour accueillir les mesures post-MVP sans refonte.
- [x] `PourQui.tsx` — nouvelle section : dirigeants indépendants, Polylogic aujourd'hui.
- [x] `Faq.tsx` — nouvelle section : `<details>/<summary>` stylés (fonctionne sans JS).
- [x] Passe responsive complète selon la **spécification responsive du §3** : mobile-first, 2 breakpoints normalisés (720/960px), tableau des comportements par section, largeurs de test 360/390/720/960/1120px. Le hero mobile doit être irréprochable (cible smartphone).

**Sortie :** one-page complet, visuellement conforme à la maquette côte à côte dans le navigateur, responsive validé aux 3 largeurs.

### Phase 4 — Formulaire « Devenir magasin pilote »

- [x] `Cta.tsx` (client component) : champs nom, magasin, email, logiciel métier (select : Polylogic, Cosium, Optimum, Osmose, WinOptics, MyEasyOptic, autre), message optionnel.
- [x] Envoi `fetch` POST vers `NEXT_PUBLIC_FORM_ENDPOINT`. États : envoi en cours / succès (message de confirmation en français) / erreur (message + lien `mailto:` de secours).
  > ⚠️ **Écart constaté (2026-08-05)** : `content/site.ts` définit `cta.states.errorMailto` mais `components/Cta.tsx` ne l'utilise pas — le message d'erreur affiche l'email de contact en texte brut, sans lien `mailto:` cliquable. À corriger avant la Phase 8 (voir §Phase 4, critère de sortie).
- [x] Honeypot : champ caché ignoré des humains ; si rempli, simuler le succès sans envoyer.
- [x] Validation HTML native (`required`, `type="email"`) — pas de librairie de formulaires.
- [x] Accessibilité : `<label>` explicites, erreurs annoncées (`aria-live="polite"`), focus géré après soumission.

**Sortie :** soumission de test reçue par email, honeypot vérifié, parcours clavier complet.

### Phase 5 — Pages annexes

- [x] Gabarit texte sobre partagé (largeur lecture ~65ch).
- [x] `/mentions-legales` : éditeur, directeur de publication, hébergeur, contact. Utiliser des placeholders `[À COMPLÉTER]` pour les informations légales manquantes — ne jamais inventer de raison sociale, SIREN ou adresse.
- [x] `/confidentialite` : données collectées par le formulaire, finalité, durée de conservation, droits RGPD, mention de l'analytics sans cookies. Mêmes placeholders si besoin.
- [x] Liens croisés footer ↔ pages annexes, lien retour accueil.

**Sortie :** 3 routes dans l'export, placeholders légaux listés en fin de PR pour complétion humaine.

### Phase 6 — SEO

- [x] Metadata via l'API Metadata de Next :
  - Title accueil : `OKIU — Automatisez le tiers payant de votre magasin d'optique`.
  - Description ~150 caractères : bénéfice + preuve + différenciateur.
  - `metadataBase`, canonical, Open Graph (title, description, `og-image.png` 1200×630), Twitter card. Titles/descriptions distincts pour les pages annexes.
- [x] JSON-LD `Organization` dans le layout (nom, url, logo, email de contact).
- [x] JSON-LD `FAQPage` dans `Faq.tsx`, généré depuis `site.ts` (source unique : le contenu affiché et le balisage ne peuvent pas diverger).
- [x] `app/sitemap.ts` (3 URLs) et `app/robots.ts` (tout autorisé + référence sitemap).
- [x] Créer `public/og-image.png` dans le design system (fond `--bg`, logo, promesse).
- [x] Vérifier les H2 : chacun porte une variation sémantique métier (tiers payant, prise en charge, rejets, mutuelle, opticien indépendant, Polylogic) — les mots du métier, pas le jargon IA.
  > Ajustements 2026-08-24 : H2 de Problème, Solution, Parcours et Confiance légèrement retouchés pour intégrer respectivement « tiers payant », « mutuelles », « prise en charge » et « rejet ». « Pour qui » contenait déjà « opticiens indépendants ». « Polylogic » n'a pas été forcé dans un H2 (reste peu naturel en titre) — il est déjà présent dans le corps de texte de Pour qui et de la FAQ (et dans le JSON-LD FAQPage).

**Sortie :** `out/` contient sitemap et robots ; JSON-LD valides (tester avec le validateur schema.org) ; aperçu OG correct.

### Phase 7 — Qualité et finitions

- [x] Accessibilité : contrastes AA vérifiés (attention `--ink-faint` sur fond clair — ne jamais l'utiliser pour du texte informatif), navigation clavier de bout en bout, focus visibles, `prefers-reduced-motion` respecté.
  > 2026-08-24 : `--ink-faint` (ratio ~2.7:1, sous le seuil AA même en grand texte) était utilisé sur du texte porteur de sens dans `styles/globals.css` (note hero, sous-titre du téléphone, onglets, journal, footer, citation pilote) — remplacé partout par `--ink-soft` (≥ 5.9:1). Ajout d'un skip-link (« Aller au contenu ») en tête de `app/layout.tsx` vers `#contenu` (ajouté sur les deux `<main>`, page d'accueil et pages légales). `:focus-visible` déjà en place sur boutons, liens, FAQ et champs de formulaire. `prefers-reduced-motion` déjà correctement neutralisé (`.reveal`, `scroll-behavior`, FAQ). Corrigé au passage l'écart Phase 4 : le message d'erreur du formulaire affiche maintenant `errorMailto` en lien `mailto:` cliquable (`components/Cta.tsx`).
- [x] Lighthouse (build de prod, mobile) : **≥ 95 sur les 4 axes**. Corriger avant de continuer.
  > 2026-08-24 : `npm run build` + `npx serve out` + `lighthouse` (émulation mobile par défaut) → Performance 96, Accessibilité 100, Bonnes pratiques 100, SEO 100. Seul point non parfait : LCP ≈ 2.8 s (audit `largest-contentful-paint`, score 0.84) — sous throttling mobile simulé, sans incidence sur le seuil de sortie.
- [x] Analytics sans cookies branché.
  > 2026-08-24 : choix initialement reporté par le dirigeant (« aucun pour l'instant »). Branché le 2026-08-25 dans le cadre du chantier SEO (`CLAUDE-seo.md` §3.3) : **Vercel Analytics** — `npm install @vercel/analytics`, `<Analytics />` dans `app/layout.tsx`, `content/site.ts` (`confidentialite`, section « Cookies et mesure d'audience ») mis à jour pour nommer l'outil. Vérifié en local (build propre, script présent dans le bundle JS) ; pas encore commité/déployé, collecte réelle non vérifiable avant mise en production.
- [x] `README.md` : installation, développement, build, déploiement, variable `NEXT_PUBLIC_FORM_ENDPOINT`.
- [x] Relecture finale des textes `// DRAFT` — signaler la liste pour validation humaine.
  > 2026-08-24 : aucun marqueur `// DRAFT` restant dans `content/site.ts` (textes de `docs/textes.md` déjà portés tels quels en Phase 1). Placeholders `[À COMPLÉTER]` restants, à valider par un humain avant mise en ligne : email de contact (`CONTACT_EMAIL`), raison sociale/SIREN/siège et directeur de publication (mentions légales), durée de conservation des données du formulaire et nom de l'outil d'analytics (confidentialité). `SITE_URL` (`https://okiu.ai`) reste provisoire, à confirmer avant la Phase 8.

**Sortie :** scores Lighthouse atteints, zéro erreur console, liste des éléments en attente de validation humaine (textes DRAFT, placeholders légaux, endpoint formulaire).

### Phase 8 — Déploiement (avec l'humain)

- [ ] Projet Vercel branché sur le dépôt Git, variable d'environnement du formulaire configurée.
- [ ] Domaine + HTTPS.
- [ ] Test formulaire de bout en bout en production.
- [ ] Google Search Console + Bing Webmaster Tools : propriété vérifiée, sitemap soumis.

### Phase 9 — Refonte style Apple (2026-09-08)

Chantier purement visuel (branche `refonte-apple`) : surfaces au lieu de traits, typographie sans-serif serrée (Geist), hero centré sur le produit, beaucoup d'air — sans changer la structure des sections, les textes validés, ni le fonctionnement du formulaire. Réglages retenus (`docs/refonte-apple/comparateur.html`, colonne Après) : Geist, header logo seul, échelle compacte, hero centré, grand chiffre.

- [x] Police Geist (`next/font/google`, variable) remplace Fraunces + Inter ; nouveaux tokens `--ink-body`, `--radius: 26px`, `--header-h: 56px`, `--font-sans`, `--shadow-card`.
- [x] Header : fond translucide sans trait, logo seul (nom en `.visually-hidden`), nav-cta compact.
- [x] Suppression de `.section-line` et de toutes les bordures décoratives (cartes, FAQ, journal, callout) au profit de `.s-white` (alternance de fond) et de `--shadow-card`.
- [x] `content/site.ts` : `probleme.stat` restructuré (`value`/`unit`), `probleme.chips` → `probleme.taches`, `solution.piliers[].icon`, `hero.phone` déplacé vers `site.phone`. Aucun texte modifié.
- [x] Sections portées section par section (Hero centré, Problème en grand chiffre, Solution avec icônes `PilierIcon`, Parcours avec téléphone collant ≥ 960 px, Pour qui avec illustration `Glasses` tracée au scroll, FAQ avec chevron SVG).
- [x] `public/og-image.png` régénéré en Geist (source : `docs/refonte-apple/og-image.html`).
- [x] Vérifications de sortie : `npm run lint`/`npx tsc --noEmit`/`npm run build` verts ; aucune requête `fonts.gstatic`/`fonts.googleapis` dans `out/` ; aucun défilement horizontal à 360/390/720/960/1120 px (un débordement du halo du téléphone collant du parcours à 960 px corrigé par `overflow: clip` sur `.journey-grid`) ; contrastes AA vérifiés (`--ink-body` ≥ 10:1, `--ink-soft` ≥ 5.9:1, `--teal-deep` sur callout ≥ 7:1, eyebrow blanc 60 % sur `--ink` ≥ 4.5:1) ; `prefers-reduced-motion: reduce` vérifié par émulation (pas d'animation du H1, téléphone droit, lunettes tracées d'emblée) ; Lighthouse mobile sur `npx serve out` → Performance 98, Accessibilité 100, Bonnes pratiques 96, SEO 100 ; JSON-LD (`Organization`, `SoftwareApplication`, `FAQPage`) valides dans `out/index.html`.
- [ ] Vérification sur un vrai smartphone (non réalisable dans cet environnement — à faire par un humain avant la Phase 8).

**Sortie :** branche `refonte-apple` prête pour revue visuelle du dirigeant, non mergée sur `main`.

## 7. Garde-fous

- Ne jamais ajouter de backend, d'API route ou de base de données : tout besoin « dynamique » doit être résolu côté service externe ou remis en question.
- Ne pas inventer de contenu factuel : chiffres, noms, mentions légales, témoignages. En cas de manque → placeholder `[À COMPLÉTER]` + signalement.
- Ne pas dégrader le design system pour aller vite : la sobriété de la maquette est un choix de positionnement, pas un manque de moyens.
- Ne pas ajouter de page au-delà des 3 prévues. L'éclatement multi-pages est un jalon futur conditionné (fin du MVP + chiffres mesurés chez Ver'Optic) : le préparer via les composants autonomes, ne pas l'anticiper.
- Toute promesse produit affichée doit rester vraie en phase pilote : OKIU est « en construction chez un magasin pilote », pas « adopté par des centaines d'opticiens ».

## 8. Commandes

```bash
npm run dev        # développement
npm run build      # build + export statique dans out/
npx serve out      # vérifier l'export statique localement
```