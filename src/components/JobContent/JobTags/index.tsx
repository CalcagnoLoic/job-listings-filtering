import Tag from "../../Tag";

interface JobTags {
  role: string;
  level: string;
  languages: string | Array<string>;
  tools?: string | Array<string>;
}

const Component: React.FC<JobTags> = ({ role, level, languages, tools }) => (
  <div className="flex flex-wrap gap-4 lg:flex-nowrap lg:justify-end ">
    <Tag content={role} />
    <Tag content={level} />
    {Array.isArray(languages) &&
      languages.map((language: string) => <Tag content={language} />)}
    {Array.isArray(tools) &&
      tools.map((tool: string) => <Tag content={tool} />)}
  </div>
);

export default Component;
