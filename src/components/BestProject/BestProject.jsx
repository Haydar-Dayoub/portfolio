import React from 'react'
import './BestProject.css'
import CardProject from '../CardProject/CardProject'
import icon from '../../assets/img/icon.png'
import sales from '../../assets/img/sales1.png'
import { useState } from 'react'
import BtnSlider from './BtnSlider/BtnSlider'




const BestProject = () => {
    
    const projects1 = [
        {
            image : sales,
            title : 'Sales platform',
            subtitle : 'Html , Css3',
            btn : icon,
            href : "https://haydar-dayoub.github.io/sales/",
            link :'/sales',
            id :1
        
            },
            {
            image : `/rent-up.png`,
            title : 'Rent-up platform',
            subtitle : 'Html , Css3',
            btn : icon,
            href : "https://haydar-dayoub.github.io/rent-up/",
            link :'/rent-up',
            id:2
        
            },
            {
            image : `/furniture.png`,
            title : 'Furniture platform',
            subtitle : 'Html , Css3',
            btn : icon,
            href : " https://haydar-dayoub.github.io/furniture/",
            link :'/furniture',
            id : 3
        
            },
            {
            image : `/ski.png`,
            title : 'Sales platform',
            subtitle : 'Html , Css3',
            btn : icon,
            href : "https://haydar-dayoub.github.io/ski/",
            link :'/ski',
            id:4
            },
            {
            image : `/flora1.png`,
            title : 'Flora platform',
            subtitle : 'Html , Css3',
            btn : icon,
            href : "https://haydar-dayoub.github.io/flora-responsive/",
            link :'/flora',
            id:5
        
            },
            {
            image : `/travel.png`,
            title : 'Travel platform',
            subtitle : 'Html , Css3',
            btn : icon,
            href : "https://haydar-dayoub.github.io/travel-react/",
            link :'/travel',
            id:6
        
            },
            {
            image : `/edu.png`,
            title : 'Educational Platform',
            subtitle : 'Html , Css3',
            btn : icon,
            href : "https://haydar-dayoub.github.io/edu-jar/",
            link :'/edu',
            id:7
        
            }
    /*       {
            image : `./public/trippy1.png`,
            title : 'Sales platform',
            subtitle : 'Html , Css3',
            btn : icon
        
            }, */
        ]
        console.log(projects1.length)

        const [slideIndex , setSlideIndex] = useState(0)
        
        const nextSlide = ()=>{
            if(slideIndex !== projects1.length-5){
                setSlideIndex(slideIndex + 1)
            }
            else if(slideIndex === projects1.length-5){
                setSlideIndex(0)
            }
        }

        const prevSlide = () =>{
            if(slideIndex  === 0){
                setSlideIndex(projects1.length-5)
            }else{
                setSlideIndex(slideIndex - 1)
            }
        }



    return (
        <div className='bestproject'>       
            <p className='con'>Portfolio</p>
            <div className='creative'>
                <h1 className='discusss'>The Best <span className='project'>Projects</span></h1>
                <BtnSlider prevSlide={prevSlide} nextSlide={nextSlide}
                 leftBlack="fa-solid fa-chevron-left"
                 rightBlack="fa-solid fa-chevron-right"
                 /> 
            </div>
            <div className='parent-container' style={{overflow: 'hidden' }}>
                <div className="containerdetails" style={{transform:`translateX(-${slideIndex * 107}%)`}}>
                    {
                        projects1.map((element,index)=>{
                            return(
                                <div className='slide' key={index} > 
                                    <CardProject
                                        key={index}
                                        image={element.image}
                                        title={element.title}
                                        subtitle={element.subtitle}
                                        btn={element.btn}
                                        href={element.href}
                                        link={element.link}/>
                                </div>
                                )
                            })
                    }              
                </div>
            </div>
        </div>
    )
}

export default BestProject