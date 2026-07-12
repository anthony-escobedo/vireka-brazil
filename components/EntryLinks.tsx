import { links, sections } from "@/lib/links";

export function EntryLinks() {
  return (
    <section
      id={sections.entry}
      className="content-section content-section--wide"
      aria-labelledby="entry-heading"
    >
      <div className="content-section__intro">
        <h2 id="entry-heading">Entrar na plataforma</h2>
        <p>
          A experiência principal permanece em vireka.space. Este site
          brasileiro orienta a descoberta; a plataforma oferece o espaço de
          clareza.
        </p>
      </div>
      <ul className="entry-list">
        <li>
          <a className="text-link text-link--primary" href={links.platform}>
            Abrir VIREKA Space em português
          </a>
        </li>
        <li>
          <a className="text-link" href={links.method}>
            Método
          </a>
        </li>
        <li>
          <a className="text-link" href={links.teamClarity}>
            Clareza em equipes
          </a>
        </li>
        <li>
          <a className="text-link" href={links.aiHandoffClarity}>
            Clareza na transferência para IA
          </a>
        </li>
        <li>
          <a className="text-link" href={links.faq}>
            Perguntas frequentes
          </a>
        </li>
        <li>
          <a className="text-link" href={links.plan}>
            Planos
          </a>
        </li>
      </ul>
    </section>
  );
}
