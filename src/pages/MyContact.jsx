import React from "react";
import myPhoto from "../assets/profile-pic.png";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import ContactSvg from "../utility/svg/ContactSvg";

const MyContact = () => {
  return (
    <section className="my-contact_page">
      <div className="contact-me">
        <div className="contact-img">
          <img src={myPhoto} alt="my photo" />
        </div>
        <div className="contact-info">
          <h2>Connect Me</h2>
          <p>
            I am readily available to work on your next project. Let's connect.
          </p>
          <div className="contact-links">
            <a href="#">
              <BiLogoGmail
                style={{
                  backgroundColor: "rgb(209, 72, 54)",
                }}
              />
            </a>
            <a href="#">
              <FaLinkedinIn
                style={{
                  backgroundColor: "rgb(0, 119, 181)",
                }}
              />
            </a>
            <a href="#">
              <FaGithub
                style={{
                  backgroundColor: "rgb(24, 23, 23)",
                  border: "1px solid #5858589e",
                }}
              />
            </a>
            <a href="#">
              <FaInstagram
                style={{
                  backgroundColor: "rgb(228, 64, 95)",
                }}
              />
            </a>
            <a href="#">
              <FaFacebookF
                style={{
                  backgroundColor: "rgb(29, 161, 242)",
                }}
              />
            </a>
            <a href="#">
              <FaYoutube
                style={{
                  backgroundColor: "rgb(228, 64, 95)",
                }}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="address-container">
        <div className="address-heading-text-div">
          <h2 className="address-heading-text">Address</h2>
          <p className="contact-header-detail-text">
            Dishnau, Sikar, State-Rajasthan, India. &#10629; Available Remotely
            and Ready to Relocate &#10630;
          </p>
          <h4 className="address-heading-text">Mobile Number</h4>
          <p className="contact-header-detail-text">+91 9950108143</p>
        </div>
        <div className="contact-heading-img-div">
          <ContactSvg />
        </div>
      </div>
    </section>
  );
};

export default MyContact;