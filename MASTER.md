# Portfolio Émilien Wienin - Document maître

## But
Portfolio public d'Émilien Wienin (`kinowill.github.io`), repositionné sur un profil polyvalent : UX/UI, marketing digital, illustration, motion et IA. Cible : recruteurs variés, poursuite Mastère en alternance.

## Stack
Site statique pur : `index.html` + `style.css` + `main.js`. Déploiement prévu via GitHub Pages, repo `kinowill/kinowill.github.io`, branche `main`.

## État au 2026-04-20

**Repo modifié localement, non commité, non poussé.**

Refonte v1 finalisée localement après reprise du chantier interrompu. Les derniers retours Émilien ont été intégrés dans le code. La version reste non validée visuellement par Émilien et non déployée.

### Ce qui est fait localement
- Bouton CV retiré du header et du menu mobile, PDF toujours présent dans `/assets/` mais non linké.
- Hero reformulé CV-style : `Concepteur UX/UI, Marketing Digital & Illustration.`
- Stat hero `BAC+3 / Félicitations du Jury` remplacée par `6 expertises connectées`.
- Section Expertise passée à 6 cartes + bande Certifications : TOSA x3, GA4, Anglais C1, Félicitations du Jury.
- Carte `Shopify & IA appliquée` : Shopify/Liquid conservé, WordPress/JS retirés, prompt engineering/outils agentiques/workflows IA ajoutés.
- Carte Motion allégée : retrait de la modélisation 3D/Maya.
- Nouvelle section Parcours : timeline verticale complète, de LiveCampus à BAC STI2D.
- Carte `Bible Graphique Solarpunk` reliée à une galerie locale `creative`.
- Lien myportfolio retiré des socials contact ; Instagram clarifié en `Instagram · illustrations`.
- 68 visuels myportfolio téléchargés localement dans `/assets/creative/` et intégrés via `main.js`.
- Photo de profil réduite dans `.hero-visual` sur desktop, tablette et mobile.
- Typo display Fraunces italique sur accents h1 + chiffres.
- Responsive 3 breakpoints : 1024 / 768 / 480.
- Orb chaude ambre ajoutée en background pour touche créative.

### Reste à faire
- Revue visuelle humaine du rendu desktop/mobile.
- Commit puis push sur `main`.
- Vérifier le déploiement GitHub Pages après push.
- Validation réelle en ligne après déploiement.

## Scraping myportfolio
- Pages sources téléchargées temporairement pendant la session : home (92KB) + `/test` (102KB).
- 68 images `_rw_1200` uniques récupérées depuis `cdn.myportfolio.com/3b62b7a9-c776-4a6b-b149-5a75eb162294/`.
- Destination locale : `/assets/creative/`.
- Intégration : galerie `creative` dans `main.js`, appelée depuis la carte `Bible Graphique Solarpunk`.
- Le site myportfolio reste obsolète et ne doit plus être linké publiquement.

## Sources de vérité
- **Ce document** : état courant.
- **Roadmap/backlog** : section `Reste à faire` ci-dessus.
- **Journal de validation** : `VALIDATION.md`.
- **Code** : `index.html`, `style.css`, `main.js`.
- **Assets locaux** : `/assets/`, dont `/assets/creative/` pour les visuels récupérés.
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
