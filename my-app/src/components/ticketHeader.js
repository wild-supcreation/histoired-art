import React from 'react'
import TitleTicket from './titleTicket.js'

const TicketHeader = ({ title }) => {

  let titleBis = title

  return (
    <div>
      <div id='titleBillet'>

        <h1 className='return'>⬅</h1>

        <p className='title '>{title}</p>

      </div>
        <TitleTicket title={title} />
    </div>
  )
}

export default TicketHeader