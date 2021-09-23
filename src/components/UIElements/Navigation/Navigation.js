import React, { useState, useEffect } from "react"
import Logo from "../../../images/Logo.svg"
import Button from "../Button/Button"
import SearchInput from "../SearchInput/SearchInput"
import MenuIndicator from "../MenuIndicator/MenuIndicator"

const Navigation = () => {
  const [scrollFromTop, setScrollFromTop] = useState(0)

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
        scrollFromTop > 20
          ? "sticky-navigation__wrapper"
          : "navigation__wrapper"
      }
    >
      <nav className={scrollFromTop > 20 ? "sticky-navigation" : "navigation"}>
        <div
          className={
            scrollFromTop > 20 ? "sticky-navigation__logo" : "navigation__logo"
          }
        >
          <img src={Logo} />
        </div>
        <div
          className={
            scrollFromTop > 20
              ? "sticky-navigation__controls"
              : "navigation__controls"
          }
        >
          <SearchInput />
          {console.log(scrollFromTop)}
          <Button
            type={
              scrollFromTop > 20
                ? "outlined"
                : "secondary"
            }
            to='/about'
          >
            Direct message 
          </Button>
          <div className='indicator'>
            <MenuIndicator className='indicator__icon' color='#fff' />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
