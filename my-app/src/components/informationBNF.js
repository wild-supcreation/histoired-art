import React from 'react'
import nadarPics from '../nadar-photographe@2x.png'
import people from './../brooke-cagle-224815-unsplash@2x.png'


const InformationBNF = ({ buy, valid }) => {
  if (!buy && !valid) {
    return (<div className='nadarDes'>
      <img class="nadarPics" src={nadarPics} alt="Nadar photo" />
      <div className='container'>
        <p className='titleExpo center'>EXPOSITION DE LA BNF</p>
        <p className='center whereWhen' >François-Mitterrand</p>
        <p className='center whereWhen' >du 6 octobre 2018</p>
        <p className='center whereWhen' >au 3 fevrier 2019</p>
      </div>
    </div>
    )
  } else if (buy && !valid) {
    return (
      <div className='nadarDes'>
        <div className='container'>
          <img className="nadarPicsBis" height='180em' src={people} alt="Nadar photo" />
          <p className='center toi' >Ce n'es pas toi ?</p>
        </div>
      </div>
    )
  } else {
    return (
      <div className='nadarDes'>
        <div className='container'>
          <img className="nadarPicsBis" src={nadarPics} alt="Nadar photo" />
          <p className='titleExpo center'>EXPOSITION DE LA BNF</p>
          <p className='center whereWhen' >François-Mitterrand</p>
          <p className='center whereWhen' >du 6 octobre 2018</p>
          <p className='center whereWhen' >au 3 fevrier 2019</p>
        </div>
      </div>
    )
  }
}
export default InformationBNF