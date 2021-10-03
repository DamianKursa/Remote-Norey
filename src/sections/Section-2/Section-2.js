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
        "Let us analyze how your company works, what is it’s structure, and what resources are engaged in its everyday life. We will help you determine and discover the potential of switching to remote office. We will investigate how the information flows through the company and between employees.",
      id: 2,
      headerColor: "secondary",
      textColor: "secondary",
      bgColor: "primary",
    },
    {
      buttonTitle: "Plan",
      contentHeader: "We will plan your whole journey to become more efficent",
      content:"After analysing the company's workflow, we will propose tailored made plan with goals and implementation of changes . Then plan can be reassesed by client, and accepted or rejected.",
      id: 3,
      bgColor: "secondary",
      headerColor: "white",
      textColor: "white",
    },
    {
      buttonTitle: "Implementation",
      contentHeader: "Implementation is hard and time consuming",
      content:
        " We will set up your remote office with elements outlined in the plan. After that, you wil get full onboarding for efficient use of implemented solutions.",
      id: 4,
      headerColor: "white",
      textColor: "white",
      bgColor: "primary",
    },
    {
      buttonTitle: "Measurement and support",
      contentHeader: "Evaluate your results and we will help",
      content:"After implementation you won't be left alone. You will have full support in scope of measuring and maintaining performance of your new remote office.",
      id: 5,
      bgColor:'dark',
      headerColor: "white",
      textColor: "white",
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
          padding="5rem 0 0 0"
        >
          <Typography align='left' variant='h3' color='white'>
            What you can get from us?
          </Typography>
          <Typography align='left' variant='h6' color='white'>
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
          justify="top"
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
                  <Typography align='left' variant='h4' color={item.textColor}>
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
