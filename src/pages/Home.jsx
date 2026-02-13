import React from "react";
import Hero from "../component/Hero";
import TrackShipment from "../component/TrackShipment";
import About from "./About";
import Industry from "../component/Industry";
import ChooseUs from "../component/ChooseUs";
import WorkProcess from "../component/WorkProcess";

const Home = () => {
  return (
    <div>
      <Hero />
      <TrackShipment />
      <About />
      <WorkProcess />
      <ChooseUs />
      <Industry />
    </div>
  );
};

export default Home;
