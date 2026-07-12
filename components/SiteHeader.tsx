import { links, sections } from "@/lib/links";
import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__brand" href={`#${sections.hero}`}>
          {site.siteName}
        </a>
        <nav className="site-header__nav" aria-label="Navegação da página">
          <a href={`#${sections.method}`}>Método</a>
          <a href={`#${sections.useCases}`}>Aplicações</a>
          <a href={`#${sections.beyondThought}`}>Beyond Thought</a>
          <a href={links.platform}>Plataforma</a>
        </nav>
      </div>
    </header>
  );
}
