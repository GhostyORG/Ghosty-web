// Imports
import React from "react";
import { releaseFetch } from "../scripts/js/fetch";
import { NavLink } from "react-router-dom";
import "../styles/scss/footer.scss";
import discordLogo from "../images/discord-blue.png";
import globeLogo from "../images/globe.png";
// Functional Component
export default function Footer() {
  return (
    <div>
      {/* Footer Section */}
      <section className="footer-container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="footer-socials-container">
              <h2>Socials</h2>
              <ul>
                <li>
                  <a href="https://discord.gg/ztDEQjwKbP">
                    <img
                      src={discordLogo}
                      alt="Discord Invite"
                      className="discordLogo"
                    />
                  </a>
                </li>
                <li>
                  <NavLink to="/home">
                    <img src={globeLogo} alt="Website" className="globeLogo" />
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="links-container">
              <h2>Links</h2>
              <ul>
                <li>
                  <NavLink
                    className="nav-link"
                    exact="true"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/projects">
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/members">
                    Members
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row bottom-footer-container">
          <div className="col-sm-12 col-md-6 col-lg-6 credit-container">
            <code className="credit">
              With ♥ by{" "}
              <a href="https://github.com/abir-Tx/" className="creator">
                <b>Abir-Tx</b>
              </a>
            </code>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 version-container">
            <code className="version" id="version_footer"></code>
          </div>
        </div>
      </section>
      {/* End of Footer section */}

      {/* Scripts */}
      {releaseFetch()}
    </div>
  );
}
