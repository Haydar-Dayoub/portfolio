import React from 'react'
import './ContainerProject.css'

const ContainerProject = (props) => {
  return (
    <div className='containerproject'>
        {props.children}
    </div>
  )
}

export default ContainerProject