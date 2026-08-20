# ifixyour.tech

Site public d'iFixYourTech Sàrl — one-pager + journal d'atelier. Statique (Jekyll),
hébergé sur GitHub Pages, domaine `ifixyour.tech`.

## Publier un article du journal

1. Copier `_drafts/gabarit-reparation.md` vers `_posts/AAAA-MM-JJ-slug.md`
2. Remplir le front matter et les sections
3. Mettre les photos dans `assets/img/journal/`
4. `git add . && git commit -m "Journal: <titre>" && git push`

Le site est reconstruit et en ligne en ~1 minute. Aucune autre étape.

## Structure

- `index.md` — page d'accueil
- `journal/` — index du journal (liste automatique des articles de `_posts/`)
- `_layouts/`, `assets/css/style.css` — gabarits et style (clair/sombre automatique)
- `_config.yml` — config Jekyll (SEO tags + sitemap générés automatiquement)
- `CNAME` — domaine custom GitHub Pages

## DNS (Cloudflare)

`ifixyour.tech` → GitHub Pages : 4 enregistrements A (185.199.108.153,
185.199.109.153, 185.199.110.153, 185.199.111.153) + CNAME `www` →
`fawraw.github.io`, en mode « DNS only » le temps que le certificat TLS soit émis.
