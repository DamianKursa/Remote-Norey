import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Header from "../components/shared/Header/Header"
import Container from "../components/UIElements/Container/Container"
import Typography from "../components/UIElements/Typohraphy/Typography"
import Button from "../components/UIElements/Button/Button"
import Animation from "../components/UIElements/Animation/Animation"
const MainPage = () => {
  return (
    <div>
      <Helmet>
        <title>Norey Remote</title>
        <meta name='description' content='We conect people' />
      </Helmet>
      <Header />
      <main className='main'>
        <Container
          container
          width='2-col'
          height='section'
          align='center'
          justify="center"
          direction='column'
          gap='medium'
        >
          <Typography align='center' variant='h2' color='black'>
            We connected whole <span className='primary-acent'>teams</span>
          </Typography>
          <Typography align='center' variant='p' color='black'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo
          </Typography>
          <Button to='/about' type='primary--outlined'>
            Show me how
          </Button>
        </Container>
        <Container
          container
          verticalAlign='center'
          height='section'
          direction='row'
          gap='big'
          fluid='fixed'
        >
          <Container
            container
            padding='big'
            width='2-col'
            justify="center"
            direction='column'
          >
            <Typography align='left' variant='h2' color='black'>
              We connected whole <span className='primary-acent'>teams</span>
            </Typography>
            <Typography align='left' variant='p' color='black'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo
            </Typography>
          </Container>
          <Container
            padding='0 3rem'
            width='50%'
            align='left'
            direction='column'
          >
            <Animation />
          </Container>
        </Container>
      </main>
    </div>
  )
}

export default MainPage
