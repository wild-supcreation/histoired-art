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
                <Link to='/'><div id='item-nav'><img src={Home} alt='Home logo'/></div></Link>
                <Link to='/'><div id='item-nav'><img src={Notif} alt='Notif logo'/></div></Link>
                <Link to='/'><div id='item-nav'><img src={Pin} alt='Pin logo'/></div></Link>
                <Link to='/'><div id='item-nav'><img src={Settings} alt='Settings logo'/></div></Link>
                <Link to='/'><div id='item-nav' ><img src={UserIcon} alt='userIcon logo'/></div></Link>
            </div>
        )
    }
}
