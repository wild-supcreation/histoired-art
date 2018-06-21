import React from 'react'
import HeaderNav from '../components/HeaderNav'
import '../style/CreateAvatar.css'
import leftArrow from '../icon/red-arrow.svg'
import firstPrize from '../images/first-prize-trophy.svg'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'


export default class OnBoarding extends React.Component{
    render(){
        return(
            <div>
                <HeaderNav style={{width:'120px', marginTop:'60%', marginLeft:'33%'}} src={firstPrize} >
                    <Link to="/PartageAvatar"><a><img src={leftArrow} alt='left-arrow'/></a></Link>
                    <span style={{fontWeight: 'bold', color:'#ac262d'}}>PRÊT À JOUER</span>
                    <p style={{marginTop: '2em',marginRight: '1em', width:'300px', fontSize:'18px', textAlign:'left'}}>Une fois que vous êtes arrivé à l'exposition, vous pouvez ouvrir l'app et découvrir la map et ses étapes. Nous vous enverrons une notification à chaque étape ludique de l'exposition</p>
                </HeaderNav>
                <div className='textAvatar'>
                    <p style={{color: '#ac262d', fontSize: 23}}>Plus tu joues, <span
                        style={{fontWeight: 'bold'}}>Plus tu gagnes</span></p>
                    <p>Multiplie tes chances de remporter de beaux cadeaux en effectuant le plus d'étape possibles !  </p>
                </div>
                <button>LANCER LE JEU</button>
                <Footer/>
            </div>
        )
    }
}
