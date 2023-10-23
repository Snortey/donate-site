import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import { links } from "../data";
import { FaBars } from "react-icons/fa";
import {
  MdOutlineClose,
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
} from "react-icons/md";
import IMG from "../Assets/photo_2023-07-07_22-47-25.jpg";

const profiledata = [
  {
    id: 1,
    nameperson: "Solomon Nortey",
    profileimg: IMG,
  },
];

const LoginNavbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar_container">
        <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
          <span className="donate_logo">Dona.te</span>
        </Link>
        <ul
          className={`navbar_links ${isNavShowing ? "show_nav" : "hide_nav"}`}
          onClick={() => setIsNavShowing((prev) => !prev)}
        >
          {links.map(({ name, path }, index) => (
            <li key={index}>
              <NavLink to={path} activeClassName="active-nav">
                {name}
              </NavLink>
            </li>
          ))}
          <div className="navbar_login_profile" onClick={toggleDropdown}>
            {profiledata.map(({ id, nameperson, profileimg }, index) => (
              <div key={id}>
                <img src={profileimg} alt="" />
                <h5>{nameperson}</h5>

                <div className="dropdown">
                  {isDropdownOpen ? (
                    <MdKeyboardArrowUp className="log-arrowUp" />
                  ) : (
                    <MdKeyboardArrowDown className="log-arrowDown" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </ul>
        {isDropdownOpen && (
          <div className="log_dropDown-list">
            <Link to="/" className="dropdown_item">
              Logout
            </Link>
          </div>
        )}
        <div
          className="nav_toggle-btn"
          onClick={() => setIsNavShowing((prev) => !prev)}
        >
          {isNavShowing ? <MdOutlineClose /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default LoginNavbar;
