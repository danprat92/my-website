import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const AnimatedUpLink = ({ current = "", to = "/", text = "text" }) => (
  <AniLink
    className={current === to ? "active" : ""}
    top="exit"
    swipe
    direction="up"
    to={to}
    entryOffset={100}
  >
    {text}
  </AniLink>
)

export default AnimatedUpLink
