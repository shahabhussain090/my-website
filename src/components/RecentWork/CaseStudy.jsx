import React from "react";
import { recent } from "../Data/data";
import arrow from '../../assets/svg/Arrow right.svg'
const CaseStudy = () => {
  return (
    <div>
      {recent.map((item) => (
        <div
          key={item.id}
          className={` ${
            item.bgColor === "img1"
              ? "bg-[#FBFBF4]"
              : item.bgColor === "img2"
              ? "bg-[#FEF6F2]"
              : item.bgColor === "img3"
              ? "bg-[#F6F6F6]"
              : item.bgColor === "img4"
              ? "bg-[#F2FCFF]"
              : item.bgColor === "img5"
              ? "bg-[#FFF9EF]"
              : item.bgColor === "img6"
              ? "bg-[#F4F8FF]"
              : ""
          } md:flex block items-center rounded-[20px] justify-between  md:mx-24 2xl:mx-32 pt-12  mx-4  mt-24`}
        >
          <div className="flex flex-col gap-3 px-5  ">
            <img className="w-[444px]" src={item.logo} alt="" />
            <p className="text-[12px] 2xl:text-[22px] font-[400] text-[#7B848B]">
              {item.desc1}
            </p>
            <p className="text-[#353A3E] 2xl:text-[27px] text-[14px] font-normal">
              {item.desc}
            </p>
            <div className=" flex items-center gap-2 text-[20px] font-medium mt-5">
              <button>{item.btn}</button>
              <img src={arrow} alt="" />
            </div>
          </div>
          <img
            className="md:w-[444px] 2xl:w-[555px] rounded-[20px] mt-20 "
            src={item.imgUrl}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default CaseStudy;
