import React from 'react'
import './SignIn.css'
import {Link, NavLink} from 'react-router-dom'
import BackgroundPic from '../../Assets/1670735162569.jpg'
import {BiSolidUser} from 'react-icons/bi'
import {BiSolidLockAlt} from 'react-icons/bi'
import {FcGoogle} from 'react-icons/fc'
import {BsFacebook} from 'react-icons/bs'
import {BsApple} from 'react-icons/bs'

const SignIn = () => {
  return (
    <section className="signin_container">
      <h2>Dona.te</h2>
      <form action="" className='form_container'>
        <div className="signin_header">
          <h3 class="signin_title">Sign in</h3>
          <div className="title_bottom">
            <h4>New user / organization?</h4>
            <Link to={'/'} class="create">Create an Account</Link>
          </div>
        </div>
        <div className="signin_content">
            <div class="input_field2">
              <BiSolidUser/>
              <input type="text" placeholder="Email / Organization email" />
            </div>
            <div class="input_field2">
              <BiSolidLockAlt/>
              <input type="password" placeholder="Password" />
            </div>
            <Link to={'/'} className="btn btn-primary">Sign in</Link>
        </div>
        <div className="social_content">
          <div className="continue">
            <span className="dash"></span>
            <h4>or continue with</h4>
            <span className="dash"></span>
          </div>
          <div className="social_icons">
            {/* import social_icons here google facebook apple*/}
            <FcGoogle className='google'/>
            <BsFacebook className='facebook'/>
            <BsApple className='apple'/>
          </div>
        </div>
        <div className="signin_footer">
          <h4>Need help signing in?</h4>
          <Link to={'/'} className="contactUs">Contact us</Link>
        </div>
      </form>
    </section>
  )
}

export default SignIn