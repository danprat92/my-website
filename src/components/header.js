import PropTypes from "prop-types"
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import AnimatedDownLink from "../components/animated-down-link"
import AnimatedUpLink from "../components/animated-up-link"
import "../styles/header.scss"

const Header = ({ location }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "me.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <header className="header">
          <Img
            className="logo"
            fluid={data.placeholderImage.childImageSharp.fluid}
          />
          <div className="name-title">
            <h4>
              <AnimatedDownLink to="/" text="Daniel Prato" />
            </h4>
            <h5>Full-Stack Web & Mobile Dev</h5>
          </div>
          <div className="spacer" />
          <div className="menu">
            <AnimatedUpLink
              current={location.pathname}
              to="/about"
              text="Skills"
            />
            <AnimatedUpLink
              current={location.pathname}
              to="/companies-timeline"
              text="Companies"
            />
            <AnimatedUpLink
              current={location.pathname}
              to="/projects"
              text="Projects"
            />
            <a className="mail" href="mailto:daniel.pratog@gmail.com">
              daniel.pratog@gmail.com
            </a>
          </div>
        </header>
      )
    }}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
