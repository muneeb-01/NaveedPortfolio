import React from "react";

function Hero() {
  return (
    <section className="relative z-10 clipContainer bg-dark-gradiant h-screen">
      <h1 className="no-select w-full absolute top-[35%]  sm:top-[42%] -translate-y-1/2 text-center font-extrabold text-dark text-[6em] sm:text-[8em] md:text-[14em] xl:text-[26em] ">
        HELLO
      </h1>
      <div className="absolute top-[32.5%]  sm:top-[40%]  left-1/2 -translate-x-1/2  text-white w-[90vw] no-select text-center flex flex-col justify-center items-center">
        <div className="relative flex w-full justify-center items-center">
          <h2 className="font-signature text-[2em] sm:text-[3em] md:text-[4em] xl:text-[5em] font-medium">
            <span className="">Naveed</span>
            <span> </span>
            <span className="">Mughal</span>
          </h2>
        </div>
        <div className="relative w-[90%] mt-12 sm:mt-24 font-poppins font-thin grid md:grid-cols-2 lg:grid-cols-3">
          <div className=" max-lg:hidden "></div>
          <div className=" text-left fs1  pr-5">
            I am a creative, dedicated, and multidisciplinary interior architect
            from Pakistan, specializing in transforming spaces with creativity
            and functionality.
          </div>
          <div className=" text-left fs1  pr-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim natus
            quidem et porro autem modi blanditiis in ducimus sapiente, officiis
            hic accusantium dignissimos illo illum debitis magnam mollitia
            aspernatur ab. Placeat fuga iste repellendus, possimus reprehenderit
            nostrum tempore. Quis nam eligendi ad incidunt provident enim et eos
            repudiandae odio atque numquam temporibus nobis assumenda, excepturi
            sed natus veniam iure accusamus.
          </div>
        </div>
      </div>
      <div className="absolute text-white text-sm font-medium font-poppins bottom-[10%] left-[8%]">
        <li className="fs1 ">6 Years Of Experience</li>
        <p className=" text-xs  pl-5 fs1">2018 - 2024</p>
      </div>
    </section>
  );
}

export default Hero;
