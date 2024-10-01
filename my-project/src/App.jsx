import React from "react";
import LandingPage from "./Pages/Home/LandingPage";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div>
      <LandingPage />
    </div>
  );
};

export default App;
