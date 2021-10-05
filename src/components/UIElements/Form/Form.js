import React from "react"
import Button from "../Button/Button"
import Container from "../Container/Container"

const Form = () => {
  return (
    <form className='form' action='#'>
      <Container container direction='row' width='1-col'>
        <span className='form__label--wrapper'>
          <label className='form__label' for='name'>
            Your first name
          </label>
          <input
            className='form__input'
            name='name'
            type='text'
            placeholder='John Doe'
          />
        </span>
      </Container>
      <Container gap='medium' container direction='row' width='1-col'>
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
      </Container>
      <Container container direction='row' gap='medium'>
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
      </Container>

      <span className='form__label--wrapper'>
        <label className='form__label' for='industry'>
          What do you want to tell us?
        </label>
        <textarea
          className='form__input'
          type='text'
          placeholder='I want you to call me.'
        />
      </span>
      <Button type='primary'>Send us message</Button>
    </form>
  )
}

export default Form
