import React from 'react'
import './About.css'
import about from '../../assets/img/AboutCircle.png'
import tringle from '../../assets/img/tringle.png'

const About = ({image,title,desc}) => {

    const skils = [
        {
            skil : 'HTML5',
            width: '90%'

        },
        {
            skil : 'CSS3',
            width : '80%'

        },
        {
            skil : 'Javascript',
            width : '65%'

        },
        {
            skil : 'React',
            width : '60%'

        }
    ]
  return (

    <div className='about' id='about'>
        <div>
            <img src={image} className='img' />
        </div>
        <div>
            <h1 className='title'>{title}</h1>
            <p className='desc'>{desc}</p>
            <div className="skills">
                {skils.map((element,index)=>{
                    return(
                        <div key={index} className='part-skil'>
                            <h5 className='skil'>{element.skil}</h5>
                            <p className='p'>
                                <span  style={{width:element.width}} className='span1'>
                                    <img src={about} className='rec' />
                                    <span className='percent'>
                                        {element.width}
                                        <img src={tringle} className='tringle' />
                                    </span>
                                </span>
                            </p>
                        </div>                      
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default About