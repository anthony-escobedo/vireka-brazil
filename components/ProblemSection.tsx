import { sections } from "@/lib/links";

const distinctions = [
  {
    label: "Informação observada",
    text: "O que já pode ser descrito a partir do que está presente na situação.",
  },
  {
    label: "Interpretação",
    text: "O sentido que começa a se formar antes de ser examinado com cuidado.",
  },
  {
    label: "Pressuposto",
    text: "O que pode estar sendo tratado como dado sem ter sido tornado explícito.",
  },
  {
    label: "Incerteza",
    text: "O que ainda permanece aberto e não precisa ser resolvido prematuramente.",
  },
  {
    label: "Influência",
    text: "O que pode estar inclinando a leitura — pressão, hábito, expectativa ou contexto.",
  },
] as const;

export function ProblemSection() {
  return (
    <section
      id={sections.problem}
      className="content-section"
      aria-labelledby="problem-heading"
    >
      <h2 id="problem-heading">Quando a resposta chega cedo demais</h2>
      <p>
        Em situações importantes, a pressão por concluir pode antecipar
        interpretações. O que falta, muitas vezes, não é mais informação — é
        espaço para distinguir o que já parece claro do que ainda permanece
        incerto.
      </p>
      <p>
        VIREKA Space não determina a verdade, não substitui o julgamento e não
        garante resultados. Oferece estrutura para observar com mais cuidado
        antes da resposta.
      </p>
      <ul className="distinction-list">
        {distinctions.map((item) => (
          <li key={item.label}>
            <p className="distinction-list__label">{item.label}</p>
            <p className="distinction-list__text">{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
