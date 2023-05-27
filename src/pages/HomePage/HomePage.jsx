import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Technologies from '../../components/Technologies/Technologies'
import Education from '../../components/Education/Education'
import HowEducate from '../../components/HowEducate/HowEducate'
import Help from '../../components/Help/Help'
import Anounce from '../../components/Anounce/Anounce'
import { Faq } from '../../components/Faq/Faq'

const HomePage = () => {
  return (
    <>
        {/* <Navbar /> */}
        <Header/>
        <Technologies/>
        <Education/>
        <HowEducate/>
        <Help/>
        <Anounce/>
        <Faq></Faq>
        
        {/* <Footer/> */}
    </>
  )
}

export default HomePage