import { useEffect, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { navbar } from "../../data";
import { IoMdMenu } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";
import Logo from "../../utility/logo/Logo";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");

  const menuIcon = () => {
    setActive(!active);
  };

  const handleScroll = () => {
    setActive(false);
  };
  
  const handleLinkClick = (path) => {
    setCurrentPath(path); // Update current path
    setActive(false); // Optionally close the menu on link click
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="header">
        <Link to={"/"} className="logo">
          <Logo />
          {/* Portfolio */}
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
                onClick={() => handleLinkClick(path)}
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
