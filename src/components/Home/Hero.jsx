import React from "react";
import home from "../../assets/images/Hero.svg";
import CountUp from "react-countup";
import { ScrollRestoration } from "react-router-dom";
const Hero = () => {
  return (
    <div className=" sm:flex  block justify-between 2x:pt-14 lg:mx-24 md:mx-12 sm:mx-12 mx-4">
      {/* left */}
      <div
        className=" md:w-[50%] w-[100%] flex flex-col gap-2"
      >
       
        <p
          
          className=" text-[#14A2F1] lg:text-[16px] 2xl:text-[18px] md:text-[12px]  font-[500]"
        >
          Apptex Software Solutions
        </p>
        <ScrollRestoration />
        <h1
          
          className=" text-[#282A3A] 2xl:text-[72px] lg:text-[52px] md:text-[42px] text-[29px] font-[700] md:leading-[4rem] 2xl:leading-[5rem]"
        >
          Transforming Visions into Digital Reality!
        </h1>
        <p
          
          className=" text-[#777986] 2xl:text-[25px] lg:text-[20px] text-[16px] font-medium"
        >
          Bring your visions to life with custom mobile and web apps, ensuring
          better user experience, engagement, and smart technology in a single
          transformative solution.
        </p>
        <div  className=" flex gap-3 mt-12">
          <button className=" bg-[#14A2F1] 2xl:py-4 2xl:px-8 py-2 px-4 hover:bg-[#4889ac] text-white">
            Get A Free Quote
          </button>
          <button className=" border-[1px] 2xl:py-4 2xl:px-8 text-[#14A2F1] border-[#14A2F1] hover:bg-[#e3ecf1] py-2 px-4">
            Learn More
          </button>
        </div>
        <div
          
          className=" flex items-center lg:gap-20 gap-12 mt-16 "
        >
          <div className="">
            <h1 className=" text-[#14A2F1] 2xl:text-[42px] lg:text-[32px] text-[22px] font-[700]">
              <CountUp start={0} end={150} duration={2} delay={0} />+
            </h1>
            <p className=" text-[#777986] 2xl:text-[20px] lg:text-[16px] text-[12px] font-[500]">
              Projects Delivered
            </p>
          </div>
          <div>
            <h1 className=" text-[#14A2F1] 2xl:text-[42px] lg:text-[32px] text-[22px] font-[700]">
              <CountUp start={0} end={5} duration={2} delay={0} />+
            </h1>
            <p className=" 2xl:text-[20px] text-[#777986] lg:text-[16px] text-[12px] font-[500]">
              Years Experience
            </p>
          </div>
          <div>
            <h1 className=" text-[#14A2F1] 2xl:text-[42px] lg:text-[32px] text-[22px] font-[700]">
              <CountUp start={0} end={120} duration={2} delay={0} />+
            </h1>
            <p className=" 2xl:text-[20px] text-[#777986] lg:text-[16px] text-[12px] font-[500]">
              Five Star Ratings
            </p>
          </div>
        </div>
      </div>
      {/* right */}
      <div className=" 2xl:w-[40%] md:w-[40%] w-[100%]">
        <img src={home} alt="" className="" />
      </div>
    </div>
  );
};

export default Hero;
