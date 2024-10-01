import React from "react";
import Home from "./Pages/Hero/home";
import VideoContainer from "./Pages/VideoContainer/VideoContainer";
import Services from "./Pages/Services/Secvices";
import Stack from "./Pages/Stack/Stack";
import Footer from "./Pages/Footer/Footer";
const LandingPage = () => {
  return (
    <>
      <Home />
      <VideoContainer />
      <Stack />
      <Services />
      <Footer />
    </>
  );
};

export default LandingPage;
