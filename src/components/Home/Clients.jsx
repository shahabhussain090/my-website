import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import main from "../../assets/images/Client.png";
import ReactStars from "react-stars";
import { Variants, motion } from "framer-motion";
const Clients = () => {
  const FadeInUpAnimation: Variants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 2,
      },
    },
  };
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className=" back1 mt-32 overflow-x-hidden pb-24">
      <motion.div
        className="md:mx-24 mx-4"
        initial="hidden"
        whileInView="show"
        variants={FadeInUpAnimation}
      >
        <h1 className=" text-[40px] text-center text-white font-bold pt-12">
          What Our Clients Say
        </h1>

        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
            <div className=" md:flex block items-center justify-between  mt-12 ">
              <img className=" 2xl:w-[1455px] w-[333px]" src={main} alt="" />
              <div className=" text-white">
                <div className="bac 2xl:py-24 py-12 md:px-12 px-4">
                  <p className=" md:text-[24px] 2xl:text-[32px] text-[16px] font-semibold">
                    “Amet risus eget at hendrerit erat nibh. Semper nec ornare
                    pretium neque ut tortor tincidunt hendrerit accumsan.
                    Pulvinar vel sit sed massa morbi. Ac dolor orci facilisis
                    parturient. In ac et in congue.”
                  </p>
                  <p className=" mt-4">
                    {" "}
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      color2={"#ffd700"}
                    />
                  </p>
                  <p className=" 2xl:text-[27px] md:text-[20px] text-[12px] font-medium mt-6">
                    Name Surname
                  </p>
                  <p className=" text-[#F3F4F8] 2xl:text-[18px] md:text-[14px] text-[10px] font-normal">
                    Position, Company name
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" md:flex block items-center justify-between  mt-12 ">
              <img className=" 2xl:w-[1455px] w-[333px]" src={main} alt="" />
              <div className=" text-white">
                <div className="bac 2xl:py-24 py-12 md:px-12 px-4">
                  <p className=" md:text-[24px] 2xl:text-[32px] text-[16px] font-semibold">
                    “Amet risus eget at hendrerit erat nibh. Semper nec ornare
                    pretium neque ut tortor tincidunt hendrerit accumsan.
                    Pulvinar vel sit sed massa morbi. Ac dolor orci facilisis
                    parturient. In ac et in congue.”
                  </p>
                  <p className=" mt-4">
                    {" "}
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      color2={"#ffd700"}
                    />
                  </p>
                  <p className=" 2xl:text-[27px] md:text-[20px] text-[12px] font-medium mt-6">
                    Name Surname
                  </p>
                  <p className=" text-[#F3F4F8] 2xl:text-[18px] md:text-[14px] text-[10px] font-normal">
                    Position, Company name
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" md:flex block items-center justify-between  mt-12 ">
              <img className=" 2xl:w-[1455px] w-[333px]" src={main} alt="" />
              <div className=" text-white">
                <div className="bac 2xl:py-24 py-12 md:px-12 px-4">
                  <p className=" md:text-[24px] 2xl:text-[32px] text-[16px] font-semibold">
                    “Amet risus eget at hendrerit erat nibh. Semper nec ornare
                    pretium neque ut tortor tincidunt hendrerit accumsan.
                    Pulvinar vel sit sed massa morbi. Ac dolor orci facilisis
                    parturient. In ac et in congue.”
                  </p>
                  <p className=" mt-4">
                    {" "}
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      color2={"#ffd700"}
                    />
                  </p>
                  <p className=" 2xl:text-[27px] md:text-[20px] text-[12px] font-medium mt-6">
                    Name Surname
                  </p>
                  <p className=" text-[#F3F4F8] 2xl:text-[18px] md:text-[14px] text-[10px] font-normal">
                    Position, Company name
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" md:flex block items-center justify-between  mt-12 ">
              <img className=" 2xl:w-[1455px] w-[333px]" src={main} alt="" />
              <div className=" text-white">
                <div className="bac 2xl:py-24 py-12 md:px-12 px-4">
                  <p className=" md:text-[24px] 2xl:text-[32px] text-[16px] font-semibold">
                    “Amet risus eget at hendrerit erat nibh. Semper nec ornare
                    pretium neque ut tortor tincidunt hendrerit accumsan.
                    Pulvinar vel sit sed massa morbi. Ac dolor orci facilisis
                    parturient. In ac et in congue.”
                  </p>
                  <p className=" mt-4">
                    {" "}
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      color2={"#ffd700"}
                    />
                  </p>
                  <p className=" 2xl:text-[27px] md:text-[20px] text-[12px] font-medium mt-6">
                    Name Surname
                  </p>
                  <p className=" text-[#F3F4F8] 2xl:text-[18px] md:text-[14px] text-[10px] font-normal">
                    Position, Company name
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </div>
  );
};

export default Clients;
