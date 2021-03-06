import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import "./Prefcards.css";

import prefcardsExample from "./prefcardsExample2.png";
import prefcardsList from "./prefcardsList2.png";
import Initials from '../initials/Initials';

export default function Prefcards() {
  return (
    <>
      <div className="initials-container">
        <h1 className="A-initials">
          A<span className="B-initials">B</span>.
        </h1>
        <Initials />
      </div>
      <header className="prefcards-header">
        <h1>PREFCARDS</h1>
        {/* <h3 className="prefcards-blurb">An app for surgical teams</h3> */}
      </header>
      <section className="prefcards-image-container">
        <div>
          <img
            src={prefcardsList}
            alt="A screenshot of Prefcards Armory"
            className="project-screenshot"
          />
        </div>
        <div>
          <img
            src={prefcardsExample}
            alt="A screenshot of Prefcards Armory"
            className="project-screenshot"
          />
        </div>
      </section>
      <div className="prefcards-links-container">
        <a href="https://prefcards.now.sh/" target="_blank" rel="noopener noreferrer">
          <div className="prefcards-link">LIVE APP</div>
        </a>
        <a href="https://github.com/andrewbituin/prefcards-client" target="_blank" rel="noopener noreferrer">
          <div className="prefcards-link">CLIENT REPO</div>
        </a>
        <a href="https://github.com/andrewbituin/prefcards-api" target="_blank" rel="noopener noreferrer">
          <div className="prefcards-link">SERVER REPO</div>
        </a>
      </div>
      <section className="prefcards-description">
        <p>
          Prefcards helps surgical teams maintain consistent and accurate
          surgical preference cards. Preference cards play an integral role in
          the lead up to any surgery; they help the team properly prepare
          equipment, supplies, medications, etc. based on the preferences of the
          surgeon on the case. A number of hospitals use outdated systems for
          tracking and updating preference cards, leading to inconsistencies
          from one case to the next and creating problems when new staff members
          join the team. Prefcards' strength is in its simplicity. View, create
          and edit preference cards easily through an intutive interface.
        </p>
        <h4>TECH STACK</h4>
        <ul>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>PostgreSQL</li>
        </ul>
      </section>
      <Footer />
    </>
  );
}
