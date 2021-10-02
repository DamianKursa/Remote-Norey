import React from "react"
import { Helmet } from "react-helmet"
import Header from "../components/shared/Header/Header"
import Section1 from "../sections/Section-1/Section1"
import Section2 from "../sections/Section-2/Section-2"
import Section3 from "../sections/Section-3/Section3"
const MainPage = () => {
  return (
    <div>
      <Helmet>
        <title>Norey Remote</title>
        <meta name='description' content='We conect people' />
      </Helmet>
      <Header />
      <main className='main'>
        <Section1/>
        <Section2 />
      </main>
    </div>
  )
}

export default MainPage
