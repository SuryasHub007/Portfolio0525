// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import profileImg from "../assets/ss.jpg";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* Left Side Image */}
        <motion.img
          src={profileImg}
          alt="Surya Sankar"
          className="about-image"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        />

        {/* Right Side Text */}
        <motion.div
          className="about-text"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="about-title">
            About <span>Me</span>
          </h2>

          <p className="about-para">
            I'm <span className="highlight-white">Surya Sankar</span>, a passionate{" "}
            <span className="highlight-blue">
              Full Stack & React Native Developer
            </span>.
            I build clean, responsive and high-performing web & mobile apps using
            modern technologies like React, React Native, Node.js, SQL, and Firebase.
          </p>

          <p className="about-para">
            My focus is on creating products that are fast, scalable, and
            user-friendly with pixel-perfect UI.
          </p>

          <a href="#contact" className="contact-btn">
            Contact Me
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
