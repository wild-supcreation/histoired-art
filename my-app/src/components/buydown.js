import React from 'react'
import TicketButton from './ticketButtons.js'
import QRcode from './../qr.png'
const BuyDown = ({ buy, valid, page, changeTicket, changeValid }) => {

  if (!buy && !valid) {
    return (
      <div>
        <p className='nb' > NOMBRE </p>
        <input id='selectNb' className='select' type='text' />
        <div className='containerButton'>
          <button onClick={() => buy = !buy}>ANNULER</button>
          <button onClick={changeTicket} >VALIDER</button>
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
          <button onClick={changeValid} className='buttonBuy' >VALIDER</button>
        </div>
      </div>)
  } else if (buy && valid && page === 'QR') {
    return (
      <div>
        <p className='eTicket'>TON E-BILLET</p>
        <p className='eTicketText' >1 Billet 'Etudiant' Fast Pass </p>
        <img className='QR' src={QRcode} />
      </div>)
  } else {
    return (
      <div>
        <p className='tickets '>VOS BILLETS</p>
        <p>{/* i */}</p>
        <button id='goback'> RETOUR À L'ACCEUIL </button>
      </div>)
  }
}

export default BuyDown