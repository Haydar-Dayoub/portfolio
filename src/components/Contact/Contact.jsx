import React from 'react'
import './Contact.css'

const Contact = (props) => {
  return (
    <div className='contact'>
        <p className='con'>Contact</p>
        <h1 className='discuss'>Let's Discuss Your <span className='project'>Project</span></h1>
        {props.children}

    </div>
  )
}

export default Contact