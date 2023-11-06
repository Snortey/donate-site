import React from "react";
import { Link } from "react-router-dom";
import { BiSolidUser } from "react-icons/bi";
import { BiSolidLockAlt } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { BsApple } from "react-icons/bs";
import { BiCheckDouble } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import "./OrganizationSignUp.css";

const OrganizationSignUp = () => {
  return (
    <section className="oganization_signup_container">
      <Link to={"/"} className="dona">
        Dona.te
      </Link>
      <form action="" className="oganization_signup_form_container">
        <div className="oganization_signup_header">
          <h3 class="oganization_signup_title">Sign up</h3>
          <div className="oganization_signup_bottom">
            <h4>Already existing user / organization?</h4>
            <Link to={"/signin"} class="oganization_signup_create">
              Sign in
            </Link>
          </div>
        </div>
        <div className="oganization_signup_content">
          <div class="oganization_signup_input_field2">
            <MdEmail />
            <input type="text" placeholder="Email / Organization email" />
          </div>
          <div class="oganization_signup_input_field2">
            <BiSolidUser />
            <input type="text" placeholder="Name of Organization" />
          </div>
          <div class="oganization_signup_input_field2">
            <BiSolidLockAlt />
            <input type="password" placeholder="Password" />
          </div>
          <div class="oganization_signup_input_field2">
            <BiCheckDouble />
            <input type="password" placeholder="Confirm Password" />
          </div>
          <Link to={"/locations"} className="btn btn-primary">
            Sign up
          </Link>
        </div>
        <div className="oganization_signup_social_content">
          <div className="oganization_signup_continue">
            <span className="oganization_signup_dash"></span>
            <h4>or continue with</h4>
            <span className="oganization_signup_dash"></span>
          </div>
          <div className="oganization_signup_social_icons">
            {/* import social_icons here google facebook apple*/}
            <FcGoogle className="oganization_signup_google" />
            <BsFacebook className="oganization_signup_facebook" />
            <BsApple className="oganization_signup_apple" />
          </div>
        </div>
        <div className="oganization_signup_footer">
          <h4>Need help signing in?</h4>
          <Link to={"/"} className="oganization_signup_contactUs">
            Contact us
          </Link>
        </div>
      </form>
    </section>
  );
};

export default OrganizationSignUp;
