import React from 'react'
import './CardCon.css'

const CardCon = ({img,title,subtitle}) => {
  return (
    <div className='cardcon'>
        <img src={img} className='calimg' />
        <div>
            <p className='call'>{title}</p>
            <p className='num'>{subtitle}</p>
        </div>
    </div>
  )
}

export default CardCon