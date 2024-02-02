import React from "react";
import { serviceData } from "../Data/data";
import { Variants, motion } from "framer-motion";
import arrow from '../../assets/svg/Arrow-white.svg'
const Services = () => {
  const FadeInUpAnimation: Variants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        duration: 1,
      },
    },
  };

  return (
    <div className="back 2xl:mt-40 mt-24 pb-24">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={FadeInUpAnimation}
        className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 md:mx-24 mx-4"
      >
        <div className="text-white mt-20 flex flex-col gap-2">
          <p className="text-[#75CEFF] text-[16px] font-medium">What We Do</p>
          <h1 className="text-[40px] font-bold">Our Services</h1>
          <p className="text-[#D2D4DA] text-[24px] font-medium">
            Elevate your digital presence with our comprehensive suite of
            software services.
          </p>
          <div>
            <button className="bg-white py-2 px-4 text-black">
              Talk To Us Now!
            </button>
          </div>
        </div>

        {/* serviceData */}
        {serviceData.map((item) => (
          <motion.div
            variants={FadeInUpAnimation}
            key={item.title}
            className="relative border-[2px] border-[#767676] py-6 px-3 rounded-md text-white flex flex-col gap-4 mt-20"
          >
            <img
              className="w-[62px] absolute -top-8 bg-[#120b2eac] rounded-md ml-4"
              src={item.imgUrl}
              alt=""
            />
            <h1 className="mt-12 text-[20px] font-semibold">{item.title}</h1>
            <p className="text-[#D2D4DA] text-[13px] font-normal">
              {item.desc}
            </p>
            <div className=" flex items-center gap-2">
              <button>{item.btn}</button>
              <img src={arrow} alt="" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
