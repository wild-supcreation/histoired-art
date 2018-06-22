import React from 'react'
import '../style/Avantage.css'
import AtelierNadar from '../images/AtelierNadar.png'
import leftArrow from '../icon/red-arrow.svg'
import {Link} from 'react-router-dom'
import Footer from '../components/Footer'
import logo from '../logo.svg'



export default class Avantage extends React.Component {
    render() {
        return(
            <div >
                <div className='Avantage'>
                    <Link to="/"><a className='left-arrow'> <img src={leftArrow} alt='left-arrow'/></a></Link>
                    <span style={{fontWeight: 'bold'}}>À PROPOS</span> DE L'APP
                    <div ><img className="logos" src={logo} alt='logo'/></div>
                </div>
                <div>
                    <img src={AtelierNadar} alt='AtelierNadar'/>
                    <p style={{color: '#ac262d', marginTop:'-90px', fontSize:'40px', marginLeft:'25%',  fontFamily: "Yesteryear-Regular"}} >Histoire Dar</p>
                </div>
                <div className='textAvatar'>
                    <p className='text-title'>Les avantages <span
                        style={{fontWeight: 'bold'}}>de l'App</span></p>
                    <ol style={{color:'black'}}>
                        <li style={{paddingBottom:'15px'}}>Acheter votre billet en ligne et accéder à la file "fastPass". Moins de queue pour mieux profiter de l'exposition !</li>
                        <li style={{paddingBottom:'15px'}}>Découvrir un contenu ludique et inédit</li>
                        <li style={{paddingBottom:'15px'}}>Faire partie de la communauté Dardar</li>
                    </ol>
                </div>
                <Link to="/Autorise">
                    <button className='photoBtn'>ACHETER VOS BILLETS</button>
                </Link>
                <Footer/>
            </div>
        )

    }
}
