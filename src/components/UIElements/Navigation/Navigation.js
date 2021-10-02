import React from "react"
import Logo from "../../../images/Logo-blue.svg"
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
            <div   className='indicator'>
              <MenuIndicator onClick={props.isItOpen} className='indicator__icon' color='#fff' />
              <p onClick={props.isItOpen} >OPEN</p>
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
