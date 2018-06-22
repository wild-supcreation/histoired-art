import React from 'react'
import HeaderNav from '../components/HeaderNav'
import avatarFemmeFiltre from '../images/avatarFemme-Filtre.png'
import facebook from '../icon/facebook-button-logo.png'
import instagram from '../icon/instagram-buton-logo_1.png'
import twitter from '../icon/twitter-button-logo_1.png'
import leftArrow from '../icon/left-arrow.svg'

import '../style/CreateAvatar.css'
import {Link} from 'react-router-dom'


export default class PartageAvatar extends React.Component {
    render() {
        return (
            <div>
                <HeaderNav style={{width:'65%', marginTop:'28%', marginLeft:'18%'}} src={avatarFemmeFiltre}>
                    <Link to="/CreateAvatarFiltre"><a className='left-arrow' ><img src={leftArrow} alt='left-arrow'/></a></Link>
                    <span style={{fontWeight: 'bold'}}>PARTAGER</span> <br/>VOTRE AVATAR
                </HeaderNav>
                <div className='textAvatar'>
                    <p className='text-title'>Partages ton <span
                        style={{fontWeight: 'bold'}}>avatar !</span></p>
                    <p>Montrez au monde votre selfie version Nadar </p>
                </div>
                <div className='SocialeIcon'>
                    <img src={facebook} alt='facebook'/>
                    <img src={instagram} alt='insta'/>
                    <img src={twitter} alt='twitter'/>
                </div>
                <div >
                    <Link to="/ActiverNotif"><a className="item-nav">SKIP</a></Link>
                </div>
            </div>
        )
    }
}
