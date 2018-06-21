import React from 'react'
import '../style/PageAccueil.css'
import logo from '../logo.svg'
import {Link} from 'react-router-dom'

const PageAccueil = () =>
    <div className="accueil">
        <Link to="/CreateAvatar"><img src={logo} className="App-logo" alt="logo"/></Link>
        <h1 className="App-title">L'Histoire Dar</h1>
        <p> Votre guide pour l'exposition de la BNF</p>

    </div>


export default PageAccueil
