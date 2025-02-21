import React from 'react'
import './Risk.css'
import risk from '../../assets/img/risk.png'

const Risk = ({title,subtitle,sub,btn,img}) => {
    return (
        <div className='risk' style={{backgroundImage:`url(${risk})`}}>
            <div className='free'>
                <h1 className='try'>{title}</h1>
                <p className='design'>{subtitle}<span className='sub'>{sub}</span></p>
            </div>
            <div>
                <a href="#contact" className='contactancer'><button className='contactbtn'>{btn}<img src={img} className='arrow'/></button></a>                    
            </div>
        </div>
    )
}

export default Risk