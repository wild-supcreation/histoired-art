import React from 'react'
import nadarPics from '../nadar-photographe@2x.png'
import '../style/buytickets.css'
const BuyTop = ({buy}) => {
  console.log(buy,'jjjjjjjjjjjjjjjjoujou');
  return (
    <div className='containerTopPage'>
      <div id='titleBillet'>

        <h1 className='return'>⬅</h1>

        <p className='title '>ACHETER UN BILLET </p>

      </div>
      <div className='container'>
        <p className='titleNadar'> LES NADAR</p>
        <p className='text center'>UN SIÈCLE DE PHOTOGRAPHIE</p>
      </div>
      <div className='nadarDes'>
        <div className='container'>
          <img src={nadarPics} alt="Nadar photo" />
          {/* <img src='../../Projet NADAR/nadar-photographe@2x.png' className="nadarPics" alt="Nadar photo" /> */}
          <p className='center'>TYPE DE BILLET</p>
        </div>
        <div className='container'>
          <p className='titleExpo center'>EXPOSITION DE LA BNF</p>
          <p className='center where' >François-Mitterrand</p>
          <p className='center where' >du 6 octobre 2018</p>
          <p className='center where' >au 3 fevrier 2019</p>
        </div>
      </div>
      <div>
        <form>
          <select className='select' onchange="" >
            <option>Etudiant</option>
            <option>Enfant</option>
            <option>Adulte</option>
          </select>
        </form>
      </div>
    </div>
  )
}
export default BuyTop