import React from 'react'
import { HomePage } from '../../assets/PagesText'
import { AppContext } from '../../App'

const Technologies = () => {
    const {index} = React.useContext(AppContext)
    return (
    <div id='technologies'>
        <div className="container">
            <h2>
                {HomePage.TechMain[index]}
            </h2>
            <div className='row'>
                <div className="col-1">
                    <img src="images/technologies-icon.png" alt="" />
                </div>
                <div className="col-2">
                    <h5>{HomePage.TechText[index]}</h5>
                    <div className="row2">
                        <div className='inner-div'><p>{HomePage.Direction1[index]}</p></div>
                        <div className='inner-div'><p>{HomePage.Direction2[index]}</p></div>
                        <div className='inner-div'><p>{HomePage.Direction3[index]}</p></div>
                        <div className='inner-div'><p>{HomePage.Direction4[index]}</p></div>
                        <div className='inner-div'><p>{HomePage.Direction5[index]}</p></div>
                        <div className='inner-div'><p>{HomePage.Direction6[index]}</p></div>
                        <div className='inner-div'><p>{HomePage.Direction7[index]}</p></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Technologies