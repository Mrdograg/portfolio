import React from "react";
import "./intro.css";
import bg from "../../assets/1.png";
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png"

const Intro = () => {
return (
<section id="intro">
    <div className="introContent">
      <span className="hello">Hello,</span>
      <span className="introText">I'm <span className="introName">Amit Dogra</span><br/>Software Developer</span>

      <p className="introPara">With expertise in frontend, backend, and databases, I thrive as a<br/> full-stack developer, particularly passionate about backend<br/> technologies. Delve into my portfolio below to witness my skills.<br/> Click "Get Hire" to employ my services or "Contact Me" to connect.<br/> Your visit is appreciated!</p>
      <Link><button className="btn" onClick={()=>{
            document.getElementById('contactMe').scrollIntoView({behavior: 'smooth'});
         }}><img src={btnImg} alt="Hire" className="btnImg" />Hire Me</button></Link>
    </div>
    <img src={bg} alt="Proflie" className="bg"/>
</section>
);

}

export default Intro;
