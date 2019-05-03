import React from "react"
import AnimatedDownLink from "../components/animated-down-link"
import SEO from "../components/seo"

const SecondPage = () => (
  <>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <AnimatedDownLink to="/" text="Go Home" />
  </>
)

export default SecondPage
