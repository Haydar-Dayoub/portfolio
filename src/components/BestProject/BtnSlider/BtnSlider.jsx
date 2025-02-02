import React, { useState } from 'react'
import './BtnSlider.css'

const BtnSlider = ({nextSlide,prevSlide,leftBlack,rightBlack}) => {
  const[hoveron , setHover] = useState(false)
  const[hm , setHm] = useState(false)
  
    
  return (
    <div className='icon-left'>      
        <span className='m'   onClick={prevSlide} onMouseLeave={()=>setHover(false)} onMouseEnter={()=>setHover(true)} style={{backgroundColor : hoveron ?'#0C96E2' : ''}}>
          <i className='chevronleft' class={leftBlack} style={{color : hoveron ?'#FFFFFF':'#A6A6A6'}} ></i></span>

        <span className='m'   onClick={nextSlide} onMouseLeave={()=>setHm(false)} onMouseEnter={()=>setHm(true)} style={{backgroundColor : hm ?'#0C96E2' : ''}}>
          <i className='chevronleft' class={rightBlack} style={{color : hm ?'#FFFFFF':'#A6A6A6'}} ></i></span>           
    </div>  
  )
}

export default BtnSlider