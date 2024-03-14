import { useEffect, useState } from "react";

import Card from "../../components/Card";
import data from "../../data/data.json";
import FilterBox from "../../components/FilterBox";

const Container = () => {
  const [displayedData, setDisplayedData] = useState(data);
  const [visibleJob, setVisibleJob] = useState<number>(3);

  const handleMoreJobs = () => {
    setVisibleJob((prevVisibleJobs) => prevVisibleJobs + 3);
  };

  useEffect(() => {
    setDisplayedData(data.slice(0, visibleJob));
  }, [visibleJob]);

  return (
    <>
      <FilterBox />
      {displayedData.map((jobItem, index) => (
        <Card item={jobItem} key={index} />
      ))}

      {visibleJob < data.length && (
        <button
          onClick={handleMoreJobs}
          className="mx-auto mt-10 block rounded bg-breakerBay px-5 py-3 text-xl font-bold text-white duration-500 ease-out hover:bg-outerSpace  hover:text-aquaHaze md:cursor-pointer"
        >
          Load More...
        </button>
      )}
    </>
  );
};

export default Container;
