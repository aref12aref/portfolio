import "./HomeStyle.css";
import Header from "../components/Header.js";
import photo from "./personalFiles/self.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import About from "./About.js";
import Skills from "./Skills.js";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import Mypdf from "./personalFiles/aref.pdf";

export default function Home() {
  return (
    <div className="homePage">
      <Header />
      <section className="introduction">
        <div className="introduction-left">
          <img src={photo} alt="" className="self-photo" />
        </div>
        <div className="introduction-right">
          <h1 className="name">Aref Essam Alkadi</h1>
          <p className="specilize">Front End Web Developer</p>
          <p className="resume">My Resume</p>
          <a download href={Mypdf} className="resume-but">
            Download{" "}
            <FontAwesomeIcon icon={faFilePdf} className="download-icon" />
          </a>
        </div>
      </section>
      <About />
      <Skills />
    </div>
  );
}
