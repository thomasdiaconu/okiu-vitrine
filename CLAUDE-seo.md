# CLAUDE-SEO.md — Okiu, plan SEO d'exécution

*Fichier compagnon du CLAUDE.md principal. À lire avant toute tâche taguée SEO.*

*Objectif : faire venir des dirigeants de magasins d'optique sur okiu.fr par les requêtes d'intention (douleur, solution, logiciel) et par les réponses d'assistants IA — pas par la requête « Okiu » seule.*

> **Pour démarrer l'implémentation :** aller directement au §8. Le reste du fichier est la justification et la référence.

---

## 0. Cadrage

### 0.1 Le conflit de nom : nuancé, pas ignoré

Okiu partage son sigle avec Okinawa International University (« OKIU »), institution de 60+ ans à l'autorité de domaine écrasante.

**Ce qu'on ne fait pas :** viser « okiu » seul comme objectif de positionnement. Ni réaliste, ni utile.

**Ce qu'on fait quand même :** occuper les **requêtes de marque qualifiées**. Un prospect rencontré au SILMO, un lecteur d'un post LinkedIn, un opticien à qui un confrère a parlé du produit tapera « okiu opticien », « okiu tiers payant », « okiu avis », « okiu Ver'Optic ». Ce sont les requêtes **les plus convertissantes du site**, sans aucune concurrence, et elles se gagnent en quelques heures de travail (§3.6 entité + §6.1).

Formulation opérationnelle : **on ne se bat pas sur « okiu », on occupe « okiu + qualificatif métier ».**

### 0.2 Calibrage : le SEO n'est pas le canal principal

Environ 12 000 magasins d'optique indépendants en France. La demande de recherche cumulée de **toute** la table §2 se compte probablement en quelques centaines de requêtes par mois. Même en position 1 partout, l'ordre de grandeur reste quelques dizaines de visites mensuelles.

**Conséquences :**

- Le SEO est un canal **de fond et de crédibilité**, pas d'acquisition volumique. Il sert surtout à ce que le prospect qui a entendu parler d'Okiu ailleurs (salon, bouche-à-oreille, LinkedIn, presse pro) trouve une page qui le convainc.
- Quelques jours de mise en place propre, puis un rythme de fond léger. Pas de programme de contenu industriel.
- Mesure en **candidatures pilotes qualifiées**, pas en positions moyennes GSC — illisibles à ces volumes (§9).
- Le hors-site (§6) et la visibilité IA (§7) ont un meilleur rapport effort/impact que la production d'articles supplémentaires.

### 0.3 Ce qui a changé en 2026

**1. Google a publié en mai 2026 sa première documentation officielle sur l'optimisation pour l'IA générative** (*Optimizing your website for generative AI features on Google Search*, Search Central). AI Overviews et AI Mode s'appuient sur l'index et les systèmes de classement classiques, via RAG et *query fan-out*. Optimiser pour l'IA générative de Google **est** du SEO. Pas de framework séparé.

Google y liste explicitement ce qu'il faut **ignorer** : llms.txt et fichiers « spéciaux », le *chunking* de contenu, la réécriture de textes spécifiquement pour l'IA, la recherche de mentions inauthentiques, la sur-focalisation sur les données structurées.

**2. Les moteurs non-Google ont des graphes de citation quasi disjoints de Google.** Plusieurs études indépendantes de 2026 convergent : le recouvrement de domaines cités entre ChatGPT et Perplexity tourne autour de 11-12 %. Perplexity déclenche une recherche web quasi systématique et valorise la fraîcheur ; ChatGPT mélange données d'entraînement et couche de récupération ; Gemini s'appuie sur l'index Google. Pas de stratégie IA unique — mais un dénominateur commun : être une entité claire, mentionnée par des sources tierces indépendantes.

**3. Les rich results FAQ sont morts.** Google a retiré l'affichage des FAQ enrichies le 7 mai 2026 (support Search Console et Rich Results Test retirés en juin, API en août). Le type `FAQPage` reste valide et parsable, mais ne produit plus aucun affichage. **Ce n'est plus un levier de visibilité.**

### 0.4 Principe directeur : intention > volume, mais attention au désert

Ne jamais prioriser par volume estimé, mais par intention. Une requête tapée par 5 personnes par mois avec une intention d'achat forte vaut mieux qu'une requête générique à fort volume.

**Nuance :** l'absence de concurrence signifie souvent l'absence de demande. Terrain libre et terrain désert se ressemblent beaucoup vus depuis un tableau de mots-clés. Test avant d'ajouter une requête à la table §2 :

> *Un dirigeant de magasin d'optique taperait-il exactement ces mots dans une barre de recherche, avec ce vocabulaire-là ?*

Si le mot vient de **notre** vocabulaire produit (« copilote », « agent IA ») et pas du sien (« tiers payant », « prise en charge », « rejet », « mutuelle », « paperasse »), ce n'est pas un mot-clé. C'est du positionnement — précieux sur la page, inutile en cible SEO.

---

## 1. Architecture du site — arbitrage tranché

### 1.1 Décision : on garde le one-pager

**Le format one-page est conservé. On n'éclate pas l'accueil.** Cette section documente l'arbitrage pour éviter d'y revenir dans six mois.

Une version antérieure de ce plan recommandait de découper l'accueil en pages thématiques. **C'était une erreur**, pour quatre raisons :

1. **Une page unique peut se classer sur des centaines de requêtes.** La limite n'est pas l'indexation mais le `title`, le H1 et le focus. Découper ne multiplie pas la surface de classement : ça la répartit, en divisant les signaux.
2. **Google dit le contraire.** Sa documentation de mai 2026 précise que ses systèmes comprennent les pages multi-sujets et savent en extraire le passage pertinent, qu'il n'existe pas de longueur idéale de page, et que créer des pages séparées pour couvrir chaque variation de requête relève de la **politique anti-spam sur le contenu à grande échelle**. Découper 1 500 mots en cinq pages de 300 mots produit cinq pages minces, pas cinq positions.
3. **Cannibalisation.** Une page `/tiers-payant-automatise/` viserait « logiciel gestion tiers payant opticien », alors que l'accueil vise déjà « automatiser le tiers payant de votre magasin d'optique ». Mêmes mots, même intention : Google devrait arbitrer entre deux pages du même site, et arbitrerait mal.
4. **Conversion.** Le one-pager fait bien son travail : un seul chemin, un seul CTA, un formulaire pilote. Le découper coûterait des candidatures sur un canal qui n'en génère déjà que peu.

### 1.2 Le test avant de créer une page

> **Cette page contient-elle du contenu qui n'existe nulle part aujourd'hui ?**

Texte déplacé depuis l'accueil → **non**. Matière nouvelle → **oui**.

### 1.3 Arborescence cible

Trois ajouts, zéro découpage. L'accueil reste intact.

