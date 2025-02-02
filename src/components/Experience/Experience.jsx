import React from 'react'
import './Experience.css'

const Experience = ({image,name,title,name1,title1}) => {
  return (  
    <div className='exp'>
        <img src={image} className='line' />
        <div className='front'>
            <div className='child1'>
                <h2 className='name'>{name}</h2>
                <p className='lorem'>{title}</p> 
            </div>
            <div className='child2'>
                <h2 className='name'>{name1}</h2>
                <p className='lorem'>{title1}</p> 
            </div>         
        </div>
    </div>
  )
}

export default Experience