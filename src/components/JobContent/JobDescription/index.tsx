import Paragraph from "../../../typographies/Paragraph";
import Shape from "../../Shape";

interface JobDescription {
  postedAt: string;
  contract: string;
  location: string;
}

const Component: React.FC<JobDescription> = ({
  postedAt,
  contract,
  location,
}) => (
  <div className="flex gap-3">
    <Paragraph kind="span" css="job-description-text" content={postedAt} />
    <Shape kindShape="round" />
    <Paragraph kind="span" css="job-description-text" content={contract} />
    <Shape kindShape="round" />
    <Paragraph kind="span" css="job-description-text" content={location} />
  </div>
);

export default Component;
