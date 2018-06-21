import React from 'react'
import '../style/PageAccueil.css'
import logo from '../logo.svg'
import {Link} from 'react-router-dom'

const PageAccueil = () =>
    <div className="accueil">
        <Link to="/PageInscription"><img src={logo} className="App-logo" alt="logo"/></Link>
        <div className='title'>
            <h1 className="App-title">L'Histoire Dar</h1>
            <p style={{color: "#404040"}}> Votre guide pour l'exposition de la BNF</p>
        </div>
    </div>


export default PageAccueil
