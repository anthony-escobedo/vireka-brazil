import { links } from "@/lib/links";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__brand">{site.siteName}</p>
        <p className="site-footer__note">
          A plataforma principal permanece em{" "}
          <a href={links.globalPlatform} rel="noopener noreferrer">
            vireka.space
          </a>
          .
        </p>
        <nav className="site-footer__nav" aria-label="Rodapé">
          <a href={links.privacy} rel="noopener noreferrer">
            Privacidade
          </a>
          <a href={links.terms} rel="noopener noreferrer">
            Termos
          </a>
          <a href={links.contact} rel="noopener noreferrer">
            Contato
          </a>
          <a href={links.globalPlatform} rel="noopener noreferrer">
            Plataforma global
          </a>
        </nav>
      </div>
    </footer>
  );
}
