import React from 'react'
const BuyDown = ({ buy }) => {
  console.log('buy: ', buy);

  if (buy.state) {
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