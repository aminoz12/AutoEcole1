# Vercel Deployment Guide

This is a **Next.js 14 (App Router)** server app with 4 API routes (contact, CPF
request, registration). Vercel auto-detects Next.js — no `vercel.json` is needed.
Redirects, headers and image optimization are configured in `next.config.js`.

## 1. Import the project

1. Push to GitHub (already connected: `aminoz12/AutoEcole1`, branch `main`).
2. In Vercel: **Add New → Project → Import** `aminoz12/AutoEcole1`.
3. Framework preset: **Next.js** (auto-detected).
   - Build command: `npm run build` (default — keeps the `--max-old-space-size` flag).
   - Output dir: `.next` (default). Install: `npm install` (default).

## 2. Environment variables

Set these under **Project → Settings → Environment Variables** (Production +
Preview). Values live in your local `.env.local` — do **not** commit them.

### Required (email forms break without these)
| Variable | Value | Notes |
|---|---|---|
| `GMAIL_USER` | `autoecole.despaquerettes@gmail.com` | Gmail SMTP sender |
| `GMAIL_APP_PASSWORD` | *(Google App Password)* | from your `.env.local` |
| `NEXT_PUBLIC_SITE_URL` | `https://autoecoledespaquerettes.fr` | canonical/SEO, sitemap, JSON-LD |

### Optional (only if you use the Supabase + Resend registration route)
The `/api/send-registration` route no-ops gracefully if these are unset.
| Variable | Used for |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | server-side writes (or `NEXT_PUBLIC_SUPABASE_ANON_KEY`) |
| `RESEND_API_KEY` | Resend transactional email |

## 3. Domain

1. **Project → Settings → Domains → Add** `autoecoledespaquerettes.fr`.
2. Add `www.autoecoledespaquerettes.fr` and set it to **redirect** to the apex
   (the `next.config.js` redirect also enforces www → apex as a backup).
3. Point DNS per Vercel's instructions (apex `A`/`ALIAS`, `www` `CNAME`).

## 4. Redirects & headers (already in `next.config.js`)

- `www → apex` (301)
- `/packweb → /prestations-a-l-unite`
- `/post/* → /blog/*`
- `/blog/code-route-nouvelles-regles-2024 → .../2026`
- accented stress-article slug → ASCII slug
- Security headers: `X-Frame-Options`, `X-XSS-Protection`,
  `X-Content-Type-Options`, `Referrer-Policy`.

Static asset caching (`/_next/static/*` immutable) is handled by Vercel
automatically — no manual headers needed (unlike Netlify).

## 5. CLI deploy (optional)

```bash
npm i -g vercel
vercel login
vercel link          # link to the Vercel project
vercel --prod        # deploy production
```

## Notes
- `netlify.toml`, `_redirects` and `dist/` are leftover from the previous Netlify
  setup. Vercel ignores them; remove them if you no longer deploy to Netlify.
- Large `*.exe.bak` installers in the repo root are git-ignored and never deployed.
