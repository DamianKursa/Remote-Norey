import React, { useState, useEffect } from "react"
import Logo from "../../../images/Logo.svg"
import Button from "../Button/Button"
import SearchInput from "../SearchInput/SearchInput"
import MenuIndicator from "../MenuIndicator/MenuIndicator"
import SlidingPanel from "../SlidingPanel/SlidingPanel"

const Navigation = (props) => {

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
            {console.log(props.isItOpen)}
            {console.log(props.data)}
            <div  onClick={props.isItOpen} className='indicator'>
              <MenuIndicator className='indicator__icon' color='#fff' />
            </div>
          </div>
          <SlidingPanel open={props.data}>
            <h1>Hello World</h1>
          </SlidingPanel>
        </nav>
      </div>
  )
}

export default Navigation
