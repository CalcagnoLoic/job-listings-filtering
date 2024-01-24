interface Link {
  href: string;
  content: string;
}

const Component = ({ href, content }: Link) => (
  <a href={href} target="_blank">
    {content}
  </a>
);

export default Component;
