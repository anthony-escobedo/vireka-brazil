import { links, sections } from "@/lib/links";

export function EntryLinks() {
  return (
    <section
      id={sections.entry}
      className="content-section entry-section"
      aria-labelledby="entry-heading"
    >
      <h2 id="entry-heading">Entrar na plataforma</h2>
      <p>
        A experiência principal permanece em vireka.space. Este site brasileiro
        orienta a descoberta; a plataforma oferece o espaço de clareza.
      </p>
      <ul className="entry-list">
        <li>
          <a className="text-link text-link--primary" href={links.platform} rel="noopener noreferrer">
            Abrir VIREKA Space em português
          </a>
        </li>
        <li>
          <a className="text-link" href={links.about} rel="noopener noreferrer">
            Sobre o VIREKA Space
          </a>
        </li>
        <li>
          <a className="text-link" href={links.method} rel="noopener noreferrer">
            Método
          </a>
        </li>
        <li>
          <a className="text-link" href={links.faq} rel="noopener noreferrer">
            Perguntas frequentes
          </a>
        </li>
        <li>
          <a className="text-link" href={links.contact} rel="noopener noreferrer">
            Contato
          </a>
        </li>
      </ul>
    </section>
  );
}
