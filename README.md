# VIREKA Space Brasil

Lightweight Brazilian market-entry site for VIREKA Space.

## Domain role

- **Brazilian discovery layer:** [https://virekaspace.com.br](https://virekaspace.com.br)
- **Canonical platform:** [https://vireka.space](https://vireka.space)
- **Portuguese platform entry:** [https://vireka.space/pt-br](https://vireka.space/pt-br)

This repository is a separate, deliberately small landing site. It does not host the product application.

## Non-goals

Do not add to this repository:

- authentication or user accounts
- `/clarify` functionality
- private clarity histories
- team workspaces
- Supabase clients or application APIs
- governance or observability runtime
- private-user data handling
- a second product platform

## Current phase (BR-3)

Technical foundation for SEO metadata, social sharing, accessibility verification, and privacy-bounded Vercel Web Analytics (page views).

Canonical metadata uses `https://virekaspace.com.br/` even while the temporary Vercel deployment is the review host. Custom-domain cutover is BR-4.

### Analytics

- Package: `@vercel/analytics`
- Integration: page views via `<Analytics />` in the root layout
- Custom click events: not implemented (require confirmed Pro/Enterprise eligibility)
- Manual dashboard step: enable Web Analytics in the Vercel project `vireka-brazil` after deploy

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validation

```bash
npm run lint
npm run build
npx tsc --noEmit
npm audit
git diff --check
```

## Deployment target

Vercel project `vireka-brazil` (GitHub `main`). Domain DNS, Search Console, and email providers remain outside this repository (BR-4+).
