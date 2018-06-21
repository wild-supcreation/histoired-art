import React from 'react'
import logo from '../logo.svg'
import '../style/PageInscription.css'
import {Link} from 'react-router-dom'

const PageInscription = () =>
<div className='page-inscription'>
<img src={logo} className="logo-inscription" alt="logo" />
    <h1 className="title-inscription">L'Histoire Dar</h1>
    <p> Votre guide pour l'exposition de la BNF</p>
    <Link to='Map'><button className='facebook'>INSCRIPTION VIA FACEBOOK</button></Link>
    <p> ou </p>
    <form>
        <label className='form-title'>Inscription via une adresse mail</label><br/>
        <input type='text' placeholder='Adresse mail'/><br/>
        <input type='password' placeholder='Mot de passe'/><br/>
        <Link to='Map'><input type='submit' value='CONNEXION' className='submit'/></Link>
    </form>
</div>
 export  default PageInscription
