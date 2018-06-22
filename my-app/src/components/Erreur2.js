import React from 'react'
import {Player} from 'video-react'
import movie from '../video.mp4'
import carte from '../Carte.png'

const Erreur2 = () => {
    return (
        <Player 
       src={movie}
       poster ={carte}
       aspectRatio='16:28'/>
    )
}
export default Erreur2
