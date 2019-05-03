import PropTypes from "prop-types"
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import AnimatedDownLink from "../components/animated-down-link"
import AnimatedUpLink from "../components/animated-up-link"
import "../styles/header.scss"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      overlayOpen: false,
    }
  }
  render() {
    return (
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
            menu: file(relativePath: { eq: "menu.png" }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            cancel: file(relativePath: { eq: "cancel-music.png" }) {
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
            <>
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
                <div className="menu">
                  <AnimatedUpLink
                    current={this.props.location.pathname}
                    to="/skills"
                    text="Skills"
                  />
                  <AnimatedUpLink
                    current={this.props.location.pathname}
                    to="/companies"
                    text="Companies"
                  />
                  <AnimatedUpLink
                    current={this.props.location.pathname}
                    to="/projects"
                    text="Projects"
                  />
                  <a className="mail" href="mailto:daniel.pratog@gmail.com">
                    daniel.pratog@gmail.com
                  </a>
                </div>
                <div className="menu-mobile">
                  <div onClick={() => this.setState({ overlayOpen: true })}>
                    <Img
                      className="menu-icon"
                      fluid={data.menu.childImageSharp.fluid}
                    />
                  </div>
                </div>
              </header>
              <div
                className={`overlay-mobile ${
                  this.state.overlayOpen ? "active" : ""
                }`}
              >
                <div onClick={() => this.setState({ overlayOpen: false })}>
                  <Img
                    className="close-icon"
                    fluid={data.cancel.childImageSharp.fluid}
                  />
                </div>
                <AnimatedUpLink
                  current={this.props.location.pathname}
                  to="/skills"
                  text="Skills"
                />
                <AnimatedUpLink
                  current={this.props.location.pathname}
                  to="/companies"
                  text="Companies"
                />
                <AnimatedUpLink
                  current={this.props.location.pathname}
                  to="/projects"
                  text="Projects"
                />
                <a className="mail" href="mailto:daniel.pratog@gmail.com">
                  daniel.pratog@gmail.com
                </a>
              </div>
            </>
          )
        }}
      />
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
