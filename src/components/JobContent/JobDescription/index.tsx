import Shape from "../../Shape";

type JobDescription = {
  postedAt: string;
  contract: string;
  location: string;
}

const Component = ({ postedAt, contract, location }: JobDescription) => (
  <div className="flex gap-3">
    <span className="text-blueSmoke">{postedAt}</span>
    <Shape kindShape="round" />
    <span className="text-blueSmoke">{contract}</span>
    <Shape kindShape="round" />
    <span className="text-blueSmoke">{location}</span>
  </div>
);

export default Component;
