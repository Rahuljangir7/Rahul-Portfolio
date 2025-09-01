import { BrowserRouter, Route, Routes, RouterProvider } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Main from "./pages/Main";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/Services";
import Projects from "./pages/Projects";
import MyContact from "./pages/MyContact";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/about"} element={<AboutPage />} />
        <Route path={"/skills"} element={<AboutPage />} />
        <Route path={"/services"} element={<ServicesPage />} />
        <Route path={"/project"} element={<Projects />} />
        <Route path={"/contact"} element={<MyContact />} />
      </Routes>
      <Contact />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
