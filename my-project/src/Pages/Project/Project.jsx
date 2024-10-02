import React from "react";
import Cards from "./Cards";
import Footer from "../Home/Pages/Footer/Footer";
const Project = () => {
  document.body.setAttribute("theme", "white");

  return (
    <div className=" text-[#18181B]">
      <div className="w-full ">
        <h1 className="no-select opacity-95 drop-shadow-xl uppercase w-full text-center font-extrabold tracking-tighter text-[6em] sm:text-[8em] md:text-[14em] xl:text-[20rem] 2xl:text-[22em] ">
          Projects
        </h1>
      </div>
      <Cards />
      <Footer />
    </div>
  );
};

export default Project;
