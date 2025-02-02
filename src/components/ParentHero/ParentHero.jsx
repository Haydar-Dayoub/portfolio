import React from 'react'
import './ParentHero.css'

import lines from '../../assets/img/lines.png'


const ParentHero = (props) => {
  return (
    <div className='parenthero' style={{backgroundImage:`url(${lines})`}}>
        {props.children}

    </div>
  )
}

export default ParentHero