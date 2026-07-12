import { BeyondThoughtSection } from "@/components/BeyondThoughtSection";
import { EntryLinks } from "@/components/EntryLinks";
import { Hero } from "@/components/Hero";
import { MethodSection } from "@/components/MethodSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { UseCasesSection } from "@/components/UseCasesSection";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo-principal">
        Ir para o conteúdo principal
      </a>
      <SiteHeader />
      <main id="conteudo-principal" className="site-main">
        <Hero />
        <ProblemSection />
        <MethodSection />
        <UseCasesSection />
        <BeyondThoughtSection />
        <EntryLinks />
      </main>
      <SiteFooter />
    </>
  );
}
