import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/scss/header.scss";
import moonIcon from "../images/dark_mode.png";
import sunIcon from "../images/light_mode.png";
import { useEffect } from "react";

export default function Header() {
  const [darkmode, setDarkmode] = React.useState(false);

  if (darkmode) {
    console.log("Darkmode is enabled now");
    document.getElementById("navbar").classList.add("navbar-dark");
    document.body.classList.add("darkmode");
  }
  if (!darkmode) {
    console.log("Light Mode is enabled now");
    if (document.body.classList.contains("darkmode")) {
      document.getElementById("navbar").classList.remove("navbar-dark");
      document.body.classList.remove("darkmode");
    }
  }

  // Automatic switch mode based on OS theme
  useEffect(() => {
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? setDarkmode(true)
      : setDarkmode(false);
  }, []);
  return (
    <div>
      <nav className="navbar navbar-expand-lg nav-container " id="navbar">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand brandName" href="/">
            Ghosty Dev
          </a>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link tab-links"
                  end="true"
                  aria-current="page"
                  to="/">
                Home
              </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link tab-links" to="/projects">
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link tab-links" to="/members">
                  Members
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link tab-links" to="/about">
                  About
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="theme">
            {darkmode ? (
              <img
                src={sunIcon}
                alt="Mode Switcher"
                onClick={() => {
                  setDarkmode(!darkmode);
                }}
              />
            ) : (
              <img
                src={moonIcon}
                alt="Mode Switcher"
                onClick={() => {
                  setDarkmode(!darkmode);
                }}
              />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
