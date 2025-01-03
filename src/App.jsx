import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Main from "./pages/Main";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/project"} element={<Projects />} />
      </Routes>
      <Contact />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
