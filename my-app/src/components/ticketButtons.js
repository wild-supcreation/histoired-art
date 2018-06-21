import React from 'react'

const TicketButton = ({ buy }) => {

  if (buy) {
    return (
      <div className='containerButton'>
        <button onClick={() => console.log('hahahaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaahhhhhhhhhhhhhhhhhhhhhaaarg')}>ANNULE</button>
        <button >VALIDE</button>
      </div>
    )
  } else {
    return (
      <div className='containerButton'>
        <button onClick={() => console.log('hahahaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaahhhhhhhhhhhhhhhhhhhhhaaarg')}>ANNULE</button>
        <button >VALIDE</button>
      </div>
    )
  }
}
export default TicketButton