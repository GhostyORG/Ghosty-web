// Imports
import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
// Custom Imports
import { membersFetch } from "../scripts/js/members";
import "../styles/css/custom/members.min.css";
import config from "../config.json";
import pagesDesc from "../data/pageDesc.json";
const TITLE = "Members | " + config.SITE_TITLE;

// Driver Codes
const DESC = pagesDesc.MembersDesc;
const CANONICAL = config.SITE_DOMAIN + "/;";
// Members Component
export default function Members() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 0, y: -100 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: 0, y: 100 }}
      transition={{ duration: 0.5 }}
      layout
    >
      <Helmet>
        <title>{TITLE}</title>
        <link rel="canonical" href={CANONICAL} />
        <meta name="description" content={DESC} />
      </Helmet>
      <div className="container-sm">
        <section>
          <div className="container">
            <div className="row" id="cardsHolder">
              <div className="col-sm-12 col-lg-4 col-md-6">
                <div className="card" id="devCard">
                  <img
                    src="#"
                    alt="Members"
                    id="members"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-center align-items-center">
                      <div>
                        <h5
                          className="card-title text-center d-inline-block"
                          id="devName"
                        >
                          Dev Name
                        </h5>
                        <span
                          className="badge text-bg-primary d-inline-block ms-2"
                          id="devRole"
                        >
                          CEO
                        </span>
                      </div>
                    </div>
                    <div className="d-grid gap-2">
                      <NavLink
                        to="#"
                        className="btn btn-primary github-btn"
                        id="devLink"
                      >
                        GitHub
                      </NavLink>

                      {/* <div className="d-flex justify-content-center align-items-center">
                        
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Custom JS */}
        {membersFetch()}
      </div>
    </motion.div>
  );
}
