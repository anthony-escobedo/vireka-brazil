import { links, sections } from "@/lib/links";

const useCases = [
  {
    title: "Decisões",
    description:
      "Situações em que a pressa por concluir pode obscurecer o que ainda precisa ser esclarecido.",
    href: links.clarityBeforeAi,
    label: "Clareza antes da IA",
  },
  {
    title: "Equipes",
    description:
      "Contextos coletivos em que perspectivas diferentes precisam ser observadas sem forçar acordo prematuro.",
    href: links.teamClarity,
    label: "Clareza em equipes",
  },
  {
    title: "Inteligência artificial",
    description:
      "Momentos de transferência para sistemas automáticos em que a clareza prévia pode reduzir interpretações precipitadas.",
    href: links.aiHandoffClarity,
    label: "Clareza na transferência para IA",
  },
] as const;

export function UseCasesSection() {
  return (
    <section
      id={sections.useCases}
      className="content-section"
      aria-labelledby="usecases-heading"
    >
      <h2 id="usecases-heading">Onde a clareza importa</h2>
      <p>
        Três áreas em que a estrutura de observação pode ser útil — sem
        prometer certeza, diagnóstico ou resultado garantido.
      </p>
      <ul className="use-case-list">
        {useCases.map((item) => (
          <li key={item.title} className="use-case">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a className="text-link" href={item.href} rel="noopener noreferrer">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
