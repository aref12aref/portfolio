import { useRef, useState } from "react";
import { data } from "./projectData";
import "./projectsStyle.css";
import { useContext } from "react";
import { Mode } from "../../context/modeContext.js";

export default function Projects() {
  const [noFilter, setNoFilter] = useState(data);
  const [simpleFilter, setSimpleFilter] = useState([]);
  const [advancedFilter, setAdvancedFilter] = useState([]);
  const [reactFilter, setReactFilter] = useState([]);
  const buttons = useRef([]);

  const mode = useContext(Mode);
  const isBlack = mode.isBlack;

  function allProjects() {
    setNoFilter(data);
    setSimpleFilter([]);
    setAdvancedFilter([]);
    setReactFilter([]);
    for (let i = 0; i < 4; i++) {
      if (i !== 0) {
        buttons.current[i].className = "project-link";
      } else {
        buttons.current[i].className = "project-link activep";
      }
    }
  }
  function filterSimples() {
    const help = data.filter((item) => item.projectTools === "html, css");
    setSimpleFilter(help);
    setNoFilter([]);
    setAdvancedFilter([]);
    setReactFilter([]);
    for (let i = 0; i < 4; i++) {
      if (i !== 1) {
        buttons.current[i].className = "project-link";
      } else {
        buttons.current[i].className = "project-link activep";
      }
    }
  }
  function filterAdvanced() {
    const help = data.filter((item) => item.projectTools === "html, css, js");
    setAdvancedFilter(help);
    setNoFilter([]);
    setSimpleFilter([]);
    setReactFilter([]);
    for (let i = 0; i < 4; i++) {
      if (i !== 2) {
        buttons.current[i].className = "project-link";
      } else {
        buttons.current[i].className = "project-link activep";
      }
    }
  }
  function filterReact() {
    const help = data.filter((item) => item.projectTools.includes("react"));
    setReactFilter(help);
    setNoFilter([]);
    setAdvancedFilter([]);
    setSimpleFilter([]);
    for (let i = 0; i < 4; i++) {
      if (i !== 3) {
        buttons.current[i].className = "project-link";
      } else {
        buttons.current[i].className = "project-link activep";
      }
    }
  }

  const projectsFilterShow =
    simpleFilter.length > 0
      ? simpleFilter
      : advancedFilter.length > 0
      ? advancedFilter
      : reactFilter.length > 0
      ? reactFilter
      : noFilter;

  const showProjects = projectsFilterShow.map((item, index) => {
    return (
      <div className="project" key={index}>
        <div className="project-frame">
          <a
            href={item.projectLink}
            className="project-visit-link"
            rel="noreferrer"
            target="_blank"
          >
            <button className="project-visit-button">visit website</button>
          </a>
          <iframe
            className="project-photo"
            src={item.projectLink}
            title={item.projectTitle}
            scrolling="no"
          />
        </div>
        <div className="project-content">
          <h3 className="project-title">{item.projectTitle}</h3>
          <p className={isBlack ? "BGfc" : "WGfc"}>{item.projectDescription}</p>
          <p className={isBlack ? "BGfc" : "WGfc"}>{item.projectTools}</p>
        </div>
      </div>
    );
  });

  return (
    <section className="project-main">
      <h2 className="project-main-title">Projects</h2>
      <div className="project-tead">
        <div
          className={
            isBlack ? "project-sidebar BGbgc" : "project-sidebar WGbgc"
          }
        >
          <h5
            className={
              isBlack
                ? "project-sidebar-title Wfc"
                : "project-sidebar-title Bfc"
            }
          >
            filters
          </h5>
          <button
            onClick={allProjects}
            ref={(e) => (buttons.current[0] = e)}
            className={isBlack ? "project-link Wfc" : "project-link Bfc"}
          >
            All Projects
          </button>
          <button
            onClick={filterSimples}
            ref={(e) => (buttons.current[1] = e)}
            className={isBlack ? "project-link Wfc" : "project-link Bfc"}
          >
            only html & css
          </button>
          <button
            onClick={filterAdvanced}
            ref={(e) => (buttons.current[2] = e)}
            className={isBlack ? "project-link Wfc" : "project-link Bfc"}
          >
            only html & css & js
          </button>
          <button
            onClick={filterReact}
            ref={(e) => (buttons.current[3] = e)}
            className={isBlack ? "project-link Wfc" : "project-link Bfc"}
          >
            only react
          </button>
        </div>
        <div className="projects-container">{showProjects}</div>
      </div>
    </section>
  );
}
