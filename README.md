# Ridge Florist Inc. — GitHub Pages Website

A mobile-first, conversion-focused static website concept for Ridge Florist Inc. in Sebring, Florida.

## What this site does

- Uses verified Ridge Florist business information.
- Uses real floral photography from the current Ridge storefront as the primary visual layer.
- Sends shopping/product actions to the existing Ridge Florist commerce site rather than simulating a checkout.
- Adds a subtle optional Three.js petal atmosphere behind the hero.
- Includes a static CSS/SVG fallback, reduced-motion support, accessible navigation, local-business structured data, and GitHub Pages deployment.

## Files

- `index.html` — semantic homepage, metadata, structured data.
- `styles.css` — responsive visual system.
- `app.js` — mobile navigation, reveal enhancement, current-year utility.
- `petals.js` — optional Three.js hero atmosphere.
- `DESIGN_PLAN.md` — research-backed design and implementation plan.
- `assets/botanical/` — original generated SVG ornamentation.
- `.github/workflows/pages.yml` — GitHub Pages deployment workflow.

## Preview locally

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Deployment

The workflow deploys the repository root to GitHub Pages on pushes to `main` and can also be run manually. The GitHub repository must have Pages enabled with GitHub Actions as the publishing source, or the Pages setup action must be permitted to enable it.

Expected project URL:

`https://prithiraj.github.io/Ridge_Florist_Inc/`

## Rights note

Real bouquet photography is requested from Ridge Florist's current Shopify/FTD storefront CDN. This keeps the preview specific to the real business, but commercial reuse rights—especially for catalog photography supplied by FTD/Teleflora—should be confirmed before a standalone custom-domain launch. The local SVG botanical ornaments are original code assets in this repository.
