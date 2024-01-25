const Component = () => (
  <div className="mx-6 mt-6 flex w-[327px] flex-col rounded bg-white p-10 md:w-full lg:mx-12 lg:flex-row">
    <div className="mb-4 mr-6 h-20 w-20 self-start rounded-full bg-red-500 md:self-center lg:mb-0"></div>
    <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-36">
      <div>
        <div className="flex gap-5">
          <p className="top-heading text-breakerBay md:text-[18px]">
            Photosnap
          </p>
          <p className=" top-heading-wrapper bg-breakerBay ">New!</p>
          <p className=" top-heading-wrapper bg-outerSpace">Featured</p>
        </div>

        <h2 className="my-2 text-sm font-bold text-outerSpace md:text-xl">
          Senior Frontend Developer
        </h2>

        <div className="flex justify-between self-center">
          <span className="text-blueSmoke">1d ago</span>
          <div className="round"></div>
          <span className="text-blueSmoke">Full Time</span>
          <div className="round"></div>
          <span className="text-blueSmoke">USA Only</span>
        </div>
      </div>

      <div className="line"></div>

      <div className="flex flex-wrap gap-4">
        <div className="tag-wrapper">
          <span className="tag">Frontend</span>
        </div>
        <div className="tag-wrapper">
          <span className="tag">Senior</span>
        </div>
        <div className="tag-wrapper">
          <span className="tag">HTML</span>
        </div>
        <div className="tag-wrapper">
          <span className="tag">CSS</span>
        </div>
        <div className="tag-wrapper">
          <span className="tag">JavaScript</span>
        </div>
      </div>
    </div>
  </div>
);

export default Component;
