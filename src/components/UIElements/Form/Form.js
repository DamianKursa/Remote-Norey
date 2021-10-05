import React, { useState } from "react"
import Button from "../Button/Button"
import Container from "../Container/Container"
import Wave from "../Animation/Wave"
const Form = () => {
  const [nextPage, setNextPage] = useState(false)

  const [state, setState] = React.useState({})

  const nextFormPage = (event) => {

    const target = event.target
    const value = target.type === "checkbox" ? target.checked : target.value
    const name = target.name

    setState({
      ...state,
      [name]: value,
    })

    setNextPage(!nextPage)
    console.log(state)
  }
  const sendMessage = (event) => {
    event.preventDefault()
  }

  return (
    <form
      onSubmit={sendMessage}
      className='form'
      action='#'
      id='send-us-message'
    >
      <Container
        container
        gap='small'
        margin='3rem 0'
        direction='row'
        width='1-col'
      >
        <Container gap='small' container direction='column' width='2-col'>
          {!nextPage ? (
            <>
              <span className='form__label--wrapper'>
                <label className='form__label' for='name'>
                  Your first name
                </label>
                <input
                  className='form__input'
                  name='firstName'
                  type='text'
                  placeholder='John'
                />
              </span>
              <span className='form__label--wrapper'>
                <label className='form__label' for='email'>
                  Your email
                </label>
                <input
                  className='form__input'
                  type='email'
                  name='email'
                  placeholder='example@example.com'
                  
                />
              </span>
              <span className='form__label--wrapper'>
                <label className='form__label' for='phone'>
                  Your number
                </label>
                <input
                  className='form__input'
                  type='phone'
                  name='phone'
                  placeholder='+47 111 111 11'
                />
              </span>
            </>
          ) : (
            <>
              <span className='form__label--wrapper'>
                <label className='form__label' for='company-size'>
                  Company size
                </label>
                <input
                  className='form__input'
                  type='number'
                  name='company-size'
                  placeholder='1'
                />
              </span>
              <span className='form__label--wrapper'>
                <label className='form__label' for='industry'>
                  Industry
                </label>
                <input
                  className='form__input'
                  name='industry'
                  type='text'
                  placeholder='Digital marketing'
                />
              </span>

              <span className='form__label--wrapper'>
                <label className='form__label' for='industry'>
                  What do you want to tell us?
                </label>
                <textarea
                  className='form__input'
                  type='text'
                  name='message'
                  placeholder='I want you to call me.'
                />
              </span>
            </>
          )}
          <Container padding='1rem 0' container gap='small'>
            {nextPage ? (
              <>
                <Button type='submit' form='send-us-message' type='primary'>
                  Send us message
                </Button>
                <Button
                  type='submit'
                  form='send-us-message'
                  type='secondary'
                  onClick={nextFormPage}
                >
                  Previous page
                </Button>
              </>
            ) : (
              <Button type='primary' onClick={nextFormPage} >
                Next
              </Button>
            )}
          </Container>
        </Container>
        <Container container direction='column' width='2-col'>
          <Wave />
        </Container>
      </Container>
    </form>
  )
}

export default Form
