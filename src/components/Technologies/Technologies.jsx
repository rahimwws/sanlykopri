import React from 'react'

const Technologies = () => {
  return (
    <div id='technologies'>
        <div className="container">
            <h2>Какие технологии вы изучите:</h2>
            <div className='row'>
                <div className="col-1">
                    <img src="images/technologies-icon.png" alt="" />
                </div>
                <div className="col-2">
                    <div className="row2">
                        <div className='inner-div'><p>Языки программирование Python</p></div>
                        <div className='inner-div'><p>Сети</p></div>
                        <div className='inner-div'><p>База данных</p></div>
                        <div className='inner-div'><p>Фреймворки Flask и Django</p></div>
                        <div className='inner-div'><p>Отладка и тестрование</p></div>
                        <div className='inner-div'><p>Docker</p></div>
                        <div className='inner-div'><p>Git</p></div>
                    </div>
                    <h5>Это необходимый минимум для современного backend-разработчика</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Technologies