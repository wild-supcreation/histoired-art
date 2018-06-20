import React from 'react'
import BuyTop from './buytop.js'
import BuyDown from './buydown.js';
const BuyTickets = (status) => {
  let i = 0

  return (
    <div>
      <BuyTop buy={status} />
      <BuyDown />
    </div>
  )
}
export default BuyTickets