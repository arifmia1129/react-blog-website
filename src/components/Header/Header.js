import React from 'react';
import "./Header.css";
import logo from "../../images/logo.png";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='nav'>
            <div className='logo-part'>
                <div>
                    <img width={36} height={36} src={logo} alt="logo" />
                </div>
                <div>
                    <h1 className='name'>
                        Tech Master
                    </h1>
                </div>
            </div>
            <div className='link-container'>
                <NavLink to="/" className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                }>
                    Home
                </NavLink>
                <NavLink to="/videos" className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                }>
                    Videos
                </NavLink>
                <NavLink to="/login" className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                }>
                    Login
                </NavLink>
            </div>
        </div>
    );
};

export default Header;