import React, { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import LandingPage from "./Pages/Home/LandingPage";
import Project from "./Pages/Project/Project";
import SingleProject from "./Pages/SingleProject/SingleProject";
import FormDisplay from "./Pages/form/FormDisplay";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const location = useLocation();
  return (
    <div data-scroll-container>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/project" element={<Project />} />
          <Route path="/admin/login" element={<FormDisplay />} />
          <Route path="/project/:id" element={<SingleProject />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

const ScrollToTop = ({ scroll }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.LocomotiveScroll) {
      window.LocomotiveScroll.scrollTo(0);
    }
    return () => {};
  }, [pathname]);

  return null;
};

const RootApp = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });
    window.LocomotiveScroll = scroll;
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <ToastContainer />
      <ScrollToTop />
      <App />
    </BrowserRouter>
  );
};

export default RootApp;
