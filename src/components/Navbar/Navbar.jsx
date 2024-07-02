import React, {useState,useRef} from "react";
import "./Navbar.css";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const menuRef=useRef();
  const openMenu=()=>{
    menuRef.current.style.right="0";
  }
  const closeMenu=()=>{
    menuRef.current.style.right="-350px";
  }
  return (
    <div className="Navbar">
      <h1><span>Portfolio</span></h1>
      <img src={menu_open} alt=""  className="nav-open-mob" onClick={openMenu}/>
      <ul ref={menuRef} className="Navbar-menu">
        <img src={menu_close} alt="" className="nav-close-mob" onClick={closeMenu}/>
        <AnchorLink className="anchor-link" href="home"><li>Home</li></AnchorLink>
        <AnchorLink className="anchor-link" offset={50} href="#about"><li>About Me</li></AnchorLink>
        <AnchorLink className="anchor-link" offset={50} href="#certificate"><li>Certificates</li></AnchorLink>
        <AnchorLink className="anchor-link" offset={50} href="#project"><li>Projects</li></AnchorLink>
        <AnchorLink className="anchor-link" offset={50} href="#contact"><li>Contact</li></AnchorLink>
      </ul>
      <div className="nav-contact">
      <AnchorLink className="anchor-link" offset={50} href="#contact">Connect with Me</AnchorLink></div>
    </div>
  );
};

export default Navbar;
