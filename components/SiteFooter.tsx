import { links } from "@/lib/links";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__brand">{site.siteName}</p>
        <p className="site-footer__note">
          Entrada brasileira para conhecer o VIREKA Space. A plataforma
          principal permanece em{" "}
          <a href={links.globalPlatform}>vireka.space</a>.
        </p>
        <nav className="site-footer__nav" aria-label="Rodapé">
          <a href={links.platform}>Plataforma</a>
          <a href={links.about}>Sobre o VIREKA Space</a>
          <a href={links.privacy}>Privacidade</a>
          <a href={links.terms}>Termos</a>
          <span className="site-footer__contact">
            E-mail:{" "}
            <a
              href={links.contactEmail}
              aria-label={`Enviar e-mail para ${site.contactEmail}`}
            >
              {site.contactEmail}
            </a>
          </span>
          <a href={links.plan}>Ver os planos</a>
        </nav>
        <p className="site-footer__copy">
          © {new Date().getFullYear()} VIREKA Space
        </p>
      </div>
    </footer>
  );
}
