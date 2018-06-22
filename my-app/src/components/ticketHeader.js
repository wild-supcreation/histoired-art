import React from 'react'
import TitleTicket from './titleTicket.js'
import { Link } from 'react-router-dom'
import arrow from './../red-arrow.svg'
const TicketHeader = ({ title, canceled }) => {

  let titleBis = title

  return (
    <div>
      <div id='titleBillet'>

        <div onClick={() => window.location.reload()}>
        <img width='30px' className='return' src={arrow} />
        </div>

        <p className='title '>{title}</p>

      </div>
      <TitleTicket title={title} />
    </div>
  )
}

export default TicketHeader