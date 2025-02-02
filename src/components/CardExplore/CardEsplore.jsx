import React from 'react'
import './CardEsplore.css'



const CardEsplore = ({icon,subtitle}) => {
  return (
    <div className='cardexplore'>
        <div className="icon">
        <img src={icon} alt=""/>
        </div>        
        <p className='section'>{subtitle}</p>
    </div>
  )
}

export default CardEsplore