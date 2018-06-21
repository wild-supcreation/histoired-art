import React from 'react'
import BuyTop from './buytop.js'
import BuyDown from './buydown.js';

const BuyTickets = (status) => {

  let i
  let title = 'VOTRE COMMANDE'

  if (status.state)
    title = 'ACHETER UN BILLET'

  return (
    <div>
      <BuyTop buy={status} title={title} />
      <BuyDown buy={status} />
    </div>
  )
}
export default BuyTickets