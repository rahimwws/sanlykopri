import React from 'react'

const Anounce = () => {
  return (
    <div id='anounce'>
        <div className="container">
            <div className="row">
                <div className="col-1">
                    <img src="images/anounce.png" alt="" />
                </div>
                <div className="col-2">
                    <p>Все блоки проходятся строго по порядку. Пропустить какой-то блок или начать обучение с середины нельзя, даже если вы считаете, что уже знаете какую-то часть материала. Только так мы можем гарантировать, что вы получите все знания, предусмотренные учебной программой.</p>
                </div>
                <div className="col-3">
                    <a href="" className='first-button'>начать обучение</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Anounce