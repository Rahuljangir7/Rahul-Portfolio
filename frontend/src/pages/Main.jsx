import React from "react";
import Home from "../components/home/Home";
import Project from "../components/project/Project";
import Services from "../components/services/Services";
import About from "../components/about/About";

const Main = () => {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Project />
    </>
  );
};

export default Main;
