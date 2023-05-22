import React from 'react'
import { HomePage } from '../../assets/PagesText'
import { AppContext } from '../../App'
const Anounce = () => {
    const {index} = React.useContext(AppContext)
  return (
    <div id='anounce'>
        <div className="container">
            <div className="row">
                <div className="col-1">
                    <img src="images/anounce.png" alt="" />
                </div>
                <div className="col-2">
                    <p> {HomePage.Anounce[index]} </p>
                </div>
                <div className="col-3">
                    <a href="" className='first-button'>{HomePage.MainBtn[index]} </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Anounce