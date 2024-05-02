import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png"

const Intro = () => {
return (
<section id="intro">
    <div className="introContent">
      <span className="hello">Hello,</span>
      <span className="introText">I'm <span className="introName">Amit Dogra</span><br/>Software Developer</span>
      <p className="introPara">I am a skilled soft developer sffndgfshgbdfghdfgfgbhgdfbhgdfgbhgdfgdbhgdfgb<br/>hdgdfgbhdgdfgbhdgdfgbhdgdfgbhgdbhgdfgbhdfgh<br/>bdfgdfbhgdfgbhdfbhgdfgbhfgbh</p>
      <Link><button className="btn"><img src={btnImg} alt="Hire" className="btnImg" />Hire Me</button></Link>
    </div>
    <img src={bg} alt="Proflie" className="bg"/>
</section>
);

}

export default Intro;
