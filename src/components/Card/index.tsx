import data from "../../data/data.json";

import BulletPoint from "../BulletPoint";
import CardLayout from "../../layouts/CardLayout";
import Heading from "../../typographies/Heading";
import JobCompany from "../JobContent/JobCompany";
import JobDescription from "../JobContent/JobDescription";
import JobTags from "../JobContent/JobTags";
import LogoCompany from "../LogoCompany";
import Shape from "../Shape";

const Component = () => {
  return (
    <>
      {data.map((item) => (
        <CardLayout isFeatured={item.featured} id={item.id}>
          <LogoCompany logo={item.logo} company={item.company} />

          <div className="flex flex-col lg:w-full lg:flex-row lg:justify-between">
            <div className="flex flex-col items-start">
              <div className="flex gap-5">
                <JobCompany company={item.company} />

                <BulletPoint isNew={item.new} isFeatured={item.featured} />
              </div>

              <Heading content={item.position} />

              <JobDescription
                postedAt={item.postedAt}
                contract={item.contract}
                location={item.location}
              />
            </div>

            <Shape kindShape="line" />

            <JobTags
              role={item.role}
              level={item.level}
              languages={item.languages}
              tools={item.tools}
            />
          </div>
        </CardLayout>
      ))}
    </>
  );
};

export default Component;
