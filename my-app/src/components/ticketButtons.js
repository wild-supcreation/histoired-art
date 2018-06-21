import React from 'react'

const TicketButton = ({ buy }) => {

  if (buy) {
    return (
      <div className='containerButton'>
        <button onClick={() => console.log('annules')}>ANNULER</button>
        <button >VALIDER</button>
      </div>
    )
  } else {
    return (
      <div className='containerButton'>
        <button onClick={() => console.log('click')}>ANNULER</button>
        <button >VALIDER</button>
      </div>
    )
  }
}
export default TicketButton