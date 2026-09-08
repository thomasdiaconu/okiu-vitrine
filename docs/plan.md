# OKIU — Plan d'implémentation du site vitrine

*Extrait opérationnel du CLAUDE.md (§6) — uniquement l'implémentation. Le CLAUDE.md reste la source de vérité : en cas de divergence, c'est lui qui prime.*

*Renommage de marque : ce projet s'appelait CHΛRLY jusqu'à la fin de la Phase 5, renommé OKIU après vérification de disponibilité (2026-07-20). Les entrées ci-dessous ont été mises à jour rétroactivement ; voir CLAUDE.md pour l'historique complet.*



Exécuter les phases dans l'ordre. Chaque phase a un critère de sortie vérifiable : ne pas passer à la suivante sans l'avoir atteint.

## Phase 0 — Initialisation ✅

- [x] `npx create-next-app@latest okiu-vitrine` (TypeScript, App Router, sans Tailwind, sans src/). *Projet déjà initialisé (Next 16.2.10 avec Tailwind) — Tailwind retiré a posteriori (`package.json`, `postcss.config.mjs`) : décision validée avec l'utilisateur de rester sur Next 16 (CLAUDE.md §2 mis à jour en conséquence) et de garder du CSS custom.*
- [x] `next.config.js` : `output: 'export'`, `images: { unoptimized: true }` (requis en export statique), `trailingSlash: true`.
- [x] Créer `styles/tokens.css` (tokens §3) et `styles/globals.css` (reset minimal, styles de base body/headings/boutons portés depuis la maquette).
- [x] `app/layout.tsx` : `next/font/google` pour Fraunces (`axes: ['opsz']`, weights 340/440/560) et Inter (400/500/600/700), exposées en variables CSS ; `lang="fr"` ; import des styles. *Écart technique : Fraunces via `next/font/google` n'accepte pas de poids statiques 340/440/560 (seulement 100–900 par pas de 100, ou `variable`). Utilisé `weight: 'variable'` + `axes: ['opsz']` ; les poids exacts restent pilotés via `font-weight` en CSS (déjà fait pour h1–h3 à 560).*
- [x] Vérifier : `npm run build` produit `out/` sans erreur ni warning.

**Sortie :** build statique vert, page vide correctement typographiée (fond `--bg`, Fraunces/Inter chargées localement, `.woff2` en local, zéro requête `fonts.gstatic.com`). **Atteinte.**

## Phase 1 — Socle de contenu ✅

- [x] Créer `content/site.ts` avec la structure complète : `hero`, `probleme`, `solution` (3 piliers), `parcours` (5 étapes), `confiance` (4 garanties), `pilote`, `pourQui`, `faq` (Q/R), `cta`, `footer`, `nav`.
- [x] Y porter les textes existants de la maquette (hero, piliers, parcours, confiance, pilote, CTA) — les reprendre tels quels, ils sont validés.
- [x] Rédiger un premier jet des textes manquants à partir du vocabulaire du projet : section Pour qui, FAQ (6 questions ci-dessous), micro-textes du formulaire. *Non applicable : le CLAUDE.md §6 (source de vérité) indique que ces textes sont déjà pré-rédigés et validés dans `docs/textes.md` — portés tels quels, sans réécriture, conformément à cette instruction plus récente.*

