import React, { useState, Fragment, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import { links } from "../data";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav class="navbar">
      <div className="navbar_container">
        <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
          {/* <img src={Logo} alt="Nav Logo" /> */}

          <span className="donate_logo"> Dona.te</span>
        </Link>
        <ul
          className={`navbar_links ${isNavShowing ? "show_nav" : "hide_nav"}`}
          onClick={() => setIsNavShowing((prev) => !prev)}
        >
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  exact
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
          <div className="navbar_buttons">
            <NavLink to={"/signin"} className="btn signer">
              Sign In
            </NavLink>
            <NavLink to={"/locations"} className="btn btn-primary">
              Create fund
            </NavLink>
          </div>
        </ul>
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

export default Navbar;
