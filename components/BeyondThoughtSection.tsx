import { links, sections } from "@/lib/links";

export function BeyondThoughtSection() {
  return (
    <section
      id={sections.beyondThought}
      className="content-section beyond-thought"
      aria-labelledby="beyond-thought-heading"
    >
      <h2 id="beyond-thought-heading">Beyond Thought</h2>
      <p>
        Beyond Thought é uma referência filosófica relacionada à atenção, à
        interpretação e à consciência como inteligência de desenho. Oferece
        contexto intelectual para a postura de observar antes de concluir.
      </p>
      <p>
        A relação permanece quieta: Beyond Thought orienta a disposição; o
        VIREKA Space oferece um ambiente prático de clareza. Beyond Thought não
        certifica, valida ou prova o VIREKA Space.
      </p>
      <p>
        <a className="text-link" href={links.beyondThought}>
          Ler sobre Beyond Thought
          <span className="text-link__external-marker" aria-hidden="true">
            {" "}
            ↗
          </span>
          <span className="sr-only">, no site principal do VIREKA Space</span>
        </a>
      </p>
    </section>
  );
}
