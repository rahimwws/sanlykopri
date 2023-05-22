import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Technologies from '../../components/Technologies/Technologies'
import Education from '../../components/Education/Education'
import HowEducate from '../../components/HowEducate/HowEducate'
import Help from '../../components/Help/Help'
import Anounce from '../../components/Anounce/Anounce'
import Footer from '../../components/Footer/Footer'

const HomePage = () => {
  const [index,setIndex] = useState(0)
  return (
    <>
        <Header index = {index} />
        <Technologies index = {index} />
        <Education index = {index} />
        <HowEducate index = {index} />
        <Help index = {index} />
        <Anounce index = {index} />
        <Footer index = {index} />
    </>
  )
}

export default HomePage