import { experiencesData } from "./experiencesData";
import "./experienceStyle.css";
import "../../globalCss/media.css";
import "../../globalCss/mode.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import { Mode } from "../../context/modeContext.js";

export default function Experience() {
  const mode = useContext(Mode);
  const isBlack = mode.isBlack;

  const showExperiences = experiencesData.map((item, index) => {
    return (
      <div
        key={index}
        className={experiencesData.length > 1 ? "exp-cont2" : "exp-cont"}
      >
        <h3 className={isBlack ? "Wfc" : "Bfc"}>
          <FontAwesomeIcon icon={faHandPointRight} /> {item.company}:
          <sub className={isBlack ? "exp-time BGfc" : "exp-time WGfc"}>
            ({item.startDate} - {item.endDate})
          </sub>
        </h3>
        <p className={isBlack ? "Wfc" : "Bfc"}>{item.position} </p>
        <p className={isBlack ? "Wfc" : "Bfc"}>{item.type}</p>
      </div>
    );
  });

  return (
    <section className="exp-container">
      <h2 className="exp-title">Expercience</h2>
      {showExperiences}
    </section>
  );
}
