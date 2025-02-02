import React, { useContext } from 'react'
import icon from '../../assets/img/icon.png'
import { PopContext } from '../../context/PopContext'
import { ThemeContext } from '../../context/ThemeContext'

const Flora = ({value}) => {

    const titles = [
        {
            basic : 'Basic Languages :',
            lan : 'Html5 , Css '

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
    <div>
        <PopContext.Provider value={pop}>
        <div className='subtitle-part1'>
        <div className='hover'>
            <img src='/flora1.png' className='project-img' alt="" />
            <div className='hoverimg'>
                <img
                    src="./Full_alt.png"
                    onClick={value}
                    className='full'
                    alt="" />
                <a href="https://haydar-dayoub.github.io/flora-responsive/"><img src="./Icon(2).png" alt="" /></a>              
            </div>

            </div>
            <div className='parent-platform'>
                <div>
                    <div className='plat'>
                        <div>
                            <h2 className='website-name'>Rent-Up Platform</h2>
                            <p className='date'>5-7-2024</p>
                        </div>
                        <a href="https://haydar-dayoub.github.io/flora-responsive/"><img src={icon}  alt="" /></a>
                                       
                    </div>
                    <p className='desc'>An electronic platform specialized in discovering modern homes in residential suburbs and large cities.
It displays many of the supposed decorations within these homes that specialists turn into reality and many, many advantages.
Visit our website to learn more</p>
                    {
                        titles.map((element,index)=>{
                            return(
                                <p className='basic' key={index}> {element.basic}<span className='lan'> {element.lan}</span></p>
                            )
                        })
                    }
                    <a href="https://github.com/Haydar-Dayoub/flora-responsive"><button className='repo'>Github Repo</button></a>
                    
                </div>
            </div>       
        </div>
        <img src={theme === 'dark' ? '/liner.png' : '/linerwhite.png'} alt="" className='liner' />

        </PopContext.Provider>


        
    </div>
  )
}

export default Flora