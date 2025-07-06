import React from "react";
import Hero from "../components/block/home/Hero";
import Security from "../components/block/home/Security";
import Savings from "../components/block/home/Savings";
import Diverse from "../components/block/home/Diverse";
import Saver from "../components/block/home/saver";
import Stories from "../components/block/home/Stories";



const Home = () => {
  return (
    <div>
      <Hero />
      <Security />
      <Savings />
      <Diverse />
      <Saver />
      <Stories />
    </div>
  );
};

export default Home;