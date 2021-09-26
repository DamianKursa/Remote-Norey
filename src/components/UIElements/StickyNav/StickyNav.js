import React, { useState, useEffect } from "react"
import Logo from "../../../images/logo.png"
import Button from "../Button/Button"
import SearchInput from "../SearchInput/SearchInput"
import MenuIndicator from "../MenuIndicator/MenuIndicator"
import SlidingPanel from "../SlidingPanel/SlidingPanel"

const StickyNav = (props) => {

  return (
      <div className='sticky-navigation__wrapper'>
        <nav className='sticky-navigation'>
          <div className='sticky-navigation__logo'>
            <img src={Logo} />
          </div>
          <div className='sticky-navigation__controls'>
            <SearchInput />
            <Button onClick={props.openModal} type='outlined' >
              Message
            </Button>
            <div onClick={props.isItOpen} className='indicator'>
              <MenuIndicator className='indicator__icon' color='#fff' />
            </div>
          </div>
        </nav>
      </div>
  )
}

export default StickyNav
