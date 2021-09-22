import React from "react"
import BackgroundImage from "gatsby-background-image"
import Navigation from "../../UIElements/Navigation/Navigation"
import { useStaticQuery, graphql } from "gatsby"
const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      allDatoCmsAsset(filter: { filename: { eq: "header-background.png" } }) {
        edges {
          node {
            fluid {
              ...GatsbyDatoCmsFluid_noBase64
            }
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage className="header__background" fluid={data.allDatoCmsAsset.edges[0].node.fluid}>
      <header className='header'>
        <Navigation />
      </header>
    </BackgroundImage>
  )
}

export default Header
