import React from 'react'
import { HomePage } from '../../assets/PagesText'
import { AppContext } from '../../App'
import { Link } from 'react-router-dom'
const Education = () => {
  const {index} = React.useContext(AppContext)
  return (
    <div id='education'>
        <div className="container">
          <h2>Что мы делаем?</h2>
          <div className="row">
            <Link to='/web'>
              <img src="images/item-1.png" alt="" width="60px" />
              <h3> {HomePage['EduItemMain-1'][index]} </h3>
              <p>{HomePage['EduItemText-1'][index]}</p>
            </Link>
            <Link to='/web'>
              <img src="images/item-2.png" alt="" width="60px" />
              <h3>{HomePage['EduItemMain-2'][index]}</h3>
              <p>{HomePage['EduItemText-2'][index]}</p>
            </Link>
            <Link to='/mobile'>
              <img src="images/item-3.png" alt="" width="60px" />
              <h3>{HomePage['EduItemMain-3'][index]}</h3>
              <p>{HomePage['EduItemText-3'][index]}</p>
            </Link>
            <Link to='/web'>
              <img src="images/item-4.png" alt="" width="60px" />
              <h3>{HomePage['EduItemMain-4'][index]}</h3>
              <p>{HomePage['EduItemText-4'][index]}</p>
            </Link>
            <Link>
              <img src="images/item-5.png" alt="" width="60px" />
              <h3>{HomePage['EduItemMain-5'][index]}</h3>
              <p>{HomePage['EduItemText-5'][index]}</p>
            </Link>
            <Link>
              <img src="images/item-6.png" alt="" width="60px" />
              <h3>{HomePage['EduItemMain-6'][index]}</h3>
              <p> {HomePage['EduItemText-6'][index]} </p>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Education