import React from 'react'
import BookNow from '../UIElements/Animation/BookNow'
import Button from '../UIElements/Button/Button'
import Typography from '../UIElements/Typohraphy/Typography'

const Booking = (props) => {
  return (
    <div className="booking">
      <Button onClick={props.close} type="primary">Close</Button>
      <Typography variant="h3">Booking panel</Typography>
    </div>
  )
}

export default Booking
