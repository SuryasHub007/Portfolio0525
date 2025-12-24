import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Technoseyali Software Website",
    tech: "React, Tailwind CSS",
    img: "https://www.technoseyali.com/assets/logo-Cx4LcQSR.png",
    link: "https://www.technoseyali.com/",
    description:
      "Official company website developed for Technoseyali Software Private Limited, Trichy with modern UI and responsive design.",
  },
  {
    title: "Gold App – Live Rate",
    tech: "React Native, Live API",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_eKVCTS2K7-F-douX0m7a3XYgqC0VcWnQNA&s",
    link: "#",
    description:
      "Live gold rate application developed for Sivashanmuga Group with real-time price updates.",
  },
  {
    title: "Bookkeeping Website",
    tech: "React, Firebase",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqnFOD87K11cyIvWh7O4q76C3hUGUwUQBjWg&s",
    link: "#",
    description:
      "Dynamic bookkeeping web application for managing income, expenses, and reports for Dynamic Books.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>

      <div className="projects-grid">
        {projects.map((p, index) => (
          <div className="project-card" key={index}>
            <img src={p.img} alt={p.title} className="project-image" />

            <h3 className="project-title">{p.title}</h3>
            <p className="project-tech">{p.tech}</p>

            <p className="project-desc">{p.description}</p>

            <a
              href={p.link}
              className="project-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
