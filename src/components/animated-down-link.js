import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const AnimatedDownLink = ({ current = "", to = "/", text = "text" }) => (
  <AniLink
    top="exit"
    className={current === to ? "active" : ""}
    swipe
    direction="down"
    to={to}
    entryOffset={100}
  >
    {text}
  </AniLink>
)

export default AnimatedDownLink
