// Imports
import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
// Custom imports
import { projectsFetch } from "../scripts/js/projects";
import "../styles/css/custom/projects.min.css";
import config from "../config.json";
import pagesDesc from "../data/pageDesc.json";

// Driver Code
const TITLE = "Projects | " + config.SITE_TITLE;
const DESC = pagesDesc.ProjectsDesc;
const CANONICAL = config.SITE_DOMAIN + "/;";
// Projects Component
export default function Projects() {
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
        <section>
          <h1 className="h1 text-center">Our Projects</h1>

          {/* Show the GhostyORG projects here using github API */}
          <div id="orgProjects"></div>
        </section>
      </div>
      {/* Custom JS */}
      {projectsFetch()}
    </motion.div>
  );
}
