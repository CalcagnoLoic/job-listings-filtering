type Tag = {
  content: string;
};

const Component = ({ content }: Tag) => (
  <div className="tag-wrapper">
    <span className="tag">{content}</span>
  </div>
);

export default Component;
