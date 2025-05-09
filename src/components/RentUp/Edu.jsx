/* import React, { useContext } from 'react'
import '../SubTitle/SubTitle.css'

import icon from '../../assets/img/icon.png'
import { PopContext } from '../../context/PopContext'
import { ThemeContext } from '../../context/ThemeContext'
import { useParams } from 'react-router-dom'

const Edu = ({value}) => {


    const haydar = [
        {
            img : '/sales1.png',
            id : 1,
            website_name: 'sales platform',
            date : '12-5-2024',
            icon : './public/icon.png',
            demo: "https://haydar-dayoub.github.io/sales/",
            repo : "https://github.com/Haydar-Dayoub/sales",
            basic : 'Html5 , Css',
            framework: 'no framework',
            library: 'no libraries',
            desc : 'An electronic platform concerned with selling electronic products such as phones, wired and wireless headphones, in addition to smart watches, i.e. everything you need in terms of technology and technology is available'
        },
    
        {
            img : '/rent-up.png',
            id : 2,
            website_name: 'Rent-Up Platform',
            date : '12-5-2024',
            icon : './public/icon.png',
            demo: "https://haydar-dayoub.github.io/rent-up/",
            repo : "https://github.com/Haydar-Dayoub/rent-up",
            basic : 'Html5 , Css',
            framework: 'no framework',
            library: 'no libraries',
            desc : 'Rent-up platform is an electronic platform written in the language  html ,css It specializes in searching for houses, studios and villas in the most beautiful areas around the world, whether for sale or rent. This platform is easy to use and payment can be made through it in a variety of ways to pay the price of the property.'
        },
    
        {
            img : '/furniture.png',
            id: 3,
            website_name: 'furniture platform',
            date : '12-5-2024',
            icon : './public/icon.png',
            demo: " https://haydar-dayoub.github.io/furniture/",
            repo : "https://github.com/Haydar-Dayoub/furniture",
            basic : 'Html5 , Css',
            framework: 'no framework',
            library: 'no libraries',
            desc: 'An electronic platform concerned with selling electronic products such as phones, wired and wireless headphones, in addition to smart watches, i.e. everything you need in terms of technology and technology is available'
        },
    
        {
            img : '/ski.png',
            id : 4,
            website_name: 'ski platform',
            date : '12-5-2024',
            icon : './public/icon.png',
            demo: "https://haydar-dayoub.github.io/ski/",
            repo : "https://github.com/Haydar-Dayoub/ski",
            basic : 'Html5 , Css',
            framework: 'no framework',
            library: 'no libraries',
            desc: 'It is a website that displays snow activities in the high mountains and provides a set of tips about the snowy places that are recommended according to the visitors’ opinion. It also contains many advantages such as booking tickets for these sites and giving you the best destination.'
        },
    
        {
            img : '/flora1.png',
            id: 5,
            website_name: 'flora platform',
            date : '12-5-2024',
            icon : './public/icon.png',
            demo: "https://haydar-dayoub.github.io/flora-responsive/",
            repo : "https://github.com/Haydar-Dayoub/flora-responsive",
            basic : 'Html5 , Css',
            framework:'no framework' ,
            library: 'no libraries',
            desc : "An electronic platform specialized in discovering modern homes in residential suburbs and large cities.It displays many of the supposed decorations within these homes that specialists turn into reality and many, many advantages.Visit our website to learn more"
        },
    
        {
            img : '/travel.png',
            id: 6,
            website_name: 'travel platform',
            date : '12-5-2024',
            icon : './public/icon.png',
            demo :  "https://haydar-dayoub.github.io/travel-react/",
            repo:   "https://github.com/Haydar-Dayoub/travel-react",
            basic : 'Html5 , Css',
            framework: 'no framework',
            library: 'React.js',
            desc : 'travel a website specialized in displaying tourist places around the world, where we provide a detailed explanation of tourist attractions, whether in Asia, Europe or Africa... while providing many offers, discounts and privileges to our customers.'
        },
    
        {
            img : '/edu.png',
            id : 7,
            website_name: 'edu platform',
            date : '12-5-2024',
            icon : './public/icon.png',
            demo : "https://haydar-dayoub.github.io/edu-jar/",
            repo: "https://github.com/Haydar-Dayoub/edu-jar",
            basic :'Html5 , Css , Javascript' ,
            framework:'no framework' ,
            library: 'React.js',
            desc : 'An educational platform that contains many courses, lectures, and recorded video clips for many academic courses... where you can register on our platform and attend sessions directly or recorded... Our educational materials include software and network programming in addition to teaching languages ​​and more.'
        }
    
    ]


    const {id} = useParams();
    const project = haydar.find((p) => p.id === parseInt(id));
    console.log(project)

    if(!project){
        return <h2>project not found</h2>
    }


    const pop = useContext(PopContext)
    const theme =useContext(ThemeContext)

  return (
    
    <div>
        <PopContext.Provider value={pop}>



        <div className='subtitle-part1'>
            
        <div className='hover'>
            <img src={project.img} className='project-img' alt="" />
            <div className='hoverimg'>
                <img
                    src="/Full_alt.png"
                    onClick={value}
                    className='full'
                    alt="" />
                <a href={project.demo}><img src="/Icon(2).png" alt="" /></a>              
            </div>

            </div>

        <div className='parent-platform'>
            <div>
                <div className='plat'>
                    <div>
                        <h2 className='website-name'>{project.website_name}</h2>
                        <p className='date'>{project.date}</p>
                    </div>
                    <a href={project.demo}><img src={icon}  alt="" /> </a>
                </div>
                <p className='desc'>{project.desc} </p>

                <p className='basic' > Basic Languages :<span className='lan'> {project.lan}</span></p>
                <p className='basic' > Framework :<span className='lan'> {project.framework}</span></p>
                <p className='basic' > Libraries :<span className='lan'> {project.library}</span></p>
                <a href={project.repo}><button className='repo'>Github Repo</button></a>
                
            </div>
        </div>       
    </div>
    <img src={theme === 'dark' ? '/liner.png' : '/linerwhite.png'} alt="" className='liner' />
        </PopContext.Provider>


        
    </div>
  )
}

export default Edu */