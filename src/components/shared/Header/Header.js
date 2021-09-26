import React, { useState, useEffect } from "react"
import BackgroundImage from "gatsby-background-image"
import Navigation from "../../UIElements/Navigation/Navigation"
import { useStaticQuery, graphql } from "gatsby"
import Typography from "../../UIElements/Typohraphy/Typography"
import BlurPanel from "../../UIElements/BlurPanel/BlurPanel"
import Container from "../../UIElements/Container/Container"
import StickyNav from "../../UIElements/StickyNav/StickyNav"
const Header = () => {
  const [scrollFromTop, setScrollFromTop] = useState(0)
  const [openMenu, setOpenMenu] = useState(false)
  const limit = 800

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
        <Navigation/>
        {scrollFromTop > limit ? <StickyNav /> : ''}
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
      </header>
    </div>
  )
}

export default Header
