import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import AVATAR1 from '../Assets/photo_2023-07-07_22-47-15.jpg'
import AVATAR2 from '../Assets/photo_2023-07-07_22-47-18.jpg'
import AVATAR3 from '../Assets/photo_2023-07-07_22-47-25.jpg'
import AVATAR4 from '../Assets/photo_2023-07-07_22-47-29.jpg'
import {MdOutlineKeyboardArrowLeft} from 'react-icons/md'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'



const data =[
    {
      id:1,
      avatar: AVATAR1,
      name: 'Joseph Etse',
      quote: '“Lorem ipsum dolor sit amet consectetur. Tristique porttitor arcu pulvinar eu consequat quisque id at.”',
    },
    {
      id:2,
      avatar: AVATAR2,
      name: 'Gilbert Amo',
      quote: '“Lorem ipsum dolor sit amet consectetur. Tristique porttitor arcu pulvinar eu consequat quisque id at.”',
    },
    {
      id:3,
      avatar: AVATAR3,
      name: 'Isaac Kwarteng',
      quote: '“Lorem ipsum dolor sit amet consectetur. Tristique porttitor arcu pulvinar eu consequat quisque id at.”',
    },
    {
      id:4,
      avatar: AVATAR4,
      name: 'Papa Arhin',
      quote: '“Lorem ipsum dolor sit amet consectetur. Tristique porttitor arcu pulvinar eu consequat quisque id at.”',
    }
  ]
   
const Inspired = () => {
  const [index,setIndex] =useState(0)

  const previousCardHandler = () =>{

  }

  const nextCardHandler = () =>{
    setIndex(prev => prev+1)
  }

  return (
    <section className="container inspired_container">
        <div className="inspired_content">
            <h2>Be inspired</h2>
            <p className='inspiredParagraph'>Lorem ipsum dolor sit amet consectetur. Tristique porttitor arcu pulvinar eu consequat quisque id at.</p>
            <div className="inspired_details">
                    <div className="inspired">
                        <p className='inspired_details-paragraph'>"It's not how much we give but how much love we put into giving."</p>
                        <h4>Mother Teresa</h4>
                    </div>
                    <div className="inspired2">
                        <div className="inspired-right">{
                            data.map(({avatar, name, quote}, index) =>{
                                return(
                                    <div key={index} className="inspired_Slider">
                                        <p className='inspired_Quote'>{quote}</p>
                                        <div className="inspired_profile">
                                            <img src={avatar} alt={name} />
                                            <h5>{name}</h5>
                                        </div>
                                </div>
                                )
                                
                            })
                        }</div>
                        <div className="arrow_buttons">
                            <MdOutlineKeyboardArrowLeft onClick={previousCardHandler} className='arrow swiper-button-prev'/>
                            <MdOutlineKeyboardArrowRight onClick={nextCardHandler} className='arrow swiper-button-next'/>
                        </div>
                    </div>
                    
                </div>
        </div>
    </section>
  )
}

export default Inspired