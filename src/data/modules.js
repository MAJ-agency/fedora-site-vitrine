export const MODULES = {
  formations: {
    tag: "Module · Développez",
    name: "Formations & diplômes",
    title: "Formez et certifiez vos encadrants.",
    sub: "Sessions, inscriptions, suivi de présence, certifications et diplômes — la formation de vos officiels et encadrants, digitalisée de bout en bout.",
    features: [
      { t: "Sessions & inscriptions", d: "Ouvrez des sessions, gérez les inscriptions et les listes d'attente en ligne.", icon: `<path d="M22 10L12 5 2 10l10 5 10-5zM6 12v5c0 1 3 3 6 3s6-2 6-3v-5"/>` },
      { t: "Certifications & diplômes", d: "Délivrez des diplômes numériques, suivez les validations et les recyclages.", icon: `<path d="M12 2l3 6 6 .5-4.5 4 1.5 6L12 15l-6 3.5 1.5-6L3 8.5 9 8z"/>` },
      { t: "Suivi de présence", d: "Émargement, assiduité et historique par participant, exportables.", icon: `<path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>` },
    ],
  },
  competitions: {
    tag: "Module · Développez",
    name: "Compétitions",
    title: "Organisez vos compétitions de A à Z.",
    sub: "Calendrier fédéral, inscriptions en ligne, gestion des épreuves et classements officiels — tout le cycle compétitif au même endroit.",
    features: [
      { t: "Calendrier fédéral", d: "Publiez et diffusez le calendrier officiel à tous les échelons.", icon: `<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>` },
      { t: "Inscriptions en ligne", d: "Engagements par club, catégories, quotas et validation automatique.", icon: `<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>` },
      { t: "Classements officiels", d: "Résultats, points et classements générés et publiés en temps réel.", icon: `<path d="M6 9V4h12v5a6 6 0 0 1-12 0zM9 21h6M12 15v6"/>` },
    ],
  },
  "app-mobile": {
    tag: "Module · Développez",
    name: "App mobile licencié",
    title: "Le canal direct avec vos licenciés.",
    sub: "Licence numérique, QR code, agenda et notifications — un lien permanent entre la fédération, les clubs et les pratiquants.",
    features: [
      { t: "Licence numérique & QR", d: "La licence toujours dans la poche, vérifiable en un scan.", icon: `<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h7v7h-7z"/>` },
      { t: "Notifications ciblées", d: "Communiquez sans intermédiaire, par club, catégorie ou événement.", icon: `<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/>` },
      { t: "Agenda & résultats", d: "Convocations, calendrier et scores directement pour le licencié.", icon: `<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>` },
    ],
    related: { href: "/solutions/licencies", label: "Voir l'espace licencié →" },
  },
  planning: {
    tag: "Module · Développez",
    name: "Planning",
    title: "Créneaux, réservations et agendas partagés.",
    sub: "Gérez les disponibilités des équipements et des encadrants, les réservations et un agenda partagé à tous les niveaux.",
    features: [
      { t: "Disponibilités", d: "Salles, terrains, encadrants — visualisez et gérez les créneaux.", icon: `<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>` },
      { t: "Réservations", d: "Réservez et validez, évitez les conflits automatiquement.", icon: `<path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>` },
      { t: "Agenda partagé", d: "Un agenda commun, synchronisé entre structures et licenciés.", icon: `<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>` },
    ],
  },
  ged: {
    tag: "Module · Digitalisez",
    name: "GED & Élections",
    title: "Documents signés, votes dématérialisés.",
    sub: "Gestion électronique des documents, signatures et archivage, plus les votes en ligne et assemblées générales dématérialisées.",
    features: [
      { t: "Gestion documentaire", d: "Centralisez, classez et retrouvez tous vos documents officiels.", icon: `<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6"/>` },
      { t: "Signatures électroniques", d: "Faites signer conventions et documents en quelques clics.", icon: `<path d="M3 17c3-4 5-4 8 0s5 4 8 0M3 21h18"/>` },
      { t: "Votes & AG en ligne", d: "Assemblées dématérialisées, votes sécurisés et procès-verbaux.", icon: `<path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>` },
    ],
  },
  securite: {
    tag: "Plateforme · Pilotez",
    name: "Sécurité & souveraineté",
    title: "Vos données, en France, protégées.",
    sub: "Un niveau d'exigence à la hauteur d'une institution : authentification forte, hébergement souverain HDS et audit continu.",
    features: [
      { t: "2FA & RBAC", d: "Double authentification et gestion fine des rôles par échelon.", icon: `<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>` },
      { t: "Hébergement HDS", d: "100 % français, certifié, sur 2 sites en France. Option SecNumCloud (ANSSI).", icon: `<path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z"/>` },
      { t: "Audit continu", d: "Surveillance externe certifiée et détection des vulnérabilités.", icon: `<circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/>` },
    ],
  },
  integrations: {
    tag: "Plateforme · Un outil ouvert",
    name: "Intégrations & API",
    title: "Une plateforme ouverte, connectée à vos outils.",
    sub: "Des API robustes et des connecteurs prêts à l'emploi pour intégrer les services tiers dont vous avez besoin.",
    features: [
      { t: "API REST & Webhooks", d: "Clés API sécurisées, webhooks et documentation pour vos développeurs.", icon: `<path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3"/>` },
      { t: "Paiement", d: "Lemonway et HelloAsso — encaissements et reversements intégrés.", icon: `<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>` },
      { t: "CRM & vérification", d: "Zoho, Salesforce, et vérification d'identité et de documents.", icon: `<path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>` },
    ],
  },
};
