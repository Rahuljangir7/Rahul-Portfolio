import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-text">
          <p>Copyright &copy; 2024 by @rahul_jangir | All Rights Reserved.</p>
        </div>

        <div className="footer-iconTop">
          <a href="#">
            <i className="fa-solid fa-angle-up"></i>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
