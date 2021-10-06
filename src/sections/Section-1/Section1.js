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
      padding='big'
    >
      <Typography align='center' variant='h2' color='black'>
        Benefit more efficient from remote office.
      </Typography>
      <Typography align='center' variant='p' color='black'>
        Having the right set of tools in hands of your employees makes their
        life easier, and their work more efficient. And they can use them as
        well from their homes as from the office.
      </Typography>
      <Button to='/about' type='primary--outlined'>
        Show me how
      </Button>
    </Container>
  )
}

export default Section1
