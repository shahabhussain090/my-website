import React from "react";
import about from "../../assets/images/About Us Images.png";
import { Variants, motion } from "framer-motion";
const AboutUs = () => {
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
    <div className=" md:flex block items-center justify-between lg:mx-24 md:mx-12 sm:mx-12 mx-4 mt-48 2xl:mt-48">
      {/* left */}
      <motion.div
        initial={{
          opacity: 0,
          x: 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 2,
          },
        }}
        className=" md:w-[40%] w-[100%]"
      >
        <img src={about} alt="" />
      </motion.div>
      {/* right */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={FadeInUpAnimation}
        className=" md:w-[50%] w-[100%]"
      >
        <motion.p
          variants={FadeInUpAnimation}
          className=" text-[#14A2F1] 2xl:text-[20px] text-[16px] font-medium"
        >
          Who We Are
        </motion.p>
        <motion.h1
          variants={FadeInUpAnimation}
          className=" text-[#282A3A] 2xl:text-[52px] text-[40px] font-[700]"
        >
          About Us
        </motion.h1>
        <motion.p
          variants={FadeInUpAnimation}
          className=" text-[#777986] 2xl:text-[22px] md:text-[16px] text-[16px] font-[500] mt-4"
        >
          We're a team of experienced tech professionals, with 5+ years in the
          industry, who are committed to revolutionising web and app
          development. We love blending creativity, functionality, and giving
          users an awesome experience. We're here to raise the bar in digital
          innovation. We don't just offer services; we bring visions to life,
          turning client visions into reality through precise coding and design.
        </motion.p>
        <motion.div variants={FadeInUpAnimation}>
          <button className=" bg-[#14A2F1] py-3 px-6 text-white hover:bg-[#4889ac] mt-14">
            Learn More About Us!
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
