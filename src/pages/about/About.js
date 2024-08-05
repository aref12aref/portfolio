import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./aboutStyle.css";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import "../../globalCss/media.css";
import { useContext } from "react";
import { Mode } from "../../context/modeContext";

export default function About() {
  const mode = useContext(Mode);
  const isBlack = mode.isBlack;

  return (
    <section className="about-container">
      <h2 className="about-title">About Me</h2>
      {/* summary */}
      <div className="about-cont1">
        <h3 className={isBlack ? "about-sec Wfc" : "about-sec Bfc"}>
          <FontAwesomeIcon
            icon={faCircleInfo}
            style={{ marginRight: "15px" }}
          />
          Summary:
        </h3>
        <p
          className={isBlack ? "BGfc" : "WGfc"}
          style={{
            transition: "0.5s",
          }}
        >
          I have gained foundational knowledge in programming through a variety
          of courses and resources. These include reputable references such as
          W3Schools, Nouvil Academy, Tarmeez Academy, Elzero Web School,
          SoloLearn, and even Harvard University.
        </p>
        <p
          className={isBlack ? "BGfc" : "WGfc"}
          style={{
            transition: "0.5s",
          }}
        >
          I have been actively developing my skills in front-end web
          development. I am proficient in HTML, CSS, JavaScript, Bootstrap, and
          React.js, which I have utilized to create several personal projects,
          including an e-commerce platform, an electronic store, and a personal
          portfolio.
        </p>
        <p
          className={isBlack ? "BGfc" : "WGfc"}
          style={{
            transition: "0.5s",
          }}
        >
          My key strengths lie in problem-solving, logical thinking, and
          teamwork, all of which are essential in the tech field. I have a
          strong passion for web development and programming, and I aspire to
          become a full-stack web developer in the future
        </p>
      </div>

      {/* personal infs */}
      <br />
      <div className="about-cont">
        <h3 className={isBlack ? "about-sec Wfc" : "about-sec Bfc"}>
          <FontAwesomeIcon
            icon={faCircleInfo}
            style={{ marginRight: "15px" }}
          />
          Personal Information:
        </h3>
        <p
          className={isBlack ? "BGfc" : "WGfc"}
          style={{
            transition: "0.5s",
          }}
        >
          👋 Hey there, Iam Aref Alkadi.
        </p>
        <p
          className={isBlack ? "BGfc" : "WGfc"}
          style={{
            transition: "0.5s",
          }}
        >
          Iam from syria and Iam 20 years old.
        </p>
      </div>

      {/* education */}
      <br />
      <div className="about-cont">
        <h3 className={isBlack ? "about-sec Wfc" : "about-sec Bfc"}>
          <FontAwesomeIcon
            icon={faCircleInfo}
            style={{ marginRight: "15px" }}
          />
          Education:
        </h3>
        <p
          className={isBlack ? "BGfc" : "WGfc"}
          style={{
            transition: "0.5s",
          }}
        >
          👨‍💻 Iam studying IT at Al-Jazeerah Private University.
        </p>
        <p
          className={isBlack ? "BGfc" : "WGfc"}
          style={{
            transition: "0.5s",
          }}
        >
          💡 I have a keen interest in front-end development using react js.
        </p>
      </div>
    </section>
  );
}
