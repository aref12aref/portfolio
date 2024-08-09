import "./skillsStyle.css";
import { techSkills } from "./skillsData.js";
import "../../globalCss/media.css";
import "../../globalCss/mode.css";
import { useContext } from "react";
import { Mode } from "../../context/modeContext.js";

export default function Skills() {
  const mode = useContext(Mode);
  const isBlack = mode.isBlack;

  const showTechSkills = techSkills.map((item, index) => {
    return (
      <div className="tech-skill-item" key={index}>
        <img
          src={item.image}
          alt={item.name}
          title={item.name}
          className="technical-img"
        />
        <p className={isBlack ? "BGfc" : "WGfc"}>{item.name}</p>
      </div>
    );
  });

  return (
    <section className="skill-container">
      <h2 className="skill-title">Skills</h2>
      <div className="skills">
        <div className="technical-skills">
          <h3 style={{ fontSize: "24px" }} className={isBlack ? "Wfc" : "Bfc"}>
            Technical Skills
          </h3>
          <div className="technical-skills-imgs">
            <div className="slide-track">
              {showTechSkills}
              {showTechSkills}
            </div>
          </div>
        </div>

        <div className="soft-skills">
          <h3 style={{ fontSize: "24px" }} className={isBlack ? "Wfc" : "Bfc"}>
            Soft Skills
          </h3>
          <div className="soft-skills-text">
            <ul>
              <li className={isBlack ? "BGfc" : "WGfc"}>High Learnability</li>
              <br />
              <li className={isBlack ? "BGfc" : "WGfc"}>
                Attention to details
              </li>
              <br />
              <li className={isBlack ? "BGfc" : "WGfc"}>flexibility</li>
            </ul>
            <ul>
              <li className={isBlack ? "BGfc" : "WGfc"}>problem solving</li>
              <br />
              <li className={isBlack ? "BGfc" : "WGfc"}>time managment</li>
              <br />
              <li className={isBlack ? "BGfc" : "WGfc"}>team working</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
