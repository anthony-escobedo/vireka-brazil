import { links, sections } from "@/lib/links";

export function Hero() {
  return (
    <section id={sections.hero} className="hero" aria-labelledby="hero-heading">
      <p className="hero__eyebrow">VIREKA Space Brasil</p>
      <h1 id="hero-heading">Clareza antes de decisões e da IA</h1>
      <p className="hero__lead">
        Uma entrada brasileira para conhecer o VIREKA Space — orientada a
        organizar o contexto antes de decidir, responder ou levá-lo a uma
        inteligência artificial.
      </p>
      <p className="hero__note">
        O VIREKA Space ajuda a separar o que foi observado, o que pode estar
        sendo pressuposto, o que pode estar influenciando e o que continua
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
