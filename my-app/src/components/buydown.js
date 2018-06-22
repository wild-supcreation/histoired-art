import React from 'react'
import TicketButton from './ticketButtons.js'
import QRcode from './../qr.png'
import {Link} from 'react-router-dom'
const BuyDown = ({ buy, valid, page, changeTicket, changeValid }) => {

  if (!buy && !valid) {
    return (
      <div>
        <p className='nb' > NOMBRE </p>
        <input id='selectNb' className='select' type='text' />
        <div className='containerButton'>
        <Link to='/QR' > <button className='buttonQuentin' >ANNULER</button> </Link>
          <button className='buttonQuentin' onClick={changeTicket} >VALIDER</button>
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
        <Link to='/' >  <button className='buttonBuy buttonQuentin' >ANNULER</button> </Link>
          <button onClick={changeValid} className='buttonBuy buttonQuentin' >VALIDER</button>
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
        <p className='tickeTxt' >3x Billets 'Etudiant' Fast Pass</p>

        <Link to='/' > <button id='goback' className="buttonQuentin"> RETOUR À L'ACCEUIL </button> </Link>
      </div>)
  }
}

export default BuyDown