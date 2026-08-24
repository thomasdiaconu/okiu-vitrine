# OKIU — Textes pré-rédigés (sections nouvelles)

*Marque renommée de CHΛRLY vers OKIU (2026-07-20) ; les occurrences ci-dessous ont été mises à jour en conséquence.*

*À valider par le dirigeant, puis à porter tels quels dans `content/site.ts`. Couvre les trois zones marquées `// DRAFT` du plan : la section Pour qui, la FAQ et les micro-textes du formulaire. Les textes des autres sections (hero, problème, solution, parcours, confiance, pilote) sont repris de la maquette, déjà validée.*

*Registre : vouvoiement, mots du métier, phrases courtes. Jamais de jargon IA hors de la FAQ où il sert à rassurer. Aucune promesse qui ne soit pas vraie en phase pilote.*

---

## Section « Pour qui » (`#pour-qui`)

**Eyebrow :** Pour qui

**Titre (H2) :** Pensé pour les opticiens indépendants

**Texte :**
OKIU s'adresse aux dirigeants de magasins d'optique indépendants — ceux qui font l'accueil, le conseil, la vente, et l'administratif le soir. Pas aux grands réseaux qui ont un service de gestion pour ça.

Il fonctionne aujourd'hui au-dessus de Polylogic, en lecture seule : il n'écrit rien dans votre logiciel métier, il s'en sert pour savoir quels dossiers demandent une prise en charge. La compatibilité avec d'autres logiciels (Cosium, Optimum, Osmose, WinOptics, MyEasyOptic) viendra ensuite — dites-nous le vôtre dans le formulaire, c'est ce qui guidera l'ordre.

**Encadré (optionnel) :** Vous utilisez un autre logiciel que Polylogic ? Candidatez quand même : votre réponse compte dans nos priorités.

---

## Section FAQ (`#faq`)

**Eyebrow :** Questions directes

**Titre (H2) :** Ce que vous vous demandez sûrement

### 1. OKIU remplace-t-il mon logiciel métier ?

Non, et il n'essaiera pas. OKIU se place au-dessus de vos outils existants — Polylogic, vos emails, les plateformes des mutuelles — et les fait travailler ensemble. Vous ne changez rien à votre installation, rien à vos habitudes de vente. Il lit, il rapproche, il agit sur les plateformes des mutuelles ; votre logiciel métier reste le vôtre.

### 2. Et s'il fait une erreur en mon nom ?

C'est la question que nous nous sommes posée en premier, et elle a façonné tout le produit. Trois garde-fous : OKIU n'agit que sur des opérations qu'il connaît parfaitement, étape par étape — face à la moindre situation inconnue, il s'arrête et vous prévient, il n'improvise jamais. Au démarrage, il fonctionne en mode supervisé : chaque envoi vous est présenté avant confirmation, tant que la confiance se construit. Et chaque action est inscrite dans un journal que vous consultez quand vous voulez : vous savez toujours ce qui a été fait en votre nom, et quand.

### 3. Que se passe-t-il si le site de la mutuelle change ?

OKIU s'arrête et vous le dit. C'est un principe, pas une limitation : plutôt que de « tenter sa chance » sur une page qu'il ne reconnaît plus, il met le dossier de côté, vous alerte, et nous mettons à jour sa connaissance de la plateforme. Aucune demande n'est envoyée à l'aveugle.

### 4. Qui voit mes données ?

Personne d'autre que vous. En version pilote, OKIU est installé sur l'infrastructure de votre magasin : vos dossiers clients ne partent pas dans un cloud tiers. Les seules données qui transitent sont celles que vous transmettez déjà vous-même aux mutuelles — OKIU le fait à votre place, pas à sa manière.

### 5. Avec quels logiciels métier fonctionne-t-il ?

Polylogic aujourd'hui. Cosium, Optimum, Osmose, WinOptics et MyEasyOptic sont sur la feuille de route, dans l'ordre que les demandes des magasins pilotes dessineront.

### 6. Combien ça coûte ?

Réponse honnête : OKIU est en phase pilote, construit en conditions réelles avec un premier magasin. Les conditions se discutent au cas par cas avec les prochains magasins pilotes — l'engagement est simple et le risque financier volontairement minime. Le prix définitif sera fixé quand le produit aura prouvé, chiffres à l'appui, le temps qu'il rend.

---

## Formulaire « Devenir magasin pilote » (`#devenir-pilote`)

**Eyebrow :** Rejoindre le pilote

**Titre (H2) :** Rendez du temps à votre métier

**Intro :** Nous ouvrons progressivement OKIU à quelques magasins pilotes. Dites-nous qui vous êtes — nous revenons vers vous rapidement, sans démarchage et sans engagement.

**Champs :**

| Champ | Label | Placeholder / options | Requis |
|---|---|---|---|
| Nom | Votre nom | Prénom et nom | oui |
| Magasin | Votre magasin | Nom et ville du magasin | oui |
| Email | Votre email | vous@votremagasin.fr | oui |
| Logiciel | Votre logiciel métier | Sélectionner… / Polylogic / Cosium / Optimum / Osmose / WinOptics / MyEasyOptic / Autre | oui |
| Message | Un mot sur votre situation *(facultatif)* | Ce qui vous prend le plus de temps aujourd'hui… | non |

**Bouton :** Devenir magasin pilote

**États :**
- Envoi en cours : « Envoi en cours… »
- Succès : « Merci ! Votre demande est bien arrivée. Nous revenons vers vous sous quelques jours. »
- Erreur : « L'envoi n'a pas fonctionné. Réessayez, ou écrivez-nous directement : [contact@…] » *(lien mailto — adresse à compléter)*

**Note RGPD (sous le formulaire) :** Ces informations servent uniquement à vous recontacter au sujet du pilote. Elles ne sont ni partagées, ni utilisées à d'autres fins. [Politique de confidentialité →]

**Erreurs de champ (validation) :**
- Email invalide : « Vérifiez le format de votre email. »
- Champ requis vide : « Ce champ est nécessaire pour vous recontacter. »

---

## Micro-textes divers

- **CTA header (desktop) :** Devenir magasin pilote — **(mobile, compact) :** Devenir pilote
- **CTA hero secondaire :** Voir comment ça marche
- **Lien footer :** Mentions légales · Confidentialité · contact@… *(à compléter)*
- **Mention légale (mentions légales, 1re ligne) :** OKIU est édité par [À COMPLÉTER]. *(plus de règle de double graphie depuis le renommage OKIU — la marque s'écrit normalement partout, voir CLAUDE.md)*