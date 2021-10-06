import React, { useState, useEffect } from "react"
import Navigation from "../../UIElements/Navigation/Navigation"
import Typography from "../../UIElements/Typohraphy/Typography"
import BlurPanel from "../../UIElements/BlurPanel/BlurPanel"
import Container from "../../UIElements/Container/Container"
import StickyNav from "../../UIElements/StickyNav/StickyNav"
import Modal from "../../UIElements/Modal/Modal"
import Wave from "../../UIElements/Animation/Wave"
import HeaderSVG from "../../../images/header-svg.svg"
import Form from "../../UIElements/Form/Form"
const Header = () => {
  const [scrollFromTop, setScrollFromTop] = useState(0)
  const [openMenu, setOpenMenu] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  //const [openBooking, setOpenBooking] = useState(false)
  const limit = 800

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }
  /*const handleOpenBookingPanel = () => {
    setOpenBooking(!openBooking)
  } 

  const handleCloseBookingPanel = () => {
    setOpenBooking(false)
  }*/
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollFromTop(position)
  }
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }
  const handleCloseMenu = () => {
    setOpenMenu(false)
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <div className='header__background'>
      <header className='header'>
        <Navigation
          openModal={handleOpenModal}
          closeMenu={handleCloseMenu}
          data={openMenu}
          isModalOpen={openModal}
          isItOpen={handleOpenMenu}
          close={handleCloseModal}
          handleOpenMenu={handleOpenModal}
        />
        {scrollFromTop > limit ? (
          <StickyNav
            closeMenu={handleCloseMenu}
            data={openMenu}
            isItOpen={handleOpenMenu}
            close={handleCloseModal}
            handleOpenMenu={handleOpenModal}
            openModal={handleOpenModal}
          />
        ) : (
          ""
        )}
        <Container
          className='header__content'
          container
          padding='medium'
          direction='column'
          align='top'
          justify='top'
          width='1-col'
          height='full'
        >
          <Container
            align='center'
            justify='center--mobile-bottom'
            width='3-col'
            height='full'
            container
            padding='30px 20px'
            gap='small'
            direction='column'
          >
            <Typography color='secondary' align='left' variant='h1'>
              Save money and optimize your
              <span className='primary-acent'> costs.</span>
            </Typography>
            <Typography color='secondary' align='left' variant='h6'>
              Remote office can enable your company to hire and manage best
              people from other countries.
            </Typography>
          </Container>
        </Container>
        {/*<div onClick={handleOpenBookingPanel} className="booking__indicator">
          <BookNow/>
        </div>*/}
        <Modal isModalOpen={openModal} close={handleCloseModal}>
          <Container
            direction='column'
            align='center'
            justify='center'
            width='1-col'
            container
          >
            <Form />
          </Container>
        </Modal>
        {/*<SlidingPanel open={openBooking}>
          <Booking close={handleOpenBookingPanel}/>
        </SlidingPanel> */}
      </header>
    </div>
  )
}

export default Header
