import React from 'react'
import TicketHeader from './ticketHeader.js'
import InformationBNF from './informationBNF.js'
import '../style/buytickets.css'

const tickeType = (ticketBuy) => {
  if (ticketBuy.state) {
    return (
      <div>
        <p className='ticketType'>TYPE DE BILLET</p>
        <div>
          <form>
            <select className='select' onchange="" >
              <option>Etudiant</option>
              <option>Enfant</option>
              <option>Adulte</option>
            </select>
          </form>
        </div>
      </div>
    )
  }

}

const BuyTop = ({ buy, title }) => {
  if (buy) {

    return (
      <div className='containerTopPage'>
        <TicketHeader title={title} />
        <InformationBNF buy={buy} />
        {tickeType(buy)}
      </div>
    )
  }
  else {
    return (
      <div className='containerTopPage'>
        <TicketHeader title={title} />
        <InformationBNF buy={buy} />
      </div>
    )
  }

}

export default BuyTop