import React from 'react'
import {Link } from "gatsby"
import { Helmet } from 'react-helmet'
const MainPage = () => {
  return (
    
    <div>
    <Helmet>
        <title>Norey Remote</title>
        <meta name="description" content="We conect people" />
    </Helmet>
      <p>Lol</p>
      <Link to="/about">Go to about</Link>
    </div>
  )
}

export default MainPage
