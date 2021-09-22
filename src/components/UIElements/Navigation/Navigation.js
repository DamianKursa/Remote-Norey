import React from "react"
import Logo from "../../../images/Logo.svg"
const Navigation = () => {
  return (
    <nav className='navigation'>
      <div className="navigation__logo">
        <img src={Logo} />
      </div>
      <div className="navigation__controls">
        <h1>CONTROLS</h1>
      </div>
    </nav>
  )
}

export default Navigation
