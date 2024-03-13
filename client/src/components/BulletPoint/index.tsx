import Paragraph from "../../typographies/Paragraph";

interface BulletPoint {
  isNew: boolean;
  isFeatured: boolean;
}

const Component: React.FC<BulletPoint> = ({ isNew, isFeatured }) => (
  <>
    {isNew && (
      <Paragraph
        kind="p"
        css="top-heading-wrapper bg-breakerBay"
        content="New!"
      />
    )}

    {isFeatured && (
      <Paragraph
        kind="p"
        css="top-heading-wrapper bg-outerSpace"
        content="Featured"
      />
    )}
  </>
);

export default Component;
