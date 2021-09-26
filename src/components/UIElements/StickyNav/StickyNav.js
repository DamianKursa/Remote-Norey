import React, { useState, useEffect } from "react"
import Logo from "../../../images/Logo.svg"
import Button from "../Button/Button"
import SearchInput from "../SearchInput/SearchInput"
import MenuIndicator from "../MenuIndicator/MenuIndicator"
import SlidingPanel from "../SlidingPanel/SlidingPanel"

const StickyNav = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
      <div className='sticky-navigation__wrapper'>
        <nav className='sticky-navigation'>
          <div className='sticky-navigation__logo'>
            <img src={Logo} />
          </div>
          <div className='sticky-navigation__controls'>
            <SearchInput />
            <Button type='outlined' to='/about'>
              Direct message
            </Button>
            <div onClick={() => setOpenMenu(!openMenu)} className='indicator'>
              <MenuIndicator className='indicator__icon' color='#fff' />
            </div>
          </div>
          <SlidingPanel open={openMenu}>
            <h1>Hello World</h1>
          </SlidingPanel>
        </nav>
      </div>
  )
}

export default StickyNav
