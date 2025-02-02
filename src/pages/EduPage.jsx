import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { useState } from 'react'
import Nav from '../components/NavBar/Nav'
import BestProject from '../components/BestProject/BestProject'
import Footer from '../components/Footer/Footer'
import Edu from '../components/RentUp/Edu'
import { PopContext } from '../context/PopContext'
import { MenuContext } from '../context/MenuContext'

const EduPage = () => {
    const firstValueTheme = () =>{
        const theme = localStorage.getItem('theme')
        return(
            theme ? JSON.parse(theme) : 'dark'
        )
    }
    const firstValueMenu = () =>{
        const menu = localStorage.getItem('menu')
        return(
            menu ? JSON.parse(menu) : 'none'
        )
    }
    const[menu , setMenu] = useState(firstValueMenu())




    const[theme , setTheme] = useState(firstValueTheme())
    const[popup , setPopup] =useState('none')
    const pop = useContext(PopContext)
    useEffect(()=>{
        localStorage.setItem('theme' , JSON.stringify(theme))

    },[theme])
    useEffect(()=>{
        localStorage.setItem('menu' , JSON.stringify(menu))

    },[menu])
    window.scrollTo(0,0)
    
    
  return (
    <div>
                <ThemeContext.Provider value={theme}>

                    <MenuContext.Provider value={menu}>
                    <div className={theme}>
                <div>
                    <div className={popup}>
                        <span className='close' onClick={()=>setPopup(pop === 'block' ? 'block' : 'none' )}>x</span>
                        {/* <img src="./close.png" alt="" className='close' /> */}
                        <img src='/edu.png' alt="" className='img-popup' />
                    </div>
                    <Nav
                        name='Haydar'
                        menu={[                            
                            {
                                title :  'Home',
                                path : '#home'
                            },
                            {                           
                                title :  'About me',
                                path : '#about'
                            },
                            {
                                title :  'Education',
                                path:'#edu'
                            },
                            {
                                title :  'Projects',
                                path: '#projects'
                            },
                            {
                                title :  'Contact',
                                path : '#contact'
                            }
                        ]
                        }
                    bttn="fa-solid fa-bars"
                    changeValue={() =>{
                        setTheme(theme === 'light' ? 'dark' : 'light')
                        }} click={()=>setMenu(menu === 'none' ? 'visible' : 'none')} 
                        exit={()=>setMenu('none')}/>
                </div>
                <Edu value={()=>setPopup(pop === 'block' ? 'none' : 'block' )}/>
                <BestProject/>
                <Footer/>
                
            </div>

                    </MenuContext.Provider>

        </ThemeContext.Provider>
        
        
    </div>
  )
}

export default EduPage