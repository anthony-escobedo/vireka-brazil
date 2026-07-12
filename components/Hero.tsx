import { links, sections } from "@/lib/links";

export function Hero() {
  return (
    <section id={sections.hero} className="hero" aria-labelledby="hero-heading">
      <p className="hero__eyebrow">VIREKA Space</p>
      <h1 id="hero-heading">Clareza antes da resposta automática</h1>
      <p className="hero__lead">
        Um espaço brasileiro de descoberta para o VIREKA Space — orientado à
        clareza situacional antes de interpretar, responder ou automatizar.
      </p>
      <p className="hero__actions">
        <a className="text-link text-link--primary" href={links.platform} rel="noopener noreferrer">
          Abrir a plataforma em português
        </a>
        <a className="text-link" href={links.method} rel="noopener noreferrer">
          Conhecer o método
        </a>
      </p>
    </section>
  );
}
