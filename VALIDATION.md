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
