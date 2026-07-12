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

## Current phase (BR-1)

Foundation only: site identity, centralized PT-BR platform links, structural page shell, accessibility baseline, robots, and sitemap.

The Brazilian sitemap currently contains only the root URL: `https://virekaspace.com.br/`.

Final marketing copy, visual design polish, and SEO claims are out of scope for BR-1.

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

Static/SSR Next.js deployment (Vercel or equivalent). Domain DNS, Search Console, and email providers are configured outside this repository and are not part of BR-1.
