import React, { useEffect, useState } from 'react'
import './ImageSlider.css'
import IMG1 from '../../Assets/1670487955908.jpg'
import IMG2 from '../../Assets/1670487957332.jpg'
import IMG3 from '../../Assets/1670487959827 (1).jpg'
import IMG4 from '../../Assets/1670735162569.jpg'



const data =[
  {
    image:IMG1,
    description1:"You have the power to make a difference today." , 
    description2:"Change a life!" , 
  },
  {
    image:IMG2, 
    description1:"You have the power to make a difference today." , 
    description2:"Change a life!" ,
  },
  {
    image:IMG3,
    description1:"You have the power to make a difference today." ,  
    description2:"Change a life!" ,
  },
  // {
  //   image:IMG4,
  //   description1:"You have the power to make a difference today." ,  
  //   description2:"Change a life!" ,
  // }
]
const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const [autoPlay,setAutoPlay] = useState(true);
  let timeOut = null

  useEffect (()=>{
    timeOut = autoPlay && setTimeout(()=>{
      slideRight()
    },9000)
  }, [current, autoPlay])

  const slideRight = () =>{
    setCurrent(current => (current === data.length - 1 ? 0 : current + 1))
  };
  // const slideLeft = () =>{
  //   setCurrent (current ===0 ? data.length-1: current-1)
  // };
  
  return (
      <div className="carousel_wrapper" >{
        data.map(({image,description1,description2},index) =>{
        return(
          <div className={index === current? "carousel_card carousel_card-active" : "carousel_card"} key={index} onMouseEnter={() => {setAutoPlay(false); clearTimeout(timeOut)}} onMouseLeave={() => {setAutoPlay(true)}}>
            <img className="carousel_image" src={image} alt=''/>
            <h4 className="carousel_text">{description1}<br/>{description2}</h4>
          </div>
        )
      })
      }
      </div>  
  )
}

export default ImageSlider