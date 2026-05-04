# Journal de validation

## 2026-04-20 - Reprise refonte portfolio

État vérifié :
- Repo commité et poussé sur `main` : commit refonte `a255ec2`.
- Prod non confirmée : push GitHub effectué, déploiement GitHub Pages non vérifié.
- Validation réelle humaine non effectuée.

Contrôles exécutés :
- `git diff --check` : OK.
- `git diff --cached --check` : OK.
- `node --check main.js` : OK.
- Recherche des mentions à retirer dans `index.html`, `style.css`, `main.js` : OK pour myportfolio, Maya, WordPress, BAC+3, Bases JavaScript, Modélisation.
- Vérification des 68 assets `assets/creative/creative-01` à `creative-68` : OK.
- Serveur local `python -m http.server 8765` + requête `http://127.0.0.1:8765/index.html` : HTTP 200.

À valider ensuite :
- Revue visuelle desktop/mobile.
- Vérification GitHub Pages après déploiement.

## 2026-04-20 - Ajustement wording hero

Changement :
- Stat `6 expertises connectées` remplacée par `UX / créa · marketing & IA`.
- Stat `2 Bachelors tech & créa` remplacée par `3 diplômes complémentaires`.

Contrôles exécutés :
- `git diff --check` : OK.
- `git diff --cached --check` : OK.
- `node --check main.js` : OK.

Déploiement :
- Push effectué sur `main` : commit `5bc61dc`.
- GitHub Pages vérifié en HTTP 200.
- Nouveau wording visible en ligne : `UX`, `créa · marketing & IA`, `3 diplômes complémentaires`.

À valider ensuite :
- Revue visuelle humaine desktop/mobile.

## 2026-04-20 - Correction titres mobile

Changement :
- Padding latéral `.container` renforcé sous 480px.
- Taille du `h1` hero réduite au breakpoint mobile.
- Taille des `.section-title` réduite au breakpoint mobile avec `overflow-wrap`.

Contrôles exécutés :
- `git diff --check` : OK.
- `node --check main.js` : OK.
- Serveur local `python -m http.server 8765` + requête `http://127.0.0.1:8765/index.html` : HTTP 200.

Déploiement :
- Push effectué sur `main` : commit `681717a`.
- GitHub Pages vérifié après propagation : `style.css` contient le padding mobile et les tailles de titres corrigées.

À valider ensuite :
- Revue visuelle humaine sur téléphone.

## 2026-04-20 - Abandon galerie myportfolio

Changement :
- Galerie `creative` supprimée de `main.js`.
- 68 assets scrapés `/assets/creative/` retirés du repo.
- Carte `Bible Graphique Solarpunk` remplacée par un lien direct vers Instagram `@lavande_outremer`.
- Ancien myportfolio confirmé comme source à ne plus utiliser.

Contrôles exécutés :
- `git diff --check` : OK.
- `node --check main.js` : OK.
- Recherche active dans `index.html` et `main.js` : OK, plus de `data-gallery="creative"`, `creativeFiles`, `creativeJpgIndexes` ni `assets/creative`.
- Serveur local `python -m http.server 8765` + requête `http://127.0.0.1:8765/index.html` : HTTP 200.

À valider ensuite :
- Revue visuelle humaine : confirmer que la carte Solarpunk ouvre Instagram comme attendu.

## 2026-04-20 - Zoom lien PDF Waldos

Changement :
- Lien `assets/dossier-projet-waldos.pdf` remplacé par `assets/dossier-projet-waldos.pdf#zoom=50` depuis le bouton du site.

Limite :
- L'URL directe sans fragment dépend du lecteur PDF du navigateur. Aucun outil PDF local (`pypdf`, `PyPDF2`, `fitz`, `qpdf`, `gs`, `mutool`) n'est disponible pour réécrire proprement l'Initial View du PDF.

Contrôles exécutés :
- Outils PDF locaux recherchés : non disponibles.
- `git diff --check` : OK.
- `node --check main.js` : OK.
- Serveur local `python -m http.server 8765` + requête `http://127.0.0.1:8765/index.html` : HTTP 200.
- Vérification locale : le HTML contient `assets/dossier-projet-waldos.pdf#zoom=50`.

À valider ensuite :
- Revue visuelle humaine : confirmer le comportement du lecteur PDF selon le navigateur.

Déploiement :
- Push effectué sur `main` : commit `056eaae`.
- GitHub Pages vérifié après propagation : plus de `data-gallery="creative"`, lien Solarpunk vers Instagram présent, lien PDF avec `#zoom=50` présent.

## 2026-05-04 - Fix marges latérales responsive

Symptôme rapporté : sous 1280px (tablette/mobile), les sections collaient au bord gauche/droit. Tentative initiale d'augmenter le padding du `.container` à 768px : sans effet, parce que `.section { padding: 7rem 0 }` (shorthand) écrasait la valeur horizontale du `.container` sur tous les `<section class="section container">`.

Changement :
- `.section { padding: 7rem 0 }` → `padding-block: 7rem` (style.css ligne 130).
- `.section { padding: 5rem 0 }` → `padding-block: 5rem` (breakpoint 768px).
- `.section { padding: 4rem 0 }` → `padding-block: 4rem` (breakpoint 480px).
- Le padding latéral du `.container` (1.5rem desktop / 1.5rem 768px / 1.25rem 480px) s'applique désormais correctement.

Contrôles exécutés :
- `git diff` : 3 lignes modifiées dans `style.css`, aucun autre impact.
- Vérification prod (curl `kinowill.github.io/style.css`) : les 3 occurrences `padding-block` présentes.

Déploiement :
- Push effectué sur `main` : commits `2c1edce` (premier essai container 768px), puis le vrai fix dans le commit suivant.
- GitHub Pages vérifié.

Validation humaine :
- 2026-05-04 : marges latérales confirmées OK en ligne par Émilien (desktop + mobile).

## 2026-05-04 - Ajout projet Lucide

Changement :
- Nouvelle carte feature `Lucide — Tests de personnalité scientifiques` ajoutée dans la section *Travaux*, après la grille des 4 projets, même format que la carte Waldos (layout 2 colonnes contenu + visuel).
- Badge : `Projet perso · Conçu & développé de A à Z`.
- Description : tests francophones fondés sur la recherche scientifique, six tests gratuits/anonymes, stratégie/UX-UI/intégration/déploiement portés en solo.
- CTA : `Visiter lucide-tests.fr` → `https://lucide-tests.fr/`.
- Visuel : OG image récupérée depuis `lucide-tests.fr/assets/img/og-default.png`, sauvegardée localement en `assets/projet-lucide.png` (24 Ko).

Contrôles exécutés :
- Vérification prod (curl `kinowill.github.io/index.html`) : 2 occurrences `lucide-tests.fr` présentes (carte + lien).

Déploiement :
- Push effectué sur `main`.
- GitHub Pages vérifié.

Validation humaine :
- 2026-05-04 : carte Lucide confirmée OK en ligne par Émilien (rendu, visuel, CTA).
