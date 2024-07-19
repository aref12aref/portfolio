import "./skillsStyle.css";
import htmlImg from "./personalFiles/html.png";
import cssImg from "./personalFiles/css.png";
import jsImg from "./personalFiles/js.png";
import reactImg from "./personalFiles/react.png";
import bootstrapImg from "./personalFiles/bootstrap.png";

export default function Skills() {
  return (
    <section className="skill-container">
      <h2 className="skill-title">Skills</h2>
      <div className="skills">
        <div className="technical-skills">
          <h3 style={{ fontSize: "24px" }}>Technical Skills</h3>
          <div className="technical-skills-imgs">
            <img
              src={htmlImg}
              alt="html5"
              title="html5"
              className="technical-img"
            />
            <img
              src={cssImg}
              alt="css3"
              title="css3"
              className="technical-img"
            />
            <img
              src={jsImg}
              alt="java script"
              title="java script"
              className="technical-img"
            />
            <img
              src={bootstrapImg}
              alt="bootstrap"
              title="bootstrap"
              className="technical-img"
            />
            <img
              src={reactImg}
              alt="react js"
              title="react js"
              className="technical-img"
            />
          </div>
        </div>
        <div className="soft-skills">
          <h3 style={{ fontSize: "24px" }}>Soft Skills</h3>
          <div className="soft-skills-text">
            <ul>
              <li style={{ color: "rgb(166, 166, 166)" }}>High Learnability</li>
              <br />
              <li style={{ color: "rgb(166, 166, 166)" }}>
                Attention to details
              </li>
              <br />
              <li style={{ color: "rgb(166, 166, 166)" }}>flexibility</li>
            </ul>
            <ul>
              <li style={{ color: "rgb(166, 166, 166)" }}>problem solving</li>
              <br />
              <li style={{ color: "rgb(166, 166, 166)" }}>time managment</li>
              <br />
              <li style={{ color: "rgb(166, 166, 166)" }}>team working</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
