import {useEffect, useState} from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { navbar } from '../../data'
import { IoMdMenu } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import { v4 as uuidv4 } from 'uuid';


  const Navbar = () => {
    const [active, setActive] =useState(false)
    const [isScrolled, setIsScrolled] = useState(false);
    const [currentPath, setCurrentPath] = useState('/'); 

   const menuIcon = ()=>{
      setActive(!active)
    }

    const handleScroll = () => {
            setIsScrolled(true);
            setActive(false);
        
    };
    const handleLinkClick = (path) => {
      setCurrentPath(path); // Update current path
      setActive(false); // Optionally close the menu on link click
  };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
   

  return (
    <>
    <header className="header">
      <a href="#" className="logo">Portfolio</a>
     
      <i id='menu-icon' onClick={menuIcon} > {active ? <FaXmark /> : <IoMdMenu />} </i>
     

                            
                            
      <nav className={active ? "navbar active" : "navbar"} key={uuidv4()}>
        {
          navbar.map(({item,path})=>{
            return(
              <>
              
              <a href={path}className={currentPath === path ? "me mww" : "mww"} onClick={() => handleLinkClick(path)}>{item}</a>
              
        </>
            )
          })
        }
      </nav>
                        
    </header> 
    </>
  )
}

export default Navbar