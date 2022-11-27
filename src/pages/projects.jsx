// Imports
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Octokit } from "@octokit/rest";
// Custom imports
import "../styles/scss/projects.scss";
import config from "../config.json";
import pagesDesc from "../data/pageDesc.json";

// Driver Code
const TITLE = "Projects | " + config.SITE_TITLE;
const DESC = pagesDesc.ProjectsDesc;
const CANONICAL = config.SITE_DOMAIN + "/;";
// Projects Component
export default function Projects() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let ignore = false;
    const octokit = new Octokit();

    // Compare: https://docs.github.com/en/rest/reference/repos/#list-organization-repositories

    async function fetchData() {
      const result = await octokit.rest.repos.listForOrg(
        {
          org: "GhostyORG",
          type: "public",
        }
      )

      if (!ignore) setData(result.data);
    }

    fetchData();
    return () => { ignore = true; }
  }, [])

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
          <h1 className="h1 text-center">Our Projects</h1>

          {/* Show the GhostyORG projects here using github API */}
          <div id="orgProjects">
            <ul>
              {data.map(project => (
                <li key={project.id}>
                  <a href={project.html_url}>
                    {project.name}
                  </a>
                  <div>
                    {project.description}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
