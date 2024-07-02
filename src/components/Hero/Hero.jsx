import React from "react";
import "./Hero.css";
import profilepics from "../../assets/profilepics.svg";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  const click=()=>{
    const link="https://drive.google.com/file/d/1zjV17hWXQll5ww6NCZ7TpRRpWDmLb-1l/view?usp=drivesdk";
    window.open(link,'_blank');
  }
  return (
    <div id="home" className="Hero">
      <img src={profilepics} alt="" className="profile-img"/>
      <h1><span>I'm Gokulakrishnan,</span>frontend Developer.</h1>
      <p>
        Passionate Front-End Developer Skilled in creating responsive, User-friendly
        web <br />interfaces and translating design into highquality code.
      </p>
      <div className="hero-action">
        <div className="hero-contact"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
        <div className="hero-resume" onClick={click}>My resume</div>
      </div>
    </div>
  );
};

export default Hero;
