import React from 'react';
import { NavLink } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
  return (
    <>
        <div className="headerWrapper">
            <NavLink className="logoLink">
                <img src={require("../img/logo-big-pink.png")} alt="LostBnb Logo" />
            </NavLink>

            <nav>
                <NavLink className="headerLink" to="/">
                    Home
                </NavLink>
                <NavLink className="headerLink" to="/about">
                    About
                </NavLink>
                <NavLink className="headerLink" to="/services">
                    Services
                </NavLink>
                <NavLink className="headerLink" to="/price">
                    Price
                </NavLink>
                <NavLink className="headerLink" to="/contact">
                    Contact
                </NavLink>
            </nav>

            <div className="loginLinks">
                <NavLink className="headerLink loginLink" to="/login">
                    Login
                </NavLink>
                <div className="registerLinkBox">
                <NavLink className="headerLink registerLink" to="/register">
                    Register
                </NavLink>
                </div>
            </div>
        </div>
    </>
  )
}
