# ifixyour.tech

Site public d'iFixYourTech Sàrl : one-pager + journal d'atelier. Statique (Jekyll),
hébergé sur GitHub Pages, domaine `ifixyour.tech`.

## Publier un article du journal

1. Copier `_drafts/gabarit-reparation.md` vers `_posts/AAAA-MM-JJ-slug.md`
2. Remplir le front matter et les sections
3. Mettre les photos dans `assets/img/journal/`
4. `git add . && git commit -m "Journal: <titre>" && git push`

Le site est reconstruit et en ligne en ~1 minute. Aucune autre étape.

**Règle YAML absolue** : toute valeur de front matter contenant un deux-points est
mise entre guillemets (`description: "documentée : symptômes"`), sinon le YAML est
invalide. `strict_front_matter: true` est actif : le build échoue au lieu de publier
une page cassée, c'est voulu.

## Design

Direction « Établi 192E49 » (août 2026) : la constante de marque est le marine
`#192e49`, mesuré au pixel sur le logo JPEG, utilisé pour le header et la plaque.
Polices auto-hébergées dans `assets/fonts/` (Space Grotesk variable pour le titrage,
IBM Plex Mono pour les données), aucune ressource externe au runtime. Les PNG de
`assets/img/` (icône, plaque, favicon, og-image) sont des recadrages purs du
`logo.jpeg` source : les régénérer avec `osascript -l JavaScript tools/make-assets.js`
(lancé depuis la racine du dépôt, macOS, aucune dépendance).

## Structure

- `index.md` : page d'accueil
- `journal/` : index du journal (liste automatique des articles de `_posts/`)
- `_layouts/`, `assets/css/style.css` : gabarits et style (clair/sombre automatique)
- `_config.yml` : config Jekyll (SEO tags, sitemap et flux RSS générés automatiquement)
- `tools/make-assets.js` : régénération des assets PNG depuis le logo source
- `CNAME` : domaine custom GitHub Pages

## DNS (Cloudflare)

`ifixyour.tech` → GitHub Pages : 4 enregistrements A (185.199.108.153,
185.199.109.153, 185.199.110.153, 185.199.111.153) + CNAME `www` →
`fawraw.github.io`.

**⚠️ Ces 5 enregistrements doivent rester en « DNS only » (nuage gris).** Le proxy
Cloudflare (orange) empêche GitHub d'émettre et de **renouveler** (~3 mois) le
certificat TLS.

## Dépannage

Si le certificat expire ou que le HTTPS casse : vérifier que les enregistrements sont
bien en DNS only, puis forcer une nouvelle émission en détachant/rattachant le domaine :

```bash
echo '{"cname":null}' | gh api -X PUT repos/fawraw/ifixyour.tech/pages --input -
echo '{"cname":"ifixyour.tech"}' | gh api -X PUT repos/fawraw/ifixyour.tech/pages --input -
gh api repos/fawraw/ifixyour.tech/pages --jq '.https_certificate.state'   # → approved
```
