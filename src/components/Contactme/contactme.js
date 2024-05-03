import React from "react";
import "./contactme.css";
import l from "../../assets/linkedin.png";
import t from "../../assets/twitter.png"
 import g from "../../assets/Github.png"
 import gm from "../../assets/gmail.png"
 import c from "../../assets/call.png"
import { Link } from "react-scroll";

const Contactme = () =>{
    return (
   <section id="contactMe">
   <div className="headline"></div>
     <span className="contactMeTitle">Contact Me</span><br/>
     <span className="contactMeDesc">
You can find my contact details, LinkedIn, GitHub and download my resume through the provided link. Feel free to connect with me via any platform—I'm accessible across all channels.</span><br/>  
     <span className="contactMeDesc1">Looking forward to connecting with you!</span><br/><br/>
     <div className="links">
        <a href="https://www.linkedin.com/in/mrdograg/"><img src={l} alt="linkedin" className="link"/></a>
        <a href="https://github.com/Mrdograg"><img src={g} alt="github" className="link"/></a>
        <a href="https://twitter.com/mrdograg"><img src={t} alt="twitter" className="link"/></a> 
        <a href="mailto:dogra00amit@gmail.com"><img src={gm} alt="gmail" className="link"/></a>
        <a href="tel:+918588022643"><img src={c} alt="number" className="link"/></a><br/><br/>
        </div>
        <a href="https://drive.google.com/file/d/1xmZsUyjsbTJTpgjDLFiN9NGAgNDtIoT2/view?usp=sharing"><button className="btn">Download Resume</button></a>
   </section>
    );
}

export default Contactme;