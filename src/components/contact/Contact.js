import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import phonebooth from "./phonebooth.jpg";
import "./Contact.css";
import github from "../../logos/github-logo.png"
import linkedin from "../../logos/linkedin-logo.png";
import instagram from "../../logos/instagram-logo.png";
import email from "../../logos/mail.png";
import NavButtons from "../NavButtons";
import Initials from "../initials/Initials";

export default function Contact() {
  return (
    <>
      <div className="initials-container">
        <h1 className="A-initials">
          A<span className="B-initials">B</span>.
        </h1>
        <Initials />
      </div>
      <section className="contact-container">
        <div>
          <img
            src={phonebooth}
            alt="a picture of andrew in a phonebooth"
            className="profile"
          />
        </div>
        <ul className="contact-list">
          <li>
            <a href="https://www.github.com/andrewbituin">
              <img src={github} className="contact-logo" />
            </a>
            <a href="https://www.github.com/andrewbituin">
              <span className="contact-link">GitHub</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/andrew-bituin">
              <img src={linkedin} className="contact-logo" />
            </a>
            <a href="https://www.linkedin.com/in/andrew-bituin">
              <span className="contact-link">LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/lil_bittyy_/">
              <img src={instagram} className="contact-logo" />
            </a>
            <a href="https://www.instagram.com/lil_bittyy_/">
              <span className="contact-link">Instagram</span>
            </a>
          </li>
          <li className="logo-container">
            <a href="mailto:fandrewbituin@gmail.com">
              <img src={email} className="contact-logo" id="a" />
            </a>
            <a href="mailto:fandrewbituin@gmail.com">
              <span className="contact-link">fandrewbituin@gmail.com</span>
            </a>
          </li>
        </ul>
      </section>
      <footer className="contact-footer" />
    </>
  );
}
