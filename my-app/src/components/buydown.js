import React from 'react'
import TicketButton from './ticketButtons.js'
const BuyDown = ({ buy }) => {
  console.log('buy: ', buy);

  if (buy) {
    return (
      <div>
        <p className='nb' > NOMBRE </p>
        <input id='selectNb' className='select' type='text' />
        <div className='containerButton'>
          <button onClick={() => buy = !buy}>ANNULE</button>
          <button >VALIDE</button>
        </div>
        <TicketButton buy={buy} />
      </div>
    )
  }
  else {
    return (
      <div>
        <p className='tickets'>VOS BILLETS</p>
        <p>{/* i */}</p>
        <button id='goback'>RETOUR À L'ACCEUIL</button>
      </div>
    )
  }
}

export default BuyDown