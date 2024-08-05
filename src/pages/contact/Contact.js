import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import "./contactStyle.css";
import "../../globalCss/media.css";
import "../../globalCss/mode.css";
import { useContext } from "react";
import { Mode } from "../../context/modeContext.js";

export let finalLatter;

export default function Contact() {
  const [latter, setLatter] = useState({
    name: "",
    email: "",
    message: "",
  });

  const mode = useContext(Mode);
  const isBlack = mode.isBlack;

  function handleSubmit(e) {
    e.preventDefault();
    finalLatter = latter;
  }

  return (
    <section className="contact-container">
      <h2 className="contact-title">Contact Me</h2>

      <div className={isBlack ? "contact-message" : "contact-message2"}>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-item">
            <label className="contact-label">Full Name</label>
            <input
              type="text"
              placeholder="Full Name..."
              required
              value={latter.name}
              onChange={(e) => setLatter({ ...latter, name: e.target.value })}
              className="contact-inp"
            />
          </div>

          <div className="contact-form-item">
            <label className="contact-label">Email</label>
            <input
              type="email"
              placeholder="Email..."
              required
              value={latter.email}
              onChange={(e) => setLatter({ ...latter, email: e.target.value })}
              className="contact-inp"
            />
          </div>

          <div className="contact-form-item">
            <label className="contact-label">Message</label>
            <textarea
              placeholder="Message..."
              required
              value={latter.message}
              onChange={(e) =>
                setLatter({ ...latter, message: e.target.value })
              }
              className="contact-text-area"
            />
          </div>

          <button className="contact-submit-button">Submit</button>
        </form>
      </div>

      <div className="contact-methods">
        <div className="contact-item">
          <a
            href="https://wa.me/+9630930758669"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="contact-icon whatsapp"
            />
          </a>
          <p className={isBlack ? "BGfc" : "WGfc"}>contact me via whatsapp</p>
        </div>

        <div className="contact-item">
          <a
            href="https://www.facebook.com/profile.php?id=100077099004665&mibextid=ZbWKwL"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faFacebookF}
              className="contact-icon facebook"
            />
          </a>
          <p className={isBlack ? "BGfc" : "WGfc"}>contact me via facebook</p>
        </div>

        <div className="contact-item">
          <a
            href="mailto:arefalkade6@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon email" />
          </a>
          <p className={isBlack ? "BGfc" : "WGfc"}>contact me via email</p>
        </div>

        <div className="contact-item">
          <a
            href="https://github.com/aref12aref"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className={
                isBlack ? "contact-icon github" : "contact-icon github2"
              }
            />
          </a>
          <p className={isBlack ? "BGfc" : "WGfc"}>my github</p>
        </div>
      </div>
    </section>
  );
}
