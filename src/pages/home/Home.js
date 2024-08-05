import "./HomeStyle.css";
import Header from "../../components/Header.js";
import photo from "../personalFiles/self.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import Mypdf from "../personalFiles/aref.pdf";
import { Outlet } from "react-router-dom";
import "../../globalCss/media.css";
import { useContext } from "react";
import { Mode } from "../../context/modeContext.js";

export default function Home() {
  const mode = useContext(Mode);
  const isBlack = mode.isBlack;

  return (
    <div className="homePage">
      <Header />
      <div
        className="main-home"
        style={{
          backgroundColor: isBlack
            ? "rgba(49, 49, 49, 0.635)"
            : "rgb(236, 236, 236)",
          boxShadow: isBlack ? "none" : "0 0 10px 5px gray",
          transition: "0.5s",
        }}
      >
        <section className="introduction">
          <div className="introduction-left">
            <img src={photo} alt="" className="self-photo" />
          </div>
          <div className="introduction-right">
            <div className={isBlack ? "loader" : "loader2"}>
              <h1 className={isBlack ? "name Wfc" : "name Bfc"}>
                Aref Essam Alkadi
              </h1>
            </div>
            <div>
              <p className="specilize">Front End Web Developer</p>
              <p className="resume">My Resume</p>
              <a
                download
                href={Mypdf}
                className={isBlack ? "resume-but Wfc" : "resume-but Bfc"}
              >
                Download{" "}
                <FontAwesomeIcon icon={faFilePdf} className="download-icon" />
              </a>
            </div>
          </div>
        </section>

        <Outlet />
      </div>
    </div>
  );
}
