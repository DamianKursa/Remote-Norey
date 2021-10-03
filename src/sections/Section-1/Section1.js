import React from "react"
import Container from "../../components/UIElements/Container/Container"
import Typography from "../../components/UIElements/Typohraphy/Typography"
import Button from "../../components/UIElements/Button/Button"
const Section1 = () => {
  return (
    <Container
      container
      width='2-col'
      height='vh'
      align='center'
      justify='center'
      direction='column'
      gap='medium'
      padding="big"
    >
      <Typography align='center' variant='h2' color='black'>
        We connected whole <span className='primary-acent'>teams</span>
      </Typography>
      <Typography align='center' variant='p' color='black'>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo
      </Typography>
      <Button to='/about' type='primary--outlined'>
        Show me how
      </Button>
    </Container>
  )
}

export default Section1
