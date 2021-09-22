import React from "react"
import Logo from "../../../images/Logo.svg"
import Button from "../Button/Button"
import SearchInput from "../SearchInput/SearchInput"
import MenuIndicator from "../MenuIndicator/MenuIndicator"

const Navigation = () => {

  return (
    <div className='navigation__wrapper'>
      <nav className='navigation'>
        <div className='navigation__logo'>
          <img src={Logo} />
        </div>
        <div className='navigation__controls'>
          <SearchInput />
          <Button type='secondary' to='/about'>
            Direct message
          </Button>
          <div className='indicator'>
            <MenuIndicator  className="indicator__icon" color="#fff" />
          </div>
        </div>,
      </nav>
    </div>
  )
}

export default Navigation
