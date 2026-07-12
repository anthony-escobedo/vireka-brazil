/**
 * Central site identity for the Brazilian market-entry landing site.
 * Bounded factual values only — no unsupported product claims.
 */
export const site = {
  siteName: "VIREKA Space Brasil",
  title: "VIREKA Space Brasil | Clareza antes de decisões e da IA",
  description:
    "Organize observações, interpretações, pressupostos e incertezas antes de tomar decisões ou preparar contexto para uma inteligência artificial.",
  shortDescription:
    "Uma entrada brasileira para conhecer o VIREKA Space.",
  canonicalDomain: "https://virekaspace.com.br",
  globalPlatformUrl: "https://vireka.space",
  portuguesePlatformUrl: "https://vireka.space/pt-br",
  locale: "pt-BR",
  openGraphLocale: "pt_BR",
  contactUrl: "https://vireka.space/pt-br/contact",
  contactEmail: "contato@virekaspace.com.br",
  privacyUrl: "https://vireka.space/pt-br/privacy",
  termsUrl: "https://vireka.space/pt-br/terms",
} as const;

export type SiteConfig = typeof site;
