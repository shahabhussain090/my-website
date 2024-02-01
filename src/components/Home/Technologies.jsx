import React from "react";
import { technologyData } from "../Data/data";
import { Variants, motion } from "framer-motion";
const Technologies = () => {
  const FadeInUpAnimation: Variants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };
  return (
    <motion.div initial='hidden' whileInView='show' variants={FadeInUpAnimation}  className=" md:mx-16 mx-4 mt-24">
      <h1 className=" text-[#282A3A] text-[40px] font-bold text-center">
        Technologies We Work With
      </h1>
      <div  className=" grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-24 mt-14 items-center">
        {technologyData.map((item) => {
          return (
            <motion.div variants={FadeInUpAnimation} className=" shadow-sm px-1 py-2 flex flex-col items-center whitespace-nowrap">
              <div className="">
              <img src={item.imgUrl} alt="" />
              <h1 className=" text-[24px] font-serif mt-3 text-center">{item.title}</h1>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Technologies;
