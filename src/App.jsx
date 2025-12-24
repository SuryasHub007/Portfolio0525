// src/App.jsx
import React, { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills"; // Make sure file is Skills.jsx
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    document.body.classList.toggle("light");
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <button onClick={toggleTheme} className="theme-btn">
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>

      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
