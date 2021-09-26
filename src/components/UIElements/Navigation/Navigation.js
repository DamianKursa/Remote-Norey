import React, { useState, useEffect } from "react"
import Logo from "../../../images/Logo.svg"
import Button from "../Button/Button"
import SearchInput from "../SearchInput/SearchInput"
import MenuIndicator from "../MenuIndicator/MenuIndicator"
import SlidingPanel from "../SlidingPanel/SlidingPanel"

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
      <div className='navigation__wrapper'>
        <nav className='navigation'>
          <div className='navigation__logo'>
            <img src={Logo} />
          </div>
          <div className='navigation__controls'>
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

export default Navigation
