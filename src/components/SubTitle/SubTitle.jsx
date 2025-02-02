import React, { useContext, useState } from 'react'
import './SubTitle.css'
import icon from '../../assets/img/icon.png'
import sales from '../../assets/img/sales1.png'
import { Link, useParams } from 'react-router-dom'
import { PopContext } from '../../context/PopContext'
import { ThemeContext } from '../../context/ThemeContext'



const SubTitle = ({value}) => {
    const id = useParams()
    console.log(id)

    const subject =[
        {
            img : sales,
            website_name: 'sales platform',
            date : '12-5-2024',
            icon : icon,
            desc : 'An electronic platform concerned with selling electronic products such as phones, wired and wireless headphones, in addition to smart watches, i.e. everything you need in terms of technology and technology is available'

        },
        {
            img : '/rent-up.png',
            website_name: 'sales platform',
            date : '12-5-2024',
            icon : icon,
            desc : 'An electronic platform concerned with selling electronic products such as phones, wired and wireless headphones, in addition to smart watches, i.e. everything you need in terms of technology and technology is available'

        }
    ]

    const titles = [
        {
            basic : 'Basic Languages :',
            lan : 'Html5 , Css , Javascript'

        },
        {
            basic : 'Framework :',
            lan : 'no framework'

        },
        {
            basic : 'Libraries : ',
            lan : 'no libraries'

        }
    ]

    

    const pop = useContext(PopContext)
    const theme =useContext(ThemeContext)


  return (
    <div className='desc-project'>

        <PopContext.Provider value={pop}>

        <div className='subtitle-part1'>


            <div className='hover'>
            <img src={sales} className='project-img' alt="" />
            <div className='hoverimg'>
                <img
                    src="./Full_alt.png"
                    onClick={value}
                    className='full'
                    alt="" />
                <a href="https://haydar-dayoub.github.io/sales/"><img src="./Icon(2).png" alt="" /></a>              
            </div>

            </div>

            <div className='parent-platform'>
                <div>
                    <div className='plat'>
                        <div>
                            <h2 className='website-name'>Sales Platform</h2>
                            <p className='date'>12-5-2024</p>
                        </div>
                        <a href="https://haydar-dayoub.github.io/sales/"><img src={icon}  alt="" /> </a>
                                    
                    </div>
                    <p className='desc'>An electronic platform concerned with selling electronic products such as phones, wired and wireless headphones, in addition to smart watches, i.e. everything you need in terms of technology and technology is available</p>
                    {
                        titles.map((element,index)=>{
                            return(
                                <p className='basic' key={index}> {element.basic}<span className='lan'> {element.lan}</span></p>
                            )
                        })
                    }
                    <a href="https://github.com/Haydar-Dayoub/sales"><button className='repo'>Github Repo</button></a>
                    
                </div>
            </div>       
        </div>
        <img src={theme === 'dark' ? '/liner.png' : '/linerwhite.png'} alt="" className='liner' />

        </PopContext.Provider>

        


    </div>

  )
}

export default SubTitle