import React from 'react'
import arrow from './../red-arrow.svg'
import QR from './../qr.png'
import { Link } from 'react-router-dom'
import nadarPics from '../nadar-photographe@2x.png'

const QrCode = () => {

  return (
    <div>
      <div className='containerTopPage'>
        <div>
          <div id='titleBillet'>
            <Link to='/' >
              <img width='30px' className='return' src={arrow} />
            </Link>
            <p className='title' > TA COMMANDE </p>
          </div>
          <div className='container'>
            <p className='titleNadar'>LES NADARS</p>
            <p className='text center'>UN SIÈCLE DE PHOTOGRAPHIE</p>
          </div>
          <div className='nadarDes'>
            <div className='container'>
              <img className="nadarPicsBis" src={nadarPics} alt="Nadar photo" />
              <p className='titleExpo center'>EXPOSITION DE LA BNF</p>
              <p className='center whereWhen' >François-Mitterrand</p>
              <p className='center whereWhen' >du 6 octobre 2018</p>
              <p className='center whereWhen' >au 3 fevrier 2019</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className='eTicket'>TON E-BILLET</p>
        <p className='eTicketText' >1 Billet 'Etudiant' Fast Pass </p>
        <img className='QR' src={QR} />
      </div>
    </div>
  )
}
export default QrCode