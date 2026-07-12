import { sections } from "@/lib/links";

export function ProblemSection() {
  return (
    <section
      id={sections.problem}
      className="content-section"
      aria-labelledby="problem-heading"
    >
      <h2 id="problem-heading">O problema que permanece</h2>
      <p>
        Em situações importantes, a pressão por responder rápido pode antecipar
        interpretações. O que falta, muitas vezes, não é mais informação — é
        espaço para distinguir o que já parece claro do que ainda permanece
        incerto.
      </p>
      <p>
        VIREKA Space não determina a verdade, não substitui o julgamento e não
        garante resultados. Oferece estrutura para observar a situação com mais
        cuidado antes da resposta.
      </p>
    </section>
  );
}
