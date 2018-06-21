 import React from 'react'
 import '../style/PageAccueil.css'
 import logo from '../logo.svg'

 
 const PageAccueil = ({closePageAccueil}) =>
 <div className="accueil">
 
   <img src={logo} className="logo5" alt="logo" />
    <h1 className="title-logo">L'Histoire Dar</h1>
    <p> Votre guide pour l'exposition de la BNF</p>

    </div>

export default PageAccueil
