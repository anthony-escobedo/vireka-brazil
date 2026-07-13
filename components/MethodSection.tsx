import { externalSrLabel, links, sections } from "@/lib/links";

const distinctionAreas = [
  {
    label: "Situação inicial",
    text: "O ponto de partida: o que está em jogo e o que parece estar acontecendo.",
  },
  {
    label: "Clareza atual",
    text: "O que já parece claro o suficiente por enquanto — sem confundir clareza com certeza.",
  },
  {
    label: "O que parece fundamentado",
    text: "O que encontra apoio no contexto disponível, ainda de forma provisória.",
  },
  {
    label: "O que continua incerto",
    text: "O que permanece em aberto e não deve ser tratado como estabelecido.",
  },
  {
    label: "O que pode estar influenciando",
    text: "Pressões, expectativas, hábitos ou condições que podem afetar a leitura da situação.",
  },
  {
    label: "O que pode estar sendo pressuposto",
    text: "Premissas que podem estar sendo tratadas como dadas sem terem sido tornadas explícitas.",
  },
  {
    label: "Pergunta de esclarecimento",
    text: "Uma pergunta que ajuda a examinar o contexto — sem exigir que toda incerteza seja resolvida.",
  },
] as const;

export function MethodSection() {
  return (
    <section
      id={sections.method}
      className="content-section content-section--wide"
      aria-labelledby="method-heading"
    >
      <div className="content-section__intro">
        <h2 id="method-heading">Distinções que ajudam a organizar o contexto</h2>
        <p>
          As distinções anteriores ajudam a examinar a situação. No VIREKA
          Space, aspectos relevantes do contexto podem ser organizados em um{" "}
          <a className="text-link" href={links.method}>
            quadro de clareza
            <span className="sr-only">{externalSrLabel}</span>
          </a>{" "}
          composto por áreas como as apresentadas a seguir. Essas áreas não
          formam um método em sete etapas: ajudam a tornar visíveis diferentes
          aspectos do contexto sem remover a incerteza, diagnosticar pessoas ou
          criar consenso.
        </p>
      </div>
      <ul className="method-list">
        {distinctionAreas.map((area) => (
          <li key={area.label}>
            <p className="method-list__label">{area.label}</p>
            <p className="method-list__text">{area.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
