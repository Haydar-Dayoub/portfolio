import React from 'react'
import './ContainerContact.css'

const ContainerContact = (props) => {
  return (
    <div className='containercontact'>
        {props.children}
    </div>
  )
}

export default ContainerContact