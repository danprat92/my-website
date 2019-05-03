import React from "react"
import SEO from "../components/seo"
import "../styles/index.scss"

const IndexPage = () => (
  <>
    <SEO
      title="Home"
      keywords={[`Home`, `software development`, `Daniel Prato`]}
    />
    <div className="content">
      <h2>
        Hello, my name is <span className="hightlight">Daniel Prato</span>
      </h2>
      <h3>
        I'm a Software Engineer that specializes in Full-Stack Web & Mobile
        Development (Mostly Hybrid)
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

export default IndexPage
