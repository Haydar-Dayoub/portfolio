import React from 'react'
import './Footer.css'
import facebook from '../../assets/img/facebook.png'
import instagram from '../../assets/img/instagram.png'
import linked from '../../assets/img/linkedin.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='m'>
            <p className='right'>@ 2024. All Rights Reserved</p>
            <p className='dev'>Develpoment by Haydra</p>
            <div className='soicalmedia'>
                <a href="https://www.facebook.com/haydra999"><img src={facebook} alt="" /></a>
                <a href="https://www.instagram.com/haydara_dayoub"><img src={instagram} alt="" /></a>
                <a href=""><img src={linked} alt="" /></a>
            </div>
        </div>


        

    </div>
  )
}

export default Footer