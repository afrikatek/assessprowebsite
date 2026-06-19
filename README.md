# Assesspro Consultants — website

The corporate site for Assesspro Consultants Ltd (Lusaka, Kitwe, SADC region).

## Stack

| Layer | Choice |
|---|---|
| Framework | React 19 + Vite 7 (JavaScript, no TypeScript) |
| Routing | `react-router-dom` v6 (required by `vite-react-ssg`), object-config routes |
| Pre-rendering | `vite-react-ssg` — every route is generated as static HTML at build time |
| Styling | Plain CSS with custom properties (`src/styles/global.css`) |
| Blog | Markdown files in `src/content/blog/`, parsed at build with `front-matter` + `marked` |
| Contact form | Vercel Edge Function (`api/contact.js`) → verifies Cloudflare Turnstile → sends via Resend |
| Hosting | Vercel (Hobby tier) |

## What's in here

| Path | What it is |
|---|---|
| `index.html` | Vite entry, fonts preload, OG/Twitter meta defaults |
| `src/main.jsx` | `ViteReactSSG` entry — exports the route tree |
| `src/routes.jsx` | Object-config route list including `getStaticPaths()` for blog posts |
| `src/App.jsx` | Shared shell: Header + `<Outlet />` + Footer |
| `src/pages/*.jsx` | One per route — Home, About, Services, Listings, Contact, Blog, BlogPost, NotFound |
| `src/components/` | Header, Footer, Logo, Reveal (reveal-on-scroll via IntersectionObserver) |
| `src/styles/global.css` | The brand stylesheet — navy `#0B1F3B`, crimson `#8D0C16`, EB Garamond body, Google Sans display |
| `src/content/blog/*.md` | Blog posts. Frontmatter: `title`, `description`, `date`, `author`, `draft`, `cover` |
| `src/lib/blog.js` | `getAllPosts()` / `getPost(slug)` — Markdown loader |
| `api/contact.js` | Vercel Edge Function: validates the form, verifies Turnstile, emails via Resend |
| `.env.local.example` | Template for local secrets (copy to `.env.local` for `vercel dev`) |

---

## Local development

There are three ways to run the site locally; pick the one that matches what you're working on.

### A. Pure UI work — `npm run dev` (fastest)

```sh
npm install
npm run dev          # Vite dev server on http://localhost:5173
```

Hot-reload, instant feedback. **The contact-form Function does NOT run** in this mode — `/api/contact` will 404. Use this for everything except contact-form work.

### B. Contact form work — `vercel dev` (only way to exercise the Function locally)

One-time setup:

```sh
npm install -g vercel
vercel link                # connect this folder to the Vercel project (interactive, once)
vercel env pull .env.local # downloads Development-scope env vars from Vercel into .env.local
```

If you haven't connected to Vercel yet, copy the template instead and edit it:

```sh
cp .env.local.example .env.local
# then fill in real values
```

Run it:

```sh
vercel dev                 # Vite + Edge Function on http://localhost:3000
```

`vercel dev` proxies non-`/api/*` requests to the Vite dev server (so HMR still works) and routes `/api/contact` to the Edge Function with env vars from `.env.local`. This is the only way to:
- Submit the contact form end-to-end locally
- See the real `Resend failed <status> <body>` line in your terminal if Resend rejects the send
- Verify Turnstile against a real secret

For Turnstile during local dev, either (a) add `localhost` to the widget's hostname list in the Cloudflare dashboard so your real keys work, or (b) put Cloudflare's always-pass test keys in `.env.local`:

```sh
VITE_TURNSTILE_SITE_KEY=1x00000000000000000000AA
TURNSTILE_SECRET_KEY=1x0000000000000000000000000000000AA
```

### C. Production-like preview — `npm run build && npm run preview`

```sh
npm run build       # vite-react-ssg generates static HTML for every route into dist/
npm run preview     # serves dist/ on http://localhost:4173
```

This catches build-time errors (SSG can fail on browser-only code that runs during pre-render — top-level `window` access, etc.) and lets you walk the actual production HTML. **No Function** in this mode — combine with `vercel dev` if you need both.

### Quick smoke test for the contact endpoint

With `vercel dev` running:

```sh
# Honeypot smoke test (silent 200, no email sent)
curl -i -X POST http://localhost:3000/api/contact \
  -H "Origin: http://localhost:3000" \
  -F "name=Test" -F "email=you@example.com" -F "message=hello" \
  -F "website=spam"

# Validation smoke test (400 missing_or_invalid_fields)
curl -i -X POST http://localhost:3000/api/contact \
  -H "Origin: http://localhost:3000" \
  -F "name=" -F "email=not-an-email" -F "message="
```

---

## Production deployment (Vercel)

### One-time setup

1. **Push the repo to GitHub.**
2. Vercel dashboard → **Add New Project** → import the GitHub repo. Framework preset auto-detects as **Vite**. Build command `npm run build`, output directory `dist`.
3. **Add environment variables** under Settings → Environment Variables. Set each for all three environments (Production, Preview, Development — Development is what `vercel env pull` writes to `.env.local`):

   | Name | Scope | Notes |
   |---|---|---|
   | `VITE_TURNSTILE_SITE_KEY` | Client (build-time) | Public, embedded in the JS bundle — that's by design |
   | `RESEND_API_KEY` | Server (sensitive) | Mark as Sensitive |
   | `TURNSTILE_SECRET_KEY` | Server (sensitive) | Mark as Sensitive |
   | `CONTACT_TO` | Server | `admin@assessproconsultants.com` |
   | `CONTACT_FROM` | Server | `Assesspro Website <noreply@assessproconsultants.com>` |
   | `ALLOWED_ORIGIN` | Server | `https://www.assessproconsultants.com,https://assessproconsultants.com` |

