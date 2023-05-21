import React from 'react'
import Header from '../../components/Header/Header'
import Technologies from '../../components/Technologies/Technologies'
import Education from '../../components/Education/Education'
import HowEducate from '../../components/HowEducate/HowEducate'
import Help from '../../components/Help/Help'
import Anounce from '../../components/Anounce/Anounce'
import Footer from '../../components/Footer/Footer'

const HomePage = () => {
  return (
    <>
        <Header />
        <Technologies />
        <Education />
        <HowEducate />
        <Help />
        <Anounce />
        <Footer />
    </>
  )
}

export default HomePage