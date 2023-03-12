import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">
      <h3>Alaa Hmaidat</h3>
      <a href="https://github.com/"
        className="Github">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/alaa-hmaidat-640309201/" className="Linkedin">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      
    </div>
  );
}