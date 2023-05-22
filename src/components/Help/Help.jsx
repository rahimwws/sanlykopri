import React from 'react'
import { HomePage } from '../../assets/PagesText'
import { AppContext } from '../../App'
const Help = () => {
    const {index} = React.useContext(AppContext)
    return (
    <div id='help'>
        <div className="container">
            <div className="row">
                <div className="col-1">
                    <img src="images/help-1.png" alt="" />
                </div>
                <div className="col-2">
                    <h2>{HomePage.HelpMainText1[index]}</h2>
                    <p>{HomePage.HelpText1[index]}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-2">
                    <h2> {HomePage.HelpMainText2[index]} </h2>
                    <p> {HomePage.HelpText2[index]} </p>
                </div>
                <div className="col-1">
                    <img src="images/help-2.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Help