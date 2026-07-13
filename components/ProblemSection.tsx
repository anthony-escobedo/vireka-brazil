import { sections } from "@/lib/links";

const distinctions = [
  {
    label: "O que foi observado",
    text: "O que foi relatado, mostrado ou registrado na situação, sem acrescentar uma interpretação.",
  },
  {
    label: "Interpretação",
    text: "A leitura da situação que começa a se formar — distinta do que foi observado e ainda aberta a exame.",
  },
  {
    label: "Pressuposto",
    text: "Uma suposição que pode estar sendo tratada como dada sem ter sido estabelecida.",
  },
  {
    label: "O que continua incerto",
    text: "O que permanece em aberto e não precisa ser tratado como estabelecido.",
  },
  {
    label: "O que pode estar influenciando",
    text: "Pressões, expectativas, hábitos ou condições do contexto que podem afetar a forma como a situação está sendo interpretada.",
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
        O VIREKA Space não determina a verdade, não substitui o julgamento e
        não garante resultados. Oferece estrutura para observar com mais
        cuidado antes da resposta.
      </p>
      <p>
        Algumas distinções ajudam a examinar o que está acontecendo antes de
        concluir.
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
