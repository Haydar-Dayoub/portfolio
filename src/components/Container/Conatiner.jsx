import React from 'react'
import './Container.css'

const Conatiner = (props) => {
  return (
    <div className='container'>
        {props.children}
    </div>
  )
}

export default Conatiner