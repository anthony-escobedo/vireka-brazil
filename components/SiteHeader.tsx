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
          <a href={`#${sections.problem}`}>Contexto</a>
          <a href={`#${sections.method}`}>Método</a>
          <a href={`#${sections.useCases}`}>Usos</a>
          <a href={`#${sections.entry}`}>Entrada</a>
          <a
            href={links.platform}
            rel="noopener noreferrer"
          >
            Plataforma
          </a>
        </nav>
      </div>
    </header>
  );
}
