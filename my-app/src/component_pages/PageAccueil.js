import React from 'react'
import '../style/PageAccueil.css'
import logo from '../logo.svg'


const PageAccueil = () =>
    <div className="accueil">
        <img src={logo} className="logo5" alt="logo"/>
        <div>
            <h1 className="titlelogo">L'Histoire Dar</h1>
            <p style={{color: "#404040"}}> Votre guide pour l'exposition de la BNF</p>
        </div>
    </div>

export default PageAccueil
