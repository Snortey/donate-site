import React from 'react'
import {Link} from 'react-router-dom'
import {BiSolidUser} from 'react-icons/bi'
import {BiSolidLockAlt} from 'react-icons/bi'
import {FcGoogle} from 'react-icons/fc'
import {BsFacebook} from 'react-icons/bs'
import {BsApple} from 'react-icons/bs'
import {BiCheckDouble} from 'react-icons/bi'
import {MdEmail} from 'react-icons/md'
import './UserSignUp.css'

const UserSignUp = () => {
  return (
    <section className="signup_container">
      <Link to={'/'} className='dona'>Dona.te</Link>
      <form action="" className='form_container'>
        <div className="signup_header">
          <h3 class="signup_title">Sign up</h3>
          <div className="title_bottom">
            <h4>Already existing user / organization?</h4>
            <Link to={'/signin'} class="create">Sign in</Link>
          </div>
        </div>
        <div className="signup_content">
            <div class="input_field2">
                <BiSolidUser/>
              <input type="text" placeholder="Full name" />
            </div>
            <div class="input_field2">
                <MdEmail/>
              <input type="text" placeholder="Email" />
            </div>
            <div class="input_field2">
              <BiSolidLockAlt/>
              <input type="password" placeholder="Password" />
            </div>
            <div class="input_field2">
              <BiCheckDouble/>
              <input type="password" placeholder="Confirm Password" />
            </div>
            <Link to={'/'} className="btn btn-primary">Sign up</Link>
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
        <div className="signup_footer">
          <h4>Need help signing in?</h4>
          <Link to={'/'} className="contactUs">Contact us</Link>
        </div>
      </form>
    </section>
  )
}

export default UserSignUp