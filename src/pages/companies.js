import React from "react"
import SEO from "../components/seo"
import "../styles/index.scss"

const CompaniesPage = () => (
  <>
    <SEO
      title="Companies"
      keywords={[`Companies`, `software development`, `Daniel Prato`]}
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
        </a>
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

export default CompaniesPage
