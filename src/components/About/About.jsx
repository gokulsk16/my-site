import React from "react";
import "./About.css";
import profile01 from "../../assets/profile01.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile01} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
            I am a passionate Frontend Developer starting my career. With a solid foundation in web development and design, I am excited to work on creative projects and collaborate with great teams. I am eager to learn, grow, and contribute my skills to achieve success.
            </p>
            <p>
            My passion for frontend development shows in my eagerness and dedication to every project I work on.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p> HTML & CSS </p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p> JavaScript </p><hr style={{width:"60%"}}/></div>
            <div className="about-skill"><p> ReactJS </p><hr style={{width:"70%"}}/></div>
            <div className="about-skill"><p> Bootstrap </p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p> Git & GitHub </p><hr style={{width:"60%"}}/></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
