import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./aboutStyle.css";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <section className="about-container">
      <h2 className="about-title">About Me</h2>
      <h3 className="about-sec">
        <FontAwesomeIcon icon={faCircleInfo} style={{ marginRight: "15px" }} />
        Personal Information:
      </h3>
      <p className="about-text">👋 Hey there, Iam Aref Alkadi.</p>
      <p className="about-text">Iam from syria and Iam 20 years old.</p>
      <h3 className="about-sec">
        <FontAwesomeIcon icon={faCircleInfo} style={{ marginRight: "15px" }} />
        Education:
      </h3>
      <p className="about-text">
        👨‍💻 Iam studying IT at Al-jazeerah Private University.
      </p>
      <p className="about-text">
        💡 I have a keen interest in front-end development using react js.
      </p>
    </section>
  );
}
