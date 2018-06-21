import React from 'react'
import {Player} from 'video-react'
import movie from '../video.mp4'

const Erreur2 = () => {
    
    return (
        <Player playsInline
       src={movie}
       autoplay = 'true'/>
    )
}
export default Erreur2