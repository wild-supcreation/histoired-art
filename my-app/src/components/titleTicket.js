import React from 'react'
//thx Clem ;)
const TitleTicket = ({ title }) => {
  const [ titleText, centred ] = title === 'CONFIRMATION ACHAT'
  ? [ 'TU ES CONNECTE(E) EN', ' TAND QUE' ]
  : [ 'LES NADARS', 'UN SIÈCLE DE PHOTOGRAPHIE' ]

  return (
    <div className='container'>
      <p className='titleNadar'>{titleText}</p>
      <p className='text center'>{centred}</p>
    </div>
  )
}

export default TitleTicket
