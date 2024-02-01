import React from "react";
import Hero from "../components/Home/Hero";
import AboutUs from "../components/Home/AboutUs";
import Services from "../components/Home/Services";
import Technologies from "../components/Home/Technologies";
import RecentWork from "../components/Home/RecentWork";
import Industries from "../components/Home/Industries";
import Clients from "../components/Home/Clients";
import Contact from "../components/Home/Contact";

const Home = () => {
  return (
    <div className=" relative top-32">
      <Hero />
      <AboutUs />
      <Services />
      <Technologies />
      <RecentWork />
      <Industries />
      <Clients />
      <Contact />
    </div>
  );
};

export default Home;
