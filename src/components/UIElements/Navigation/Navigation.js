import React, { useState, useEffect } from "react"
import Logo from "../../../images/logo.png"
import Button from "../Button/Button"
import SearchInput from "../SearchInput/SearchInput"
import MenuIndicator from "../MenuIndicator/MenuIndicator"
import SlidingPanel from "../SlidingPanel/SlidingPanel"
import Menu from "../../shared/Menu/Menu"
const Navigation = (props) => {

  return (
      <div className='navigation__wrapper'>
        <nav className='navigation'>
          <div className='navigation__logo'>
            <img src={Logo} />
          </div>
          <div className='navigation__controls'>
            <SearchInput />
            <Button onClick={props.openModal} type='outlined'>
              Message
            </Button>
            <div  onClick={props.isItOpen} className='indicator'>
              <MenuIndicator className='indicator__icon' color='#fff' />
            </div>
          </div>
          <SlidingPanel open={props.data}>
            <Menu close={props.closeMenu}/>
          </SlidingPanel>
        </nav>
      </div>
  )
}

export default Navigation
