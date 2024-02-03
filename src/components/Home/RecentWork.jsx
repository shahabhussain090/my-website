import React from "react";
import { recentData } from "../Data/data";
import arrow from "../../assets/svg/Arrow.svg";
import { Link } from "react-router-dom";
const RecentWork = () => {
  return (
    <div className="mt-32 md:mx-24 mx-4">
      <h1 className="text-[40px] font-bold text-center">Recent Work</h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 mt-12">
        {recentData.map((item) => (
          <div
            key={item.title}
            className="bg-[#FBFBFB] rounded-md border-[#F3F4F8] border-[2px]  "
          >
            <div className="overflow-hidden">
              <img
                className="w-[304px] h-[290px] object-contain hover:scale-[1.1] transition-all ease-in-out mx-auto duration-300"
                src={item.imgUer}
                alt=""
              />
            </div>
            <div className="bg-[#F3F4F8]  py-7 px-6 flex flex-col gap-2 rounded-md">
              <h1 className="text-[24px] font-semibold ">
                {item.title}
                <span className="text-[14px] font-medium">{item.desc1}</span>
              </h1>
              <p className="text-[#777986] text-[14px] font-normal">
                {item.desc}
              </p>
              <div className="flex items-center gap-1 mt-4">
                <button className="text-[#14A2F1] text-[20px] font-medium">
                  {item.btn}
                </button>
                <img src={arrow} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center ">
        <Link
          to="/recent"
          className="bg-[#14A2F1] text-white mt-14 py-3 px-7 hover:bg-[#4889ac]"
        >
          View More Case Studies
        </Link>
      </div>
    </div>
  );
};

export default RecentWork;
