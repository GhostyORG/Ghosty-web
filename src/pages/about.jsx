// imports
import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
// Custom imports
import logo from "../images/ghosty_logo.jpg";
import config from "../config.json";
import pagesDesc from "../data/pageDesc.json";
import "../styles/css/custom/about.min.css";

// Driver codes
const TITLE = "About | " + config.SITE_TITLE;
const DESC = pagesDesc.AboutDesc;
const CANONICAL = config.SITE_DOMAIN + "/;";
export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200, y: 0 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: 0, y: -100 }}
      transition={{ duration: 1 }}
      layout
    >
      <Helmet>
        <title>{TITLE}</title>
        <link rel="canonical" href={CANONICAL} />
        <meta name="description" content={DESC} />
      </Helmet>
      <div className="container-sm">
        <section>
          <div className="row my-5">
            <div className="col-sm-12 col-md-6 col-lg-6 rounded mx-auto d-block ghosty-container">
              <img src={logo} alt="Ghosty Dev Logo" />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 my-3">
              <h1 className="h1 titleText">About Us</h1>
              <p className="aboutText">
                Welcome to Ghosty Development! We make high quality projects for
                the community to use and learn from. We make stuff from apps, to
                websites, to even bots! We have a team of 4 constantly working
                to improve the projects. We hope you learn something from our
                projects, and star them!
              </p>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
