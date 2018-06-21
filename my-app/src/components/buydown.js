import React from 'react'
const BuyDown = ({Buy}) => {
  return (
    <div>
      <p className='nb' > NOMBRE </p>
      <input id='selectNb' className='select' type='text' />
      <div className='containerButton'>
        <button onClick={() => console.log('hahahaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaahhhhhhhhhhhhhhhhhhhhhaaarg')}>ANNULE</button>
        <button >VALIDE</button>
      </div>
    </div>
  )
}

export default BuyDown