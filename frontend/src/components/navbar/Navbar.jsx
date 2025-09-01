import { useEffect, useState } from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import { navbar } from "../../data";
import { IoMdMenu } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import { FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Logo from "../../assets/rahul-logo.png";
import Logo2 from "../../assets/logo2.png";

const Navbar = () => {
  const { pathname = "/" } = useLocation();
  const [active, setActive] = useState(false);
  const [currentPath, setCurrentPath] = useState(pathname);
  const [scrolled, setScrolled] = useState(false);

  const menuIcon = () => {
    setActive(!active);
  };

  const handleScroll = () => {
    setActive(false);
    const isScrolled = window.scrollY > 50;
    setScrolled(isScrolled);
  };

  const handleLinkClick = () => {
    setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setCurrentPath(pathname);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const navItems = [
    { item: "Home", path: "/", icon: <FaHome /> },
    { item: "About", path: "/about", icon: <FaUser /> },
    { item: "Skills", path: "/skills", icon: <FaCode /> },
    { item: "Projects", path: "/project", icon: <FaBriefcase /> },
    { item: "Contact", path: "/contact", icon: <FaEnvelope /> },
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FaTwitter />, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <Link to={"/"} className="logo">
          <div className="image-container">
            <div className="image front">
              <img src={Logo} alt="Rahul Jangir" />
            </div>
            <div className="image back">
              <img src={Logo2} alt="Rahul Jangir" />
            </div>
          </div>
          <span className="logo-text">Rahul Jangir</span>
        </Link>

        <div className="menu-toggle" onClick={menuIcon}>
          <div className={`hamburger ${active ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <nav className={`navbar ${active ? "active" : ""}`}>
          <div className="nav-links">
            {navItems.map(({ item, path, icon }, idx) => {
              return (
                <Link
                  key={idx}
                  to={path}
                  className={`nav-link ${currentPath === path ? "active" : ""}`}
                  onClick={handleLinkClick}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <span className="nav-icon">{icon}</span>
                  <span className="nav-text">{item}</span>
                  <div className="nav-underline"></div>
                </Link>
              );
            })}
          </div>

          <div className="nav-social">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.label}
                style={{ animationDelay: `${(idx + navItems.length) * 0.1}s` }}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="nav-cta">
            <Link to="/contact" className="cta-button" onClick={handleLinkClick}>
              <span>Get In Touch</span>
              <div className="cta-glow"></div>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-overlay ${active ? 'active' : ''}`} onClick={menuIcon}></div>
      </header>
    </>
  );
};

export default Navbar;
