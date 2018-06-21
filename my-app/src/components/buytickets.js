import React from 'react'
import BuyTop from './buytop.js'
import BuyDown from './buydown.js';

const BuyTickets = (status) => {
  
  let i
  let title = 'ACHETER UN BILLET'

  if (!status.state)
    title = 'VOTRE COMMANDE'

  return (
    <div>
      <BuyTop buy={status} title={title} />
      <BuyDown />
    </div>
  )
}
export default BuyTickets