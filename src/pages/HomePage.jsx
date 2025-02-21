import React, { useContext, useEffect } from 'react'
import Nav from '../components/NavBar/Nav'
// import mode from './assets/img/dark.png'
import Hero from '../components/Hero/Hero'
import squers from '../assets/img/squers.png'
import woman from '../assets/img/wooman.png'
import ParentHero from '../components/ParentHero/ParentHero'
import About from '../components/About/About'
import Education from '../components/Education/Education'
import Experience from '../components/Experience/Experience'
import line5 from '../assets/img/line5.png'
import Conatiner from '../components/Container/Conatiner'
import Risk from '../components/Risk/Risk'
import arrow from '../assets/img/arrow.png'
import Contact from '../components/Contact/Contact'
import ContainerContact from '../components/ContainerContact/ContainerContact'
import image1 from '../assets/img/call.png'
import image2 from '../assets/img/message.png'
import image3 from '../assets/img/location.png'
import List from '../components/List/List'
import CardCon from '../components/CardCon/CardCon'
import Input from '../components/Input/Input'
import Footer from '../components/Footer/Footer'
import Projects from '../components/Projects/Projects'
import ContainerProject from '../components/ContainerProject/ContainerProject'
import sales from '../assets/img/sales1.png'
import icon from '../assets/img/icon.png'
import CardProject from '../components/CardProject/CardProject'
import { ThemeContext } from '../context/ThemeContext'
import {  useState } from 'react'
import { MenuContext } from '../context/MenuContext'

const HomePage = () => {
    const expp = [
        {
            name: 'Experince Designer',
            title : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales ',
            name1: 'Frontend Developer',
            title1 : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales '
        },
        {
            name: 'Experince Designer',
            title : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales ',
            name1: 'Frontend Developer',
            title1 : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales '
        }
    ]
    
    const lista = [
      {
        image: image1,
        title : 'Call me',
        subtitle : '+963930935479'
      },
      {
        image: image2,
        title : 'Email me',
        subtitle : 'haydardayoub369@gmail.com'
      },
      {
        image: image3,
        title : 'Address',
        subtitle : 'Lattakia,Syria'
      },
    
    ]
    
    const projects1 = [
      {
        image : sales,
        title : 'Sales platform',
        subtitle : 'Html , Css3',
        btn : icon,
        href : "https://haydar-dayoub.github.io/sales/",
        link :'/sales'
    
      },
      {
        image : `/rent-up.png`,
        title : 'Rent-up platform',
        subtitle : 'Html , Css3',
        btn : icon,
        href : "https://haydar-dayoub.github.io/rent-up/",
        link :'/rent-up'
    
      },
      {
        image : `/furniture.png`,
        title : 'Furniture platform',
        subtitle : 'Html , Css3',
        btn : icon,
        href : " https://haydar-dayoub.github.io/furniture/",
        link :'/furniture'
    
      },
      {
        image : `/ski.png`,
        title : 'Ski platform',
        subtitle : 'Html , Css3',
        btn : icon,
        href : "https://haydar-dayoub.github.io/ski/",
        link :'/ski'
    
      },
      {
        image : `/flora1.png`,
        title : 'Flora platform',
        subtitle : 'Html , Css3',
        btn : icon,
        href : "https://haydar-dayoub.github.io/flora-responsive/",
        link :'/flora'
    
      },
      {
        image : `/travel.png`,
        title : 'Travel platform',
        subtitle : 'Html , Css3',
        btn : icon,
        href : "https://haydar-dayoub.github.io/travel-react/",
        link :'/travel'
    
      },
      {
        image : `/edu.png`,
        title : 'Educational Platform',
        subtitle : 'Html , Css3',
        btn : icon,
        href : "https://haydar-dayoub.github.io/edu-jar/",
        link :'/edu'
    
      }
/*       {
        image : `./public/trippy1.png`,
        title : 'Sales platform',
        subtitle : 'Html , Css3',
        btn : icon
    
      }, */
    ]
    // const theme = useContext(ThemeContext)

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

    const[theme , setTheme] = useState(firstValueTheme())
    
    useEffect(()=>{
        localStorage.setItem('theme' , JSON.stringify(theme))

    },[theme])

    const[menu , setMenu] = useState(firstValueMenu())

    useEffect(()=>{
        localStorage.setItem('menu' , JSON.stringify(menu))

    },[menu])
    // window.scrollTo(0,0)

    
    
    

  return (
    <>

    <ThemeContext.Provider value={theme}>
        <MenuContext.Provider value ={menu}>


        <div className={theme}>
            <div id='home'>
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
                    /* href={() => scrollToSection(section1)} */ bttn="fa-solid fa-bars"
                    changeValue={() =>{
                        setTheme(theme === 'light' ? 'dark' : 'light')
                    }} click={()=>setMenu(menu === 'none' ? 'visible' : 'none')} 
                        exit={()=>setMenu('none')}/>

                <ParentHero>
                    <Hero title='HEY! ' title1='I’m Haydar,' title2='Frontend Developer' subtitle='Agency-quality Webflow websites with the personal touch of a freelancer and  I’ve been helping businesses to solve their problems with my design for 2 years.
                    ' btn='Download Cv' squers={squers} woman={woman}/>
                </ParentHero>
                
            </div>



            <div /* id='about' */>
                <About image={theme === 'dark' ? '/language.png' : '/languagedark.png'} title='About Me' desc='Communications and Electronics Engineer specialized in designing and developing front-end websites using different libraries and frameworks to get the desired result.'/>
            </div>
            


            <div id='edu'>
                <Education>
                    <Conatiner>
                        {expp.map((element,index)=>{
                            return(
                                <Experience key={index} image={line5} name={element.name}
                                title={element.title} name1={element.name1} title1={element.title1}/>
                            )
                        })}
                    </Conatiner>
                </Education>
            </div>


            <Risk title='Try me out, risk free!' subtitle='If you’re not happy with the design after the first draft,
                I’ll refund your deposit,' sub='no questions asked' btn='Contact' img={arrow}/>

            <div id='projects'>
                <Projects>
                    <ContainerProject>
                        {projects1.map((element,index) =>{
                            return(
                                <CardProject key={index} image={element.image} title={element.title}
                                subtitle={element.subtitle} btn={element.btn} href={element.href} link={element.link}/>
                            )
                        })}
                    </ContainerProject>
                </Projects>
            </div>

            <div id='contact'>
                <Contact>
                    <ContainerContact>
                    <List>
                        {lista.map((element,index)=>{
                        return(
                            <CardCon key={index} img={element.image} title={element.title} subtitle={element.subtitle}/>
                        )
                        })}
                    </List>
                    <Input bttn='Send Message'/>
                    </ContainerContact>
                </Contact>
            </div>

            <Footer/>
        </div>

        </MenuContext.Provider>

    </ThemeContext.Provider>

    </>
    )
}

export default HomePage