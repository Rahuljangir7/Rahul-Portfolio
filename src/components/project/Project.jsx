import React from "react";
import "./project.css";
import { project } from "../../data";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Button from "../../utility/button/Button";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <section className="portfolio" id="project">
      <h2 className="heading">
        Latest <span>Projects</span>
      </h2>
      <div className="portfolio-container">
        {project.map((item, idx) => {
          return (
            <div className="portfolio-box" key={idx}>
              <img src={item.image} alt="" />
              <div className="portfolio-layer">
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
      <Link to={"/project"} className="portfolio-more-link">
        <Button button={`Read more`} />
      </Link>
    </section>
  );
};

export default Project;
