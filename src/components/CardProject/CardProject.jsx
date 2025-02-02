import React from 'react'
import './CardProject.css'
import { Link } from 'react-router-dom'

const CardProject = ({image,title,subtitle,btn,href,link,link2}) => {


  return (
    <div className='cardproject'>
      <a href={href}><img src={image} className='image-project'/></a>     
        <div className='project-name'>
            <h2 className='title-project'>{title}</h2>
            <div className='framework'>
                <p className='html'>{subtitle}</p>
                <Link to={link}><img src={btn}  className='arow' /></Link>                             
            </div>
        </div>
    </div>
  )
}

export default CardProject