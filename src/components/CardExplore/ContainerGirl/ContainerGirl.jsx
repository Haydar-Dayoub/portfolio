import React from 'react'
import './ContainerGirl.css'

const ContainerGirl = (props) => {
  return (
    <div className='containergirl'>
        {props.children}
         
    </div>
  )
}

export default ContainerGirl