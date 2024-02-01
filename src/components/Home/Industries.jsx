import React from "react";
import { industriesData } from "../Data/data";
import { Variants, motion } from "framer-motion";
const Industries = () => {
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
    <div className=" bg-[#F8F9FA] w-full pb-20">
      <motion.div initial='hidden' whileInView='show' variants={FadeInUpAnimation} className=" md:mx-24 mx-4 mt-32">
        <h1 className=" text-[40px] font-bold text-center py-12">
          Industries We Serve
        </h1>
        <div className=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-9 mt-8">
          {industriesData.map((item) => {
            return (
              <motion.div variants={FadeInUpAnimation} className=" bg-white border-l-[2px] border-[#14A2F1] py-3 px-6 flex items-center gap-3">
                <img src={item.imgUrl} alt="" />
                <h1>{item.title}</h1>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Industries;
