/**
 * Central site identity for the Brazilian market-entry landing site.
 * Bounded factual values only — no unsupported product claims.
 */
export const site = {
  siteName: "VIREKA Space Brasil",
  description:
    "Espaço brasileiro de descoberta e orientação para o VIREKA Space — uma camada de clareza antes da resposta automática.",
  canonicalDomain: "https://virekaspace.com.br",
  globalPlatformUrl: "https://vireka.space",
  portuguesePlatformUrl: "https://vireka.space/pt-br",
  locale: "pt-BR",
  openGraphLocale: "pt_BR",
  contactUrl: "https://vireka.space/pt-br/contact",
  privacyUrl: "https://vireka.space/pt-br/privacy",
  termsUrl: "https://vireka.space/pt-br/terms",
} as const;

export type SiteConfig = typeof site;
