import React from 'react'
import './Input.css'

const Input = ({bttn}) => {
  return (
      <div className='input'>
        <div className='s'>
            <input type="text" placeholder='Full name' className='email' />
            <input type="email" placeholder='Your email' className='email'/>
        </div>
        <div>
            <input type="number" placeholder='Phone number' className='phone'/>
        </div>
        <textarea type='text' placeholder='Message' className='area'/>
        <div>
        <button className='send'>{bttn}</button>
        </div>
        
      
    </div>
  )
}

export default Input





