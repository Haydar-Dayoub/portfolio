import React from 'react'
import './Projects.css'
import arrow from '../../assets/img/arrow-up.png'

const Projects = (props) => {
  return (
    <div className='projects'>
        <p className='con'>Portfolio</p>
        <div className='creative'>
        <h1 className='discusss'>My Creative Works Latest  <span className='project'>Projects</span></h1>
        <a href="https://github.com/Haydar-Dayoub" className='git'><button className='view'>View Github <img src={arrow}/></button></a>
        
        </div>
      {props.children}
        
    </div>
  )
}

export default Projects