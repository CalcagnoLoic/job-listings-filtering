import Tag from "../../Tag";

type JobTags = {
  role: string;
  level: string;
  languages: string | Array;
  tools: string | Array;
};

const Component = ({ role, level, languages, tools }: JobTags) => (
  <div className="flex flex-wrap gap-4 lg:flex-nowrap lg:justify-end">
    <Tag content={role} />
    <Tag content={level} />
    {languages &&
      languages.map((language: string) => <Tag content={language} />)}
    {tools && tools.map((tool: string) => <Tag content={tool} />)}
  </div>
);

export default Component;
