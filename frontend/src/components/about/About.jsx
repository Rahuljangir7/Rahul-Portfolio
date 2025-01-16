import React from "react";
import "./about.css";
import { aboutData, aboutImage } from "../../data";
import Button from "../../utility/button/Button";

const About = () => {
  return (
    <section className="about" id="about">
      {aboutImage.map((item, idx) => {
        return (
          <div className="about-img" key={idx}>
            <img src={item.image} alt="" />
          </div>
        );
      })}

      <div className="about-content">
        {aboutData.map((item, idx) => {
          return (
            <React.Fragment key={idx}>
              <h2 className="heading">
                {item.heading} <span>{item.subHeading}</span>
              </h2>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <a href="#">
                <Button button={item.button} />
              </a>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default About;
