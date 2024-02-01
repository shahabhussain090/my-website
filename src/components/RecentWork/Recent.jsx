import React from "react";
import { ScrollRestoration } from "react-router-dom";

const Recent = () => {
  return <div className="back2">
    <ScrollRestoration />
    <div className=" flex items-center justify-center">
    <h1 className=" text-[40px] font-bold text-white mt-48">Recent Work</h1>
    </div>
  </div>;
};

export default Recent;
