import React from 'react'
import HeaderNav from '../components/HeaderNav'
import avatarFemmeFiltre from '../images/avatarFemme-Filtre.png'
import leftArrow from '../icon/left-arrow.svg'
import '../style/CreateAvatar.css'
import {Link} from 'react-router-dom'



export default class CreateAvatarFiltre extends React.Component{
    render(){
        return(
            <div>
                <HeaderNav style={{width:'65%', marginTop:'28%', marginLeft:'18%'}} src={avatarFemmeFiltre}>
                    <Link to="/CreateAvatar"><a><img src={leftArrow} alt='left-arrow'/></a></Link>
                    <span style={{fontWeight: 'bold'}}>CRÉER</span> <br/>VOTRE AVATAR
                </HeaderNav>
                <div className='textAvatar'>
                    <p style={{color: '#ac262d', fontSize: 23}}>Cela vous <span
                        style={{fontWeight: 'bold'}}>convient ?</span></p>
                    <p>Alors c'est parti !</p>
                </div>
                <Link to="/PartageAvatar"><button style={{marginTop: '56px'}}>VALIDER MA PHOTO</button></Link>
            </div>
        )
    }
}
