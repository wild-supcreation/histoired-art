import React from 'react'
import TicketHeader from './ticketHeader.js'
import InformationBNF from './informationBNF.js'
import '../style/buytickets.css'

const tickeType = (buy, valid) => {
  if (!buy && !valid) {
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



const BuyTop = ({ buy, valid, canceled }) => {
  let title

  if (!buy && !valid)
    title = 'ACHETER UN BILLET'
  else if (buy && valid)
    title = 'TA COMMANDE'
  else
    title = 'CONFIRMATION ACHAT'

  if (!buy) {

    return (
      <div className='containerTopPage'>
        <TicketHeader title={title} canceled={canceled}  />
        <InformationBNF buy={buy} valid={valid} canceled={canceled} />
        {tickeType(buy, valid)}
      </div>
    )
  }
  else {
    return (
      <div className='containerTopPage'>
        <TicketHeader title={title} />
        <InformationBNF buy={buy} valid={valid} />
      </div>
    )
  }
}

export default BuyTop