import React from 'react'
import '../style/Footer.css'
import Notif from '../icon/1-notification.svg'
import Pin from '../icon/2-pin.svg'
import Home from '../icon/3-home.svg'
import Settings from '../icon/4-settings.svg'
import UserIcon from '../icon/5-user.svg'
import {Link} from 'react-router-dom'

export default class Footer extends React.Component {
    render() {
        return (
            <div className='Footer'>
                <div id='item-nav'><Link to='/'><img src={Notif} alt='Notif logo'/></Link></div>
                <div id='item-nav'><Link to='/'><img src={Pin} alt='Pin logo'/></Link></div>
                <div id='item-nav'><Link to='/'> <img src={Home} alt='Home logo'/></Link></div>
                <div id='item-nav'><Link to='/'><img src={Settings} alt='Settings logo'/></Link></div>
                <div id='item-nav'><Link to='/'><img src={UserIcon} alt='userIcon logo'/></Link></div>
            </div>
        )
    }
}
