import BulletPoint from "../BulletPoint";
import CardLayout from "../../layouts/CardLayout";
import Heading from "../../typographies/Heading";
import JobCompany from "../JobContent/JobCompany";
import JobDescription from "../JobContent/JobDescription";
import JobTags from "../JobContent/JobTags";
import LogoCompany from "../LogoCompany";
import Shape from "../Shape";

import { itemProps } from "../../types/interface";

import FilterBox from "../FilterBox";
import { useEffect, useState } from "react";

const Component = () => {
  const [isData, setIsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://127.0.0.1:5000/");

      const data = await response.json();
      setIsData(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <FilterBox />
      {isData.map((item: itemProps) => (
          <div key={item.id}>
            <CardLayout isFeatured={item.featured}>
              <LogoCompany logo={item.logo} company={item.company} />

              <div className="flex flex-col lg:w-full lg:flex-row lg:justify-between lg:gap-36">
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
          </div>
        ))}
    </>
  );
};

export default Component;
