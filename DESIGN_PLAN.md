# Ridge Florist Inc. — Design & Implementation Plan

_Last updated: September 8, 2026_

This document is the implementation source of truth for the Ridge Florist Inc. GitHub Pages site. The site is a polished conversion-oriented marketing layer that links into the existing Ridge Florist commerce experience rather than inventing a new checkout.

## 1. Evidence baseline

Only evidence-backed business claims are used in production UI.

- **Business:** Ridge Florist Inc., Sebring, Florida.
- **Current Google place:** `ChIJcz6FWpFX3IgR1Lla6VyjXKQ`.
- **Current address:** 111 Memorial Dr, Sebring, FL 33870.
- **Current Google Business phone:** (863) 471-3100.
- **Current Google Business hours:** Monday–Friday, 9:00 AM–5:00 PM; Saturday/Sunday closed.
- **Corporate history:** Florida corporate records date Ridge Florist Inc. to 1963 and list it as active.
- **Ownership positioning:** the established Ridge Florist site states the business is family owned and operated.
- **Core categories verified on current business sites:** fresh floral arrangements, Florist Originals, roses, plants, birthday, love/anniversary, get well, congratulations, sympathy/funeral work, weddings/events.
- **Delivery:** the current store states same-day delivery is available in select areas as allowed by ZIP code and the delivery-date calendar.
- **Pickup:** current product pages list pickup at 111 Memorial Dr.
- **Guarantee/substitution:** the current business site publishes satisfaction/guarantee and substitution policies; the preview links to those policies instead of paraphrasing them as unconditional promises.
- **Current commerce destination:** https://ridgefloristinc.com/
- **Email:** info@ridgefloristinc.com is published by the current business site.
- **Social links:** no authoritative social URLs were confirmed, so no social icons are invented.
- **Reviews:** no aggregate-rating claim is used; public review evidence is too thin/inconsistent for a strong review-led conversion section.

### Data caveat

A legacy Ridge Florist site contains conflicting historical phone/hours data. The implementation uses the current Google Business listing for contact/hours and does not present the legacy values as current.

## 2. Audience

1. **Immediate gift buyers** — need fast confidence around local fulfillment, same-day availability, occasion selection, and a direct path to shop.
2. **Local/repeat customers** — need everyday arrangements, plants, pickup, directions, and a human contact path.
3. **Sympathy customers** — need calm language, simple navigation, and a direct call path for help choosing.
4. **Wedding/event clients** — need aesthetic credibility and consultation/portfolio pathways instead of commodity checkout language.

## 3. Conversion goals

Primary actions:

- **Shop Flowers** → current Ridge Florist commerce site.
- **Check Same-Day Delivery** → current delivery/shop flow.
- **Call the Florist** → current Google Business phone.
- **Wedding Consultation** → current consultation flow.

Secondary actions:

- Shop Florist Originals.
- Shop Sympathy.
- Shop Plants.
- Get Directions.
- View Wedding & Event Portfolio.

No fake cart is implemented on GitHub Pages. Product cards deep-link to the current commerce site.

## 4. Creative direction

### Concept: Florida Floral Heritage

The site should feel **classic, warm, editorial, premium, and locally rooted** rather than like a generic flower-shop template.

The visual tension is:

> A family-run local florist with roots reaching back to 1963, expressed through fresh contemporary floral design.

Reference-image cues retained from the three supplied references:

- deep botanical green framing/navigation surfaces,
- warm ivory and soft sage canvases,
- restrained coral/pink floral accents,
- oversized high-contrast serif hero typography,
- large bouquet photography with organic/rounded crops,
- asymmetric editorial image-and-copy compositions,
- compact occasion pills/cards,
- generous white space instead of dense catalog chrome,
- strong same-day/local CTAs,
- mobile-first stacked content with persistent high-value actions.

The references are used only for visual direction. Their sample business names, addresses, hours, pricing, products, review counts, testimonials, and policies are not copied.

Reference-image patterns intentionally rejected:

- invented star reviews/testimonials,
- fake prices/products,
- generic stock storefront imagery,
- overly dense ecommerce chrome,
- animation that competes with the flowers.

## 5. Color system

Proposed design tokens (not claimed as legacy brand colors):

- `--forest-950: #0b2f25` — primary dark/navigation.
- `--forest-800: #174a39` — interactive secondary green.
- `--sage-100: #e9f0e9` — quiet botanical surface.
- `--cream-50: #fffaf1` — primary canvas.
- `--cream-100: #f7efdf` — elevated editorial panel.
- `--ink: #17221d` — primary text.
- `--coral: #e96f5a` — restrained conversion/accent color.
- `--rose: #ba5966` — secondary floral accent.
- `--gold: #c4963d` — small heritage highlight only.

