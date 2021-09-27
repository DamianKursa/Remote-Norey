import React, { useState } from "react"
import Container from "../../components/UIElements/Container/Container"
import Typography from "../../components/UIElements/Typohraphy/Typography"
import List from "../../components/UIElements/List/List"
const Section2 = () => {
  const [bgColor, setBgColor] = useState("primary")
  const [displayedTextID, setDisplayedText] = useState(2)

  const listItems = [
    {
      buttonTitle: "Analysis",
      contentHeader: "We will provide full analysis of your company",
      content:
        " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo",
      id: 2,
      bgColor: "primary",
    },
    {
      buttonTitle: "Plan",
      contentHeader: "We will plan your whole journey to become more efficent",
      content:
        " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo",
      id: 3,
      bgColor: "secondary",
      headerColor: "white",
      textColor: "white",
    },
    {
      buttonTitle: "Implementation",
      contentHeader: "Implementation is hard and time consuming",
      content:
        " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo",
      id: 4,
      headerColor: "secondary",
      textColor: "white",
      bgColor: "primary",
    },
    {
      buttonTitle: "Measurement and support",
      contentHeader: "Evaluate your results and we will help",
      content:
        " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo",
      id: 5,
    },
  ]
  const handleChangeBgColor = (color) => {
    setBgColor(color)
  }
  const handleTextChange = (id) => {
    setDisplayedText(id)
  }
  return (
    <Container
      container
      height='section'
      align="center"
      direction='row'
      gap='large'
      width='1-col'
      padding='0rem'
      height='vh'
      color={ bgColor }

    >
      <Container
        container
        padding='big'
        width='1-col'
        justify='top'
        direction='column'
        gap='big'
      >
        <Container
          container
          direction='column'
          gap='small'
          padding="10rem 0 "
        >
          <Typography align='left' variant='h3' color='black'>
            What you can get from us?
          </Typography>
          <Typography align='left' variant='p' color='black'>
            Click on pills under to get more information about each step.
          </Typography>

          <List type='service'>
            {listItems.map((item) => (
              <li
                onClick={() => {
                  handleChangeBgColor(item.bgColor)
                  handleTextChange(item.id)
                }}
                key={item.id}
                className={`service-list-item service-list-item--${
                  item.id === displayedTextID ? "active" : "disabled"
                }`}
              >
                <Typography color={item.buttonTextColor} variant='p'>
                  {item.buttonTitle}
                </Typography>
              </li>
            ))}
          </List>
        </Container>
        <Container
          container
          height="half-section"
          justify="center"
          direction="column"

        >
          {listItems.map((item) => {
            if (item.id === displayedTextID) {
              return (
                <>
                  <Typography
                    align='left'
                    variant='h2'
                    color={item.headerColor}
                  >
                    {item.contentHeader}
                  </Typography>
                  <Typography align='left' variant='p' color={item.textColor}>
                    {item.content}
                  </Typography>
                </>
              )
            }
          })}
        </Container>
      </Container>
    </Container>
  )
}

export default Section2
