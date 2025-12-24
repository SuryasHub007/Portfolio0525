import React from "react";
import "./Skills.css";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiFirebase } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "React Native", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "SQL", icon: <FaDatabase /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Figma", icon: <FaFigma /> },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">My Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