The flowers provide most of the chroma; UI color remains restrained.

## 6. Typography

- **Display:** Fraunces (serif) with Georgia fallback.
- **Body/UI:** Source Sans 3 with system sans-serif fallback.

Only necessary weights are requested. The page remains legible and well-composed before web fonts load.

## 7. Image strategy

### Production imagery used in this implementation

The site uses real floral product photography served by the current Ridge Florist storefront and links each merchandising card back to the corresponding current Ridge product/collection. For this GitHub Pages preview the photos remain sourced from Ridge's current storefront CDN so they stay tied to the business source rather than being redistributed as copied files.

These images are treated as **business-site-sourced assets**. Before a separate commercial launch outside the business's existing storefront ecosystem, confirm that Ridge Florist owns or has transferable reuse rights to each FTD/Shopify image.

### Decorative/generated imagery

Supporting botanical visuals are generated as original SVG/CSS/Three.js ornamentation. They are intentionally abstract and cannot be mistaken for a specific product Ridge sells.

### Not used in production

- Google customer-uploaded images.
- review-site images.
- competitor photography.
- unlicensed third-party editorial imagery.

Those may inform research only.

### Future owner-photo upgrade

Highest-value additions for a production custom-domain launch:

- current storefront exterior,
- owner/team portrait,
- florist hands at work,
- cooler/workbench/process,
- real wedding installation photography owned by Ridge,
- delivery preparation.

The layout is structured so these can replace supporting product/editorial photos without redesigning the page.

## 8. Information architecture

Single-page conversion homepage with anchored sections plus outbound commerce links:

1. Utility bar
2. Header/nav
3. Hero
4. Occasion paths
5. Florist Originals / featured arrangements
6. Same-day local delivery trust band
7. Heritage / process story
8. Weddings & events
9. Sympathy
10. Gallery
11. Location / hours / contact
12. Final CTA
13. Footer

The existing Ridge storefront remains the system of record for product pricing, availability, checkout, guarantees, substitutions, and delivery eligibility.

## 9. Section-by-section layout

### Utility bar

Compact delivery/local message and phone link.

### Header

Text wordmark, anchor navigation, and prominent Shop Flowers CTA. Mobile menu uses an accessible button and no hover-only interactions.

### Hero

- Editorial split layout.
- Oversized serif message.
- Real Ridge floral imagery as the dominant visual.
- Primary Shop Flowers CTA.
- Secondary Check Same-Day Delivery CTA.
- 1963/family-owned/local trust badges.
- Subtle Three.js petal field behind the image/content only.

### Occasion paths

Horizontal chips/cards inspired by the supplied ecommerce references; scrollable on narrow screens. Links point to verified current store categories.

### Featured arrangements

Large editorial card + supporting real-product cards. No static price claims. Each card links to a real current Ridge product or Florist Originals collection.

### Local delivery band

Clear language: same-day delivery is available in select areas and depends on ZIP/date availability. This avoids an unconditional promise.

### Heritage/process story

1963 corporate history + family-owned positioning + a simple three-step flow: choose, florist creates, local delivery/pickup.

### Weddings & events

Photography-first editorial panel with links to the current wedding/event portfolio and consultation flow.

### Sympathy

Quiet, low-motion section with links to For the Home / For the Service and an immediate call-for-help action.

### Gallery

Accessible mosaic of real Ridge arrangement photos. Not an auto-playing carousel.

### Location/contact

- 111 Memorial Dr, Sebring, FL 33870.
- (863) 471-3100.
- Mon–Fri 9–5, Sat/Sun closed.
- call, directions, email actions.
- lazy-loaded Google Maps embed.

### Final CTA

One clear decision: shop online or speak with the florist.

## 10. Three.js / animation plan

Three.js is used only as a **complementary hero atmosphere layer**:

- translucent low-poly petal shapes,
- slow drift/rotation,
- pointer influence kept minimal,
- all geometry behind real photography and text,
- no interaction is required to understand or use the page.

Fallback:

- if Three.js/CDN/JavaScript fails, a CSS/SVG botanical background remains.

Reduced motion:

- Three.js animation is disabled for `prefers-reduced-motion: reduce`.
- scroll reveals are removed/reduced.
- transitions become near-instant.

## 11. Responsive behavior

Mobile-first.

