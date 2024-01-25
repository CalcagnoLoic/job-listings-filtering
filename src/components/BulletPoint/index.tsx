import Paragraph from "../../typographies/Paragraph";

interface BulletPoint {
  isNew: boolean;
  isFeatured: boolean;
}

const Component = ({ isNew, isFeatured }: BulletPoint) => (
  <>
    {isNew && (
      <Paragraph css="top-heading-wrapper bg-breakerBay" content="New!" />
    )}

    {isFeatured && (
      <Paragraph css="top-heading-wrapper bg-outerSpace" content="Featured" />
    )}
  </>
);

export default Component;
