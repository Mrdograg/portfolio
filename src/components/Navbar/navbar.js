import React, { useState } from "react";
import './navbar.css';
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';
import contact from '../../assets/contact.png';
import menu from '../../assets/menu.png';

const Navbar =()=>{
     const [showMenu, setShowMenu] = useState(false);     
    return (
        <nav className="navbar">
         <img src={logo} alt="Logo" className="logo"/>
         <div className="desktopMenu">
            <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass="active" to="techStack" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">TechStack</Link>
            <Link activeClass="active" to="project" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Projects</Link>
         </div>
         <button className="desktopMenubtn" onClick={()=>{
            document.getElementById('contactMe').scrollIntoView({behavior: 'smooth'});
         }}>
            <img src={contact} alt="" className="desktopMenuImg"/>Contact Me</button>

            <img src={menu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)}/>
         <div className="navMenu" style={{display: showMenu? 'flex' : 'none'}}>
            <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass="active" to="techStack" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>TechStack</Link>
            <Link activeClass="active" to="project" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Projects</Link>
            <Link activeClass="active" to="contactMe" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact Me</Link>
         </div>

        </nav>
    )
    }

    export default Navbar;