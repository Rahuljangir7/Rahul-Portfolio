import React from "react";
import "./services.css";
import ServicesBox from "./ServicesBox";
import { service } from "../../data";

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="heading">
        My <span>Services</span>
      </h2>
      <div className="services-container">
        {service.map(({ title, desc, button, Link }, idx) => {
          return (
            <ServicesBox
              key={idx}
              title={title}
              desc={desc}
              btn={button}
              link={Link}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Services;
