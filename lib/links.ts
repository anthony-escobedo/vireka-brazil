import { site } from "./site";

/**
 * Verified live Portuguese (pt-br) platform routes from vireka.space.
 * Do not add /pt-br/clarify — it is not present in the canonical sitemap.
 */
export const links = {
  platform: site.portuguesePlatformUrl,
  about: "https://vireka.space/pt-br/about",
  method: "https://vireka.space/pt-br/method",
  clarityBeforeAi: "https://vireka.space/pt-br/clarity-before-ai",
  aiHandoffClarity: "https://vireka.space/pt-br/ai-handoff-clarity",
  teamClarity: "https://vireka.space/pt-br/team-clarity",
  faq: "https://vireka.space/pt-br/faq",
  privacy: site.privacyUrl,
  terms: site.termsUrl,
  contact: site.contactUrl,
  contactEmail: `mailto:${site.contactEmail}`,
  plan: "https://vireka.space/pt-br/plan",
  beyondThought: "https://vireka.space/pt-br/beyond-thought",
  globalPlatform: site.globalPlatformUrl,
} as const;

export type PlatformLinks = typeof links;

/** Screen-reader supplement for cross-domain links to the canonical platform. */
export const externalSrLabel = "(abre em vireka.space)" as const;

/** In-page section anchors for the Brazilian landing page. */
export const sections = {
  hero: "inicio",
  problem: "problema",
  method: "metodo",
  useCases: "usos",
  beyondThought: "beyond-thought",
  entry: "entrada",
} as const;

export type SectionId = (typeof sections)[keyof typeof sections];