| URL | Statut | Requête principale | Justification |
|---|---|---|---|
| `/` | **Existe** | automatiser tiers payant optique | À corriger et enrichir (§4), pas à découper |
| `/ver-optic/` | **À créer — priorité 1** | okiu ver'optic · combien de temps tiers payant opticien | Matière entièrement nouvelle : méthode de mesure, chiffres réels, retour du dirigeant. Sert simultanément le SEO, la preuve commerciale, la presse pro, les requêtes de marque et les citations IA |
| `/compatible-polylogic/` | **À créer — priorité 2** | logiciel compatible Polylogic · Polylogic automatisation | Intention et vocabulaire distincts, zéro concurrence. Vraie matière : ce qu'OKIU lit dans Polylogic, ce qu'il n'y écrit pas, la logique de lecture seule, l'ordre d'arrivée des autres logiciels |
| `/ressources/` + articles | **À créer — priorité 3** | voir §5.2 | Contenu neuf par définition |
| `/mentions-legales/`, `/confidentialite/` | Existent | — | Légal, sans valeur SEO |

**Pages explicitement écartées :**

| Page | Raison |
|---|---|
| `/tiers-payant-automatise/` | **Cannibalise l'accueil** sur sa requête principale. Retirée du plan |
| `/opticien-independant/` | Doublonnerait la section « Pour qui » de l'accueil. À reconsidérer seulement si de la matière propre apparaît |
| `/tarifs/` | L'ancre FAQ suffit tant qu'il n'y a pas de prix ferme. À créer le jour où un prix public existe |
| Une page par logiciel métier (Cosium, Optimum…) | Tant qu'OKIU n'est pas réellement compatible, ce serait du contenu creux. Une page par compatibilité **effective**, jamais par compatibilité annoncée |

### 1.4 Navigation

La navigation par ancres (`#parcours`, `#confiance`, `#pour-qui`, `#faq`, `#devenir-pilote`) reste pertinente pour l'accueil. Dès que les pages du §1.3 existent :

- Ajouter des liens vers `/ver-optic/`, `/compatible-polylogic/` et `/ressources/` — au minimum dans le footer, idéalement dans le corps de l'accueil aux endroits naturels (la citation Ver'Optic doit lier vers `/ver-optic/` ; la mention Polylogic de la section « Pour qui » doit lier vers `/compatible-polylogic/`).
- Fil d'Ariane sur les pages profondes, avec balisage `BreadcrumbList` (§3.6).
- **Aucune page orpheline.** Une page sans lien interne entrant est quasi jamais crawlée ni classée.

### 1.5 Règles d'URL

- Minuscules, tirets, sans accents, sans caractères spéciaux.
- 3 à 5 mots maximum, contenant le mot-clé cible.
- Pas de date, pas d'ID, pas de paramètre de tracking indexable.
- Exemple : `/ressources/rejet-prise-en-charge-mutuelle-opticien/` et non `/ressources/comment-agir-quand-un-dossier-est-rejete-par-la-mutuelle/`.
- **Cohérence du slash final.** Le site utilise la forme avec slash (`/confidentialite/`). S'y tenir partout, rediriger l'autre forme en 301.
- Une URL publiée ne change plus. Si elle doit changer : 301 permanente, jamais de 302.

---

## 2. Univers de mots-clés — orienté funnel

Trois étages, du plus chaud au plus froid. **La priorité d'exécution suit l'ordre inverse du funnel** : on sécurise d'abord le bas, où le prospect est prêt à décider.

Priorités : **H** = prioritaire · **M** = secondaire · **B** = longue traîne, plus tard.

### 2.1 BOFU — décision, comparatif, marque

Peu de volume, conversion maximale. À traiter en premier.

| Requête | Priorité | Page cible |
|---|---|---|
| okiu opticien · okiu tiers payant · okiu avis · okiu Ver'Optic | **H** | `/` + `/ver-optic/` |
| logiciel compatible Polylogic | **H** | `/compatible-polylogic/` |
| Polylogic automatisation | H | `/compatible-polylogic/` |
| logiciel gestion tiers payant opticien | H | `/` (title + corps) |
| solution tiers payant optique | H | `/` |
| meilleur logiciel tiers payant optique | M | `/` |
| automatisation tiers payant optique prix | M | `/` — FAQ tarifs |
| alternative gestion manuelle tiers payant | B | Article |

### 2.2 MOFU — recherche de solution

| Requête | Priorité | Page cible |
|---|---|---|
| automatiser tiers payant optique | **H** | `/` — title, H1/chapô, H2 |
| comment automatiser le tiers payant en optique | H | Article pilier |
| IA pour magasin optique | H | `/` — section Solution |
| outil IA prise en charge mutuelle | M | `/` — section Parcours |
| assistant IA opticien | M | `/` — section Solution |
| automatisation IA tiers payant | M | `/` — section Solution |
| logiciel pour opticien indépendant | M | `/` — section Pour qui |
| outils dirigeant magasin optique | M | `/` — section Pour qui |
| quel logiciel pour gérer les prises en charge mutuelle | M | Article |
| logiciel IA gestion administrative optique | B | `/` |

### 2.3 TOFU — douleur

Le prospect ne cherche pas un outil, il cherche à résoudre un problème ponctuel. Conversion faible, mais c'est le terrain le plus favorable aux citations par les assistants IA.

| Requête | Priorité | Page cible |
|---|---|---|
| combien de temps tiers payant opticien par jour | **H** | `/ver-optic/` |
| rejet prise en charge mutuelle opticien que faire | **H** | Article rejets |
| gagner du temps administratif opticien | H | `/` — section Problème |
| pourquoi mon dossier mutuelle est rejeté opticien | M | Article rejets |
| accusé réception prise en charge mutuelle lunettes | M | `/` — section Parcours + article |
| suivi prise en charge mutuelle optique | M | `/` — section Parcours |
| réduire tâches administratives magasin optique | M | `/` — section Problème |
| comment réduire le temps administratif dans un magasin d'optique | M | Article |
| relance mutuelle tiers payant opticien | B | Article rejets |
| pièces manquantes dossier mutuelle optique | B | Article rejets |
| trésorerie magasin optique rapprochement paiement | B | Article (roadmap) |
| contrôle ordonnance opticien automatique | B | Article (roadmap) |

### 2.4 Vocabulaire métier — signal E-E-A-T

Sigles que seul quelqu'un du métier emploie correctement. Peu de volume, forte valeur de preuve d'expertise — et ce sont exactement les termes qu'un assistant IA rapproche pour juger si une source connaît son sujet.

