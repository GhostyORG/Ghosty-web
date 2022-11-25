import { NavLink } from "react-router-dom";
import "../styles/scss/header.scss";
import moonIcon from "../images/dark_mode.png";
import sunIcon from "../images/light_mode.png";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { ACTIONS } from "../context/actions/Theme";

export default function Header() {
  const {darkmode, dispatch} = useContext(ThemeContext);

  return (<div className="content">
      <nav className={`navbar navbar-expand-lg nav-container ${darkmode ? "navbar-dark" : ""}`}>
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
            <div className="navbar-nav">
              <NavLink
                className="nav-link tab-links"
                end={true}
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
              <NavLink className="nav-link tab-links" to="/projects">
                Projects
              </NavLink>
              <NavLink className="nav-link tab-links" to="/members">
                Members
              </NavLink>
              <NavLink className="nav-link tab-links" to="/about">
                About
              </NavLink>
            </div>
          </div>

            <button className="theme">
            <img
                src={darkmode ? sunIcon : moonIcon}
                alt="Mode Switcher"
                onClick={() => {
                  dispatch({type: darkmode ? ACTIONS.LIGHTMODE : ACTIONS.DARKMODE});
                }}
              />
            </button>
        </div>
      </nav>
      </div>
  );
}
