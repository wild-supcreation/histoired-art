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
                    <Link to="/"><a className='left-arrow'><img  src={leftArrow} alt='left-arrow'/></a></Link>
                    <span style={{fontWeight: 'bold'}}>CRÉER</span> <br/>VOTRE AVATAR
                </HeaderNav>
                <div className='textAvatar'>
                    <p className='text-title'>Près pour <span
                        style={{fontWeight: 'bold'}}>Histoire Dar ?</span></p>
                    <p>Commançons par créer votre avatar aux couleurs des photographies de Nadar </p>
                </div>
                <Link to="/CreateAvatarFiltre">
                    <button className='photoBtn'>PRENDRE MA PHOTO</button>
                </Link>
                <div>
                    <Link to="/ActiverNotif"><a className="item-nav">Continuer sans créer mon avatar</a></Link>
                </div>
            </div>
        )
    }
}

export default CreateAvatar