**Décisions d'interprétation prises pendant le portage (à valider) :**
- CTA du hero renommés pour converger vers l'objectif unique du site : primaire « Devenir magasin pilote » → `#devenir-pilote` (au lieu de « Voir comment ça marche »), secondaire « Voir comment ça marche » → `#parcours` (au lieu de « Demander une démo »). Cohérent avec le CTA header, le CTA final et les ancres officielles du §5.
- La bannière « CTA FINAL » de la maquette (titre + intro génériques + bouton « Demander une démonstration ») a été fusionnée avec la section formulaire `#devenir-pilote` de `docs/textes.md` : un seul composant `Cta.tsx`, un seul titre « Rendez du temps à votre métier » (identique dans les deux sources), intro reprise de `textes.md` (plus précise, écrite pour le formulaire).
- Section confiance : gardé les **3** garanties telles qu'énoncées dans la maquette (validées, à reprendre telles quelles) ; le §6 du CLAUDE.md parle de « 4 garanties » mais n'en énumère pas une 4e distincte des 3 existantes — aucune garantie n'a été inventée.
- L'accroche chiffrée « ~30 min/jour » mentionnée au §6 (Phase 3, Probleme.tsx) n'existe dans aucune source validée (ni maquette, ni `textes.md`) — non ajoutée pour ne pas inventer de chiffre (garde-fou §7). À fournir par l'humain si une vraie mesure existe.
- Emails de contact (`footer.email`, `cta.errorMailto`) laissés en placeholder `[À COMPLÉTER]` — aucune adresse réelle communiquée à ce jour.
- `pilote.chiffres` créé vide (`PiloteChiffre[]`), réservé aux mesures post-MVP chez Ver'Optic comme prévu au §6 (Phase 3).
- Titres avec sauts de ligne forcés (`<br>`) de la maquette portés en phrases pleines (sans `<br>`) dans `site.ts` — le retour à la ligne est une décision de présentation responsive (mobile-first), traitée au niveau composant en Phase 3, pas dans le contenu.

**Sortie :** `site.ts` compile (`npx tsc --noEmit` + `npm run build` verts), aucun texte ne vit ailleurs que dans ce fichier. **Atteinte.**

