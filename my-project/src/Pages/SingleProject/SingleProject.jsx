import React from "react";

const SingleProject = () => {
  document.body.setAttribute("theme", "white");
  return (
    <div className=" w-full">
      <LandingPage />
      <TextContainer />
      <PictureContainer1 />
      <PictureContainer2 />
      <PictureContainer1 />
    </div>
  );
};

export default SingleProject;

const LandingPage = () => {
  return (
    <div className="w-full h-screen relative">
      <img src="/images/ext_2.jpg" className="w-full h-screen" alt="" />
      <div className="w-full h-screen bg-black opacity-15 absolute top-0 left-0"></div>
      <h1 className="text-6xl font-signature font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
        Urban Oasis
      </h1>
    </div>
  );
};

const TextContainer = () => {
  return (
    <div className="w-full grid grid-cols-[65%_35%] text-lg text-slate-600 px-[10rem] py-[5rem]">
      <div className="font-Gilgan">
        Interior design and architecture aim to weave functionality and
        aesthetics into a tapestry of innovation, comfort, and expression. By
        embracing sustainability, adapting to evolving needs, and honoring
        cultural contexts, these disciplines transform spaces into living art,
        enriching the human experience with purpose and beauty.
      </div>
      <div className="font-Gilgan text-right">Residential</div>
    </div>
  );
};

const PictureContainer1 = () => {
  return (
    <div className="w-full flex justify-center">
      <img src="/images/ext_2.jpg" className="w-[70%] h-[70%]" alt="" />
    </div>
  );
};

const PictureContainer2 = () => {
  return (
    <div className="w-full h-screen grid grid-cols-[65%_35%] text-lg text-slate-600 px-[5rem] py-[5rem]">
      <div>
        <img src="/images/ext_2.jpg" className="w-full h-full" alt="" />
      </div>
      <div className="flex justify-end items-center">
        <img src="/images/ext_2.jpg" className="w-[60%] h-[30%]" alt="" />
      </div>
    </div>
  );
};
