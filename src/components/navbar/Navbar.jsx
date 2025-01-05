import { useEffect, useState } from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import { navbar } from "../../data";
import { IoMdMenu } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import Logo from "../../assets/rahul-logo.png";
import Logo2 from "../../assets/logo2.png";

const Navbar = () => {
  const { pathname = "/" } = useLocation();
  const [active, setActive] = useState(false);
  const [currentPath, setCurrentPath] = useState(pathname);

  const menuIcon = () => {
    setActive(!active);
  };

  const handleScroll = () => {
    setActive(false);
  };

  const handleLinkClick = () => {
    setActive(false); // Optionally close the menu on link click
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setCurrentPath(pathname);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]); // Removed the extra comma

  return (
    <>
      <header className="header">
        <Link to={"/"} className="logo">
          <div className="image-container">
            <div className="image front">
              <img src={Logo} alt="Rahul Jangir" />
            </div>
            <div className="image back">
              <img src={Logo2} alt="Rahul Jangir" />
            </div>
          </div>
        </Link>

        <i id="menu-icon" onClick={menuIcon}>
          {active ? <FaXmark /> : <IoMdMenu />}{" "}
        </i>

        <nav className={active ? "navbar active" : "navbar"}>
          {navbar.map(({ item, path }, idx) => {
            return (
              <Link
                key={idx}
                to={path}
                className={currentPath === path ? "me mww" : "mww"}
                onClick={handleLinkClick}
              >
                {item}
              </Link>
            );
          })}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
