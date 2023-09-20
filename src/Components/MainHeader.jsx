import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import ImageSlider from './ImageSlider/ImageSlider'
import Profileimage from './ProfileImage/profileimage'


const MainHeader = () => {
  return (
    <header className='main_header'>
      <div className=" main_header_container"> {/*container*/}
        <div className="main_header_left">
          <h1>Empower Lives, Create Change.</h1>
          <p>Together, let's ignite hope, uplift communities, and create a brighter future.
             <br /> Donate today and be a catalyst for positive change.
          </p>
          <div className="navbar_buttons">
            <Link to={'/createfund'} className="btn btn-primary">Create fund</Link>
            <Link to={'/donations'} className="btn"> Donate</Link>
          </div>
          <div className="main_header_bottom">
            <span>Join 1000+ donators around the globe.</span>
            <Profileimage />
          </div>
        </div>
        <div className="main_header_right">
          <ImageSlider/>
        </div>
      </div>
    </header>
  )
}

export default MainHeader