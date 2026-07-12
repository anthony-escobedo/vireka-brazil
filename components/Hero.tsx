import { links, sections } from "@/lib/links";

export function Hero() {
  return (
    <section id={sections.hero} className="hero" aria-labelledby="hero-heading">
      <p className="hero__eyebrow">VIREKA Space Brasil</p>
      <h1 id="hero-heading">Clareza antes das decisões e antes da IA</h1>
      <p className="hero__lead">
        Um espaço brasileiro de descoberta para o VIREKA Space — orientado a
        observar a situação antes de interpretar, responder ou automatizar.
      </p>
      <p className="hero__note">
        A estrutura ajuda a separar o que foi observado, o que está sendo
        presumido, o que pode estar influenciando e o que ainda permanece
        incerto — sem determinar a verdade ou garantir um resultado.
      </p>
      <p className="hero__actions">
        <a className="text-link text-link--primary" href={links.platform}>
          Abrir a plataforma em português
        </a>
        <a className="text-link" href={links.method}>
          Conhecer o método
        </a>
      </p>
    </section>
  );
}
