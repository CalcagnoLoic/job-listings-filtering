interface Paragraph {
  css: string;
  content: React.ReactNode | string;
}

const Paragraph = ({ css, content }: Paragraph) => (
  <p className={css}>{content}</p>
);

export default Paragraph;
