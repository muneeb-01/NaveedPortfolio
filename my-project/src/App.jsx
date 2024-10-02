import React from "react";
import LandingPage from "./Pages/Home/LandingPage";
import LocomotiveScroll from "locomotive-scroll";
import Project from "./Pages/Project/Project";
import SingleProject from "./Pages/SingleProject/SingleProject";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/:id" element={<SingleProject />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
