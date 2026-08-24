export const BRAND = "OKIU";

export const SITE_URL = "https://okiu.fr";

export type NavLink = { label: string; href: string; mobileVisible?: boolean };
export type CtaLink = { label: string; href: string };
export type LegalLink = { label: string; href: string };
export type ChipItem = { label: string; hot: boolean };
export type PhoneItem = { status: "ok" | "warn"; title: string; subtitle: string };
export type PhoneData = {
  title: string;
  subtitle: string;
  items: PhoneItem[];
  tabs: string[];
  activeTab: string;
};
export type Pilier = { num: string; title: string; text: string };
export type Etape = { num: number; title: string; text: string };
export type JournalRow = { label: string; time: string };
export type FaqItem = { question: string; answer: string };
export type PiloteChiffre = { label: string; value: string };
export type SelectField = {
  label: string;
  placeholder: string;
  options: string[];
  required: boolean;
};
export type TextField = { label: string; placeholder: string; required: boolean };
export type AutocompleteField = {
  label: string;
  placeholder: string;
  required: boolean;
  hint: string;
};
export type LegalSection = { heading: string; paragraphs: string[] };

export const site = {
  brand: BRAND,

  nav: {
    links: [
      { label: "Comment ça marche", href: "#parcours" },
      { label: "La confiance", href: "#confiance" },
      { label: "Pour qui", href: "#pour-qui" },
      { label: "FAQ", href: "#faq", mobileVisible: true },
    ] satisfies NavLink[],
    ctaDesktop: "Devenir magasin pilote",
    ctaMobile: "Devenir pilote",
    ctaHref: "#devenir-pilote",
  },

  hero: {
    eyebrow: "Pour les dirigeants de magasins d'optique",
    title: "Votre temps appartient à vos clients. Pas à la paperasse.",
    lead: `${BRAND} observe vos outils habituels, vérifie vos dossiers de bout en bout, et n'interrompt votre journée que pour les décisions qui comptent vraiment.`,
    ctaPrimary: { label: "Devenir magasin pilote", href: "#devenir-pilote" } satisfies CtaLink,
    ctaSecondary: { label: "Voir comment ça marche", href: "#parcours" } satisfies CtaLink,
    note: "Aucun nouveau logiciel à apprendre. Aucun changement d'habitude.",
    phone: {
      title: "Aujourd'hui",
      subtitle: "2 décisions en attente",
      items: [
        {
          status: "warn",
          title: "Pièce manquante — Dossier Martin",
          subtitle: "Ordonnance à confirmer avant envoi",
        },
        {
          status: "warn",
          title: "Rejet à traiter — Dossier #474",
          subtitle: "Motif : date de naissance incohérente",
        },
        {
          status: "ok",
          title: "Demande envoyée — Dossier #482",
          subtitle: "Traité automatiquement, 08:41",
        },
        {
          status: "ok",
          title: "Accusé reçu — Dossier #479",
          subtitle: "Traité automatiquement, 08:22",
        },
      ] satisfies PhoneItem[],
      tabs: ["Décisions", "Journal"],
      activeTab: "Décisions",
    } satisfies PhoneData,
  },

  probleme: {
    eyebrow: "Le problème",
    title: "Chaque vente laisse un dossier de tiers payant invisible.",
    text: "Derrière chaque paire de lunettes vendue, un dossier se met en route : vérifier l'ordonnance, contrôler la prise en charge, rapprocher les documents, suivre le remboursement, relancer en cas de rejet. Ce travail ne se voit jamais au comptoir. Il se voit dans votre emploi du temps.",
    chips: [
      { label: "Contrôle des ordonnances", hot: true },
      { label: "Vérification des prises en charge", hot: true },
      { label: "Rapprochement des documents", hot: false },
      { label: "Suivi des remboursements", hot: true },
      { label: "Traitement des rejets", hot: false },
      { label: "Relances administratives", hot: false },
    ] satisfies ChipItem[],
  },

  solution: {
    eyebrow: "La solution",
    title: "Un copilote qui s'installe au-dessus de vos outils et de vos mutuelles, pas à leur place.",
    piliers: [
      {
        num: "01",
        title: "Il observe",
        text: `${BRAND} regarde votre logiciel habituel et vos e-mails, sans rien changer à vos habitudes de travail ni à vos outils.`,
      },
      {
        num: "02",
        title: "Il vérifie et agit",
        text: `Quand une tâche est fiable et bien maîtrisée, ${BRAND} l'exécute lui-même : recherche du dossier, envoi de la demande, suivi de la réponse.`,
      },
      {
        num: "03",
        title: "Il vous alerte si besoin",
        text: `Erreur, ambiguïté, dossier incomplet : ${BRAND} s'arrête et vous prévient. Jamais d'action à l'aveugle.`,
      },
    ] satisfies Pilier[],
  },

  parcours: {
    eyebrow: "Le parcours, concrètement",
    title: `Une journée de prise en charge avec ${BRAND}`,
    etapes: [
      {
        num: 1,
        title: "Une vente est enregistrée",
        text: `Vous encaissez normalement, comme toujours. ${BRAND} voit le dossier passer, sans rien changer à votre façon de travailler.`,
      },
      {
        num: 2,
        title: `${BRAND} vérifie le dossier`,
        text: "Assuré, prise en charge, pièces jointes : si tout est en ordre, il envoie lui-même la demande à la mutuelle.",
      },
      {
        num: 3,
        title: "Il suit la réponse",
        text: `Accusé reçu, rejet, silence : ${BRAND} contrôle ce qui revient et comprend pourquoi, sans que vous ayez à aller chercher l'information.`,
      },
      {
        num: 4,
        title: "Vous recevez une liste courte",
        text: "Sur votre téléphone, seulement les décisions qui ont vraiment besoin de vous : une erreur, un rejet, un dossier incomplet.",
      },
      {
        num: 5,
        title: `Vous décidez, ${BRAND} garde la mémoire`,
        text: `Un geste suffit. Tout ce que ${BRAND} a fait automatiquement reste consultable à tout moment, dans un journal clair.`,
      },
    ] satisfies Etape[],
  },

  confiance: {
    eyebrow: "La confiance d'abord",
    title: "Jamais d'exécution à l'aveugle, même face à un rejet.",
    lead: `${BRAND} commence toujours en mode supervisé : chaque envoi automatique reste visible avant d'être confirmé, le temps de construire la confiance à votre rythme.`,
    garanties: [
      "Tout est tracé, à tout moment consultable",
      "Rien ne s'automatise tant que ce n'est pas fiable",
      "Vous gardez toujours la main sur les décisions",
    ],
    journal: {
      heading: "Journal d'actions",
      rows: [
        { label: "Demande envoyée — Dossier #482", time: "08:41" },
        { label: "Accusé reçu — Dossier #479", time: "08:22" },
        { label: "Rejet qualifié — Dossier #474", time: "08:05" },
        { label: "Demande envoyée — Dossier #471", time: "07:58" },
      ] satisfies JournalRow[],
    },
  },

  pilote: {
    quote: `${BRAND} est aujourd'hui testé en conditions réelles chez Ver'Optic, magasin pilote du programme.`,
    cite: "Programme pilote — 2026",
    // Réservé aux mesures post-MVP chez Ver'Optic (temps gagné, dossiers traités...) — vide tant qu'aucun chiffre n'est mesuré.
    chiffres: [] as PiloteChiffre[],
  },

  pourQui: {
    eyebrow: "Pour qui",
    title: "Pensé pour les opticiens indépendants",
    paragraphs: [
      `${BRAND} s'adresse aux dirigeants de magasins d'optique indépendants — ceux qui font l'accueil, le conseil, la vente, et l'administratif le soir. Pas aux grands réseaux qui ont un service de gestion pour ça.`,
      "Il fonctionne aujourd'hui au-dessus de Polylogic, en lecture seule : il n'écrit rien dans votre logiciel métier, il s'en sert pour savoir quels dossiers demandent une prise en charge. La compatibilité avec d'autres logiciels (Cosium, Optimum, Osmose, WinOptics, MyEasyOptic) viendra ensuite — dites-nous le vôtre dans le formulaire, c'est ce qui guidera l'ordre.",
    ],
    callout:
      "Vous utilisez un autre logiciel que Polylogic ? Candidatez quand même : votre réponse compte dans nos priorités.",
  },

  faq: {
    eyebrow: "Questions directes",
    title: "Ce que vous vous demandez sûrement",
    items: [
      {
        question: `${BRAND} remplace-t-il mon logiciel métier ?`,
        answer: `Non, et il n'essaiera pas. ${BRAND} se place au-dessus de vos outils existants — Polylogic, vos emails, les plateformes des mutuelles — et les fait travailler ensemble. Vous ne changez rien à votre installation, rien à vos habitudes de vente. Il lit, il rapproche, il agit sur les plateformes des mutuelles ; votre logiciel métier reste le vôtre.`,
      },
      {
        question: "Et s'il fait une erreur en mon nom ?",
        answer: `C'est la question que nous nous sommes posée en premier, et elle a façonné tout le produit. Trois garde-fous : ${BRAND} n'agit que sur des opérations qu'il connaît parfaitement, étape par étape — face à la moindre situation inconnue, il s'arrête et vous prévient, il n'improvise jamais. Au démarrage, il fonctionne en mode supervisé : chaque envoi vous est présenté avant confirmation, tant que la confiance se construit. Et chaque action est inscrite dans un journal que vous consultez quand vous voulez : vous savez toujours ce qui a été fait en votre nom, et quand.`,
      },
      {
        question: "Que se passe-t-il si le site de la mutuelle change ?",
        answer: `${BRAND} s'arrête et vous le dit. C'est un principe, pas une limitation : plutôt que de « tenter sa chance » sur une page qu'il ne reconnaît plus, il met le dossier de côté, vous alerte, et nous mettons à jour sa connaissance de la plateforme. Aucune demande n'est envoyée à l'aveugle.`,
      },
      {
        question: "Qui voit mes données ?",
        answer: `Personne d'autre que vous. En version pilote, ${BRAND} est installé sur l'infrastructure de votre magasin : vos dossiers clients ne partent pas dans un cloud tiers. Les seules données qui transitent sont celles que vous transmettez déjà vous-même aux mutuelles — ${BRAND} le fait à votre place, pas à sa manière.`,
      },
      {
        question: "Avec quels logiciels métier fonctionne-t-il ?",
        answer:
          "Polylogic aujourd'hui. Cosium, Optimum, Osmose, WinOptics et MyEasyOptic sont sur la feuille de route, dans l'ordre que les demandes des magasins pilotes dessineront.",
      },
      {
        question: "Combien ça coûte ?",
        answer: `Réponse honnête : ${BRAND} est en phase pilote, construit en conditions réelles avec un premier magasin. Les conditions se discutent au cas par cas avec les prochains magasins pilotes — l'engagement est simple et le risque financier volontairement minime. Le prix définitif sera fixé quand le produit aura prouvé, chiffres à l'appui, le temps qu'il rend.`,
      },
    ] satisfies FaqItem[],
  },

  cta: {
    eyebrow: "Rejoindre le pilote",
    title: "Rendez du temps à votre métier",
    intro: `Nous ouvrons progressivement ${BRAND} à quelques magasins pilotes. Dites-nous qui vous êtes — nous revenons vers vous rapidement, sans démarchage et sans engagement.`,
    fields: {
      nom: { label: "Votre nom", placeholder: "Prénom et nom", required: true } satisfies TextField,
      magasin: {
        label: "Nom du magasin",
        placeholder: "Nom de votre magasin",
        required: true,
      } satisfies TextField,
      ville: {
        label: "Ville",
        placeholder: "Commencez à taper le nom de votre ville…",
        required: true,
        hint: "Sélectionnez votre ville dans la liste proposée.",
      } satisfies AutocompleteField,
      email: {
        label: "Votre email",
        placeholder: "vous@votremagasin.fr",
        required: true,
      } satisfies TextField,
      logiciel: {
        label: "Votre logiciel métier",
        placeholder: "Sélectionner…",
        options: ["Polylogic", "Cosium", "Optimum", "Osmose", "WinOptics", "MyEasyOptic", "Autre"],
        required: true,
      } satisfies SelectField,
      message: {
        label: "Un mot sur votre situation (facultatif)",
        placeholder: "Ce qui vous prend le plus de temps aujourd'hui…",
        required: false,
      } satisfies TextField,
    },
    submitLabel: "Devenir magasin pilote",
    states: {
      sending: "Envoi en cours…",
      success: "Merci ! Votre demande est bien arrivée. Nous revenons vers vous sous quelques jours.",
      error: "L'envoi n'a pas fonctionné. Vérifiez votre connexion et réessayez.",
    },
    fieldErrors: {
      emailInvalide: "Vérifiez le format de votre email.",
      requisVide: "Ce champ est nécessaire pour vous recontacter.",
      villeInvalide: "Sélectionnez une ville dans la liste proposée.",
      villeIndisponible: "Recherche de villes indisponible pour le moment. Réessayez dans un instant.",
    },
    rgpdNote:
      "Ces informations servent uniquement à vous recontacter au sujet du pilote. Elles ne sont ni partagées, ni utilisées à d'autres fins.",
    rgpdLink: { label: "Politique de confidentialité →", href: "/confidentialite/" } satisfies CtaLink,
  },

  footer: {
    tagline: "Le temps rendu à l'opticien.",
    contactLink: { label: "Nous contacter", href: "/#devenir-pilote" } satisfies CtaLink,
    legalLinks: [
      { label: "Mentions légales", href: "/mentions-legales/" },
      { label: "Confidentialité", href: "/confidentialite/" },
    ] satisfies LegalLink[],
    copyright: `© ${BRAND}`,
  },

  legal: {
    backLabel: "← Retour à l'accueil",
  },

  mentionsLegales: {
    title: "Mentions légales",
    intro: `${BRAND} est édité par [À COMPLÉTER].`,
    sections: [
      {
        heading: "Éditeur",
        paragraphs: [
          "[À COMPLÉTER] — forme juridique, numéro SIREN, siège social.",
          "Directeur de la publication : [À COMPLÉTER].",
        ],
      },
      {
        heading: "Hébergement",
        paragraphs: ["Ce site est hébergé par Vercel Inc. (vercel.com)."],
      },
      {
        heading: "Contact",
        paragraphs: [
          "Pour toute question relative à ce site, utilisez le formulaire « Devenir magasin pilote » en page d'accueil.",
        ],
      },
      {
        heading: "Propriété intellectuelle",
        paragraphs: [
          "L'ensemble des contenus de ce site (textes, logo, mise en page) est protégé par le droit de la propriété intellectuelle. Toute reproduction sans autorisation préalable est interdite.",
        ],
      },
    ] satisfies LegalSection[],
  },

  confidentialite: {
    title: "Politique de confidentialité",
    intro:
      `Cette page décrit les données collectées par le site vitrine, à ne pas confondre avec le produit ${BRAND} lui-même (déployé chez les magasins pilotes), qui n'est pas couvert ici.`,
    sections: [
      {
        heading: "Données collectées",
        paragraphs: [
          "Le formulaire « Devenir magasin pilote » collecte : votre nom, le nom et la ville de votre magasin, votre email, votre logiciel métier, et un message optionnel. Le champ ville s'appuie sur l'API officielle Adresse (geo.api.gouv.fr, gouvernement français) pour vous proposer une liste de communes existantes ; cet appel ne transmet que le texte que vous tapez, sans donnée personnelle.",
        ],
      },
      {
        heading: "Finalité",
        paragraphs: [
          "Ces informations servent uniquement à vous recontacter au sujet du programme pilote. Elles ne sont ni partagées, ni utilisées à d'autres fins.",
        ],
      },
      {
        heading: "Destinataire et durée de conservation",
        paragraphs: [
          "Les envois transitent par un prestataire tiers d'envoi de formulaire (Web3Forms ou Formspree, selon la configuration en vigueur). Durée de conservation : [À COMPLÉTER].",
        ],
      },
      {
        heading: "Cookies et mesure d'audience",
        paragraphs: [
          "Ce site n'utilise aucun cookie. La mesure d'audience, si elle est activée, est réalisée sans identifiant ni cookie, via un outil respectueux de la vie privée ([À COMPLÉTER] — outil retenu).",
        ],
      },
      {
        heading: "Vos droits",
        paragraphs: [
          "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement et d'opposition sur vos données. Pour l'exercer, utilisez le formulaire « Devenir magasin pilote » en page d'accueil.",
        ],
      },
    ] satisfies LegalSection[],
  },

  seo: {
    home: {
      title: `${BRAND} — Automatisez le tiers payant de votre magasin d'optique`,
      description: `${BRAND} automatise le tiers payant de votre magasin d'optique et ne vous sollicite que pour les décisions qui comptent. Déjà testé chez Ver'Optic.`,
    },
    mentionsLegales: {
      description: `Mentions légales du site vitrine ${BRAND} : éditeur, hébergement, contact et propriété intellectuelle.`,
    },
    confidentialite: {
      description: `Politique de confidentialité du site vitrine ${BRAND} : données collectées par le formulaire, finalité, cookies et droits RGPD.`,
    },
  },
} as const;

export type Site = typeof site;
