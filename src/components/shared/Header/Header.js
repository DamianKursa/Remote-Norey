import React, { useState, useEffect } from "react"
import BackgroundImage from "gatsby-background-image"
import Navigation from "../../UIElements/Navigation/Navigation"
import { useStaticQuery, graphql } from "gatsby"
import Typography from "../../UIElements/Typohraphy/Typography"
import BlurPanel from "../../UIElements/BlurPanel/BlurPanel"
import Container from "../../UIElements/Container/Container"
import StickyNav from "../../UIElements/StickyNav/StickyNav"
import Modal from "../../UIElements/Modal/Modal"
import Booking from "../../booking/Booking"
import Wave from "../../UIElements/Animation/Wave"
import SlidingPanel from "../../UIElements/SlidingPanel/SlidingPanel"
import BookNow from '../../UIElements/Animation/BookNow'
const Header = () => {
  const [scrollFromTop, setScrollFromTop] = useState(0)
  const [openMenu, setOpenMenu] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [openBooking, setOpenBooking] = useState(false)
  const limit = 800

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }
  const handleOpenBookingPanel = () => {
    setOpenBooking(!openBooking)
  }

  const handleCloseBookingPanel = () => {
    setOpenBooking(false)
  }
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

  const data = useStaticQuery(graphql`
    query HeaderQuery {
      allDatoCmsAsset(filter: { filename: { eq: "header-background.png" } }) {
        edges {
          node {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)
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
        <Container direction='column' width='2-sol' height='full'>
          <Container
            container
            width='2-col'
            height='full'
            direction='column'
            padding='big'
            justify='center'
          >
            <BlurPanel>
              <Typography color='white' align='left' variant='h1'>
                Remote Office is not bad
              </Typography>
              <Typography color='primary' align='left' variant='h6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                vitae viverra ex. Orci varius natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus
              </Typography>
            </BlurPanel>
          </Container>
        </Container>
        <div onClick={handleOpenBookingPanel} className="booking__indicator">
          <BookNow/>
        </div>
        <Modal isModalOpen={openModal} close={handleCloseModal}>
          <Typography variant='h5'>
            Tutaj bedzie formularz kontaktowy
          </Typography>
          <Wave />
        </Modal>
        <SlidingPanel open={openBooking}>
          <Booking close={handleOpenBookingPanel}/>
        </SlidingPanel>
      </header>
    </div>
  )
}

export default Header
