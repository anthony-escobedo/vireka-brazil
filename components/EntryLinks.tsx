import { externalSrLabel, links, sections } from "@/lib/links";

export function EntryLinks() {
  return (
    <section
      id={sections.entry}
      className="content-section content-section--wide content-section--entry"
      aria-labelledby="entry-heading"
    >
      <div className="content-section__intro">
        <h2 id="entry-heading">Entrar na plataforma</h2>
        <p>
          A experiência principal permanece em vireka.space. Esta página
          brasileira orienta a descoberta; a plataforma oferece o espaço de
          clareza.
        </p>
      </div>
      <ul className="entry-list">
        <li>
          <a className="text-link text-link--primary" href={links.platform}>
            Abrir a plataforma em português
            <span className="text-link__arrow" aria-hidden="true">
              →
            </span>
            <span className="sr-only">{externalSrLabel}</span>
          </a>
        </li>
        <li>
          <a className="text-link" href={links.method}>
            Conhecer o método
            <span className="sr-only">{externalSrLabel}</span>
          </a>
        </li>
        <li>
          <a className="text-link" href={links.teamClarity}>
            Clareza para equipes
            <span className="sr-only">{externalSrLabel}</span>
          </a>
        </li>
        <li>
          <a className="text-link" href={links.aiHandoffClarity}>
            Preparar contexto para a IA
            <span className="sr-only">{externalSrLabel}</span>
          </a>
        </li>
        <li>
          <a className="text-link" href={links.faq}>
            Perguntas frequentes
            <span className="sr-only">{externalSrLabel}</span>
          </a>
        </li>
        <li>
          <a className="text-link" href={links.plan}>
            Ver os planos
            <span className="sr-only">{externalSrLabel}</span>
          </a>
        </li>
      </ul>
    </section>
  );
}
