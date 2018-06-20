import React from 'react'
import logo from '../logo.svg'
import '../style/PageInscription.css'
const PageInscription = () =>
<div className='page-inscription'>
<img src={logo} className="logo-inscription" alt="logo" />
    <h1 className="title-inscription">L'Histoire Dar</h1>
    <p> Votre guide pour l'exposition de la BNF</p>
    <button className='facebook'>INSCRIPTION VIA FACEBOOK</button>
</div>
 export  default PageInscription