import React from "react";
import "./services.css";
import Button from "../../utility/button/Button";

const ServicesBox = ({ title, desc, btn, link }) => {
  return (
    <>
      <div className="services-box">
        <i className="fa-solid fa-code"></i>
        <h3>{title}</h3>
        <p>{desc}</p>
        <a href={link}>
          <Button button={btn} />
        </a>
      </div>
    </>
  );
};

export default ServicesBox;
