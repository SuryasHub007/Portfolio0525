import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import "./Header.css";

const Header = () => {
  return (
    <header className="hero">
      <div className="hero-container center">

        <h1 className="hero-name">
          Surya <span>Sankar</span> Paramasivam
        </h1>

        <h2 className="hero-role">
          <Typewriter
            words={[
              "Full Stack Developer",
              "Web Developer",
              "App Developer",
              "Photographer",
              "Figma Designer"
            ]}
            loop={0}           // infinite loop
            cursor
            cursorStyle="<"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <p className="hero-desc">
          I’m Surya Sankar, actively looking for opportunities where I can leverage my existing skills while continuously learning new technologies. I’m eager to work on challenging projects, collaborate with a dynamic team, and create meaningful impact through my work.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn primary">Hire Me</a>
          <a href="#projects" className="btn outline">View Projects</a>
        </div>

        <div className="hero-social">
          <a href="https://github.com/SuryasHub007" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/surya-sankar-paramasivam-85a8a5254/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
        </div>

      </div>
    </header>
  );
};

export default Header;
