import React, { useContext } from 'react'
import './Nav.css'
import { ThemeContext } from '../../context/ThemeContext'
import { Link, NavLink } from 'react-router-dom'
import { MenuContext } from '../../context/MenuContext'

const Nav = ({name,menu,changeValue,bttn,click,exit}) => {

  const theme = useContext(ThemeContext)
  const x = useContext(MenuContext)



  return (
    <div>
      <div className='parentlistnav'>
      <div className={x} style={{backgroundColor : theme === 'dark' ?  '#FFFFFF' : '#1D2130'}}>
        <ul className='listnav'>
            {menu.map((element,index)=>{
                return(
                  <li key={index} ><a href={element.path} /* className={({isActive})=> isActive ? "active" : ""} */ style={{color : theme === 'dark' ?  '#1D2130' : '#FFFFFF'}}>{element.title} </a></li>
                )
            })}
        </ul>
        <img
        src={`${theme}.png`}
        className='mod'
        id='moon'
        onClick={changeValue} />
        <p className='exit'onClick={exit}>x</p>
        
  </div>

      </div>



          <nav style={{backgroundColor : theme === 'dark' ?  '#FFFFFF' : '#1B2431'}}>
      <Link to={'/'} id='name' ><p className='name' style={{color : theme === 'dark' ?  '#1D2130' : '#FFFFFF'}}>{name}</p></Link>
        
        <ul className='listnav'>
            {menu.map((element,index)=>{
                return(

                  <li key={index} ><a href={element.path}  /* className={({isActive})=> isActive ? "active" : ""} */ style={{color : theme === 'dark' ?  '#1D2130' : '#FFFFFF'}}>{element.title} </a></li>
                )
            })}
        </ul>
        <img
         src={`${theme}.png`}
         className='mode'
         onClick={changeValue} />

        <button className='ss'
        onClick={click}
/*         style={{backgroundColor : theme === 'dark' ? '#1D2130'  :'#FFFFFF' }}
 */        >{/* <i className={bttn}></i> */} <img src={theme === 'dark' ? '/menublack.png' : '/menu.png'} className='menublack' alt="" /></button>




    </nav>
      
    </div>

    
  )
}

export default Nav