import Home from "./pages/home/Home.js";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about/About.js";
import Projects from "./pages/projects/Projects.js";
import Contact from "./pages/contact/Contact.js";
import Skills from "./pages/skills/Skills.js";
import Experience from "./pages/experience/Experience.js";
import { Mode } from "./context/modeContext.js";
import { useContext } from "react";
import "./globalCss/media.css";
import "./globalCss/mode.css";

export default function App() {
  const mode = useContext(Mode);
  const isBlack = mode.isBlack;

  return (
    <div
      style={{ minHeight: "100vh", transition: "0.5s" }}
      className={isBlack ? "Bbgc" : "Wbcg"}
    >
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="experience" element={<Experience />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}
