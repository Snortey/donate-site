import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './profileimage.css'
import IMG1 from '../../Assets/photo_2023-07-07_22-47-25.jpg'
import IMG2 from '../../Assets/photo_2023-07-07_22-47-29.jpg'
import IMG3 from '../../Assets/1670487959827 (1).jpg'
import IMG4 from '../../Assets/1670735162569.jpg'
import IMG5 from '../../Assets/photo_2023-07-07_22-47-15.jpg'
import IMG6 from '../../Assets/photo_2023-07-07_22-47-18.jpg'
import {FaArrowRightLong} from 'react-icons/fa6'

const data = [
    {
      id: 1,
      image: IMG1,
    },
    {
      id: 2,
      image: IMG2,
    },
    {
      id: 3,
      image: IMG3,
    },
    {
      id: 4,
      image: IMG4,
    },
    {
      id: 5,
      image: IMG5,
    },
    {
      id: 6,
      image: IMG6,
    }
  ]

const Profileimage = () => {
    return (
        <div className="profile_container">
            {data.map(({id, image}) => {
                return(
                  <div key={id} className="profile_image">
                    <img src={image} alt=''/>
                  </div>
                )
              })
            }
            <Link to={'/signin'} className="link">
                <Link to={'/signin'} className='linksign'> SignIn</Link>
                <FaArrowRightLong className="arrow-icon"/>
            </Link>
          </div>
    )
}

export default Profileimage


  