- Hero becomes one-column with copy first and image immediately following.
- Occasion paths scroll horizontally without trapping keyboard focus.
- Featured products use one column on small phones and two columns when room allows.
- Gallery becomes a two-column mosaic, then richer editorial grid at larger widths.
- Tap targets are at least 44×44 px.
- Mobile gets a compact sticky action rail for Shop / Call / Directions.
- Desktop uses generous whitespace and asymmetric editorial composition rather than simply scaling cards up.

## 12. Accessibility

Target: WCAG 2.2 AA.

- semantic landmark elements,
- skip-navigation link,
- logical heading hierarchy,
- visible `:focus-visible` states,
- keyboard-accessible mobile navigation,
- descriptive link labels,
- meaningful alt text for product/arrangement photos,
- decorative SVG/canvas excluded from accessibility tree,
- adequate color contrast,
- no color-only state communication,
- 44 px minimum key tap targets,
- reduced-motion support,
- no autoplay media.

## 13. Performance

- Static HTML/CSS/vanilla JS; no frontend framework.
- Three.js is the only optional runtime dependency and is loaded as a deferred module from CDN.
- Product photography is requested from the existing business CDN with responsive image widths.
- Hero image is eager/high-priority; below-fold imagery is lazy-loaded.
- Explicit image dimensions/aspect ratios reduce CLS.
- Google Maps iframe is lazy-loaded.
- No analytics bundle is included by default.
- Static content remains complete if JavaScript fails.

Targets on representative mobile conditions:

- LCP ≤ 2.5 s
- CLS ≤ 0.1
- INP ≤ 200 ms

## 14. SEO / local discovery

Preview SEO:

- title: `Ridge Florist Inc | Flower Delivery in Sebring, FL`
- descriptive meta description grounded in verified offerings.
- canonical points to the business's current production storefront to avoid duplicate-content competition while this is a GitHub Pages preview.
- `robots=noindex,follow` on the Pages preview; remove only when the custom site becomes canonical.
- Open Graph/Twitter metadata included.
- Schema.org `Florist`/`LocalBusiness` JSON-LD includes verified address, current Google phone/hours, founding date, and official website.
- No `AggregateRating` markup.

## 15. Rights / licensing notes

- Existing Ridge storefront product photography is used because it is the closest owner-controlled/business-controlled source available publicly.
- **Commercial reuse still needs rights confirmation**, particularly where images are supplied by FTD/Teleflora or other catalog licensors.
- No customer-uploaded Google images, competitor photos, or review-site photos are shipped.
- Generated SVG/petal ornaments in this repo are original implementation assets.
- The supplied reference screenshots are design inspiration only and are not copied into the website.

## 16. Implementation sequence

1. Confirm evidence baseline and current Google Business contact data.
2. Review user-supplied design references.
3. Establish static architecture and design tokens.
4. Add real Ridge floral photography from the current business storefront.
5. Build semantic homepage sections and outbound commerce paths.
6. Add responsive/mobile navigation and sticky mobile actions.
7. Add complementary Three.js petal atmosphere + static fallback.
8. Add accessibility/reduced-motion behavior.
9. Add SEO/JSON-LD/Open Graph metadata.
10. Add GitHub Pages deployment workflow.
11. Test static rendering, links, responsiveness, and no-JS fallback.
12. Deploy to GitHub Pages and verify workflow/site availability.

## 17. Acceptance criteria

The implementation is ready when:

- it is recognizably Ridge Florist, not a generic template;
- actual Ridge floral photography is the dominant visual content;
- decorative/generative florals remain secondary;
- no invented price, review, award, service, policy, or social profile appears;
- current address/phone/hours are represented from the selected current data source;
- Shop, Same-Day, Call, Consultation, and Directions actions are obvious;
- product cards link to real current Ridge commerce pages;
- the sympathy journey is calm and distinct from celebratory shopping;
- Three.js enhances atmosphere only and has a no-JS/static fallback;
- reduced-motion is honored;
- the site is usable by keyboard and has clear focus states;
- mobile is first-class with no horizontal page overflow;
- semantic metadata, Open Graph, and JSON-LD are present;
- no aggregate-review schema is present;
- images are lazy-loaded below the fold and the hero is prioritized;
- the GitHub Pages deployment workflow is committed and the deployment is verified where repository Pages settings permit it.

## Reference sources used during research

- Current Ridge storefront: https://ridgefloristinc.com/
- Legacy/established Ridge information site: https://www.ridgefloristsofsebring.com/about-us
- Florida Division of Corporations entity record for Ridge Florist Inc.
- Google Business place ID: `ChIJcz6FWpFX3IgR1Lla6VyjXKQ`
- User-provided floral website reference images retained in ChatGPT Library.
