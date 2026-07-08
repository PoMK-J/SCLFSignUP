# SCLF 2026 — Registration Site

Static single-page registration site for the Stockholm Climate Leadership Forum 2026.
No build step, no dependencies to install — it's a static site that runs entirely in the browser.

## Files

| File | Purpose |
|------|---------|
| `index.html` | The entire site (HTML + React via in-browser Babel) |
| `image-slot.js` | Logo placeholder web component |
| `logo-nav.webp`, `logo-loader.webp`, `logo-footer.webp` | SCLF logos shown in the nav, loading screen, and footer |
| `hero.mp4` | Hero background video (muted autoplay loop) |

## Deploy to Vercel

1. Push this folder to a GitHub repo (its contents should sit at the repo root, or point Vercel at this folder).
2. In Vercel: **New Project → Import the repo**.
3. Framework preset: **Other**. No build command, no install command.
4. **Output / root directory:** the folder containing `index.html`.
5. Deploy. Vercel serves `index.html` at the root automatically.

That's it — there is no build step.

## Access codes (share with the client)

- **Site passcode** (entry gate): `SCLF2026`
- **Gala Dinner unlock code** (reveals the two dinner tickets): `DINNER2026`

## Tickets & Stripe

| Pass | Price | Checkout |
|------|-------|----------|
| Forum Ticket | 6 000 kr | Stripe Payment Link |
| Forum and Gala Dinner Ticket | 20 000 kr | Stripe Payment Link (code-gated) |
| Gala Dinner Ticket | 14 000 kr | Stripe Payment Link (code-gated) |

The "Pay … kr with Stripe" button opens the matching Stripe Checkout in a new tab; Stripe collects all attendee and billing details. To change a price or product, edit the link in Stripe — no code change needed unless the URL itself changes (the URLs live in the `TIERS` array near the top of the React script in `index.html`).

## Notes

- The hero video falls back to a hosted clip if `hero.mp4` is slow to load.
- Contact email throughout the site: `info@sclf.se`. 
