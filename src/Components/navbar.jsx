import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './navbar.css'
import {links} from '../data'
import {FaBars} from 'react-icons/fa'
import {MdOutlineClose} from 'react-icons/md'
import { useState } from 'react'


const Navbar = () => {
    const [isNavShowing,  setIsNavShowing] = useState(false);

  return (
    <nav class="navbar">
        <div className="navbar_container">
            <Link to= "/" className='logo'>
                {/* <img src={Logo} alt="Nav Logo" /> */}
                
                <span className="donate_logo"> Dona.te</span>
            </Link>
            <ul className={`navbar_links ${isNavShowing ? 'show_nav' :'hide_nav'}`}>
                {
                    links.map(({name, path},index)=>{
                        return(
                            <li key={index}>
                                <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''}>{name}</NavLink>
                            </li>
                        )
                    })
                }
                <div className="navbar_buttons">
                    <button className="btn"> Sign In</button>
                    <button className="btn btn-primary">Create fund</button>
                </div>
            </ul>
            <div className="nav_toggle-btn" onClick={() => setIsNavShowing(!isNavShowing)}>
                {
                    isNavShowing ? <MdOutlineClose/> :<FaBars/> 
                }
            </div>
        </div>
    </nav>
  )
}

export default Navbar