import React from 'react'
import TicketButton from './ticketButtons.js'
const BuyDown = ({ buy, valid, }) => {

  if (!buy && !valid) {
    return (
      <div>
        <p className='nb' > NOMBRE </p>
        <input id='selectNb' className='select' type='text' />
        <div className='containerButton'>
          <button onClick={() => buy = !buy}>ANNULER</button>
          <button >VALIDER</button>
        </div>
        <TicketButton buy={buy} />
      </div>
    )
  }
  else if (buy && !valid) {
    return (
      <div>
        <p className='cardText buy'>MOYEN DE PAIEMENT</p>
        <input id='card' className='select' type='text' />
        <p className='cardText' > Ajouter une autre carte de paiement </p>
        <div className='containerButton'>
          <button className='buttonBuy' onClick={() => console.log('annuler')}>ANNULER</button>
          <button className='buttonBuy' >VALIDER</button>
        </div>
      </div>)
  } else if (buy && valid && title === 'TA COMMANDE') {
    return (
      <div>
        <p className='tickets'>VOS BILLETS</p>
        <p>{/* i */}</p>
        <button id='goback'> RETOUR À L'ACCEUIL </button>
      </div>
    )
  } else {
    return (
      <div>
        {/* <p className='tickets'>VOS BILLETS</p> */}
        <p>{/* i */}</p>
        <button id='goback'> RETOUR À L'ACCEUIL </button>
      </div>)
  }
}

export default BuyDown