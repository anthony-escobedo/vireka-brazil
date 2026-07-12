import { links, sections } from "@/lib/links";

const useCases = [
  {
    title: "Decisões",
    description:
      "Situações em que a pressa por concluir pode obscurecer o que ainda precisa ser esclarecido antes de escolher um caminho.",
    href: links.clarityBeforeAi,
    label: "Clareza antes da IA",
  },
  {
    title: "Equipes",
    description:
      "Contextos coletivos em que perspectivas diferentes precisam ser observadas sem forçar acordo prematuro.",
    href: links.teamClarity,
    label: "Clareza para equipes",
  },
  {
    title: "Inteligência artificial",
    description:
      "Momentos em que o contexto precisa ser organizado antes de um repasse à IA — para que a incerteza não seja tratada como fato.",
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
          Três áreas em que organizar o contexto pode ser útil — sem prometer
          certeza, diagnóstico, consenso ou resultado garantido.
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
