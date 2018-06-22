import React from 'react'
import '../style/HeaderNav.css'


const HeaderNav = ({style, src, children}) => {
    return (
        <div className='Nav'>
            <div className='HeaderNav'>
                < div className='pp'>{children}</div>
            </div>
            <div className='headerImg'>
                <img style={style} src={src} alt='avatar'/>
            </div>
        </div>
    )
}

export default HeaderNav
