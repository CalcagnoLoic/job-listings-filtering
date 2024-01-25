const Component = ({ content }: { content: string | Array[string] }) => (
  <div className="tag-wrapper">
    <span className="tag">{content}</span>
  </div>
);

export default Component;
