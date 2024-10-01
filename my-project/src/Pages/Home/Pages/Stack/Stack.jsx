import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Stack = () => {
  const stackSection = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: stackSection.current,
        start: "top top",
        end: "start 0%",
        scrub: true,
        onEnter: () => {
          document.body.setAttribute("theme", "white");
        },
        onEnterBack: () => {
          document.body.setAttribute("theme", "salmon");
        },
      },
    });

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };
  }, []);
  return (
    <div
      ref={stackSection}
      className="section border-t-4 border-[#fff] pt-[15vh]"
    >
      <Header />
      <div className="w-full relative">
        <StackContainer address={"/images/ext_1.webp"} />
        <StackContainer address={"/images/ext_2.jpg"} />
        <StackContainer address={"/images/ext_3.jpg"} />
        <StackContainer address={"/images/ext_4.jpg"} />
      </div>
    </div>
  );
};

export default Stack;

const StackContainer = ({ address }) => {
  console.log(address);
  return (
    <div className="stack drop-shadow-xl">
      <div
        className={`w-[95%] h-[88%] relative flex justify-center overflow-hidden items-end rounded-[40px]`}
      >
        <img
          src={`${address}`}
          className="absolute -z-10 w-full bg-cover bg-center"
          alt="Image"
        />
        <div className="w-full flex ">
          <div className="w-3/4  pl-20 flex items-center">
            <h1 className="text-[7rem] pb-10 font-poppins tracking-tight uppercase text-white">
              THE ESCAPE
            </h1>
          </div>
          <div className="w-1/2 flex justify-end items-center pr-20">
            <div className="rounded-full bg-white size-[10rem] opacity-85"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className=" text-center py-[6vh] flex flex-col justify-center items-center 2xl:gap-[4.5vh]">
      <h1 className="fs2-horizontal uppercase font-Gilgan  tracking-tight font-medium ">
        WORKS
      </h1>
      <p className="text-2xl w-[35%] font-poppins tracking-tight">
        Elevate your space with our top picks. Handpicked for their timeless
        design and quality, these pieces will bring character and charm to any
        room.
      </p>
    </div>
  );
};
