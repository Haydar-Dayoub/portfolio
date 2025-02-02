import React, { useContext } from 'react'
import './Hero.css'
import circle from '../../assets/img/circle.png'
import { ThemeContext } from '../../context/ThemeContext'
import pdf from '../../assets/file/cv.pdf'



const Hero = ({title,title1,title2,subtitle,btn,woman,squers}) => {

  const theme =useContext(ThemeContext)
  return (
    <div>   
      <div className='hero' >
        <div className="personal" /* style={{backgroundImage: `url(${'./blur.png'})`}} */>
          <h1 className='title'><span className='hey'>{title}</span>{title1}</h1>
          <h1 className='title front'>{title2}</h1>
          <p className='subtitle'>{subtitle}</p>
          <a href={pdf} download='cv.pdf'><button className='cv' style={{color : theme === 'dark' ? '#1D2130' : '#FFFFFF' ,
            backgroundColor: theme === 'light' ? '#0C96E2' : '#FFFFFF'}}>{btn}</button></a>
          
        </div>
        <div className="photo" /* style={{backgroundImage: `url(${circle})`}} */>
          <img src='/haydra.png' alt="" className='woman'/>
           <img src={squers} className='squers'/>
         </div>
      </div>
      <img src={theme === 'dark' ? '/liner.png' : '/linerwhite.png'} alt="" className='liner' />
    </div>

  )
}

export default Hero