import Paragraph from "../../typographies/Paragraph";
import Tag from "../Tag";

const Component = () => (
  <div className="mx-auto flex w-[325px] justify-between bg-white p-5 shadow-xl md:w-full lg:px-10 invisible">
    <div className=" flex w-2/3 flex-wrap gap-4">
      <Tag content="Python" />
    </div>

    <Paragraph
      kind="span"
      content="Clear"
      css="font-bold text-breakerBay hover:underline self-center cursor-pointer "
    />
  </div>
);

export default Component;
