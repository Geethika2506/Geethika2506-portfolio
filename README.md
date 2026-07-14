# Geethika Reddy Konda — Portfolio

Personal portfolio built with Next.js, Framer Motion, and Tailwind CSS.

**Live site:** https://geethika2506.github.io/Geethika2506-portfolio/

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Before deploying

1. **Replace your resume** — swap `public/resume.pdf` with your full CV PDF.
2. **Optional: remove heavy assets** — after verifying the hero works, you can delete `public/sequence/` (148 MB PNGs). The site uses optimized `public/sequence-lite/` (~1.3 MB WebP) instead.
3. **Regenerate assets** (if you change hero frames or branding):

```bash
npm run optimize-assets
```

## Deploy to GitHub Pages (free)

1. Push to the `main` branch on GitHub.
2. Go to **Settings → Pages → Build and deployment**.
3. Set **Source** to **Deploy from a branch** (not GitHub Actions).
4. Set **Branch** to **`gh-pages`** and folder to **`/ (root)`**.
5. Save. The workflow pushes the built site to `gh-pages` on every push to `main`.

Your site will be live at:

`https://geethika2506.github.io/Geethika2506-portfolio/`

**Note:** Do not use `actions/deploy-pages` with GitHub Actions as the Pages source — re-running failed jobs creates duplicate `github-pages` artifacts. This repo uses the `gh-pages` branch instead.

## Custom domain (optional)

1. Buy a domain (e.g. `geethikareddy.dev`).
2. In GitHub repo **Settings → Pages → Custom domain**, enter your domain.
3. Add DNS records at your registrar:
   - `A` records → GitHub Pages IPs (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`)
   - Or `CNAME` `www` → `geethika2506.github.io`
4. Update `NEXT_PUBLIC_SITE_URL` in the deploy workflow or `lib/site.ts`.

## Analytics

[Vercel Analytics](https://vercel.com/docs/analytics) is included and activates automatically when deployed on Vercel. On GitHub Pages it loads safely but won't collect data unless you also deploy to Vercel.

## Project structure

| Path | Description |
|------|-------------|
| `components/About.tsx` | Bio and resume CTA |
| `components/Education.tsx` | IE University education |
| `components/Projects.tsx` | Current work + featured projects |
| `app/projects/atlas/` | Atlas Core case study |
| `app/blog/building-temporal-knowledge-graphs/` | Technical write-up |
| `public/sequence-lite/` | Optimized hero animation frames |
| `scripts/optimize-assets.py` | Frame compression + OG image generator |

## Tech stack

- Next.js 16 (static export)
- React 19
- Framer Motion
- Tailwind CSS 4
- TypeScript
