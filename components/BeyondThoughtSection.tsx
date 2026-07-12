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
        interpretação e à inteligência do design. Oferece contexto intelectual
        para a postura de observar antes de concluir.
      </p>
      <p>
        A relação permanece quieta: o livro orienta a disposição; a plataforma
        oferece estrutura prática. Beyond Thought não certifica, valida ou
        prova o VIREKA Space.
      </p>
      <p>
        <a className="text-link" href={links.beyondThought}>
          Ler sobre Beyond Thought
        </a>
      </p>
    </section>
  );
}