4. **Custom domain**: Settings → Domains → `www.assessproconsultants.com` + apex redirect for `assessproconsultants.com`. Update DNS at your registrar / Cloudflare zone per Vercel's instructions.
5. **Turnstile widget hostnames**: Cloudflare dashboard → Turnstile → existing widget → add `localhost`, `*.vercel.app`, and the production custom domain to the allowed hostnames list.
6. **Resend sender**: no change — `noreply@assessproconsultants.com` stays verified on the existing Resend domain.

### What happens on each push

| Action | Result |
|---|---|
| Push to `main` | Vercel builds, runs `npm run build`, deploys to **Production** (your custom domain + `<project>.vercel.app`). Uses Production-scope env vars. |
| Push to any other branch | Vercel builds and deploys a **Preview** with its own URL (`<project>-<branch>-<hash>.vercel.app`). Uses Preview-scope env vars. |
| Open a Pull Request | Vercel posts the Preview URL as a check on the PR — share it for review before merging. |
| Merge PR to `main` | Triggers a fresh Production build, same as a direct push to `main`. |

### Rollback

Dashboard → Deployments → pick a previous successful deploy → **⋯ → Promote to Production**. Near-instant alias flip. Reversible.

### Monitoring a deploy

- **Build logs**: Dashboard → Deployments → click a deploy. Shows the full `npm install` + `npm run build` output. If `vite-react-ssg` errors during pre-render, it shows up here.
- **Function runtime logs**: Dashboard → your project → **Logs** (or **Functions** tab). Real-time stream of every `/api/contact` invocation, including `console.error('Resend failed', ...)` if Resend rejects a send.
- **CLI alternative**: `vercel logs <deployment-url>` from your laptop.

### Manual deploy (fallback only)

If GitHub is unavailable or you need a hotfix without a commit:

```sh
vercel deploy --prod
```

Builds locally, uploads the artifact directly to Production. Use sparingly — bypassing the GitHub commit means your repo and the live site can drift.

### Rotating secrets

```sh
vercel env rm RESEND_API_KEY production
vercel env add RESEND_API_KEY production   # paste new value
vercel deploy --prod                        # rebuild so the new value is bound
```

Or do it in the dashboard under Settings → Environment Variables → ⋯ → Edit.

---

## Adding blog posts

1. Create a new file in `src/content/blog/`. The filename becomes the URL slug — e.g. `q3-2026-market-notes.md` → `/blog/q3-2026-market-notes`.
2. Add the frontmatter:

   ```markdown
   ---
   title: "Q3 2026 market notes"
   description: "What we're seeing in motor and marine across the SADC region."
   date: 2026-07-15
   author: "Blessings Mberi"
   draft: false
   ---

   Body in Markdown.
   ```

3. Write the body in Markdown — headings (`##`), bold (`**`), links (`[label](url)`), images (`![alt](url)`), etc.
4. Commit and push. Vercel rebuilds and the post appears at `/blog/<slug>`.

**Frontmatter fields:**

| Field | Required | Notes |
|---|---|---|
| `title` | yes | Shown on the blog index and as the page heading. |
| `description` | no | Short summary on the index card. |
| `date` | yes | Publication date. Used for sorting (newest first). |
| `author` | no | Defaults to "Assesspro Editor". |
| `draft` | no | Set `true` to hide from the public site while writing. |
| `cover` | no | URL or `/uploads/...` path to a header image. |

---

## Architecture

```
Browser
  │
  ▼
Vercel (static dist/)
  ├── /                    ← src/pages/Home.jsx        (pre-rendered to index.html)
  ├── /about               ← src/pages/About.jsx       (pre-rendered to about/index.html)
  ├── /services            ← src/pages/Services.jsx
  ├── /listings            ← src/pages/Listings.jsx
  ├── /contact             ← src/pages/Contact.jsx
  ├── /blog                ← src/pages/Blog.jsx
  ├── /blog/<slug>         ← src/pages/BlogPost.jsx    (one HTML per Markdown file)
  │
  └── /api/contact         ──▶ Vercel Edge Function (api/contact.js)
                                  │
                                  ├─ Verifies Cloudflare Turnstile
                                  ├─ Validates + escapes input
                                  └─ Resend API ──▶ admin@assessproconsultants.com
```

Cost at typical volume: **$0/month** (Vercel Hobby + Resend free 3,000 emails/mo + Turnstile free).

---

## Common tasks

| Task | Command / file |
|---|---|
| Add a blog post | New `.md` in `src/content/blog/` |
| Update brand styles | `src/styles/global.css` |
| Update the header or footer | `src/components/Header.jsx`, `src/components/Footer.jsx` |
| Change a contact-form field | `src/pages/Contact.jsx` (UI) + `api/contact.js` (server validation/email) |
| Rotate a secret | `vercel env rm <NAME> production && vercel env add <NAME> production` |
| Preview a draft post locally | Set `draft: false` temporarily, or change the filter in `src/lib/blog.js` |
