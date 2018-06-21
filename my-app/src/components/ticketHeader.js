import React from 'react'

const TicketHeader = ({ title }) => {
  return (
    <div>
      <div id='titleBillet'>

        <h1 className='return'>⬅</h1>

        <p className='title '>{title} </p>

      </div>
      <div className='container'>
        <p className='titleNadar'> LES NADAR</p>
        <p className='text center'>UN SIÈCLE DE PHOTOGRAPHIE</p>
      </div>
    </div>
  )
}

export default TicketHeader