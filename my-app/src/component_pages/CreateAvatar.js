import React from 'react'
import HeaderNav from '../components/HeaderNav'
import avatarFemme from '../images/avatarFemme.png'
import leftArrow from '../icon/left-arrow.svg'

import '../style/CreateAvatar.css'
import {Link} from 'react-router-dom'

class CreateAvatar extends React.Component {
    render() {
        return (
            <div>
                <HeaderNav src={avatarFemme}>
                    <Link to="/"><a className='aaa'><img src={leftArrow} alt='left-arrow'/></a></Link>
                    <span style={{fontWeight: 'bold'}}>CRÉER</span> <br/>VOTRE AVATAR
                </HeaderNav>
                <div className='textAvatar'>
                    <p style={{color: '#ac262d', fontSize: 23}}>Près pour <span
                        style={{fontWeight: 'bold'}}>Histoire Dar ?</span></p>
                    <p>Commançons par créer votre avatar aux couleurs des photographies de Nadar </p>
                </div>
                <Link to="/CreateAvatarFiltre">
                    <button className='photoBtn'>PRENDRE MA PHOTO</button>
                </Link>
                <div id='link'>
                    <Link to="/OnBoarding"><button  className='buton5'style={{border:0}}>Continuer sans créer mon avatar</button></Link>
                </div>
            </div>
        )
    }
}

export default CreateAvatar
