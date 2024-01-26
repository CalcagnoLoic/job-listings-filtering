import Paragraph from "../../../typographies/Paragraph";

type CompanyName = {
  company: string;
};

const Component = ({ company }: CompanyName) => (
  <Paragraph
    kind="p"
    css="top-heading text-[13px] text-breakerBay md:text-[18px]"
    content={company}
  />
);

export default Component;
