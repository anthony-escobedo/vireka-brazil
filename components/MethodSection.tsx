import { sections } from "@/lib/links";

const methodAreas = [
  "Situação inicial",
  "Clareza atual",
  "O que parece fundamentado",
  "O que ainda pode permanecer incerto",
  "O que pode estar influenciando",
  "O que pode estar sendo presumido",
  "Pergunta de esclarecimento",
] as const;

export function MethodSection() {
  return (
    <section
      id={sections.method}
      className="content-section"
      aria-labelledby="method-heading"
    >
      <h2 id="method-heading">Uma estrutura para observar</h2>
      <p>
        O método organiza a atenção em áreas distintas. Não remove a
        incerteza, não diagnostica pessoas e não cria consenso automático.
        Serve para separar o que já parece sustentado do que ainda pede
        cuidado.
      </p>
      <ul className="method-list">
        {methodAreas.map((area) => (
          <li key={area}>{area}</li>
        ))}
      </ul>
    </section>
  );
}