Questions FAQ à couvrir :
1. OKIU remplace-t-il mon logiciel métier ? (Non — il se place au-dessus, ne remplace rien.)
2. Et s'il fait une erreur en mon nom ? (Arrêt contrôlé sur toute situation inconnue, mode supervisé au démarrage, journal complet de chaque action.)
3. Que se passe-t-il si le site de la mutuelle change ? (OKIU s'arrête et prévient — jamais d'exécution à l'aveugle.)
4. Qui voit mes données ? (Hébergement sur l'infrastructure du magasin, pas de cloud tiers en V1.)
5. Avec quels logiciels métier fonctionne-t-il ? (Polylogic aujourd'hui, autres ensuite.)
6. Combien ça coûte ? (Réponse honnête : phase pilote, conditions à discuter.)

**Sortie :** `site.ts` compile, aucun texte ne vivra ailleurs que dans ce fichier.

## Phase 2 — Structure et navigation ✅

- [x] `Header.tsx` : logo (mark cercle teal + point amber de la maquette), liens d'ancres, CTA « Devenir magasin pilote ». Fixe, translucide, blur. Sur mobile, appliquer la spec responsive du §3 : le CTA reste visible (version compacte), contrairement à la maquette qui le masquait sous 720px — c'est la raison d'être du site.
- [x] `Footer.tsx` : contact email, liens légaux, © OKIU.
- [x] `app/page.tsx` : assembler les 9 sections vides (squelettes avec `id`, eyebrow, `<h2>`).
- [x] `Reveal.tsx` : client component IntersectionObserver ajoutant une classe `is-visible` ; transition opacity/translateY en CSS, désactivée si `prefers-reduced-motion`.
- [x] Navigation par ancres fluide (`scroll-behavior: smooth` + `scroll-margin-top` égal à la hauteur du header sur les sections).

**Décisions d'interprétation prises pendant le portage (à valider) :**
- `nav.links` de `content/site.ts` étendu de 2 à 4 liens (ajout de « Pour qui » `#pour-qui` et « FAQ » `#faq`) : le tableau responsive du §3 mentionne explicitement « logo + lien FAQ + CTA compact » sur mobile et « nav ancres complète » sur tablette/desktop, alors que la maquette (antérieure aux sections Pour qui/FAQ) n'avait que 2 liens. Champ `mobileVisible` ajouté au type `NavLink` pour piloter quel lien reste visible sous 720px (le lien FAQ).
- `Reveal.tsx` enveloppe ses enfants dans un `<div class="reveal">` plutôt que d'appliquer la classe directement sur la balise `<section>` (comme dans la maquette) : passer une fonction (render-prop) d'un Server Component vers un Client Component n'est pas possible en App Router, donc un wrapper est nécessaire. Effet visuel identique, HTML valide.
- `Pilote.tsx` n'a ni eyebrow ni `<h2>` (fidèle à la maquette qui ne présente qu'une citation) — le patron générique « id + eyebrow + h2 » du squelette a été adapté à ce cas, le blockquote/cite étant déjà le contenu minimal de la section.
- `.hero { padding-top: calc(var(--header-h) + 40px) }` ajouté dès la Phase 2 (au lieu d'attendre la Phase 3) pour que le header fixe ne recouvre pas le H1 dès le premier rendu du squelette.

**Sortie :** squelette complet navigable au clavier et à la souris, ancres fonctionnelles avec le header fixe. `npx tsc --noEmit`, `npm run lint`, `npm run build` verts ; export statique vérifié (8 ancres présentes, un seul `h1`, 7 `h2`, header/footer avec logo, CTA compact/complet, lien mailto). **Atteinte.**

## Phase 3 — Sections (portage fidèle de la maquette, puis compléments) ✅

Ordre : d'abord les sections existantes dans la maquette (portage), puis les nouvelles.

- [x] `Hero.tsx` — grille 2 colonnes (texte / visuel), 2 CTA, note sous les boutons.
- [x] `Probleme.tsx` — « Chaque vente laisse des tâches invisibles » + accroche ~30 min/jour. *Accroche chiffrée non ajoutée (cf. décisions Phase 1 : aucune source validée ne fournit ce chiffre, non inventé).*
- [x] `Solution.tsx` — 3 piliers : Il observe / Il vérifie et agit / Il vous alerte si besoin.
- [x] `Parcours.tsx` — les 5 temps numérotés d'« Une journée avec OKIU ».
- [x] `PhoneMockup.tsx` — l'écran smartphone (liste de décisions + journal) en SVG/CSS avec les tokens. Intégré au hero. `aria-hidden="true"` (purement décoratif, dupliqué en prose dans le lead et les autres sections).
- [x] `Confiance.tsx` — « Jamais d'exécution à l'aveugle » : arrêt contrôlé, mode supervisé, journal complet, données chez vous.
- [x] `Pilote.tsx` — Ver'Optic, démarche « construit en conditions réelles ». `chiffres` déjà prévu dans `site.ts` depuis la Phase 1 (vide).
- [x] `PourQui.tsx` — nouvelle section : dirigeants indépendants, Polylogic aujourd'hui.
- [x] `Faq.tsx` — nouvelle section : `<details>/<summary>` stylés (fonctionne sans JS), icône +/× animée (désactivée si `prefers-reduced-motion`).
- [x] Passe responsive complète selon la **spécification responsive du §3** : mobile-first, 2 breakpoints normalisés (720/960px), tableau des comportements par section, largeurs de test 360/720/960/1120px vérifiées au navigateur (Playwright).

**Décisions d'interprétation prises pendant le portage (à valider) :**
- `PhoneMockup` intégré uniquement au hero, pas au parcours (la maquette ne l'utilise que là ; le dupliquer dans Parcours aurait ajouté du contenu visuel absent de la source).
- CTA du hero « pleine largeur empilés » appliqué jusqu'à 960px (bascule en ligne uniquement au passage à la grille 2 colonnes), conformément à une lecture littérale du tableau du §3 où la ligne « Tablette » ne mentionne que le recentrage du téléphone, pas de changement sur les CTA.
- Section « Pour qui » : pas de ligne dédiée dans le tableau responsive du §3 — traitée comme un bloc de texte pleine largeur avec encadré, cohérent avec les autres sections texte (Problème, Confiance).
- FAQ : chevron « + » en `::after` sur `<summary>` (rotation 45° à l'ouverture) — détail visuel non spécifié par la maquette (section absente de celle-ci), ajouté pour l'affordance d'interaction.
- Icônes de coche (Confiance) : couleur pilotée via `stroke: var(--teal)` en CSS plutôt qu'attribut SVG `stroke` en dur, pour rester aligné sur les tokens.

**Vérifications effectuées :** `npx tsc --noEmit`, `npm run lint`, `npm run build` verts ; aucun débordement horizontal détecté par script à 360px ; captures Playwright comparées à la maquette à 360/720/960/1120px (header collant, grilles responsives, FAQ interactive, journal, phone mockup) ; 2 erreurs 404 console pour `/mentions-legales` et `/confidentialite` — attendu, pages non créées avant la Phase 5.

**Sortie :** one-page complet, visuellement conforme à la maquette côte à côte dans le navigateur, responsive validé aux 4 largeurs. **Atteinte.**

## Phase 4 — Formulaire « Devenir magasin pilote » ✅

- [x] `Cta.tsx` (client component) : champs nom, magasin, email, logiciel métier (select : Polylogic, Cosium, Optimum, Osmose, WinOptics, MyEasyOptic, autre), message optionnel.
- [x] Envoi `fetch` POST vers `NEXT_PUBLIC_FORM_ENDPOINT`. États : envoi en cours / succès (message de confirmation en français) / erreur (message + lien `mailto:` de secours).
- [x] Honeypot : champ caché ignoré des humains ; si rempli, simuler le succès sans envoyer.
- [x] Validation HTML native (`required`, `type="email"`) — pas de librairie de formulaires. Messages de validation par défaut du navigateur remplacés par `cta.fieldErrors` (FR) via `setCustomValidity`, conformément à la règle « messages d'erreur visibles en français » du §2.
- [x] Accessibilité : `<label>` explicites, erreurs annoncées (`role="status" aria-live="polite"`), focus géré après soumission (`tabIndex={-1}` + `.focus()` sur le message de statut).

**Décisions d'interprétation prises pendant l'implémentation (à valider) :**
- `NEXT_PUBLIC_FORM_ENDPOINT` n'étant pas encore configuré (aucun service Web3Forms/Formspree fourni), le formulaire gère ce cas honnêtement : absence de variable → état d'erreur immédiat avec fallback `mailto:`, plutôt que d'inventer un endpoint factice. À configurer avant la Phase 8 (déploiement).
- Le corps de requête est un `FormData` brut avec `Accept: application/json`, compatible Formspree tel quel ; si Web3Forms est choisi, un champ cadré `access_key` devra être ajouté au formulaire lors de la configuration réelle (non ajouté maintenant, dépendrait d'un service non choisi).
- Carte `.cta-final` : couleurs `--teal`/`--ink` de la maquette réutilisées mais l'eyebrow et son point sont passés en blanc translucide/`--amber` sur fond `--ink` (au lieu de `--teal` par défaut) — le teal sur fond quasi noir ne passait pas le contraste AA ; ajustement nécessaire pour rester dans les garde-fous d'accessibilité du §7.

**Vérifications effectuées (navigateur, Playwright)** : validation native avec messages FR personnalisés (champ requis + email invalide) ; honeypot rempli par simulation bot → succès affiché sans requête réseau ; endpoint non configuré → état d'erreur + fallback mailto affichés correctement ; focus déplacé sur le message de statut après soumission (succès et erreur) ; parcours clavier `Tab` complet et dans l'ordre (nom → magasin → email → logiciel → message → bouton → lien RGPD), honeypot correctement exclu du tab (`tabIndex={-1}`). `npx tsc --noEmit`, `npm run lint`, `npm run build` verts.

**Sortie :** parcours clavier complet et honeypot vérifiés. Soumission réelle par email non testée (endpoint non configuré) — à faire une fois `NEXT_PUBLIC_FORM_ENDPOINT` renseigné.

**Évolution du 2026-08-24 :** le champ `magasin` (« Nom et ville du magasin », texte libre) a été scindé en deux champs à la demande du dirigeant, jugeant le texte libre trop permissif pour la ville. `magasin` reste un champ texte libre (nom du magasin uniquement) ; `ville` est un nouveau champ combobox contrôlé, branché sur l'API officielle des communes (`geo.api.gouv.fr`, gouvernement français — gratuite, sans clé, CORS ouvert, cohérente avec la contrainte « aucun backend » du §7 puisque c'est un appel client). Le nom saisi doit correspondre à une commune officielle sélectionnée dans la liste proposée (recherche débattue à 250 ms, résultats triés par population) ; toute valeur tapée sans sélection est bloquée par la validation native (`setCustomValidity`) avec le message FR `cta.fieldErrors.villeInvalide`, cohérent avec le pattern déjà en place pour les autres champs. Combobox accessible (`role="combobox"`, `aria-expanded`, `aria-controls`, `aria-activedescendant`, navigation clavier flèches/Entrée/Échap). Vérifié au navigateur (Playwright) : suggestions réelles de l'API, sélection souris et clavier, blocage sur ville non reconnue, blocage sur champ vide, rendu 375px sans débordement horizontal, cibles tactiles ≥ 44px. `content/site.ts` (`cta.fields.ville`, nouveau type `AutocompleteField`, `fieldErrors.villeInvalide`) et `confidentialite.sections` (mention de l'appel à l'API officielle) mis à jour en conséquence. `npx tsc --noEmit`, `npm run lint`, `npm run build` verts.

## Phase 5 — Pages annexes ✅

- [x] Gabarit texte sobre partagé (largeur lecture ~65ch) : `components/LegalLayout.tsx`, réutilisé par les deux pages.
- [x] `/mentions-legales` : éditeur, directeur de publication, hébergeur, contact. Placeholders `[À COMPLÉTER]` pour les informations manquantes — rien inventé.
- [x] `/confidentialite` : données collectées par le formulaire, finalité, destinataire/durée de conservation, cookies/mesure d'audience, droits RGPD.
- [x] Liens croisés footer ↔ pages annexes (déjà en place depuis la Phase 2), lien « ← Retour à l'accueil » sur chaque page annexe.

**Bug corrigé pendant cette phase :** la règle CSS générique `section { padding: 84–120px }` (pensée pour les 9 sections de la page d'accueil) s'appliquait aussi aux `<section>` internes des pages légales (une par rubrique : Éditeur, Hébergement...), créant un espacement énorme et incohérent. Corrigé en renommant cette règle en `.page-section` et en ajoutant explicitement cette classe aux 9 sections de la page d'accueil (`Hero`, `Probleme`, `Solution`, `Parcours`, `Confiance`, `Pilote`, `PourQui`, `Faq`, `Cta`) plutôt que de cibler la balise `<section>` nue. Aucune régression constatée sur la page d'accueil après correction (vérifié au navigateur).

**Décisions d'interprétation prises pendant le portage (à valider) :**
- Contenu légal ajouté dans `content/site.ts` (`legal`, `mentionsLegales`, `confidentialite`) plutôt qu'en dur dans les pages — cohérent avec la règle de séparation contenu/présentation du §5, qui n'est pas limitée aux 9 sections de la page d'accueil.
- Hébergeur mentionné par son nom seul (« Vercel Inc. (vercel.com) ») sans adresse légale précise — donnée publique mais non vérifiée dans cette session, préféré ne pas citer une adresse potentiellement obsolète plutôt que de risquer une inexactitude dans un document légal.
- Page confidentialité explicitement scoping le site vitrine uniquement (formulaire + analytics), avec une phrase dédiée précisant que le produit OKIU (déployé chez les magasins pilotes) n'est pas couvert ici — pour éviter toute confusion entre les deux périmètres.
- Métadonnées `title` minimales ajoutées par page dès maintenant (`Mentions légales` / `Politique de confidentialité`) ; descriptions/OG/canonical réservés à la Phase 6 comme prévu.

**Évolution du 2026-08-25 :** l'utilisateur n'a pas encore d'adresse email de contact — décision : le site n'affiche aucun email, le formulaire « Devenir magasin pilote » devient l'unique canal de contact. `CONTACT_EMAIL` supprimé de `site.ts` (constante et tous ses usages) : footer (`footer.contactLink`, lien vers `/#devenir-pilote` au lieu d'un `mailto:`), mentions légales (section Contact → renvoie au formulaire), confidentialité (section Vos droits RGPD → renvoie au formulaire), état d'erreur du formulaire (`cta.states.error` → simple invitation à réessayer, sans lien `mailto:` de secours puisqu'aucune adresse n'existe), JSON-LD `Organization` (champ `email` retiré, optionnel en schema.org). `mentionsLegales`/`confidentialite` restent volontairement en placeholder `[À COMPLÉTER]` pour l'identité légale (raison sociale, SIREN, directeur de publication) et la durée de conservation — non inventés. `npx tsc --noEmit`, `npm run lint`, `npm run build` verts ; vérifié au navigateur que le lien « Nous contacter » du footer fonctionne aussi depuis les pages annexes (chemin absolu `/#devenir-pilote`, pas une simple ancre).

**Placeholders légaux en attente de complétion humaine :**
- `mentionsLegales.intro` et section « Éditeur » : raison sociale, forme juridique, SIREN, siège social, directeur de publication.
- `confidentialite`, section « Destinataire et durée de conservation » : durée de conservation des données du formulaire.
- `confidentialite`, section « Cookies et mesure d'audience » : nom de l'outil d'analytics retenu (Plausible ou Vercel Analytics — choix Phase 7).
- `NEXT_PUBLIC_FORM_ENDPOINT` (Phase 4, rappel) : service de formulaire à choisir et configurer.

**Évolution du 2026-08-24 (bis) :** service de formulaire choisi — **Web3Forms** (simplicité : pas de compte, clé reçue par email en quelques secondes, 250 envois/mois gratuits vs 50 chez Formspree). Code câblé en amont de l'obtention de la vraie clé : deux champs cachés ajoutés dans `Cta.tsx` (`access_key`, lu depuis `NEXT_PUBLIC_FORM_ACCESS_KEY` — publique par nature côté Web3Forms, à verrouiller au domaine dans leur dashboard ; `subject` fixe pour identifier l'origine des emails). `README.md` mis à jour (nouvelle variable documentée). Restent à faire côté humain : obtenir la clé sur web3forms.com, la renseigner dans `.env.local` et sur Vercel, tester un envoi réel en prod.

**Sortie :** 3 routes dans l'export (`/`, `/mentions-legales/`, `/confidentialite/`), `npx tsc --noEmit`/`npm run lint`/`npm run build` verts, navigation footer → page annexe → retour accueil vérifiée au navigateur, placeholders légaux listés ci-dessus pour complétion humaine. **Atteinte.**

## Phase 6 — SEO ✅

- [x] Metadata via l'API Metadata de Next :
  - Title accueil : `OKIU — Automatisez le tiers payant de votre magasin d'optique`.
  - Description ~150 caractères : bénéfice + preuve + différenciateur (143 caractères : automatisation du tiers payant + testé chez Ver'Optic + ne sollicite que pour les décisions qui comptent).
  - `metadataBase` (`https://okiu.ai`, via `SITE_URL` dans `site.ts`), canonical par page, Open Graph (title, description, `og-image.png` 1200×630), Twitter card `summary_large_image`. Titles/descriptions distincts pour les pages annexes (title via `template: "%s — OKIU"`).
- [x] JSON-LD `Organization` dans le layout (nom, url, logo, email de contact).
- [x] JSON-LD `FAQPage` dans `Faq.tsx`, généré depuis `site.faq.items` (source unique : le contenu affiché et le balisage ne peuvent pas diverger).
- [x] `app/sitemap.ts` (3 URLs) et `app/robots.ts` (tout autorisé + référence sitemap). Les deux exportent `dynamic = "force-static"`, requis par Next pour ces routes spéciales en `output: 'export'`.
- [x] Créer `public/og-image.png` dans le design system (fond `--bg`, logo, promesse). Généré par capture d'écran Playwright (1200×630 exact) d'un HTML autonome stylé aux tokens — pas d'outil de génération d'image disponible, cette méthode produit un vrai PNG piloté par CSS plutôt qu'une image à fournir manuellement.
- [x] Vérifier les H2 : chacun porte une variation sémantique métier (tiers payant, prise en charge, rejets, mutuelle, opticien indépendant, Polylogic) — les mots du métier, pas le jargon IA.

**Décision documentée (H2) :** seul le H2 de « Pour qui » (« Pensé pour les opticiens indépendants ») contient littéralement un mot-clé métier de la liste. Les autres H2 (Problème, Solution, Parcours, Confiance, FAQ, Cta) sont des titres accrocheurs validés en Phase 1/3 (« ne jamais réécrire les textes validés »/CLAUDE.md) ; réécrire ces titres pour y insérer des mots-clés SEO entrerait en contradiction directe avec cette règle. Le vocabulaire métier (tiers payant, prise en charge, rejets, mutuelle, Polylogic) est en revanche présent en abondance dans le corps de texte de chaque section et dans les meta descriptions — la couverture sémantique est assurée à l'échelle de la page, pas titre par titre. Signalé pour arbitrage humain si une réécriture des titres est souhaitée.

**Autres décisions prises pendant l'implémentation :**
- Domaine `okiu.ai` confirmé par l'utilisateur, centralisé dans une constante unique `SITE_URL` (changement futur trivial).
  > **Correction du 2026-08-25 :** domaine définitif communiqué par l'utilisateur = `okiu.fr` (projet Vercel déjà créé dessus). `SITE_URL` mis à jour en conséquence dans `content/site.ts` — bénéficie justement de la centralisation prévue ci-dessus, un seul endroit changé.
- `Organization.email` reprend le placeholder `[À COMPLÉTER]` déjà utilisé partout ailleurs (footer, mentions légales) plutôt que d'inventer une adresse.
- `Organization.logo` réutilise `og-image.png` (1200×630) faute d'un logo carré dédié — accepté comme simplification pragmatique, non demandé explicitement.
- Page d'accueil (`app/page.tsx`) : pas de metadata dédiée, hérite du `default` du layout (évite la duplication, layout et accueil ont exactement le même contenu SEO).

**Sortie :** `out/` contient `sitemap.xml`, `robots.txt` et `og-image.png` ; JSON-LD validés par parsing JSON (2 blocs, `Organization` + `FAQPage` à 6 questions) ; balises meta/OG/Twitter/canonical vérifiées par page servie en local. **Atteinte.**

## Phase 7 — Qualité et finitions

- [ ] Accessibilité : contrastes AA vérifiés (attention `--ink-faint` sur fond clair — ne jamais l'utiliser pour du texte informatif), navigation clavier de bout en bout, focus visibles, `prefers-reduced-motion` respecté.
- [ ] Lighthouse (build de prod, mobile) : **≥ 95 sur les 4 axes**. Corriger avant de continuer.
- [ ] Analytics sans cookies branché.
- [ ] `README.md` : installation, développement, build, déploiement, variable `NEXT_PUBLIC_FORM_ENDPOINT`.
- [ ] Relecture finale des textes `// DRAFT` — signaler la liste pour validation humaine.

**Sortie :** scores Lighthouse atteints, zéro erreur console, liste des éléments en attente de validation humaine (textes DRAFT, placeholders légaux, endpoint formulaire).

## Phase 8 — Déploiement (avec l'humain)

- [ ] Projet Vercel branché sur le dépôt Git, variable d'environnement du formulaire configurée.
- [ ] Domaine + HTTPS.
- [ ] Test formulaire de bout en bout en production.
- [ ] Google Search Console + Bing Webmaster Tools : propriété vérifiée, sitemap soumis.

## Phase 9 — Refonte style Apple (2026-09-08)

Chantier purement visuel, sur la branche `refonte-apple`, non mergée sur `main` : surfaces au lieu de traits, police Geist, hero centré, header logo seul, grand chiffre pour le problème — sans changer la structure des sections, les textes validés, ni le formulaire. Plan détaillé et journal des vérifications : `PLAN.md` (racine du dépôt).