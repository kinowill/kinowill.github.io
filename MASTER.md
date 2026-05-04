# Portfolio Émilien Wienin - Document maître

## But
Portfolio public d'Émilien Wienin (`kinowill.github.io`), repositionné sur un profil polyvalent : UX/UI, marketing digital, illustration, motion et IA. Cible : recruteurs variés, poursuite Mastère en alternance.

## Stack
Site statique pur : `index.html` + `style.css` + `main.js`. Déploiement prévu via GitHub Pages, repo `kinowill/kinowill.github.io`, branche `main`.

## État au 2026-05-04

**Repo commité et poussé sur `main`. GitHub Pages vérifié.**

Session du 2026-05-04 : correction d'un bug de marges latérales responsive (shorthand CSS qui écrasait silencieusement le padding du `.container` sur les `.section`) et ajout du projet personnel **Lucide** en grosse carte feature dans la section Travaux.

### Ce qui est fait dans le repo
- Bouton CV retiré du header et du menu mobile, PDF toujours présent dans `/assets/` mais non linké.
- Hero reformulé CV-style : `Concepteur UX/UI, Marketing Digital & Illustration.`
- Stats hero clarifiées : `UX / créa · marketing & IA`, `3 diplômes complémentaires`, `C1 Anglais professionnel`.
- Section Expertise passée à 6 cartes + bande Certifications : TOSA x3, GA4, Anglais C1, Félicitations du Jury.
- Carte `Shopify & IA appliquée` : Shopify/Liquid conservé, WordPress/JS retirés, prompt engineering/outils agentiques/workflows IA ajoutés.
- Carte Motion allégée : retrait de la modélisation 3D/Maya.
- Nouvelle section Parcours : timeline verticale complète, de LiveCampus à BAC STI2D.
- Carte `Bible Graphique Solarpunk` reliée directement à Instagram `@lavande_outremer`.
- Lien myportfolio retiré des socials contact ; Instagram clarifié en `Instagram · illustrations`.
- Scraping myportfolio abandonné : galerie locale `creative` et assets `/assets/creative/` supprimés.
- Lien du dossier PDF Waldos réglé avec fragment `#zoom=50` depuis le site.
- Photo de profil réduite dans `.hero-visual` sur desktop, tablette et mobile.
- Titres mobiles corrigés : padding latéral renforcé et tailles de titres ajustées sous 480px.
- Typo display Fraunces italique sur accents h1 + chiffres.
- Responsive 3 breakpoints : 1024 / 768 / 480.
- Orb chaude ambre ajoutée en background pour touche créative.
- **Marges latérales responsive corrigées** : `.section { padding: Xrem 0 }` remplacé par `padding-block: Xrem` (3 occurrences) — le shorthand écrasait le padding horizontal du `.container` sur tous les `<section class="section container">`. Conséquence : sous 1280px les sections collaient aux bords. Désormais la respiration latérale (1.5rem desktop / 1.5rem 768px / 1.25rem 480px) s'applique correctement.
- **Projet Lucide ajouté** : grosse carte feature après la grille des 4 projets, même format que Waldos. Badge `Projet perso · Conçu & développé de A à Z`, CTA vers `https://lucide-tests.fr/`. Visuel `assets/projet-lucide.png` récupéré depuis l'OG image du site.

### Reste à faire
- Rien d'urgent. Marges responsive et carte Lucide validées en ligne le 2026-05-04.

## Portfolio créatif
- Source publique retenue : Instagram `@lavande_outremer`.
- Ancien myportfolio abandonné : ne pas linker, ne pas scraper, ne pas réintégrer les visuels.
- La carte `Bible Graphique Solarpunk` pointe vers Instagram, car la galerie scrapée mélangeait des visuels non souhaités.

## PDF Waldos
- Lien depuis le site : `assets/dossier-projet-waldos.pdf#zoom=50`.
- Limite connue : l'URL directe `https://kinowill.github.io/assets/dossier-projet-waldos.pdf` dépend du lecteur PDF du navigateur. Sans outil PDF local capable de réécrire l'Initial View, le zoom 50% ne peut pas être garanti sur l'URL directe sans fragment.

## Sources de vérité
- **Ce document** : état courant.
- **Roadmap/backlog** : section `Reste à faire` ci-dessus.
- **Journal de validation** : `VALIDATION.md`.
- **Code** : `index.html`, `style.css`, `main.js`.
- **Assets locaux** : `/assets/`.
- **Git log** : historique des commits et déploiements effectifs.
- **CV PDF** : `assets/CV-Emilien-Wienin.pdf`, source canonique pour les infos profil.
- **Instagram `@lavande_outremer`** : portfolio créatif/illustration.

## Profil
- Émilien Wienin, 24 ans, Montpellier.
- Bachelor UX Design & Marketing Digital - LiveCampus, RNCP 6, Félicitations du Jury, Oct 2024 à Nov 2025.
- Alternance Waldos Legend, e-commerce CBD.
- Bachelor Concept Art & Illustration - Artline, 2021-2024.
- MANAA - Artline, 2021-2022.
- BTS SNIR - Dhuoda Nîmes, 2019-2021.
- BAC STI2D - Dumas Alès.
- Anglais C1.
- Certifs TOSA : Photoshop 723, Illustrator 602, InDesign 754.
- Certif GA4 : 80/100.

## Règles tacites du projet
- Ne pas laisser de trace `Claude` : commits sous nom Émilien, pas de `Co-Authored-By`, pas de commentaires mentionnant Claude dans le code.
- Langue d'UI : français.
- Portfolio public recruteurs : éviter les infos perso sensibles. Le numéro de téléphone reste obfusqué en JS.
