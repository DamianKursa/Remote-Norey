import React from 'react'
import {Link } from "gatsby"
import { Helmet } from 'react-helmet'
import Header from '../components/shared/Header/Header'

const MainPage = () => {
  return (
    
    <div>
    <Helmet>
        <title>Norey Remote</title>
        <meta name="description" content="We conect people" />
    </Helmet>
      <Header />
      <p>Lol</p>
      <Link to="/about">Go to about</Link>
    </div>
  )
}

export default MainPage
