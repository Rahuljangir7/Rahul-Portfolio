import React from "react";
import "./project.css";
import { project } from "../../data";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Project = () => {
  return (
    <>
      <section class="portfolio" id="project">
        <h2 class="heading">
          Latest <span>Projects</span>
        </h2>
        <div class="portfolio-container">
          {project.map((item) => {
            return (
              <div class="portfolio-box">
                <img src={item.image} alt="" />
                <div class="portfolio-layer">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                  <a
                    href={item.linkName}
                    target={item.linkName !== "#" ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                  >
                    <i>
                      <FaArrowUpRightFromSquare />
                    </i>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Project;
