import React from "react"
import SEO from "../components/seo"
import "../styles/index.scss"

const ProjectsPage = () => (
  <>
    <SEO
      title="Projects"
      keywords={[`Projects`, `software development`, `Daniel Prato`]}
    />
    <div className="content">
      <h2>This page is not ready yet. I'm working on it!</h2>
      <h3>
        In the meantime, feel free to check out my{" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://bit.ly/2WqOik0"
          alt="resume"
        >
          resume
        </a>{" "}
        or go to my{" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/danprat92"
          alt="github"
        >
          github
        </a>{" "}
        to see some projects
      </h3>
      <p>Have a project, idea or problem you'd like to discuss?</p>
      <p>
        Let's chat{" "}
        <a href="mailto:daniel.pratog@gmail.com" alt="email">
          daniel.pratog@gmail.com
        </a>
      </p>
    </div>
  </>
)

export default ProjectsPage
