import React from 'react'
import './Education.css'
import edu1 from '../../assets/img/edu1.png'



const Education = (props) => {
  return (
    <div className='education'>
        <img src={edu1} className='edu1' />
        <img src={edu1} className='edu2' />
        <div className='first'>
            <p className='edu'>Education and Experience</p>
            <h1 className='ex'>Education and Experience</h1>
        </div>
        {props.children}
    </div>
  )
}

export default Education