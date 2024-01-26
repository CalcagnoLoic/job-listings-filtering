import Link from "../Link";
import Paragraph from "../../typographies/Paragraph";

const Component = () => (
  <>
    <Paragraph
      css="p-5 text-center text-outerSpace font-bold mt-5"
      content={
        <>
          Coding with love by
          <Link
            href="https://github.com/CalcagnoLoic"
            content=" @CalcagnoLoic 🎉"
          />
        </>
      }
    />
  </>
);

export default Component;
