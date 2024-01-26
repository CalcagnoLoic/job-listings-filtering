import Shape from "../../Shape";

type JobDescription = {
  postedAt: string;
  contract: string;
  location: string;
}

const Component = ({ postedAt, contract, location }: JobDescription) => (
  <div className="flex gap-3">
    <span className="text-blueSmoke font-semibold">{postedAt}</span>
    <Shape kindShape="round" />
    <span className="text-blueSmoke font-semibold">{contract}</span>
    <Shape kindShape="round" />
    <span className="text-blueSmoke font-semibold">{location}</span>
  </div>
);

export default Component;
