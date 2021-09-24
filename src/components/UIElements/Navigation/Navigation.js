import React, { useState, useEffect } from "react"
import Logo from "../../../images/Logo.svg"
import Button from "../Button/Button"
import SearchInput from "../SearchInput/SearchInput"
import MenuIndicator from "../MenuIndicator/MenuIndicator"
import SlidingPanel from "../SlidingPanel/SlidingPanel"

const Navigation = () => {
  const [scrollFromTop, setScrollFromTop] = useState(0)
  const [openMenu, setOpenMenu] = useState(false)
  const limit = 30

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollFromTop(position)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <div
      className={
        scrollFromTop > limit
          ? "sticky-navigation__wrapper"
          : "navigation__wrapper"
      }
    >
      <nav
        className={scrollFromTop > limit ? "sticky-navigation" : "navigation"}
      >
        <div
          className={
            scrollFromTop > limit
              ? "sticky-navigation__logo"
              : "navigation__logo"
          }
        >
          <img src={Logo} />
        </div>
        <div
          className={
            scrollFromTop > limit
              ? "sticky-navigation__controls"
              : "navigation__controls"
          }
        >
          <SearchInput />
          <Button
            type={scrollFromTop > limit ? "outlined" : "secondary"}
            to='/about'
          >
            Direct message
          </Button>
          <div onClick={ () => setOpenMenu(!openMenu)} className='indicator'>
            <MenuIndicator className='indicator__icon' color='#fff' />
          </div>
        </div>
        <SlidingPanel open={openMenu} >
          <h1>Hello World</h1>
        </SlidingPanel>
      </nav>
    </div>
  )
}

export default Navigation
