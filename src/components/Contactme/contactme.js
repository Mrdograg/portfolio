import React from "react";
import "./contactme.css";
import l from "../../assets/linkedin.png";
import t from "../../assets/twitter.png"
import i from "../../assets/instagram.png"
 import g from "../../assets/Github.png"
 import gm from "../../assets/gmail.png"

const Contactme = () =>{
    return (
   <section id="contactMe">
   <div className="headline"></div>
     <span className="contactMeTitle">Contact Me</span><br/>
     <span className="contactMeDesc">Find all my contact details and profiles, including GitHub and LinkedIn, listed below. Don't hesitate to reach out via any platform.</span><br/>  
     <span className="contactMeDesc1">Looking forward to connecting with you!</span><br/>
     <div className="links">
        <a href="https://www.linkedin.com/in/mrdograg/"><img src={l} alt="" className="link"/></a>
        <a href="https://github.com/Mrdograg"><img src={g} alt="" className="link"/></a>
        <a href="https://www.instagram.com/codie.wolf/"><img src={i} alt="" className="link"/></a>
        <a href="https://twitter.com/mrdograg"><img src={t} alt="" className="link"/></a> 
        <a href="mailto:dogra00amit@gmail.com"><img src={gm} alt="" className="link"/></a>
     </div>
   </section>
    );
}

export default Contactme;