import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../styles/footer.scss"

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        linkedin: file(relativePath: { eq: "linkedin.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        resume: file(relativePath: { eq: "curriculum.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        instagram: file(relativePath: { eq: "instagram-logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <footer>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/daniel-prato-13a120a6/"
          alt="linkedin"
        >
          <Img className="social" fluid={data.linkedin.childImageSharp.fluid} />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://bit.ly/2WqOik0"
          alt="resume"
        >
          <Img className="social" fluid={data.resume.childImageSharp.fluid} />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.instagram.com/danprat92/?hl=en"
          alt="instagram"
        >
          <Img
            className="social"
            fluid={data.instagram.childImageSharp.fluid}
          />
        </a>
      </footer>
    )}
  />
)

Footer.propTypes = {}

Footer.defaultProps = {}

export default Footer
