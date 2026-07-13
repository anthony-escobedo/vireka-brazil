import { links, sections } from "@/lib/links";

const useCases = [
  {
    title: "Decisões",
    description:
      "Quando a pressa por concluir obscurece o que ainda está em aberto, organizar o contexto pode tornar visível o que merece ser examinado antes de escolher um caminho.",
    href: links.clarityBeforeAi,
    label: "Clareza antes da IA",
  },
  {
    title: "Equipes",
    description:
      "Em contextos coletivos, organizar o contexto pode ajudar a observar perspectivas diferentes sem forçar acordo prematuro.",
    href: links.teamClarity,
    label: "Clareza para equipes",
  },
  {
    title: "Inteligência artificial",
    description:
      "Antes de repassar contexto à IA, organizá-lo pode delimitar o que está estabelecido e o que permanece incerto, sem apresentar como estabelecido aquilo que ainda está em aberto.",
    href: links.aiHandoffClarity,
    label: "Clareza no repasse à IA",
  },
] as const;

export function UseCasesSection() {
  return (
    <section
      id={sections.useCases}
      className="content-section content-section--wide"
      aria-labelledby="usecases-heading"
    >
      <div className="content-section__intro">
        <h2 id="usecases-heading">Onde a clareza importa</h2>
        <p>
          Três áreas em que organizar o contexto pode ajudar a tornar visível
          o que precisa ser examinado antes de uma resposta ou decisão.
        </p>
      </div>
      <ul className="use-case-list">
        {useCases.map((item) => (
          <li key={item.title} className="use-case">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a className="text-link" href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
