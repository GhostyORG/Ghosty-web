// Imports
import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
// Custom Imports
import logo from "../images/ghosty_logo.jpg";
import { initHome } from "../scripts/js";
import config from "../config.json";
import pagesDesc from "../data/pageDesc.json";

// Driver Codes
const TITLE = "Home | " + config.SITE_TITLE;
const DESC = pagesDesc.HomeDesc;
const CANONICAL = config.SITE_DOMAIN + "/;";

// Home component
export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      layout
    >
      <Helmet>
        <title>{TITLE}</title>
        <link rel="canonical" href={CANONICAL} />
        <meta name="description" content={DESC} />
      </Helmet>
      <div className="container-sm">
        <section className="welcome">
          <div className="h-100 welcome-box">
            <div className="row h-100 align-items-center">
              <div className="col order-2 order-lg-1 order-md-1">
                <h3 className="h3 welcome-title">Welcome To</h3>
                <h1 className="h1 title-text">Ghosty Developement</h1>
              </div>
              <div className="col order-1 order-lg-2 order-md-2">
                <img
                  className="ghosty-logo rounded mx-auto d-block"
                  src={logo}
                  alt="Ghosty Organization Logo"
                />
              </div>
            </div>
          </div>
        </section>
        {/* End of Welcome/Landing section */}
      </div>

      {/* Scripts */}
      {initHome()}
    </motion.div>
  );
}