| Requête | Priorité | Page cible |
|---|---|---|
| télétransmission mutuelle optique | M | Article glossaire |
| OCAM tiers payant opticien | M | Article glossaire |
| NOEMIE optique logiciel | B | Article glossaire |
| RAC0 devis opticien automatisation | B | Article glossaire |
| 100% santé opticien logiciel | B | Article glossaire |
| DRE / demande de remboursement électronique optique | B | Article glossaire |

**Règle :** ces sigles s'emploient naturellement et correctement, ou pas du tout. Jamais forcés s'ils ne s'appliquent pas au produit réel en phase pilote.

### 2.5 Ce qu'on ne cible pas

Aussi important que les tables précédentes.

| Requête écartée | Raison |
|---|---|
| « okiu » seul | Concurrence institutionnelle imbattable, prospect nul (§0.1) |
| « copilote opticiens », « copilote IA opticien », « agent IA opticien » | Notre vocabulaire, pas celui du prospect. Zéro recherche. **Excellent positionnement sur la page, mauvaise cible SEO.** À garder dans le texte, à retirer des objectifs de ranking |
| « logiciel pour opticien » sans qualificatif | **Conflit de positionnement.** Le site dit explicitement qu'OKIU ne remplace pas le logiciel métier. Ce visiteur cherche un Cosium. Trafic non qualifié, rebond, risque de mauvais classement concurrentiel. Toujours qualifier : « logiciel *tiers payant* », « *compatible* Polylogic » |
| « gestion magasin optique » | Même problème, un cran plus large |
| Vente, montures, mode optique | Hors sujet produit |

---

## 3. Fondations techniques

Site en Next.js. Plusieurs points ci-dessous sont des pièges classiques de ce framework.

### 3.1 robots.txt

À vérifier sur `https://okiu.fr/robots.txt` — doit exister et renvoyer un `200` :

```
User-agent: *
Allow: /

Sitemap: https://okiu.fr/sitemap.xml
```

**Point critique, souvent raté :** un site invisible pour les crawlers IA ne peut être cité par aucun assistant. Vérifier qu'aucune règle ne bloque, et surtout qu'aucun WAF / protection anti-bot de l'hébergeur ne les filtre silencieusement — ce cas est le plus fréquent et **ne se voit pas dans le robots.txt**. Test réel : `curl -A "PerplexityBot" -I https://okiu.fr/` doit renvoyer `200`.

| Robot | Rôle | Décision |
|---|---|---|
| `Googlebot` | Search + AI Overviews + AI Mode | **Autoriser** (obligatoire) |
| `Google-Extended` | Entraînement Gemini / grounding Vertex. N'affecte **pas** AI Overviews | Autoriser |
| `Bingbot` | Index Bing, qui alimente une partie de la récupération ChatGPT | **Autoriser** |
| `OAI-SearchBot` | Récupération pour ChatGPT Search | **Autoriser** |
| `ChatGPT-User` | Navigation à la demande d'un utilisateur | **Autoriser** |
| `GPTBot` | Entraînement OpenAI | Autoriser |
| `PerplexityBot`, `Perplexity-User` | Perplexity | **Autoriser** |
| `ClaudeBot`, `Claude-User` | Anthropic | Autoriser |
| `Applebot`, `Amazonbot` | Assistants Apple / Amazon | Autoriser |

Aucune raison de bloquer quoi que ce soit : le site est une vitrine publique dont le contenu n'a de valeur que diffusé.

### 3.2 sitemap.xml

- Généré automatiquement à chaque build (Next.js App Router : `app/sitemap.ts`), jamais un fichier statique qui se périme.
- **Uniquement** les URLs canoniques, indexables, en `200`. Aucune page `noindex`, aucune redirection, aucune 404.
- `lastmod` réel (date de modification effective), sinon le champ perd toute valeur.
- Déclaré dans le `robots.txt`, soumis dans Search Console **et** dans Bing Webmaster Tools.
- À re-soumettre après chaque création de page.

### 3.3 Outils à installer

| Outil | Pourquoi | Statut |
|---|---|---|
| Google Search Console | Source de vérité sur Google. Contient depuis 2026 un rapport **Generative AI performance** | `[À COMPLÉTER]` |
| Paramètre d'inclusion aux fonctionnalités d'IA générative (GSC) | Google précise qu'un site doit y être inclus pour être **éligible** à l'affichage dans ses features IA. À vérifier explicitement | `[À COMPLÉTER]` |
| Bing Webmaster Tools | Bing alimente une partie de la récupération ChatGPT. Gratuit, indexation rapide | `[À COMPLÉTER]` |
| IndexNow | Ping instantané de Bing à chaque publication. Trivial à brancher en Next.js | `[À COMPLÉTER]` |
| Analytics (Plausible, Matomo ou GA4) | Doit permettre de lire les **referrers IA** : `chatgpt.com`, `perplexity.ai`, `gemini.google.com`, `claude.ai`, `copilot.microsoft.com` | `[À COMPLÉTER]` |

### 3.4 Codes HTTP, 404, redirections

Piège Next.js n°1 : les 404 « douces ». Une page inexistante doit renvoyer un **vrai statut 404**, pas un 200 affichant un message d'erreur. Google traite les soft 404 comme du contenu de faible qualité.

