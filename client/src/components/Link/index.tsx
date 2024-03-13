interface Link {
  href: string;
  content: string;
}

const Component: React.FC<Link> = ({ href, content }) => (
  <a href={href} target="_blank">
    {content}
  </a>
);

export default Component;
