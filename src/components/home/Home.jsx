import React from "react";
import "./home.css";
import { home } from "../../data";
import homeImg from "../../assets/profile-pic.png";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        {home.map((item, idx) => {
          return (
            <React.Fragment key={idx}>
              <h3>{item.intro}</h3>
              <h1>{item.name}</h1>
              <h3>
                {item.subTitle} <span>{item.title}</span>
              </h3>
              <p>{item.desc} </p>
            </React.Fragment>
          );
        })}

        <div className="social-media">
          <a href="https://www.linkedin.com/in/rahul-jangir-b38127309/">
            <FaLinkedinIn />
          </a>

          <a href="https://github.com/Rahuljangir7" target="_blank">
            <FaGithub />
          </a>

          <a
            href="https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-homepage"
            target="_blank"
          >
            <SiIndeed />
          </a>
          <Link to={"/"}>
            <FaXTwitter />
          </Link>
        </div>

        <a
          href="https://drive.google.com/file/d/1xAZZUe1FIzd9gkiWcFW9xU5vksXH_ujP/view?usp=sharing"
          target="_blank"
          className="btn"
        >
          Download CV
        </a>
      </div>
      <div className="home-img">
        <img src={homeImg} alt="" />
      </div>
    </section>
  );
};

export default Home;