- [ ] Page 404 personnalisée (`app/not-found.tsx`) renvoyant bien un 404 — vérifier avec `curl -I https://okiu.fr/page-inexistante`.
- [ ] La 404 propose des liens utiles : accueil, `/ressources/`, formulaire pilote. Pas un cul-de-sac.
- [ ] Aucun lien interne cassé — crawl complet (Screaming Frog, gratuit jusqu'à 500 URLs, largement suffisant).
- [ ] Aucune chaîne de redirection (A → B → C). Toujours A → C.
- [ ] `http://` → `https://` en 301. `www.` → apex (ou l'inverse) en 301, une seule forme canonique.
- [ ] `<link rel="canonical">` auto-référente sur chaque page. Présente sur l'accueil — vérifier qu'elle est générée sur les nouvelles pages.
- [ ] Aucune page importante en `noindex` par accident (piège classique : `noindex` global oublié depuis la préprod).

### 3.5 Title, meta description, H1

- **`<title>`** : 50-60 caractères, mot-clé en tête, marque en fin. Unique sur tout le site.
- **`meta description`** : 140-160 caractères. Pas un facteur de classement, mais elle détermine le taux de clic. Une promesse concrète, pas une description du produit.
- **`<h1>`** : un seul par page, contenant ou immédiatement suivi du mot-clé cible.
- **Au moins un `<h2>`** reprend une variante naturelle de la requête.
- Hiérarchie continue (`h1` → `h2` → `h3`), sans saut de niveau. Google précise en 2026 que ses systèmes IA inspectent le DOM rendu et l'arbre d'accessibilité : une structure de titres propre et du HTML sémantique (`<main>`, `<section>`, `<nav>`, `<article>`) valent mieux qu'un empilement de `<div>` non labellisés.
- Aucune duplication de `title` ou de `h1` entre deux pages.

### 3.6 Données structurées (JSON-LD)

Google est explicite : les données structurées **ne sont pas requises** pour l'IA générative, et il ne faut pas y sur-investir. Elles restent utiles pour les rich results et, dans notre cas de conflit de nom, pour lever l'ambiguïté d'entité.

| Type | Où | Pourquoi |
|---|---|---|
| `Organization` | `/` | **Le plus important pour nous.** `name`, `alternateName`, `url`, `logo`, `description`, `sameAs` (LinkedIn et toute fiche tierce), `areaServed: FR`, `foundingDate`. C'est ce qui distingue Okiu d'Okinawa International University aux yeux des systèmes d'entités |
| `SoftwareApplication` | `/` | `applicationCategory: BusinessApplication`, `operatingSystem`, `featureList`. **Omettre `offers`** tant qu'il n'y a pas de prix public — ne jamais inventer un prix pour remplir un champ |
| `BreadcrumbList` | Pages profondes | Fil d'Ariane dans les résultats |
| `Article` | Articles et `/ver-optic/` | `author` (personne réelle et nommée), `datePublished`, `dateModified` |
| `FAQPage` | `/` (bloc FAQ existant) | **À garder, attentes réalistes.** Rich results retirés depuis le 7 mai 2026 : plus aucun affichage. Le balisage reste valide et parsable par Bingbot, PerplexityBot et les crawlers RAG. Coût nul, bénéfice résiduel de compréhension. **Ne pas le traiter comme un levier de visibilité** |

Ne jamais baliser du contenu qui n'est pas visible sur la page.

### 3.7 llms.txt — décision : non

Position tranchée, documentée pour ne pas y revenir :

- Google a confirmé en juin 2026 dans sa documentation officielle que `llms.txt` n'est **pas** un signal de classement, ni pour Search ni pour AI Overviews — ni positif, ni négatif. Le fichier est classé par Google dans les audits « agentic browsing » de Lighthouse, pas dans les audits SEO.
- Aucun grand fournisseur d'IA n'a publiquement confirmé l'utiliser en production. Les adoptants visibles (Stripe, Cloudflare, Vercel, Anthropic) sont des plateformes à documentation technique volumineuse — l'usage réel identifié est l'assistance aux **agents de code**.
- Okiu n'a ni documentation développeur, ni API publique, ni volumétrie de contenu. **Le fichier ne servirait à rien.**
- Piège connu : l'implémentation « une copie Markdown de chaque page » génère du contenu dupliqué à l'échelle du site et peut activement nuire.

**Décision : pas de `llms.txt`.** À réévaluer le jour où Okiu publie une documentation technique destinée à des intégrateurs.

Sujet à surveiller à la place : **WebMCP** (Web Model Context Protocol), en origin trial dans Chrome depuis 2026, qui permet à un site de déclarer des contrats d'outils exploitables par un agent. Sans pertinence pour une vitrine aujourd'hui, mais c'est là que Google met son poids côté agents. Veille passive, aucune action.

### 3.8 Performance et rendu

- Core Web Vitals au vert sur mobile (PageSpeed Insights). Un Next.js statique n'a aucune excuse.
- **Le point le plus important du one-pager :** tout le texte doit être présent dans le HTML rendu **sans interaction**. Vérifier via l'inspection d'URL de GSC, onglet « HTML rendu », que l'intégralité du contenu y figure — **y compris les réponses de la FAQ si elles sont repliées**. Un bloc monté côté client ou dépendant d'un clic peut ne pas être indexé. Sur un site à page unique, un bloc manquant coûte proportionnellement très cher.
- Images en `webp`/`avif`, dimensions explicites, `loading="lazy"` hors du premier écran.
- **Alt text porteur de sens** sur tout visuel signifiant. Le mockup smartphone mérite un alt décrivant ce qu'il montre — ex. « Liste des décisions en attente dans OKIU : pièce manquante sur le dossier Martin, rejet à traiter » — pas « image » ni « capture ».

---

## 4. Chantier sur la page d'accueil

Audit de la version en ligne au 25 août 2026. **À traiter avant toute création de page ou de contenu neuf** — ce sont les gains les plus rapides du plan.

### 4.1 Correctifs

| # | Constat | Correctif | Priorité |
|---|---|---|---|
| 1 | **Le H1 ne contient aucun mot-clé.** « Votre temps appartient à vos clients. Pas à la paperasse. » est une excellente accroche, mais le H1 est le second signal on-page après le title | **Garder le H1**, et faire figurer « tiers payant » et « magasin d'optique » dans le **chapô immédiatement sous le H1**. Le chapô actuel (« OKIU observe vos outils habituels, vérifie vos dossiers de bout en bout… ») ne contient ni l'un ni l'autre — c'est là que ça se corrige, sans toucher à l'impact rédactionnel | **H** |
| 2 | Le H2 de la section Solution — « Un copilote qui s'installe au-dessus de vos outils et de vos mutuelles, pas à leur place » — ne contient ni « opticien », ni « tiers payant », ni « optique ». C'est le H2 le plus stratégique de la page | Réécrire en intégrant une variante, ex. *« Un copilote qui automatise le tiers payant au-dessus de vos outils, pas à leur place »* | **H** |
| 3 | Alt texts des visuels (mockup, journal d'actions) à vérifier | Voir §3.8 | **H** |
| 4 | Balisage `FAQPage` + `Organization` + `SoftwareApplication` : présence à vérifier | Le contenu FAQ est déjà écrit et de bonne qualité — le baliser coûte quelques minutes (§3.6) | **H** |
| 5 | **Ver'Optic** n'est mentionné qu'une fois, en citation, sans lien | Lier la citation vers `/ver-optic/` dès que la page existe | M |
| 6 | **Polylogic** est enfoui dans « Pour qui » et la FAQ | Lier vers `/compatible-polylogic/` dès que la page existe | M |
| 7 | Le sélecteur de logiciel métier du formulaire (Polylogic, Cosium, Optimum, Osmose, WinOptics, MyEasyOptic) | Donnée produit **et** donnée SEO : les logiciels le plus souvent déclarés indiquent quelle page compatibilité créer ensuite. À exploiter en revue mensuelle (§9) | — |

### 4.2 Enrichissement — le vrai levier du one-pager

Puisqu'on ne découpe pas, **on densifie**. Le texte actuel est excellent mais court. Google extrait le passage pertinent d'une page multi-sujets : plus la page couvre le champ lexical réel du métier, plus elle devient éligible sur des requêtes qu'on ne cible même pas explicitement.

Cible : ajouter un à deux paragraphes par section, en langage naturel, introduisant du vocabulaire aujourd'hui absent.

| Section | Vocabulaire à faire entrer naturellement |
|---|---|
| **Le problème** | temps administratif, fin de journée, relance, pièces manquantes, dossier incomplet, télétransmission |
| **La solution** | tiers payant *automatisé*, prise en charge, plateformes mutuelles, OCAM |
| **Le parcours** | accusé de réception, rejet, motif de rejet, demande de prise en charge, suivi de remboursement |
| **Pour qui** | opticien indépendant, dirigeant de magasin d'optique, Polylogic, logiciel métier |
| **FAQ** | Ajouter 2-3 questions réellement posées par les magasins pilotes — elles couvrent des requêtes TOFU gratuitement et alimentent les assistants IA |

**Garde-fou :** on ajoute de la matière utile au lecteur, pas du remplissage lexical. Si un paragraphe n'apprend rien à un opticien, il ne sert à rien à Google non plus.

---

## 5. Contenu

### 5.1 Principe : non-commodity

Google a formalisé en mai 2026 le critère qui compte le plus : produire du contenu **non-commodity** — un point de vue unique, une expérience de première main, quelque chose qu'un modèle génératif ne pourrait pas produire seul.

**Traduction pour Okiu :** un article « comment automatiser le tiers payant » écrit de tête est du contenu commodity que n'importe qui peut générer. **Un relevé réel du temps passé sur le tiers payant chez Ver'Optic, avec la méthode de mesure, est irremplaçable.**

Le garde-fou « pas de statistiques inventées » a donc une conséquence positive à assumer : **produire nos propres chiffres**.

### 5.2 Plan éditorial

| # | Page / article | Requête cible | Angle | Priorité |
|---|---|---|---|---|
| 1 | **`/ver-optic/`** — Combien de temps le tiers payant coûte-t-il vraiment à un magasin d'optique ? Mesure sur `[N]` semaines chez Ver'Optic | combien de temps tiers payant opticien par jour · okiu ver'optic | **Étude de données originale.** Méthode de mesure explicite, chiffres bruts, limites assumées (un seul magasin). Pièce maîtresse du plan : seul contenu reprenable par la presse pro, citable par un assistant IA, et impossible à copier | **H — en premier** |
| 2 | **`/compatible-polylogic/`** — OKIU et Polylogic : ce qu'il lit, ce qu'il n'écrit pas | logiciel compatible Polylogic | Page technique et rassurante : la lecture seule, ce qui est extrait, ce qui ne l'est jamais, comment les autres logiciels arriveront | **H** |
| 3 | `/ressources/rejet-prise-en-charge-mutuelle-opticien/` | rejet prise en charge mutuelle opticien que faire | Typologie concrète des motifs de rejet observés. Terrain fort en TOFU | H |
| 4 | `/ressources/automatiser-tiers-payant-optique/` | comment automatiser le tiers payant en optique | Article pilier. Doit se distinguer du générique : ce qui est réellement automatisable aujourd'hui, ce qui ne l'est pas, et pourquoi. Le principe « il s'arrête et vous prévient » est un point de vue, pas une banalité | M |
| 5 | `/ressources/glossaire-tiers-payant-optique/` | §2.4 | Capte tout le vocabulaire métier en une page. Très bon candidat à la citation par les assistants IA, qui affectionnent les définitions non ambiguës | M |

**Ordre : 1 → 2 → 3 → 4 → 5.** La page Ver'Optic passe en premier parce qu'elle alimente tout le reste (les autres la citeront) et parce qu'elle constitue le prétexte de prise de contact avec la presse pro (§6.3).

### 5.3 Gabarit d'article

- 800 à 1 500 mots. Pas de plancher artificiel : la longueur suit le fond. Google précise qu'il n'y a pas de longueur idéale.
- **Réponse directe à la question dans les deux premières phrases**, avant toute mise en contexte. Utile au lecteur pressé, aux extraits enrichis et aux systèmes de récupération.
- H2 reprenant des variantes naturelles de la requête. Jamais de répétition mécanique.
- Ton identique au reste du site : vocabulaire du métier, aucun jargon IA hors contexte.
- **Auteur nommé**, avec une ligne de biographie établissant la légitimité (signal E-E-A-T, relevé par les assistants IA).
- Dates de publication et de mise à jour visibles.
- Toute donnée est sourcée ou mesurée. Toute donnée manquante est marquée `[À COMPLÉTER]`, jamais estimée.
- Un visuel utile minimum (schéma, capture, tableau) — les features IA de Google remontent images et vidéos, ce qui multiplie les surfaces d'apparition.

### 5.4 Maillage interne

- Chaque article lie vers l'accueil (`#devenir-pilote` ou `#solution`) avec une ancre porteuse de sens : « automatiser le tiers payant », jamais « cliquez ici ».
- Chaque article lie vers au moins un autre contenu `/ressources/` — un article isolé ne transmet rien.
- `/ver-optic/` et `/compatible-polylogic/` se lient mutuellement et sont liées **depuis le corps de l'accueil**, aux endroits où Ver'Optic et Polylogic sont déjà mentionnés.
- Le hub `/ressources/` liste tous les articles ; le footer lie le hub, `/ver-optic/` et `/compatible-polylogic/`.

---

## 6. Hors-site — entité, netlinking, présence

Sur un domaine neuf, face à une université sexagénaire sur le sigle et à des éditeurs installés sur les requêtes logiciel, le contenu seul ne suffit pas. C'est aussi ce qui pèse le plus dans les citations par les assistants IA : ces systèmes cherchent une **convergence entre plusieurs sources indépendantes** avant de recommander une marque. Une entreprise qui n'existe que sur son propre site est traitée avec scepticisme.

### 6.1 Poser l'entité (quelques heures, à faire en premier)

| Action | Effet | Priorité |
|---|---|---|
| Page LinkedIn entreprise Okiu, complète et active | Signal d'entité le plus lu par les systèmes, et canal de distribution réel vers la cible | **H** |
| `Organization` schema avec `sameAs` vers tous les profils officiels | Relie explicitement le site et les profils : c'est ce qui désambiguïse Okiu d'Okinawa International University | **H** |
| Cohérence NAP (nom, contact, description) **strictement identique** partout | Toute variation fragmente l'entité | **H** |
| Fiche Google Business Profile | Google la cite explicitement en 2026 comme levier de visibilité dans les réponses IA. Utile même en B2B sans accueil du public | M |
| Fiches légales (Pappers, societe.com, annuaire-entreprises.data.gouv.fr) | Se créent seules à l'immatriculation, mais à vérifier et compléter : sources que les modèles consultent pour confirmer l'existence d'une entreprise | M |

### 6.2 Annuaires et plateformes

| Cible | Pourquoi | Priorité |
|---|---|---|
| **France Optique** (annuaire fournisseurs de la filière) | Annuaire de référence du secteur. Lien contextuel et audience exactement cible | **H** |
| **Appvizer** | Principal annuaire SaaS francophone, bien indexé, fréquemment repris comme source par les assistants IA sur « meilleur logiciel pour X » | **H** |
| Capterra / GetApp / Software Advice | Écosystème Gartner, très visible sur les requêtes comparatives | M |
| France Num, Bpifrance Hub, French Tech local | Annuaires institutionnels, autorité élevée, gratuits | M |
| Product Hunt / annuaires startup FR | Selon calendrier de lancement public | B |

Aucun de ces liens ne coûte d'argent. **Meilleur rapport effort/impact de tout le plan.**

### 6.3 Presse professionnelle optique

Là où se trouvent simultanément l'audience et l'autorité de domaine.

| Média | Nature |
|---|---|
| **Acuité** (acuite.fr) | Média communautaire de référence des opticiens lunetiers. Actualité de la filière, forum actif |
| **L'Opticien Lunetier** (opticien-lunetier.media) | Mensuel historique de la profession, contenus de fond et d'analyse |
| **Bien Vu** | Autre titre professionnel de la filière — à qualifier |

**L'angle éditorial, c'est la page Ver'Optic (§5.2 #1)** : « nous avons mesuré le temps réellement passé sur le tiers payant dans un magasin indépendant, voici les chiffres et la méthode ». Une donnée originale sur un irritant que tout le lectorat connaît est infiniment plus reprenable qu'un communiqué de lancement produit.

**SILMO Paris 2026 : 25-28 septembre 2026, Paris Nord Villepinte.** Dans un mois. Même sans stand, c'est le moment de l'année où la presse de la filière produit le plus, où les contacts se prennent, et où les recherches de marque montent. **À traiter comme une échéance du plan SEO**, ce qui rend le §0.1 (requêtes de marque) et le §6.1 (entité) opérationnellement urgents : il faut que quelqu'un qui tape « okiu » après le salon trouve le bon site.

### 6.4 Communautés

Le forum d'Acuité et les groupes LinkedIn / Facebook d'opticiens indépendants sont des lieux où la cible discute réellement de ses irritants administratifs — et des sources que les assistants IA consultent lourdement (les plateformes communautaires représentent une part majeure des citations, particulièrement chez ChatGPT et Perplexity).

**Règle absolue :** participation transparente, identifiée, utile. On répond à des questions sur le tiers payant en apportant de la valeur, en s'identifiant comme éditeur d'Okiu. Jamais de faux compte, jamais de faux avis, jamais de mention plantée.

Ce n'est pas seulement éthique : Google a explicitement listé en mai 2026 la recherche de **mentions inauthentiques** parmi les tactiques inefficaces, ses systèmes anti-spam alimentant directement ses features IA.

### 6.5 Ce qu'on ne fait jamais

- Achat de liens, réseaux de sites privés, échanges de liens massifs.
- Faux avis, faux témoignages, faux comptes.
- Communiqués diffusés en masse sur des plateformes de spin.
- Contenu généré en volume pour couvrir chaque variation de requête — qualifié par Google d'abus de contenu à grande échelle, avec une sanction disproportionnée au gain possible sur une niche de cette taille.

---

## 7. Visibilité dans les assistants IA

On reste focalisé sur le trafic humain d'opticiens. Mais une part croissante des recherches de type « quel outil pour automatiser le tiers payant » se pose désormais dans une fenêtre de conversation. Sur une niche sans concurrent établi, **être la réponse nommée est plus atteignable qu'un top 3 Google** — et c'est un trafic à intention très élevée.

### 7.1 Comment chaque moteur s'alimente

| Moteur | Fonctionnement | Levier principal |
|---|---|---|
| **Google AI Overviews / AI Mode** | RAG + query fan-out sur l'index Search classique. Une page doit être indexée et éligible aux extraits | Le SEO classique. Rien de spécifique |
| **Perplexity** | Recherche web quasi systématique, citations obligatoires, fraîcheur valorisée | Contenu récent, crawl autorisé, réponses directes |
| **ChatGPT** | Mélange données d'entraînement et couche de récupération (partiellement adossée à Bing) | Indexation Bing + mentions tierces |
| **Gemini** | Index Google + fan-out | SEO Google |
| **Claude, Le Chat, Copilot** | Récupération web à la demande | Crawl autorisé, pages factuelles claires |

Le recouvrement entre les domaines cités par ces moteurs est faible (~11 % entre ChatGPT et Perplexity). **Pas de raccourci unique.** Le seul dénominateur commun est la clarté d'entité et la convergence de sources indépendantes.

### 7.2 Les cinq leviers, par ordre d'impact

1. **Ne pas être bloqué** (§3.1). Prérequis absolu : un site inaccessible ne peut être cité par personne. Le blocage vient plus souvent de la protection anti-bot de l'hébergeur que du robots.txt — à tester réellement.
2. **Répondre aux questions factuelles sans ambiguïté.** Ce que fait le produit, avec quels logiciels il fonctionne, pour qui, à quel prix, où sont hébergées les données. **La FAQ actuelle répond déjà très bien à tout cela** — c'est l'un des meilleurs atouts IA du site, à condition qu'elle soit dans le HTML rendu (§3.8).
3. **Être mentionné ailleurs que sur okiu.fr** (§6). Levier le plus lourd, le plus lent, et de loin le plus déterminant.
4. **Publier du contenu original et daté** (§5.1). Perplexity valorise explicitement la fraîcheur ; une étude de données horodatée est le format idéal.
5. **Poser l'entité** : `Organization` + `sameAs` + NAP cohérent (§6.1). Sans cela, un assistant interrogé sur « Okiu » a de bonnes chances de répondre au sujet d'une université japonaise.

### 7.3 Protocole de mesure (manuel, mensuel, 20 minutes)

Aucun outil tiers n'a accès aux systèmes internes de ces moteurs — Google met explicitement en garde contre ceux qui le prétendent. La mesure fiable et gratuite est manuelle.

Liste **figée** de 10 prompts, rejouée chaque mois, en session déconnectée, sur ChatGPT / Perplexity / Gemini / Claude / Le Chat :

1. Comment automatiser le tiers payant dans un magasin d'optique ?
2. Quel outil pour gérer les prises en charge mutuelle chez un opticien ?
3. Existe-t-il une solution compatible avec Polylogic pour le tiers payant ?
4. Comment réduire le temps administratif d'un opticien indépendant ?
5. Que faire face à un rejet de prise en charge mutuelle en optique ?
6. Qu'est-ce qu'Okiu ?
7. Okiu, c'est quoi comme logiciel pour opticien ?
8. Quels logiciels aident les opticiens indépendants sur l'administratif ?
9. Combien de temps un opticien passe-t-il sur le tiers payant ?
10. `[À COMPLÉTER — une requête issue des données GSC réelles]`

Noter chaque mois : Okiu est-il **cité** ? **lié** ? **décrit correctement** ? Et surtout — **quelles autres sources sont citées** ? Cette dernière colonne est la plus utile du tableau : elle donne la liste de cibles netlinking du mois suivant.

Compléter par la lecture des referrers IA dans l'analytics (§3.3) : seul chiffre de trafic réellement attribuable.

---

## 8. Plan d'implémentation

Séquence par rapport impact/effort. **Ne pas produire de contenu neuf avant la fin du sprint 1.**

### Sprint 0 — Fondations invisibles · ~0,5 jour

- [x] Vérifier `robots.txt` (existence, `200`, sitemap déclaré) — §3.1
      > 2026-08-25 : déjà conforme (`app/robots.ts`) — `Allow: /` + `Sitemap: https://okiu.fr/sitemap.xml`. Vérifié en local (build + `out/robots.txt`). Aucun changement nécessaire.
- [x] Tester l'accès réel des crawlers IA : `curl -A "PerplexityBot" -I https://okiu.fr/` — §3.1
      > 2026-08-25 : `HTTP/2 200`, servi par Vercel, aucun blocage. PerplexityBot testé ; autres user-agents de la table §3.1 (GPTBot, OAI-SearchBot, ClaudeBot…) pas encore testés individuellement — à faire si on veut couvrir toute la liste, mais un même WAF/règle bloquerait généralement tous les bots de la même façon.
- [x] Vérifier l'absence de filtrage anti-bot côté hébergeur — §3.1
      > 2026-08-25 : confirmé par le test PerplexityBot ci-dessus — réponse `200` normale, pas de challenge/blocage Vercel visible.
- [x] Générer `app/sitemap.ts`, vérifier le contenu, soumettre — §3.2
      > 2026-08-25 : fichier existait déjà (3 URLs) mais `lastModified` utilisait `new Date()` au build — donc identique et daté du jour de build pour les 3 URLs à chaque déploiement, même sans changement de contenu. Corrigé : dates statiques par page (`LAST_MODIFIED`), à mettre à jour manuellement quand une page change réellement. Vérifié dans `out/sitemap.xml`. Soumis dans Search Console (fait par Thomas avant cette session).
- [x] Créer et vérifier Google Search Console — §3.3
      > 2026-08-25 : fait par Thomas avant cette session. Rapport robots.txt/statistiques d'exploration encore vides au moment du check (propriété récente, Googlebot pas encore passé) — normal, à repasser voir sous 24-48h ou après « Demander une indexation » sur `/`.
- [ ] Vérifier le paramètre d'inclusion aux fonctionnalités d'IA générative dans GSC — §3.3
- [x] Créer Bing Webmaster Tools, soumettre le sitemap — §3.3
      > 2026-08-25 : fait par Thomas.
- [x] Brancher IndexNow — §3.3
      > 2026-08-25 : clé déposée dans `public/7dd6450fe07b468e88eadc4d7b0e544f.txt`. Vérifié en local (build + serveur statique) : fichier repris dans `out/`, servi à la bonne URL, contenu exact (32 caractères, sans retour à la ligne parasite). **Pas encore commité/déployé** — la validation réelle par Bing ne sera possible qu'une fois en ligne sur `okiu.fr`.
- [~] Vérifier la lecture des referrers IA dans l'analytics — §3.3
      > 2026-08-25 : aucun outil n'était installé (cf. Phase 7 du CLAUDE.md, décision reportée). Branché **Vercel Analytics** — `npm install @vercel/analytics`, `<Analytics />` ajouté dans `app/layout.tsx`, texte confidentialité (`content/site.ts`) mis à jour pour nommer l'outil. Vérifié en local : script bien inclus dans le bundle JS, build propre. **Pas commité/déployé.** La vérification réelle des referrers IA (`chatgpt.com`, `perplexity.ai`, etc. dans l'onglet Referrers du dashboard Vercel) ne sera possible qu'après déploiement + accumulation de trafic — à repasser voir plus tard.
- [x] Tester la 404 réelle : `curl -I https://okiu.fr/page-inexistante` — §3.4
      > 2026-08-25 : testé en local (`npm run build` + `npx serve out`) → `HTTP/1.1 404 Not Found` confirmé. **Corrigé au passage** : la 404 était la page par défaut Next.js (anglais, aucun lien utile — un cul-de-sac contraire à la consigne §3.4). Créé `app/not-found.tsx` + entrée `notFound` dans `content/site.ts` : contenu en français, `noindex, follow`, liens retour accueil et formulaire pilote (`/#devenir-pilote`), boutons `.btn` (cible tactile ≥44px). Re-testé après correctif : toujours 404 réel, contenu FR présent dans le HTML rendu. Test sur le domaine réel `okiu.fr` à refaire après déploiement.
- [x] Vérifier canonicals, redirections `http`/`www`, absence de `noindex` résiduel — §3.4
      > 2026-08-25 : canonicals auto-référentes correctes et uniques sur les 3 pages (`/`, `/mentions-legales/`, `/confidentialite/`), aucun `noindex` résiduel sur les pages réelles (seule la 404 porte `noindex`, comme attendu). Redirections `http→https` et `www→apex` **non testables en local** : elles dépendent de la configuration DNS/Vercel en production, pas du code. À vérifier après déploiement (Sprint 8).
- [x] **Vérifier le HTML rendu dans GSC** : tout le texte, FAQ comprise, doit y figurer — §3.8
      > 2026-08-25 : vérifié par inspection directe du HTML statique généré (`out/index.html`) plutôt que l'outil GSC (pas encore de compte) — équivalent, puisque GSC affiche le DOM rendu côté client sur la même page servie. Les 6 questions/réponses de la FAQ sont intégralement présentes dans le HTML, y compris repliées (`<details>`), avec le JSON-LD `FAQPage`. Aucun contenu monté uniquement côté client. Re-vérification via l'outil GSC lui-même à faire une fois le compte créé.

### Sprint 1 — Corriger et enrichir l'accueil · ~1 jour

- [ ] Réécrire le chapô sous le H1 pour y faire entrer « tiers payant » et « magasin d'optique » — §4.1 #1
- [ ] Réécrire le H2 de la section Solution — §4.1 #2
- [ ] Corriger les alt texts (mockup, journal d'actions) — §4.1 #3
- [ ] Implémenter `Organization` + `SoftwareApplication` + `FAQPage` en JSON-LD — §3.6
- [ ] Enrichir chaque section d'un à deux paragraphes portant le vocabulaire métier — §4.2
- [ ] Ajouter 2-3 questions FAQ issues des magasins pilotes — §4.2

### Sprint 2 — Entité et hors-site · ~0,5 jour, effet durable

- [ ] Créer la page LinkedIn entreprise — §6.1
- [ ] Ajouter `sameAs` au schema `Organization` — §6.1
- [ ] Figer le NAP de référence et l'appliquer partout — §6.1
- [ ] Inscription **France Optique** — §6.2
- [ ] Inscription **Appvizer** — §6.2
- [ ] Fiche Google Business Profile — §6.1
- [ ] Vérifier / compléter Pappers et annuaire-entreprises — §6.1

**À faire avant le SILMO (25-28 septembre 2026).**

### Sprint 3 — Les deux pages qui ajoutent de la matière

- [ ] **`/ver-optic/`** — étude de données. Bloquant : `[À COMPLÉTER — nombre de semaines de mesure disponibles]` — §5.2 #1
- [ ] Lier depuis la citation Ver'Optic de l'accueil — §5.4
- [ ] **`/compatible-polylogic/`** — §5.2 #2
- [ ] Lier depuis la section « Pour qui » de l'accueil — §5.4
- [ ] Mettre à jour footer et sitemap — §1.4

### Sprint 4 — Presse et contenu, en parallèle

- [ ] Prise de contact Acuité et L'Opticien Lunetier, avec la page Ver'Optic comme angle — §6.3
- [ ] Ouvrir `/ressources/` avec l'article rejets — §5.2 #3
- [ ] Articles #4 et #5, un par mois maximum — §5.2

### Rythme de croisière

- [ ] Revue mensuelle — §9

---

## 9. Mesure

### KPI primaire

**Nombre de candidatures pilotes qualifiées, par canal d'origine.** Seul chiffre qui compte. Ajouter un champ « comment nous avez-vous connus ? » au formulaire : seule attribution fiable à ce niveau de volume.

### KPI secondaires

| Indicateur | Source | Fréquence |
|---|---|---|
| Impressions sur requêtes non-marque | GSC → Performance → Requêtes | Mensuel |
| Impressions sur requêtes de marque (`okiu*`) | GSC, filtre marque | Mensuel |
| Visibilité dans les features IA de Google | GSC → Generative AI performance | Mensuel |
| Pages indexées vs publiées | GSC → Indexation | Mensuel |
| Sessions depuis referrers IA | Analytics (§3.3) | Mensuel |
| Citations dans les assistants | Protocole §7.3 | Mensuel |
| Domaines référents acquis | Liste tenue à la main | Mensuel |

### Ce qu'on ne mesure pas

- **La position moyenne GSC.** Statistiquement illisible à ces volumes, et source de mauvaises décisions.
- Les scores d'outils tiers prétendant refléter des métriques internes de Google.
- Le trafic brut. Cinq visites d'opticiens valent mieux que cinq cents visites hors cible.

### Rituel mensuel · 30 minutes

1. GSC → Performance → Requêtes, 28 derniers jours. **Identifier les requêtes qui génèrent des impressions sans clic** : candidates naturelles à renforcer, Google indique lui-même où le site est déjà jugé pertinent.
2. Rejouer les 10 prompts du §7.3, noter les résultats et les sources concurrentes citées.
3. Relever les logiciels métier déclarés dans les formulaires → décider si une nouvelle page compatibilité se justifie (uniquement si la compatibilité est **effective**).
4. Mettre à jour la table §2 avec les requêtes réelles émergentes, notamment le vocabulaire observé sur le terrain chez Ver'Optic.
5. `site:okiu.fr` : contrôle d'indexation uniquement, pas de positionnement.

---

## 10. Garde-fous

- **Jamais de sacrifice de la lisibilité humaine à la densité de mots-clés.** Google précise en 2026 qu'il n'est pas nécessaire de couvrir chaque variation de formulation : ses systèmes comprennent les synonymes.
- **Rien qui ne soit vrai en phase pilote.** Pas de statistique inventée, pas de client fictif, pas de fonctionnalité en roadmap présentée comme disponible. Toute donnée manquante est marquée `[À COMPLÉTER]`, jamais estimée. **Cette règle prime sur toute considération SEO.**
- **Ne pas éclater le one-pager** (§1.1). Une nouvelle page ne se crée que si elle apporte de la matière qui n'existe nulle part — et jamais sur la requête principale de l'accueil.
- **Pas de mention inauthentique, pas de faux avis, pas d'achat de liens** (§6.5).
- **Le contenu large attire un public plus large que la cible du MVP** (réseaux, franchises). Ce n'est pas du trafic gaspillé : c'est à la section « Pour qui » de qualifier qui est concerné, pas au mot-clé de filtrer en amont.
- **Ne pas cibler les requêtes du §2.5**, en particulier « logiciel pour opticien » sans qualificatif.
- **Ne pas confondre positionnement produit et cible SEO.** « Copilote » est un excellent mot sur la page et un mauvais mot-clé. Les deux affirmations sont vraies simultanément.
- **Ne pas sur-investir.** Le SEO est un canal secondaire (§0.2). Si un arbitrage se pose entre écrire un cinquième article et passer une journée au SILMO ou au téléphone avec un opticien, le SEO perd.

---

## Annexe — Sources de référence

| Sujet | Source |
|---|---|
| Optimisation pour l'IA générative sur Google | `developers.google.com/search/docs/fundamentals/ai-optimization-guide` (mai 2026 ; section llms.txt ajoutée en juin 2026) |
| Contenu utile et non-commodity | `developers.google.com/search/docs/fundamentals/creating-helpful-content` |
| Fondamentaux SEO | `developers.google.com/search/docs/fundamentals/seo-starter-guide` |
| Statut FAQPage | Documentation FAQPage de Google — rich results retirés le 7 mai 2026 |
| Rapport Generative AI performance | Search Console → Performance |

### Journal des décisions

| Date | Décision | Motif |
|---|---|---|
| Août 2026 | **Conserver le one-pager**, ne créer que des pages à matière nouvelle | Cannibalisation, politique anti-spam de Google sur les pages par variation de requête, conversion (§1.1) |
| Août 2026 | **Abandonner `/tiers-payant-automatise/`** | Cannibaliserait l'accueil sur sa requête principale (§1.3) |
| Août 2026 | **Ne pas publier de `llms.txt`** | Confirmé sans effet par Google, aucun usage réel hors documentation développeur (§3.7) |
| Août 2026 | **Rétrograder `FAQPage`** de levier à hygiène | Rich results retirés le 7 mai 2026 (§0.3) |
| Août 2026 | **Réintégrer les requêtes de marque qualifiées** | Les plus convertissantes, sans concurrence, écartées à tort (§0.1) |
| Août 2026 | **Retirer « copilote » et « logiciel pour opticien » des cibles** | Terrain désert d'un côté, conflit de positionnement de l'autre (§2.5) |

*Mis à jour en août 2026. L'écosystème des moteurs de réponse évolue vite : revérifier §0.3, §3.7 et §7.1 avant toute décision structurante prise plus de six mois après cette date.*