import React from 'react'
import logo from '../logo.svg'
import '../style/buytickets.css'

const BuyTickets = () => {
  return (
    <div className='container'>
      <div id='titleBillet'>

        <h1 className='return'>⬅</h1>

        <h4 className='title'>ACHETER UN BILLET </h4>

        <img src={logo} className="App-logo marginElt" alt="logo" />

      </div>
      <br />
      <div className='container'>
        <h4 className='titleNadar'> LES NADAR</h4>
        <h4>UN SIÈCLE DE PHOTOGRAPHIE</h4>
      </div>

    </div>
  )
}
export default BuyTickets