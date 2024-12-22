import React from "react";
import "./about.css";
import { v4 as uuidv4 } from 'uuid';
import { aboutData, aboutImage } from "../../data";
import Button from "../../utility/button/Button";

const About = () => {
  return (
    <>
      <section class="about" id="about" key={uuidv4()}>
          {aboutImage.map((item) => {
            return (
              <>
              <div class="about-img">
                <img src={item.image} alt="" />
        </div>
              </>
            );
          })}

        <div class="about-content">
          {aboutData.map((item) => {
            return (
              <>
                <h2 class="heading">
                  {item.heading} <span>{item.subHeading}</span>{" "}
                </h2>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <a href="#">
                  {" "}
                  <Button button={item.button} />{" "}
                </a>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default About;
