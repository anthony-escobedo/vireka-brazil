import { links, sections } from "@/lib/links";

export function BeyondThoughtSection() {
  return (
    <section
      id={sections.beyondThought}
      className="content-section"
      aria-labelledby="beyond-thought-heading"
    >
      <h2 id="beyond-thought-heading">Beyond Thought</h2>
      <p>
        Beyond Thought é uma referência filosófica relacionada à atenção e à
        clareza antes da interpretação automática. Não certifica o produto e
        não substitui o julgamento situacional.
      </p>
      <p>
        A relação permanece quieta: o livro orienta a postura; a plataforma
        oferece estrutura prática.
      </p>
      <p>
        <a
          className="text-link"
          href={links.beyondThought}
          rel="noopener noreferrer"
        >
          Conhecer Beyond Thought
        </a>
      </p>
    </section>
  );
}
