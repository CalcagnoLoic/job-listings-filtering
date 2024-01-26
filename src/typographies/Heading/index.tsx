type Heading = {
  content: string
}

const Heading = ({ content }: Heading) => (
  <h2 className="my-2 text-[15px] font-bold text-outerSpace md:text-xl">
    {content}
  </h2>
);

export default Heading;
