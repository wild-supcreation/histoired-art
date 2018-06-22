import React from 'react'
import '../style/Autorise.css'
import AtelierNadar from '../images/AtelierNadar.png'
import leftArrow from '../icon/red-arrow.svg'
import {Link} from 'react-router-dom'
import Footer from '../components/Footer'
import logo from '../logo.svg'




export default class Autorise extends React.Component {
    render() {
        return(
            <div >
                <div className='Autorise'>
                    <Link to="/"><a className='left-arrow'> <img src={leftArrow} alt='left-arrow'/></a></Link>
                    <span style={{fontWeight: 'bold'}}>À PROPOS </span> DE L'APP
                    <div ><img className="logos" src={logo} alt='logo'/></div>
                </div>
                <div>
                    <img src={AtelierNadar} alt='AtelierNadar'/>
                    <p style={{color: '#ac262d', marginTop:'-90px', fontSize:'40px', marginLeft:'25%',  fontFamily: "Yesteryear-Regular"}} >Histoire Dar</p>
                </div>
                <div className='textAvatar'>
                    <p className='text-title'>Avant de  <span
                        style={{fontWeight: 'bold'}}>lancer le jeu</span></p>
                    <p>Certains contenus sont audio, nous vous invitions donc très vivement à autorise l'accès au haut-parleur</p>
           <div className='premiereswi'>
           <p className='son'>Autorise le son</p>
            <label className="switch">
                <input type="checkbox"/>
                <span className="slider round"></span>
            </label> 
            </div> 
            <div className='premiereswi'>
           <p className='geo'>Activer la géolocalisation</p>
            <label class="switch">
                <input type="checkbox"/>
                <span class="slider round"></span>
            </label> 
            </div>                 
                </div>
                
                <Link to="/OnBoarding">
                    <button className='photoBtn'>Prêt a jouer ?</button>
                </Link>
                <Footer/>
            </div>
        )

    }
}
