import React from 'react'
import { HomePage } from '../../assets/PagesText'
const Education = ({index}) => {
  return (
    <div id='education'>
        <div className="container">
          <h2>Что мы делаем?</h2>
          <div className="row">
            <div>
              <img src="images/item-1.png" alt="" width="60px" />
              <h3> {HomePage['EduItemMain-1'][index]} </h3>
              <p>{HomePage['EduItemText-1'][index]}</p>
            </div>
            <div>
              <img src="images/item-2.png" alt="" width="60px" />
              <h3>{HomePage['EduItemMain-2'][index]}</h3>
              <p>{HomePage['EduItemText-2'][index]}</p>
            </div>
            <div>
              <img src="images/item-3.png" alt="" width="60px" />
              <h3>{HomePage['EduItemMain-3'][index]}</h3>
              <p>{HomePage['EduItemText-3'][index]}</p>
            </div>
            <div>
              <img src="images/item-4.png" alt="" width="60px" />
              <h3>{HomePage['EduItemMain-4'][index]}</h3>
              <p>{HomePage['EduItemText-4'][index]}</p>
            </div>
            <div>
              <img src="images/item-5.png" alt="" width="60px" />
              <h3>{HomePage['EduItemMain-5'][index]}</h3>
              <p>{HomePage['EduItemText-5'][index]}</p>
            </div>
            <div>
              <img src="images/item-6.png" alt="" width="60px" />
              <h3>{HomePage['EduItemMain-6'][index]}</h3>
              <p> {HomePage['EduItemText-6'][index]} </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Education