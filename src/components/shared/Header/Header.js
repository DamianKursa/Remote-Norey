import React from "react"
import BackgroundImage from "gatsby-background-image"
import Navigation from "../../UIElements/Navigation/Navigation"
import { useStaticQuery, graphql } from "gatsby"
import Typography from "../../UIElements/Typohraphy/Typography"
import BlurPanel from "../../UIElements/BlurPanel/BlurPanel"
import Content from "../../UIElements/Content/Content"
import Container from "../../UIElements/Container/Container"
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
    <BackgroundImage
      className='header__background'
      fluid={data.allDatoCmsAsset.edges[0].node.fluid}
    >
      <header className='header'>
        <Navigation />
        <Container align='center'>
          <BlurPanel>
            <Typography color='white' align='left' variant='h1'>
              Improve efficiency with remote office
            </Typography>
            <Typography color='white' align='left' variant='h6'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae
              viverra ex. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Pellentesque magna elit, venenatis
              eget eleifend vitae, dignissim ut ex. Nulla congue ipsum ipsum,
              sit amet varius purus lacinia et. Mauris egestas in eros in
              pellentesque. Aliquam rutrum volutpat aliquam. Vivamus efficitur
              justo eget ex rhoncus aliquam. Aliquam mattis vitae magna ut
              vulputate.
            </Typography>
          </BlurPanel>
        </Container>
      </header>
    </BackgroundImage>
  )
}

export default Header
