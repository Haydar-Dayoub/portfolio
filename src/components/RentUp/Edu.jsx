import React, { useContext } from 'react'
import icon from '../../assets/img/icon.png'
import { PopContext } from '../../context/PopContext'
import { ThemeContext } from '../../context/ThemeContext'

const Edu = ({value}) => {

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
            basic : 'Libraries :',
            lan : 'React.js'

        }
    ]
    const pop = useContext(PopContext)
    const theme =useContext(ThemeContext)

  return (
    
    <div>
        <PopContext.Provider value={pop}>



        <div className='subtitle-part1'>
            
        <div className='hover'>
            <img src='/edu.png' className='project-img' alt="" />
            <div className='hoverimg'>
                <img
                    src="./Full_alt.png"
                    onClick={value}
                    className='full'
                    alt="" />
                <a href="https://haydar-dayoub.github.io/edu-jar/"><img src="./Icon(2).png" alt="" /></a>              
            </div>

            </div>

        <div className='parent-platform'>
            <div>
                <div className='plat'>
                    <div>
                        <h2 className='website-name'>Edu-jar Platform</h2>
                        <p className='date'>11-11-2024</p>
                    </div>
                    <a href="https://haydar-dayoub.github.io/edu-jar/"><img src={icon}  alt="" /> </a>
                </div>
                <p className='desc'>An educational platform that contains many courses, lectures, and recorded video clips for many academic courses... where you can register on our platform and attend sessions directly or recorded... Our educational materials include software and network programming in addition to teaching languages ​​and more. </p>
                {
                    titles.map((element,index)=>{
                        return(
                            <p className='basic' key={index}> {element.basic}<span className='lan'> {element.lan}</span></p>
                        )
                    })
                }
                <a href="https://github.com/Haydar-Dayoub/edu-jar"><button className='repo'>Github Repo</button></a>
                
            </div>
        </div>       
    </div>
    <img src={theme === 'dark' ? '/liner.png' : '/linerwhite.png'} alt="" className='liner' />
        </PopContext.Provider>


        
    </div>
  )
}

export default Edu