interface Paragraph {
  kind: "p" | "span";
  css: string;
  content: React.ReactNode | string;
}

const Paragraph: React.FC<Paragraph> = ({ css, content, kind }) => {
  if (kind === "p") {
    return <p className={css}>{content}</p>;
  }

  return <span className={css}>{content}</span>;
};

export default Paragraph;
