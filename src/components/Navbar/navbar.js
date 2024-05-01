import React from "react";
import './navbar.css';
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';
import contact from '../../assets/contact.png';

const Navbar =()=>{
    return (
        <nav className="navbar">
         <img src={logo} alt="Logo" className="logo"/>
         <div className="desktopMenu">
            <Link className="desktopMenuListItem">Home</Link>
            <Link className="desktopMenuListItem">About</Link>
            <Link className="desktopMenuListItem">TechStack</Link>
            <Link className="desktopMenuListItem">Projects</Link>

         </div>
         <button className="desktopMenubtn">
            <img src={contact} alt="" className="desktopMenuImg"/> Contact Me </button>         
        </nav>
    )
    }

    export default Navbar;