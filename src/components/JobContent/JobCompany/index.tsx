import Paragraph from "../../../typographies/Paragraph";

type CompanyName = {
  company: string;
};

const Component = ({ company }: CompanyName) => (
  <Paragraph
    css="top-heading text-breakerBay md:text-[18px]"
    content={company}
  />
);

export default Component;
