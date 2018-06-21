import React from 'react'
import HeaderNav from '../components/HeaderNav'
import navarPics from '../images/navarPics.png'
import '../style/CreateAvatar.css'
import leftArrow from '../icon/left-arrow.svg'
import {Link} from 'react-router-dom'



export default class CreateAvatarFiltre extends React.Component{
    render(){
        return(
            <div>
                <HeaderNav style={{width:'16em', marginLeft:'18%'}} src={navarPics}>
                    <Link to="/"><a><img src={leftArrow} alt='left-arrow'/></a></Link>
                    <span style={{fontWeight: 'bold'}}>ACTIVER LES</span> <br/> NOTIFICATIONS
                </HeaderNav>
                <div className='textAvatar'>
                    <p style={{color: '#ac262d', fontSize: 23}}>On aimerait bien <span
                        style={{fontWeight: 'bold'}}>rester en contact</span></p>
                    <p>Activer les notifications pour recevoir des actualités et du contenu inédit avant de visiter l'expositon</p>
                </div>
                <button className='photoBtn'>ACTIVER LES NOTIFICATIONS</button>
            </div>
        )
    }
}
