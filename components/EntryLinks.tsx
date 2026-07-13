import { links, sections } from "@/lib/links";

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
          </a>
        </li>
        <li>
          <a className="text-link" href={links.method}>
            Conhecer o método
          </a>
        </li>
        <li>
          <a className="text-link" href={links.teamClarity}>
            Clareza para equipes
          </a>
        </li>
        <li>
          <a className="text-link" href={links.aiHandoffClarity}>
            Preparar contexto para a IA
          </a>
        </li>
        <li>
          <a className="text-link" href={links.faq}>
            Perguntas frequentes
          </a>
        </li>
        <li>
          <a className="text-link" href={links.plan}>
            Ver os planos
          </a>
        </li>
      </ul>
    </section>
  );
}
