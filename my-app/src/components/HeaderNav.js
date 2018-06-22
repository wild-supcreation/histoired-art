import React from 'react'
import '../style/HeaderNav.css'


const HeaderNav = ({style, src, children}) => {
    return (
        <div className='Nav'>
            <div className='HeaderNav'>
                <p className='header-title'>{children}</p>
            </div>
            <div className='headerImg'>
                <img className='header-img' style={style} src={src} alt='avatar'/>
            </div>
        </div>
    )
}

export default HeaderNav
